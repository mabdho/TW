import { Route, Router } from 'wouter';
import { useLocation } from 'wouter';
import Home from './pages/home';
import NotFound from './pages/not-found';
import AdminPage from './pages/admin';
import BlogsPage from './pages/blogs';
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
import { Kingston } from "./pages/cities/Kingston";
import { Krakow } from "./pages/cities/Krakow";
import { LaPaz } from "./pages/cities/LaPaz";
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
import { Dubai } from "./pages/cities/Dubai";
import { NewYork } from "./pages/cities/NewYork";
import { Male } from "./pages/cities/Male";


// Define all valid routes
const validRoutes = [
  "/", "/blogs", "/aarhus", "/accra", "/addis-ababa", "/adelaide", "/ahmedabad", "/albuquerque", "/algiers", "/alice-springs", "/antwerp", "/arequipa", "/asuncin", "/asuncion", "/auckland", "/austin", "/bandung", "/barranquilla", "/belgrade", "/belo-horizonte", "/bergen", "/bilbao", "/bologna", "/bordeaux", "/bratislava", "/brisbane", "/brno", "/broome", "/bucharest", "/busan", "/cairns", "/cairo", "/calgary", "/cali", "/cape-town", "/cartagena", "/casablanca", "/cebu", "/charleston", "/chiang-mai", "/christchurch", "/colombo", "/columbus", "/copenhagen", "/crdoba", "/curitiba", "/cusco", "/da-nang", "/dakar", "/dalat", "/dar-es-salaam", "/darwin", "/debrecen", "/edmonton", "/fukuoka", "/gaborone", "/gdansk", "/genoa", "/ghent", "/gold-coast", "/gothenburg", "/guadalajara", "/guatemala-city", "/guayaquil", "/halifax", "/hanoi", "/harare", "/havana", "/helsinki", "/hobart", "/hoi-an", "/indianapolis", "/ipoh", "/jaipur", "/johannesburg", "/kampala", "/kansas-city", "/kathmandu", "/kigali", "/kingston", "/krakow", "/la-paz", "/lagos", "/lahore", "/ljubljana", "/luanda", "/luang-prabang", "/lusaka", "/lyon", "/malacca", "/malaga", "/male", "/malm", "/manaus", "/maputo", "/maracaibo", "/marrakech", "/marseille", "/medellin", "/milwaukee", "/montevideo", "/nairobi", "/nashville", "/new-orleans", "/new-york", "/norfolk", "/oporto", "/oslo", "/ottawa", "/palma", "/panama-city", "/papeete", "/penang", "/perth", "/port-moresby", "/portland", "/porto", "/quebec-city", "/queenstown", "/quito", "/reykjavik", "/riga", "/rosario", "/sacramento", "/salt-lake-city", "/salvador", "/san-antonio", "/san-jose", "/san-juan", "/savannah", "/seville", "/siem-reap", "/sofia", "/stockholm", "/strasbourg", "/sucre", "/surabaya", "/suva", "/tallinn", "/tampere", "/the-hague", "/thessaloniki", "/tokyo", "/tunis", "/turin", "/utrecht", "/valencia", "/valparaiso", "/victoria", "/vilnius", "/warsaw", "/wellington", "/windhoek", "/winnipeg", "/yogyakarta", "/zagreb", "/zaragoza", "/dubai", "/admin"
];

function ConditionalNotFound() {
  const [location] = useLocation();
  
  // Only render NotFound if the current path is not in our valid routes
  if (validRoutes.includes(location)) {
    return null;
  }
  
  return <NotFound />;
}

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/blogs" component={BlogsPage} />
      <Route path="/aarhus" component={Aarhus} />
      <Route path="/accra" component={Accra} />
      <Route path="/addis-ababa" component={AddisAbaba} />
      <Route path="/adelaide" component={Adelaide} />
      <Route path="/ahmedabad" component={Ahmedabad} />
      <Route path="/albuquerque" component={Albuquerque} />
      <Route path="/algiers" component={Algiers} />
      <Route path="/alice-springs" component={AliceSprings} />
      <Route path="/antwerp" component={Antwerp} />
      <Route path="/arequipa" component={Arequipa} />
      <Route path="/asuncin" component={Asuncin} />
      <Route path="/asuncion" component={Asuncion} />
      <Route path="/auckland" component={Auckland} />
      <Route path="/austin" component={Austin} />
      <Route path="/bandung" component={Bandung} />
      <Route path="/barranquilla" component={Barranquilla} />
      <Route path="/belgrade" component={Belgrade} />
      <Route path="/belo-horizonte" component={BeloHorizonte} />
      <Route path="/bergen" component={Bergen} />
      <Route path="/bilbao" component={Bilbao} />
      <Route path="/bologna" component={Bologna} />
      <Route path="/bordeaux" component={Bordeaux} />
      <Route path="/bratislava" component={Bratislava} />
      <Route path="/brisbane" component={Brisbane} />
      <Route path="/brno" component={Brno} />
      <Route path="/broome" component={Broome} />
      <Route path="/bucharest" component={Bucharest} />
      <Route path="/busan" component={Busan} />
      <Route path="/cairns" component={Cairns} />
      <Route path="/cairo" component={Cairo} />
      <Route path="/calgary" component={Calgary} />
      <Route path="/cali" component={Cali} />
      <Route path="/cape-town" component={CapeTown} />
      <Route path="/cartagena" component={Cartagena} />
      <Route path="/casablanca" component={Casablanca} />
      <Route path="/cebu" component={Cebu} />
      <Route path="/charleston" component={Charleston} />
      <Route path="/chiang-mai" component={ChiangMai} />
      <Route path="/christchurch" component={Christchurch} />
      <Route path="/colombo" component={Colombo} />
      <Route path="/columbus" component={Columbus} />
      <Route path="/copenhagen" component={Copenhagen} />
      <Route path="/crdoba" component={Crdoba} />
      <Route path="/curitiba" component={Curitiba} />
      <Route path="/cusco" component={Cusco} />
      <Route path="/da-nang" component={DaNang} />
      <Route path="/dakar" component={Dakar} />
      <Route path="/dalat" component={Dalat} />
      <Route path="/dar-es-salaam" component={DarEsSalaam} />
      <Route path="/darwin" component={Darwin} />
      <Route path="/debrecen" component={Debrecen} />
      <Route path="/edmonton" component={Edmonton} />
      <Route path="/fukuoka" component={Fukuoka} />
      <Route path="/gaborone" component={Gaborone} />
      <Route path="/gdansk" component={Gdansk} />
      <Route path="/genoa" component={Genoa} />
      <Route path="/ghent" component={Ghent} />
      <Route path="/gold-coast" component={GoldCoast} />
      <Route path="/gothenburg" component={Gothenburg} />
      <Route path="/guadalajara" component={Guadalajara} />
      <Route path="/guatemala-city" component={GuatemalaCity} />
      <Route path="/guayaquil" component={Guayaquil} />
      <Route path="/halifax" component={Halifax} />
      <Route path="/hanoi" component={Hanoi} />
      <Route path="/harare" component={Harare} />
      <Route path="/havana" component={Havana} />
      <Route path="/helsinki" component={Helsinki} />
      <Route path="/hobart" component={Hobart} />
      <Route path="/hoi-an" component={HoiAn} />
      <Route path="/indianapolis" component={Indianapolis} />
      <Route path="/ipoh" component={Ipoh} />
      <Route path="/jaipur" component={Jaipur} />
      <Route path="/johannesburg" component={Johannesburg} />
      <Route path="/kampala" component={Kampala} />
      <Route path="/kansas-city" component={KansasCity} />
      <Route path="/kathmandu" component={Kathmandu} />
      <Route path="/kingston" component={Kingston} />
      <Route path="/krakow" component={Krakow} />
      <Route path="/la-paz" component={LaPaz} />
      <Route path="/ljubljana" component={Ljubljana} />
      <Route path="/luanda" component={Luanda} />
      <Route path="/luang-prabang" component={LuangPrabang} />
      <Route path="/lusaka" component={Lusaka} />
      <Route path="/lyon" component={Lyon} />
      <Route path="/malacca" component={Malacca} />
      <Route path="/malaga" component={Malaga} />
      <Route path="/malm" component={Malm} />
      <Route path="/manaus" component={Manaus} />
      <Route path="/maputo" component={Maputo} />
      <Route path="/maracaibo" component={Maracaibo} />
      <Route path="/marrakech" component={Marrakech} />
      <Route path="/marseille" component={Marseille} />
      <Route path="/medellin" component={Medellin} />
      <Route path="/milwaukee" component={Milwaukee} />
      <Route path="/montevideo" component={Montevideo} />
      <Route path="/nairobi" component={Nairobi} />
      <Route path="/nashville" component={Nashville} />
      <Route path="/new-orleans" component={NewOrleans} />
      <Route path="/nice" component={Nice} />
      <Route path="/nouma" component={Nouma} />
      <Route path="/oaxaca" component={Oaxaca} />
      <Route path="/oslo" component={Oslo} />
      <Route path="/ottawa" component={Ottawa} />
      <Route path="/palermo" component={Palermo} />
      <Route path="/panama-city" component={PanamaCity} />
      <Route path="/papeete" component={Papeete} />
      <Route path="/penang" component={Penang} />
      <Route path="/perth" component={Perth} />
      <Route path="/port-moresby" component={PortMoresby} />
      <Route path="/portland" component={Portland} />
      <Route path="/porto" component={Porto} />
      <Route path="/quebec-city" component={QuebecCity} />
      <Route path="/queenstown" component={Queenstown} />
      <Route path="/quito" component={Quito} />
      <Route path="/reykjavik" component={Reykjavik} />
      <Route path="/riga" component={Riga} />
      <Route path="/rosario" component={Rosario} />
      <Route path="/sacramento" component={Sacramento} />
      <Route path="/salt-lake-city" component={SaltLakeCity} />
      <Route path="/salvador" component={Salvador} />
      <Route path="/san-antonio" component={SanAntonio} />
      <Route path="/san-jose" component={SanJose} />
      <Route path="/san-juan" component={SanJuan} />
      <Route path="/savannah" component={Savannah} />
      <Route path="/seville" component={Seville} />
      <Route path="/siem-reap" component={SiemReap} />
      <Route path="/sofia" component={Sofia} />
      <Route path="/stockholm" component={Stockholm} />
      <Route path="/strasbourg" component={Strasbourg} />
      <Route path="/sucre" component={Sucre} />
      <Route path="/surabaya" component={Surabaya} />
      <Route path="/suva" component={Suva} />
      <Route path="/tallinn" component={Tallinn} />
      <Route path="/tampere" component={Tampere} />
      <Route path="/the-hague" component={TheHague} />
      <Route path="/thessaloniki" component={Thessaloniki} />
      <Route path="/tokyo" component={Tokyo} />
      <Route path="/tunis" component={Tunis} />
      <Route path="/turin" component={Turin} />
      <Route path="/utrecht" component={Utrecht} />
      <Route path="/valencia" component={Valencia} />
      <Route path="/valparaiso" component={Valparaiso} />
      <Route path="/victoria" component={Victoria} />
      <Route path="/vilnius" component={Vilnius} />
      <Route path="/warsaw" component={Warsaw} />
      <Route path="/wellington" component={Wellington} />
      <Route path="/windhoek" component={Windhoek} />
      <Route path="/winnipeg" component={Winnipeg} />
      <Route path="/yogyakarta" component={Yogyakarta} />
      <Route path="/zagreb" component={Zagreb} />
      <Route path="/zaragoza" component={Zaragoza} />
      <Route path="/dubai" component={Dubai} />
      <Route path="/new-york" component={NewYork} />
      <Route path="/male" component={Male} />
      <Route path="/admin" component={AdminPage} />
      <ConditionalNotFound />
    </Router>
  );
}

export default App;