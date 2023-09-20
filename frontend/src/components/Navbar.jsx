import React from 'react';
import { styled } from '@mui/material/styles';

const Navbar1 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `80px`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `14px 0px`,
  boxSizing: `border-box`,
});

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
  flex: `1`,
  height: `52px`,
  margin: `0px`,
});

const ERecycleBin = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 154, 126, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poller One`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `234px`,
  height: `52px`,
  position: `absolute`,
  left: `26px`,
  top: `6px`,
});

const NavElements = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `550px`,
  height: `19px`,
  left: `707px`,
  top: `17px`,
});

const Home = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `106px`,
  height: `19px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const AboutUs = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `106px`,
  height: `19px`,
  position: `absolute`,
  left: `114px`,
  top: `0px`,
});

const ERead = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `106px`,
  height: `19px`,
  position: `absolute`,
  left: `228px`,
  top: `0px`,
});

const ContactUs = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `106px`,
  height: `19px`,
  position: `absolute`,
  left: `342px`,
  top: `0px`,
});

const Locate = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `106px`,
  height: `19px`,
  position: `absolute`,
  left: `456px`,
  top: `0px`,
});

const Group28 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `153px`,
  height: `36px`,
  margin: `0px 0px 0px 46px`,
});

const Rectangle40 = styled('div')({
  backgroundColor: `rgba(0, 154, 126, 1)`,
  borderRadius: `20px`,
  width: `153px`,
  height: `36px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const LoginSignup = styled('div')({
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
  width: `135px`,
  height: `36px`,
  position: `absolute`,
  left: `8px`,
  top: `0px`,
});

function Navbar(props) {
  return (
    <Navbar1 className={props.className}>
      <Frame>
        <ERecycleBin>{`ERecycleBin`}</ERecycleBin>
        <NavElements>
          <Home>{`Home`}</Home>
          <AboutUs>{`About us`}</AboutUs>
          <ERead>{`E-read`}</ERead>
          <ContactUs>{`Contact us`}</ContactUs>
          <Locate>{`Locate`}</Locate>
        </NavElements>
      </Frame>
      <Group28>
        <Rectangle40></Rectangle40>
        <LoginSignup>{`Login/Signup`}</LoginSignup>
      </Group28>
    </Navbar1>
  );
}

export default Navbar;
