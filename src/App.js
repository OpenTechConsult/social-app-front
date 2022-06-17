import { useState } from 'react';
import styled from 'styled-components';
import Header from './components/header.component';
import Sidebar from './components/sidebar.component';
import Feed from './components/feed.component';
import Widget from './components/widget.component';
import Login from './components/login.component';
import { useStateValue } from './StateProvider';
import './App.css';

function App() {
  //const [user, setUser] = useState(null);
  const [{ user }, dispatch] = useStateValue();
  return (
    <AppWrapper>
      {user ? (
        <>
          <Header />
          <div className="app_body">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </>
      ) : (
        <Login />
      )}
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
    background-color: #f1f2f5;
    .app_body {
      display: flex;
    }
  `;

export default App;
