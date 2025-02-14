import axios from "axios";

export const fetchTrains = async () => {
    const response = await axios.get("http://127.0.0.1:8000/trains/");
    return response.data;
};
