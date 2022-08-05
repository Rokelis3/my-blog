import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import data from './data';


function App() {
const cardItem = data.map(item =>{
  return <Card 
    item={item}
  />
})
  return (
    <div className="App">
      <Header />
      {cardItem}
    </div>
  );
}

export default App;
