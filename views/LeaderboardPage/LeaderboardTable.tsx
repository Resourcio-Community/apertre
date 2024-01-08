import { Avatar, Box, IconButton, Table, TableBody, TableCell, TableFooter, tableCellClasses, TableContainer, TableHead, TableRow, TablePagination } from '@mui/material';
import { PiLinkedinLogo, PiGitBranchDuotone } from 'react-icons/pi';
import { Contributor } from '../../models/leaderboard.model';
import { styled, useTheme } from '@mui/material/styles';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { modalState } from 'atoms/modalAtom';
import { selectedContributorState } from 'atoms/selectedContributorAtom';
import { FirstPage, KeyboardArrowLeft, KeyboardArrowRight, LastPage } from '@mui/icons-material'
import { useState } from 'react';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#0b0b0b',
    color: theme.palette.common.white,
    fontSize: 18,
    padding: '3rem',
    fontWeight: 'bold',
    letterSpacing: '1.6px',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    '& svg': {
      color: '#0a66c2',
    },
    '&:last-child svg': {
      color: '#9a6bea',
    },
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: 'white',
  '&:nth-of-type(odd)': {
    backgroundColor: '#fafdf6',
  },
  '&:last-child td, &:last-child th': {
    border: '0',
  },
}));

const FooterTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: 'rgba(10, 10, 10)',
  '&:last-child td, &:last-child th': {
    border: '0',
  },
}));




interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number,
  ) => void;
}

function TablePaginationActions({ count, page, rowsPerPage, onPageChange }: TablePaginationActionsProps) {
  const theme = useTheme();

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPage /> : <FirstPage />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPage /> : <LastPage />}
      </IconButton>
    </Box>
  );
}



export default function LeaderboardTable({ data, searchText }: { data: Contributor[], searchText: string }) {
  const [isModalOpen, setModalOpen] = useRecoilState(modalState);
  const [contributorData, setContributorData] = useRecoilState(selectedContributorState);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const emptyRows = Math.max(0, (1 + page) * rowsPerPage - data.length);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  return (
    <TableContainer sx={tableContainerStyle}>
      <Table stickyHeader aria-label="leaderboard table" sx={tableStyle}>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell align="center">Rank</StyledTableCell>
            <StyledTableCell align="center">User</StyledTableCell>
            <StyledTableCell align="center">Full Name</StyledTableCell>
            <StyledTableCell align="center">Total Points</StyledTableCell>
            <StyledTableCell align="center">Socials</StyledTableCell>
            <StyledTableCell align="center">View PRs</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {(searchText.trim() === '' ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : data).map((row) => (
            <StyledTableRow key={row.user_name}>
              <StyledTableCell style={{ fontWeight: 'bold' }} align="center">{row.rank}</StyledTableCell>
              <StyledTableCell align="center" style={{ display: 'flex', justifyContent: 'center' }}>
                <Link href={row.user_url} target='_blank'>
                  <Avatar src={row.avatar_url} />
                </Link>
              </StyledTableCell>
              <StyledTableCell align="center">{row.full_name}</StyledTableCell>
              <StyledTableCell align="center">{row.total_points}</StyledTableCell>
              <StyledTableCell align="center">
                <Link href={row.linkedIn} target="_blank">
                  <PiLinkedinLogo size={25} />
                </Link>
              </StyledTableCell>
              <StyledTableCell align="center">
                <PiGitBranchDuotone size={25} style={{ cursor: 'pointer' }} onClick={() => {
                  setModalOpen(true)
                  setContributorData(row)
                }} />
              </StyledTableCell>
            </StyledTableRow>
          ))}
          {emptyRows > 0 && (
            <StyledTableRow style={{ height: 30 * emptyRows }}>
              <StyledTableCell colSpan={6} />
            </StyledTableRow>
          )}
        </TableBody>
        <TableFooter>
          <FooterTableRow>
            <TablePagination
              sx={paginationStyle}
              rowsPerPageOptions={[10, 20]}
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </FooterTableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};


const tableContainerStyle = {
  borderRadius: 3,

  '@media (max-width: 780px)': {
    borderRadius: 2,
  }
}

const tableStyle = {
  '@media (max-width: 780px)': {

  }
}

const paginationStyle = {
  fontSize: 13,
  color: 'white',

  '& svg': {
    color: 'white'
  },

  '& .MuiTablePagination-selectLabel': {
    color: 'rgba(10, 10, 10)'
  },

  '& .MuiTablePagination-displayedRows': {
    fontSize: 13,
  },

  '& .MuiBox-root button': {
    '&:disabled': {
      '& svg': {
        color: 'rgba(128,128,128,0.8)'
      }
    }
  },

  '& .MuiBox-root button svg': {
    fontSize: 18,
    
    '&:hover': {
      background: 'rgba(var(--primary))',
      borderRadius: '50%',
    },
  }
}