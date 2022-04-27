import './App.css';
import { AuthContext } from './context/AuthContext'
import { useContext } from 'react';
import { Button, Nav } from './components/style'
import { Display } from './components/display'


function App() {
  const { isAuth, toggleAuth } = useContext(AuthContext)

  return (
    <div className="App">
      <Nav>
        <Button onClick={() => { toggleAuth() }}>
          {isAuth === false ? 'Login' : 'Logout'}</Button>
      </Nav>
      {isAuth === false ? "Login By Clicking on Button " : <Display />}
    </div>
  );
}

export default App;
