//@flow
import React from 'react';

type Props = {
  logout: () => any;
}

const AuthHeader = ({ logout }: Props) => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <div className="nav-link nvx-hover-click" onClick={logout} >
          Logout
        </div>
      </li>
    </ul>
  );
};

export default AuthHeader;
