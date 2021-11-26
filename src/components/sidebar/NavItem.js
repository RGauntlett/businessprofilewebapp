import React from "react";
import {
  Flex,
  Text,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import NavHoverBox from "./NavHoverBox";

export default function NavItem({
  navSize,
  icon,
  title,
  active,
  description,
  link,
}) {
  return (
    <Flex
      mt={30}
      flexDir="column"
      w="100%"
      alignItems={navSize === "small" ? "center" : "flex-start"}
    >
      <Menu placement="right">
        <Link
          backgroundColor={active && "#Ee8a2e"}
          p={3}
          borderRadius={8}
          _hover={{ textDecor: "none", backgroundColor: "#Ee8a2e" }}
          w={navSize === "large" && "100%"}
        >
          <MenuButton w="100%">
            <Flex>
              <Icon
                as={icon}
                fontSize="xl"
                color={active ? "#Ee8a2e" : "#08185E"}
              />
              <Text
                ml={5}
                color="#08185E"
                display={navSize === "small" ? "none" : "flex"}
              >
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
        <MenuList py={0} border="none" w={200} h={200} ml={5}>
          <NavHoverBox
            title={title}
            icon={icon}
            description={description}
            link={link}
          />
        </MenuList>
      </Menu>
    </Flex>
  );
}
