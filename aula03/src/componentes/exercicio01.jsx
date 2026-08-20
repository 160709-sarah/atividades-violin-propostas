import { useState, useEffect } from "react"

export default function Exercicio01() {
   const [posts, setPost] = useState([]) //para adicionar e controlar variáveis de estado em componentes funcionais

   //o use effect é um hook(função da aplicação) que permite sincronizar um componente ao sistema externo.
    useEffect(() => {
        async function buscarPosts() { //responsavel por buscar dados da aplicação, ou seja leva um tempo, por isso é async 
             const resposta = await fetch('https://jsonplaceholder.typicode.com/posts') //o await fi usado pois demora alguns milisegundos para retornar o que é necessario da api
             const dados = await resposta.json()
             setPost(dados)
        }
        buscarPosts()
    }, []) //recebe dois parametros, a callback function e o vetor de dependencias

    return (
        <section>
        <h1> Exercício 01</h1>
        <ul>
            {
                posts
                .filter((_, index) => index <= 9 )
                .map(post => <li key={post.id}> {post.id} - {post.title} </li>)
            }
         </ul>
        </section>
    )
}