import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    isDarkTheme: boolean;
    mainColor: string;
    textColor: string;
    bgColor: string;
    grayColor: string;
    colors: string[];
    changeTheme: (isDarkTheme: boolean, mainColor: Colors) => any;
  }
}
