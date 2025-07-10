import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import { Auckland } from "@/pages/cities/Auckland";
import { Copenhagen } from "@/pages/cities/Copenhagen";
import { Tokyo } from "@/pages/cities/Tokyo";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/auckland" component={Auckland} />
      <Route path="/copenhagen" component={Copenhagen} />
      <Route path="/tokyo" component={Tokyo} />
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
