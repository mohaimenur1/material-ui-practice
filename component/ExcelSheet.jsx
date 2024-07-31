"use client";
import React from "react";
import XLSX from "xlsx-js-style";

const DownloadExcel = ({ data, title, subtitle1, subtitle2 }) => {
  const handleDownload = () => {
    const workbook = XLSX.utils.book_new();

    // Extract headers from JSON keys
    const headers = Object.keys(data[0]);

    // Prepare the data array with titles, subtitles, headers, and JSON data
    const worksheetData = [
      [title],
      [subtitle1],
      [subtitle2],
      headers,
      ...data.map((item) => headers.map((header) => item[header])),
    ];

    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);

    // Merge cells for titles
    worksheet["!merges"] = [
      { s: { r: 0, c: 0 }, e: { r: 0, c: headers.length - 1 } },
      { s: { r: 1, c: 0 }, e: { r: 1, c: headers.length - 1 } },
      { s: { r: 2, c: 0 }, e: { r: 2, c: headers.length - 1 } },
    ];

    // Merge rows dynamically
    const startRow = 4; // First row of data after headers
    const endRow = startRow + data.length * 2; // Adjust for dynamic data length
    for (let row = startRow; row < endRow; row += 2) {
      for (let col = 0; col < headers.length; col++) {
        if (col !== 8 && col !== 9) {
          // Skip columns I (8) and J (9)
          worksheet["!merges"].push({
            s: { r: row, c: col },
            e: { r: row + 1, c: col },
          });
        }
      }
    }

    // Define styles
    const headerStyle = {
      font: { bold: true },
      fill: {
        patternType: "solid",
        fgColor: { rgb: "00CCCCCC" },
      },
      alignment: {
        horizontal: "center",
        vertical: "center",
        wrapText: true,
      },
    };

    const titleStyle = {
      alignment: { horizontal: "center", vertical: "center" },
      font: { bold: true, sz: 16 },
    };
    const subTitleStyle = {
      alignment: { horizontal: "center", vertical: "center" },
      font: { sz: 14 },
    };

    // Apply styles to headers
    headers.forEach((_, col) => {
      const cellRef = XLSX.utils.encode_cell({ r: 3, c: col });
      if (!worksheet[cellRef]) return;
      worksheet[cellRef].s = headerStyle;
    });

    // Apply styles to titles
    worksheet["A1"].s = titleStyle;
    worksheet["A2"].s = subTitleStyle;
    worksheet["A3"].s = subTitleStyle;

    // Set row heights
    worksheet["!rows"] = [
      { hpx: 30 }, // Height for row 1
      { hpx: 30 }, // Height for row 2
      { hpx: 30 }, // Height for row 3
      { hpx: 30 }, // Height for header row (row 4)
    ];

    // Set column widths dynamically based on the length of headers
    worksheet["!cols"] = headers.map((header) => ({
      wpx: Math.max(60, header.length * 3),
    }));

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Dynamic Report");

    // Generate the Excel file
    XLSX.writeFile(workbook, "Dynamic_Report.xlsx");
  };

  return (
    <div>
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default DownloadExcel;
