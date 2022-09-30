import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { colors } from '../GlobalStyle';

const Theme = ({ children }: { children: React.ReactNode }) => {
  const changeTheme = (isDarkTheme: boolean, mainColor: string) => {
    setScheme((prevScheme) => ({
      ...prevScheme,
      isDarkTheme,
      mainColor,
      bgColor: isDarkTheme ? '#000' : '#fff',
      textColor: isDarkTheme ? '#fff' : '#000',
    }));
  };

  const [scheme, setScheme] = useState({
    isDarkTheme: false,
    mainColor: '#fa6b6b',
    bgColor: '#fff',
    textColor: '#000',
    grayColor: '#777',
    colors,
  });

  return (
    <ThemeProvider theme={{ ...scheme, changeTheme }}>{children}</ThemeProvider>
  );
};
export default Theme;
