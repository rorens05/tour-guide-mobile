import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import Routes from './src/Routes/Routes';
import theme from './theme';
import UserContextProvider from './src/context/UserContext';

const App = () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
      <UserContextProvider>
        <Routes />
      </UserContextProvider>
    </ApplicationProvider>
  </>
);

export default App;
