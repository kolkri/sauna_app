import 'leaflet/dist/leaflet.css';
import { MapContainer,  TileLayer, Marker, Tooltip} from 'react-leaflet'
import L from 'leaflet'
import style from '../styles/Home.module.css'
import { SaunaData } from '../pages/typeDefinitions'



function Map(props: SaunaData) {
  return (
    <MapContainer className={style.map} center={[60.257215, 24.966394]} zoom={10} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {props.saunas.map(s => {
        let latitude: number = s.latitude
        let longitude: number = s.longitude
        let name: string = s.name
        let id: string =s._id
        
        return (
          <Marker 
            key={id}
            position={[latitude, longitude]}
            >
            <Tooltip>
              {name}
            </Tooltip>
          </Marker>
        )
      })

      }
    </MapContainer>
  )
} 

const DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png',
  iconSize: [35, 46],
  iconAnchor: [17, 46]
})
L.Marker.prototype.options.icon = DefaultIcon

export default Map;