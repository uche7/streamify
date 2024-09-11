import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import TextField from "@mui/material/TextField";
import { dashboardData } from "./db";
import { Column, DataRow } from "./helper";
import { formatDate } from "@/utils/format-date";

const columns: readonly Column[] = [
  { id: "songName", label: "Song Name", minWidth: 170 },
  { id: "artist", label: "Artist", minWidth: 170 },
  {
    id: "dateStreamed",
    label: "Date Streamed",
    minWidth: 170,
    align: "right",
  },
  {
    id: "streamCount",
    label: "Stream Count",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  { id: "userId", label: "User ID", minWidth: 170, align: "right" },
];

/** Recent Streams Table */
const RecentStreamsTable: React.FC = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [order, setOrder] = React.useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = React.useState<keyof DataRow>("dateStreamed");
  const [filter, setFilter] = React.useState<string>("");

  // Sorting function
  const handleRequestSort = (property: keyof DataRow) => {
    const isAscending = orderBy === property && order === "asc";
    setOrder(isAscending ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  // Filter the rows
  const filteredRows = dashboardData.recentStreams30Days.filter(
    (row: DataRow) =>
      row.songName.toLowerCase().includes(filter.toLowerCase()) ||
      row.artist.toLowerCase().includes(filter.toLowerCase())
  );

  // Sort the rows
  const sortedRows = filteredRows.sort((a, b) => {
    if (a[orderBy] < b[orderBy]) {
      return order === "asc" ? -1 : 1;
    }
    if (a[orderBy] > b[orderBy]) {
      return order === "asc" ? 1 : -1;
    }
    return 0;
  });

  return (
    <Paper
      className="bg-[#80808080] p-2"
      sx={{ width: "100%", overflow: "hidden" }}
    >
      <TextField
        label="Filter by Song or Artist"
        variant="outlined"
        fullWidth
        margin="normal"
        value={filter}
        onChange={handleFilterChange}
      />
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    backgroundColor: "#09090b",
                    color: "#cbd5e1",
                  }}
                >
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={orderBy === column.id ? order : "asc"}
                    onClick={() => handleRequestSort(column.id)}
                    style={{ color: "#cbd5e1" }}
                  >
                    {column.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {sortedRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: DataRow) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.userId}>
                  {columns.map((column) => {
                    const value = row[column.id];

                    return (
                      <TableCell
                        className="text-[#cbd5e1]"
                        key={column.id}
                        align={column.align}
                      >
                        {/* Check if the column is 'dateStreamed', then format the date */}
                        {column.id === "dateStreamed" &&
                        typeof value === "string"
                          ? formatDate(value) // Apply formatDate function
                          : column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        className="text-[#cbd5e1]"
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default RecentStreamsTable;
