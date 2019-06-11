import React from 'react';
import { TopBarCss, TopBarContainer, TopBarContainerLeft, TopBarContainerCenter, TopBarContainerRight, Spans } from './Content/StyledComponents'
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarCss>
      <TopBarContainer>

        <TopBarContainerLeft>
          <Spans left>TOPICS</Spans>
          <Spans left>SEARCH</Spans>
        </TopBarContainerLeft>

        <TopBarContainerCenter>
          <Spans center>GENERAL</Spans>
          <Spans center>BROWNBAG</Spans>
          <Spans center>RANDOM</Spans>
          <Spans center>MUSIC</Spans>
          <Spans center>ANNOUNCEMENTS</Spans>
        </TopBarContainerCenter>

        <TopBarContainerRight>
          <Spans right>LOG IN</Spans>
        </TopBarContainerRight>

      </TopBarContainer>
    </TopBarCss>
  )
}

export default TopBar;