
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import { Aarhus } from './pages/cities/Aarhus';
import { Accra } from './pages/cities/Accra';
import { AddisAbaba } from './pages/cities/AddisAbaba';
import { Adelaide } from './pages/cities/Adelaide';
import { Ahmedabad } from './pages/cities/Ahmedabad';
import { Albuquerque } from './pages/cities/Albuquerque';
import { Algiers } from './pages/cities/Algiers';
import { AliceSprings } from './pages/cities/AliceSprings';
import { Antwerp } from './pages/cities/Antwerp';
import { Arequipa } from './pages/cities/Arequipa';
import { Asuncion } from './pages/cities/Asuncion';
import { Auckland } from './pages/cities/Auckland';
import { Austin } from './pages/cities/Austin';
import { Bandung } from './pages/cities/Bandung';
import { Barranquilla } from './pages/cities/Barranquilla';
import { Belgrade } from './pages/cities/Belgrade';
import { BeloHorizonte } from './pages/cities/BeloHorizonte';
import { Bergen } from './pages/cities/Bergen';
import { Bilbao } from './pages/cities/Bilbao';
import { Bologna } from './pages/cities/Bologna';
import { Bordeaux } from './pages/cities/Bordeaux';
import { Brisbane } from './pages/cities/Brisbane';
import { Bucharest } from './pages/cities/Bucharest';
import { Busan } from './pages/cities/Busan';
import { Calgary } from './pages/cities/Calgary';
import { CapeTown } from './pages/cities/CapeTown';
import { Cartagena } from './pages/cities/Cartagena';
import { Casablanca } from './pages/cities/Casablanca';
import { Christchurch } from './pages/cities/Christchurch';
import { Copenhagen } from './pages/cities/Copenhagen';
import { Cusco } from './pages/cities/Cusco';
import { Dakar } from './pages/cities/Dakar';
import { Darwin } from './pages/cities/Darwin';
import { Ghent } from './pages/cities/Ghent';
import { Gothenburg } from './pages/cities/Gothenburg';
import { Guadalajara } from './pages/cities/Guadalajara';
import { Guayaquil } from './pages/cities/Guayaquil';
import { Helsinki } from './pages/cities/Helsinki';
import { Hobart } from './pages/cities/Hobart';
import { Krakow } from './pages/cities/Krakow';
import { Lagos } from './pages/cities/Lagos';
import { Lyon } from './pages/cities/Lyon';
import { Marrakech } from './pages/cities/Marrakech';
import { Marseille } from './pages/cities/Marseille';
import { Medellin } from './pages/cities/Medellin';
import { Nashville } from './pages/cities/Nashville';
import { Nice } from './pages/cities/Nice';
import { Ottawa } from './pages/cities/Ottawa';
import { Palermo } from './pages/cities/Palermo';
import { Perth } from './pages/cities/Perth';
import { QuebecCity } from './pages/cities/QuebecCity';
import { Quito } from './pages/cities/Quito';
import { Salvador } from './pages/cities/Salvador';
import { Seville } from './pages/cities/Seville';
import { Stockholm } from './pages/cities/Stockholm';
import { Strasbourg } from './pages/cities/Strasbourg';
import { Suva } from './pages/cities/Suva';
import { Tokyo } from './pages/cities/Tokyo';
import { Tunis } from './pages/cities/Tunis';
import { Turin } from './pages/cities/Turin';
import { Valencia } from './pages/cities/Valencia';
import { Warsaw } from './pages/cities/Warsaw';
import { Wellington } from './pages/cities/Wellington';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/aarhus" element={<Aarhus />} />
        <Route path="/accra" element={<Accra />} />
        <Route path="/addis-ababa" element={<AddisAbaba />} />
        <Route path="/adelaide" element={<Adelaide />} />
        <Route path="/ahmedabad" element={<Ahmedabad />} />
        <Route path="/albuquerque" element={<Albuquerque />} />
        <Route path="/algiers" element={<Algiers />} />
        <Route path="/alice-springs" element={<AliceSprings />} />
        <Route path="/antwerp" element={<Antwerp />} />
        <Route path="/arequipa" element={<Arequipa />} />
        <Route path="/asuncion" element={<Asuncion />} />
        <Route path="/auckland" element={<Auckland />} />
        <Route path="/austin" element={<Austin />} />
        <Route path="/bandung" element={<Bandung />} />
        <Route path="/barranquilla" element={<Barranquilla />} />
        <Route path="/belgrade" element={<Belgrade />} />
        <Route path="/belo-horizonte" element={<BeloHorizonte />} />
        <Route path="/bergen" element={<Bergen />} />
        <Route path="/bilbao" element={<Bilbao />} />
        <Route path="/bologna" element={<Bologna />} />
        <Route path="/bordeaux" element={<Bordeaux />} />
        <Route path="/brisbane" element={<Brisbane />} />
        <Route path="/bucharest" element={<Bucharest />} />
        <Route path="/busan" element={<Busan />} />
        <Route path="/calgary" element={<Calgary />} />
        <Route path="/cape-town" element={<CapeTown />} />
        <Route path="/cartagena" element={<Cartagena />} />
        <Route path="/casablanca" element={<Casablanca />} />
        <Route path="/christchurch" element={<Christchurch />} />
        <Route path="/copenhagen" element={<Copenhagen />} />
        <Route path="/cusco" element={<Cusco />} />
        <Route path="/dakar" element={<Dakar />} />
        <Route path="/darwin" element={<Darwin />} />
        <Route path="/ghent" element={<Ghent />} />
        <Route path="/gothenberg" element={<Gothenburg />} />
        <Route path="/guadalajara" element={<Guadalajara />} />
        <Route path="/guayaquil" element={<Guayaquil />} />
        <Route path="/helsinki" element={<Helsinki />} />
        <Route path="/hobart" element={<Hobart />} />
        <Route path="/krakow" element={<Krakow />} />
        <Route path="/lagos" element={<Lagos />} />
        <Route path="/lyon" element={<Lyon />} />
        <Route path="/marrakech" element={<Marrakech />} />
        <Route path="/marseille" element={<Marseille />} />
        <Route path="/medellin" element={<Medellin />} />
        <Route path="/nashville" element={<Nashville />} />
        <Route path="/nice" element={<Nice />} />
        <Route path="/ottawa" element={<Ottawa />} />
        <Route path="/palermo" element={<Palermo />} />
        <Route path="/perth" element={<Perth />} />
        <Route path="/quebec-city" element={<QuebecCity />} />
        <Route path="/quito" element={<Quito />} />
        <Route path="/salvador" element={<Salvador />} />
        <Route path="/seville" element={<Seville />} />
        <Route path="/stockholm" element={<Stockholm />} />
        <Route path="/strasbourg" element={<Strasbourg />} />
        <Route path="/suva" element={<Suva />} />
        <Route path="/tokyo" element={<Tokyo />} />
        <Route path="/tunis" element={<Tunis />} />
        <Route path="/turin" element={<Turin />} />
        <Route path="/valencia" element={<Valencia />} />
        <Route path="/warsaw" element={<Warsaw />} />
        <Route path="/wellington" element={<Wellington />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
