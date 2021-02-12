import styled from 'styled-components'

const CardEnd = styled.div`
    margin: 50px;
    z-index: 10;

    @media screen and (max-width: 500px) { 
      width: 100%;
  }
`

CardEnd.Card = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.black};
    background-color: 1px solid ${({ theme }) => theme.colors.purple};
    border-radius: 10px;
    overflow: hidden;
    h1, h2, h3 {
      font-size: 16px;
      font-weight: 700;
      line-height: 1;
    }
    p {
      font-size: 14px;
      font-weight: 600;
      line-height: 1;
    }
`

CardEnd.Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 18px 20px;
    background-color: ${({ theme }) => theme.colors.black};
    border-bottom: 1px solid #000;
    
    * {
      margin: 0;
    }
`

CardEnd.Content = styled.div`
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.purple};
    z-index: 10;

  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: row;
  }

  @media screen and (max-width: 500px) { 
      ul {
          justify-content: space-between;
      }

  }
`

CardEnd.Topic = styled.a`

  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => `${theme.colors.yellow}`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: 10px;
  transition: .3s;
  display: block;
  margin-right: 5px;
  
  &:hover,
  &:focus {
    opacity: .8;
  }

  &:nth-last-child() {
      margin-right: 0;
  }

  
`;


export default CardEnd