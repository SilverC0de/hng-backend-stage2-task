const express = require('express')
const { compute } = require('./lib')
const api = express()

api.use(express.urlencoded({ extended: true }));
api.use(express.json({ limit: '10mb' })); // limit all JSON size to 10MB



api.get('/', (request, response) => {
    response.status(200).send('HNG task 2 arithmetic system is running')
})

api.post('/math', async (request, response) => {
    let operation = String(request.body.operation_type).toLowerCase();
    let x = parseFloat(request.body.x);
    let y = parseFloat(request.body.y);
    

    try {
        //check the operation
        if(operation == 'addition' || operation == 'subtraction' || operation == 'multiplication' || operation == 'division'){
            let result;

            //validate the input 
            if(operation == undefined || x == undefined || y == undefined){
                return response.sendStatus(406)
            }

            if(operation == 'addition') result = Math.round(x + y);
            if(operation == 'subtraction') result = Math.round(x - y);
            if(operation == 'multiplication') result = Math.round(x * y);
            if(operation == 'division') result = parseFloat(x / y).toFixed(2);

            response.status(200).json({
                slackUsername: 'Silver',
                result: result,
                operation_type: operation
            })
        } else {
            // process words lol
            // look for arithmetic texts
            // get the first number
            //get the second number

            let answer = await compute(operation) //run openAI model on the word

            response.status(200).json({
                slackUsername: 'Silver',
                result: parseFloat(answer),
                operation_type: operation
            })
        }
    } catch (e) {
        console.log(e.message)
        response.status(500).send('Unable to compute arithmetic operation')
    }
})

//for endpoints that are not valid
api.all('*', (request, response) => {
    response.status(404).send('Not a valid route, try the endpoint without any path')
});


api.listen(8080, ()=> {
    console.log(`Server running on port 8080`)
})