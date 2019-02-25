import React, { Component } from 'react';
import './TestData.css';

function testData(idx, name, date) {
  this.idx = idx;
  this.name = name;
  this.date = date;
}

class TestData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataToShow: "HEY",
      tableData: []
    };
  }

  componentDidMount() {
    /* Create some test data */
    let tableArray = [];
    for (let i = 0; i < 15; i++) {
      let dateTime = new Date();
      let curData = new testData(i+1, "Test"+(i+1), dateTime);
      tableArray.push(curData);
    }
    this.setState({tableData: tableArray});
  }

  componentWillUnmount() {
  }

  tick() {
    let curDataToShow = this.state.dataToShow;

    if (curDataToShow == "HEY") {
      curDataToShow = "NOPE";
    } else {
      curDataToShow = "HEY";
    }

    this.setState({
      dataToShow: curDataToShow
    });
  }

  isOdd(idx) {
    if ((idx & 0x01) == 0) return "odd";
    else return "even";
  }

  handleClick(idx) {
    console.log(idx);
  }

  render() {
    let tableRows = this.state.tableData.map((tableData) => 
      <tr key={tableData.idx} className={this.isOdd(tableData.idx)}>
        <td onClick={this.handleClick.bind(this, tableData.idx)}>{tableData.idx}</td>
        <td>{tableData.name}</td>
        <td>{tableData.date.toString()}</td>
      </tr>
    );

    return (
      <div>
      <div className="link-container"><span className="link-tab">First Tab</span> | <span className="link-tab">Second Tab</span></div>
      <div className="data-container">
      <div className="table-header">Test Data 1</div>
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </table>
      </div>
      </div>
    );
  }
}

export default TestData;