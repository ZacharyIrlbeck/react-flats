import React from 'react';
import flats from './data/flats';
import FlatList from './components/FlatList';
import Map from './components/Map';
import '../assets/stylesheets/application.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    const { name, lat, lng } = flats[0]; 
    this.state = {
      selectedFlat: {
          name,
          lat,
          lng
      }
    }
  }

  handleFlatSelection = (event, lat, lng, name) => {
       this.setState({
          selectedFlat: {
              lat,
              lng,
              name
          }
      }, (() => console.log('the state after update', this.state.selectedFlat)));
  }

  render() {
    const { selectedFlat } = this.state;

    return (
      <div>
        <div className="flat-list">
          <FlatList flats={flats} handleFlatSelection={this.handleFlatSelection} />
        </div>
        <div className="map-container">
          <Map selectedFlat={selectedFlat} />
        </div>
      </div>
    );
  }
}

export default App;
