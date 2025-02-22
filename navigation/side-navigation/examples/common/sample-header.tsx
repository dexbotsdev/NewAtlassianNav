/** @jsx jsx */
import React from "react";

import { jsx } from "@emotion/react";

import Box, { BoxProps } from "@atlaskit/ds-explorations/box";
import Icon from "@atlaskit/icon";
import { CustomItemComponentProps } from "@atlaskit/menu";

import { Header } from "@atlaskit/side-navigation";

import SampleIcon from "./sample-logo";

const Container: React.FC<CustomItemComponentProps> = ({
  children,
  ...props
}) => {
  return (
    <Box
      // eslint-disable-next-line @repo/internal/react/no-unsafe-spread-props
      {...props}
      as="div"
    >
      {children as BoxProps["children"]}
    </Box>
  );
};

const ExampleHeader = () => {
  return (
    <Header
      component={Container}
      description="Next-gen Solana Bots"
      iconBefore={<Icon label="" glyph={SampleIcon} size="medium" />}
    >
      SevenSols
    </Header>
  );
};

export default ExampleHeader;
