/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {

}

// only 1 default export can run at a time!
export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext) {
		return Response.json({ msg: 'Hello World!' });
	},
};


// -------------------------------------------
// Question - How can I do routing ? 
// In express, routing is done as follows - 
// import express from "express"
// const app = express();

// app.get("/route", (req, res) => {
// 	// handles a get request to /route
// });

// export default {
// 	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
// 		console.log(request.body);
// 		console.log(request.headers);
		
// 		if (request.method === "GET") {
// 			return Response.json({
// 				message: "you sent a get request"
// 			});
// 		} else {
// 			return Response.json({
// 				message: "you did not send a get request"
// 			});
// 		}
// 	},
// };