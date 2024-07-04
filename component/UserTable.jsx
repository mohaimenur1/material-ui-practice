"use client";
import * as React from "react";

import {
  Document,
  Page,
  Text,
  View,
  Font,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    margin: 0,
    paddingTop: 30,
    paddingBottom: 50,
    paddingHorizontal: 30,
    backgroundColor: "#E4E4E4",
    flexDirection: "column",
  },
  tableContainer: {
    padding: "10px",
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
    borderRightWidth: 0,
    marginTop: 0,
    // borderBottomWidth: 0,
    // borderTopWidth: 1,
  },
  tableRow: {
    flexDirection: "row",
    minHeight: 24, // You can adjust this based on your row content
    wrap: false,
  },
  tableColHeader: {
    width: "12.5%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
    borderLeftWidth: 0,
    // borderTopWidth: 1,
    // borderBottomWidth: 1,

    backgroundColor: "#EEE",
    padding: 5,
    fontWeight: "bold",
    fontSize: "10px",
    textAlign: "center",
  },
  tableCol: {
    width: "12.5%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
    borderLeftWidth: 0,
    // borderTopWidth: 1,
    // borderBottomWidth: 1,
    padding: 5,
    fontSize: "7px",
    textAlign: "center",
  },
  tableCell: {
    marginBottom: 5,
    fontSize: 10,
    textAlign: "center",
  },

  footer: {
    position: "absolute",
    fontSize: 8,
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  //------------ second table start --------------
  table2: {
    display: "table",
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow2: {
    flexDirection: "row",
  },
  tableColHeader2: {
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
    borderLeftWidth: 0,
    borderTopWidth: 0,
    backgroundColor: "#EEE",
    padding: 5,
    fontWeight: "bold",
    fontSize: "10px",
    // textAlign: "center",
  },
  tableCol2: {
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 5,
    fontSize: "7px",
    // textAlign: "center",
  },
  tableCell2: {
    margin: "auto",
    fontSize: 10,
    // textAlign: "center",
  },
  //------------ second table end --------------

  //------------ third table start --------------
  table3: {
    display: "table",
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow3: {
    flexDirection: "row",
  },
  tableColHeader3: {
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
    borderLeftWidth: 0,
    borderTopWidth: 0,
    backgroundColor: "#EEE",
    padding: 5,
    // fontWeight: "bold",
    fontSize: "10px",
    alignItems: "center",
    justifyContent: "center",
  },
  tableCol3: {
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 5,
    fontSize: "7px",
  },
  tableCell3: {
    margin: "auto",
    fontSize: 10,
  },
  tableTitle3: {
    textAlign: "center",
  },
  //------------ third table end --------------

  tableSeparation: {
    // display: "flex",
    flexDirection: "row",
  },
  heading: {
    // display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    fontSize: "12px",
  },
  title: {
    fontSize: "12px",
    marginBottom: "5px",
  },
  subTitle: {
    fontSize: "10px",
  },
  employeeInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "10px",
    fontSize: "10px",
  },
  name: {
    marginLeft: 20,
  },
  id: {
    paddingLeft: 20,
  },
  desing: {
    paddingLeft: 25,
  },
});

export default function PdfTable() {
  function createData(
    shiftDate,
    day,
    shift,
    status,
    inTime,
    outTime,
    workTime,
    remarks
  ) {
    return {
      shiftDate,
      day,
      shift,
      status,
      inTime,
      outTime,
      workTime,
      remarks,
    };
  }

  function createData2(status, total) {
    return {
      status,
      total,
    };
  }
  function createData3(status, total) {
    return {
      status,
      total,
    };
  }

  const rows = [
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
    createData(
      "01/06/2024",
      "SATURDAY",
      "9AM-6PM",
      "LATE",
      "09:02:09 AM",
      "06:06:06 PM",
      "09:03:56",
      "habi jabi"
    ),
  ];

  const row2 = [
    createData2("LEAVE CL", 3),
    createData2("HOLIDAY", 3),
    createData2("WEEK END", 4),
    createData2("TOTAL OUT", 10),
  ];
  const row3 = [
    createData3("TOTAL PRESENT*", 20),
    createData3("REMARKS*", 3),
    createData3("LATE", 4),
  ];

  return (
    <Document>
      <Page style={styles.page} size={"A4"}>
        <View style={styles.heading}>
          <Text style={styles.title}>Atahar Ali Talukder Bhaban</Text>
          <Text style={styles.title}>Atahar Ali Talukder Bhaban</Text>
          <Text style={styles.subTitle}>Employee Wise Daily Punch Status</Text>
          <Text style={styles.subTitle}>Employee Wise Daily Punch Status</Text>
        </View>
        <View style={styles.employeeInfo}>
          <View>
            <Text>
              Employee Name: {"    "}
              <Text style={styles.name}>Shofiqul Islam</Text>
            </Text>
            <Text>
              Employee ID: {"         "} <Text style={styles.id}>54731</Text>{" "}
            </Text>
            <Text>
              Designation: {"           "}
              <Text style={styles.desing}>Principal Officer</Text>
            </Text>
          </View>
          <View>
            <Text>Department:{"            "} ICT</Text>
            <Text>Report Duration: {"     "} 01/06/2024 To 30/06/2024</Text>
          </View>
          <View></View>
        </View>
        {/* table 1*/}
        <View style={styles.tableContainer}>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>Shift Date</Text>
              <Text style={styles.tableColHeader}>Day</Text>
              <Text style={styles.tableColHeader}>Shift</Text>
              <Text style={styles.tableColHeader}>Status</Text>
              <Text style={styles.tableColHeader}>IN</Text>
              <Text style={styles.tableColHeader}>OUT</Text>
              <Text style={styles.tableColHeader}>
                Work Time (Including Interval)
              </Text>
              <Text style={styles.tableColHeader}>Remarks</Text>
            </View>
            {rows.map((row, index) => (
              <View style={styles.tableRow} key={index} wrap={false}>
                <Text style={styles.tableCol}>{row.shiftDate}</Text>
                <Text style={styles.tableCol}>{row.day}</Text>
                <Text style={styles.tableCol}>{row.shift}</Text>
                <Text style={styles.tableCol}>{row.status}</Text>
                <View style={styles.tableCol}>
                  <Text
                    style={{
                      border: "1px solid black",
                      // row.status === "Weekend" ||
                      // row.status === "Absent" ||
                      // row.status === "Holiday"
                      //   ? null
                      //   : styles.splitTable
                    }}
                  >
                    {/* {row.inTime.inTimeDateFormat === "Invalid Date"
                      ? ""
                      : row.inTime.inTimeDateFormat} */}
                    sdfasdfsdfasdf
                  </Text>
                  <Text>
                    {/* {row.inTime.inTimeFormat === "Invalid Date"
                      ? ""
                      : row.inTime.inTimeFormat} */}{" "}
                    testing
                  </Text>
                </View>
                <Text style={styles.tableCol}>{row.outTime}</Text>
                <Text style={styles.tableCol}>{row.workTime}</Text>
                <Text style={styles.tableCol}>{row.remarks}</Text>
              </View>
            ))}
          </View>
        </View>
        {/* out status & present status tables */}
        <View style={styles.tableSeparation}>
          {/* table 2.1 */}
          <View style={styles.tableContainer}>
            <View style={styles.table2}>
              <View style={styles.tableRow2}>
                <Text style={styles.tableColHeader2}>OUT STATUS</Text>
              </View>
              <View style={styles.tableRow2}>
                <Text style={styles.tableColHeader2}>STATUS</Text>
                <Text style={styles.tableColHeader2}>TOTAL</Text>
              </View>
              {row2.map((row, index) => (
                <View style={styles.tableRow2} key={index}>
                  <Text style={styles.tableCol2}>{row.status}</Text>
                  <Text style={styles.tableCol2}>{row.total}</Text>
                </View>
              ))}
            </View>
          </View>
          {/* table 2.2 */}
          <View style={styles.tableContainer}>
            <View style={styles.table3}>
              <View style={styles.tableRow3}>
                <Text style={styles.tableColHeader3}>PRESENT STATUS</Text>
              </View>
              <View style={styles.tableRow3}>
                <Text style={styles.tableColHeader3}>STATUS</Text>
                <Text style={styles.tableColHeader3}>TOTAL</Text>
              </View>
              {row3.map((row, index) => (
                <View style={styles.tableRow3} key={index}>
                  <Text style={styles.tableCol3}>{row.status}</Text>
                  <Text style={styles.tableCol3}>{row.total}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
        {/* footer */}
        <View style={styles.footer} fixed>
          <Text>Design and developed by: Walton Group</Text>
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
          <Text>{/* Print Date and Time: {printDate}, {printTime} */}</Text>
        </View>
      </Page>
    </Document>
  );
}

export const BasicTable = () => (
  <div>
    <PDFDownloadLink document={<PdfTable />} fileName="somename.pdf">
      {({ blob, url, loading, error }) =>
        loading ? "Loading document..." : "Download now!"
      }
    </PDFDownloadLink>
    {/* <PdfTable /> */}
  </div>
);
