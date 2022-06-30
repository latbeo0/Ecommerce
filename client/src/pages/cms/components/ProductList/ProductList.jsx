import * as React from "react";
import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import "./ProductList.css";
import { productList } from "../../../../assets/data/productData";

export default function ProductList() {
  useEffect(() => {
    let columnData = [];
    const keys = Object.keys(productList[0]);
    keys.forEach((key, index) => {
      columnData.push({
        id: index,
        label: key,
        minWidth: 170,
      });
    });
    setColumn(columnData);
    setRow(productList);
  }, []);

  const [rows, setRow] = useState([]);
  const [columns, setColumn] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  className="ProductListCell"
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, rIndex) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={rIndex}>
                    {columns.map((column, cIndex) => {
                      const value = row[column.label];
                      return (
                        <TableCell className="ProductListCell" key={cIndex}>
                          {column.label === "main_Image" ? (
                            <img
                              className="ImageContainer"
                              src={value}
                              alt={value}
                            />
                          ) : column.format && typeof value === "number" ? (
                            column.format(value)
                          ) : (
                            value
                          )}
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
  );
}
