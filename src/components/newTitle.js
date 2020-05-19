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
                <form className="container margin">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Введите заголовок</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Введите текст статьи</label>
                        <textarea type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Добавить статью</button>
                </form>
                <Footer />
            </div>
        );
    }
}

export default newTitle;
