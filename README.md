# React Native Scoreboard Reader App

## Overview
The Scoreboard Reader App is a React Native application designed to capture, process, and display scoreboard information in real-time. Leveraging the power of mobile devices, it provides a convenient and user-friendly interface for users to interact with scoreboard data.

## Integration with Scoreboard Reader Flask App
This app utilizes the `/read-image/` endpoint of the [Scoreboard Reader Project](https://github.com/Scratch-Bowling-Series/scoreboard-reader) hosted on an external server. The endpoint processes the scoreboard images and returns the extracted data, which is then displayed in the mobile app.



## Features
- **Image Capture**: Allows users to take photos of scoreboards directly within the app.
- **Real-Time Processing**: Processes images on-the-go and extracts scoreboard data using advanced algorithms.
- **Data Visualization**: Displays processed scoreboard data in a clear and concise format.
- **Offline Support**: Ensures functionality even without an active internet connection.



## Getting Started
### Prerequisites
- Node.js
- React Native CLI
- Android Studio or Xcode (for iOS)

### Installation
1. Clone the repository:
   ```git clone https://github.com/Scratch-Bowling-Series/scoreboard-reader-app.git```

2. Navigate to the project directory:
   ```cd scoreboard-reader-app```

3. Install the dependencies:
   ```npm install```

## Running the App
1. To start the Metro Bundler, run:
   ```npx react-native start```

2. To run the app on a connected Android device/emulator, run:
  ```npx react-native run-android```

3. To run the app on a connected iOS device/simulator, run:
   ```npx react-native run-ios```

## Usage
1. **Capture Image**: Use the in-app camera functionality to capture an image of the scoreboard.
2. **Process Image**: Submit the captured image for processing. The app will extract and display the scoreboard data.
3. **View Results**: Interact with the processed scoreboard data within the app.

## Contributing
We welcome contributions! If you would like to improve the React Native Scoreboard Reader App, please follow these steps:
1. Fork the project.
2. Create your feature branch: git checkout -b feature/AmazingFeature.
3. Commit your changes: git commit -m 'Add some AmazingFeature'.
4. Push to the branch: git push origin feature/AmazingFeature.
5. Open a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact
Christian Starr - christian@scratchbowling.com

Project Link: [https://github.com/Scratch-Bowling-Series/scoreboard-reader-app](https://github.com/Scratch-Bowling-Series/scoreboard-reader-app)
