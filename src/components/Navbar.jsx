import { Link } from "react-router-dom";

function Navbar(){
    return (
        <div className="p-4 w-screen text-center bg-teal-400 " >
            <Link to="/" className="ml-4">Home</Link>
            <Link to="/quotes" className="mr-4">Quotes</Link>
        </div>
    )
}

export default Navbar;