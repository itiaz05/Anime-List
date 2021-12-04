import './App.css';
import Header from "./components/Header/Header";
//should replace pictureAlt with {formatMessage({id: 'header.logo.picture_alt'})}

function App() {
  return (
    <div className="App">
      <Header pictureAlt="Logo" msg="Hello Visitor"/>
    </div>
  );
}

export default App;
