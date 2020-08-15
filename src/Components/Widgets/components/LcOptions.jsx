import React, { useState, useEffect } from "react";
import { ConditionallyRender } from "react-util-kit";

import "./issueSelector.css";
import { render } from "@testing-library/react";

const LcOptionsSelector = ({ selectedIssue, setState, actionProvider }) => {
  const [displaySelector, toggleDisplaySelector] = useState(true);
  const [issues, setIssues] = useState([]);

  const issueOptions = [
    {
      iata: "OSL",
      nameCompact: "Can't create User",
    },
    {
      iata: "login",
      nameCompact: "Problem in Login",
    },
    {
      iata: "scope",
      nameCompact: "scope access",
    },
    {
      iata: "scope",
      nameCompact: "particular scope",
    },
    {
      iata: "workbook",
      nameCompact: "Workbook issues",
    },
    {
      iata: "test",
      nameCompact: "NLF|PER|DNF|NEF",
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
    actionProvider.handleLcOption();
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
export default LcOptionsSelector;
