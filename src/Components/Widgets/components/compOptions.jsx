import React from "react";

import Options from "../../Options/Options";

const ComponentOptions = props => {
  const options = [
    {
      name: "Adapter",
      handler: props.actionProvider.handleAdOption,
      id: 1
    },
    {
      name: "Correlator",
      handler: props.actionProvider.handleCrOption,
      id: 2
    },
    {
      name: "Data Store",
      handler: props.actionProvider.handleDsOption,
      id: 3
    },
    {
      name: "Local Console",
      handler: props.actionProvider.handleLcOption,
      id: 4
    }
  ];
  return <Options options={options} title="Choose from the following components" {...props} />;
};

export default ComponentOptions;