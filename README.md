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

#### Routes

| Route | Description |
|-|-|
|`/api/drivers` | List all drivers |
|`/api/drivers/near`| List drivers nearby. Require query `lat` and `lng` |
