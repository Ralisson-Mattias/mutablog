import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  background: linear-gradient(180deg, ${({ theme }) => theme.colors.yellow} 64.26%, rgba(242, 226, 5, 0) 100%);
  flex: 1; 
  @media screen and (max-width: 500px) {
    
  }
`;

export default Background;