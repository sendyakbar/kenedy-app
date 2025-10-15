# Kenedy App 🎯

A modern React Native mobile application for intelligent job matching. Built for the Confluent Hackathon, Kenedy App helps job seekers find their ideal positions by matching their skills, experience, and preferences with available opportunities.

## 📱 About

Kenedy App is an AI-powered job matching platform that streamlines the job search process. Users can create detailed profiles including their education, experience, skills, and job preferences. The app then provides personalized job recommendations with match scores to help users find the best opportunities.

### Key Features

- **👤 Profile Management**: Create and manage your professional profile with education, experience, skills, and preferences
- **💼 Experience Tracking**: Add and organize your work experience and professional background
- **🎯 Smart Job Matching**: Get AI-powered job recommendations based on your profile
- **📊 Match Scoring**: View compatibility scores for each job recommendation
- **🎨 Modern UI**: Clean, intuitive interface with smooth navigation
- **⚡ Real-time Updates**: Powered by React Query for efficient data fetching and caching

## 🛠 Tech Stack

### Core Technologies
- **React Native** (0.81.4) - Cross-platform mobile framework
- **TypeScript** (5.8.3) - Type-safe development
- **React** (19.1.0) - UI library

### Navigation & State Management
- **React Navigation** (7.x) - Native stack navigation
- **TanStack React Query** (5.x) - Server state management and caching

### Networking
- **Axios** (1.12.2) - HTTP client for API requests
- **React Native Config** (1.5.6) - Environment configuration management

### UI & UX
- **React Native Bootsplash** - Professional splash screen
- **React Native Safe Area Context** - Safe area handling
- **Custom theming system** - Centralized color management

### Testing
- **Jest** (29.x) - Testing framework
- **React Native Testing Library** (13.x) - Component testing
- **Jest Native** - Extended matchers for React Native

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** >= 20
- **npm** or **Yarn**
- **React Native development environment** - Follow the [official setup guide](https://reactnative.dev/docs/set-up-your-environment)
- **Android Studio** (for Android development)
- **Xcode** (for iOS development, macOS only)
- **CocoaPods** (for iOS dependencies, macOS only)
- **Ruby** and **Bundler** (for iOS dependency management)

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd kenedy-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # OR
   yarn install
   ```

3. **Environment Configuration**
   
   Create a `.env` file in the project root with your API configuration:
   ```bash
   # .env
   BASE_URL=http://103.127.135.62:8989
   ```

4. **iOS Setup** (macOS only)
   
   First, install Ruby bundler:
   ```bash
   bundle install
   ```
   
   Then install CocoaPods dependencies:
   ```bash
   cd ios
   bundle exec pod install
   cd ..
   ```

### Running the Application

#### Step 1: Start Metro Bundler

Metro is the JavaScript bundler for React Native. Start it with:

```bash
npm start
# OR
yarn start
```

#### Step 2: Run on Device/Emulator

Open a new terminal window and run:

**For Android:**
```bash
npm run android
# OR
yarn android
```

**For iOS:**
```bash
npm run ios
# OR
yarn ios
```

If everything is set up correctly, you should see the app running on your emulator/simulator or physical device.

> **Tip**: You can also run the app directly from Android Studio or Xcode.

### Development

#### Fast Refresh
The app uses React Native's Fast Refresh - any changes you make to the code will be reflected immediately.

#### Manual Reload
- **Android**: Press <kbd>R</kbd> twice or <kbd>Cmd ⌘</kbd>/<kbd>Ctrl</kbd> + <kbd>M</kbd> to open the Dev Menu
- **iOS**: Press <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in the simulator

## 📁 Project Structure

```
kenedy-app/
├── src/
│   ├── assets/           # Images, logos, and static assets
│   │   ├── bootsplash/   # Splash screen assets
│   │   └── logos/        # App logos
│   │
│   ├── components/       # Reusable UI components
│   │   ├── common/       # Shared components (Button, FormInput, etc.)
│   │   ├── Experiences/  # Experience-related components
│   │   ├── JobMatches/   # Job matching components
│   │   └── Profile/      # Profile components
│   │
│   ├── navigation/       # Navigation configuration
│   │   └── RootNavigator.ts
│   │
│   ├── screens/          # Screen components
│   │   ├── Experiences/  # Experience management screen
│   │   ├── JobMatches/   # Job matches screen
│   │   └── Profile/      # Profile screen
│   │
│   ├── services/         # API and data layer
│   │   ├── api/          # Axios configuration
│   │   ├── models/       # API models and types
│   │   └── queries/      # React Query hooks
│   │
│   ├── themes/           # Theming and styling
│   │   └── colors.ts     # Color palette
│   │
│   └── types/            # TypeScript type definitions
│       ├── env.d.ts      # React Native Config types
│       ├── navigation.d.ts
│       └── services.d.ts
│
├── android/              # Android native code
├── ios/                  # iOS native code
├── __tests__/           # Test files
└── App.tsx              # App entry point
```

## 🔌 API Configuration

The app connects to a backend API for job matching services using React Native Config for environment management.

### Environment Configuration

The base URL is configured using React Native Config:

- **Configuration File**: Create a `.env` file in the project root
- **TypeScript Types**: `src/types/env.d.ts` defines the configuration interface
- **Axios Instance**: `src/services/api/axiosInstance.ts` uses `Config.BASE_URL`

### Setup Environment Variables

1. **Create a `.env` file** in the project root:
   ```bash
   # .env
   BASE_URL=http://103.127.135.62:8989
   ```

2. **For different environments**, you can create:
   - `.env.development` - Development environment
   - `.env.staging` - Staging environment  
   - `.env.production` - Production environment

### Main Endpoints

- `POST /profile` - Create/update user profile
- `GET /job-matches` - Fetch personalized job recommendations

> **Note**: Update the `BASE_URL` value in your `.env` file to point to your backend endpoint. The app will automatically use the configured URL through React Native Config.

## 🧪 Testing

The project includes comprehensive test coverage with Jest and React Native Testing Library.

### Run Tests

```bash
# Run tests with coverage
npm test
# OR
yarn test

# Run tests in watch mode
npm test -- --watch
```

### View Coverage Report

After running tests, open the coverage report:
```bash
open coverage/lcov-report/index.html
```

### Test Structure
- Unit tests for components: `src/components/**/__tests__/`
- Screen tests: `src/screens/**/__tests__/`
- Service tests: `src/services/**/__tests__/`

## 🎨 Customization

### Theming
Colors and theme configuration can be found in `src/themes/colors.ts`. Modify this file to customize the app's appearance.

### Splash Screen
To update the splash screen, replace the assets in `src/assets/bootsplash/` and regenerate using the Bootsplash generator.

## 🐛 Troubleshooting

### Common Issues

**Metro bundler issues:**
```bash
# Clear Metro cache
npm start -- --reset-cache
```

**Android build issues:**
```bash
cd android
./gradlew clean
cd ..
```

**iOS build issues:**
```bash
cd ios
bundle exec pod deintegrate
bundle exec pod install
cd ..
```

**Node modules issues:**
```bash
# Clean install
rm -rf node_modules
npm install
# OR
yarn install
```

**React Native Config issues:**
```bash
# Clear Metro cache and restart
npm start -- --reset-cache

# For iOS, clean and rebuild
cd ios
bundle exec pod install
cd ..
```

**Environment variables not loading:**
- Ensure `.env` file is in the project root (same level as `package.json`)
- Restart Metro bundler after creating/modifying `.env` file
- For iOS, clean build folder in Xcode (Product → Clean Build Folder)

For more help, see the [React Native Troubleshooting Guide](https://reactnative.dev/docs/troubleshooting).

## 📚 Learn More

### React Native Resources
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [React Navigation Documentation](https://reactnavigation.org/docs/getting-started)
- [TanStack Query Documentation](https://tanstack.com/query/latest/docs/react/overview)
- [React Native Config Documentation](https://github.com/luggit/react-native-config)

### Project-Specific
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Native Testing Library](https://callstack.github.io/react-native-testing-library/)

## 📝 Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start Metro bundler |
| `npm run android` | Run on Android emulator/device |
| `npm run ios` | Run on iOS simulator/device |
| `npm test` | Run tests with coverage |
| `npm run lint` | Run ESLint |

## 🤝 Contributing

This project was created for the Confluent Hackathon. If you'd like to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and was created for the Confluent Hackathon.

## 👥 Team

Built with ❤️ for the Confluent Hackathon

---

**Happy Coding! 🚀**
