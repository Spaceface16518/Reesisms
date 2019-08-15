import {RemoteMongoClient, Stitch} from 'mongodb-stitch-browser-sdk'
import {AnonymousCredential} from "mongodb-stitch-core-sdk";

export const client = Stitch.initializeDefaultAppClient('reesisms-ghvec');

let loggedIn = false;

/**
 * Logs in with the client. Will only attempt login if not already logged in, so this function is safe to call multiple times
 * @returns {Promise<void>}
 */
export async function login() {
    console.debug('Attempting login');
    if (!loggedIn) { // eslint-disable-next-line no-console
        await client.auth.loginWithCredential(new AnonymousCredential()).catch(err => console.error(err));
        loggedIn = true;
        console.debug('Logged in');
    } else {
        console.debug('Already logged in');
    }

}

export const db = client.getServiceClient(RemoteMongoClient.factory, 'Reesisms-Data').db('data');
