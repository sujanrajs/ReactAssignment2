import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Introduction from "./Components/Introduction/Introduction";
import Scrolldown from "./Components/Scrolldown/Scrolldown";
import Services from "./Layout/Services/Services";
import Techstacks from "./Components/Techstacks/Techstacks";
import Blogs from "./Layout/Blogs/Blogs";
import Contactus from "./Layout/Contactus/Contactus";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    /*
    <BrowserRouter>
      <Layout>
      <Routes>
        <Route path="/Header" element={<Header />} />
        <Route path="/Introduction" element={<Introduction />} />
        <Route path="/Scrolldown" element={<Scrolldown />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Techstacks" element={<Techstacks />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/Footer" element={<Footer />} />
      </Routes> 
      </Layout>
    </BrowserRouter>

    */
    <div className="App">
      <Header />
      <Introduction />
      <Scrolldown />
      <Services />
      <Techstacks />
      <Blogs />
      <Contactus />
      <Footer />
    </div>
  );
}

export default App;
