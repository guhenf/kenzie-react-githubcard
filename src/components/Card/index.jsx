import { Container } from "../Search/style"
import { LinkRepository, DivInfos } from "./style"

export default function Card({ name, description, html_url, img_url }) {
  return (
    <Container>
      <LinkRepository
        target="_blank"
        rel="noreferrer"
        href={html_url}
        className="card_link"
      >
        <img src={img_url} alt="Foto de perfil do usuário"></img>
      </LinkRepository>
      <DivInfos>
        <h3>{name}</h3>
        <p>{description}</p>
      </DivInfos>
    </Container>
  )
}
