# [CO3017] Software Architecture Assignment

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Local Database setup
In order to setup the database to run locally, first create a .env file with this property
```bash
$ DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
```
Modify this URL according to your database (PostgreSQL, MySQL, or SQLite). Replace `mydb` with your database name.

Then run the following commands:
```bash
# Create the necessary tables in the database and apply the schema changes.
$ npx prisma migrate dev --name init

# Generate prisma client code from database schema
$ npx prisma generate
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Resources

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.

