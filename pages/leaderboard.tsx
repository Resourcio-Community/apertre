import type { NextPage } from 'next';
import Head from 'next/head';
import { ChangeEvent, useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import { useRecoilValue } from 'recoil';
import { modalState } from '../atoms/modalAtom';

// import Table from "../components/Table";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import MetaTags from "../components/MetaTags";

import data from '../leaderBoard.json';
import PRModal from '../views/LeaderboardPage/PRModal';
import TopThree from '../views/LeaderboardPage/TopThee';
import { Contributor } from '../models/leaderboard.model';
import LeaderboardTable from 'views/LeaderboardPage/LeaderboardTable';
import { Box, Paper } from '@mui/material';

// import { generateConfetti } from '../utils/generateConfetti';

export default function LeaderboardPage() {
  // const isModalOpen = useRecoilValue(modalState);

  const [tableData, setTableData] = useState(data.leaderboardData.slice(3, data.leaderboardData.length));
  const [searchText, setSearchText] = useState('');
  const [searchedData, setSearchedData] = useState<Contributor[]>();

  const handleSearch = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setSearchText(e.target.value);
    const fuse = new Fuse(tableData as Contributor[], {
      keys: ['user_name', 'full_name'],
      threshold: 0.2,
    });
    const result = fuse.search(e.target.value).map((item) => item.item);
    setSearchedData(result);
  };

  // useEffect(() => {
  //   generateConfetti();
  // }, []);

  return (
    <>
      {/* <Head> */}
      {/* <title>Leaderboard | JWoC 2k23</title> */}
      {/* <link rel="shortcut icon" type="image/png" href="https://jwoc.tech/assets/img/favicon.png" /> */}
      {/* <MetaTags /> */}
      {/* </Head> */}

      {/* <section className="relative mx-auto mt-32 mb-12">
        <div className="px-5 lg:px-0">
          <div className="relative my-10 mx-auto flex justify-center items-center flex-col text-center lg:mx-8 sm:mx-2">
            <h2 className="my-1.5 pt-0 px-2 pb-2 font-['Blanka'] text-[2rem] font-bold text-lightblack tracking-[4px] rounded-lg bg-[rgba(255,255,255,0.8)] shadow-[0_0_4px_rgba(50,69,107,0.2)] md:text-[1rem]">
              JWoC 2K23 Leaderboard
            </h2>
            <p className="my-4 font-codefont text-2xl font-medium text-lightblack tracking-wide">Check your rank here!</p>
            <p className="my-2 font-codefont text-lg font-medium text-lightblack tracking-wide">
              Last updated on:
              <span className="mx-0.5 font-curlfont font-bold text-primarydark italic">
                {new Date(data.lastUpdated).toLocaleString('en-IN', {
                  dateStyle: 'full',
                  timeStyle: 'full',
                })}
              </span>
            </p>
          </div>

          <div className="relative my-10 px-12 flex justify-center items-center gap-8 lg:px-8 sm:px-2 md:flex-col">
            <TopCard userData={data.leaderboardData[0]} />
            <TopCard userData={data.leaderboardData[1]} />
            <TopCard userData={data.leaderboardData[2]} />
          </div>

          <div className="my-12 mx-12 lg:mx-8 sm:mx-2">
            <input
              type="search"
              className="h-14 w-full px-3 py-3 font-codefont text-lg text-lightblack font-medium shadow focus:outline-none border-[3px] border-darkgrey tracking-wider rounded-lg"
              placeholder="Search for your Name, GitHub username or college"
              value={searchText}
              onChange={handleSearch}
            />
          </div>

          </div>
        </section> */}
      <Box sx={{ m: 10 }}>
        <LeaderboardTable data={searchText ? (searchedData as Contributor[]) : tableData} />
      </Box>
      {/* {isModalOpen && <PRModal />} */}
    </>
  );
}
