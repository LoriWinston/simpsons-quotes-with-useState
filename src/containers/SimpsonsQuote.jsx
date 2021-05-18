import React, { Component } from 'react';
import Fetch from '../components/quotes/Fetch';
import Quote from '../components/quotes/Quote';
import { fetchQuote } from '../services/simpsonsApi';

export default class SimpsonsQuote extends Component {
    state = {
        quote: {},
    };

    handleClick = async () => {
        const quote = await fetchQuote();
        this.setState({ quote });
    };

    render() {
        const { quote } = this.state;

        return (
            <>
            <Fetch onClick={this.handleClick} />
            <Quote {...quote} />
            </>
        );

    };
};
