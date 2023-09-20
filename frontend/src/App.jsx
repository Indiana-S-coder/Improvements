import WhatsAppImage2023091Image from './assets/images/main_WhatsApp_Image_2023_09_15_at_11_30_2.png';
import Image6Image from './assets/images/main_image_6.png';
import Image13Image from './assets/images/main_image_13.png';
import Image5Image from './assets/images/main_image_5.png';
import Image4Image from './assets/images/main_image_4.png';
import Image2Image from './assets/images/main_image_2.png';
import { styled } from '@mui/material/styles';
import Navbar from './components/Navbar';
import InputField from './components/InputField';
import Footer from './components/Footer/Footer';
import { animated, useSpring, easings } from 'react-spring';


const Main1 = animated(
  styled('div')({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    borderRadius: `0px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `column`,
    height: `3440px`,
    width: '100%',
    justifyContent: `flex-start`,
    alignItems: `center`,
    padding: `0px`,
    boxSizing: `border-box`,
    overflow: `hidden`,
  })
);

const Frame = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `680px`,
  width: `1440px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Navbar1 = styled(Navbar)(({ theme }) => ({
  width: `1440px`,
  height: `80px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
}));

const HeroSection = styled('div')({
  backgroundColor: `rgba(123, 150, 145, 1)`,
  borderRadius: `0px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `1440px`,
  height: `600px`,
  left: `0px`,
  top: `80px`,
  overflow: `hidden`,
});

const Frame1 = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `1440px`,
  height: `680px`,
  left: `0px`,
  top: `-40px`,
  overflow: `hidden`,
});

const Frame2 = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `1440px`,
  height: `680px`,
  left: `0px`,
  top: `0px`,
  overflow: `hidden`,
});

const WhatsAppImage2023091 = styled('img')({
  height: `640px`,
  width: `1440px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `0px`,
  top: `40px`,
});

const ThereIsOnlyOneRightWSpan1 = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Sora`,
  fontWeight: `700`,
  fontSize: `48px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const ThereIsOnlyOneRightWSpan2 = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 38, 8, 1)`,
  fontStyle: `normal`,
  fontFamily: `Sora`,
  fontWeight: `700`,
  fontSize: `48px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const ThereIsOnlyOneRightWSpan3 = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Sora`,
  fontWeight: `700`,
  fontSize: `48px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const ThereIsOnlyOneRightW = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Sora`,
  fontWeight: `700`,
  fontSize: `48px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `835px`,
  height: `77px`,
  position: `absolute`,
  left: `176px`,
  top: `149px`,
});

const LetSPledgeToDisposeO = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(28, 27, 31, 1)`,
  fontStyle: `normal`,
  fontFamily: `Sora`,
  fontWeight: `700`,
  fontSize: `36px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `731px`,
  height: `96px`,
  position: `absolute`,
  left: `176px`,
  top: `226px`,
});

const Group30 = animated(
  styled('div')({
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `335px`,
    height: `58px`,
    left: `172px`,
    top: `383px`,
  })
);

const Rectangle34 = styled('div')({
  backgroundColor: `rgba(0, 154, 126, 1)`,
  borderRadius: `20px`,
  width: `335px`,
  height: `58px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const SchedulePickup = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Sora`,
  fontWeight: `700`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `331px`,
  height: `58px`,
  position: `absolute`,
  left: `4px`,
  top: `0px`,
});

const Frame3 = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `2759px`,
  width: `1440px`,
  margin: `1px 0px 0px 0px`,
  overflow: `hidden`,
});

const About = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `52px 218px 52px 217px`,
  boxSizing: `border-box`,
  width: `1440px`,
  height: `533px`,
  left: `0px`,
  top: `0px`,
  overflow: `hidden`,
});

const Frame4 = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `376px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Image6 = styled('img')({
  height: `28px`,
  width: `27px`,
  objectFit: `cover`,
  margin: `0px`,
});

const WhatWeDo = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Sora`,
  fontWeight: `700`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  height: `46px`,
  width: `376px`,
  margin: `0px`,
});

const WeProvideEndToEndWas = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `50px`,
  textTransform: `none`,
  height: `257px`,
  width: `1005px`,
  margin: `26px 0px 0px 0px`,
});

const KnowMoreBtn = styled('div')({
  backgroundColor: `rgba(0, 154, 126, 1)`,
  borderRadius: `20px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `44px`,
  width: `117px`,
  margin: `26px 0px 0px 0px`,
});

const KnowMore = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `500`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `117px`,
  height: `44px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const SchedulePickup1 = styled('div')({
  backgroundColor: `rgba(55, 55, 55, 0.6)`,
  borderRadius: `0px`,
  mixBlendMode: `darken`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `1440px`,
  height: `558px`,
  left: `0px`,
  top: `533px`,
  overflow: `hidden`,
});

const Frame12 = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `1440px`,
  height: `562px`,
  left: `0px`,
  top: `0px`,
});

const Image13 = styled('img')({
  height: `562px`,
  width: `1440px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Rectangle30 = styled('div')({
  backgroundColor: `rgba(123, 150, 145, 1)`,
  borderRadius: `0px`,
  mixBlendMode: `multiply`,
  width: `1440px`,
  height: `558px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Frame17 = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `1065px`,
  height: `303px`,
  left: `187px`,
  top: `177px`,
});

const Group29 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `424px`,
  height: `95px`,
  left: `323px`,
  top: `-118px`,
});

const SchedulePickup2 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Sora`,
  fontWeight: `600`,
  fontSize: `40px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `424px`,
  height: `44px`,
  position: `absolute`,
  left: `0px`,
  top: `51px`,
});

const Image5 = styled('img')({
  height: `28px`,
  width: `27px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `198px`,
  top: `0px`,
});

const Frame16 = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `1000px`,
  height: `159px`,
  left: `31px`,
  top: `106px`,
});

const Rectangle32 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `10px`,
  width: `1000px`,
  height: `159px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Messsage = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(217, 217, 217, 1)`,
  fontStyle: `italic`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `930px`,
  height: `141px`,
  position: `absolute`,
  left: `35px`,
  top: `9px`,
});

const Frame15 = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `16px 33px`,
  boxSizing: `border-box`,
  width: `1071px`,
  left: `-3px`,
  top: `0px`,
});

const Frame14Variant21 = styled(InputField)(({ theme }) => ({
  width: `260px`,
  height: `36px`,
  margin: `0px`,
}));

const Frame14Variant22 = styled(InputField)(({ theme }) => ({
  width: `260px`,
  height: `36px`,
  margin: `0px 0px 0px 111px`,
}));

const Frame14Variant23 = styled(InputField)(({ theme }) => ({
  width: `260px`,
  height: `36px`,
  margin: `0px 0px 0px 111px`,
}));

const Group19 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `258px`,
  height: `50px`,
  left: `402px`,
  top: `292px`,
});

const Rectangle33 = styled('div')({
  backgroundColor: `rgba(0, 154, 126, 1)`,
  borderRadius: `20px`,
  width: `258px`,
  height: `50px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const OrderPickup = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `500`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `258px`,
  height: `50px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Statistics = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `68px 78px`,
  boxSizing: `border-box`,
  width: `1440px`,
  height: `458px`,
  left: `0px`,
  top: `1091px`,
  overflow: `hidden`,
});

const Frame5 = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `338px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Image4 = styled('img')({
  height: `28px`,
  width: `27px`,
  objectFit: `cover`,
  margin: `0px`,
});

const Statistics1 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Sora`,
  fontWeight: `600`,
  fontSize: `40px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `50px`,
  textTransform: `none`,
  height: `46px`,
  width: `338px`,
  margin: `0px`,
});

const Frame6 = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `flex-end`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `1284px`,
  margin: `78px 0px 0px 0px`,
  overflow: `hidden`,
});

const Frame7 = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `155px`,
  width: `1234px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Frame8 = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `595px`,
  height: `147px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Frame9 = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `276px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Q42 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 154, 126, 1)`,
  fontStyle: `normal`,
  fontFamily: `Sora`,
  fontWeight: `600`,
  fontSize: `64px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `50px`,
  textTransform: `none`,
  height: `95px`,
  width: `193px`,
  margin: `0px`,
});

const HouseholdAppliances = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(55, 55, 55, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `50px`,
  textTransform: `none`,
  height: `52px`,
  width: `276px`,
  margin: `0px`,
});

const Frame10 = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `276px`,
  margin: `0px 0px 0px 43px`,
  overflow: `hidden`,
});

const Q34 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 154, 126, 1)`,
  fontStyle: `normal`,
  fontFamily: `Sora`,
  fontWeight: `600`,
  fontSize: `64px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `50px`,
  textTransform: `none`,
  height: `95px`,
  width: `193px`,
  margin: `0px`,
});

const ItCommunicationTechn = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(55, 55, 55, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  height: `52px`,
  width: `276px`,
  margin: `0px`,
});

const Frame11 = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `582px`,
  height: `155px`,
  margin: `0px 0px 0px 57px`,
  overflow: `hidden`,
});

const Frame13 = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `276px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Frame14 = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `220px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Q10 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 154, 126, 1)`,
  fontStyle: `normal`,
  fontFamily: `Sora`,
  fontWeight: `600`,
  fontSize: `64px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `50px`,
  textTransform: `none`,
  height: `95px`,
  width: `193px`,
  margin: `0px`,
});

const ConsumerElectronics = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(55, 55, 55, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `50px`,
  textTransform: `none`,
  height: `52px`,
  width: `276px`,
  margin: `0px`,
});

const Frame18 = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `276px`,
  height: `155px`,
  margin: `0px 0px 0px 30px`,
  overflow: `hidden`,
});

const Q14 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 154, 126, 1)`,
  fontStyle: `normal`,
  fontFamily: `Sora`,
  fontWeight: `600`,
  fontSize: `64px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `50px`,
  textTransform: `none`,
  height: `95px`,
  width: `193px`,
  margin: `0px`,
});

const Others = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(55, 55, 55, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `50px`,
  textTransform: `none`,
  height: `17px`,
  width: `276px`,
  margin: `8px 0px 0px 0px`,
});

const Map1 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `0px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `1440px`,
  height: `609px`,
  left: `0px`,
  top: `1549px`,
  overflow: `hidden`,
});

const Frame19 = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `1440px`,
  height: `609px`,
  left: `0px`,
  top: `0px`,
  overflow: `hidden`,
});

const Frame20 = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `1440px`,
  height: `663px`,
  left: `0px`,
  top: `-20px`,
  overflow: `hidden`,
});

const Image2 = styled('img')({
  height: `677px`,
  width: `1440px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `0px`,
  top: `-14px`,
});

const Frame21 = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `371px`,
  height: `64px`,
  left: `137px`,
  top: `156px`,
  overflow: `hidden`,
});

const Rectangle10 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `10px`,
  height: `64px`,
  width: `371px`,
  margin: `0px`,
});

const Locate = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(217, 217, 217, 1)`,
  fontStyle: `italic`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `325px`,
  height: `63px`,
  position: `absolute`,
  left: `161px`,
  top: `157px`,
});

const Footer1 = styled(Footer)(({ theme }) => ({
  width: `1440px`,
  height: `601px`,
  position: `absolute`,
  left: `0px`,
  top: `2158px`,
}));

function App(props) {
  const [Main1Spring, Main1Api] = useSpring(() => ({
    config: {
      duration: 100,
      easing: easings['easeInOutQuad'],
    },
    delay: 0,
    from: { transform: 'scale(1)' },
  }));

  const [Group30Spring, Group30Api] = useSpring(() => ({
    config: {
      duration: 100,
      easing: easings['easeInOutQuad'],
    },
    delay: 0,
    from: { transform: 'scale(1)' },
  }));

  return (
    <Main1 className={props.className} style={{ ...Main1Spring }}>
      <Frame>
        <Navbar1 />
        <HeroSection>
          <Frame1>
            <Frame2>
              <WhatsAppImage2023091
                src={WhatsAppImage2023091Image}
                loading="lazy"
                alt={'WhatsApp Image 2023-09-15 at 11.30 2'}
              />
              <ThereIsOnlyOneRightW>
                <ThereIsOnlyOneRightWSpan1>{`There is only one `}</ThereIsOnlyOneRightWSpan1>
                <ThereIsOnlyOneRightWSpan2>{`right`}</ThereIsOnlyOneRightWSpan2>
                <ThereIsOnlyOneRightWSpan3>{` way`}</ThereIsOnlyOneRightWSpan3>
              </ThereIsOnlyOneRightW>
              <LetSPledgeToDisposeO>
                {`Let’s pledge to dispose of e-waste
responsibly.`}
              </LetSPledgeToDisposeO>
              <Group30
                onClick={() => {
                  Main1Api.start({ ...{ transform: 'scale(1)' }, delay: 0 });
                }}
                onMouseLeave={() => {
                  Group30Api.start({ transform: 'scale(1)' });
                }}
                onMouseEnter={() => {
                  Group30Api.start({
                    ...{ transform: 'scale(1.1)' },
                    delay: 0,
                  });
                }}
                style={{ ...Group30Spring }}
              >
                <Rectangle34>
                <SchedulePickup>{`Schedule Pickup`}</SchedulePickup>
                </Rectangle34>
              </Group30>
            </Frame2>
          </Frame1>
        </HeroSection>
      </Frame>
      <Frame3>
        <About>
          <Frame4>
            <Image6 src={Image6Image} loading="lazy" alt={'image 6'} />
            <WhatWeDo>{`What we do ?`}</WhatWeDo>
          </Frame4>
          <WeProvideEndToEndWas>
            {`We provide end-to-end waste management services based on the principles of the circular economy. We handle waste sustainably & responsibly for MNCs, SMEs, residential communities, other bulk generating organizations and institutions, and also one to one individuals. Are you a bulk waste generator? Connect with us to ensure that your did takes noble responsibility for society.`}
          </WeProvideEndToEndWas>
          <KnowMoreBtn>
            <KnowMore>{`Know more`}</KnowMore>
          </KnowMoreBtn>
        </About>
        <SchedulePickup1>
          <Frame12>
            <Image13 src={Image13Image} loading="lazy" alt={'image 13'} />
            <Rectangle30></Rectangle30>
            <Frame17>
              <Group29>
                <SchedulePickup2>{`Schedule pickup`}</SchedulePickup2>
                <Image5 src={Image5Image} loading="lazy" alt={'image 5'} />
              </Group29>
              <Frame16>
                <Rectangle32></Rectangle32>
                <Messsage>{`Messsage`}</Messsage>
              </Frame16>
              <Frame15>
                <Frame14Variant21 />
                <Frame14Variant22 />
                <Frame14Variant23 />
              </Frame15>
              <Group19>
                <Rectangle33></Rectangle33>
                <OrderPickup>{`Order Pickup`}</OrderPickup>
              </Group19>
            </Frame17>
          </Frame12>
        </SchedulePickup1>
        <Statistics>
          <Frame5>
            <Image4 src={Image4Image} loading="lazy" alt={'image 4'} />
            <Statistics1>{`Statistics`}</Statistics1>
          </Frame5>
          <Frame6>
            <Frame7>
              <Frame8>
                <Frame9>
                  <Q42>{`42%`}</Q42>
                  <HouseholdAppliances>
                    {`Household Appliances`}
                  </HouseholdAppliances>
                </Frame9>
                <Frame10>
                  <Q34>{`34%`}</Q34>
                  <ItCommunicationTechn>
                    {`IT communication &
technology sector`}
                  </ItCommunicationTechn>
                </Frame10>
              </Frame8>
              <Frame11>
                <Frame13>
                  <Frame14>
                    <Q10>{`10%`}</Q10>
                  </Frame14>
                  <ConsumerElectronics>
                    {`Consumer Electronics`}
                  </ConsumerElectronics>
                </Frame13>
                <Frame18>
                  <Q14>{`14%`}</Q14>
                  <Others>{`Others`}</Others>
                </Frame18>
              </Frame11>
            </Frame7>
          </Frame6>
        </Statistics>
        <Map1>
          <Frame19>
            <Frame20>
              <Image2 src={Image2Image} loading="lazy" alt={'image 2'} />
              <Frame21>
                <Rectangle10></Rectangle10>
              </Frame21>
              <Locate>{`Locate`}</Locate>
            </Frame20>
          </Frame19>
        </Map1>
        <Footer1 />
      </Frame3>
    </Main1>
  );
}

export default App
