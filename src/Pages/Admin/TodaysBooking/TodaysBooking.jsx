import "./TodaysBooking.scss";

// Component
import Navbar from "../../../Components/Admin/Navbar/Navbar";

// Images
import booking from "../../../Components/Admin/Sidebar/Assets/calendar.png";

// Data
import { data } from "./data";

// MUI
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Pagination,
} from "@mui/material";

const TodaysBooking = () => {
  return (
    <>
      <Navbar title="Today's Booking" image={booking} />
      <section className="booking">
        <TableContainer component={Paper} className="table">
          <Table aria-label="simple table">
            <TableHead className="table-head">
              <TableRow>
                <TableCell align="center">Id</TableCell>
                <TableCell align="center">Customer</TableCell>
                <TableCell align="center">Theater</TableCell>
                <TableCell align="center">Slot</TableCell>
                <TableCell align="center">Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="table-body">
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="center">{row.id}</TableCell>
                  <TableCell align="center">{row.Customer}</TableCell>
                  <TableCell align="center">{row.Theater}</TableCell>
                  <TableCell align="center">{row.Slot}</TableCell>
                  <TableCell align="center">{row.Amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Pagination
          count={2}
          size="small"
          color="standard"
          className="pagination"
        />
      </section>
    </>
  );
};

export default TodaysBooking;
