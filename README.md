This is a simple and colorful React-based Weather Application that allows users to view real-time weather details such as temperature and status (Clear, Clouds, Rain, etc.) for different cities.
The app is built using React.js with a clean and responsive UI styled in CSS.
It uses the OpenWeather API to fetch live weather data and includes a caching mechanism that stores results for 5 minutes to reduce unnecessary API calls.
A header is included with the title “Weather App”, and the main weather information is displayed inside a styled weather box. Additionally, the app integrates optional Auth0 authentication for secure login and user access.
To set up the project, first clone the repository and install the required dependencies using npm install. Then, create a .env file in the root directory and add your OpenWeather API key along with Auth0 details if needed.
After that, run the app with npm start and open http://localhost:3000 in your browser to see it in action. 
The app’s structure is simple, with Weather.jsx, weather.css, and cities.json inside the components/weather folder, making it easy to understand and extend.
