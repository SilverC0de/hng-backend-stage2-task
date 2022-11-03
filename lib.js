require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const ai = new OpenAIApi(configuration);


const compute = async (word) => {
    const compute = await ai.createCompletion({
        model: 'text-davinci-002',
        prompt: word,
        temperature: 0,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    
    //return the answer without any additional text
    let answer = compute.data.choices[0].text;


    let answer_array = answer.match(/[0-9]+$/);

    return parseInt(answer_array[0], 10);
}

module.exports = { compute }