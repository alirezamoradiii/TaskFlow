import { registerAs } from "@nestjs/config";

export default registerAs('appConfig', () => ({
  port: process.env.PORT,
  db_port: process.env.POSTGRES_PORT,
  db_user: process.env.POSTGRES_USER,
  db_password: process.env.POSTGRES_PASS
}));