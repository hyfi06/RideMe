# Ride Me

Progressive Web App as UBER

## Installation

```bash
npm install
```

## Execution

```bash
npm run start
```

## Ride Me API

### Installation API

```bash
npm install
```

### Configuration API

Rename .env.example for .env and fill all in the environment variables.

### Execution API

```bash
npm run start-backend
```

#### Development API

```bash
npm run start-backend:dev
```

### Documentation API

#### Sing-Up

##### Route sign up

POST `/api/auth/sign-up`

##### Body sign up

```json
{
  "first_name": "string",
  "last_name": "string",
  "email": "em@i.l",
  "password": "password"
}
```

#### Sing in

##### Route sign in

POST `/api/auth/sign-in`

##### Authorization sign in

- Basic
- user: email
- password: password

##### Body sign in

```json
{
  "apiKeyToken":"TOKEN"
}
```

#### Create Trip

##### Route create trip

POST `/api/trips`

##### Authorization create Trip

Bearer Token

##### Body create trip

```json
{
  "origin": {"address": "place"},
  "destination": {"address":"place"}
}
```

or

```json
{
  "origin": {"lat": num, "lng": num},
  "destination": {"lat": num, "lng": num}
}
```

##### Return create trip

ObjectId created trip.

#### Read trip

##### Route read trip

GET `/api/trips/:tripId`

##### Authorization read Trip

Bearer Token

##### Return read trip

```json
{
    "data": {
        "_id": ObjectId,
        "userId": ObjectId,
        "origin": {
            "lat": num,
            "lng": num
        },
        "destination": {
            "lat": num,
            "lng": num
        },
        "distanceTrip": {
            "distance": {
                "text": string,
                "value": num
            },
            "duration": {
                "text": string,
                "value": num
            }
        },
        "timeRequest": date,
        "status": string,
        "driverId": ObjectId,
        "driverCoord": {
            "lat": num,
            "lng": num
        },
        "driverArrive": {
            "distance": {
                "text": string,
                "value": num
            },
            "duration": {
                "text": string,
                "value": num
            }
        }
    },
    "message": "trip retrieved"
}
```

#### Read user trip

##### Route read user trip

GET `/api/trips`

##### Authorization read user Trip

Bearer Token

##### Return read user trip

```json
{
    "data": [{
        "_id": ObjectId,
        "userId": ObjectId,
        "origin": {
            "lat": num,
            "lng": num
        },
        "destination": {
            "lat": num,
            "lng": num
        },
        "distanceTrip": {
            "distance": {
                "text": string,
                "value": num
            },
            "duration": {
                "text": string,
                "value": num
            }
        },
        "timeRequest": date,
        "status": string,
        "driverId": ObjectId,
        "driverCoord": {
            "lat": num,
            "lng": num
        },
        "driverArrive": {
            "distance": {
                "text": string,
                "value": num
            },
            "duration": {
                "text": string,
                "value": num
            }
        }
    }, ...],
    "message": "trip user retrieved"
}
```

#### Update user trip

##### Route update user trip

PATCH `/api/trips/:tripId`

##### Authorization update user Trip

Bearer Token

#### Body update user trip

```JSON
{
  "origin": {"address": "place"},
  "destination": {"address": "place"},
  "status": "Cancel | Finish",
}
```
