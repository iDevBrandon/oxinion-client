// export const backUrl =
//   process.env.NEXT_PUBLIC_NODE_ENV === "production"
//     ? "https://api.oxinion.com/api"
//     : "http://localhost:8800/api";

export const backUrl =
  (process.env.NEXT_PUBLIC_NODE_ENV === "development" &&
    "http://localhost:8800/api") ||
  (process.env.NEXT_PUBLIC_NODE_ENV === "production" &&
    "https://api.oxinion.com/api");
