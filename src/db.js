import {AnonymousCredential, RemoteMongoClient, Stitch} from 'mongodb-stitch-browser-sdk'

export const client = Stitch.initializeDefaultAppClient('reesisms-ghvec');

let loggedIn = false;

/**
 * Logs in with the client. Will only attempt login if not already logged in, so this function is safe to call multiple times
 * @returns {Promise<void>}
 */
export async function login() {
    if (!loggedIn) {
        // TODO: handle this error better
        // eslint-disable-next-line no-console
        await client.auth.loginWithCredential(new AnonymousCredential()).catch(err => console.error(err));
        loggedIn = true;
    }

}

export const db = client.getServiceClient(RemoteMongoClient.factory, 'Reesisms-Data').db('data');
