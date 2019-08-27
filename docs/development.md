# Development

## Table of contents

- [Technology stack](#technology-stack)
- [Directory structure](#directory-structure)
- [Git flow as a branching strategy](#git-flow-as-a-branching-strategy)
- [Quality code](#quality-code)
- [Advanced tools](#advanced-tools)

### Technology stack

An application cannot have hard dependencies. Library parties must have licenses to freely combine and distribute products with software. Used third-party dependencies should be well described and tested.

Eenvironment variables must locate into a separate file using default values.

> Each environment variable must be described. If you use a third-party service, you must include a description where you can get the necessary data to use it.

### Directory structure

The directory structure may seems excessive, at first look. Gradually, you'll realize the advantage of splitting logical entities into a several files, as this will make your code easier to maintain.

Recommended file organization:

```text
.
├─ docs/
├─ src/
|  ├─ asserts/
|  ├─ components/
|  ├─ mock-data/
|  ├─ pages/
|  |  └─ homepage/
|  ├─ redux/
|  ├─ styles/
|  |  ├─ fonts/
|  |  ├─ App.css
|  |  └─ favicon.ico
|  ├─ utils/
|  ├─ index.html
|  └─ index.js
├─ test/
├─ .babelrc
├─ .dockerignore
├─ .env.example
├─ .gitignore
├─ Dockerfile
├─ package.json
└─ README.md
```

Root directories:

- `docs` The directory is used to store all application documentation files assigned with  `README.md`.

- `test` The directory is used to store all application tests.

- `.babelrc` Babel configuration file.

```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-runtime"
  ]
}
```

- `.dockerignore` To increase Docker build performance, exclude files and directories. this file is similar to `.gitignore` file, used by  the `Git` tool.

**.gitignore** must including:

```text
# Node modules
node_modules
package-lock.json
yarn.lock

# CVS and environment variables
.env
.git

# The development file
.eslintcache
.nyc_output
dist
docs
coverage
test

# Editor files
.DS_Store
.idea
.pnp
.pnp.js
.vscode
```

- `.env.example` File contains environment variables assigned toprocess.env. Each developer overrides the environment variables in the file `.env`.

- `.gitignore` File containing untracked files,`Git` tool.

**.gitignore** must including:

```text
# Node modules
node_modules
package-lock.json
yarn.lock

# Environment variables
.env.!example
.env

# The development file
.eslintcache
.nyc_output
coverage
dist

# Editor files
.DS_Store
.idea
.pnp
.pnp.js
.vscode

```

- `Dockerfile` The application must run in an isolated container for delivery of `CI` and continuous deployment of `CD`.

- `README.md` Is the software project documentation file. It contains information that is usually required to understand the essence of the project. It is is the easiest way to answer questions that a team may have about how to install and use the application. The most common formatting method is  <[Markdown](https://guides.github.com/features/mastering-markdown/)>.

### Git flow as a branching strategy

At the core, the development model is greatly inspired by existing models out there. The central repo holds two main branches with an infinite lifetime:

- master
- develop

The `master` branch at `origin` should be familiar to every Git user. Parallel to the master branch, another branch exists called `develop`.

We consider `origin/master` to be the main branch where the source code of `HEAD` always reflects a production-ready state.

When the source code in the `develop` branch reaches a stable point and is ready to be released, all of the changes should be merged back into master somehow and then tagged with a release number.

Next to the main branches master and develop, our development model uses a variety of supporting branches to aid parallel development between team members, ease tracking of features, prepare for production releases and to assist in quickly fixing live production problems. Unlike the main branches, these branches always have a limited life time, since they will be removed eventually.

The different types of branches we may use are:

- feature
- release
- hotfix

Each of these branches have a specific purpose and are bound to strict rules as to which branches may be their originating branch and which branches must be their merge targets.

Feature branches (or sometimes called topic branches) are used to `develop` new features for the upcoming or a distant future `release`.

1. Creating a feature branch

`PRJ-001` is a task from the task manager system.

```bash
git checkout -b PRJ-001 develop
```

Or use `git flow` tools:

```bash
git flow feature start PRJ-001
```

2. Write code

Then write code in **index.js** file, example, that does something useful and commit to commit.

```bash
git add index.js
git commit -m 'Release feature'
```

3. Send feature to remote repository

```bash
git push origin feature/PRJ-001
```

References by theme:

- [Guide for Gitflow workflow](https://www.atlassian.com/git/tutorials/comparing-workflows#gitflow-workflow)

- [A successful Git branching model](https://nvie.com/posts/a-successful-git-branching-model)

### Quality code

Any violations of recommendations are allowed if it improves readability.
The main goal of the recommendations is to improve readability and, therefore, the clarity of support, as well as the overall quality of the code.

#### Code style guide

It is recommended to adhere to the following code styles:

- In English [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).
- With translation into Russian  [JavaScript code writing style](https://github.com/uprock/javascript).

#### Promise

It is supposed to use `async/await` instead of `Promise`.

[Asynchronous stack traces: why `await` beats `Promise#then()`](https://mathiasbynens.be/notes/async-stack-traces)

#### CSS

The `font-weight` property should only be the value of` bold` or `normal`.

###### Units

Preferred units `rem`.

### Advanced tools

#### Pixel perfect

We recommend using a browser extension for Google Chrome [PerfectPixel by WellDoneCode](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi). Extension for web developers and markup designers.
PerfectPixel allows developers to put a semi-transparent image overlay over the top of the developed HTML and perform pixel perfect comparison between them.

#### Search by Image

We recommend using a browser extension [Search by Image](https://github.com/dessant/search-by-image). Search by Image is a browser extension which enables you to initiate a reverse image search from the right-click context menu or the browser toolbar. It finds all images positioned in the clicked area, including those declared in CSS. The extension also supports uploading local images and searching for images from private sites. Recommended to use Yandex.Images search engine.
