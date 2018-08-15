import { injectGlobal } from 'emotion';
import {
  MuliBlack,
  MuliBlackItalic,
  MuliBold,
  MuliBoldItalic,
  MuliExtraBold,
  MuliExtraBoldItalic,
  MuliExtraLight,
  MuliExtraLightItalic,
  MuliItalic,
  MuliLight,
  MuliLightItalic,
  MuliRegular,
  MuliSemiBold,
  MuliSemiBoldItalic,
} from './fonts';

export default injectGlobal`
  @font-face {
    font-family: "Muli-Black";
    font-style: normal;
    font-weight: normal;
    src: local("Muli Black"), local("Muli-Black"), url(${MuliBlack}) format("truetype");
  }
  @font-face {
    font-family: "Muli-BlackItalic";
    font-style: normal;
    font-weight: normal;
    src: local("Muli BlackItalic"), local("Muli-BlackItalic"), url(${MuliBlackItalic}) format("truetype");
  }
  @font-face {
    font-family: "Muli-Bold";
    font-style: normal;
    font-weight: normal;
    src: local("Muli Bold"), local("Muli-Bold"), url(${MuliBold}) format("truetype");
  }
  @font-face {
    font-family: "Muli-BoldItalic";
    font-style: normal;
    font-weight: normal;
    src: local("Muli BoldItalic"), local("Muli-BoldItalic"), url(${MuliBoldItalic}) format("truetype");
  }
  @font-face {
    font-family: "Muli-ExtraBold";
    font-style: normal;
    font-weight: normal;
    src: local("Muli ExtraBold"), local("Muli-ExtraBold"), url(${MuliExtraBold}) format("truetype");
  }
  @font-face {
    font-family: "Muli-ExtraBoldItalic";
    font-style: normal;
    font-weight: normal;
    src: local("Muli ExtraBoldItalic"), local("Muli-ExtraBoldItalic"), url(${MuliExtraBoldItalic}) format("truetype");
  }
  @font-face {
    font-family: "Muli-ExtraLight";
    font-style: normal;
    font-weight: normal;
    src: local("Muli ExtraLight"), local("Muli-ExtraLight"), url(${MuliExtraLight}) format("truetype");
  }
  @font-face {
    font-family: "Muli-ExtraLightItalic";
    font-style: normal;
    font-weight: normal;
    src: local("Muli ExtraLightItalic"), local("Muli-ExtraLightItalic"), url(${MuliExtraLightItalic}) format("truetype");
  }
  @font-face {
    font-family: "Muli-SemiBold";
    font-style: normal;
    font-weight: normal;
    src: local("Muli SemiBold"), local("Muli-SemiBold"), url(${MuliSemiBold}) format("truetype");
  }
  @font-face {
    font-family: "Muli-SemiBoldItalic";
    font-style: normal;
    font-weight: normal;
    src: local("Muli SemiBoldItalic"), local("Muli-SemiBoldItalic"), url(${MuliSemiBoldItalic}) format("truetype");
  }
  @font-face {
    font-family: "Muli-Regular";
    font-style: normal;
    font-weight: normal;
    src: local("Muli Regular"), local("Muli-Regular"), url(${MuliRegular}) format("truetype");
  }
  @font-face {
    font-family: "Muli-Italic";
    font-style: normal;
    font-weight: normal;
    src: local("Muli Italic"), local("Muli-Italic"), url(${MuliItalic}) format("truetype");
  }
  @font-face {
    font-family: "Muli-Light";
    font-style: normal;
    font-weight: normal;
    src: local("Muli Light"), local("Muli-Light"), url(${MuliLight}) format("truetype");
  }
  @font-face {
    font-family: "Muli-LightItalic";
    font-style: normal;
    font-weight: normal;
    src: local("Muli LightItalic"), local("Muli-LightItalic"), url(${MuliLightItalic}) format("truetype");
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: "Muli-SemiBold";
    color: #3b3f48;
  }
  body {
    font-family: "Muli-Regular";
    font-size: 20px;
    line-height: 1.58;
    background-color: #FFF;
  }
  em {
    font-family: "Muli-Italic";
  }
  strong {
    font-family: "Muli-SemiBold";
  }
  p {
    margin-bottom: 20px;
  }
  img {
    display: block;
    margin: auto;
    max-height: 400px;
  }
  a {
    font-family: "Muli-Regular";
  }
`;
