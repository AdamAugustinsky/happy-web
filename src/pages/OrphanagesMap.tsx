import React, { useEffect, useState } from 'react';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import mapMarkerImg from '../images/MapMarker.svg';

import mapIcon from '../utils/mapIcon';

import '../styles/pages/orphanagesMap.css';
import api from '../services/api';

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get('/orphanages').then(response => {
      setOrphanages(response.data);
    });
  }, []);

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

        
        {orphanages.map(orphanage => {
          return(
            <Marker 
              key={orphanage.id}
              icon={mapIcon}
              position={[orphanage.latitude,orphanage.latitude]}

            >
              <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                {orphanage.name}
                <Link to={`orphanages/${orphanage.id}`}> 
                  <FiArrowRight size={20} color="#fff"/>
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>
      
      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;