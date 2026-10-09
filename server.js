

// QUESTION 1

// const http = require("http");
// const server = http.createServer((req, res)=>{
// res.end ("hellooooo");

// })
// server.listen(5000, () => {
//     console.log("server is running on port 5000")
// })

// QUESTION 2

// const http = require("http");

// const server = http.createServer((req, res) => {

//     if (req.method === "GET" && req.url === "/") {
//         res.end("Welcome to Node.js Server");
//     }

// });

// server.listen(5000, () => {
//     console.log("Server is running on port 5000");
// });

// QUESTION 3

// const http = require("http");

// const server = http.createServer((req, res) => {

//     if (req.method === "GET" && req.url === "/") {
//         res.end("Welcome to Node.js Server");
//     }

//     else if (req.method === "GET" && req.url === "/about") {
//         res.end("This is About Page");
//     }

//     else if (req.method === "GET" && req.url === "/contact") {
//         res.end("This is Contact Page");
//     }

// });

// server.listen(5000, () => {
//     console.log("Server is running on port 5000");
// });

// QUESTION 4

// const http = require("http");

// const server = http.createServer((req, res) => {

//     if (req.method === "GET" && req.url === "/") {
//         res.end("Welcome to Node.js Server");
//     }

//     else if (req.method === "GET" && req.url === "/about") {
//         res.end("This is About Page");
//     }

//     else if (req.method === "GET" && req.url === "/contact") {
//         res.end("This is Contact Page");
//     }

//     else {
//         res.statusCode = 404;
//         res.end("404 - Page Not Found");
//     }

// });

// server.listen(5000, () => {
//     console.log("Server is running on port 5000");
// });

// QUESTION 5

// const http = require("http");

// const server = http.createServer((req, res) => {

//     if (req.method === "GET") {
//         res.end("GET request received");
//     }

//     else {
//         res.end("Method Not Allowed");
//     }

// });

// server.listen(5000, () => {
//     console.log("Server is running on port 5000");
// });

// QUESTION 6

// const http = require("http");

// const server = http.createServer((req, res) => {

//     if (req.method === "GET" && req.url === "/") {
//         res.end("Welcome to Home Page");
//     }

//     else if (req.method === "GET" && req.url === "/users") {
//         res.end("Users Page");
//     }

//     else if (req.method === "GET" && req.url === "/products") {
//         res.end("Products Page");
//     }

//     else {
//         res.statusCode = 404;
//         res.end("404 - Page Not Found");
//     }

// });

// server.listen(5000, () => {
//     console.log("Server is running on port 5000");
// });

// QUESTION 7

// const http = require("http");

// const server = http.createServer((req, res) => {

//     if (req.method === "GET" && req.url === "/user") {

//         const user = {
//             id: 1,
//             name: "Raman",
//             age: 22
//         };

//         // res.setHeader("Content-Type", "application/json");

//         res.end(JSON.stringify(user));
//     }

//     else {
//         res.statusCode = 404;
//         res.end("404 - Page Not Found");
//     }

// });

// server.listen(5000, () => {
//     console.log("Server is running on port 5000");
// });

// QUESTION 8

// const http = require("http");

// const users = [
//     {
//         id: 1,
//         name: "riya",
//         age: 10
//     },
//     {
//         id: 2,
//         name: "jiya",
//         age: 10
//     },
//     {
//         id: 3,
//         name: "tiya",
//         age: 10
//     },
//     {
//         id: 4,
//         name: "priya",
//         age: 10
//     },
//     {
//         id: 5,
//         name: "siya",
//         age: 10
//     }
// ];

// const server = http.createServer((req, res) => {

//     if (req.method === "GET" && req.url === "/users") {

//         res.setHeader("Content-Type", "application/json");
//         res.end(JSON.stringify(users));

//     } else {

//         res.statusCode = 404;
//         res.end("404 - page not found");

//     }
// });

// server.listen(5000, () => {
//     console.log("server is running on port 5000");
// });

// QUESTION 9


// const http = require("http");

// const server = http.createServer((req, res) => {
//     const url = new URL(req.url, "http://localhost");

//     if (url.pathname === "/user" && req.method === "GET") {
//         const name = url.searchParams.get("name");

//         res.end(`Hello ${name}`);
//     } else {
//         res.end("Route Not Found");
//     }
// });

// server.listen(3000, () => {
//     console.log("Server running on port 3000");
// });
