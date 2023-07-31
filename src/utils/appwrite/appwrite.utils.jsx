import { Client, Databases, Account, Storage, ID } from "appwrite";

const client = new Client();
const databases = new Databases(client);
const account = new Account(client);
const storage = new Storage(client);


client
    .setEndpoint(process.env.REACT_APP_ENDPOINT)
    .setProject(process.env.REACT_APP_PROJECT_ID)


export const createUser = async (email, password, name) => {
    return await account.create(ID.unique(), email, password, name)
}

export const loginUser = async (email, password) => {
    return await account.createEmailSession(email, password);
}

export const getDocuments = async () => {
    return await databases.listDocuments(process.env.REACT_APP_DATABASE_ID, process.env.REACT_APP_COLLECTION_ID)
}

export const getDoc = async (documentID) => {
    return await databases.getDocument(process.env.REACT_APP_DATABASE_ID, process.env.REACT_APP_COLLECTION_ID, documentID);
}
