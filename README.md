# React app boilerplate

##### [Development](docs/development.md) | [Environment variables](docs/environment-variables.md)

## Getting Started

[Node.js®](https://nodejs.org/) application, implemented by following the [ECMAScript® 2018 Language Specification
](https://www.ecma-international.org/ecma-262/9.0/index.html) standard.

The set of environments used for a `DTAP`:

- [x] development
- [x] testing
- [ ] acceptance
- [x] production

You will first need to set the [environment variables](docs/environment-variables.md).

### Development

Runs the app in development mode and go to http://localhost:3000

```bash
npm install
npm run dev
```

The page will automatically reload if you make changes to the code.
You will see the build errors and lint warnings in the terminal.

### Testing

To run the test user interface in `testing` environments:

```bash
npm install
npm test
```

### Production

To build application in `production` environments, run:

```bash
npm install --production
npm run build
```
