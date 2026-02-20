// App.js

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Login from './pages/Login';
import FormulairePage from './pages/FormulairePage';
import ClubsPage from './pages/ClubsPage';
import ClubInfoPage from './pages/ClubInfoPage';
import Admin from './pages/admin';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/formulaire" element={<FormulairePage />} />
          <Route path="/clubs" element={<ClubsPage />} />
          <Route path="/admin" element={<Admin />} /> {/* New route for ClubTables */}

          <Route path="/club-tables" element={<ClubInfoPage />} /> {/* New route for ClubTables */}
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
