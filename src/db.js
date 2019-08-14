import {RemoteMongoClient, Stitch} from 'mongodb-stitch-browser-sdk'
import {AnonymousCredential} from "mongodb-stitch-core-sdk";

export const client = Stitch.initializeDefaultAppClient('reesisms-ghvec');

// eslint-disable-next-line no-console
client.auth.loginWithCredential(new AnonymousCredential()).catch(err => console.error(err));

export const db = client.getServiceClient(RemoteMongoClient.factory, 'Reesisms-Data').db('data');
