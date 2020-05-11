import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "../components/header";
import Footer from "../components/footer";

class Home extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <h1>HOME</h1>
                <Footer />
            </div>
        );
    }
}

export default Home;
