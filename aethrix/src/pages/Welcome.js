import React from 'react';
import Navbar from '../components/Navbar';// Import the Navbar component
import '../components/Welcome.css'; // Adjust the import path if needed

const Welcome = () => {
    return (
        <div>
            <Navbar /> {/* Include the Navbar component */}
            <div className="welcome-container">
                {/* Your content here */}
            </div>
        </div>
    );
}

export default Welcome;
