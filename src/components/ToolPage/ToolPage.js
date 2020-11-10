import React, { useState, useEffect } from "react";

import * as api from "../../api/index";
import Tool from "../../components/Tool";
const delay = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));

function ToolPage({ match }) {
  const id = match.params.id;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(undefined);

  function fetchTool() {
    setLoading(true);
    setError(null);

    return delay(2000)
      .then(() => api.Tools.show(id))
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }
  useEffect(() => {
    fetchTool();
  }, []);
  if (loading === true) {
    return "Loading...";
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <Tool tool={data} />;
}

export default ToolPage;
