import styled from 'styled-components';
import Header from './components/header.component';
import Sidebar from './components/sidebar.component';
import Feed from './components/feed.component';
import Widget from './components/widget.component';
import './App.css';

function App() {
  return (
    <AppWrapper>
      <Header />
      <div className="app_body">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
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
