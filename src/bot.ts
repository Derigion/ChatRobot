import { Configuration, OpenAIApi, ChatCompletionRequestMessage } from "openai";
import colors from "colors";
import { msgs, addBotMsg } from "./message.js";

let openAi: OpenAIApi;

export const initBot = () => {
  openAi = new OpenAIApi(
    new Configuration({
      basePath: "https://api.chatanywhere.com.cn/v1",
      apiKey: process.env.OPEN_API_KEY,
    })
  );
};

export const getBotResponse = async () => {
  const chatCompletion = await openAi.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: msgs,
  });

  const answer = chatCompletion.data.choices[0].message?.content;
  addBotMsg(answer)

  console.log(colors.green("chatRobot: "), answer);
};
