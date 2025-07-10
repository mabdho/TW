import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import { Aarhus } from "@/pages/cities/Aarhus";
import { Accra } from "@/pages/cities/Accra";
import { AddisAbaba } from "@/pages/cities/AddisAbaba";
import { Adelaide } from "@/pages/cities/Adelaide";
import { Ahmedabad } from "@/pages/cities/Ahmedabad";
import { Albuquerque } from "@/pages/cities/Albuquerque";
import { Algiers } from "@/pages/cities/Algiers";
import { AliceSprings } from "@/pages/cities/AliceSprings";
import { Antwerp } from "@/pages/cities/Antwerp";
import { Arequipa } from "@/pages/cities/Arequipa";
import { Asuncion } from "@/pages/cities/Asuncion";
import { Auckland } from "@/pages/cities/Auckland";
import { Austin } from "@/pages/cities/Austin";
import { Bandung } from "@/pages/cities/Bandung";
import { Barranquilla } from "@/pages/cities/Barranquilla";
import { Belgrade } from "@/pages/cities/Belgrade";
import { BeloHorizonte } from "@/pages/cities/BeloHorizonte";
import { Bergen } from "@/pages/cities/Bergen";
import { Bilbao } from "@/pages/cities/Bilbao";
import { Bologna } from "@/pages/cities/Bologna";
import { Bordeaux } from "@/pages/cities/Bordeaux";
import { Brisbane } from "@/pages/cities/Brisbane";
import { Bucharest } from "@/pages/cities/Bucharest";
import { Busan } from "@/pages/cities/Busan";
import { Calgary } from "@/pages/cities/Calgary";
import { CapeTown } from "@/pages/cities/CapeTown";
import { Cartagena } from "@/pages/cities/Cartagena";
import { Casablanca } from "@/pages/cities/Casablanca";
import { Christchurch } from "@/pages/cities/Christchurch";
import { Copenhagen } from "@/pages/cities/Copenhagen";
import { Cusco } from "@/pages/cities/Cusco";
import { Dakar } from "@/pages/cities/Dakar";
import { Darwin } from "@/pages/cities/Darwin";
import { Ghent } from "@/pages/cities/Ghent";
import { Gothenburg } from "@/pages/cities/Gothenburg";
import { Guadalajara } from "@/pages/cities/Guadalajara";
import { Guayaquil } from "@/pages/cities/Guayaquil";
import { Helsinki } from "@/pages/cities/Helsinki";
import { Hobart } from "@/pages/cities/Hobart";
import { Krakow } from "@/pages/cities/Krakow";
import { Lagos } from "@/pages/cities/Lagos";
import { Lyon } from "@/pages/cities/Lyon";
import { Marrakech } from "@/pages/cities/Marrakech";
import { Marseille } from "@/pages/cities/Marseille";
import { Medellin } from "@/pages/cities/Medellin";
import { Nashville } from "@/pages/cities/Nashville";
import { Nice } from "@/pages/cities/Nice";
import { Ottawa } from "@/pages/cities/Ottawa";
import { Palermo } from "@/pages/cities/Palermo";
import { Perth } from "@/pages/cities/Perth";
import { QuebecCity } from "@/pages/cities/QuebecCity";
import { Quito } from "@/pages/cities/Quito";
import { Salvador } from "@/pages/cities/Salvador";
import { Seville } from "@/pages/cities/Seville";
import { Stockholm } from "@/pages/cities/Stockholm";
import { Strasbourg } from "@/pages/cities/Strasbourg";
import { Suva } from "@/pages/cities/Suva";
import { Tokyo } from "@/pages/cities/Tokyo";
import { Tunis } from "@/pages/cities/Tunis";
import { Turin } from "@/pages/cities/Turin";
import { Valencia } from "@/pages/cities/Valencia";
import { Warsaw } from "@/pages/cities/Warsaw";
import { Wellington } from "@/pages/cities/Wellington";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
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
      <Route path="/brisbane" component={Brisbane} />
      <Route path="/bucharest" component={Bucharest} />
      <Route path="/busan" component={Busan} />
      <Route path="/calgary" component={Calgary} />
      <Route path="/cape-town" component={CapeTown} />
      <Route path="/cartagena" component={Cartagena} />
      <Route path="/casablanca" component={Casablanca} />
      <Route path="/christchurch" component={Christchurch} />
      <Route path="/copenhagen" component={Copenhagen} />
      <Route path="/cusco" component={Cusco} />
      <Route path="/dakar" component={Dakar} />
      <Route path="/darwin" component={Darwin} />
      <Route path="/ghent" component={Ghent} />
      <Route path="/gothenberg" component={Gothenburg} />
      <Route path="/guadalajara" component={Guadalajara} />
      <Route path="/guayaquil" component={Guayaquil} />
      <Route path="/helsinki" component={Helsinki} />
      <Route path="/hobart" component={Hobart} />
      <Route path="/krakow" component={Krakow} />
      <Route path="/lagos" component={Lagos} />
      <Route path="/lyon" component={Lyon} />
      <Route path="/marrakech" component={Marrakech} />
      <Route path="/marseille" component={Marseille} />
      <Route path="/medellin" component={Medellin} />
      <Route path="/nashville" component={Nashville} />
      <Route path="/nice" component={Nice} />
      <Route path="/ottawa" component={Ottawa} />
      <Route path="/palermo" component={Palermo} />
      <Route path="/perth" component={Perth} />
      <Route path="/quebec-city" component={QuebecCity} />
      <Route path="/quito" component={Quito} />
      <Route path="/salvador" component={Salvador} />
      <Route path="/seville" component={Seville} />
      <Route path="/stockholm" component={Stockholm} />
      <Route path="/strasbourg" component={Strasbourg} />
      <Route path="/suva" component={Suva} />
      <Route path="/tokyo" component={Tokyo} />
      <Route path="/tunis" component={Tunis} />
      <Route path="/turin" component={Turin} />
      <Route path="/valencia" component={Valencia} />
      <Route path="/warsaw" component={Warsaw} />
      <Route path="/wellington" component={Wellington} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
