import { useState, useEffect } from "react"

export default function Exercicio04() {
    const [usuario, setUsuario] = useState(null)

    useEffect(() => {
        async function buscarUsuario() {
            const resposta = await fetch('https://reqres.in/api/users/5')
            const dados = await resposta.json()
            setUsuario(dados.data)
        }

        buscarUsuario()
    }, [])

    return (
        <section>
            <h1>Exercício 04</h1>

            {
                usuario === null ? (
                    <p>Carregando...</p>
                ) : (
                    <>
                        <h1>{usuario.first_name} {usuario.last_name}</h1>
                        <p>{usuario.email}</p>
                    </>
                )
            }
        </section>
    )
}