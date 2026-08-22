import { useState, useEffect } from "react"

export default function Exercicio03() {
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        async function buscarUsuarios() {
            const resposta = await fetch('https://reqres.in/api/users?page=2')
            const dados = await resposta.json()
            setUsuarios(dados.data)
        }

        buscarUsuarios()
    }, [])

    return (
        <section>
            <h1>Exercício 03</h1>
            <ul>
                {
                    usuarios.map(usuario =>
                        <li key={usuario.id}>
                            {usuario.first_name} - {usuario.last_name} - {usuario.email}
                        </li>
                    )
                }
            </ul>
        </section>
    )
}