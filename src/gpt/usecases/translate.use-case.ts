import OpenAI from "openai";

interface Options {
    prompt: string;
    lang: string;
}

export const translateUseCase = async (openai:OpenAI,{prompt,lang}:Options) => {
    const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
            {
                role: "system",
                content: `Translate the following text to ${lang}: ${prompt}`
            },
            {
                role: "user",
                content: prompt
            }
        ],
        temperature: 0.2,
    })
    return {message: response.choices[0].message.content}
}
