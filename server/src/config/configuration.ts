export default () => ({
  host: process.env.HOST || "localhost",
  port: parseInt(process.env.PORT, 10) || 3001,
  google: {
    client: {
      id:
        process.env.GOOGLE_CLIENT_ID ||
        "94304976094-rmd2qdhg1k2evntfs9jk4cdoae91r5l9.apps.googleusercontent.com",
      secret: process.env.GOOGLE_CLIENT_SECRET || "YqBvBZSizLlCtGe_-s1bpUBk",
    },
    redirectUrl:
      process.env.GOOGLE_REDIRECT_URL || "http://localhost:8090/confirm-login",
  },
  accessTokenSecret:
    process.env.ACCESS_TOKEN_SECRET || "YqBvBZSizLlCtGe_-s1bpUBk",
  accessTokenLife: parseInt(process.env.ACCESS_TOKEN_LIFE, 10) || "30m",
  database: {
    connectionString:
      "mongodb+srv://user:qwe123@price.4u3x7.mongodb.net/dictionary?retryWrites=true&w=majority",
  },
});
