# Business Responsibility

## Project summary

The [businessresponsibility.ch](https://en.businessresponsibility.ch/) is a project to strengthen transparency and democratic control over the human rights performance of Swiss companies.

## Repository information

This repository contains all code and data for building the **frontend**, **backend** and **workflow services** of [businessresponsibility.ch](https://en.businessresponsibility.ch/) web platform.

For the project's background information and the thorough documentation, please visit our [GitHub organization page](https://github.com/bizres).

## Building and running the development environment

Startup all development environment servers with docker-compose:

### Initial build first time

```bash
docker-compose build --no-cache
```

### Running the containers

```bash
docker-compose up
```

### Application

**Frontend**: http://localhost:3000/

**Backend**: http://localhost:1337/admin

### Development configuration

#### Frontend

- Create a file containing the environment variables for development:
```
$:> cat ./frontend/.env.local
AIRTABLE_API_KEY=<ADD_HERE_AIRTABLE_API_KEY>
```

# Production

Building and deploying Docker container images:
...

### Application


**Frontend**: https://bizres.ch/

**Backend**: https://admin.bizres.ch/admin/
