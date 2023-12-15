import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box, Button } from "@mui/material";
import { MdOutlineAddBox } from "react-icons/md";
import { LuClipboardEdit } from "react-icons/lu";
import { AiOutlineDelete } from "react-icons/ai";

const columns = [
  { id: "no", label: "No", minWidth: 50, align: "center" },
  { id: "operation", label: "Operation", minWidth: 170, align: "center" },
  {
    id: "nva",
    label: "NVA",
    minWidth: 50,
    align: "center",
  },
  {
    id: "va",
    label: "VA",
    minWidth: 50,
    align: "center",
  },
  {
    id: "ct",
    label: "CT",
    minWidth: 50,
    align: "center",
  },
  {
    id: "machine",
    label: "Machine",
    minWidth: 170,
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
  createData(7, "Test", "DE", "Test", "Test", "Test", "Test"),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Box marginBottom={2} display="flex" justifyContent="flex-end" gap="5px">
        <Button variant="contained" startIcon={<MdOutlineAddBox />}>
          Add
        </Button>
        <Button
          variant="contained"
          color="warning"
          startIcon={<LuClipboardEdit />}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="error"
          startIcon={<AiOutlineDelete />}
        >
          Delete
        </Button>
      </Box>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 300 }}>
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
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
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
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
