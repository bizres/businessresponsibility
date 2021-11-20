# Business Responsibility


businessresponsibility.ch is a project to strengthen transparency and democratic control over the human rights performance of Swiss companies.

# Development environment
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
