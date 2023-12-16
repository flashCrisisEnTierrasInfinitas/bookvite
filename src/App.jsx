
import './App.css';
import NavBar from './components/navbar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Books from './pages/books/index';
import Sedes from './pages/admin/sedes';
import Usuarios from './pages/admin/usuarios';
import BookRead from './pages/bookRead';
import Login from './components/log';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            element={
              <NavBar>
                <Outlet />
              </NavBar>
            }
          >
            <Route path="/listBooks" element={<Books />} />
            <Route path="/listBooks/:id" element={<BookRead />} />
            <Route path="/sedes" element={<Sedes />} />
            <Route path="/usuarios" element={<Usuarios />} />
          </Route>
          <Route path="*" element='404' />
        </Routes>
      </Router>
    </>
  )
}

export default App
