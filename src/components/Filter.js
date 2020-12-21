
import React from "react";

// filter employees based on search term
// check if there is a match and set that to eeFiltered for rendering

function filterEmp(props) {

    let { employees, search } = this.state;
    let eeFiltered = employees.filter(filtered => {
        return (
            filtered.name.first.toLowerCase().includes(search.toLowerCase()) ||
            filtered.name.last.toLowerCase().includes(search.toLowerCase()) ||
            filtered.email.toLowerCase().includes(search.toLowerCase())
        )
    })
    this.setState({ eeFiltered })
}

// // grab search term, activate filterd  
// startFilter = event => {
//     this.setState({ search: event.target.value }, () => {
//         this.filterEmp();
//         this.setState({ isFiltered: true });
//     });
// };

export default filterEmp;