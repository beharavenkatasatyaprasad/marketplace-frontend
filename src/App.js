import './App.css';
import Topbar from './components/topbar';
import Filters from './components/filters';
import Searchbar from './components/searchbar';
import CardGroup from './components/CardGroup';

function App() {
  return (
    <>
    <div className="container-fluid nav-group">
      <Topbar />
      <Searchbar />
      <Filters />
    </div>
    <div className="container-fluid">
      <CardGroup />
    </div>
    </>
  );
}

export default App;
