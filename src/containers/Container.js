import React, { Component } from 'react';
import Component1 from "../components/Component1"
import Component2 from '../components/Component2';
import Component3 from '../components/Component3';
class Container extends Component{
    render(){
        return(
            <div>
                
                <Component3/>
                <Component1/>
                <Component2/>
                <Component3/>
            </div>
        );
    }
}

export default Container