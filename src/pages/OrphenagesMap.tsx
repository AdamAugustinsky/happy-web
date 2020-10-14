import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet';


import mapMarkerImg from '../images/MapMarker.svg';

import '../styles/pages/orphanagesMap.css';
import 'leaflet/dist/leaflet.css';

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
      </Map>
      
      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}

export default OrphenagesMap;