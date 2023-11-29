import styled from 'styled-components';
import { media } from 'utils/media';
import AesthCard from 'components/AesthCard';

import carddata from './constants';

const ProjectsView = () => {
    return (
        <Div>

            <Box>


                {carddata.map((data) =>
                    <AesthCard
                        title={data.title}
                        desc={data.desc}
                        mentor={data.mentor}
                        buttonhref={data.buttonhref}
                        imageUrl={data.imageUrl ? data.imageUrl : ''}
                    />)}


            </Box>

        </Div>
    )
}

const Div = styled.div`
position:relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: auto;
  font-size: 4rem;
  flex-wrap:wrap;
  background-color:#6f6d72;
  ${media('<=tablet')} {
    font-size: 3rem;
  }

`;

const Box = styled.div`

display: -webkit-box;
display: -ms-flexbox;
display: flex;
justify-content:space-around;
// -webkit-box-align: start;
// -ms-flex-align: start;
align-items: start;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
margin:4rem;
width:100%;

row-gap:5rem;

`


export default ProjectsView;