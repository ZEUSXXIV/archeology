import React, { useEffect, useState } from "react";
import axios from "axios";

const Amenities = ({latitude, longitude}) => {
  const [amenities, setAmenities] = useState([]);

  var accessToken =
    "pk.eyJ1IjoiemV1c3h4aXYiLCJhIjoiY2xiM2JocTJ2MDdsNzNzbXRlZWs1d2d3NCJ9.BNT2Re03l7T8egDTfvxOCw";

  useEffect(() => {
    const getNearbyAmenities = async () => {
      try {
        const latitude = 15.5937; // Latitude of the location
        const longitude = 73.8142; // Longitude of the location
        // const amenityType = "restaurant"; // Type of amenity to search for
        // const amenityType = "fuel"; 
        const amenityType = "hospital"; 
        const country = "in";

        const response = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${amenityType}.json`,
          {
            params: {
              access_token: accessToken,
              country: country,
              proximity: [longitude, latitude],
              type:'postcode',
              limit:2
            },
          }
        );

        if (response.status === 200) {
          const features = response.data.features;
          console.log("res==>>", response.data)
          setAmenities(features);
        } else {
          console.error("Error:", response.status);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getNearbyAmenities();
  }, []);

  return (
    <div>
      <h2>Nearby Amenities</h2>
      <ul>
        {amenities.map((amenity) => (
          <li key={amenity.id}>{amenity.place_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Amenities;
