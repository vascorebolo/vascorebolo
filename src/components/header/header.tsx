import styled from 'styled-components';

const SHeader = styled.div`
  padding: 10px 0;
  margin: 0;
  background: rgba(255, 255, 255, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  font-size: 10px;
  z-index: 1;

  h1 {
    text-transform: uppercase;
    padding: 0;
    margin: 0;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.grey100 };
    }

    span {
      color: ${({ theme }) => theme.grey500 };
    }
  }
`;

export default SHeader;
