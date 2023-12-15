import { Box, Typography } from "@mui/material";
import React from "react";
import { Border } from "../components/Border";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { FaSyncAlt } from "react-icons/fa";

const columns = [
  { id: "cuttingdie", label: "Cutting Die", minWidth: 50, align: "center" },
  { id: "operation", label: "Operation", minWidth: 50, align: "center" },
  {
    id: "nva1",
    label: "NVA1",
    minWidth: 50,
    align: "center",
  },
  {
    id: "va1",
    label: "VA1",
    minWidth: 50,
    align: "center",
  },
  {
    id: "nva2",
    label: "NVA2",
    minWidth: 50,
    align: "center",
  },
  {
    id: "va2",
    label: "VA2",
    minWidth: 50,
    align: "center",
  },
  {
    id: "nva3",
    label: "NVA3",
    minWidth: 50,
    align: "center",
  },
  {
    id: "va3",
    label: "VA3",
    minWidth: 50,
    align: "center",
  },
];

function createData(cuttingdie, operation, nva1, va1, nva2, va2, nva3, va3) {
  return { cuttingdie, operation, nva1, va1, nva2, va2, nva3, va3 };
}

const rows = [
  createData("test", "test", "test", "test", "test", "test", "test", "test"),
  createData("test", "test", "test", "test", "test", "test", "test", "test"),
  createData("test", "test", "test", "test", "test", "test", "test", "test"),
  createData("test", "test", "test", "test", "test", "test", "test", "test"),
  createData("test", "test", "test", "test", "test", "test", "test", "test"),
  createData("test", "test", "test", "test", "test", "test", "test", "test"),
  createData("test", "test", "test", "test", "test", "test", "test", "test"),
  createData("test", "test", "test", "test", "test", "test", "test", "test"),
  createData("test", "test", "test", "test", "test", "test", "test", "test"),
  createData("test", "test", "test", "test", "test", "test", "test", "test"),
  createData("test", "test", "test", "test", "test", "test", "test", "test"),
  createData("test", "test", "test", "test", "test", "test", "test", "test"),
  createData("test", "test", "test", "test", "test", "test", "test", "test"),
  createData("test", "test", "test", "test", "test", "test", "test", "test"),
];

const OfflineData = () => {
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
      <Box
        display="flex"
        justifyContent="center"
        gap="10px"
        alignItems="center"
      >
        <Typography
          variant="h5"
          component="h4"
          textTransform="uppercase"
          fontWeight="bold"
        >
          Offline Data
        </Typography>
        <FaSyncAlt size={20} color="orange" />
      </Box>
      <Border>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column, index) => (
                    <TableCell
                      key={index}
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
                        {columns.map((column, index) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={index} align={column.align}>
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
      </Border>
    </>
  );
};

export default OfflineData;
