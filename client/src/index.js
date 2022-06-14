import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Route, Switch } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material';

import { App, GlobalStyle } from './app';
import { rootReducer } from './reducer';
import { PathNames } from './consts';
import { Home } from './pages/home';
import { AuthPage } from './pages/auth';
import { theme } from './theme';
import 'react-notifications/lib/notifications.css';
import { NotificationInjector } from './packages/notification-injector';
import { createStore } from './packages/utils';
import { Dictionary } from './pages/dictionary';
import { Questionnaire } from './pages/questionnaire';
import { Info } from './pages/info';
import { DataVisualizations } from './pages/data-visualization';

const store = createStore(rootReducer);
const muiTheme = createTheme();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={{ ...theme, ...muiTheme }}>
          <NotificationInjector />
          <GlobalStyle />
          <App>
            <Switch>
              <Route exact path={PathNames.auth} component={AuthPage} />
              <Route exact path={PathNames.home} component={Home} />
              <Route exact path={PathNames.info} component={Info} />
              <Route
                exact
                path={PathNames.dataVisualizations}
                component={DataVisualizations}
              />
              <Route exact path={PathNames.dictionary} component={Dictionary} />
              <Route
                exact
                path={PathNames.questionnaire}
                component={Questionnaire}
              />
            </Switch>
          </App>
        </MuiThemeProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
