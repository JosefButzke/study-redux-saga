import React from 'react';
import { Container } from './styles';

import { connect } from "react-redux";

import { Link } from 'react-router-dom';

const Page2 = ({count}) => {

    return (
        <Container>
            <div>
                <h1>{`State: ${count}`}</h1>
                <Link to='/'>
                    <button>Home</button>
                </Link>
                <Link to='/rocket'>
                    <button>Sidebar + Video</button>
                </Link>
            </div>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        count: state.count
    };
};

export default connect(mapStateToProps)(Page2);