import React, { FC } from 'react';
import styled from 'styled-components';

const SCenteredContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 85vh;
`;

interface ICenteredContainerProps {
  children: React.ReactNode;
};

const CenteredContainer:FC<ICenteredContainerProps> = ({ children }) => (
  <SCenteredContainer>
    <div>
      { children }
    </div>
  </SCenteredContainer>
);

export default CenteredContainer;