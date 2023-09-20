import React from 'react';
import { styled } from '@mui/material/styles';

const Frame14Variant21 = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `36px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const Rectangle31 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `10px`,
  width: `260px`,
  height: `44px`,
  position: `absolute`,
  left: `0px`,
  top: `-4px`,
});

const Date = styled('div')({
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
  width: `194px`,
  height: `30px`,
  position: `absolute`,
  left: `34px`,
  top: `3px`,
});

function InputField(props) {
  return (
    <Frame14Variant21 className={props.className}>
      <Rectangle31></Rectangle31>
      <Date>{`Date`}</Date>
    </Frame14Variant21>
  );
}

export default InputField;
