import Header from "./components/Header"

import Genre from "./components/Genre"
import FilmDesc from "./components/FilmDesc"
import Rating from "./components/Rating"
import ButtonBlock from "./components/ButtonBlock"
import Popular from "./components/Popular"
import AgeMark from "./components/AgeMark"
function App() {
  let filmTitle = 'Stranger Things';
  let filmDesc = 'In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.'
  return (
    <div className="container">
    <Header></Header>
     <div className="main-content">
      <Genre></Genre>
      <FilmDesc title = {filmTitle} desc = {filmDesc}></FilmDesc>
      <Rating></Rating>
      <ButtonBlock></ButtonBlock>
      <Popular></Popular>
     </div>
     <AgeMark></AgeMark>
    </div>
     

  )
}

export default App
