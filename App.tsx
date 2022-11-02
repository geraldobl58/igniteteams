import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'

import { Groups } from '@screens/Groups';
import { Loading } from '@components/Loading';

import theme from '@theme/index';
import { StatusBar } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      {fontsLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  );
}