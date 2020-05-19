import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'


class mainFooter extends React.Component {
    render() {
        return(
            <footer className="page-footer font-small blue blue-color-main">

                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    <a className="white-color" href="https://ikaf42.ru/auth"> KAF42-WEB</a>
                </div>

            </footer>
        );
    }
}

export default mainFooter;
