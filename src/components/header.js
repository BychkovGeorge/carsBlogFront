import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import 'fontawesome'
import { Link } from 'react-router-dom'



class Header extends React.Component {
    render() {
        return(
            <nav className="nav nav-pills flex-column flex-sm-row margin">
                <Link to="/"><a className="flex-sm-fill text-sm-center nav-link active">Главная</a></Link>
                <Link to="/newTitle"><a className="flex-sm-fill text-sm-center nav-link">Добавить статью</a></Link>
                <Link to="/home"><a className="flex-sm-fill text-sm-center nav-link">Личный кабинет</a></Link>
            </nav>
        );
    }
}

export default Header;
