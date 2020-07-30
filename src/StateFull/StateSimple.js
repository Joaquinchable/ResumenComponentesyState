import React from "react";




class StateSimple extends React.Component{

state = {

    nombre: '',
    edad: 0,
    desempleado: false
}  // Aquí el estado es un objeto vacío de JavaScript, y la diferencia es que este estado no ocupa propiedades ajenas
   
    render(){
        return(

            <div>Componentes StateFull</div>
        )
    }


    }

  export default StateSimple;