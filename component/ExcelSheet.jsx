// import React, { useState } from "react";
"use client";
import * as XLSX from "xlsx";

const ExcelSheet = ({ data }) => {
  //   const [apiData, setApiData] = useState([]);

  const exportToExcel = () => {
    const title = [["Title: Khamar Bari"]];
    const subtitle = [["Subtitle: Employee Wise Daily Punch Status"]];
    const headers = [["ID", "Name", "Body"]];

    // Convert JSON data to array of arrays
    const dataArray = data.map((item) => [item.id, item.title, item.body]);

    console.log("Data Array:", dataArray);

    // Combine title, subtitle, headers, and data
    const finalData = [...title, ...subtitle, ...headers, ...dataArray];

    console.log("Final Data:", finalData);

    // Create a new workbook
    const workbook = XLSX.utils.book_new();

    // Convert array of arrays to a worksheet
    const worksheet = XLSX.utils.aoa_to_sheet(finalData);

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // Write the workbook to a file
    XLSX.writeFile(workbook, "API_Data_with_Titles.xlsx");
  };

  return (
    <div>
      <button onClick={exportToExcel}>Export to Excel</button>
    </div>
  );
};

export default ExcelSheet;
