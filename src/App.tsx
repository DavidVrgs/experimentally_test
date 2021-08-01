import { useReducer } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import { initialState, Context, reducer } from "./common/store";
import 'boxicons'
import './App.css';


/** Layouts */
import Main from "./layouts/main"

/** Components */
import Home from "./pages/home/home"

interface IAppRoute {
  component: React.FC<object>,
  layout: React.FC,
  path: string
}

const AppRoute = ({ component: Component, layout: Layout, ...rest }: IAppRoute) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )}>

  </Route>
)

const App: React.FC = () => {

  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ store, dispatch }}>
      <Router>
        <AppRoute path="/" layout={Main} component={Home}></AppRoute>
      </Router>
    </Context.Provider>
  );
}

export default App;
