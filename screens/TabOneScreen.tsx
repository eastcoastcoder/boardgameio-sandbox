import * as React from 'react';

import { RootTabScreenProps, TabOneProp } from '../types';
// import SinglePlayer from './games/SinglePlayer';
import MultiPlayer from './games/MultiPlayer';

export default function TabOneScreen({ navigation, gameKey, gameName, ...rest }: TabOneProp) {
  return (
    <MultiPlayer gameKey={gameKey} gameName={gameName} />
  );
}
