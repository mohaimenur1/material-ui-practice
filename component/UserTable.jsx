"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: "#E4E4E4",
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableColHeader: {
    width: "20%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
    borderLeftWidth: 0,
    borderTopWidth: 0,
    backgroundColor: "#EEE",
    padding: 5,
    fontWeight: "bold",
  },
  tableCol: {
    width: "20%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 5,
  },
  tableCell: {
    margin: "auto",
    fontSize: 10,
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
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
  return (
    <Document>
      <Page size={"A4"}>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableColHeader}>Dessert (100g serving)</Text>
            <Text style={styles.tableColHeader}>Calories</Text>
            <Text style={styles.tableColHeader}>Fat&nbsp;(g)</Text>
            <Text style={styles.tableColHeader}>Carbs&nbsp;(g)</Text>
            <Text style={styles.tableColHeader}>Protein&nbsp;(g)</Text>
          </View>
          {rows.map((row, index) => (
            <View style={styles.tableRow} key={index}>
              <Text style={styles.tableCol}>{row.name}</Text>
              <Text style={styles.tableCol}>{row.calories}</Text>
              <Text style={styles.tableCol}>{row.fat}</Text>
              <Text style={styles.tableCol}>{row.carbs}</Text>
              <Text style={styles.tableCol}>{row.protein}</Text>
            </View>
          ))}
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
