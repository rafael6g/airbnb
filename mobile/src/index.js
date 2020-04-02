import './config/ReactotronConfig';
import React from 'react';

import MapboxGL from '@mapbox/react-native-mapbox-gl';

import Routes from './routes';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoicmFmYWVsNmciLCJhIjoiY2s4aHFoZG8wMDNtZTNmcHI3emNvbnp2cyJ9._Mln62nrSzS4mo36mv2vWQ',
);

const App = () => <Routes />;

export default App;
