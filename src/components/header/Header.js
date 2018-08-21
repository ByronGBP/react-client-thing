//@flow
import React from 'react';

import type { Node } from 'react';

type Props = {
  children: Node
}
const Header = ({ children }: Props) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="left collapse navbar-collapse justify-content-end" id="navbarNav">
        {children}
      </div>
    </nav>
  );
};

export default Header;
