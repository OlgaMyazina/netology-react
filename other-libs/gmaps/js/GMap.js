"use strict"

class GMap extends React.Component {

  componentDidMount() {
    this.markers = [];
    const startMoscowCoord = {lat: 55.75, lng: 37.6167};
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: new google.maps.LatLng(startMoscowCoord),
      zoom: 2,
    });
  }

  componentWillReceiveProps(newProps) {
    this.deleteMarkers();
    newProps.points.map(point => {
      const latLng = new google.maps.LatLng(point.lat, point.lon);
      this.addMarker(latLng);
      this.showMarkers();
    })

  }

  addMarker(location) {
    const marker = new google.maps.Marker({
      position: location,
      map: this.map
    });
    this.markers.push(marker);
  }

  clearMarkers() {
    this.setMapOnAll(null);
  }

  deleteMarkers() {
    this.clearMarkers();
    this.markers = [];
  }

  showMarkers() {
    this.setMapOnAll(this.map);
  }

  setMapOnAll(map) {
    this.markers.map(marker => {
      marker.setMap(map);
    });
  }


  componentWillUnmount() {
    this.deleteMarkers();
    this.map.destroy();
  }

  render() {
    return (
      <div>
        <div id="map"></div>
        Карта
        {this.props.points.map((office, index) => <p key={index}>{JSON.stringify(office)}</p>)}
      </div>
    );
  }
}
