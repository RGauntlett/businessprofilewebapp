import React from "react";
import { SimpleGrid, Box, Badge } from "@chakra-ui/react";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";
import LineChart from "./LineChart";

export default function Reports() {
  return (
    <SimpleGrid minChildWidth="300px" spacing={10} w="100%" pb={2} ml={10}>
      <Box
        border="1px solid gray"
        borderRadius="10px"
        backgroundColor="#e5e5e5"
      >
        <Box p="1" display="flex" alignItems="baseline" justifyContent="center">
          <Badge
            borderRadius="full"
            px="2"
            backgroundColor="#08185E"
            color="white"
          >
            Monthly Sales
          </Badge>
        </Box>
        <LineChart />
        <Box
          p={3}
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
          justifySelf="center"
        >
          Total Sales
        </Box>
      </Box>
      <Box
        border="1px solid gray"
        borderRadius="10px"
        backgroundColor="#e5e5e5"
      >
        <Box p="1" display="flex" alignItems="baseline" justifyContent="center">
          <Badge
            borderRadius="full"
            px="2"
            backgroundColor="#08185E"
            color="white"
          >
            Customers
          </Badge>
        </Box>
        <BarChart />
        <Box
          p={3}
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
          justifySelf="center"
        >
          Monitor Your Best Customers
        </Box>
      </Box>
      <Box
        border="1px solid gray"
        borderRadius="10px"
        backgroundColor="#e5e5e5"
      >
        <Box p="1" display="flex" alignItems="baseline" justifyContent="center">
          <Badge
            borderRadius="full"
            px="2"
            backgroundColor="#08185E"
            color="white"
          >
            Monthly Report
          </Badge>
        </Box>
        <DoughnutChart />
        <Box
          p={3}
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
          justifySelf="center"
        >
          Track Your Monthly Sales
        </Box>
      </Box>
      <Box
        border="1px solid gray"
        borderRadius="10px"
        backgroundColor="#e5e5e5"
      >
        <Box p="1" display="flex" alignItems="baseline" justifyContent="center">
          <Badge
            borderRadius="full"
            px="2"
            backgroundColor="#08185E"
            color="white"
          >
            Best Products
          </Badge>
        </Box>
        <PieChart />

        <Box
          p={3}
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
          justifySelf="center"
        >
          Track Your Best-Selling Products
        </Box>
      </Box>
    </SimpleGrid>
  );
}
