"use client";
import React from "react";
import PdfTable, { BasicTable } from "./UserTable";
import { PDFViewer } from "@react-pdf/renderer";

const AttendanceMain = () => {
  return (
    <div>
      <PDFViewer style={{ width: "100%", height: "50vh" }}>
        <PdfTable />
      </PDFViewer>
      <BasicTable />
    </div>
  );
};

export default AttendanceMain;
