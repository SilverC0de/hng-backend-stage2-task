## HNG task 2 by Silver

* Endpoint is a POST api https://hjf/math
* Backend is built with expressJs and openAI
* It takes this inputs schema
```json
{ 
    "operation_type": Enum <addition | subtraction | multiplication | *words*>,
    "x": Integer, 
    "y": Integer
}
```
* **operation_type** can also be a text e.g *Hey what's 2 + 2 man?*
* It sends response of status 200 as shown below
```json
{
    "slackUsername": "Silver",
    "result": 4,
    "operation_type": "addition"
}
```
