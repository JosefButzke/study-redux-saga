import React from 'react';
import { Container } from './styles';

import { connect } from "react-redux";

import { Link } from 'react-router-dom';

const Page1 = ({count, dispatch}) => {  
    return (
        <Container>
            <div>
                <h1>{`State: ${count}`}</h1>
                <button onClick={() => dispatch({ type: "INCREMENT"})}>Increment</button>
                <button onClick={() => dispatch({ type: "DECREMENT"})}>Decrement</button>

                <Link to='/carrinho'>
                    <button>Carrinho</button>
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

export default connect(mapStateToProps)(Page1);