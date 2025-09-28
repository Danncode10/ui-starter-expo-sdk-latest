

# Expo UI Starter (Latest SDK) - TypeScript + NativeWind

A starter UI project for **React Native** using the latest **Expo SDK** with **TypeScript** and **NativeWind (Tailwind CSS for React Native)**.
This template resolves common Expo setup issues and provides a clean starting point for building mobile apps with **Tailwind styling**.

---

## Features

* ✅ Latest Expo SDK support
* ✅ TypeScript ready
* ✅ NativeWind preconfigured for Tailwind styling
* ✅ Preconfigured basic UI structure
* ✅ Fix for `ConfigError: Cannot determine the project's Expo SDK version`

---

## Getting Started

### Prerequisites

* Node.js (>= 18 recommended)
* npm or yarn
* Expo CLI installed globally:

```bash
npm install -g expo-cli
```

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/expo-ui-starter-latest-sdk.git
cd expo-ui-starter-latest-sdk
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Install NativeWind dependencies:

```bash
npm install nativewind tailwindcss
npx tailwindcss init
```

4. Start the development server:

```bash
expo start
```

---

## Project Structure

```
├── App.tsx           # Main entry file (NativeWind ready)
├── tsconfig.json     # TypeScript configuration
├── package.json      # Dependencies & scripts
├── tailwind.config.js# Tailwind/NativWind configuration
├── global.css        # Tailwind directives for NativeWind
├── assets/           # Images, fonts, and other assets
└── components/       # Reusable UI components
```

---

## Usage

* Modify `App.tsx` or add new components in `components/`
* Use Tailwind classes via NativeWind for styling:

```jsx
<View className="flex-1 justify-center items-center bg-red-500">
  <Text className="text-white text-2xl font-bold">Tailwind is working!</Text>
</View>
```

* Run on iOS, Android, or web using Expo Go

---

## Troubleshooting

If you encounter:

```
ConfigError: Cannot determine the project's Expo SDK version because the module expo is not installed.
```

Make sure you run:

```bash
npm install expo
```

and restart the server.

If Tailwind classes do not apply, verify:

1. `babel.config.js` includes:

```javascript
module.exports = {
  presets: ['babel-preset-expo'],
  plugins: ['nativewind/babel'],
};
```

2. `global.css` contains:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

3. `tailwind.config.js` is present and correctly configured.

---

## License

MIT License

