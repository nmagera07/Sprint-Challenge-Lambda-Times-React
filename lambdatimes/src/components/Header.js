import React from 'react';
import { HeaderDiv, HeaderH1, HeaderSpans} from './Content/StyledComponents'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderDiv>
      <HeaderSpans date>MARCH 32, 2018</HeaderSpans>
      <HeaderH1>Lambda Times</HeaderH1>
      <HeaderSpans temp>98°</HeaderSpans>
    </HeaderDiv>
  )
}

export default Header