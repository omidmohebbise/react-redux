import React from "react";
import { Link, Route, useParams } from "react-router-dom";
import { Practice1 } from "./practice1";

export const Part3 = () => {
  let { practice } = useParams();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="col  bg-light" to="/part3/1">
          Practice1
        </Link>
        {/* <Link className="col  bg-light" to="/part3/1">
          Practice2
        </Link> */}
      </nav>

      <div>
        {practice === "1" && <Practice1 />}
        {/* {practice === "2" && <Practice1 />} */}
      </div>
    </div>
  );
};
