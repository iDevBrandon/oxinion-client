export const backUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.oxinion.com/api"
    : "http://localhost:8800/api";
