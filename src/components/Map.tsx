import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapProps {
  apiKey?: string;
}

const Map: React.FC<MapProps> = ({ apiKey }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || !apiKey) return;

    // Initialize map
    mapboxgl.accessToken = apiKey;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [88.3639, 22.5726], // Kolkata coordinates
      zoom: 15,
    });

    // Add marker for Phoenix Realesthatic office
    new mapboxgl.Marker()
      .setLngLat([88.3639, 22.5726])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML(`
            <div class="p-2">
              <h3 class="font-semibold text-sm">Phoenix Realesthatic</h3>
              <p class="text-xs text-gray-600">Regus Globsyn Crystals<br>X-11& 12, Block-EP<br>Saltlake Sector-V, Kolkata-91, IN</p>
            </div>
          `)
      )
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [apiKey]);

  if (!apiKey) {
    return (
      <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-gray-600 text-xs">MAP</span>
          </div>
          <p className="text-gray-600 text-lg">Map API Key Required</p>
          <p className="text-gray-500 text-sm">Please configure Mapbox API key to view the map</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-96">
      <div ref={mapContainer} className="absolute inset-0 rounded-lg shadow-lg" />
    </div>
  );
};

export default Map;