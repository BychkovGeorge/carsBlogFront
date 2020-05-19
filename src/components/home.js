import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "../components/header";
import Footer from "../components/footer";
import {Link} from "react-router-dom";

class Home extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <h2 className="enter-message">Вы не выполнили вход</h2>
                <Link to="/entrance"><a className="flex-sm-fill enter-message active btn btn-primary active">Войти</a></Link>
                <Footer />
            </div>
        );
    }
}

export default Home;
