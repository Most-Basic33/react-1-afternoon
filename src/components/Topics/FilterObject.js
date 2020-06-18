import React, { Component } from 'react';




class FilterObjects extends Component {
    constructor() {
        super();
        this.state = {
            dispensaries: [
                {
                    name: 'Holistic Center',
                    location: 'North Phoenix',
                    price: 'Budget',
                    yearsOpen: 3

                },
                {
                    name: 'Debbies',
                    location: 'North-West Valley',
                    price: 'High',
                    yearsOpen: 5
                },
                {
                    name: 'Med-Mens',
                    location: 'Scottsdale',
                    price: 'Very High',
                    yearsOpen: 7
                },
                {
                    name: 'Good Dispensary',
                    location: 'Mesa',
                    price: 'Low',
                    yearsOpen: 4
                }
            ]
            ,
            userInput: '',
            filteredDispo: []
        }


    }

    handleChange(e) {
        this.setState({ userInput: e.target.value })
    }

    filteredDispo(userInput) {
        let dispensaries = this.state.dispensaries;
        let filteredDispo2 = [];
        filteredDispo2 = dispensaries.filter((disp, i, e) => disp.location === userInput || disp.price === userInput || disp.name === userInput || disp.yearsOpen === userInput);
        this.setState({ filteredDispo: filteredDispo2 })
    }
    // let dispensaries = [...this.state.dispensaries];
    // let filteredDispo2 = dispensaries.filter((e, i, a) => e.yearsOpen > +userInput)//+fast conversion from string to a number

    // // filteredDispos = dispensaries.filter((e, i, a) => e == e.price > 4);
    // console.log(filteredDispo2);

    // this.setState({ filteredDispo: filteredDispo2 });
    // //console.log(filteredDispo2, 'after state is set')
    // //return filteredDispo2



    render() {
        // console.log(this.newArray, 'New Array')
        // console.log(this.userInput, 'userInput')
        return (
            <div className='puzzleBox filterObjectPB'>
                <span className='puzzleText'>Original:{JSON.stringify(this.state.dispensaries, null, 10)}</span>
                <input className='inputText' onChange={(e) => this.handleChange(e)} />
                <button className='confirmationButton' onClick={() => this.filteredDispo(this.state.userInput)} >Filter</button>
                <span className='rusultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredDispo, null, 10)} </span>
                <h4>Filter Objects</h4>
            </div>
        )
    }
}
export default FilterObjects;