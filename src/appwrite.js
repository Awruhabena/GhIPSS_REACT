import { Client, Account } from "appwrite";

const DATABASE_ID =  import.meta.env.VITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_COLLECTION_ID;
const PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
const API_ENDPOINT = 'https://fra.cloud.appwrite.io/v1';

const client = new Client ()
   .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject(PROJECT_ID);

export const account = new Account (client)