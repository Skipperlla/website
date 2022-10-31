export const baseApiUrl: string =
  process.env.NODE_ENV === "production"
    ? "https://api.example.com"
    : "http://localhost:3000";
