import dotenv from "dotenv";
import ora from "ora";
import { askQuestion } from "./user.js";
import { initBot, getBotResponse } from "./bot.js";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

dotenv.config({
  path: resolve(dirname(fileURLToPath(import.meta.url)), "../.env")
});
initBot();

const initChat = async () => {
  while (true) {
    const userInput = askQuestion();
    checkExit(userInput);
    const loading = ora("Answering, please wait...\r").start();
    await getBotResponse();
    loading.clear();
  }
};

const checkExit = (userInput: string) => {
  if (userInput === "exit") {
    process.exit();
  }
};

initChat();
