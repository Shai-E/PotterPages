
# IsracardDemoShaiEliav

This is a React Native project using modern libraries and tools for building mobile applications. This project includes state management using Redux, navigation using React Navigation, and various utility libraries to enhance the development process.

## Table of Contents

- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [DevDependencies](#devdependencies)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with this project, follow the steps below:

1. **Clone the repository:**

   \`\`\`bash
   git clone https://github.com/your-repo/IsracardDemoShaiEliav.git
   \`\`\`

2. **Navigate to the project directory:**

   \`\`\`bash
   cd IsracardDemoShaiEliav
   \`\`\`

3. **Install the dependencies:**

   \`\`\`bash
   npm install
   \`\`\`

   or

   \`\`\`bash
   yarn install
   \`\`\`

## Running the Project

### Android

To run the project on an Android device or emulator, use:

\`\`\`bash
npm run android
\`\`\`

### iOS

To run the project on an iOS device or simulator, use:

\`\`\`bash
npm run ios
\`\`\`

### Start Metro Bundler

To start the Metro bundler, which is required for React Native to function:

\`\`\`bash
npm run start
\`\`\`

### Linting

To check the code for linting errors:

\`\`\`bash
npm run lint
\`\`\`

### Testing

To run the test suite:

\`\`\`bash
npm run test
\`\`\`

## Project Structure

The project's folder structure follows a standard React Native setup, organized as follows:

\`\`\`
/IsracardDemoShaiEliav
├── /android         # Android-specific files
├── /ios             # iOS-specific files
├── /src             # Application source code
│   ├── /components  # Reusable components
│   ├── /navigation  # Navigation setup
│   ├── /store       # Redux-related files
│   ├── /screens     # Application screens
│   ├── /fixtures    # Application constants
│   ├── /hooks       # Custom hooks
│   ├── /utils       # Utilities
│   ├── /types       # Application types and interfaces
│   └── /assets      # Images, fonts, etc.
├── App.tsx          # Entry point for the app
├── package.json     # Project dependencies and scripts
└── README.md        # This file
\`\`\`

## Dependencies

This project uses the following main dependencies:

- **React Native**: \`^0.74.3\`
- **React**: \`^18.2.0\`
- **Redux**: \`^5.0.1\` and **React-Redux**: \`^9.1.2\`
- **Redux Toolkit**: \`^2.2.7\`
- **Redux Persist**: \`^6.0.0\`
- **Redux Saga**: \`^1.3.0\`
- **React Navigation**: Native stack and bottom tabs
- **Async Storage**: \`^1.24.0\`
- **React Native Gesture Handler**: \`^2.17.1\`
- **React Native Reanimated**: \`^3.14.0\`
- **React Native SVG**: \`^15.4.0\`
- **React Native Responsive Screen**: \`^1.4.2\`
- **React Native Safe Area Context**: \`^4.10.8\`
- **React Native Splash Screen**: \`^3.3.0\`

## DevDependencies

This project uses the following devDependencies for development:

- **TypeScript**: \`^5.0.4\`
- **Babel**: Core and preset configurations
- **ESLint**: \`^8.19.0\`
- **Prettier**: \`2.8.8\` for code formatting
- **Jest**: \`^29.6.3\` for testing
- **React Native SVG Transformer**: \`^1.5.0\` for handling SVGs

## Scripts

The following scripts are available in this project:

- **\`npm run android\`**: Runs the Android app.
- **\`npm run ios\`**: Runs the iOS app.
- **\`npm run lint\`**: Runs ESLint to check for code quality issues.
- **\`npm run start\`**: Starts the Metro bundler.
- **\`npm run test\`**: Runs the test suite using Jest.

## Contributing

This is a take-home assignment. There's no actual reason for you to contribute here. If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
