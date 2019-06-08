# Environment variables

An environment variable is a dynamic-named value that can affect the way running processes will behave on a application.
Required environment variables contains in `.env.example` file.
React imports environment variables that are defined in a .env file at the root of the project.

### WEB_URL

To start the development server using a different default hostname or IP address. This will start a TCP server listening for connections on the provided host.

**.env**:

```
WEB_URL=http://localhost3000
```

### API_URL

Host for connect *api service*.

**.env**:

```
API_URL=http://localhost:4000
```
