import React from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from './MapMarker';
// import Style from './Map.css';

class SimpleMap extends React.Component {
  constructor(props) {
    super(props);
    console.log("this is whats passed into the map component", props);
    const { name, lat, lng } = this.props.selectedFlat;
    this.center = {
      lat: 48,
      lng: 1
    };
    this.zoom = 11;
  }

  render() {
    const {name, lat, lng } = this.props.selectedFlat;
    return (
      <div className="mapContainer">
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact defaultCenter={this.center} defaultZoom={this.zoom}>
            <MapMarker lat={lat} lng={lng} name={name} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default SimpleMap;
