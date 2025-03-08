import fs from "fs";
import { google } from "googleapis";

const apikey = JSON.parse(
  fs.readFileSync("./project-hub-442216-006a6104c533.json", "utf8")
);

const CREDENTIALS_PATH = "./project-hub-442216-006a6104c533.json"; // Replace with your path
const scope = ["https://www.googleapis.com/auth/drive.file"];

const jwtClient = new google.auth.JWT(
  apikey.client_email,
  null,
  apikey.private_key,
  scope
);

await jwtClient.authorize();

export default jwtClient;
