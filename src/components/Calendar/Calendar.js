import React from "react";
import { Flex } from "@chakra-ui/layout";
import Sidebar from "..//sidebar/Sidebar";
import CalendarWid from "./CalendarWidget";

export default function Calendar() {
  return (
    <Flex p={10} w="100%">
      <Sidebar />
      <Flex ml={10} w="100%" justifyContent="center" align="center">
        <CalendarWid />
      </Flex>
    </Flex>
  );
}
