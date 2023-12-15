import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Button } from "@mui/material";
import { FaPlay } from "react-icons/fa";
// import { FaPause } from "react-icons/fa";
import { LuCheckSquare } from "react-icons/lu";
import { FaSquare } from "react-icons/fa";
import { LuTimerReset } from "react-icons/lu";

const columns = [
  { id: "no", label: "NVA1", minWidth: "100%", align: "center" },
  { id: "operation", label: "VA1", minWidth: "100%", align: "center" },
  {
    id: "nva",
    label: "NVA2",
    minWidth: "100%",
    align: "center",
  },
  {
    id: "va",
    label: "VA2",
    minWidth: "100%",
    align: "center",
  },
  {
    id: "ct",
    label: "NVA3",
    minWidth: "100%",
    align: "center",
  },
  {
    id: "machine",
    label: "VA3",
    minWidth: "100%",
    align: "center",
  },
];

function createData(no, operation, nva, va, ct, machine) {
  return { no, operation, nva, va, ct, machine };
}

const rows = [
  createData(1, "Test", "IN", "Test", "Test", "Test", "Test"),
  createData(2, "Test", "CN", "Test", "Test", "Test", "Test"),
  createData(3, "Test", "IT", "Test", "Test", "Test", "Test"),
  createData(4, "Test", "US", "Test", "Test", "Test", "Test"),
  createData(5, "Test", "CA", "Test", "Test", "Test", "Test"),
  createData(6, "Test", "AU", "Test", "Test", "Test", "Test"),
];

export default function TimerTable() {
  return (
    <>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 400 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      backgroundColor: "#4f6481",
                      color: "white",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Box marginTop={2} display="flex" justifyContent="space-between">
        <Button
          variant="contained"
          style={{ backgroundColor: "#4f6481" }}
          size="large"
          startIcon={<FaPlay />}
        >
          Play
        </Button>

        <Button
          variant="contained"
          style={{ backgroundColor: "#4f6481" }}
          size="large"
          startIcon={<FaSquare color="red" />}
        >
          Pause
        </Button>

        <Button
          variant="contained"
          style={{ backgroundColor: "#4f6481" }}
          size="large"
          startIcon={<LuCheckSquare color="green" />}
        >
          Complete
        </Button>

        <Button
          variant="contained"
          style={{ backgroundColor: "#4f6481" }}
          size="large"
          startIcon={<LuTimerReset color="yellow" />}
        >
          Reset
        </Button>
      </Box>
    </>
  );
}
