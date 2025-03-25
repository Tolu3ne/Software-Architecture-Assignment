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
            const queryString = new URLSearchParams(Object.entries(data).map(([key, value]) => {
                return [key, typeof value === 'object' ? JSON.stringify(value) : String(value)];
            })).toString();
            fullUrl = `${fullUrl}?${queryString}`;
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