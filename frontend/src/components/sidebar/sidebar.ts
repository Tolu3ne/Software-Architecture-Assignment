const styles = {
    container: {
      display: "flex",
      height: "100vh",
      margin: "0",
      padding: "0",
      overflow: "hidden",
    },
    sidebar: {
      maxwidth: "250px",
      backgroundColor: "#27A4F2",
      color: "white",
      padding: "20px",
      display: "flex",
      flexDirection: "column" as const,
      justifyContent: "space-between",
    },
    logo: {
      fontSize: "20px",
      fontWeight: "bold",
      textAlign: "center" as const,
    },
    nav: {
      display: "flex",
      flexDirection: "column" as const,
      gap: "15px",
    },
    navItem: {
      color: "white",
      textDecoration: "none",
      padding: "10px",
      borderRadius: "5px",
      backgroundColor: "#004A99",
      textAlign: "center" as const,
    },
    backButton: {
      marginTop: "auto",
      padding: "10px",
      backgroundColor: "#FF6B6B",
      border: "none",
      borderRadius: "5px",
      color: "white",
      cursor: "pointer",
      textAlign: "center" as const,
    },
    content: {
      flex: 1,
      padding: "20px",
      backgroundColor: "#F8F9FA",
      overflow: "auto",
    },
};

export default styles;  
  