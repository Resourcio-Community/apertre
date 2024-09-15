import { Box } from '@mui/material';
import Fuse from 'fuse.js';
import NextImage from 'next/image'
import { ChangeEvent, useState } from 'react';
import { RiUserSearchLine } from "react-icons/ri";
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { media } from 'utils/media';
import LeaderboardTable from 'views/LeaderboardPage/LeaderboardTable';
import TopThree from 'views/LeaderboardPage/TopThee';
import { modalState } from '../atoms/modalAtom';
import data from '../leaderBoard1.0.json';
import { Contributor } from '../models/leaderboard.model';
import PRModal from '../views/LeaderboardPage/PRModal';


export default function LeaderboardPage() {
  const isModalOpen = useRecoilValue(modalState);

  const tableData: Contributor[] = data.leaderboardData.slice(3, data.leaderboardData.length);

  const [searchText, setSearchText] = useState<string>('');
  const [searchedData, setSearchedData] = useState<Contributor[]>();

  const handleSearch = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setSearchText(e.target.value);
    const fuse = new Fuse(tableData as Contributor[], {
      keys: ['full_name'],
      threshold: 0.1,
    });
    const result = fuse.search(e.target.value).map((item) => item.item);
    setSearchedData(result);
  };


  return (
    <Stack>
      <Header>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '0 2rem',
          background: 'rgba(0,0,0,0.4)',
          borderRadius: '4rem',
          gap: '0.5rem',
          backdropFilter: 'blur(15px)',
          boxShadow: '0 0 200px 15px #48abe0'
        }}>
          <CustomImage src='/static/assets/logo.svg' alt='apertre' width={130} height={90} />
          <Title> &apos;24 LEADERBOARD</Title>
        </Box>
      </Header>
      {data.leaderboardData.length === 0
        ? <NotPublished>Leaderboard isn&apos;t released</NotPublished> :
        <>
          <Update>
            LAST UPDATE :&nbsp;
            <UpdateDate>
              {new Date(data.lastUpdated).toLocaleString('en-US', {
                dateStyle: 'full',
                timeStyle: 'full',
              })}
            </UpdateDate>
          </Update>

          <TopThree data={data.leaderboardData.slice(0, 3)} />

          <StyledBox>
            <Box sx={boxStyle}>
              <RiUserSearchLine size={15} style={{ marginRight: '0.8rem' }} />
              <SearchInput
                type="search"
                placeholder='Check your rank'
                value={searchText}
                onChange={handleSearch}
              />
            </Box>
            <LeaderboardTable data={searchText ? (searchedData as Contributor[]) : tableData} searchText={searchText} />
          </StyledBox>
        </>
      }

      {isModalOpen && <PRModal />}
    </Stack>
  );
}


const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${media('<=tablet')} {

  }
`;

const Header = styled(Box)`
  display: flex; 
  justify-content: center; 
  margin-top: 3rem;
`
const NotPublished = styled.span`
  text-align: center;
  font-size: 2.5rem;
  padding: 15rem 0;

  ${media('<=tablet')} {
    font-size: 1.8rem;
  }
`

const CustomImage = styled(NextImage)`
  ${media('<=tablet')} {
    width: 80px;
    height: 50px;
  }
`

const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;

  ${media('<=tablet')} {
    font-size: 1.8rem;
  }
`;

const Update = styled(Box)`
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;

  ${media('<=tablet')} {
    font-size: 1rem;
    letter-spacing: -0.01em;
  }
`

const UpdateDate = styled.span`
  color: white;
  font-size: 1.5rem;

  ${media('<=tablet')} {
    font-size: 1rem;
  }
`

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 5rem 10rem 10rem 10rem;

  ${media('<=tablet')} {
    margin: 0 2rem 8rem 2rem;
  }
`

const SearchInput = styled.input`
  padding: 0.8rem;
  border: none;
  border-bottom: 1px solid rgba(var(--yellow));
  outline: none;
  width: 22%;
  background: none;
  color: rgba(var(--text));
  font-size: 1.6rem;

  ${media('<=tablet')} {
    width: 50%;
    font-size: 1.4rem;
  }
`;

const boxStyle = {
  padding: '0 0.5rem',
  fontSize: '1.5rem',
  display: 'flex',
  alignItems: 'center'
}