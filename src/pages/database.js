import { Client, Databases, Account, Storage, AppwriteException } from "appwrite";

const client = new Client();
const databases = new Databases(client);
const account = new Account(client);
const storage = new Storage(client);
const except = new AppwriteException("Something went wrong", 404)
client
    .setEndpoint(process.env.REACT_APP_ENDPOINT)
    .setProject(process.env.REACT_APP_PROJECT_ID)
    ;

export { databases, account, client, storage, except }
