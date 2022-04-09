import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const PlacesTable = ({ places }) => {
  const columns = Object.keys(places[0]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns
              .filter((name) => name !== 'objectid')
              .map((columnName, index) =>
                !index ? (
                  <TableCell key={columnName}>
                    <b>{columnName}</b>
                  </TableCell>
                ) : (
                  <TableCell key={columnName} align="right">
                    <b>{columnName}</b>
                  </TableCell>
                ),
              )}
          </TableRow>
        </TableHead>
        <TableBody>
          {places.map((row) => (
            <TableRow key={row.objectid} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              {Object.entries(row)
                .filter(([key]) => key !== 'objectid')
                .map(([key, val], index) => {
                  return !index ? (
                    <TableCell key={`${row.objectid}-${key}`} component="th" scope="row">
                      {val ? val : '-'}
                    </TableCell>
                  ) : (
                    <TableCell key={`${row.objectid}-${key}`} align="right">
                      {val ? val : '-'}
                    </TableCell>
                  );
                })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PlacesTable;
