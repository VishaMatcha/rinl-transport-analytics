import React, { useState, useEffect } from "react";
import { fetchTrains } from "./api";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const [trains, setTrains] = useState([]);

    useEffect(() => {
        fetchTrains().then(data => setTrains(data));
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="text-center text-primary mb-4">🚆 RINL Transport Analytics</h1>
            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead className="bg-dark text-white">
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
                        {trains.length > 0 ? (
                            trains.map(train => (
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
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" className="text-center text-muted">
                                    No train data available.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default App;