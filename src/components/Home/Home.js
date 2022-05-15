import React from 'react';

import '../../App.css';
import '../Home/Home.css';

import booking from '../../assets/img/booking-3.png';


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentWillMount() {
        this.initializeApp();
    }

    //Intialize the application
    initializeApp = async () => {
        try {
        }
        catch (error) {
        }
    }
    //Render Home
    render() {
        return (
            <div>
                <section id="hero" class="d-flex align-items-center">
                    <div class="container d-flex flex-column align-items-center justify-content-center" data-aos="fade-up">
                        <h1>Welcome to OX.assited reproduction.</h1>
                        <h2>Cloud native infrastructure for assisted reproduction clinics.</h2>
                        <a href="#about" class="btn-get-started scrollto">Login</a>
                        <br></br>
                        <br></br>
                        <img className='home-image' src={booking} alt="" data-aos="zoom-in" data-aos-delay="150"/>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;
