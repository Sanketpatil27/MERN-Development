<!-- routes: routes are-  /home/profile/... these thing 

accessing values from different types of requests:
req.query.n             = access value of n in query
req.headers['userId']   = access the value of userId from headers
req.params.name         = access name from parameters
req.body.username       = access username from body of post reqeust

route parameters: to make any route dynamic you can use : at the place where you want to make it dynamic and to access there value use req.params.anyValue  (created in middleware_basic.js file)


Middleware: it is a function that runs before each route, means middleware code executes first before routing code.

`app.use(express.json())`      this middleware is required for "post" request to execute
express.json() itself returns the function, we use it coz we don't know which data is sent from 'req.body' it can be either text, html , xml but we only want body in `json` so we use it.

template engine:  Markup style that converts later in html.
many template engines are there, we use ejs, it's very similar to html -->