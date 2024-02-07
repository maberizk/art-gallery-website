import React from "react";
import { MapContainer, TileLayer, Popup, Marker} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const position = [41.4824, -71.31039];

  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=d9ed5760e434404ca8e7cfa0378414b0"
        maxZoom={19}
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
