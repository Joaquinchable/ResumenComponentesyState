import React from "react";


class ComponentDidMount extends React.Component{

state = {          // declara un estado con el que empieza el ciclo de vida de mi componente

    nombre: '',
    edad: 0,
    desempleado: false

}  

// ejemplo de interactividad con el cliente

// componentDidMount(){  // renderizar la informacion actualizada del setState AL navegador 

//     this.setState({              // actualizar la informacio de difunto estado principal
//         nombre: 'Juan Pérez',     // ejemplo de lo que hace SetState()
//         edad: 20,
//         desempleado: true,
//     })



// }

componentDidMount(){ // renderizar la informacion actualizada del setState AL navegador 
      
    fetch(url)    // Una url que traiga información api   fetch se encarga la data ya sea api externa o servidor 
   .then(respuesta => {
    this.setState({    // setState actualizar la informacio de difunto estado principal
     nombre: respuesta.nombre,
     edad: respuesta.edad,
     desempleado: respuesta.estaViva

})
})
}




   

    render(){
        return(

            <div>Componentes StateFull</div>
        )
    }


    }

  export default ComponentDidMount;