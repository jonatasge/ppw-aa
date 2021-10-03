import { theme } from 'src/app/styles/theme';

export const wineColor = (type: string): string => {
  switch (type?.toLowerCase()) {
    case 'branco':
    case 'espumante branco':
      return '#F4BC4A';
    case 'espumante rosé':
    case 'rosé':
      return '#EC7689';
    case 'tinto':
      return '#C61623';
    default:
      return theme.primary;
  }
};

export const wineIcon = (type: string): string => {
  switch (type?.toLowerCase()) {
    case 'branco':
    case 'rosé':
    case 'tinto':
      return 'wine_bar';
    case 'cerveja':
      return 'sports_bar';
    case 'espumante branco':
    case 'espumante rosé':
      return 'local_bar';
    default:
      return 'fastfood';
  }
};
