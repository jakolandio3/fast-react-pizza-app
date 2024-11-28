# Fast React Pizza 🍕

A modern React application for ordering pizzas online.
This project leverages the power of React, Redux, and Vite to deliver a seamless and responsive user experience. Users can browse a variety of pizzas, add them to their cart, and place orders with real-time updates on order status. The application also features user authentication, ensuring secure login and registration. With a focus on performance and usability, this project is optimized for both desktop and mobile devices.

![Fast-Pizza-Menu](/public/Screenshot%202024-11-28%20171245.png)

[Visit Live Demo](https://fast-react-pizza-app.vercel.app/)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [Authors](#authors)
- [Feedback](#feedback)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/fast-react-pizza.git
```

2. Navigate to project directory:

```bash
cd fast-react-pizza
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory and add your database credentials:

```bash
   VITE_DATABASE_URL=your-db-url
```

## Usage

To start the development server:

```bash
npm run dev
```

To build the project for production:

```bash
npm run build
```

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A predictable state container for JavaScript apps.
- **Vite**: A fast build tool and development server.
- **React Router**: Declarative routing for React applications.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **ESLint**: A tool for identifying and fixing linting issues in JavaScript code.
- **Prettier**: An opinionated code formatter.
- **Git**: Version control system for tracking changes in source code.

## Features

- **User Authentication**: Secure login and registration system.
- **Pizza Menu**: Browse a variety of pizzas with detailed descriptions and prices.
- **Shopping Cart**: Add, remove, and update pizza orders in the cart.
- **Order Processing**: Seamless order placement and tracking.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Real-time Updates**: Live updates on order status and availability.

## Project Structure

```plainText
src/
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI elements (buttons, inputs, etc.)
│   └── layout/         # Layout components (header, footer, etc.)
├── features/           # Feature-specific components and logic
│   ├── cart/          # Shopping cart related components
│   ├── menu/          # Pizza menu components
│   └── order/         # Order processing components
├── services/          # API and external service integrations
│   └── apiClient.js   # API communication layer
├── store/             # Redux store configuration
│   ├── cartSlice.js
│   └── orderSlice.js
├── styles/            # Global styles and theme configuration
│   └── index.css
└── utils/             # Helper functions and constants
  ├── formatters.js
  └── validators.js
```

## Environment Variables

Create a `.env` file in the root directory and add the following to connect to your database:

```env
VITE_API_URL=your_api_url
```

## Scripts

- `npm run dev`: Runs development server
- `npm run build`: Creates production build
- `npm run preview`: Previews production build
- `npm run test`: Runs tests

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## Authors

- @jakolandio3

## Feedback

If you have any feedback, please reach out to me at [jakobdouglas.dev@gmail.com](mailto:jakobdouglas.dev@gmail.com)
