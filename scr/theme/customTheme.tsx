import { Theme } from '@rneui/themed';

interface CustomTheme extends Theme {
  colors: {
    primary: string;
    secondary: string;
    
  };
  fonts: {
    regular: string;
    bold: string;
  };
  mode: 'light' | 'dark';
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  
}

const customTheme: CustomTheme = {
  colors: {
    primary: 'blue',
    secondary: 'green',
    
  },
  fonts: {
    regular: 'YourCustomFont-Regular',
    bold: 'YourCustomFont-Bold',
  },
  mode: 'light',
  spacing: {
    xs: 8,
    sm: 16,
    md: 24,
    lg: 32,
    xl: 40,
  },
  
};

export default customTheme;