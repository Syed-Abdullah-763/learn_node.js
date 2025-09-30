// console.log("Hello Node!");

import { log } from "console";
import fs from "fs";

// const createFile = (fileName, content) => {
//   fs.writeFileSync(fileName, content);
// };

// createFile("user.txt", "Hello user");

// const readFile = (fileName) => {
//   const read = fs.readFileSync(fileName, "utf-8");
//   console.log(read);
// };

// readFile("user.txt");

// const updateFile = (fileName, content) => {
//   fs.appendFileSync(fileName, content);
// };

// updateFile("user.txt", "\nHello Again");

// const deleteFile = (fileName) => {
//   fs.unlinkSync(fileName);
// };

// deleteFile("user.txt");

import http, { request } from "http";

// const PORT = 5000;

// const server = http.createServer((request, response) => {
//   console.log(request.url);
//   response.end("Hello Server");
// });

// server.listen(PORT, () => console.log("server is running"));

// const server = http.createServer((request, response) => {
//   if (request.url == "/") {
//     response.end("Home");
//   } else if (request.url == "/about") {
//     response.end("about");
//   } else {
//     response.end("not found");
//   }
// });

// server.listen(PORT, () => console.log("server responding"));

// import express, { response } from "express";
// import { product } from "./product.js";

// const app = express();

// app.get(url , callBack)
// app.get("/", (request, response) => {
//   console.log("request", request.url);
//   response.send("Server Running!");
// });

// app.get("/", (request, response) => {
//   response.send("SERVER RUNNING!");
// });

// app.get("/about", (req, res) => {
//   res.send("About Page");
// });

// app.get("/contact", (req, res) => {
//   res.send("contact page");
// });

// // All product
// app.get("/product", (request, response) => {
//   console.log("request", request.url);

//   response.send(product);
// });

// // Single Prod Api
// app.get("/product/:id", (request, response) => {
//   console.log("request single prod api ", request.url);
//   console.log("request params", typeof request.params.id);
//   const findProduct = product.find((obj) => {
//     // console.log("obj", obj);
//     if (obj.id == request.params.id) {
//       return obj;
//     }
//   });
//   console.log("findProduct", findProduct);

//   if (findProduct) {
//     response.send(findProduct);
//   } else {
//     response.send("Product not Found");
//   }
// });

// app.get("/user", (req, res) => {
//   console.log("query params", req.query);
//   res.send("USER API!");
// });

// app.listen(5000, () => console.log("server running"));

import express, { response } from "express";
import { product } from "./product.js";

const app = express();

const PORT = 3000;

app.get("/", (request, response) => {
  response.send("Server up");
});

app.get("/about", (request, response) => {
  response.send("About page");
});

app.get("/contact", (req, res) => {
  res.send("Contact page");
});

app.get("/product", (req, res) => {
  res.send(product);
});

app.get("/product/:id", (req, res) => {
  const findProduct = product.find((obj) => {
    if (obj.id == req.params.id) {
      return obj;
    }
  });

  if (findProduct) {
    res.send(findProduct);
  } else {
    res.send("not found");
  }
});

app.listen(PORT, () => console.log("server running"));
