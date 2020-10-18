import React from "react";

import DefaultLayout from "../../components/DefaultLayout";
import Tool from "../../components/Tool";
import Filter from "../../components/Filter";

import * as api from "../../api";

function Home() {
  const tools = api.Tools.list();
  return (
    <DefaultLayout>
      <Filter />
      <ul className="tool__list">
        {tools.map((tool) => (
          <li key={tool.id} className="tool">
            <Tool tool={tool} />
          </li>
        ))}
      </ul>
    </DefaultLayout>
  );
}
export default Home;
