import React, { useState, useEffect } from "react";
import { ConditionallyRender } from "react-util-kit";

import "./issueSelector.css";
import { render } from "@testing-library/react";

const AdOptionsSelector = ({ selectedIssue, setState, actionProvider }) => {
  const [displaySelector, toggleDisplaySelector] = useState(true);
  const [issues, setIssues] = useState([]);

  const issueOptions = [
    {
      iata: "alerts",
      nameCompact: "Alerts",
    },
    {
      iata: "reports",
      nameCompact: "Reports",
    },
    {
      iata: "queuing",
      nameCompact: "High queuing",
    },
    {
      iata: "logs",
      nameCompact: "Logs not found",
    },
  ];

  useEffect(() => {
    setIssues(issueOptions);
  }, []);

  const handleSubmit = (e) => {
    setState((state) => ({
      ...state,
      selectedIssue: issues.find((issue) => issue.iata === e.target.value),
    }));
  };

  const handleConfirm = () => {
    actionProvider.handleAdOption();
    toggleDisplaySelector((prevState) => !prevState);
  };

  if (!issues) return null;

  const createIssueOptions = () => {
    return issues.map((item) => {
      return (
        <option key={item.iata} value={item.iata}>
          {item.nameCompact}
        </option>
      );
    });
  };

    return (
      <div className="issue-selector-container">
        <ConditionallyRender
          ifTrue={displaySelector}
          show={
            <>
              {" "}
              <h2 className="issue-selector-heading">Select related Issues</h2>
              <select
                className="issue-selector"
                value={selectedIssue.iata}
                onChange={handleSubmit}
              >
                {createIssueOptions()}
              </select>
              <button className="issue-button-confirm" onClick={handleConfirm}>
                Confirm
            </button>
            </>
          }
          elseShow={
            <>
              <h2 className="issue-selector-heading">Issue Chosen</h2>
              <p>
                Great! You have chosen the issue "{selectedIssue.nameCompact}"
            </p>
            </>
          }
        />
      </div>
    );
  }
export default AdOptionsSelector;
