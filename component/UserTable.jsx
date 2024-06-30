"use client";
import * as React from "react";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: "#E4E4E4",
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
    borderBottomWidth: 0,
    textAlign: "center",
  },
  tableRow: {
    flexDirection: "row",
  },
  tableColHeader: {
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
  },
  tableCol: {
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 5,
    fontSize: "7px",
  },
  tableCell: {
    margin: "auto",
    fontSize: 10,
  },
  tableSeparation: {
    flexDirection: "row",
    // display: "flex",
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
});

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

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
      <Page size={"A4"}>
        <View style={styles.heading}>
          <Text style={styles.title}>Atahar Ali Talukder Bhaban</Text>
          <Text style={styles.subTitle}>Employee Wise Daily Punch Status</Text>
        </View>
        <View style={styles.employeeInfo}>
          <View>
            <Text>Employee Name: Shofiqul Islam</Text>
            <Text>Employee ID: 54731</Text>
            <Text>Designation: 54731</Text>
          </View>
          <View>
            <Text>Department: ICT</Text>
            <Text>Section: Commercial Operations</Text>
            <Text>Report Duration: 01/06/2024 To 30/06/2024</Text>
          </View>
          <View></View>
        </View>
        {/* table */}
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
              <View style={styles.tableRow} key={index}>
                <Text style={styles.tableCol}>{row.shiftDate}</Text>
                <Text style={styles.tableCol}>{row.day}</Text>
                <Text style={styles.tableCol}>{row.shift}</Text>
                <Text style={styles.tableCol}>{row.status}</Text>
                <Text style={styles.tableCol}>{row.inTime}</Text>
                <Text style={styles.tableCol}>{row.outTime}</Text>
                <Text style={styles.tableCol}>{row.workTime}</Text>
                <Text style={styles.tableCol}>{row.remarks}</Text>
              </View>
            ))}
          </View>
        </View>
        {/* out status & present status */}
        <View style={styles.tableSeparation}>
          <View style={styles.tableContainer}>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableColHeader}>OUT STATUS</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableColHeader}>STATUS</Text>
                <Text style={styles.tableColHeader}>TOTAL</Text>
              </View>
              {row2.map((row, index) => (
                <View style={styles.tableRow} key={index}>
                  <Text style={styles.tableCol}>{row.status}</Text>
                  <Text style={styles.tableCol}>{row.total}</Text>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.tableContainer}>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableColHeader}>PRESENT STATUS</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableColHeader}>STATUS</Text>
                <Text style={styles.tableColHeader}>TOTAL</Text>
              </View>
              {row3.map((row, index) => (
                <View style={styles.tableRow} key={index}>
                  <Text style={styles.tableCol}>{row.status}</Text>
                  <Text style={styles.tableCol}>{row.total}</Text>
                </View>
              ))}
            </View>
          </View>
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
