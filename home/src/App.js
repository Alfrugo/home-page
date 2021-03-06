
import Navbar from './components/Navbar'
import Home from './components/Home'
import Photography from './components/Photography'
import WebDev from './components/WebDev'
import Contact from './components/Contact'

function App() {
  return (
    <div id='appContainer' className='container w-full'>
        <Navbar />
        <Home />
        <Photography />
        <WebDev />
        <Contact />
    </div>
  );
}

export default App;
