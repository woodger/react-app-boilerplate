# Environment variables

An environment variable is a dynamic-named value that can affect the way running processes will behave on a application.
Required environment variables contains in `.env.example` file.
React imports environment variables that are defined in a .env file at the root of the project.

### NODE_ENV

When a `React` application is run, it can check the value of the environment variable and do different things based on the value. `NODE_ENV` specifically is used (according to DTAP) to state whether a particular environment is a production or a development environment. A common use-case is running additional debugging or logging code if running in a development environment.

**.env**:

```
NODE_ENV=production
```

### HOST

To start the development server using a different default hostname or IP address. This will start a TCP server listening for connections on the provided host.

**.env**:

```
HOST=localhost
```

### PORT

To use another port, you can run. By default `3000`

**.env**:

```
PORT=3000
```

### API_URL

Host for connect *api service*.

**.env**:

```
API_URL=http://localhost:4000
```
