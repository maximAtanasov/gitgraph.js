import * as React from "react";
import { storiesOf } from "@storybook/react";
import { createGitgraph } from "@gitgraph/js";

import { GraphContainer } from "../helpers";
import simpleGraph from "../import-fixtures/simple-graph";
import deletedBranch from "../import-fixtures/deleted-branch";
import gitflow from "../import-fixtures/gitflow";

storiesOf("gitgraph-js/4. Imports", module)
  .add("simple graph", () => (
    <GraphContainer>
      {(graphContainer) => {
        const gitgraph = createGitgraph(graphContainer);

        gitgraph.import(simpleGraph);
      }}
    </GraphContainer>
  ))
  .add("deleted branch", () => (
    <GraphContainer>
      {(graphContainer) => {
        const gitgraph = createGitgraph(graphContainer);

        gitgraph.import(deletedBranch);
      }}
    </GraphContainer>
  ))
  .add("gitflow", () => (
    <GraphContainer>
      {(graphContainer) => {
        const gitgraph = createGitgraph(graphContainer);

        gitgraph.import(gitflow);
      }}
    </GraphContainer>
  ));