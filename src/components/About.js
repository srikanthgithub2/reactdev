import React from "react";
import UserClass from "./UserClass";
import { Component } from "react";

class  About extends Component {

  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  
    componentDidMount() {
        console.log("Parent componentDidMount");
    }


    render() {  
        return (
          console.log("Parent Render"),
      <div>
        <h1>About Us Page</h1>
        <p>This About Us Page</p>


        <UserClass name={"First"} location={"Hyderabad"}/>
      </div>
    );
    }


};
  export default About;