import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';


const Navigation = ({handleChange}) => {
  return (
    <>
    <div className='container-fluid'>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavLink to=""><h2 className='nav-title'>E-shop</h2></NavLink>
          <input type="text" placeholder="🔎 Search for products, brands and more..." className='nav-input' onChange={handleChange} />
          <Nav className="btn">
            <Link  to=""><button>Home</button> </Link>
            <Link to="about"><button>About</button></Link>
            <Link to="shop"><button>Shop</button></Link>
            <Link to="cart"><button>Cart</button></Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet/>
    </div>
    
    
    </>
  )
}

export default Navigation