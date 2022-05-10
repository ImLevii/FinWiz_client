// Imports
import { render } from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';

// Local imports
import App from './App';

// Styles
import 'antd/dist/antd.min.css';
import './index.scss';

const root = document.getElementById('root');

render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN!}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID!}
    redirectUri={'http://localhost:3000/profile'}
  >
    <App />
  </Auth0Provider>,
  root
);

