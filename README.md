#NLW04 ROCKETSEAT

## About

This is a solution created with node and typescript in event NLW of Rocketseat, this solution implement an aplication for calculate NPS.

## Mvp Aplication

-   [Functional Requirement]

-   [List all surveys]
-   [Create survey]
-   [Create user]
-   [Send Mail with survey created and user]
-   [Calculate NPS]

*   [Non-Functional Requirement]

*   [Sqlite]
*   [NodeJs and typescript]
*   [express]
*   [Jest]


## Requirements

    - [Sqlite, NodeJs, Jest, Typescript ]

## Run

    -[npm install]
    -[npm run dev]
    or
    -[yarn]
    -[yarn dev]

# NLW04 ROCKETSEAT

## About

This is a solution created with node and typescript in event NLW of Rocketseat, this solution implement an aplication for calculate NPS.

## Mvp Aplication

-   [Functional Requirement]

-   [List all surveys]
-   [Create survey]
-   [Create user]
-   [Send Mail with survey created and user]
-   [Calculate NPS]

*   [Non-Functional Requirement]

*   [Sqlite]
*   [NodeJs and typescript]
*   [express]
*   [Jest]


## Requirements

    - [Sqlite, NodeJs, Jest, Typescript ]

## Run

    -[npm install]
    -[npm run dev]
    or
    -[yarn]
    -[yarn dev]
## Routes
    -[http://localhost:3333/users] - POST
        -[{
            "name": "Example",
            "email": "example@example.com.br"
         }]
         
    -[http://localhost:3333/surveys] - POST
        -[{
            "title": "Example",
            "description": "example"
         }]
         
    -[http://localhost:3333/surveys] - GET
        -[List surveys]
         
    -[http://localhost:3333/sendMail] - POST
        -[{
            "email": "example@example.com.br",
            "survey_id": "1"
         }]
         
    -[http://localhost:3333/answers/{value}?=u={survey_user_id}] - GET
        -[No body]
         
    -[http://localhost:3333/nps/{survey_id}] - GET
        -[No body]
    
