## FirstData Node.js Project

#### **Endpoints**
* /api/v1/parse (POST)
* /api/v2/parse (POST)

#### Sample Request
`{
    data: "JOHN0000MICHAEL0009994567"
}`

#### Sample Response
* /api/v1/parse
`{
    statusCode: 200,
    data:  {
        firstName: “JOHN0000”,
        lastName: “MICHAEL000”,
        clientId: “9994567”
    }
}
`

* /api/v2/parse
`{
    statusCode: 200,
    data:  {
        firstName: “JOHN”,
        lastName: “MICHAEL”,
        clientId: “999-4567”
    }
}
`