import { useState, useEffect } from "react"

export default function Exercicio02() {
    const [comentarios, setComentarios] = useState([])

    useEffect(() => {
        async function buscarComentarios() {
            const resposta = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
            const dados = await resposta.json()
            setComentarios(dados)
        }
        buscarComentarios()
    }, [])

    return (
        <section>
            <h1>Exercício 02</h1>
            <ul>
                {
                    comentarios.map(comentario => 
                        <li key={comentario.id}>
                            {comentario.name} - {comentario.email}
                        </li>
                    )
                }
            </ul>
        </section>
    )
}