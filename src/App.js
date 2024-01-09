import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Brands from "./Components/Brands/Brands";
import Castomers from "./Components/Customers/Castomers";
import Explore from "./Components/Explore/Explore";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/HeroSection/Hero";
import Search from "./Components/Search/Search";
import Service from "./Components/Services/Service";

function App() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Search />
      <Brands />
      <Explore />
      <Service />
      <Castomers />
      <Blogs />
      <Footer/>
    </div>
  );
}

export default App;
