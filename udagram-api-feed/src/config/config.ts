export const config = {
  username: "postgres",
  password: "password",
  database: "postgres",
  host: "tamln2.cl970snglyp4.us-east-1.rds.amazonaws.com",
  dialect: "postgres",
  aws_region: process.env.AWS_REGION,
  aws_profile: {
    AWS_SECRET_ACCESS_KEY: "Zah4fHXysQaG7YORGqD6RLcF3+R7/1dfwU7vXm3j",
    AWS_ACCESS_KEY_ID: "AKIAS54FSHHQPKPC46MW",
  },
  aws_media_bucket: "tamln2-udacity",
  url: process.env.URL,
  jwt: {
    secret: "12345678",
  },
};
