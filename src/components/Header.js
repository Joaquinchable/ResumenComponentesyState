import React from 'react';

import BarNav from './BarNav'
// ambito de react

// componente Stateless
// componente tonto
// componente funcional 

function Header() {
  return (
    <div>
        <h1>Header</h1>
    <BarNav/>
    </div>
  );
}

export default Header;

// export default es que este componente o archivo puedo ser exportado 
// y utilizado en otros  componentes que los importen 
