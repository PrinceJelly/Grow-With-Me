import React from "react";
import { Progress } from "semantic-ui-react";

const ProgressExampleActive = () => (
  <Progress
    className="progress-bar"
    percent={60}
    color="yellow"
    active
    progress
  ></Progress>
);

export default ProgressExampleActive;
