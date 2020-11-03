# Squire Technical Challenge

## Prerequisites
#### Install dependencies
```
npm install
```

#### Run the project
```
npm start
```

#### Build the project
```
npm run build
```

#### API specification
There are two mocked endpoints available.

##### Available barbers
```text
GET /api/barbers/

Response example:
[
    {
        "id": 1,
        "firstName": "James",
        "lastName": "Richards",
        "photo": "https://via.placeholder.com/150",
        // a list of services that a particular barber serves
        "services": [
            { 
                "id": 1,
                "name": "Buzz Cut",
                "price": 2000,
                "currency": "usd",
                "duration": 75
            }
        ]
    }
]
```

##### Available services
```text
GET /api/services/

Response example:
[
    {
        "id": 1,
        "name": "Buzz Cut",
        "price": 2000, // price in cents
        "currency": "usd",
        "duration": 75, // duration in minutes
    }
]
```

To request an endpoint just make an HTTP request as usual. Here's an example using built-in `fetch`:
```
const response = await fetch('/api/barbers');
const barbers = await response.json();
console.log(barbers); // [{ id: 1, firstName: 'Alex', ... }]
```

## Tech Stack
The only requirement is using React library. You're not restricted in selecting tools you need at all. Install anything that's needed.

## Challenge
Let's imagine that you're building a barbershop booking system.
You need to provide an ability to start booking process by choosing a barber first or choosing a service first.
After that you need to display available barbers or available services according to services that barber provides. 

1. Users should be able to choose what they want to start with: choosing a professional or choosing a service.
2. If user wants to choose a professional, you should show all available professionals. Once a professional is chosen, you should show all services that are provided by the selected professional.
3. If user wants to choose a service, you should show all available services. Once a service is chosen, you should show all professionals that provide the selected service.

A designer provided you with a design for the feature that shows how both flows work.
You can see it [here](https://www.figma.com/file/1kF0YUsZn28IvYX9pW0y4h/Squire-Tech-Challenge). Only one screen size is supported.

## What we expect from the code challenge
* Good software engineering practices are used
* The code is designed and structured as if was a production system

## Submission
1. Create a new branch from `master` branch. Use the following pattern: `YYYY-MM-DD/firstname-lastname`. If Alex Khismatulin would do the challenge on 2020/07/15, the branch would be called `2020-07-15/alex-khismatulin`.
2. Commit your changes once you're done. Push the branch and create a pull request into `master`.
3. Notify the person who gave you the challenge.
