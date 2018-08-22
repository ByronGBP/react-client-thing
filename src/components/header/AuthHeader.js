//@flow
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  logout: () => any;
}

const AuthHeader = ({ logout }: Props) => {
  return (
    <ul className="navbar-nav justify-content-between w-100">
      <li className="nav-item">
        <Link className="nav-link nvx-hover-click" to="/news">
        News
        </Link>
      </li>
      <li className="nav-item">
        <div className="nav-link nvx-hover-click" onClick={logout} >
          Logout
        </div>
      </li>
    </ul>
  );
};

export default AuthHeader;
