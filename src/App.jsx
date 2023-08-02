import Shop from './Sections/Shop/Shop';
import { AppContainer } from './App.style'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Article from './Components/Article/Article';
import Header from './Components/Header/Header';
import Authentication from './Components/Authentication/Authentication';
import Home from './Sections/Home/Home'

function App() {
  return (
    <Router>
      <AppContainer>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/authentication" element={<Authentication/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/articles/:id" element={<Article/>} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
