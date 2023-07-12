import mapboxgl, {Marker,MapboxGeocoder} from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { useEffect, useRef, useState } from 'react';

mapboxgl.accessToken = 'pk.eyJ1IjoiemV1c3h4aXYiLCJhIjoiY2xiM2JocTJ2MDdsNzNzbXRlZWs1d2d3NCJ9.BNT2Re03l7T8egDTfvxOCw';

const Map = (props) => {

    console.log("props==>>", props)

    

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(73.80931687967094);
    const [lat, setLat] = useState(15.498321221681792);
    const [zoom, setZoom] = useState(16);



    // if(props.lat!==undefined && props.lng!==undefined){
    //     console.log("loll")
    //     setLat(props.lat)
    //     setLng(props.lng)
    // }

    useEffect(() => {
        if (map.current) return; // initialize map only once
        console.log("map zavuna initialize")
        if(props.lng && props.lat){
            console.log("map zalo initialize")
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                // style: 'mapbox://styles/mapbox/streets-v12',
                style: 'mapbox://styles/mapbox/satellite-streets-v12',
                center: [props.lng ? props.lng : 73.80931687967094, props.lat ? props.lat : 15.498321221681792],
                zoom: zoom,
                attributionControl: false   
                
              });
              
              const marker=new Marker({ color: '#FF0000' })
              .setLngLat([props.lng, props.lat])
              .addTo(map.current);


              // map.addControl(
              //   new MapboxGeocoder({
              //   accessToken: mapboxgl.accessToken,
              //   mapboxgl: mapboxgl
              //   })
              //   );
              

              
        }

      },[props]);
      

//   useEffect(() => {
//     mapboxgl.accessToken =
//       "";
//     var map = new mapboxgl.Map({
//       container: "homemap",
//       style: "mapbox://styles/mapbox/streets-v11",
//     });
//   }, []);


  return (
<>
    <div>
      <div ref={mapContainer} 
      style={{height:'500px', width:'800px'}}
      className="map-container" />
    </div>

</>
  );
};

export default Map;
