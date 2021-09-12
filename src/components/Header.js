import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { signout } from '../actions/userActions';
import img1 from '../images/espaceInsolite1logo.png';

export default function Header() {
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
    const signoutHandler = () =>{
        dispatch(signout());
    }

    const [showLinks, SetShowLinks] = useState(false);
  const handleShowlinks = () => {
    SetShowLinks(!showLinks)
  }
    return (
      <div className="grid-container">
            <header className="row">
          <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
            <div className="navbar__logo">
              <Link className="brand" to="/"><img className="logo1" src={img1} alt="" /></Link>
            </div>
            <ul className="navbar__links">
              <li className="navbar__item">
                <Link className="navbar__link" to="/qui_sommes_nous">Qui Sommes-nous ?</Link>
              </li>
              <li className="navbar__item">
              <Link className="navbar__link" to="/application">Application</Link>
              </li>
              <li className="navbar__item">
                <Link className="navbar__link" to="/cart">Panier
                  {cartItems.length > 0 && (
                    <span className='badge'>{cartItems.length}</span>
                  )}
                </Link>
              </li>
              <li className="navbar__item">
                <div>
                  {
                    userInfo ? (
                      <div className="dropdown">
                        <Link to="#">{userInfo.firstname} <i className="fa fa-caret-down"></i></Link>
                        <ul className="dropdown-content">
                          <li className="dropburger"><Link to='/orderhistory'>Historique des réservations</Link></li>
                          <li className="dropburger"><Link to='/profile'>Profil utilisateur</Link></li>
                          <li className="dropburger"><Link to="#signout" onClick={signoutHandler}>Se deconnecter</Link></li>
                        </ul>
                      </div>
                    ) :
                    (
                      <Link className="navbar__link" to="/signin">Connexion</Link>
                    )}
                    {userInfo && userInfo.isAdmin && (
                      <div className="dropdown">
                        <Link  to="#admin">
                          Admin {' '} <i className="fa fa-caret-down"></i>
                        </Link>
                        <ul className="dropdown-content">
                          <li className="dropburger">
                            <Link to="/dashboard">Tableau de bord</Link>
                          </li>
                          <li className="dropburger">
                            <Link to="/locationlist">Locations</Link>
                          </li>
                          <li className="dropburger">
                            <Link to="/orderlist">Réservations</Link>
                          </li>
                          <li className="dropburger">
                            <Link to="/userlist">Utilisateurs</Link>
                          </li>
                        </ul> 
                      </div>
                    )}
                </div>
              </li>
            </ul>
            <button className="navbar__burger" onClick={handleShowlinks}><span className="burger-bar"></span></button>
          </nav>
          
        </header>
        </div>
    )
}
