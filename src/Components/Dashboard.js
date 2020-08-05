import React, { Component } from "react";
import mockData from "../API/mockData";
import Table from "./Table/Table";
import "../App.css";


//Dashboard Component is called from APP.js when path is equal to '/' through routing
class Dashboard extends Component{
  constructor(props) {
    super(props);
    this.state = {
      rowData: null,
    };
  }

  componentDidMount() {
    window.addEventListener("load", this.handleSort(mockData));
    const rowData = this.rowData();
    this.setState({ rowData });
  }

  //Grouping the columns
  mapResponseData() {
    if (mockData) {
      const result = mockData.reduce(
        (columnsSoFar, { Type, TicketID, Summary, Status, CreatedDate }) => {
          if (!columnsSoFar[Type]) columnsSoFar[Type] = [];
          columnsSoFar[Type].push({
            Type,
            TicketID,
            Summary,
            Status,
            CreatedDate,
          });
          return columnsSoFar;
        },
        []
      );
      return result;
    }
    return [];
  }

  // Getting Row data from grouping
  rowData() {
    const data = this.mapResponseData();
    let rows = [];
    if (data) {
      for (const property in data) {
        rows = rows.concat(data[property]);
      }
      return rows;
    }
    return null;
  }

  // Handling of sort dates, sort dates by TicketID when two dates are same
  handleDatesSort(mockData) {
    if (mockData) {
      let newArr = [];
      let prevObj;
      mockData.map(function (currentobject, index) {
        if (newArr.includes(currentobject.CreatedDate)) {
          prevObj = mockData[index - 1];
          return mockData.sort((currentobject, prevObj) => {
            return currentobject.TicketID - prevObj.TicketID;
          });
        } else {
          newArr.push(currentobject.CreatedDate);
        }
      });
    }
    return [];
  }

  // Handling sort in DD/MMM/YY Format
  handleSort = (mockData) => {
    if (mockData) {
      this.handleDatesSort(mockData);
      return mockData.sort((a, b) => {
        return new Date(b.CreatedDate) - new Date(a.CreatedDate);
      });
    }
    return [];
  };

  render() {
    return <Table rowData={this.state.rowData ? this.state.rowData : ""} />;
  }
}

export default Dashboard;
