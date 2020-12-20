import React, { Component } from "react";
import Employees from "./Employees";
import Search from "./Search";
import API from "../utils/API";
// import Filter from "./Filter.js";
import "../styles/Directory.css";

class Directory extends Component {

  state = {
    employees: [],
    eeFiltered: [],
    search: "",
    isFiltered: false,
    sortOrder: 1,
  };

  componentDidMount() {
    API.getEmployees().then(results => {
      this.setState({
        employees: results.data.results,
        eeFiltered: results.data.results,
      });
    });
  }

  // filter employees based on search term
  // check if there is a match and set that to eeFiltered for rendering
  filterEmp = () => {
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

  // grab search term, activate filterd  
  startFilter = event => {
    this.setState({ search: event.target.value }, () => {
      this.filterEmp();
      this.setState({ isFiltered: true });
    });
  };

sortEmployees = event => {
// set sortOrder to determine if sort should be decending or acending 
  let a1 = this.state.sortOrder;
  let a2 = a1*-1;
// sort objects based upon above criteria
  let  sortedEmployees = this.state.employees.sort((a, b) => (a.name.first > b.name.first) ? a2: a1);
  let  sortedeeFiltered  = this.state.eeFiltered.sort((a, b) => (a.name.first > b.name.first) ? a1: a2);
// update objects with new sort ordering 
  this.setState({
    employees: sortedEmployees,
    eeFiltered: sortedeeFiltered,
    sortOrder: a2
  })
}

// render header and then table 

  render = () => {
    return (
      <div>
        <div className="jumbotron">
        <br></br>
          <h3 className="display-4">Employee Directory</h3>
          <br></br><br></br>

{/* Search component which initiaties filter function  */}

      <Search name="search" startFilter={this.startFilter} label="Search" />
        </div>
        <br></br><br></br><br></br><br></br>
        <div className="container">
          <table className="table table-striped table-hover table-condensed">
            <thead className="thead">
              <tr>
                <th>Photo </th>
                <th onClick={(event) =>this.sortEmployees(event)}>Name 
                  <button className="navbar-toggler" type="button" >sort</button>
                </th>
                <th>Email</th>
                <th>Phone</th>
                <th>Birthdate </th>
              </tr>
            </thead>
            <br></br> 

            <tbody>
  {/* if it's not filtered, map entire api response using Employee component*/}
  
              {!this.state.isFiltered
                ? this.state.employees.map((employee) => (
                    <Employees
                      firstName={employee.name.first}
                      lastName={employee.name.last}
                      phone={employee.phone}
                      email={employee.email}
                      icon={employee.picture.thumbnail}
                      dob={employee.dob.date}
                    />
                  ))
                : // otherwise map the filtered employees
                  this.state.eeFiltered.map((employee) => (
                    <Employees
                      firstName={employee.name.first}
                      lastName={employee.name.last}
                      phone={employee.phone}
                      email={employee.email}
                      icon={employee.picture.thumbnail}
                      dob={employee.dob.date}
                    />
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
}

export default Directory;
