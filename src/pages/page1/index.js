import React from 'react';
import { Container } from './styles';

import { useDispatch } from 'react-redux';
import { connect } from "react-redux";

import { Link } from 'react-router-dom';

const Page1 = (props) => {   
    
    const dispatch = useDispatch();
    // const value = useSelector()
    
    return (
        <Container>
            <div>
                <h1>Page1</h1>
                <button onClick={() => dispatch({ type: "INCREMENT"})}>Increment</button>
                <button onClick={() => dispatch({ type: "DECREMENT"})}>Decrement</button>

                <Link to='/carrinho'>
                    <button>
                        {`${props.value}Carrinho`}
                    </button>
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

export default connect(mapStateToProps)(Page1);