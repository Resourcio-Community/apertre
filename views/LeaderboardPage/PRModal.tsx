import Link from 'next/link'
import { useRecoilState, useRecoilValue } from 'recoil'
import { modalState } from 'atoms/modalAtom'
import { selectedContributorState } from 'atoms/selectedContributorAtom'
import { Contributor } from 'models/leaderboard.model'
import { Avatar, Backdrop, Box, Fade, List, ListItem, Modal, Typography } from '@mui/material'
import { FiGithub } from 'react-icons/fi';
import styled from 'styled-components'

interface PrProps {
    link: string;
    difficulty: string;
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    border: 'none',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70vw',
    bgcolor: 'rgba(223, 229, 226)',
    boxShadow: 24,
    p: 5,
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
                        <List>

                            {contributorData.pr_urls.map((pr, idx) => (
                                <EachPR key={idx} link={pr.url} difficulty={pr.difficulty} />
                            ))}
                        </List>
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
                <Link href={link} target='_blank' rel='norefferer'>{link}</Link>
                <Difficulty style={{ color: textColor, background: bgColor }}>{difficulty}</Difficulty>
            </PRContainer>
        </ListItem>
    )
}

function getColor(difficulty: string) {
    let result = { bgColor: "", textColor: "" };

    const bgValues = {
        easy: "rgba(14, 138, 22, 0.5)",
        medium: "rgba(162, 238, 239, 0.5)",
        hard: "rgba(217, 63, 11, 0.6)",
    };
    const textColor = {
        easy: "rgba(14, 138, 22, 1)",
        medium: "rgba(162, 238, 239, 1)",
        hard: "rgba(217, 63, 11, 1)",
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



const HeaderConatiner = styled(Box)`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 1rem;
`

const ContributorName = styled(Typography)`
    color: black;
    font-size: 1.8rem;
`

const PRContainer = styled(Box)`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    & a {
        font-size: 1.5rem;
    }
`

const Difficulty = styled(Typography)`
    padding: 0.4rem 0.8rem;
    border-radius: 0.6rem;
    font-size: 1.2rem;
    border: 1px solid #565656;
`