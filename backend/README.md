# SOLACE Backend

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env` and fill in your environment variables.
3. Start the server:
   ```bash
   npm run dev
   ```

## Scripts
- `npm run dev` – Start in development mode
- `npm start` – Start in production mode
- `npm test` – Run tests

## Folder Structure
- `src/models` – Mongoose schemas
- `src/controllers` – Route logic
- `src/routes` – Express routes
- `src/middleware` – Auth, logging, validation
- `src/utils` – Helpers

## API
See [API documentation](../docs/api.md) for endpoints.