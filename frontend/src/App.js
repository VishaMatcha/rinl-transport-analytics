import React, { useState, useEffect } from "react";
import { fetchTrains } from "./api";

function App() {
    const [trains, setTrains] = useState([]);

    useEffect(() => {
        fetchTrains().then(data => setTrains(data));
    }, []);

    return (
        <div>
            <h1>RINL Transport Analytics</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Train No</th>
                        <th>Train Name</th>
                        <th>Source</th>
                        <th>Destination</th>
                        <th>Departure</th>
                        <th>Arrival</th>
                        <th>Travel Time</th>
                        <th>Distance (km)</th>
                    </tr>
                </thead>
                <tbody>
                    {trains.map(train => (
                        <tr key={train.id}>
                            <td>{train.train_no}</td>
                            <td>{train.train_name}</td>
                            <td>{train.source}</td>
                            <td>{train.destination}</td>
                            <td>{train.departure_time}</td>
                            <td>{train.arrival_time}</td>
                            <td>{train.travel_time}</td>
                            <td>{train.distance}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
