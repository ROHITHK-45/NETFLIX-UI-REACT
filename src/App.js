import './App.css';
import Row from './Row';
import request from './request'
import Banner from './Banner';
import Navbar from './Navbar';



function App() {
  return (
<div className="App">
<Navbar/>
  <Banner/>
  <Row  title="Neflix Orginals"fetchUrl={request.fetchNetflixOriginals} isLarge={true}/>
 <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
 <Row title="Top Rated" fetchUrl={request.fetchTopRated}/>
 <Row title="Action Movie" fetchUrl={request.fetchActionMovies}/>
 <Row title="Comedy Movie" fetchUrl={request.fetchComedyMovies}/>
 <Row title="Horror Movie" fetchUrl={request.fetchHorrorMovies}/>
 <Row title="Romance Movie" fetchUrl={request.fetchRomanceMovies}/>
 <Row title="Documentaries" fetchUrl={request.fetchDocumentaries}/>
</div>
  );
}

export default App;
