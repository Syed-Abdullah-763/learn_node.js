import http from "http";
import fs from "fs";
import { log } from "console";

const PORT = 3000;

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.end("Server Up");
      break;

    case "/createuser":
      fs.writeFileSync(
        "userFile.txt",
        JSON.stringify({
          name: "abdullah",
          email: "abdullah@gmail.com",
        })
      );

      res.end("user created");
      break;

    case "/getuser":
      const user = fs.readFileSync("userFile.txt", "utf-8");
      res.end(user);
      break;
  }
});

server.listen(PORT, () => console.log("server is responding"));
