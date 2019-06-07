import React from 'react';
import { TopBarCss, TopBarContainer, TopBarContainerLeft, TopBarContainerCenter, TopBarContainerRight, ContainerLeftSpan, ContainerCenterSpan, ContainerRightSpan } from './Content/StyledComponents'
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarCss>
      <TopBarContainer>
        <TopBarContainerLeft>
          <ContainerLeftSpan>TOPICS</ContainerLeftSpan><ContainerLeftSpan>SEARCH</ContainerLeftSpan>
        </TopBarContainerLeft>
        <TopBarContainerCenter>
          <ContainerCenterSpan>GENERAL</ContainerCenterSpan><ContainerCenterSpan>BROWNBAG</ContainerCenterSpan><ContainerCenterSpan>RANDOM</ContainerCenterSpan><ContainerCenterSpan>MUSIC</ContainerCenterSpan><ContainerCenterSpan>ANNOUNCEMENTS</ContainerCenterSpan>
        </TopBarContainerCenter>
        <TopBarContainerRight>
          <ContainerRightSpan>LOG IN</ContainerRightSpan>
        </TopBarContainerRight>
      </TopBarContainer>
    </TopBarCss>
  )
}

export default TopBar;