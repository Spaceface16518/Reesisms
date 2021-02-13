import { Client, query as q } from "faunadb";

class QueryManager {
	private readonly bootstrapToken: string;
	private client: Client;

	constructor(token?: string) {
		const bootstrap = token || process.env.ANON_KEY;
		if (!bootstrap) {
			throw new Error("No bootstrap token found");
		}
		this.bootstrapToken = bootstrap;
		this.client = new Client({
			secret: token || this.bootstrapToken,
		});
	}

	public createQuote(quote: string) {
		const query = q.Call(q.Function("create_quote"), quote);
		return this.client.query(query);
	}

	public likeQuote(quoteRef: string) {
		const query = q.Call(q.Function("like_quote"), quoteRef);
		return this.client.query(query);
	}

	// TODO: searchQuotes

	public register(name: string, password: string) {
		const query = q.Call(q.Function("register_user"), name, password);
		return this.client.query(query);
	}

	public login(name: string, password: string) {
		const query = q.Call(q.Function("login_user"), name, password);
		return this.client.query(query);
	}

	public logout() {
		const query = q.Logout(true);
		return this.client.query(query);
	}

	public getAllQuotes(limit: number = 10, after: string[] = []) {
		const query = q.Call(q.Function("get_all_quotes"), limit, after);
		return this.client.query(query);
	}

	public getQuote(ref: string) {
		const query = q.Call(q.Function("get_quote"), ref);
		return this.client.query(query);
	}

	// TODO: updateUser
}

const db = new QueryManager();

export { db, QueryManager };
