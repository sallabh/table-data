import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table } from "antd";
import "antd/dist/antd.css";

class TableRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        {
          title: "Description",
          dataIndex: "description",
          key: "description",
          width: "10%",
          render: description =>
            description ? (
              <div className="description">{description}</div>
            ) : (
              <div className="description">-</div>
            )
        },
        {
          title: "Group Id",
          dataIndex: "groupId",
          key: "groupId",
          width: "10%",
          render: groupId =>
            groupId ? (
              <div className="groupId">{groupId}</div>
            ) : (
              <div className="groupId">-</div>
            )
        },
        {
          title: "Score",
          dataIndex: "score",
          key: "score",
          width: "10%",
          render: score =>
            score ? (
              <div className="score">{score}</div>
            ) : (
              <div className="score">-</div>
            )
        },
        {
          title: "Test Case Id",
          dataIndex: "testCases",
          key: "testCaseId",
          width: "10%",
          render: testCases =>
            testCases ? (
              <div>
                {testCases.map(testCase => (
                  <div className="testCaseId">{testCase.testCaseId}</div>
                ))}
              </div>
            ) : (
              <div className="testCaseId">-</div>
            )
        },
        {
          title: "Test Case Description",
          dataIndex: "testCases",
          key: "testCaseDescription",
          width: "10%",
          render: testCases =>
            testCases ? (
              <div>
                {testCases.map(testCase => (
                  <div className="testCaseId">
                    {testCase.testCaseDescription}
                  </div>
                ))}
              </div>
            ) : (
              <div className="testCaseId">-</div>
            )
        }
      ]
    };
  }

  render() {
    const { rows, loading, fetchingData } = this.props;
    const { columns } = this.state;
    return (
      <Table
        columns={columns}
        dataSource={rows}
        loading={loading}
        size="middle"
        bordered
        pagination={(true, { size: "medium" })}
        locale={{ emptyText: fetchingData ? "" : "No Data Found" }}
        loading={fetchingData}
        scroll={{ x: 1024 }}
      />
    );
  }
}

TableRow.propTypes = {
  rows: PropTypes.array,
  fetchingData: PropTypes.bool,
  loading: PropTypes.bool
};

export default TableRow;
