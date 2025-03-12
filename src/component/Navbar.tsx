import { useState } from "react";
import { Link } from "react-scroll"; // Correct import
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-black text-white fixed w-full z-50 shadow-md">
            <div className="container mx-auto flex justify-between items-center p-4">

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-lg">
                    <li><Link className="hover:text-red-500 cursor-pointer" to="hero" smooth={true} duration={500}>Home</Link></li>
                    <li><Link className="hover:text-red-500 cursor-pointer" to="workoutsession" smooth={true} duration={500}>Workout Session</Link></li>
                    <li><Link className="hover:text-red-500 cursor-pointer" to="gallery" smooth={true} duration={500}>Gallery</Link></li>
                    <li><Link className="hover:text-red-500 cursor-pointer" to="pricing" smooth={true} duration={500}>Fitness Plan</Link></li>
                    <li><Link className="hover:text-red-500 cursor-pointer" to="contact" smooth={true} duration={500}>Contact</Link></li>
                    <li><Link className="hover:text-red-500 cursor-pointer" to="bmi" smooth={true} duration={500}>BMI Calculator</Link></li>
                </ul>
                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="md:hidden text-white text-2xl">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>



        </nav>
    );
};

export default Navbar;
















/*

const navbar=()=>{
    return(
        <div>

        </div>
    )
}
export default navbar
*/
