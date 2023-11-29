import styled from "styled-components";
import { media } from 'utils/media';
interface CardProps {
    title: string;
    desc: string;
    imageUrl?: string;
    mentor: string;
    buttonhref: string;
}


export default function AesthCard({ title, desc, mentor, buttonhref, imageUrl }: CardProps) {

    return (
        <Btnbox>
            <BtnLink>
                <Itembg className="item_bg" />
                <BannerImg />


                <Title>
                    {title}
                </Title>
                <Desc>
                    {desc}
                </Desc>
                
                <NameBox>
                    Mentor :  
                    <MentorName>
                        {mentor}
                    </MentorName>
                </NameBox>
            </BtnLink>
        </Btnbox>
    )

}



const Btnbox = styled.div`
-ms-flex-preferred-size: calc(34% - 30px);
flex-basis: calc(34% - 30px);
// margin: 0 15px 30px;
margin:1.5rem;
overflow: hidden;
width:270px;
border-radius: 28px;

${media('<=tablet')} {
  flex-basis: calc(50% - 30px);
  margin:0.9rem;
  
}
${media('<=phone')} {
  margin:1rem;
  min-width : 275px;

}
&:nth-child(2n) .item_bg {
  background-color: #3ecd5e;
}
&:nth-child(3n) .item_bg {
  background-color: #e44002;
}
&:nth-child(4n) .item_bg {
  background-color: #952aff;
}
&:nth-child(5n) .item_bg {
  background-color: #cd3e94;
}
&:nth-child(6n) .item_bg {
  background-color: #4c49ea;
}


`
const BtnLink = styled.div`
display: block;
padding: 30px 20px;
background-color: #121212;

overflow: hidden;

position: relative;

&:hover {
    text-decoration: none;
    color: #FFF;
}
&:hover .item_bg {
    -webkit-transform: scale(10);
    transform: scale(10);
}
`


const BannerImg = styled.img`
background-image: url(https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
background-position: center;
background-size: cover;
height: 300px;
width: 100%;
border-radius: 19px;
z-index:9;
position:relative;
`



const NameBox = styled.div`
font-size: 18px;
color: #FFF;

z-index: 2;
position: relative;
`

const MentorName = styled.span`
font-weight: normal;
color: #f9b234;

-webkit-transition: color .5s ease;
-o-transition: color .5s ease;
transition: color .5s ease
`

const Itembg = styled.div`
height: 150px;
width: 150px;
background-color: #f9b234;

z-index: 1;
position: absolute;
top: -30px;
right: -25px;

border-radius: 50%;

-webkit-transition: all .5s ease;
transition: all .5s ease;
`

const Title = styled.div`
min-height: 87px;
margin:0 auto;

overflow: hidden;

font-weight: bold;
font-size: 30px;
color: #FFF;

z-index: 2;
position: relative;

${media(`<=tablet`)}{

  font-size:24px;

}
`

const Desc=styled.div`
const Btntitle = styled.div
min-height: 87px;
margin: 0 0 25px;

overflow: hidden;

font-weight: light;
font-size: 18px;
color: #FFF;

z-index: 2;
position: relative;
${media(`<=tablet`)}{

  font-size:15px;

}
`


/*
.ag-format-container {
  width: 1142px;
  margin: 0 auto;
}


body {
  background-color: #000;
}
.ag-courses_box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

  padding: 50px 0;
}
.ag-courses_item {
  -ms-flex-preferred-size: calc(33.33333% - 30px);
  flex-basis: calc(33.33333% - 30px);

  margin: 0 15px 30px;

  overflow: hidden;

  border-radius: 28px;
}
.ag-courses-item_link {
  display: block;
  padding: 30px 20px;
  background-color: #121212;

  overflow: hidden;

  position: relative;
}
.ag-courses-item_link:hover,
.ag-courses-item_link:hover .ag-courses-item_date {
  text-decoration: none;
  color: #FFF;
}
.ag-courses-item_link:hover .ag-courses-item_bg {
  -webkit-transform: scale(10);
  -ms-transform: scale(10);
  transform: scale(10);
}
.ag-courses-item_title {
  min-height: 87px;
  margin: 0 0 25px;

  overflow: hidden;

  font-weight: bold;
  font-size: 30px;
  color: #FFF;

  z-index: 2;
  position: relative;
}
.ag-courses-item_date-box {
  font-size: 18px;
  color: #FFF;

  z-index: 2;
  position: relative;
}
.ag-courses-item_date {
  font-weight: bold;
  color: #f9b234;

  -webkit-transition: color .5s ease;
  -o-transition: color .5s ease;
  transition: color .5s ease
}
.ag-courses-item_bg {
  height: 128px;
  width: 128px;
  background-color: #f9b234;

  z-index: 1;
  position: absolute;
  top: -75px;
  right: -75px;

  border-radius: 50%;

  -webkit-transition: all .5s ease;
  -o-transition: all .5s ease;
  transition: all .5s ease;
}
.ag-courses_item:nth-child(2n) .ag-courses-item_bg {
  background-color: #3ecd5e;
}
.ag-courses_item:nth-child(3n) .ag-courses-item_bg {
  background-color: #e44002;
}
.ag-courses_item:nth-child(4n) .ag-courses-item_bg {
  background-color: #952aff;
}
.ag-courses_item:nth-child(5n) .ag-courses-item_bg {
  background-color: #cd3e94;
}
.ag-courses_item:nth-child(6n) .ag-courses-item_bg {
  background-color: #4c49ea;
}



@media only screen and (max-width: 979px) {
  .ag-courses_item {
    -ms-flex-preferred-size: calc(50% - 30px);
    flex-basis: calc(50% - 30px);
  }
  .ag-courses-item_title {
    font-size: 24px;
  }
}

@media only screen and (max-width: 767px) {
  .ag-format-container {
    width: 96%;
  }

}
@media only screen and (max-width: 639px) {
  .ag-courses_item {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
  }
  .ag-courses-item_title {
    min-height: 72px;
    line-height: 1;

    font-size: 24px;
  }
  .ag-courses-item_link {
    padding: 22px 40px;
  }
  .ag-courses-item_date-box {
    font-size: 16px;
  }
}

*/


