# Weather Application

- A simple and colorful **React-based Weather Application**.  
- Allows users to view **real-time weather details** such as:  
  - Temperature  
  - Status (Clear, Clouds, Rain, etc.)  
- Built using **React.js** with a clean and responsive **CSS-styled UI**.  
- Uses the **OpenWeather API** to fetch live weather data.  
- Includes a **5-minute caching mechanism** to reduce unnecessary API calls.  
- Features a **header** with the title *“Weather App”*.  
- Main weather information is displayed inside a **styled weather box**.  
- Supports optional **Auth0 authentication** for secure login and user access.  

### Setup Instructions
- Clone the repository.  
- Run `npm install` to install dependencies.  
- Create a `.env` file in the root directory and add:  
  - Your **OpenWeather API key**  
  - **Auth0 details** (if using authentication)  
- Start the app with `npm start`.  
- Open **http://localhost:3000** in your browser to see it in action.  

### Project Structure
- `components/weather/Weather.jsx` – main weather component  
- `components/weather/weather.css` – styling for the app  
- `components/weather/cities.json` – city list used in the app  
