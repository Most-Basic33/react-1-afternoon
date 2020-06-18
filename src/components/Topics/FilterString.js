import React, { Component } from 'react';


class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            unfilteredArray: ['First Words', 'Second Words', 'Third Words', 'Forth', 'Fifth'],
            userInput: '',
            filteredArray: []
        }
    }
    handleChange(val) {
        this.setState({ userInput: val });

    }
    filterArray(userInput) {
        let newArray = [];
        let { unfilteredArray } = this.state;
        newArray = unfilteredArray.filter((e, i, a) => !e.includes(userInput))
        console.log(newArray);
        this.setState({ filteredArray: newArray })
        return newArray
    }
    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>unfilteredArray: {JSON.stringify(this.state.unfilteredArray, null, 10)} </span>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)} />
                <button className='confirmationButton' onClick={() => this.filterArray(this.state.userInput)} >Filter</button>
                <span className='resultsBox filterStringRB'>filteredArray: {JSON.stringify(this.state.filteredArray, null, 10)} </span>
            </div>
        )
    }
}
export default FilterString;