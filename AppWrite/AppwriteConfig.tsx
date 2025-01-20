import { Client, Account, ID, Databases } from 'react-native-appwrite';

const client = new Client()
    .setProject('678bfe990005c0b5f1a7')
    .setPlatform('com.iotn5.RNProject');
export const account = new Account(client);
export const database = new Databases(client);