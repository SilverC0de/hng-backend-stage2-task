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
    });
    
    //return the answer without any additional text
    return String(compute.data.choices[0].text).replace(/[^0-9]/g, '');
}

module.exports = { compute }