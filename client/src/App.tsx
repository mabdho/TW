import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import NotFound from './pages/not-found';
import { Aarhus } from "./pages/cities/Aarhus";
import { Accra } from "./pages/cities/Accra";
import { AddisAbaba } from "./pages/cities/AddisAbaba";
import { Adelaide } from "./pages/cities/Adelaide";
import { Ahmedabad } from "./pages/cities/Ahmedabad";
import { Albuquerque } from "./pages/cities/Albuquerque";
import { Algiers } from "./pages/cities/Algiers";
import { AliceSprings } from "./pages/cities/AliceSprings";
import { Antwerp } from "./pages/cities/Antwerp";
import { Arequipa } from "./pages/cities/Arequipa";
import { Asuncin } from "./pages/cities/Asuncin";
import { Asuncion } from "./pages/cities/Asuncion";
import { Auckland } from "./pages/cities/Auckland";
import { Austin } from "./pages/cities/Austin";
import { Bandung } from "./pages/cities/Bandung";
import { Barranquilla } from "./pages/cities/Barranquilla";
import { Belgrade } from "./pages/cities/Belgrade";
import { BeloHorizonte } from "./pages/cities/BeloHorizonte";
import { Bergen } from "./pages/cities/Bergen";
import { Bilbao } from "./pages/cities/Bilbao";
import { Bologna } from "./pages/cities/Bologna";
import { Bordeaux } from "./pages/cities/Bordeaux";
import { Bratislava } from "./pages/cities/Bratislava";
import { Brisbane } from "./pages/cities/Brisbane";
import { Brno } from "./pages/cities/Brno";
import { Broome } from "./pages/cities/Broome";
import { Bucharest } from "./pages/cities/Bucharest";
import { Busan } from "./pages/cities/Busan";
import { Cairns } from "./pages/cities/Cairns";
import { Cairo } from "./pages/cities/Cairo";
import { Calgary } from "./pages/cities/Calgary";
import { Cali } from "./pages/cities/Cali";
import { CapeTown } from "./pages/cities/CapeTown";
import { Cartagena } from "./pages/cities/Cartagena";
import { Casablanca } from "./pages/cities/Casablanca";
import { Cebu } from "./pages/cities/Cebu";
import { Charleston } from "./pages/cities/Charleston";
import { ChiangMai } from "./pages/cities/ChiangMai";
import { Christchurch } from "./pages/cities/Christchurch";
import { Colombo } from "./pages/cities/Colombo";
import { Columbus } from "./pages/cities/Columbus";
import { Copenhagen } from "./pages/cities/Copenhagen";
import { Crdoba } from "./pages/cities/Crdoba";
import { Curitiba } from "./pages/cities/Curitiba";
import { Cusco } from "./pages/cities/Cusco";
import { DaNang } from "./pages/cities/DaNang";
import { Dakar } from "./pages/cities/Dakar";
import { Dalat } from "./pages/cities/Dalat";
import { DarEsSalaam } from "./pages/cities/DarEsSalaam";
import { Darwin } from "./pages/cities/Darwin";
import { Debrecen } from "./pages/cities/Debrecen";
import { Edmonton } from "./pages/cities/Edmonton";
import { Fukuoka } from "./pages/cities/Fukuoka";
import { Gaborone } from "./pages/cities/Gaborone";
import { Gdansk } from "./pages/cities/Gdansk";
import { Genoa } from "./pages/cities/Genoa";
import { Ghent } from "./pages/cities/Ghent";
import { GoldCoast } from "./pages/cities/GoldCoast";
import { Gothenburg } from "./pages/cities/Gothenburg";
import { Guadalajara } from "./pages/cities/Guadalajara";
import { GuatemalaCity } from "./pages/cities/GuatemalaCity";
import { Guayaquil } from "./pages/cities/Guayaquil";
import { Halifax } from "./pages/cities/Halifax";
import { Hanoi } from "./pages/cities/Hanoi";
import { Harare } from "./pages/cities/Harare";
import { Havana } from "./pages/cities/Havana";
import { Helsinki } from "./pages/cities/Helsinki";
import { Hobart } from "./pages/cities/Hobart";
import { HoiAn } from "./pages/cities/HoiAn";
import { Indianapolis } from "./pages/cities/Indianapolis";
import { Ipoh } from "./pages/cities/Ipoh";
import { Jaipur } from "./pages/cities/Jaipur";
import { Johannesburg } from "./pages/cities/Johannesburg";
import { Kampala } from "./pages/cities/Kampala";
import { KansasCity } from "./pages/cities/KansasCity";
import { Kathmandu } from "./pages/cities/Kathmandu";
import { Kigali } from "./pages/cities/Kigali";
import { Kingston } from "./pages/cities/Kingston";
import { Krakow } from "./pages/cities/Krakow";
import { LaPaz } from "./pages/cities/LaPaz";
import { Lagos } from "./pages/cities/Lagos";
import { Lahore } from "./pages/cities/Lahore";
import { Ljubljana } from "./pages/cities/Ljubljana";
import { Luanda } from "./pages/cities/Luanda";
import { LuangPrabang } from "./pages/cities/LuangPrabang";
import { Lusaka } from "./pages/cities/Lusaka";
import { Lyon } from "./pages/cities/Lyon";
import { Malacca } from "./pages/cities/Malacca";
import { Malaga } from "./pages/cities/Malaga";
import { Malm } from "./pages/cities/Malm";
import { Manaus } from "./pages/cities/Manaus";
import { Maputo } from "./pages/cities/Maputo";
import { Maracaibo } from "./pages/cities/Maracaibo";
import { Marrakech } from "./pages/cities/Marrakech";
import { Marseille } from "./pages/cities/Marseille";
import { Medellin } from "./pages/cities/Medellin";
import { Milwaukee } from "./pages/cities/Milwaukee";
import { Montevideo } from "./pages/cities/Montevideo";
import { Nairobi } from "./pages/cities/Nairobi";
import { Nashville } from "./pages/cities/Nashville";
import { NewOrleans } from "./pages/cities/NewOrleans";
import { Nice } from "./pages/cities/Nice";
import { Nouma } from "./pages/cities/Nouma";
import { Oaxaca } from "./pages/cities/Oaxaca";
import { Oslo } from "./pages/cities/Oslo";
import { Ottawa } from "./pages/cities/Ottawa";
import { Palermo } from "./pages/cities/Palermo";
import { PanamaCity } from "./pages/cities/PanamaCity";
import { Papeete } from "./pages/cities/Papeete";
import { Penang } from "./pages/cities/Penang";
import { Perth } from "./pages/cities/Perth";
import { PortMoresby } from "./pages/cities/PortMoresby";
import { Portland } from "./pages/cities/Portland";
import { Porto } from "./pages/cities/Porto";
import { QuebecCity } from "./pages/cities/QuebecCity";
import { Queenstown } from "./pages/cities/Queenstown";
import { Quito } from "./pages/cities/Quito";
import { Reykjavik } from "./pages/cities/Reykjavik";
import { Riga } from "./pages/cities/Riga";
import { Rosario } from "./pages/cities/Rosario";
import { Sacramento } from "./pages/cities/Sacramento";
import { SaltLakeCity } from "./pages/cities/SaltLakeCity";
import { Salvador } from "./pages/cities/Salvador";
import { SanAntonio } from "./pages/cities/SanAntonio";
import { SanJose } from "./pages/cities/SanJose";
import { SanJuan } from "./pages/cities/SanJuan";
import { Savannah } from "./pages/cities/Savannah";
import { Seville } from "./pages/cities/Seville";
import { SiemReap } from "./pages/cities/SiemReap";
import { Sofia } from "./pages/cities/Sofia";
import { Stockholm } from "./pages/cities/Stockholm";
import { Strasbourg } from "./pages/cities/Strasbourg";
import { Sucre } from "./pages/cities/Sucre";
import { Surabaya } from "./pages/cities/Surabaya";
import { Suva } from "./pages/cities/Suva";
import { Tallinn } from "./pages/cities/Tallinn";
import { Tampere } from "./pages/cities/Tampere";
import { TheHague } from "./pages/cities/TheHague";
import { Thessaloniki } from "./pages/cities/Thessaloniki";
import { Tokyo } from "./pages/cities/Tokyo";
import { Tunis } from "./pages/cities/Tunis";
import { Turin } from "./pages/cities/Turin";
import { Utrecht } from "./pages/cities/Utrecht";
import { Valencia } from "./pages/cities/Valencia";
import { Valparaiso } from "./pages/cities/Valparaiso";
import { Victoria } from "./pages/cities/Victoria";
import { Vilnius } from "./pages/cities/Vilnius";
import { Warsaw } from "./pages/cities/Warsaw";
import { Wellington } from "./pages/cities/Wellington";
import { Windhoek } from "./pages/cities/Windhoek";
import { Winnipeg } from "./pages/cities/Winnipeg";
import { Yogyakarta } from "./pages/cities/Yogyakarta";
import { Zagreb } from "./pages/cities/Zagreb";
import { Zaragoza } from "./pages/cities/Zaragoza";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
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
        <Route path="/asuncin" element={<Asuncin />} />
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
        <Route path="/bratislava" element={<Bratislava />} />
        <Route path="/brisbane" element={<Brisbane />} />
        <Route path="/brno" element={<Brno />} />
        <Route path="/broome" element={<Broome />} />
        <Route path="/bucharest" element={<Bucharest />} />
        <Route path="/busan" element={<Busan />} />
        <Route path="/cairns" element={<Cairns />} />
        <Route path="/cairo" element={<Cairo />} />
        <Route path="/calgary" element={<Calgary />} />
        <Route path="/cali" element={<Cali />} />
        <Route path="/cape-town" element={<CapeTown />} />
        <Route path="/cartagena" element={<Cartagena />} />
        <Route path="/casablanca" element={<Casablanca />} />
        <Route path="/cebu" element={<Cebu />} />
        <Route path="/charleston" element={<Charleston />} />
        <Route path="/chiang-mai" element={<ChiangMai />} />
        <Route path="/christchurch" element={<Christchurch />} />
        <Route path="/colombo" element={<Colombo />} />
        <Route path="/columbus" element={<Columbus />} />
        <Route path="/copenhagen" element={<Copenhagen />} />
        <Route path="/crdoba" element={<Crdoba />} />
        <Route path="/curitiba" element={<Curitiba />} />
        <Route path="/cusco" element={<Cusco />} />
        <Route path="/da-nang" element={<DaNang />} />
        <Route path="/dakar" element={<Dakar />} />
        <Route path="/dalat" element={<Dalat />} />
        <Route path="/dar-es-salaam" element={<DarEsSalaam />} />
        <Route path="/darwin" element={<Darwin />} />
        <Route path="/debrecen" element={<Debrecen />} />
        <Route path="/edmonton" element={<Edmonton />} />
        <Route path="/fukuoka" element={<Fukuoka />} />
        <Route path="/gaborone" element={<Gaborone />} />
        <Route path="/gdansk" element={<Gdansk />} />
        <Route path="/genoa" element={<Genoa />} />
        <Route path="/ghent" element={<Ghent />} />
        <Route path="/gold-coast" element={<GoldCoast />} />
        <Route path="/gothenburg" element={<Gothenburg />} />
        <Route path="/guadalajara" element={<Guadalajara />} />
        <Route path="/guatemala-city" element={<GuatemalaCity />} />
        <Route path="/guayaquil" element={<Guayaquil />} />
        <Route path="/halifax" element={<Halifax />} />
        <Route path="/hanoi" element={<Hanoi />} />
        <Route path="/harare" element={<Harare />} />
        <Route path="/havana" element={<Havana />} />
        <Route path="/helsinki" element={<Helsinki />} />
        <Route path="/hobart" element={<Hobart />} />
        <Route path="/hoi-an" element={<HoiAn />} />
        <Route path="/indianapolis" element={<Indianapolis />} />
        <Route path="/ipoh" element={<Ipoh />} />
        <Route path="/jaipur" element={<Jaipur />} />
        <Route path="/johannesburg" element={<Johannesburg />} />
        <Route path="/kampala" element={<Kampala />} />
        <Route path="/kansas-city" element={<KansasCity />} />
        <Route path="/kathmandu" element={<Kathmandu />} />
        <Route path="/kigali" element={<Kigali />} />
        <Route path="/kingston" element={<Kingston />} />
        <Route path="/krakow" element={<Krakow />} />
        <Route path="/la-paz" element={<LaPaz />} />
        <Route path="/lagos" element={<Lagos />} />
        <Route path="/lahore" element={<Lahore />} />
        <Route path="/ljubljana" element={<Ljubljana />} />
        <Route path="/luanda" element={<Luanda />} />
        <Route path="/luang-prabang" element={<LuangPrabang />} />
        <Route path="/lusaka" element={<Lusaka />} />
        <Route path="/lyon" element={<Lyon />} />
        <Route path="/malacca" element={<Malacca />} />
        <Route path="/malaga" element={<Malaga />} />
        <Route path="/malm" element={<Malm />} />
        <Route path="/manaus" element={<Manaus />} />
        <Route path="/maputo" element={<Maputo />} />
        <Route path="/maracaibo" element={<Maracaibo />} />
        <Route path="/marrakech" element={<Marrakech />} />
        <Route path="/marseille" element={<Marseille />} />
        <Route path="/medellin" element={<Medellin />} />
        <Route path="/milwaukee" element={<Milwaukee />} />
        <Route path="/montevideo" element={<Montevideo />} />
        <Route path="/nairobi" element={<Nairobi />} />
        <Route path="/nashville" element={<Nashville />} />
        <Route path="/new-orleans" element={<NewOrleans />} />
        <Route path="/nice" element={<Nice />} />
        <Route path="/nouma" element={<Nouma />} />
        <Route path="/oaxaca" element={<Oaxaca />} />
        <Route path="/oslo" element={<Oslo />} />
        <Route path="/ottawa" element={<Ottawa />} />
        <Route path="/palermo" element={<Palermo />} />
        <Route path="/panama-city" element={<PanamaCity />} />
        <Route path="/papeete" element={<Papeete />} />
        <Route path="/penang" element={<Penang />} />
        <Route path="/perth" element={<Perth />} />
        <Route path="/port-moresby" element={<PortMoresby />} />
        <Route path="/portland" element={<Portland />} />
        <Route path="/porto" element={<Porto />} />
        <Route path="/quebec-city" element={<QuebecCity />} />
        <Route path="/queenstown" element={<Queenstown />} />
        <Route path="/quito" element={<Quito />} />
        <Route path="/reykjavik" element={<Reykjavik />} />
        <Route path="/riga" element={<Riga />} />
        <Route path="/rosario" element={<Rosario />} />
        <Route path="/sacramento" element={<Sacramento />} />
        <Route path="/salt-lake-city" element={<SaltLakeCity />} />
        <Route path="/salvador" element={<Salvador />} />
        <Route path="/san-antonio" element={<SanAntonio />} />
        <Route path="/san-jose" element={<SanJose />} />
        <Route path="/san-juan" element={<SanJuan />} />
        <Route path="/savannah" element={<Savannah />} />
        <Route path="/seville" element={<Seville />} />
        <Route path="/siem-reap" element={<SiemReap />} />
        <Route path="/sofia" element={<Sofia />} />
        <Route path="/stockholm" element={<Stockholm />} />
        <Route path="/strasbourg" element={<Strasbourg />} />
        <Route path="/sucre" element={<Sucre />} />
        <Route path="/surabaya" element={<Surabaya />} />
        <Route path="/suva" element={<Suva />} />
        <Route path="/tallinn" element={<Tallinn />} />
        <Route path="/tampere" element={<Tampere />} />
        <Route path="/the-hague" element={<TheHague />} />
        <Route path="/thessaloniki" element={<Thessaloniki />} />
        <Route path="/tokyo" element={<Tokyo />} />
        <Route path="/tunis" element={<Tunis />} />
        <Route path="/turin" element={<Turin />} />
        <Route path="/utrecht" element={<Utrecht />} />
        <Route path="/valencia" element={<Valencia />} />
        <Route path="/valparaiso" element={<Valparaiso />} />
        <Route path="/victoria" element={<Victoria />} />
        <Route path="/vilnius" element={<Vilnius />} />
        <Route path="/warsaw" element={<Warsaw />} />
        <Route path="/wellington" element={<Wellington />} />
        <Route path="/windhoek" element={<Windhoek />} />
        <Route path="/winnipeg" element={<Winnipeg />} />
        <Route path="/yogyakarta" element={<Yogyakarta />} />
        <Route path="/zagreb" element={<Zagreb />} />
        <Route path="/zaragoza" element={<Zaragoza />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;