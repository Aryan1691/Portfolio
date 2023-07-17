// import React from "react";

import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  //   ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        center: [78.9629, 21.5937], // Center the map on India by specifying its longitude and latitude
        scale: 850, // Adjust the scale as per your preference
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <defs>
        <linearGradient id="customGradient" x1="1" y1="1" x2="1" y2="0">
          <stop offset="25%" stopColor="#ffcb74" />
          <stop offset="35%" stopColor="#ffcb74" />
          <stop offset="100%" stopColor="white" />
        </linearGradient>
      </defs>
      <Geographies geography="/features.json" stroke="black" strokeWidth={0.8}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill={
                geo.properties.name === "India"
                  ? "url(#customGradient)"
                  : "transparent"
              }
            />
          ))
        }
      </Geographies>

      <Annotation
        subject={[74.209, 20.6139]}
        dx={-90}
        dy={60}
        connectorProps={{
          stroke: "black",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="black">
          {"Maharashtra"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
