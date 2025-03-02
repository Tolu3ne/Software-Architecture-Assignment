const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "white",
  },
  contentWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "50px",
    width: "100%",
    maxWidth: "900px",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    maxWidth: "400px",
  },
  content: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center" as const,
    padding: "20px",
    backgroundColor: "white",
    width: "350px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: "15px",
  },
  button: {
    padding: "15px",
    fontSize: "18px",
    backgroundColor: "#004A99",
    color: "white",
    borderRadius: "5px",
    textDecoration: "none",
    textAlign: "center" as const,
    width: "80%",
  },
};

export default styles;
