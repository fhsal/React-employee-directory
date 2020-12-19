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
    eeFilterd: [],
    search: "",
    sorted: false,
  };

  componentDidMount() {
    API.getEmployees().then(results => {
      this.setState({
        employees: results.data.results,
        eeFiltered: results.data.results
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
      this.setState({ sorted: true });
    });
  };

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
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Birthdate </th>
              </tr>
            </thead>
            <br></br> 

            <tbody>
              {/* if it's not filtered, map entire api response */}
              {!this.state.sorted
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
              ;
            </tbody>
          </table>
        </div>
      </div>
    );
  };
}

export default Directory;
