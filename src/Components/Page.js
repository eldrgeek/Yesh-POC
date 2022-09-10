import React, { useState } from "react";
import {
  Box,
  Link,
  Stack,
  ExternalLinkIcon,
  Flex,
  Text,
  Button
} from "@chakra-ui/react";

const Page = (props) => {
  const [data, setData] = useState("undefined");
  const move = () => {
    setData(JSON.stringify(document.location.href));
    const win = window.open(document.URL, "something", "width=600,height=500");
  };
  return (
    <Flex align="center" m={5}>
      <Button onClick={move}> Open</Button>
      <Link href="https://chakra-ui.com" isExternal>
        Chakra Design system
        {/* <ExternalLinkIcon mx="2px" /> */}
      </Link>
      <Button> Button 1</Button>
      <Button> Button 1</Button>
      <Box>
        <Text> {data} </Text>
      </Box>
    </Flex>
  );
};
export default Page;
