import React from "react";
import { Container, FormContainer, Input, Button } from "./Style";
import api from "../../services/api";
import { login } from "../../services/auth";

export default function Login() {
    const [result, setResult] = React.useState({
        'username' : false,
        'password' : false,
    });
    const [error, setError] = React.useState(false);


    const handleSignIn = async (event)  => {
        event.preventDefault();
        console.log(result);
        if (!result.password || !result.username) {
          setError("Preencha e-mail e senha para continuar!");
        } else {
          try {
            let username = result.username;
            let password = result.password;
            const response = await api.post("/api-token-auth/", { username , password });
            login(response.data.token);
            this.props.history.push("/home");
          } catch (err) {
            setError(
                "Houve um problema com o login, verifique suas credenciais. T.T"
            );
          }
        }
    };

    const getValueForm = (event) => {
        const { name, value } = event.target;
        setResult(result => ({
            ...result,
            [name]: value
        }));   
    }
    
    return (
        <Container className="container">
            <FormContainer onSubmit={handleSignIn}>
                {error && <p>{error}</p>}
                <Input 
                    type="text"
                    name="username"
                    placeholder="Endereço de e-mail"
                    onChange={getValueForm}
                />
                <Input 
                    type="password"
                    name="password"
                    placeholder="Senha"
                    onChange={getValueForm}
                />
                <Button type="submit">Entrar</Button>
            </FormContainer>
        </Container>
    );
}
