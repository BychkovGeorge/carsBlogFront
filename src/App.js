import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/header";
import Footer from "./components/mainFooter";

class App extends React.Component {
    render() {
        return(
            <div>
            <Header />
            <h1 className="text-center">Lorem Ipsum</h1>
                <h3 className="article-header">Article One</h3>
                <p className="article-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum ligula vitae ex porttitor, nec euismod nisl consectetur. Aenean lobortis volutpat nisl, ut volutpat mauris consequat ut. Mauris ornare consectetur magna sed elementum. Nullam ut viverra ipsum. Suspendisse elementum consequat sem, et viverra risus luctus quis. Phasellus id fringilla ante, ac placerat diam. Praesent viverra bibendum auctor. Sed bibendum tellus vel accumsan imperdiet. In at arcu molestie, dictum purus at, dictum metus. Fusce pharetra orci in purus suscipit, sed fermentum enim interdum. Sed venenatis, nulla vel cursus pretium, velit ipsum maximus purus, quis consectetur elit ligula et enim. In ac ornare turpis. In eu tellus sit amet orci eleifend eleifend ac at est.

                    Cras feugiat dictum condimentum. Donec consequat sollicitudin orci, id tristique orci egestas vitae. Nunc vestibulum est quis varius dictum. Donec libero purus, vulputate vel tristique eu, sodales a tellus. Ut sed mauris sed odio tristique aliquet a ut arcu. Praesent suscipit dapibus ultricies. Donec euismod nec lorem nec consectetur. Duis ultrices, felis quis feugiat tincidunt, nibh metus feugiat justo, at varius tortor metus sed purus. Fusce ornare ullamcorper sollicitudin. Proin quis quam viverra, tincidunt nisi vel, pulvinar neque. Vivamus vestibulum magna vel mattis cursus. Sed sem diam, elementum vel tortor id, vehicula cursus augue. Morbi tincidunt ipsum lacus, a cursus dolor molestie ac.

                    Maecenas at mi vitae lectus convallis commodo. Quisque eu purus porttitor massa sagittis ultrices. Donec ac dapibus est, hendrerit lacinia sem. Nullam vestibulum felis sed orci interdum pretium. Phasellus sed leo ultricies, pretium neque ac, suscipit lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut at augue mollis, pellentesque mi id, laoreet nibh. Quisque eget sapien non magna ullamcorper posuere. Suspendisse dictum purus velit. Quisque nec tempus est, at lacinia magna. Phasellus tincidunt sagittis mi, quis viverra risus faucibus in.

                    Donec dapibus ipsum non facilisis egestas. Vestibulum eget felis ex. Ut quis orci luctus, lacinia metus in, sollicitudin lacus. Duis faucibus diam vitae ante faucibus commodo. Fusce sed lacinia mauris. Integer a mi ullamcorper, pellentesque est sed, posuere velit. Nulla a consectetur est. Nam fermentum ultricies consectetur. Praesent eget ullamcorper nibh. Curabitur turpis magna, condimentum sit amet sagittis quis, rutrum at lorem.

                    Etiam convallis luctus purus, gravida ultricies est. Donec pulvinar justo tellus, vitae faucibus nisl dapibus sed. Integer efficitur interdum maximus. Morbi quis maximus est, nec luctus risus. Mauris at mollis eros. Phasellus consectetur quam urna, at pretium neque euismod ut. Donec consectetur est eget felis malesuada, ac tempus odio tincidunt. Etiam at placerat ex, in semper velit.</p>
                <h3 className="article-header">Article two</h3>
                <img src="" />
                <p className="article-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum ligula vitae ex porttitor, nec euismod nisl consectetur. Aenean lobortis volutpat nisl, ut volutpat mauris consequat ut. Mauris ornare consectetur magna sed elementum. Nullam ut viverra ipsum. Suspendisse elementum consequat sem, et viverra risus luctus quis. Phasellus id fringilla ante, ac placerat diam. Praesent viverra bibendum auctor. Sed bibendum tellus vel accumsan imperdiet. In at arcu molestie, dictum purus at, dictum metus. Fusce pharetra orci in purus suscipit, sed fermentum enim interdum. Sed venenatis, nulla vel cursus pretium, velit ipsum maximus purus, quis consectetur elit ligula et enim. In ac ornare turpis. In eu tellus sit amet orci eleifend eleifend ac at est.

                    Cras feugiat dictum condimentum. Donec consequat sollicitudin orci, id tristique orci egestas vitae. Nunc vestibulum est quis varius dictum. Donec libero purus, vulputate vel tristique eu, sodales a tellus. Ut sed mauris sed odio tristique aliquet a ut arcu. Praesent suscipit dapibus ultricies. Donec euismod nec lorem nec consectetur. Duis ultrices, felis quis feugiat tincidunt, nibh metus feugiat justo, at varius tortor metus sed purus. Fusce ornare ullamcorper sollicitudin. Proin quis quam viverra, tincidunt nisi vel, pulvinar neque. Vivamus vestibulum magna vel mattis cursus. Sed sem diam, elementum vel tortor id, vehicula cursus augue. Morbi tincidunt ipsum lacus, a cursus dolor molestie ac.

                    Maecenas at mi vitae lectus convallis commodo. Quisque eu purus porttitor massa sagittis ultrices. Donec ac dapibus est, hendrerit lacinia sem. Nullam vestibulum felis sed orci interdum pretium. Phasellus sed leo ultricies, pretium neque ac, suscipit lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut at augue mollis, pellentesque mi id, laoreet nibh. Quisque eget sapien non magna ullamcorper posuere. Suspendisse dictum purus velit. Quisque nec tempus est, at lacinia magna. Phasellus tincidunt sagittis mi, quis viverra risus faucibus in.

                    Donec dapibus ipsum non facilisis egestas. Vestibulum eget felis ex. Ut quis orci luctus, lacinia metus in, sollicitudin lacus. Duis faucibus diam vitae ante faucibus commodo. Fusce sed lacinia mauris. Integer a mi ullamcorper, pellentesque est sed, posuere velit. Nulla a consectetur est. Nam fermentum ultricies consectetur. Praesent eget ullamcorper nibh. Curabitur turpis magna, condimentum sit amet sagittis quis, rutrum at lorem.

                    Etiam convallis luctus purus, gravida ultricies est. Donec pulvinar justo tellus, vitae faucibus nisl dapibus sed. Integer efficitur interdum maximus. Morbi quis maximus est, nec luctus risus. Mauris at mollis eros. Phasellus consectetur quam urna, at pretium neque euismod ut. Donec consectetur est eget felis malesuada, ac tempus odio tincidunt. Etiam at placerat ex, in semper velit.</p>
                <Footer />
            </div>
        );
    }
}

export default App;
