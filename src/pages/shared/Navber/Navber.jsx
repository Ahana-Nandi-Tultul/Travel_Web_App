import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { FiUser, FiSearch } from 'react-icons/fi';

const Navber = () => {
  const navLink = <>
    <NavLink to="/" className="mr-4">Home</NavLink>
    <NavLink to="/about" className="mr-4">About</NavLink>
    <NavLink to="/destination" className="mr-4">Destination</NavLink>
  </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start w-auto">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu activeCs menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  {navLink}
                </ul>
              </div>
              <a className="btn btn-ghost normal-case text-xl mr-3">
                <img src={logo} alt="" />
              </a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu activeCs menu-horizontal px-1">
                {navLink}
              </ul>
            </div>
            <div className="navbar-end ml-auto ">
              <span className='flex items-center'>
                <span><FiSearch className='mr-2 w-6 h-6'/></span>
                <span><FiUser className='mr-2 w-6 h-6'/></span>
              </span>
              <Link to="/login" className='mr-2'><button className="btn btn-ghost">Login</button></Link> /
              <Link to="/signup" className='ml-2'><button className="btn btn-ghost">Sign Up</button></Link>
            </div>
        </div>
    );
};

export default Navber;