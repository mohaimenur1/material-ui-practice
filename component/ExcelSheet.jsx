// import React, { useState } from "react";
"use client";
import * as XLSX from "xlsx";

const ExcelSheet = ({ empAttendanceData }) => {
  //   const [apiData, setApiData] = useState([]);

  const exportToExcel = () => {
    const title = [["Title: Khamar Bari"]];
    const subtitle = [["Subtitle: Employee Wise Daily Punch Status"]];
    const headers = [
      [
        "Emp ID",
        "Name",
        "Day",
        "Shift",
        "SSL Status",
        "Status",
        "Revised Status",
        "IN",
        "OUT",
        "Work Time",
        "Actual OT Done",
        "OT Request",
        "Remarks",
      ],
    ];

    // Convert JSON data to array of arrays
    const dataArray = empAttendanceData.map((item) => [
      item.EmpCode,
      item.Name,
      item.Day,
      item.Shift,
      item.SSLStatus,
      item.Status,
      item.RevisedStatus,
      item.IN,
      item.OUT,
      item.WorkTime,
      item.ActualOTDone,
      item.OTRequest,
      item.Remarks,
    ]);

    // Combine title, subtitle, headers, and data
    const finalData = [...title, ...subtitle, ...headers, ...dataArray];

    // Create a new workbook
    const workbook = XLSX.utils.book_new();

    // Convert array of arrays to a worksheet
    const worksheet = XLSX.utils.aoa_to_sheet(finalData);

    // Define merges
    worksheet["!merges"] = [
      { s: { r: 0, c: 0 }, e: { r: 0, c: 2 } }, // Merge first row for title
      { s: { r: 1, c: 0 }, e: { r: 1, c: 2 } }, // Merge second row for subtitle
    ];

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // Center the title and subtitle by adding styles
    worksheet["A1"].s = { alignment: { horizontal: "center" } };
    worksheet["A2"].s = { alignment: { horizontal: "center" } };

    // Set column widths if needed
    worksheet["!cols"] = [{ wch: 20 }, { wch: 20 }, { wch: 20 }];

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
