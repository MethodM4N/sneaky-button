import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

export const myPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#F8C7C3',
      100: '#F6B5B1',
      200: '#F2938C',
      300: '#EE7067',
      400: '#EA4E43',
      500: '#E62B1E',
      600: '#B81F14',
      700: '#85160F',
      800: '#530E09',
      900: '#200504',
      950: '#070101'
    }
  }
});
