
import React from 'react';

class Utility extends React.Component {

    constructor(props){
        super(props)
        this.props = props.element 
    }

    // metodo statico utile per ritornare 
    static getEndScrolling = (element) => {
        if (element.scrollTop + element.offsetHeight>= element.scrollHeight ){
           return true;
        }
       
    }

}

export default Utility;