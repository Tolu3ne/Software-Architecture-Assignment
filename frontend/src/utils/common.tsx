const common: Record<string, any> = {};
const backendRootUrl = process.env.REACT_APP_BACKEND_ROOT_URL;

['get', 'post', 'put', 'delete'].forEach((method) => {
    common[method] = async (url: string, data: any) => {
        let fullUrl = `${backendRootUrl}${url}`;
        const options: RequestInit = {
            method: method.toUpperCase(),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        if (method == 'get' && typeof data == 'object') {
            const params = new URLSearchParams();
    
            // Extract and flatten all properties
            const flattenObject = (obj: Record<string, any>, prefix: string = ''): Record<string, string> => {
                const flattened: Record<string, string> = {};
                
                for (const [key, value] of Object.entries(obj)) {
                    if (value === null || value === undefined) {
                        continue;
                    } else if (typeof value === 'object' && !Array.isArray(value)) {
                        Object.assign(flattened, flattenObject(value));
                    } else {
                        flattened[key] = String(value);
                    }
                }
                
                return flattened;
            };
            
            const flattenedData = flattenObject(data);
            for (const [key, value] of Object.entries(flattenedData)) {
                params.append(key, value);
            }
            
            const queryString = params.toString();
            fullUrl = queryString ? `${fullUrl}?${queryString}` : fullUrl;
            console.log(fullUrl);
        }
        else {
            options.body = JSON.stringify(data);
        }
        const response = await fetch(fullUrl, options);

        if (!response.ok) {
            const errorObj = await response.json();
            throw errorObj;
        }
        return await response.json().then((data: { data: any, success: boolean }) => data.data);
    }
});

export default common;