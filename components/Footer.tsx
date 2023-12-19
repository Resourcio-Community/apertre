import NextImage from 'next/image';
import NextLink from 'next/link';
import { BsFacebook, BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { FaXTwitter } from 'react-icons/fa6';
import styled from 'styled-components';
import Container from 'components/Container';
import { media } from 'utils/media';


type SingleFooterListItem = { title: string; logo: any; href: string };
type FooterListItems = SingleFooterListItem[];
type SingleFooterList = { title: string; image: string; items: FooterListItems };
type FooterItems = SingleFooterList[];
type SingleFooterLeftItem = { title: string; href: string };
type FooterLeftItems = SingleFooterLeftItem[];

const footerItems: FooterItems = [
  {
    title: 'GDSC AOT',
    image: '/static/assets/gdsc_aot.svg',
    items: [
      { title: 'Whatsapp', logo: <BsWhatsapp />, href: 'https://chat.whatsapp.com/EQPRJZxqOBL4nHEdMyUcF1' },
      { title: 'LinkedIn', logo: <BsLinkedin />, href: 'https://www.linkedin.com/company/gdsc-aot/' },
      { title: 'Facebook', logo: <BsFacebook />, href: 'https://www.facebook.com/profile.php?id=61550853321668' },
      { title: 'Instagram', logo: <BsInstagram />, href: 'https://instagram.com/gdscaot' },
      { title: 'Twitter', logo: <FaXTwitter />, href: 'https://twitter.com/gdsc_aot' },
    ],
  },
  {
    title: 'Resourcio Commnity',
    image: '/static/assets/resourcio.svg',
    items: [
      { title: 'Whatsapp', logo: <BsWhatsapp />, href: 'https://chat.whatsapp.com/Km6AX9di04ZLIpFEcXTiNK' },
      { title: 'LinkedIn', logo: <BsLinkedin />, href: 'https://www.linkedin.com/company/resourcio-community2022/' },
      { title: 'Facebook', logo: <BsFacebook />, href: 'https://www.facebook.com/profile.php?id=100088472180461' },
      { title: 'Instagram', logo: <BsInstagram />, href: 'https://www.instagram.com/resourciocommunity/' },
      { title: 'Twitter', logo: <FaXTwitter />, href: 'https://twitter.com/ResourcioC' },
    ],
  },
];

const footerLeftItems: FooterLeftItems = [
  // {
  //   title: 'Privacy',
  //   href: '',
  // },
  {
    title: 'Code Of Conduct',
    href: 'https://drive.google.com/file/d/135ngnvae6TRZKIO1brrDBVjVC8jzhp63/view?usp=drive_link',
  },
  {
    title: 'Event Brochure',
    href: 'https://drive.google.com/file/d/1wEhr_ax5G-BE19mBr1hvx4dwnwv8rduu/view?usp=sharing',
  }
];

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <ListContainer>
          <Info>
            <Heading>Legal</Heading>
              {footerLeftItems.map((singleItem) => (
                <ListLeftItem key={singleItem.title} {...singleItem} />
              ))}
          </Info>

          <Div>
            {footerItems.map((singleItem) => (
              <FooterList key={singleItem.title} {...singleItem} />
            ))}
          </Div>
        </ListContainer>
        <BottomBar>
          <Copyright>
            &copy; {new Date().getFullYear()} All Rights Reserved
            <A href="https://www.linkedin.com/showcase/apertre" target="_blank">
              &nbsp;Apertre'24
            </A>
          </Copyright>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
}

function FooterList({ title, image, items }: SingleFooterList) {
  return (
    <ListWrapper>
      <Image src={image} alt="socials" width={200} height={100} />
      <Socials>
        {items.map((singleItem) => (
          <ListItem key={singleItem.title} {...singleItem} />
        ))}
      </Socials>
    </ListWrapper>
  );
}

function ListItem({ title, logo, href }: SingleFooterListItem) {
  return (
    <ListItemWrapper>
      <NextLink href={href} target="_blank">
        <Span>{logo}</Span>
      </NextLink>
    </ListItemWrapper>
  );
}

function ListLeftItem({ title, href }: SingleFooterLeftItem) {
  return (
    <InfoWrapper>
      <A href={href} target="_blank">
        {title}
      </A>
    </InfoWrapper>
  );
}

const FooterWrapper = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
  padding: 8rem 0 4rem 0;
  background: #040301;
  color: rgb(var(--textSecondary));
  border-top: 2px solid rgb(var(--yellow));
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  ${media('<=tablet')} {
    flex-wrap: wrap-reverse;
  }
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
  margin-right: 5rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${media('<=tablet')} {
    flex: 0 40%;
    margin-right: 1.5rem;
  }

  ${media('<=phone')} {
    flex: 0 100%;
    margin-right: 0rem;
  }
`;

const ListItemWrapper = styled.p`
  display: flex;
  font-size: 1.6rem;

  a {
    text-decoration: none;
    color: rgba(var(--textSecondary), 0.75);
  }
`;

const Copyright = styled.p`
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 1.4rem;
  margin-top: 0.5rem;

  ${media('<=tablet')} {
    font-size: 1.2rem;
  }
`;

const BottomBar = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;

const Image = styled(NextImage)`
  width: 280px;
  height: 120px;

  ${media('<=tablet')} {
    width: 140px;
    height: 60px;
  }
`;

const Span = styled.span`
  font-size: 2.8rem;
  z-index: 999;

  ${media('<=tablet')} {
    font-size: 2.2rem;
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 2rem;

  ${media('<=tablet')} {
    gap: 1rem;
  }
`;

const A = styled.a`
  text-decoration: none;
  color: hex(var(--yellow));

  &:hover {
    color: rgb(var(--primary));
  }
`;

const Heading = styled.div`
  font-size: 2rem;
`;

const Info = styled.div`
  font-size: 1.6rem;

  ${media('<=tablet')} {
    display: flex;
    flex-direction: column;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0 0 0;

  ${media('<=tablet')} {
    flex: 0 40%;
    margin-right: 1.5rem;
  }

  ${media('<=phone')} {
    flex: 0 100%;
    margin-right: 0rem;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  
  ${media('<=tablet')} {
    width: 100%;
  }
`
