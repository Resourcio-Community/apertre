import Image from 'next/image'
import Link from 'next/link'
import { Box } from "@mui/material";
import { modalState } from "atoms/modalAtom";
import { selectedContributorState } from "atoms/selectedContributorAtom";
import { Contributor } from "models/leaderboard.model";
import { PiLinkedinLogo, PiGitBranchDuotone, PiGithubLogoLight } from 'react-icons/pi';
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { media } from "utils/media";


const CustomBox = styled(Box)`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 6rem;
    gap: 14rem;

    ${media('<=tablet')} {
        gap: 4rem;
        padding: 4rem;
    }
`

const Wrapper = styled.div<{ isFirst?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  box-shadow: ${(p) => (p.isFirst ? 'var(--shadow-lg)' : 'var(--shadow-md)')};
  transform: ${(p) => (p.isFirst ? 'scale(1.25)' : 'scale(1.0)')};
  text-align: center;

  ${media('<=tablet')} {
    gap: 0.8rem;
    transform: ${(p) => (p.isFirst ? 'scale(1.2)' : 'scale(1.0)')};
  }
`;

const CustomAvatar = styled(Image)`
  border-radius: 50%;
  border: 3px solid rgb(var(--yellow));
  width: 18rem;
  height: 18rem;

  ${media('<=tablet')} {
    border: 2px solid rgb(var(--yellow));
    width: 9rem;
    height: 9rem;
  }
`

const ContributorName = styled.span`
  font-size: 2rem;

  ${media('<=tablet')} {
    font-size: 1rem;
  }
`

const LinkBox = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  font-size: 2.5rem;

  ${media('<=tablet')} {
    font-size: 2rem;
  }
`
const NumberBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-left: 0.5rem;

  ${media('<=tablet')} {
    flex-direction: column;
    gap: 0.4rem;
    margin-left: 0;
  }
`

const NumberData = styled.span`
  font-size: 1.6rem;

  ${media('<=tablet')} {
    font-size: 1rem;
  }
`


export default function TopThree({ data }: { data: Contributor[] }) {
  return (
    <CustomBox>
      <TopCard data={data[1]} />
      <TopCard data={data[0]} isFirst />
      <TopCard data={data[2]} />
    </CustomBox>
  )
}

function TopCard({ data, isFirst }: { data: Contributor, isFirst?: boolean }) {
  const [isModalOpen, setModalOpen] = useRecoilState(modalState)
  const [contributorData, setContributorData] = useRecoilState(selectedContributorState)

  return (
    <Wrapper isFirst={isFirst}>
      <CustomAvatar src={data.avatar_url} alt='top-three' width={120} height={120} />
      <NumberBox>
        <ContributorName>{data.full_name}</ContributorName>
        <NumberData style={{color: 'yellow'}}>{data.total_points}</NumberData>
      </NumberBox>
      <LinkBox>
        <Link href={data.user_url} target='_blank' rel='norefferer'><PiGithubLogoLight /></Link>
        <Link href={data.linkedIn} target='_blank' rel='norefferer'><PiLinkedinLogo style={{ color: '#0a66c2' }} /></Link>
        <PiGitBranchDuotone style={{ cursor: 'pointer', color: '#8a6beb' }} onClick={() => {
          setModalOpen(true)
          setContributorData(data)
        }} />
      </LinkBox>
    </Wrapper>
  )
}