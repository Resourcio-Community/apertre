import Link from 'next/link'
import { useRecoilState, useRecoilValue } from 'recoil'
import { modalState } from 'atoms/modalAtom'
import { selectedContributorState } from 'atoms/selectedContributorAtom'
import { Contributor } from 'models/leaderboard.model'
import { Avatar, Backdrop, Box, Fade, List, ListItem, Modal } from '@mui/material'
import { FiGithub } from 'react-icons/fi';
import styled from 'styled-components'
import { media } from 'utils/media'

interface PrProps {
    link: string;
    difficulty: string;
}


export default function PRMOdal() {
    const [open, setModalOpen] = useRecoilState(modalState)
    const contributorData: Contributor = useRecoilValue(selectedContributorState)

    return (
        <Box>
            <Modal
                open={open}
                onClose={() => setModalOpen(false)}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 400
                    }
                }}
            >
                <Fade in={open} style={{ borderRadius: '1rem', outline: 'none' }}>
                    <Box sx={style}>
                        <HeaderConatiner>
                            <Avatar src={contributorData.avatar_url} />
                            <ContributorName>{contributorData.full_name}</ContributorName>
                        </HeaderConatiner>
                        <PRBox>
                            <List>
                                {contributorData.pr_urls.map((pr, idx) => (
                                    <EachPR key={idx} link={pr.url} difficulty={pr.difficulty} />
                                ))}
                            </List>
                        </PRBox>
                    </Box>
                </Fade>
            </Modal>
        </Box>
    )
}


function EachPR({ link, difficulty }: PrProps) {
    const { bgColor, textColor } = getColor(difficulty);

    return (
        <ListItem>
            <PRContainer>
                <FiGithub style={{ color: 'black', fontSize: '1.4rem' }} />
                <CustomLink href={link} target='_blank' rel='norefferer'>{link}</CustomLink>
                <Difficulty style={{ color: textColor, background: bgColor }}>{difficulty}</Difficulty>
            </PRContainer>
        </ListItem>
    )
}

function getColor(difficulty: string) {
    let result = { bgColor: "", textColor: "" };

    const bgValues = {
        easy: "rgba(14, 138, 22, 0.7)",
        medium: "rgba(162, 238, 239, 1)",
        hard: "rgba(217, 63, 11, 0.7)",
    };
    const textColor = {
        easy: "rgba(20,20,20,0.8)",
        medium: "rgba(20,20,20,0.8)",
        hard: "rgba(20,20,20,0.8)",
    };

    if (difficulty === "Easy") {
        result.bgColor = bgValues.easy;
        result.textColor = textColor.easy;
    } else if (difficulty === "Medium") {
        result.bgColor = bgValues.medium;
        result.textColor = textColor.medium;
    } else if (difficulty === "Hard") {
        result.bgColor = bgValues.hard;
        result.textColor = textColor.hard;
    }

    return result;
}


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    border: '2px solid rgba(var(--yellow))',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70vw',
    bgcolor: 'rgba(223, 229, 226, 0.98)',
    boxShadow: 30,
    p: 5,

    "@media (max-width: 780px)": {
        width: '80vw',
        p: 3,
    }
}


const HeaderConatiner = styled(Box)`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 1rem;

    ${media('<=tablet')} {
        gap: 1rem;
    }
`

const PRBox = styled(Box)`
    margin-top: 3.5rem;
    max-height: 43vh;
    overflow-y: scroll;
    scroll-behavior: smooth;
    width: 100%;

    ${media('<=tablet')} {
        margin-top: 2rem;
        max-height: 40vh;
    }
`

const ContributorName = styled.span`
    color: black;
    font-size: 1.8rem;

    ${media('<=tablet')} {
        font-size: 1.4rem;
    }
`

const PRContainer = styled(Box)`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    
    ${media('<=tablet')} {
        gap: 1rem;
        min-width: 150%;
    }
`

const CustomLink = styled(Link)`
    font-size: 1.5rem;  

    ${media('<=tablet')} {
        font-size: 0.8rem;
    }
`

const Difficulty = styled.span`
    padding: 0.5rem 1rem;
    border-radius: 0.6rem;
    font-size: 1.1rem;
    font-weight: bold;

    ${media('<=tablet')} {
        font-size: 0.8rem;
        padding: 0.25rem 0.6rem;
        border-radius: 0.4rem;
    }
`