# businessresponsibility: frontend / backend / workflow

## Project summary

The [businessresponsibility.ch](https://en.businessresponsibility.ch/) is a project to strengthen transparency and democratic control over the human rights performance of Swiss companies.

<p align="center">
<img src="https://user-images.githubusercontent.com/5593131/153625662-bf233507-027a-4a49-af27-b34ec2894c77.png" height="600"/>
&nbsp;&nbsp;&nbsp;&nbsp;
<img src="https://user-images.githubusercontent.com/5593131/153630590-5ce447c2-e939-44e2-a3ad-25054ac5c377.png"  height="600" />
</p>


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
