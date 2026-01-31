# Valet Mobile Assignment

This repository contains the mobile application for the Valet assignment, built with **React Native**.

## Project Overview

The application is a product management tool that allows users to:
1.  **View a list of products** (fetched from an external API).
2.  **View detailed information** about a specific product.
3.  **Create new products** via a form.

## APIs Used

The application uses **Mock APIs** provided by [DummyJSON](https://dummyjson.com) to simulate a real backend integration.

- **Base URL**: `https://dummyjson.com`
- **Endpoints**:
    - `GET /products`: Fetches the list of initial items.
    - `GET /products/<id>`: Fetches details for a specific item.
    - `POST /products/add`: Simulates creating a new item.

> **Note on Persistence**: Since we are using a public mock API, creating a new product is simulated. The API returns a success response (200 OK), but the new item **will not actually persist** in the product list on refresh. This is expected behavior for this assessment.

## Prerequisites

- **Node.js** & **npm**
- **Android Studio** (for Android Emulator) or a physical Android device.

## Setup Instructions

### 1. Installation

Navigate to the project directory and install dependencies:

```bash
cd valetmobile
npm install
```

### 2. Running the App

Start the Metro Bundler and launch the app on your Android emulator or connected device:

```bash
npm run android
```

## Features Implemented

- **Product List Screen**:
  - Fetches data from `dummyjson.com`.
  - Implements **Pull-to-Refresh** functionality.
  - Displays product title, price, and a short description.

- **Product Detail Screen**:
  - Clean, card-based UI layout.
  - Displays full product description and pricing.

- **Create Product Screen**:
  - Form with validation for Name and Price.
  - Submits data to the `POST /products/add` endpoint.
  - Handles loading states and error feedback.

## Assumptions

- **Mock API Usage**: The assignment allows for "Mock APIs". I chose DummyJSON to demonstrate full HTTP networking (axios) without the complexity of setting up a local server environment for the reviewer.
- **Data Persistence**: As noted above, data created via the "Add Product" form is not permanent.
- **Android Focus**: The app is tested primarily on Android. Layouts use `SafeAreaView` and standard components that should work on iOS, but it has been optimized for the Android experience.

## Future Improvements

If given more time, I would improve the following:

- **TypeScript Migration**: Convert the codebase to TypeScript for better type safety and maintainability.
- **State Management**: Implement Redux Toolkit or Context API to manage global state (e.g., adding a "Cart" feature).
- **Offline Mode**: Use `AsyncStorage` or `React Native MMKV` to cache products for offline viewing.
- **Unit Testing**: Add unit tests using `Jest` and `React Native Testing Library` to ensure component reliability.
