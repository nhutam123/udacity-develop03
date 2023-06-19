export const config = {
  username: "postgres",
  password: "password",
  database: "postgres",
  host: "tamln2.cl970snglyp4.us-east-1.rds.amazonaws.com",
  dialect: "postgres",
  aws_region: process.env.AWS_REGION,
  aws_profile: process.env.AWS_PROFILE,
  aws_media_bucket: "tamln2-udacity",
  url: process.env.URL,
  jwt: {
    secret: "12345678",
  },
};
