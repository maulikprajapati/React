import React from 'react';
import { Link } from 'react-router-dom';
export const Header = (props) => {
    return (
        // <nav class="navbar navbar-expand-lg navbar-light bg-light">
        //     <ul class="navbar-nav">
        //         <li class="nav-item">
        //             <Link to='/' activeClassName={"active"} >Home</Link>
        //         </li>
        //         <li class="nav-item">
        //             <Link to='/user' activeClassName={"active"}>User</Link>

        //         </li>
        //         <li class="nav-item">
        //         </li>
        //     </ul>


        // </nav>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link to='/' className="nav-item nav-link active" activeClassName={"active"} >Home</Link>
                    <Link to='/user' className="nav-item nav-link" activeClassName={"active"} >User</Link>
                    
                </div>
            </div>
        </nav>
    )
}