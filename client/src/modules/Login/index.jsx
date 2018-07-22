import React from 'react'
import { Modal, Input, Form, Button } from 'core/components'

const submit = form => console.log(form)

const Login = () => (
  <Modal title="Login" size="small">
    <Form onSubmit={submit}>
      <Input name="email" title="E-mail" />
      <Input name="senha" type="password" title="Senha" />
      <Button text="Login" submit />
      <Button text="Cancelar" color="default" />
    </Form>
  </Modal>
)

export default Login
