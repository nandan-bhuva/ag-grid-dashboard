import React, { useEffect, useState } from "react";
import EmployeeGrid from "../components/grid/EmployeeGrid";
import { getEmployees } from "../services/employeeService";
import employeeData from "../data/empData.json";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("Api data" + employeeData.employees);
    const loadData = async () => {
      const apiData = await getEmployees();
      console.log("Inside Load Data");
      if (apiData) {
        console.log("Set Data");
        setData(apiData); // If Api Runs
      } else {
        console.log("fallback JSON");
        setData(employeeData.employees); // (If Api Fails) fallback JSON File
      }
    };

    loadData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>📊 Employee Dashboard</h2>
      <EmployeeGrid rowData={data} />
    </div>
  );
};

export default Dashboard;