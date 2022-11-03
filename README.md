## HNG task 2 by Silver with AI and Machine Learning capabilities

* Endpoint is a POST api https://hng-backend-stage2-task.vercel.app/math
* Backend is built with expressJs and openAI
* It takes this inputs
```json
{ 
    "operation_type": "addition",
    "x": 2, 
    "y": 22
}
```
or
```json
{ 
    "operation_type": "What is 2 + 22 please",
    "x": null, 
    "y": null
}
```
* **operation_type** can also be a text e.g *Hey what's 2 + 22 ?*
* It sends response of status 200 as shown below
```json
{
    "slackUsername": "Silver",
    "result": 24,
    "operation_type": "addition"
}
```