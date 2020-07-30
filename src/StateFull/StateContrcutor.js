import React from "react";


class StateConstructor extends React.Component{
    
    // El método constructor es un método especial para crear e 
    // inicializar un objeto creado con una clase. Solo puede haber un método especial
    //  con el nombre "constructor" en una clase. Si esta contiene mas de una ocurrencia del método constructor, 
    //  se arrojará un Error SyntaxError

    // Un constructor puede usar la palabra reservada super para llamar al constructor de una superclase
    
    constructor(props){
        super(props)

        this.state = {

            nombre:'',
            edad:0,
            desempleado:false
        }  // El estado es un objeto de JavaScript,en particular aquí
                          // es un objeto vacío, pero al ser un objeto, puede tener cualquier
                          // propiedad dentro

    }
    

   
    render(){
        return(

            <div>Componentes StateFull</div>
        )
    }


    }

  export default StateConstructor;