import styled from 'styled-components';
import Header from './components/header.component';
import Sidebar from './components/sidebar.component';
import './App.css';

function App() {
  return (
    <AppWrapper>
      <Header />
      <div className="app_body">
        <Sidebar />
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
