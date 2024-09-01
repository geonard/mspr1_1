
import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './SiteMap.css';
import MapboxClient from '@mapbox/mapbox-sdk';
import Directions from '@mapbox/mapbox-sdk/services/directions';

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2VvbmFyZCIsImEiOiJjbTA0NnRzMmgwNGxnMmpyNXY0OGt5MXVjIn0.Ojuo6UTNN_g2LaE5HR2q6g';

const SiteMap = ({ isFullScreen, toggleFullScreen }) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-1.2785, 47.0930],
      zoom: 15,
    });

    map.addControl(new mapboxgl.NavigationControl());

    const pointsOfInterest = [
      {
        title: "Hellfest Steampunk Clock",
        description: "",
        lat: 47.097490290808054,
        lng: -1.2660241133442103
      },
      {
        title: "Warzone Stage",
        description: "",
        lat: 47.09851279713055,
        lng: -1.2645220763523983
      },
      {
        title: "Hellfest - Organisation Check-in",
        description: "Billeterie",
        lat: 47.100090339894095,
        lng: -1.2832760814469757
      },
      {
        title: "Camping Hellfest",
        description: "Joli petit camping de caractère, bien sous tout rapport.",
        lat: 47.102325111993366,
        lng: -1.2739205370730342
      },
      {
        title: "Statue Lemmy",
        description: "Statue en bronze de Lemmy Kilmister, légendaire chanteur et bassiste de Motörhead.",
        lat: 47.09905,
        lng: -1.26554
      },
      {
        title: "Hellfest Steampunk Tree Monument",
        description: "",
        lat: 47.09740447242533,
        lng: -1.2673498932170841
      },
      {
        title: "Hellfest Steampunk Horn Hand Sign",
        description: "",
        lat: 47.097608975586326,
        lng: -1.2683369460990328
      },
    ];

    pointsOfInterest.forEach(point => {
      const popup = new mapboxgl.Popup().setHTML(`<h3>${point.title}</h3><p>${point.description}</p>`);
      new mapboxgl.Marker({ color: 'red' })
        .setLngLat([point.lng, point.lat])
        .setPopup(popup)
        .addTo(map);
    });

    function createCustomMarker(color) {
      const marker = document.createElement('div');
      marker.className = 'custom-marker';
      marker.style.backgroundColor = color;
      marker.style.width = '20px';
      marker.style.height = '20px';
      marker.style.borderRadius = '50%';
      marker.style.border = '2px solid black';
      return marker;
    }

    const hellfestArea = [
      [47.095, -1.290],
      [47.090, -1.275],
      [47.095, -1.270],
      [47.100, -1.280],
      [47.095, -1.290]
    ];

    map.on('load', () => {
      map.addSource('hellfest-area', {
        'type': 'geojson',
        'data': {
          'type': 'Feature',
          'geometry': {
            'type': 'Polygon',
            'coordinates': [hellfestArea]
          }
        }
      });

      map.addLayer({
        'id': 'hellfest-area',
        'type': 'fill',
        'source': 'hellfest-area',
        'layout': {},
        'paint': {
          'fill-color': '#088',
          'fill-opacity': 0.5
        }
      });

      const redMarkers = pointsOfInterest.filter(point => point.title !== "Statue Lemmy" && point.title !== "Camping Hellfest");
      const latSum = redMarkers.reduce((sum, point) => sum + point.lat, 0);
      const lngSum = redMarkers.reduce((sum, point) => sum + point.lng, 0);
      const numPoints = redMarkers.length;
      const barycenterLat = latSum / numPoints;
      const barycenterLng = lngSum / numPoints;

      new mapboxgl.Marker({
        element: createCustomMarker('blue'),
      })
        .setLngLat([barycenterLng, barycenterLat])
        .addTo(map);

      const directionsClient = Directions(MapboxClient({ accessToken: mapboxgl.accessToken }));

      directionsClient.getDirections({
        profile: 'walking',
        waypoints: [
          { coordinates: [-1.2739205370730342, 47.102325111993366] },
          { coordinates: [-1.26554, 47.09905] }
        ]
      })
        .send()
        .then(response => {
          const data = response.body;
          if (data.routes.length > 0) {
            const route = data.routes[0];
            map.addSource('route', {
              type: 'geojson',
              data: {
                type: 'Feature',
                geometry: route.geometry
              }
            });

            map.addLayer({
              id: 'route',
              type: 'line',
              source: 'route',
              layout: {
                'line-join': 'round',
                'line-cap': 'round'
              },
              paint: {
                'line-color': '#3887be',
                'line-width': 5
              }
            });
          } else {
            console.error('No route found.');
          }
        })
        .catch(error => {
          console.error('Error fetching directions:', error);
        });
    });

    return () => map.remove();
  }, []);

  return (
    <div className={`map-container ${isFullScreen ? 'full-screen' : ''}`}>
      <button onClick={toggleFullScreen} className="fullscreen-toggle">
        {isFullScreen ? 'Exit Full Screen' : 'Full Screen'}
      </button>
      <div id="map" className="map" />
    </div>
  );
};

export default SiteMap;
