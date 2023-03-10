import React, { Fragment, useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";

function TableList() {
  const darkMode = useSelector((state) => state.toggleTheme.darkMode);
  const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];

  return (
    <Fragment>
      <Box
        sx={{
          boxShadow: darkMode
            ? "6px -11px 26px 0px rgba(0,251,255,0.92)"
            : "0 3px 10px rgb(0 0 0 / 0.2)",
        }}
      >
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple-table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography
                    sx={{
                      fontWeight: "800",
                      fontSize: "14px",
                      color: darkMode ? "white" : "black",
                    }}
                  >
                    Tracking Id
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      fontWeight: "800",
                      fontSize: "14px",
                      color: darkMode ? "white" : "black",
                    }}
                  >
                    Product
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      fontWeight: "800",
                      fontSize: "14px",
                      color: darkMode ? "white" : "black",
                    }}
                  >
                    Customer
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      fontWeight: "800",
                      fontSize: "14px",
                      color: darkMode ? "white" : "black",
                    }}
                  >
                    Date
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      fontWeight: "800",
                      fontSize: "14px",
                      color: darkMode ? "white" : "black",
                    }}
                  >
                    Amount
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      fontWeight: "800",
                      fontSize: "14px",
                      color: darkMode ? "white" : "black",
                    }}
                  >
                    Payment Method
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      fontWeight: "800",
                      fontSize: "14px",
                      color: darkMode ? "white" : "black",
                    }}
                  >
                    Status
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell
                    sx={{
                      fontSize: "12px",
                      color: darkMode ? "white" : "black",
                    }}
                  >
                    {row.id}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "12px",
                      color: darkMode ? "white" : "black",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <img
                        src={row.img}
                        className="productImage"
                        alt={row.product}
                      />
                      {row.product}
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "12px",
                      color: darkMode ? "white" : "black",
                    }}
                  >
                    {row.customer}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "12px",
                      color: darkMode ? "white" : "black",
                    }}
                  >
                    {row.date}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "12px",
                      color: darkMode ? "white" : "black",
                    }}
                  >
                    {row.amount}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "12px",
                      color: darkMode ? "white" : "black",
                    }}
                  >
                    {row.method}
                  </TableCell>
                  <TableCell>
                    {row.status === "Approved" ? (
                      <Typography
                        sx={{
                          backgroundColor: "lightgreen",
                          color: "darkgreen",
                          padding: "5px",
                          borderRadius: "5px",
                          fontSize: "10px",
                        }}
                      >
                        {row.status}
                      </Typography>
                    ) : (
                      <Typography
                        sx={{
                          backgroundColor: "yellow",
                          color: "goldenrod",
                          padding: "5px",
                          borderRadius: "5px",
                          fontSize: "10px",
                        }}
                      >
                        {row.status}
                      </Typography>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Fragment>
  );
}

export default TableList;
