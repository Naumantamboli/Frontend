// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkQWZrWZBgxMeoKkp7-gN_o1hjyoScV20",
    authDomain: "sih-project-6e56e.firebaseapp.com",
    databaseURL: "https://sih-project-6e56e-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "sih-project-6e56e",
    storageBucket: "sih-project-6e56e.appspot.com",
    messagingSenderId: "1039316038781",
    appId: "1:1039316038781:web:31bad1354b80479a826d14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Function to get real-time sensor data from Firebase
function getRealTimeSensorData() {
    const sensorRef = ref(db, 'Sensors');

    onValue(sensorRef, (snapshot) => {
        const data = snapshot.val();
        console.log('Raw Sensor Data:', data); // Print the raw data to the console

        const sensorDataContainer = document.getElementById('sensor-data');

        // Clear previous data
        sensorDataContainer.innerHTML = '';

        // Check if data exists
        if (data) {
            // Display the sensor data
            let sensorInfo = '<ul>';
            console.log(data);
            sensorInfo += `
                <li>
                    <strong>Acceleration X:</strong> ${data.acceleration.x || 'N/A'}<br>
                    <strong>Acceleration Y:</strong> ${data.acceleration.y || 'N/A'}<br>
                    <strong>Acceleration Z:</strong> ${data.acceleration.z || 'N/A'}<br>
                    <strong>Soil Moisture:</strong> ${data.soil || 'N/A'} ohm
                </li>
            `;
            sensorInfo += '</ul>';
            sensorDataContainer.innerHTML = sensorInfo;
        } else {
            sensorDataContainer.innerHTML = '<p>No sensor data available</p>';
        }
    }, (error) => {
        console.error('Error fetching sensor data:', error);
        document.getElementById('sensor-data').innerHTML = '<p>Error fetching sensor data</p>';
    });
}

// Add event listener to the button
document.getElementById('fetch-data-button').addEventListener('click', getRealTimeSensorData);
