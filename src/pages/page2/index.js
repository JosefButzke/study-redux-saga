import React from 'react';
import { Container } from './styles';

import { connect } from "react-redux";

import { Link } from 'react-router-dom';

const Page2 = (props) => {

    return (
        <Container>
            <div>
                <h1>{`State: ${props.value}`}</h1>
                <Link to='/'>
                    <button>Home</button>
                </Link>
            </div>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        value: state
    };
};

export default connect(mapStateToProps)(Page2);