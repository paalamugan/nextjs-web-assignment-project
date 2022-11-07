#  Web OAuth Project

🚀 Web OAuth ⚡️ Using with Next.js, TypeScript, ChakraUI, Google OAuth, Next Auth, ESLint, Prettier, Husky, Lint-Staged, Jest, Testing Library, Commitlint, VSCode, Netlify, SCSS.

### Features

Developer experience first:

- ⚡ [Next.js](https://nextjs.org) for Static Site Generator
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- ✅ Strict Mode for TypeScript and React 18
- 📏 Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals, Tailwind CSS and Airbnb configuration)
- 💖 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🚓 Lint git commit with Commitlint
- 📓 Write standard compliant commit messages with Commitizen
- 🦺 Unit Testing with Jest and React Testing Library
- 🧪 E2E Testing with Cypress
- 💡 Absolute Imports using `@` prefix
- 🗂 VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript, Jest
- 🤖 SEO metadata, JSON-LD and Open Graph tags with Next SEO
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- 🖱️ One click deployment with Vercel or Netlify (or manual deployment to any hosting services)
- 🌈 Include a FREE minimalist theme
- 💯 Maximize lighthouse score

Built-in feature from Next.js:

- ☕ Minify HTML & SCSS
- 💨 Live reload
- ✅ Cache busting

### Philosophy

- Minimal code
- SEO-friendly
- 🚀 Production-ready

### Requirements

- Node.js 14+ and yarn 1.22+ (or npm 6+)

### Environment Variables

### Getting started

Run the following command on your local environment:

```shell
git clone https://github.com/paalamugan/nextjs-web-oauth-project.git
cd nextjs-web-oauth-project
yarn install
```

**Environment configuration before we run the application**

- Option 1

  - Create `.env.local` file in the root directory and add the following environment variables:

  ```shell
  SITE_URL=http://localhost:3000 # http://localhost:3000
  REGRES_API_BASE_URL=https://reqres.in/api # https://reqres.in/api
  NEXTAUTH_SECRET=secret # random string
  JWT_SECRET_KEY=secret # random string
  NEXTAUTH_DEBUG=false # true or false
  MONGODB_URI=mongodb://admin:adminpassword@localhost:27017/web-oauth # mongodb://admin:adminpassword@localhost:27017/web-oauth
  GOOGLE_CLIENT_ID=<replace-your-google-client-id> # google client id
  GOOGLE_CLIENT_SECRET=<replace-your-google-client-secret> # google client secret
  ```

- Option 2 

  - Copy .env.example to .env.local and replace the values like above.

  ```shell
  cp -rf .env.example .env.local
  ```

**Make sure you have MongoDB installed and running on your local environment.**

- If not then, please use the below command to run mongodb server before run the `yarn dev`.

```shell
  docker-compose up -d web-oauth-mongodb
```

Then, you can run locally in development mode with live reload:

```shell
yarn dev
```

Open http://localhost:3000 with our favorite browser to see our project.

### Run on application using docker-compose cli(Optional)

Before run the below command, We need to have docker installed in our local machine, if not please install it from [here](https://docs.docker.com/get-docker/).

```shell
  docker-compose up -d
```

- Run Docker Compose with our custom environment file path using below command, by default it will use `.env` file or environment variables that we used inside `docker-compose.yml` file.

```shell
docker-compose --env-file .env.local up -d
```


### Folder Structure

```shell
.
├── README.md                       # README file
├── __mocks__                       # Mocks for testing
├── .github                         # GitHub folder
├── .husky                          # Husky configuration
├── .vscode                         # VSCode configuration
├── public                          # Public assets folder
├── cypress                         # Cypress folder e2e testing
├── db                              # Init db configuration for docker-compose.yml
├── msw                             # Mock Service Worker folder
├── src
│   ├── __tests__                   # Unit tests folder
|   ├── api-helper                  # API helper folder
│   ├── components                  # React components folder
│   ├── constants                   # Constants folder
│   ├── error-handlers              # Error handlers folder
│   ├── hooks                       # React hooks folder
│   ├── icons                       # Icons folder
│   ├── layouts                     # Layouts components
│   ├── lib                         # Library folder
│   ├── page-components             # Nextjs Page components folder
│   ├── pages                       # Next JS Pages
│   ├── pages.test                  # Next JS Pages tests (this avoid test to treated as a Next.js pages)
│   ├── providers                   # Providers folder
│   ├── redux                       # Redux folder
│   ├── styles                      # Global SCSS Styles folder
│   ├── templates                   # Default template
│   └── utils                       # Utility functions
├── test-utils                      # Test utils folder
├── typings                         # Additional Typescript typings
├── .env.example                    # Environment variables example
├── .eslintrc                       # ESLint configuration
├── Dockerfile                      # Dockerfile for production
├── docker-compose.yml              # Docker compose configuration
├── commitlint.config.js            # Commitlint configuration
├── cypress.config.js               # Cypress configuration
├── tailwind.config.js              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```

### Deploy to production

You can see the results locally in production mode with:

```shell
yarn build
yarn start
```

Dockerfile is available for production deployment. You can build the image with:

```shell
docker build -t web-oauth-app:latest .
```

You can create an optimized production build with:

```shell
yarn build-prod
```

Now, Our app is ready to be deployed. All generated files are located at `out` folder, which you can deploy with any hosting service.

### Testing

All tests are co-located with the source code inside the same directory. So, it makes it easier to find them. Unfortunately, it is not possible with the `pages` folder which is used by Next.js for routing. So, what is why we have a `pages.test` folder to write tests from files located in `pages` folder.

### Deploy to Vercel

Deploy this Web OAuth on Vercel in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/paalamugan/nextjs-web-oauth-project)

### VSCode information (optional)

If you are VSCode users, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. The starter code comes up with Settings for a seamless integration with VSCode. The Debug configuration is also provided for frontend and backend debugging experience.

With the plugins installed on your VSCode, ESLint and Prettier can automatically fix the code and show you the errors. Same goes for testing, you can install VSCode Jest extension to automatically run your tests and it also show the code coverage in context.

Pro tips: if you need a project wide type checking with TypeScript, you can run a build with <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> on Mac.

### Tips

- Generate base64 secret key with below command
```sh
openssl rand -base64 32
```

