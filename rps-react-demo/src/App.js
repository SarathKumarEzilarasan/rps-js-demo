import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  // const name = "demo"
  // const name = {a:1 , b:2};


  return (
    <div className="App">
      {/* <p>{name}</p> */}
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;

// jsx -> js + xml 