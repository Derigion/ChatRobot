import readlineSync from "readline-sync";
import colors from "colors";
import { addUserMsg } from "./message.js";

export const askQuestion = () => {
  const userInput = readlineSync.question(colors.blue("You: "));
  addUserMsg(userInput)
  return userInput;
};
