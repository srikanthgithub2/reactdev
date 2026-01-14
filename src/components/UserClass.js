import React from "react";

class UserClass extends React.Component {
    constructor(props) {    
        super(props);
        this.state = {
            userInfo: null,
        };
        console.log(this.props.name+" UserClass Constructor ");
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/user/12824231");
        const json = await data.json();
        
        this.setState({
            userInfo: json,
        });

        console.log(this.props.name+ " UserClass componentDidMount");
    }

    componentDidUpdate() {
        console.log(this.props.name+ " UserClass componentDidUpdate");
    }

    componentWillUnmount() {
        console.log(this.props.name+ " UserClass componentWillUnmount");
    }

    render() {



        console.log(this.props.name+ " UserClass render");
        const {name, location} = this.state.userInfo ? this.state.userInfo : this.props;
        return (
            <div className="user-class">
                <h2> User Class Component</h2>
                <h3>Name: {name}</h3>
                <h3>Location: {location}</h3>
            </div>
        );
    }
}
export default UserClass;