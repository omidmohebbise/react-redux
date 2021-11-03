import React from "react";
import { compose, pipe } from "lodash/fp";
import { lowerCase, trim, upperCase } from "lodash";

export const Practice1 = () => {
  let input = "    test content";
  let composeTransform = compose(trim, lowerCase, upperCase);
  let pipeTransform = pipe(trim, lowerCase, upperCase);
  let composeResult = composeTransform(input);
  let pipeResult = pipeTransform(input);
  return (
    <div className="p-2 ">
      <code className="bg-light">
        let input = " test content";
        <br />
        let composeTransform = compose(trim, lowerCase, upperCase);
        <br />
        let pipeTransform = pipe(trim, lowerCase, upperCase);
        <br />
        let composeResult = composeTransform(input);
        <br />
        let pipeResult = pipeTransform(input);
        <br />
      </code>

      <div className="d-flex flex-column mt-2 bg-success p-2">
        Compose result(RTL) = {composeResult}
        <br />
        Pipe result(LTR) = {pipeResult}
      </div>
    </div>
  );
};
