import * as React from 'react';

import { RootTabScreenProps } from '../types';
import Singleplayer from './games/SinglePlayer';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <Singleplayer />
  );
}
