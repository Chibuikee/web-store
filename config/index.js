const dev = process.env.NODE_ENV === "development";
//get the environment variable to use in prefixing fetch url
export const server = dev
  ? "http://localhost:3000"
  : "https://musknet.vercel.app/";
