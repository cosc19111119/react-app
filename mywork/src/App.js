
import './App.css';
import Button from './components/Button';
import Text from './components/Text';
import NavBar from './components/NavBar';
import Card from './components/Card';
import Increment from './components/component2/Increment';
import Showtxt from './components/component2/Showtxt';
function App() {
  
  
  return (


    <div className="App">
     

       <NavBar />
      Umar Farooq
      <h1>hdhf</h1>
      <image className='hgt' />
       <Button />
      <Text />
      <Card images="https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-760x400.webp" title="my name is umar farooq" variant="primery" style="txt" />
      <Increment/>
      <Showtxt/>
    </div>
  );
}

export default App;
