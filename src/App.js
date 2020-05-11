import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/header";
import Footer from "./components/footer";

class App extends React.Component {
    render() {
        return(
            <div>
            <Header />
            <form className="container margin">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Имя пользователя</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Пароль</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Запомнитоь меня</label>
                </div>
                <button type="submit" className="btn btn-primary">Войти</button>
            </form>
        <Footer />
            </div>
        );
    }
}

export default App;
