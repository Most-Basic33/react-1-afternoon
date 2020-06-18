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



        // for (let i = 0; i < dispensaries.length; i++) {
        //     if (dispensaries[i].hasOwnProperty(prop)) {
        //         filteredDispos.push(dispensaries[i]);
        //     }

        //console.log(filteredDispos, 'filteredDispo')
                // filteredDispos = dispensaries.filter((e, i, a) => e == e.price > 4);
    filteredDispo(prop) {
        let dispensaries = this.state.dispensaries;
        let filteredDispos = [];
        filteredDispos = dispensaries.filter((e, i, a) => e.yearsOpen == prop)

        // filteredDispos = dispensaries.filter((e, i, a) => e == e.price > 4);
        console.log(filteredDispos);

        this.setState({ filteredDispos: filteredDispos });
        console.log(filteredDispos, 'after state is set')
        return filteredDispos
    }


    // filteredDispo(userInput) {
    //     console.log(userInput);
    //     // let { filteredDispo } = this.state;
    //     let newArray = [];
    //     let { dispensaries } = this.state

    //     for (let i = 0; i < dispensaries.length; i++) {
    //         if (dispensaries[i].hasOwnProperty(userInput)) {
    //             // filteredDispo.push(dispensaries[i])
    //             newArray.push(dispensaries[i])
    //         }
    //         console.log(this.filteredDispo, "first one");
    //         this.setState({ filteredDispo: newArray })
    //         console.log(this.filteredDispo, "2nd one")
    //         console.log(newArray, "new array")

    //     }

    render() {
        // console.log(this.newArray, 'New Array')
        // console.log(this.userInput, 'userInput')
        return (
            <div className='puzzleBox filterObjectPB'>
                <span className='puzzleText'>Original:{JSON.stringify(this.state.dispensaries, null, 10)}</span>
                <input className='inputText' onChange={(e) => this.handleChange(e)} />
                <button className='confirmationButton' onClick={() => this.filteredDispo(this.state.userInput)} >Filter</button>
                <span className='rusultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredEmployees, null, 10)} </span>
                <h4>Filter Objects</h4>
            </div>
        )
    }
}
export default FilterObjects;