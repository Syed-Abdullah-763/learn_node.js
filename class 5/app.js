import express from "express";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/createuser", (request, response) => {
  const userExistance = fs.existsSync("user.txt");
  const body = { ...request.body, id: uuidv4() };

  if (userExistance) {
    const userData = JSON.parse(fs.readFileSync("user.txt", "utf-8"));

    for (const obj of userData) {
      if (obj.email === body.email) {
        response.json({ message: "enter unique email address" });
        return;
      }
    }

    userData.push(body);
    fs.writeFileSync("user.txt", JSON.stringify(userData));
  } else {
    const arr = [];
    arr.push(body);
    fs.writeFileSync("user.txt", JSON.stringify(arr));
  }

  response.json({
    message: "user created successfully",
  });
});

app.get("/getuser", (request, response) => {
  const userApi = JSON.parse(fs.readFileSync("user.txt", "utf-8"));

  response.json({
    userApi,
  });
});

app.put("/updateuser/:id", (request, response) => {
  const userId = request.params.id;
  const allUser = JSON.parse(fs.readFileSync("user.txt", "utf-8"));

  const updatedUsers = allUser.map((obj) => {
    if (obj.id == userId) {
      return { ...obj, ...request.body };
    } else {
      return obj;
    }
  });

  fs.writeFileSync("user.txt", JSON.stringify(updatedUsers));

  response.json({
    message: "user updated",
  });
});

app.delete("/deleteuser/:id", (request, response) => {
  const userId = request.params.id;
  const allUsers = JSON.parse(fs.readFileSync("user.txt", "utf-8"));

  const userIndex = allUsers.findIndex((obj) => {
    if (obj.id == userId) return obj;
  });

  if (userIndex == -1) {
    return response.json({ message: "User Not Found" });
  }

  allUsers.splice(userIndex, 1);
  fs.writeFileSync("user.txt", JSON.stringify(allUsers));

  response.json({ message: "user deleted!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
