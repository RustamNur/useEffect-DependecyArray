import { useEffect, useState } from "react";
import "./TripList.css"

const TripList = () => {
    const [trips, setTrips] = useState([]);
    const [url,setUrl] = useState("http://localhost:3000/trips")
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTrips(data));
  }, [url]);
  console.log(trips);
    return (
        <div className="trip-list">
            <h3>Trips</h3>
            <ul>
                {trips.map((trip) => {
                    return (
                        <li key={trip.title}>
                            <h5>{trip.title}</h5>
                            <p>{trip.price}</p>
                            <p>{trip.loc}</p>
                        </li>
                    )
                })}
            </ul>
            <div className="filters">
                <button onClick={()=>setUrl("http://localhost:3000/trips?loc=European")}>Eurpean</button>
                <button onClick={()=>setUrl("http://localhost:3000/trips")}>All trips</button>
            </div>
        </div>
    );
};

export default TripList;
