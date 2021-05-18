import React, { useState } from 'react';
import Fetch from '../components/quotes/Fetch';
import Quote from '../components/quotes/Quote';
import { fetchQuote } from '../services/simpsonsApi';

const SimpsonsQuotes = () => {
    const [ quote, setQuote ] = useState({});

    const clickHandler = async () => {
        const quote = await fetchQuote();
        console.log(quote);
        setQuote(quote);
    };

    return (
        <>
        <Fetch onClick={clickHandler} />
        <Quote
        text={quote.text}
        image={quote.image}
        name={quote.name} />
        </>
    );
};
 export default SimpsonsQuotes;


// import React, { Component } from 'react';
// import Fetch from '../components/quotes/Fetch';
// import Quote from '../components/quotes/Quote';
// import { fetchQuote } from '../services/simpsonsApi';

// export default class SimpsonsQuote extends Component {
//     state = {
//         quote: {},
//     };

//     handleClick = async () => {
//         const quote = await fetchQuote();
//         this.setState({ quote });
//     };

//     render() {
//         const { quote } = this.state;

//         return (
//             <>
//             <Fetch onClick={this.handleClick} />
//             <Quote {...quote} />
//             </>
//         );

//     };
// }; 

// export default SimpsonsQuote;