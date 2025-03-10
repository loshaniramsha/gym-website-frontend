import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import {BrowserRouter as Router} from "react-router-dom";
import './App.css'
import BMICalculater from "./component/BMICalculater.tsx";
import Contact from "./component/Contact.tsx";
import Footer from "./component/Footer.tsx";
import Gallery from "./component/Gallery.tsx";
import Hero from "./component/Hero.tsx";
import Navbar from "./component/Navbar.tsx";
import Pricing from "./component/Pricing.tsx";

function WorkoutSession() {
    return null;
}

const App = () => {
    return (
        <Router>
            <Navbar />
            <Hero />
            <WorkoutSession />
            <Gallery />
            <Pricing />
            <Contact />
            <BMICalculater />
            <Footer />
            <ToastContainer theme='dark' position='top-center' />

        </Router>
    )
}

export default App