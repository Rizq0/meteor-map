import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { Toolbar } from "./Toolbar";
import { useContext } from "react";
import { NightModeContext } from "../contexts/night-mode";
import meteorIcon from "../icons/meteorite.png";

const meteoriteIcon = new Icon({
  iconUrl: meteorIcon,
  iconSize: [25, 25],
});

export const Map = ({ data }) => {
  const { isLightMode } = useContext(NightModeContext);
  return (
    <>
      <Toolbar />
      <MapContainer
        class="mapcontainer"
        center={[51.511493, -0.104432]}
        zoom={10}
        style={{ height: "100vh", width: "100%" }}
        worldCopyJump={true}
      >
        <TileLayer
          url={`https://{s}.basemaps.cartocdn.com/${
            isLightMode ? "light_all" : "dark_all"
          }/{z}/{x}/{y}{r}.png`}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attribution">CARTO</a>'
          maxZoom="20"
          minZoom="3"
          noWrap={true}
        />
        {data.map((meteorite) => {
          if (meteorite.geolocation) {
            return (
              <Marker
                key={meteorite.name}
                position={[
                  meteorite.geolocation.latitude,
                  meteorite.geolocation.longitude,
                ]}
                icon={meteoriteIcon}
              >
                <Popup>
                  {meteorite.name} <br /> {meteorite.year} <br />
                  {meteorite.mass}g
                </Popup>
              </Marker>
            );
          } else {
            return null;
          }
        })}
      </MapContainer>
    </>
  );
};
