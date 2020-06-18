import React, { Component } from 'react';



class EvenAndODD extends Component {
    constructor() {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
         }

    }
    handleChange = (val) => {
        this.setState({ userInput: val })
    }
    assignEvenAndOdds = (userInput) => {
        let arr = userInput.split(',')
        let even = [];
        let odd = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                even.push(parseInt(arr[i], 10));
            } else {
                odd.push(parseInt(arr[i], 10));
            }
        }

        // if (arr.filter((i, d, a) => i % 2 === 0)) {
        //     even.push(arr)//.filter((i, d, a) => i % 2 === 0))
        // } if (arr.filter((i, d, a) => i % 2 !== 0)) {
        //     odd.push(arr)//.filter((i, d, a) => i % 2 !== 0))
        // }
        // // even = arr.filter((i, d, a) => i % 2 === 0);
        // // odd = arr.filter((i, d, a) => i % 2 !== 0);
        // return (even, odd)
        this.setState({ evenArray: even, oddArray: odd })


    }





    render() {
        return (
            <div className='puzzleBox evenAndOffPB'>
                <h4>Evens and Odds</h4>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)} />
                <button onClick={() => this.assignEvenAndOdds(this.state.userInput)} className='confirmationButton'>Split</button>
<br></br>
                <span className='resulltsBox'>Evens:{JSON.stringify(this.state.evenArray)}</span>
                <span className='resultsBox'>Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}

export default EvenAndODD;