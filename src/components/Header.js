import React from 'react'
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
    return (
        <div>
            <header className="row">
                <div>
                    <Link className="brand" to="/"><img className="logo1" src={img1} alt="" /></Link>
                </div>
                <div>
                    <Link to="/qui_sommes_nous">Qui Sommes-nous ?</Link>
                    <Link to="/application">Application</Link>
                    <Link to="/cart">Panier
                    {cartItems.length > 0 && (
                    <span className='badge'>{cartItems.length}</span>
                    )}
                    </Link>
                    {
                    userInfo ? (
                        <div className="dropdown">
                        <Link to="#">{userInfo.firstname} <i className="fa fa-caret-down"></i></Link>
                        <ul className="dropdown-content">
                            <li><Link to='/orderhistory'>Historique des réservations</Link></li>
                            <li><Link to='/profile'>Profil utilisateur</Link></li>
                            <li><Link to="#signout" onClick={signoutHandler}>Se deconnecter</Link></li>
                            
                        </ul>
                        </div>
                    ) :
                    (
                        <Link to="/signin">Connexion</Link>
                    )}
                    {userInfo && userInfo.isAdmin && (
                        <div className="dropdown">
                        <Link to="#admin">
                            Admin {' '} <i className="fa fa-caret-down"></i>
                        </Link>
                        <ul className="dropdown-content">
                            <li>
                            <Link to="/dashboard">Tableau de bord</Link>
                            </li>
                            <li>
                            <Link to="/locationlist">Locations</Link>
                            </li>
                            <li>
                            <Link to="/orderlist">Réservations</Link>
                            </li>
                            <li>
                            <Link to="/userlist">Utilisateurs</Link>
                            </li>
                        </ul> 
                        </div>
                    )}
                </div>
            </header>
        </div>
    )
}
