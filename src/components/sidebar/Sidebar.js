import React, { useState } from "react";
import {
  Flex,
  Text,
  IconButton,
  Divider,
  Icon,
  Heading,
} from "@chakra-ui/react";
import { FaHammer } from "react-icons/fa";
import {
  FiMenu,
  FiHome,
  FiCalendar,
  FiUser,
  FiDollarSign,
  FiBriefcase,
  FiSettings,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";

export default function Sidebar() {
  const [navSize, setNavSize] = useState("large");

  const sideItems = [
    {
      id: "1",
      icon: FiHome,
      title: "Dashboard",
      description: "A Quick Snap Shot Of Your Performance",
      link: "/",
    },
    {
      id: "2",
      icon: FiCalendar,
      title: "Calendar",
      description: "Important Dates",
      link: "/calendar",
    },
    {
      id: "3",
      icon: FiUser,
      title: "Clients",
      description: "Top Customers",
      link: "/customers",
    },
    {
      id: "4",
      icon: FiDollarSign,
      title: "Sales",
      description: "Transaction Statement",
      link: "/sales",
    },
    {
      id: "5",
      icon: FiBriefcase,
      title: "Reports",
      description: "Sales Reports",
      link: "/reports",
    },
    {
      id: "6",
      icon: FiSettings,
      title: "Settings",
      description: "Account Settings",
      link: "/settings",
    },
  ];

  return (
    <Flex
      pos="sticky"
      left="5px"
      height="95vh"
      marginTop="2.5vh"
      marginBottom="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0,0,0,0.5)"
      borderRadius={navSize === "small" ? "15px" : "30px"}
      w={navSize === "small" ? "75px" : "200px"}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
        p="5%"
        flexDir="column"
        alignItems={navSize === "small" ? "center" : "flex-start"}
        as="nav"
      >
        <IconButton
          background="none"
          mt={5}
          _hover={{ background: "none" }}
          icon={<FiMenu />}
          onClick={() => {
            if (navSize === "small") setNavSize("large");
            else setNavSize("small");
          }}
        />

        {sideItems.map((sideItem) => (
          <NavItem
            key={sideItem.id}
            navSize={navSize}
            icon={sideItem.icon}
            title={sideItem.title}
            description={sideItem.description}
            link={sideItem.link}
          />
        ))}
      </Flex>

      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize === "small" ? "center" : "flex-start"}
        mb={4}
      >
        <Divider display={navSize === "small" ? "none" : "flex"} />
        <Flex mt={4} align="center">
          <Link to="/login">
            <Icon as={FaHammer} />
          </Link>

          <Flex
            flexDir="column"
            ml={4}
            display={navSize === "small" ? "none" : "flex"}
          >
            <Heading as="h3" size="sm">
              Bunnings Warehouse
            </Heading>
            <Text color="#08185E" fontWeight="bold">
              Supplier
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
