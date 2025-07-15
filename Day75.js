//! ✅ 1. Create a REST-like API using the http module
//! Question:
//? Create a simple HTTP server using the http module that supports:
//? GET /users → returns a hardcoded list of users in JSON.
//? POST /users → receives JSON from request body and logs it.
//? Hint: You’ll need to manually parse the request body and handle routes.
const http = require("http");
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "users.json");

const server = http.createServer((req, res) => {
  if (req.url === "/users" && req.method === "GET") {
    // Serve HTML form
    fs.readFile(
      path.join(__dirname, "/html", "/input.html"),
      "utf-8",
      (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    );
  } else if (req.url === "/users".toLowerCase() && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const params = new URLSearchParams(body);
      console.log(params);
      const name = params.get("name");
      const email = params.get("email");
      fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
          console.log("error", err);
        } else {
          let users = [];
          users = JSON.parse(data);
          users.push({ id: Date.now(), name, email });
          console.log(users);
          fs.writeFile(filePath, JSON.stringify(users), (err) => {
            if (err) {
              res.writeHead(500, { "Content-Type": "text/plain" });
              return res.end("Failed to save user.");
            }

            res.writeHead(302, { Location: "/users" });
            res.end(); // Redirect back to the form
          });
        }
      });
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});
server.listen(4000, () => {
  console.log("server running");
});
