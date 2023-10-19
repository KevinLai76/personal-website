import './css/App.css';
import Header from './Header.js';
import Footer from './Footer';
import Body from './Body'

function App() {
  return (
    <div className="App">
      <div className= "app-header">
        <Header />
      </div>
      <div className= "app-body">
        <Body />
      </div>
      <div className= "app-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;