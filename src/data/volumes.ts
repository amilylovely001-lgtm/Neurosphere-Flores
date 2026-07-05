import { Volume } from '../types';
import { volumesA_C } from './volumesA_C';
import { volumesD_G } from './volumesD_G';
import { volumesH_L } from './volumesH_L';
import { volumesM_S } from './volumesM_S';

export const allVolumes: Volume[] = [
  ...volumesA_C,
  ...volumesD_G,
  ...volumesH_L,
  ...volumesM_S
];
