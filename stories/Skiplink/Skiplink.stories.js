import React from "react";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";

import { Skiplink, SkiplinkItem } from "../../src";

import SkipLinkExample from "./SkipLinkExample";

import Esempi from "./docs/Esempi.md";

storiesOf("Componenti/Skiplink", module)
  .addDecorator(withA11y)
  .add(
    "Esempi",
    withInfo({
      text: Esempi,
      propTables: [Skiplink, SkiplinkItem],
      propTablesExclude: [SkipLinkExample]
    })(() => <SkipLinkExample />)
  );
