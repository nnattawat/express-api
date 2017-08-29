Create server application with express where it hosts few RESTful APIs

## Running application
```bash
# Install packages
npm install

# Create Postgres database
createdb express_database_development

# Migrate database
node_modules/.bin/sequelize db:migrate

# Start local server
DEBUG=express-locallibrary-tutorial:* npm run devstart
```

## Getting data from API

Using the following endpoints to get data

```
# List of users
http://localhost:3000/api/users

# User
http://localhost:3000/api/users/1

# List of user's task
http://localhost:3000/api/users/1/tasks

# User's task
http://localhost:3000/api/users/1/tasks/1
```

You can also post data into endpoints as well
```
http://localhost:3000/api/users
http://localhost:3000/api/users/1/tasks
```
