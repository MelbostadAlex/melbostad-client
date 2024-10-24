import Header from "../components/Header";
import Intro from "../components/Intro";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

function App() {
    return (
        <>
            <Header route='home'></Header> 
            <Intro></Intro>
            <Skills></Skills>
            <Footer></Footer>
        </>
    );
  }

export default App;
  
  