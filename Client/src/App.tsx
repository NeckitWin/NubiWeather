import Navbar from "./components/Navbar.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";

const App = ()=> {
  return (
    <div className='container mx-auto max-w-5xl rounded-md'>
        <Navbar />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
