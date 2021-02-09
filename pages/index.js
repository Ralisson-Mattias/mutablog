import styled from 'styled-components'
import Image from 'next/image'


import CardLeft from '../src/components/CardLeft'
import Background from '../src/components/Background'
import BackgroundImage from '../src/components/BackgroundImage'
import GitHubCorner from '../src/components/GitHubCorner'
import CardRight from '../src/components/CardRight'

const Container = styled.div`
  display: flex;
`


export default function Home() {

  const data = [
    {
      nome: 'Javascript'
    },
    {
      nome: 'Java'
    },
    {
      nome: 'Php'
    },
    {
      nome: 'C#'
    },
  ]

  return (
    <Background>

      <Container>
        <CardLeft>
          <CardLeft.Header>
            <h1>Sobre mim</h1>
          </CardLeft.Header>

          <CardLeft.Content>
            <p>Olá, meu nome é Ralisson. Tenho 19 anos e atualmente estou buscando uma oportunidade no mercado de trabalho. Sou apaixonado por tecnologia. Atualmente estou focado no desenvolvimento de aplicações móveis</p>
          </CardLeft.Content>

          <CardLeft.ContentIcons>
            <CardLeft.Icon
              href="https://www.linkedin.com/in/ralisson-mattias-bb11b8199/"
            >

              <Image
                src="/icon-linkedin.png"
                width={32}
                height={32}
              />

            </CardLeft.Icon>

            <CardLeft.Icon href="https://www.instagram.com/ralisson_mattias/">

              <Image
                src="/icon-instagram.png"
                width={32}
                height={32}
              />

            </CardLeft.Icon>

            <CardLeft.Icon href="https://github.com/Ralisson-Mattias/">

              <Image
                src="/icon-github.png"
                width={32}
                height={32}
              />

            </CardLeft.Icon>
          </CardLeft.ContentIcons>

        </CardLeft>

        <CardRight>

          <CardRight.Card>
            <CardRight.Header>
              <h1>Linguagens</h1>
            </CardRight.Header>

            <CardRight.Content>
              <ul>

                {data.map((result) => {
                  return (
                    <li key={result.nome}>
                      <CardRight.Topic>
                        {result.nome}
                      </CardRight.Topic>
                    </li>
                  )
                })}

              </ul>
            </CardRight.Content>
          </CardRight.Card>

        </CardRight>

      </Container>

      <BackgroundImage />

      <GitHubCorner projectUrl="https://github.com/Ralisson-mattias" />

    </Background>
  )

}
