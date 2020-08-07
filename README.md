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
```
GET /api/barbers/

Response example:
[
    {
        "id": 1,
        "firstName": "James",
        "lastName": "Richards",
        "services": [{ id: 1, name: 'Buzz Cut', price: 2000, currency: 'usd' }] // a list of barber services
    }
]
```

##### Available services
```
GET /api/services/

Response example:
[
    {
        "id": 1,
        "name": "Buzz Cut",
        "price": 2000, // price in cents
        "currency": "usd"
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

Here's an example of how it looks on Squire booking platform.
Note, that you don't have to implement the same experience or styling. It can be done 100% the way you want it to be.
You can use router or place everything on one page, create a shiny UI or use default elements, it doesn't matter.

![Squre Booking](./assets/squire-booking.gif)

## Process
1. Create a new branch from `master` branch. Use the following pattern: `YYYY-MM-DD/fistname-lastname`. If Alex Khismatulin would do the challenge on 2020/07/15, the branch would be called `2020-07-15/alex-khismatulin`.
2. Commit your changes once you're done. Push the branch and create a pull request into `master`.
3. Notify the person who gave you the challenge.
