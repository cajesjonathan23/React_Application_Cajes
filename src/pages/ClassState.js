import React, {Component} from "react";
import { Button } from "react-bootstrap";

class ClassState extends Component{
    constructor(){
        super()
        this.state = {
            sampleContent: "Hello World",
            bgcol: "black",
            col: "white"

        };
        this.changeElement = this.changeElement.bind(this);
    }

    changeElement(){
        // this.setState({sampleContent: "Wow Nabago"});
        // this.setState({bgcol: "yellow"});
        // this.setState({col: "black"});

        this.state.bgcol == "red" ?   this.setState({sampleContent: "Wow Nabago", bgcol:"yellow"}) :     this.setState({bgcol: "red"});;
    }
    render(){
        const {bgcol, sampleContent, col} = this.state;
        return(
            <>
                <h1 id="sampleELement" style={{background: bgcol, color:col}}>{sampleContent}</h1>
                <button onClick={() => this.changeElement()}>Change sample ELement</button>
                {/* <button onClick={() => this.changeElement()}>Change sample ELement</button> */}
            </>
        );
    }
}
export default ClassState;