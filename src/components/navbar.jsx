import logo from '../assets/logo.png'
import './navbar.css' 
function Navbar(){
    return (
        <>
      <nav>
        <img className='logo' src={logo} alt="icon logo" />
        <ul>
          <li><a to={"/"}>Home</a></li>
          <li><a to={"/payment"}>Categories</a></li>
          <li><a>About Us</a></li>
        </ul>
      </nav>
      <div className='nav-div'></div>
    </>
    )
}

export default Navbar