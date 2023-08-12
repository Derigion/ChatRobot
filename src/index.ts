import dotenv from "dotenv";
import ora from 'ora'
import { askQuestion } from "./user.js";
import { initBot, getBotResponse } from "./bot.js";

dotenv.config();
initBot();

const initChat = async () => {
  while (true) {
    const userInput = askQuestion();
    checkExit(userInput);
    ora("Answering, please wait...\r").start()
    await getBotResponse();
  }
};

const checkExit = (userInput: string) => {
  if (userInput === "exit") {
    process.exit();
  }
};

initChat();
