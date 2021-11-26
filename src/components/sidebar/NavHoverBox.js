import React from "react";
import { Flex, Heading, Text, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NavHoverBox({ icon, title, description, link }) {
  return (
    <>
      <Flex
        pos="absolute"
        mt="calc(100px - 7.5px)"
        ml="-10px"
        w={0}
        h={0}
        borderTop="10px solid transparent"
        borderBottom="10px solid transparent"
        borderRight="10px solid #Ee8a2e"
      />
      <Link to={link}>
        <Flex
          h={200}
          w="100%"
          flexDir="column"
          alignItems="center"
          justify="center"
          backgroundColor="#Ee8a2e"
          borderRadius="10px"
          color="#fff"
          textAlign="center"
        >
          <Icon as={icon} fontSize="3xl" mb={4} />
          <Heading size="md" fontWeight="normal">
            {title}
          </Heading>
          <Text>{description}</Text>
        </Flex>
      </Link>
    </>
  );
}
