import React, { useEffect, useRef } from 'react';

interface MapProps {
  apiKey?: string;
}

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

const Map: React.FC<MapProps> = ({ apiKey }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    if (!apiKey || !mapContainer.current) return;

    // Load Google Maps script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;

    // Initialize map callback
    window.initMap = () => {
      if (!mapContainer.current) return;

      const map = new window.google.maps.Map(mapContainer.current, {
        center: { lat: 22.5726, lng: 88.3639 }, // Kolkata coordinates
        zoom: 16,
        mapTypeControl: true,
        streetViewControl: true,
        fullscreenControl: true,
      });

      // Add marker for Phoenix Realesthatic office
      const marker = new window.google.maps.Marker({
        position: { lat: 22.5726, lng: 88.3639 },
        map: map,
        title: 'Phoenix Realesthatic',
      });

      // Add info window
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 10px; max-width: 200px;">
            <h3 style="margin: 0 0 8px 0; font-weight: bold; font-size: 14px;">Phoenix Realesthatic</h3>
            <p style="margin: 0; font-size: 12px; color: #666;">
              Regus Globsyn Crystals<br>
              X-11& 12, Block-EP<br>
              Saltlake Sector-V, Kolkata-91, IN
            </p>
          </div>
        `,
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });

      mapRef.current = map;
    };

    // Check if Google Maps is already loaded
    if (window.google && window.google.maps) {
      window.initMap();
    } else {
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup
      const existingScript = document.querySelector(`script[src*="maps.googleapis.com"]`);
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
      delete window.initMap;
    };
  }, [apiKey]);

  if (!apiKey) {
    return (
      <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-gray-600 text-xs">MAP</span>
          </div>
          <p className="text-gray-600 text-lg">Google Maps API Key Required</p>
          <p className="text-gray-500 text-sm">Please configure Google Maps API key to view the map</p>
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