import React from 'react';
import flats from './data/flats';
import FlatList from './components/FlatList';
import Map from './components/Map';

class App extends React.Component {
  constructor(props) {
    super(props);
    const firstFlat = flats[0];
    this.selectedFlat = firstFlat;
  }

  render() {
    const { selectedFlat } = this.props;

    return (
      <div>
        <div className="flat-list">
          <FlatList flats={flats} />
        </div>
        <div className="map-container">
          <Map selectedFlat={selectedFlat} />
        </div>
      </div>
    );
  }
}

export default App;
