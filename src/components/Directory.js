import React, { Component } from "react";
import Employees from "./Employees";
import Search from "./Search";
import API from "../utils/API";
// import Filter from "./Filter.js";
import "../styles/Directory.css";


class Directory extends Component {
  // check that the component rendered at least once, and make API call
  // wait for the information to come back
  // componentDidMount() {
  //   this.getEmployees();
  // };

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
      // console.log(eeFilterd)
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
  let a1 = this.state.sortOrder;
  let a2 = a1*-1;

  let sortedEmployees = this.state.employees;
    sortedEmployees = sortedEmployees.sort((a, b) => (a.name.first > b.name.first) ? a2: a1);

  let sortedeeFiltered = this.state.eeFiltered;
    sortedeeFiltered  = sortedeeFiltered.sort((a, b) => (a.name.first > b.name.first) ? a1: a2);

  this.setState({
    employees: sortedEmployees,
    eeFiltered: sortedeeFiltered,
    sortOrder: a2
  })
}

  render = () => {
    return (
      <div>
        <div className="jumbotron">
        <br></br>
          <h3 className="display-4">Employee Directory</h3>

          <br></br><br></br>
          <Search name="search" startFilter={this.startFilter} label="Search" />
        </div>
        <br></br><br></br><br></br><br></br>
        <div className="container">
          <table className="table table-striped table-hover table-condensed">
            <thead className="thead">
              <tr>
                <th>Photo </th>
                <th onClick={(event) =>this.sortEmployees(event)}>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Birthdate </th>
              </tr>
            </thead>
            <br></br> 

            <tbody>
              {/* if it's not filtered, map entire api response */}
              {!this.state.isFiltered
                ? this.state.employees.map((employee) => (
                    <Employees
                      key={employee.id.value}
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
                      key={employee.id.value}
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
