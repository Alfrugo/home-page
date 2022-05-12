
import Navbar from './components/Navbar'
import Home from './components/Home'
import Photography from './components/Photography'
import WebDev from './components/WebDev'

function App() {
  return (
    <div className='container w-full overflow-hidden'>
        <Navbar />
        <Home />
        <Photography />
        <WebDev />
    </div>
  );
}

export default App;
