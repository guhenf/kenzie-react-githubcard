import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

import { Container, Form, DivInput, Input, Span, Button } from "./style"

export default function Search({ onClick }) {
  const formSchema = yup.object().shape({
    repository: yup.string().required("Campo obrigatório!"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
    reValidateMode: "onSubmit",
  })

  function onSubmitFunction(data) {
    onClick(data.repository)
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <DivInput>
          <Input
            className="Input"
            type="text"
            placeholder="Usuário / repositório"
            {...register("repository")}
          />
          {errors.repository && <Span>{errors.repository?.message}</Span>}
        </DivInput>

        <Button type="submit">Pesquisar</Button>
      </Form>
    </Container>
  )
}
