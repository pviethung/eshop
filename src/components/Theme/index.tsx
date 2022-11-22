import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { colors } from '../GlobalStyle';

const getScheme = () => {
  if (typeof localStorage === 'undefined')
    return {
      isDarkTheme: false,
      mainColor: '#fa6b6b',
      bgColor: '#fff',
      textColor: '#000',
      grayColor: '#777',
      colors,
    };

  const localScheme = localStorage.getItem('scheme');
  if (localScheme) return JSON.parse(localScheme);
};

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

  useEffect(() => {
    const localScheme = getScheme();
    if (localScheme && localScheme.mainColor !== scheme.mainColor) {
      setScheme(localScheme);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem('scheme', JSON.stringify(scheme));
  }, [scheme]);

  return (
    <ThemeProvider theme={{ ...scheme, changeTheme }}>{children}</ThemeProvider>
  );
};
export default Theme;
