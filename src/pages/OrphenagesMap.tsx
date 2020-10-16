import React from 'react';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import Leaflet from 'leaflet';

import mapMarkerImg from '../images/MapMarker.svg';

import '../styles/pages/orphanagesMap.css';
import 'leaflet/dist/leaflet.css';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})

function OrphenagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>

          <h2> Escolha um orfanato no mapa</h2>
          <p> Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong> Rio do Sul</strong>
          <span>Santa Catarina</span>
        </footer>
      </aside>

      <Map 
        center={[-23.4998514,-46.8543534]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

        <Marker 
          icon={mapIcon}
          position={[-23.4998514,-46.8543534]}
        >
          <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
            Orphanage 1
            <Link to="/orphanages/1"> 
              <FiArrowRight size={20} color="#fff"/>
            </Link>
          </Popup>
        </Marker>
      </Map>
      
      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}

export default OrphenagesMap;