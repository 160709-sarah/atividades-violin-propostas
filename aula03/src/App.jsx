
import Exercicio01 from "./componentes/exercicio01"

//não é app minusculo pois o react diz que quando a gente cria um componente, tem que nomealo com a primeira letra em maiusculo
export default function App () {
  //logica da programação
  return (
    // Área renderizável, o que aparece na viewport(viewport é onde aparece o site/conteudo, o restante é coisa do navegador, tudo que aparece na viewport tem que estar dentro do return)
    <>
    <Exercicio01 />
   </>
  )
}
