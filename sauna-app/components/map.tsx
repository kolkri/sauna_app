import 'leaflet/dist/leaflet.css';
import { MapContainer,  TileLayer, Marker, Popup} from 'react-leaflet'
import L from 'leaflet'
import style from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import { SaunaData } from '../pages/typeDefinitions'



function Map() {

  const [saunas, setSaunas] = useState<SaunaData>();

  useEffect(() => {
    const fetchAPI = async () => {
      await fetch('http://localhost:3000/api/saunas')
      .then((response) => response.json())
      .then((data:SaunaData) => setSaunas(data))
    }
    fetchAPI()
  }, [])


  return (
    <MapContainer className={style.map} center={[60.257215, 24.966394]} zoom={10} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {saunas?.saunas.map(s => {
        let latitude: number = s.latitude
        let longitude: number = s.longitude
        let name: string = s.name
        let id: string =s.id
        return (
          <Marker 
            key={id}
            position={[latitude, longitude]}
            eventHandlers={{
              mouseover: (event) => event.target.openPopup(),
            }}>
            <Popup>
              {name}
            </Popup>
          </Marker>
        )
      })

      }
    </MapContainer>
  )
} 

let DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png',
  iconSize: [35, 46],
  iconAnchor: [17, 46]
})
L.Marker.prototype.options.icon = DefaultIcon

export default Map;