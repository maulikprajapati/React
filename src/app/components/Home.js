import React from 'react';
export class Home extends React.Component {
    constructor(props) {
        super();
        console.log("constructor");
        this.state = {
            age: props.initialAge,
            homeLink: props.initialLink,
            status: 0,

        };
    }

    componentWillMount() {
        console.log("com_will_mount");
    }

    componentDidMount() {
        console.log("com_did_mount");
    }

    componentWillReceiveProps(nextProps) {
        console.log("com_will_rcv_props", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("com_should_update", nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("com_will_update", nextProps, nextState);
    }

    componentDidUpdate(prevProp, prevState) {
        console.log("com_did_update", prevProp, prevState);
    }


    componentWillUnmount() {
        console.log("com_will_unmount");
    }

    onHomeMounted() {
        this.setState({
            homeMounted: !this.state.homeMounted
        })
    }

    onMakeOlder() {
        this.setState({
            age: (+this.state.age) + 3
        });
    }

    onChangeName() {
        this.props.changeLink(this.state.homeLink);
    }

    onHandleChange(event) {
        debugger
        this.setState({
            homeLink: event.target.value
        })
    }

    render() {
        return (
            <h1> THis is Home</h1>
            // <div>
            //     <h1> In Home Component</h1>
            //     <p>
            //         Hello {this.props.name}! Your age is {this.state.age}.
            //     </p>
            //     <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older</button>
            //     <hr />
            //     <button onClick={() => this.props.greet()} className="btn btn-primary">Greet</button>
            //     <hr />
            //     <input type='text' onChange={(event) => this.onHandleChange(event)} value={this.state.homeLink} />
            //     <button onClick={(event) => this.onChangeName(event)} className="btn btn-primary">Change Header</button>
            // </div>
        )
    }
}