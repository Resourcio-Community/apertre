import NextImage from 'next/image'
import { useRecoilState, useRecoilValue } from 'recoil'
import { modalState } from 'atoms/modalAtom'
import { selectedContributorState } from 'atoms/selectedContributorAtom'
import { Contributor } from 'models/leaderboard.model'


export default function PRMOdal() {
    const [val, setModalOpen] = useRecoilState(modalState)
    const contributorData: Contributor = useRecoilValue(selectedContributorState)

    return (
        <div></div>
    )
}