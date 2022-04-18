## Atividades

aqui escrevo tudo que gostaria de adicionar no site.

### JavaScript

* criar a classe
 criar a classe
 adicionar as funções como métodos da classe
 pegar as checkbox selecionadas
 adicionar na classe essas checkbox
 criar um banco de textos ? um array com os textos?
 (fazer ao contrário)


 pensar no filtro (filtrar por categoria e descrição)
 na busca pela descrição


* *2ª parte
// criar uma nova versão do site com React.

// exercício: fazer a função do filtro: -----------------------------------------------------

* Filtro:active: ainda não finalizado

- para adicionar o evento de click:
 usar o js pra adicionar a classe active no html e usa ela no css pra fazer a mudança do filtro.

* corrigir o icone de estrela do 2º comentário


- não entendi o que é (é a query string?) 
- quando fizer a busca colocar o termo buscado com uma query na URL
- fazer a pagina index se conectar com a página search.html

* mudar icone do filtro:
fazer aquele lance das setinhas e mudar o icone de abrir e fechar o menu

//exercicios 2  --------------

// criar a classe
// criada no arquivo searchbytitle, mas não foi importada

// adicionar as funções como métodos da classe
// adicionado mas não foi importado, não funciona








### CSS

# Filtro:

  - para adicionar o evento de click:
usa o js pra adicionar a classe active no html e usa ela no css pra fazer a mudança

- colocar o float bottom fixo na tela para o filtro e colocar a opção da pessoa abir e fechar esse filtro (ele vai abrir e fechar com um botão, mas o efeito vai ser ele fazendo um swipe pra direita e para esquerda.)
- pra deixar esse float bottom, é necessário dar um espaço nas bordas pra o conteúdo não ficar em cima.


# na página texto:
 < !-- incluir uma div com o campo: "como citar esse artigo"com a opção de botão pra pessoa copiar a citação -->< !-- incluir os comentários do texto e referenciar as 4.5 estrelas da página de busca -->
*/


# estava no header:

 - position absolute/relativo

 position: absolute;
    /* como coloquei que o .banner  seria position relative, os elementos aqui serão organizados relativo ao elemento pai, e não à página toda como é o padrão

    .banner {
    position: relative;
    /* colocar o position relative aqui faz com que os filhos dessa classe banner (que estão com o position absolute)fiquem relativos a esse elemento pai, ou seja, relativo a classe banner  

    /* diz que o elemento tem 100% do tamanho da página menos 72px que é o tamanho do menu 
    .banner__imagem {
        height: calc(100vh - 72px);
    }

    cursor: pointer;

    /* deixando a transição do hover mais suave 
    transition: all .1s ease-in-out;

    /* caluclo da largura do filtro 
calc(100vw - 945px)

    /* diz pra imagem não se repetir caso ela seja menor do que o espaço em que foi colocada
    background-repeat: no-repeat;
    /* faz a imagem ocupar todo o fundo da caixa 
    background-size: cover;
    /* fazendo a borda arredondada 
    border-radius: 100%;
    
    ## é interessante screver as estilização em ordem alfabética; porém os elementos é interessante colocar por ordem em que aparecem no HTML. 
    
    ex.:

    .titulo {
        align items
      }


    .pessoas {
      align-item:center;
      display: flex;
      justify-content:
      z-index: 1
    }


    @media screen and (min-width: 0) {
    .cabecalho {

        /* fazendo a quebra do menu com a imagem em coluna 
        flex-direction: column;
    }
}
@media screen and (min-width: 768px) {
    .cabecalho {
        /* voltando a colocar a logo e o menu um d lado do outro
        flex-direction: row;

    }
}
  
*/



# caixa: como citar - ok


- para distribuir o espaço disponível entre a caixa como citar e o texto, eu tenho que colocar mais espaço pro texto:
flex-grow: 1; o espaço que sobrou vai pra lista. se eu colocar 3,
fica 2 pra o elemento que estou pegando e 1 pra os outros elementos


- para fazer a caixa de como citar, envolve o texto e a caixa como citar em um pai e coloca:
flex-wrap: wrap; quebre para a próxima linha caso não haja tamanho disponível (no desktop)

- no mobile: coloca o flex-wrap em column pra que a caixa de como citar fique abaixo


# Dicas para depois:

/*se precisar usa o flex-wrap: wrap - pra ele quebrar a linha quando acabar o espaço definido pra a caixa então quando não couber mais no elemento pai, quebra pra próxima coluna pra juntar as duas: flex-flow: column wrap*/

/*
no meu site

colocar todo o filtro e a outra parte toda em display flex pra não ficar tendo que alinhar margem esquerda.
e colocar mais espaço para o conteúdo principal e menos para o filtro. então usa o flex-grow: 10; no conteúdo do texto. depois disso vê como faz.

/* no leiaute atual de desktop, tenho que mudar as unidades de medidas de pixel para rem ou em pra que tudo se adapte a tela maiores

- talvez seja melhor usar o grid em alguns momentos

*/

# observar:

- o flex-shrink: 2;
diminui os elementos para que caibam na tela. faz o contrário do flex-grow. se eu colocar 0 ele não vai diminuir o valor que eu passo diz quantas vezes o elemento vai diminuir. nesse exemplo vai diminuir duas vezes mais flex-shrink: 2;

 para juntar o flex grow com o flex shrink usa:
flex: 1(grow) 1(shrink)

o flex-basis: 25% tem mais prioridade em cima do width então pode ser útil em alguns casos. e pode ser colocado como terceiro argumento do flex

flex: 1(flex-grow) 1(flex-shrink) 25%(flex-basis)

- colocar esse no filtro  
  se colocar
  flex-shrink: 0; ele diz que ninguém vai diminuir de tamanho,
  


- quando coloca align-items no flex junto com flex-direction: column, os eixos vertical e horizontal mudam,
então tem que resetar o algn-itens qd tiver o column junto,
pra isso usa o algn-itens: initial

- para fazer com que os elementos fiquem um abaixo do outro,
é só deixar a altura automática. pra isso usa o height: auto

- o margin: auto,serve pra alinhar no centro itens que não tem texto pra usar o text-align

- para o mobile:
é legal colocar o tamanho mobile até 768 e depois disso já é desktop:
@media(max-width: 768px)

## GRID --

essa definição diz que quando o elemento estiver com o mouse em cima e com a classe .ativo vai executa esse codigo
.menu__link:hover,
.menu__link.ativo {
  border-bottom: 2px solid #0073e6;
   cria uma borda azul embaixo do menu quando passa o mouse
}

  /* definindo a área do grid
  .elemento {
  grid-template-areas: "cabecalho"
  "conteudo"
  "rodape";
  grid-template-columns: auto;
  grid-template-rows: 50px auto auto;
  }


# Css reslvido: 

- seguir as aulas de layout responsivo (site appperia) e começar pelo design do moblile

- quando clicar no float:
filtro:active {
  opacity: 1;
  fazer ele deslizar da esquerda para direita
}

float:active {
  opacity: 0;
}

- esconder o filtro:
opacity: 0;

OBS.: usar o z-index para fazer o filtro ficar por baixo de tudo.



# dúvidas:

colocar uma classe com o nome flexbox ajuda a escrever puco código?
