import { render } from 'react-dom';
// COMPONENTS
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
// STYLES
import 'antd/dist/antd.min.css';
import './sassVariables/index.scss';

const root = document.getElementById('root');

render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN || 'dev-meteorinvestments.us.auth0.com'}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID || 'dcGXwNare71mIYNCgFjwtkoaoxA0LDmz'}
    redirectUri='http://localhost:3000/profile'
  >
    <App />
  </Auth0Provider>,
  root,
);
