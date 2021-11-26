import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Flex } from "@chakra-ui/layout";
import SupplierPage from "../SupplierPage";
import Calendar from "../Calendar/Calendar";
import CustomerTable from "../CustomerTable/CustomerTable";
import LoginPage from "../LoginPage/LoginPage";
import AccountPage from "../AccountPage/AccountPage";
import SalesPage from "../Sales/Sales";
import SettingsPage from "../Settings/SettingsPage";

const Switch = (props) => {
  return (
    <Router>
      <Flex bgGradient="linear(to-l, #08185E, #fff)">
        <Routes>
          <Route path="login" element={<LoginPage />}></Route>

          <Route path="reports" element={<SupplierPage />}></Route>

          <Route path="calendar" element={<Calendar />}></Route>

          <Route path="customers" element={<CustomerTable />}></Route>

          <Route path="sales" element={<SalesPage />}></Route>

          <Route path="settings" element={<SettingsPage />}></Route>

          <Route path="/" element={<AccountPage />}></Route>
        </Routes>
      </Flex>
    </Router>
  );
};

export default Switch;
