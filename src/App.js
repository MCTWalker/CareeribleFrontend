import logo from './logo.svg';
import './css/App.css';
import MarketingFade from './HomePageComponents/MarketingFade.js';
import PageHeader from './HomePageComponents/PageHeader.js';

function App() {
  return (
    <div className="App">
      <PageHeader></PageHeader>
      <header className="App-header">
        <img src={"images/image0.jpeg"} className="App-logo" alt="logo" />
        <p>
          Careerible.com, making you more <br/> <MarketingFade></MarketingFade>
        </p>
      </header>
    </div>
  );
}

export default App;
