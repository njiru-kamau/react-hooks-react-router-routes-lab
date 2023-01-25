import Movies from "./Movies";
import NavLink from "./NavLink";
function App() {
   return <div>
     <NavLink />
  <Switch>
    <Route exact path= "/actors">
      <Actors />
    </Route>
    <Route exact path= "/directors">
      <Directors />
    </Route>
    <Route exact path= "/movies">
      <Movies />
    </Route>
    <Route exact path= "/">
      <Home />
    </Route>
  </Switch>
  </div>;
}

export default App;