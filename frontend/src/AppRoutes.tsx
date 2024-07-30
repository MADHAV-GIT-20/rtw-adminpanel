import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/Home/Home.page';
import { Authenticate } from './pages/Authenticate/Authenticate.page';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { useAuthentication } from './pages/Authenticate/store/selector';
import { Signup } from './components/Signup/Signup';

export function AppRoutes() {
  const authenticator = useAuthentication();
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* <Route element={<PrivateRoute token={authenticator.token} />}>
          <Route path="/" element={<HomePage />} />
        </Route> */}
        <Route path="/" element={<Authenticate />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/menu" element={<HomePage />} />
      </Routes>
    </Router>
  );
}
