import OpenAI from "openai";

interface Options {
    prompt: string;
}

export const prosConDiscussionUseCase = async (openai:OpenAI,{prompt}:Options) => {
    const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
            {
                role: "system",
                content: `Discuss the pros and cons of the promp that user will give u using a markdown bullet list.`
            },
            {
                role: "user",
                content: prompt
            }
        ],
        temperature: 0.8,
        max_tokens: 200
    })
    return {message: response.choices[0].message.content}
}