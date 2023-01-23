import Movies from "./Movies";

function App() {
   return <div>
     <NavBar />
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