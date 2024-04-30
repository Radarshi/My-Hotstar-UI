import Footer from "./Components/footer"
import GenreMovieList from "./Components/GenreMovieList"
import Header from "./Components/header"
import ProductionHouse from "./Components/ProductionHouse"
import Slider from "./Components/Slider"
function App() {

  return (
    <>
      <div>
        <Header></Header>
        <Slider />
        <ProductionHouse />
        <GenreMovieList></GenreMovieList>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
