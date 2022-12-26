import * as React from 'react';

import { TabOneProp } from '../types';
// import SinglePlayer from './games/SinglePlayer';
import MultiPlayer from './games/MultiPlayer';

export default function TabOneScreen({ gameKey, playerID }: TabOneProp) {
  return (
    <MultiPlayer gameKey={gameKey} playerID={playerID} />
  );
}
