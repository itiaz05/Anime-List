import './App.css';
import Header from "./components/Header/Header";
import Anime from "./components/Anime/Anime";

//should replace pictureAlt with {formatMessage({id: 'header.logo.picture_alt'})} and msg with header.message.placeholder

function App() {
  return (
      <div className="App">
        <Header pictureAlt="Logo"
              hiMessage="Hello Visitor!"
              headerHeadline="My Animes Ranked" />
        <Anime name="JuJutsu Kaisen" rating="5" />
    </div>
  );
}

export default App;
