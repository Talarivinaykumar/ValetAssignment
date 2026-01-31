# Valet Mobile Assignment

This repository contains the mobile application and backend for the Valet assignment.

## Project Structure

- `valetmobile/` - React Native Application
- `backend/` - Flask Backend Service

## Prerequisites

- Node.js & npm
- Python 3 & pip
- Android Studio / Emulator

## Setup Intructions

### 1. Backend

1.  Navigate to the backend directory:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    pip install flask flask-cors
    ```
3.  Run the server:
    ```bash
    flask --app app run
    ```
    The server will start on `http://127.0.0.1:5000`.

### 2. Mobile App

1.  Navigate to the app directory:
    ```bash
    cd valetmobile
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run on Android:
    ```bash
    npm run android
    ```

## Development Notes

### API Connection
The app is currently configured to use **DummyJSON** (`https://dummyjson.com`) to satisfy the assignment requirement for "Mock APIs".

- **Base URL**: `https://dummyjson.com`
- **Endpoints Used**:
  - `GET /products`
  - `GET /products/<id>`
  - `POST /products/add`

**Note**: Since we are using a public mock API, creating a new product is simulated. The API returns a success response, but the new item **will not actually persist** in the product list on refresh.

To switch to the local Flask backend:
1. Edit `src/services/apiClient.js`.
2. Uncomment the `localhost` Base URL configuration.
3. Ensure the Flask server is running in `/backend`.

### Assumptions
- The app uses DummyJSON for demonstration purposes.
- No permanent database is used; data is stored in-memory in the Python process and resets on restart.

## Features implemented
- **Product List**: Fetches data from API, pull-to-refresh support.
- **Product Detail**: Shows full product info.
- **Create Product**: Simple form with validation to add new items.
- **Error Handling**: Graceful error messages and retry mechanisms.

## Future Improvements
- **TypeScript**: Migrate to TypeScript for better type safety.
- **State Management**: Use Redux or Context API for larger scale state.
- **Persistent Storage**: dynamic database (SQLite/PostgreSQL) for the backend.
