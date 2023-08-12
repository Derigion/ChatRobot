import {ChatCompletionRequestMessage } from 'openai'

// 保存聊天记录
export const msgs: ChatCompletionRequestMessage[] = [];

export const addMsg = (msg: ChatCompletionRequestMessage) => {
    msgs.push(msg);
}

export const addUserMsg = (content: string | undefined) => {
    addMsg({
        role: 'user',
        content: content
    })
}

export const addBotMsg = (content: string | undefined) => {
    addMsg({
        role: 'assistant',
        content: content
    })
}