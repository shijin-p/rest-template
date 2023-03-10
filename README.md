# rest-template

This is a Node.js fastify REST API service

## Prerequisite
1. Node.js 18.13.0+ (Install node using nvm only)
2. Code editor (vscode)

### Note:
1. Using es-module
2. Uses pnpm
   To add a dependency say mongodb, use (Save to dependencies)

   ```bash
   pnpm add mongodb
   ```
   To add a dev dependency say standard, use (Save to devDependencies)
   ```bash
   pnpm add -D standard
   ```
3. Using fastify cli to run the app and not node, reason being to make use of better error handling capability of fastify
4. Uses mongodb as a primiary database, redis will be introduced.
5. Mongodb will be switched (or made optional) with scylladb (2023 2nd Quarter)

## How to run
1. Create env file and add corresponding values
   ```bash
   cp .env.template .env
   ```
2. Install dependecies
   ```bash
   pnpm install
   ```
3. Start the app
   ```bash
   pnpm start
   ```

## Documentation
Using swagger docs. Api documentaion is available in /documentation in non production environment. For eg, for accessing documentation in local environment, check
http://localhost:3000/documentation

## Ref
1. https://www.fastify.io/
2. https://www.fastify.io/docs/latest/Guides/Plugins-Guide/
3. https://github.com/delvedor/fastify-example
4. https://github.com/nvm-sh/nvm
5. https://pnpm.io/
6. https://pnpm.io/pnpm-cli