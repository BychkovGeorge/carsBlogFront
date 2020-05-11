import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "../components/header";
import Footer from "../components/footer";

class newTitle extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <h1>new title</h1>
                <Footer />
            </div>
        );
    }
}

export default newTitle;
