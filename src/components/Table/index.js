import React, { Component } from "react";
import "../style.css";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.employees,
      dataFiltered: props.employees,
      filter: ""
    };
    this.sortColumn = this.sortColumn.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  componentDidMount() {
    this.setState(this.props.data);
  }

  sortColumn = (event, sortKey) => {
    let data = this.state.data;
    data.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
    this.setState({ data });
  };

  handleFilterChange = (e) => {
    const dataCopy = this.state.dataFiltered;
    this.setState({ filter: e.target.value });

    if (e.target.value === "") {
      this.setState({ dataFiltered: this.state.data });
    } else {
      const result = dataCopy.filter((employee) =>
        employee.name.includes(this.state.filter)
      );
      this.setState({ dataFiltered: result });
    }
  };

  render(props) {
    let newData = this.state.dataFiltered;
    let filterOption = this.state.filter;

    return (
      <div className="m-2 p-2">
        <input
          type="text"
          placeholder="Filter by Employee Name"
          value={filterOption}
          id="filter"
          style={{ width: "270px", padding: "2px", margin: "5px" }}
          onChange={this.handleFilterChange}
        />
        <table className="table m-2 p-2">
          <thead>
            <tr>
              <th scope="col" onClick={(e) => this.sortColumn(e, "firstName")}>
                First Name <i className="fa fa-sort" aria-hidden="true"></i>
              </th>
              <th scope="col" onClick={(e) => this.sortColumn(e, "lastName")}>
                Last Name <i className="fa fa-sort" aria-hidden="true"></i>
              </th>
              <th scope="col" onClick={(e) => this.sortColumn(e, "position")}>
                Position <i className="fa fa-sort" aria-hidden="true"></i>
              </th>
              <th scope="col" onClick={(e) => this.sortColumn(e, "salary")}>
                Salary <i className="fa fa-sort" aria-hidden="true"></i>
              </th>
              <th scope="col" onClick={(e) => this.sortColumn(e, "id")}>
                ID <i className="fa fa-sort" aria-hidden="true"></i>
              </th>
            </tr>
          </thead>
          <tbody>
            {newData.map(function (item) {
              return (
                <tr key={item.id} data-item={item}>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.position}</td>
                  <td>{item.salary}</td>
                  <td>{item.id}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
