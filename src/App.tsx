// Imports
import { BrowserRouter } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
// Local imports
import { Pages, AuthPages } from 'pages';
import AuthNavbar from 'components/authenticatedComponents/AuthNavbar';
import DefaultNavbar from 'components/default/DefaultNavbar';
import { userApi } from 'redux/store';
import Spinner from 'components/antdComponents/Spinner';
// Styles
import './sassVariables/App.scss';
import Footer from 'components/default/Footer';

const App = () => {

  // check if user is authenticated
  const { isAuthenticated, isLoading } = useAuth0();
  const app = isAuthenticated ? (<><AuthNavbar /> {AuthPages}</>) : (<><DefaultNavbar /> {Pages}</>);

  // if loading show loading placeholder
  // todo - replace with spinner or loading icon
  if(isLoading) return <Spinner />;

  return (
    <ApiProvider api={userApi}>
      <div className="App">
        <BrowserRouter>
          { app }
          <Footer />
        </BrowserRouter>
      </div>
    </ApiProvider>
  );
};

export default App;
