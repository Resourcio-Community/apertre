import { Avatar, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, } from '@mui/material';
import { PiLinkedinLogo, PiGitBranchDuotone } from 'react-icons/pi';
import { Contributor } from '../../models/leaderboard.model';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { modalState } from 'atoms/modalAtom';
import { selectedContributorState } from 'atoms/selectedContributorAtom';


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
  // backdropFilter: blur(10px),
  '&:nth-of-type(odd)': {
    backgroundColor: '#fafdf6',
  },
  '&:last-child td, &:last-child th': {
    border: '0',
  },
}));


const LeaderboardTable = ({ data }: { data: Contributor[] }) => {
  const [isModalOpen, setModalOpen] = useRecoilState(modalState)
  const [contributorData, setContributorData] = useRecoilState(selectedContributorState)


  return (
    <TableContainer sx={{ borderRadius: 3 }}>
      <Table sx={{ minWidth: 700 }} aria-label="leaderboard table">
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
          {data.map((row) => (
            <StyledTableRow key={row.user_name}>
              <StyledTableCell align="center">{row.rank}</StyledTableCell>
              <StyledTableCell align="center" style={{ justifyContent: 'center', display: 'flex' }}>
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
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LeaderboardTable;
