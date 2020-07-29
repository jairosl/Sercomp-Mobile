import React from 'react';
import { useRoute } from '@react-navigation/native';
import RouteTab from '../../routes/routestab';

const Main = () => {
  const route = useRoute();
  return <RouteTab info={route.params} />;
};

export default Main;
