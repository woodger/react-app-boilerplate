# Pipeline

## Directory structure

The directory structure may seems excessive, at first look. Gradually, you'll realize the advantage of splitting logical entities into a several files, as this will make your code easier to maintain.

Recommended file organization:

```
.
├─ docs/
├─ src/
|  ├─ components/
|  ├─ containers/
|  ├─ pages/
|  ├─ redux/
|  ├─ static/
|  ├─ styles/
|  └─ utils/
├─ test/
├─ .babelrc
├─ .env.example
├─ .gitignore
├─ Dockerfile
├─ package.json
└─ README.md
```

Root directories:

- `docs` The directory is used to store all application documentation files assigned with  `README.md`.
- `test` The directory is used to store all application tests.
- `.gitignore` File containing untracked files,`Git`.

**.gitignore** must including:

```
# Node modules
node_modules
package-lock.json
yarn-debug.log
yarn-error.log

# Environment variables
.env.!example
.env

# The development file
database/sqlite.mmdb
.eslintcache
.nyc_output
build
coverage
dist
logs

# Editor files
.DS_Store
.idea
.pnp
.pnp.js
.vscode

```

- `.env.example` file contains environment variables assigned toprocess.env. Each developer overrides the environment variables in the file `.env`.
- `Dockerfile` The application must run in an isolated container for delivery of `CI` and continuous deployment of `CD`.
- `README.md` is the software Project Documentation File. It contains information that is usually required to understand the essence of the project. It is is the easiest way to answer questions that a team may have about how to install and use the application. The most common formatting method is  <[Markdown](https://guides.github.com/features/mastering-markdown/)>

## Quality code

Any violations of recommendations are allowed if it improves readability.
The main goal of the recommendations is to improve readability and, therefore, the clarity of support, as well as the overall quality of the code.

Code Style Guide:

- In English [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).
- With translation into Russian  [JavaScript code writing style](https://github.com/uprock/javascript).
