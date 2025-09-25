// console.log("Hello Node!");

import { log } from "console";
import fs from "fs";

const createFile = (fileName, content) => {
  fs.writeFileSync(fileName, content);
};

createFile("user.txt", "Hello user");

const readFile = (fileName) => {
  const read = fs.readFileSync(fileName, "utf-8");
  console.log(read);
};

readFile("user.txt");

const updateFile = (fileName, content) => {
  fs.appendFileSync(fileName, content);
};

updateFile("user.txt", "\nHello Again");

const deleteFile = (fileName) => {
  fs.unlinkSync(fileName);
};

deleteFile("user.txt");
