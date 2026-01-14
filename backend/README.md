# package-manager-backend

A robust, Node.js and Express.js backend service for the package-manager application. Built with TypeScript for type safety and scalability, utilizing native Node.js modules for maximum performance and minimal dependencies.

## Features

- **Node.js Server**: Built using Express.js for structured, scalable, and maintainable HTTP handling.
- **TypeScript**: Fully typed codebase for better developer experience and code quality.
- **Environment Configuration**: Uses `dotenv` for secure environment variable management.
- **Modern ESM**: Configured as an ECMAScript Module (ESM) project.

## Prerequisites

- **Node.js**: v20.0.0 or higher
- **npm**: v10.0.0 or higher

## Installation

1. **Install dependencies:**
    ```bash
    npm install
    ```

2. **Configure environment:**
    Copy the example environment file and adjust as needed.
    ```bash
    cp .env.example .env
    ```
    *Edit `.env` to set your `PORT` and other variables.*

## Running the Server

### Development Mode
Runs the server with hot-reloading using `nodemon`.
```bash
npm run dev
```

### Production Build
Compiles the TypeScript code to JavaScript in the `dist` directory.
```bash
npm run build
```

### Start Production Server
Runs the compiled JavaScript code.
```bash
npm start
```

