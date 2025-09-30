import express from "express";

const app = express();
const PORT = 3000;
const userArray = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  response.send("Serer is running");
});

app.get("/getuser", (request, response) => {
  response.send(userArray);
});

app.post("/createuser", (request, response) => {
  userArray.push(request.body);
  response.send("user created!");
});

app.put("/updateuser", (request, response) => {
  response.send("user updated!");
});

app.delete("/deleteuser", (request, response) => {
  response.send("user deleted");
});

app.listen(PORT, () => console.log("server is running"));
