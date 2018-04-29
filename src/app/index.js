import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';
import { render } from 'react-dom';
import { Home } from './components/Home';
import { Router, Route, browserHistory } from 'react-router';
import { User } from './components/User';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { BrowserRouter } from 'react-router-dom';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            homeLink: "Home",
            homeMounted: true
        }
    }


    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Main />
                </div>
            </BrowserRouter>
        )
    }


    onGreet() {
        alert("From Child Component");
    }

    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName
        });
    }

    onHomeMounted() {
        this.setState({
            homeMounted: !this.state.homeMounted
        })
    }

    componentWillUnmount() {
        console.log("Component Will Update")
    }

    // render() {
    //     let homeComp = "";
    //     if (this.state.homeMounted) {
    //         homeComp = (<Home name={"Maulik"} initialAge={"26"}
    //             greet={this.onGreet}
    //             changeLink={this.onChangeLinkName.bind(this)}
    //             initialLink={this.state.homeLink} />
    //         );
    //     }
    //     return (
    //         <div className="container">
    //             <div className="row">
    //                 <div className="col-xs-10 col-xs-offset-1">
    //                     <Header homeLink={this.state.homeLink} />
    //                 </div>
    //             </div>
    //             <div className="row">
    //                 <div className="col-xs-10 col-xs-offset-1">
    //                     {homeComp}
    //                 </div>
    //             </div>
    //             <div className="row">
    //                 <div className="col-xs-10 col-xs-offset-1">
    //                     <button className="btn btn-primary" onClick={() => this.onHomeMounted()}
    //                     >(Un)Mount Home Component</button>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }
}
render(<App />, window.document.getElementById("app"));