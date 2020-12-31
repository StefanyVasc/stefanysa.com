---
title: "Posicionamento de elementos na tela com CSS: Position"
description: Aprendendo a usar a propriedade position e seus valores
date: 2020-12-30 12:39:57
image: /assets/img/cover.png
category: css
background: "#009FFF"
color: "#FFFFFF"
---
# Introdução

Oi galera 👋! Aqui vamos pro último post de 2020. Nesse post vou abordar a propriedade position suas particularidades e comportamentos. A principio a propriedade position pode assumir os valores: static, absolute, fixed, relative e sticky. Vamos entender um pouco sobre cada valor desses.

## position: static;

* Essa é o valor padrão, já vem por default e não é necessário declará-la, a não ser que você queira mudar o tipo de position.
* Ele não muda em nada o comportamento padrão do elemento.
* Com a *`position:static`* não adianta definir as propriedades : *`top, bottom, left e right`* pois ela simplesmente não mudará de lugar.

## position: absolute;

> O *`position:absolute`* faz referência ao **elemento pai**. Tomando como **base o ponto superior esquerdo do elemento pai.** E esse mesmo pai deve ter um position definido, porém deve ser diferente de `static`.

* Quando definido cria um novo contexto que fica a frente do browser.
* Logo, a div com *`position:absolute`* referencia sua posição pelo div mais próximo que o envolve e que também tenha um position definido, caso não haja essa div, a div filha irá se referenciar pelo body.
* Podemos movimentar a div (ou outro elemento) com os atributos: *`top`, `bottom`, `left` e `right.`*

![position absolute exemplo](/assets/img/position-absolute-post.png "exemplo position:absolute")

Nesse esquema temos duas *divs:* uma com a *class `.green`* e outra com a *class `.blue`*. Na primeira situação podemos ver que somente a *div* com a *class `.green`* recebe a propriedade *`position:absolute`* e como resultado temos que a *div `.green`* vai para um contexto a frente do contexto da *div `.blue`* a *div* que tem a *class `.blue`* sobe para ocupar o restante do espaço do contexto do browser. Na segunda situação é mostrado que ao se colocar *`position:absolute`* nas duas *divs*, ambas flutuam num contexto diferente do contexto do browser.

## position: fixed;

* O elemento fica fixo na tela, mesmo rolando a página. Tomando como base o ponto superior esquerdo do browser. (Muito usado para deixar o header fixo nos sites)
* É semelhante ao *`position:absolute`*, porém com a diferença de que o elemento pai sempre será o body.

## position: relative;

> O *`position:relative`* faz referência a **ele mesmo**. Ou seja, o seu ponto inicial é o seu próprio canto superior esquerdo.

* Assim como no *`position:absolute`* é possível movimentar a div (ou outro elemento) com os atributos: *`top`, `bottom`, `left` e `right`. No caso  do exemplo abaixo usaremos o `top` e `left.`*

![exemplo position relative](/assets/img/position-relative-post.png "exemplo position relative")

* O deslocamento não afeta outros elementos, portanto um elemento pode ficar em cima do outro(dois elementos podem ocupar o mesmo espaço ou parcelas do mesmo espaço).

![atributos](/assets/img/atributos.png "atributos: top, left, right e bottom")

* **OBS:** Se eu quiser deslocar o elemento para a direção da direita eu preciso dar um valor ao *left*, porque ele vai aplicar esse valor na sua própria região do *left* deslocando assim o elemento para a direita.

## position: sticky;

> É uma mistura entre *`position:relative`* e *`position:fixed`*, onde o elemento irá se comportar uma hora como *`position:relative`*, em outra como *`position:fixed`*

* Aceita as propriedades *`top`, `bottom`, `left` e `right`*.

## Conclusão

Chegamos ao fim do último post de 2020 🙌 espero ter te ajudado em algo.

Se você sabe algo a mais sobre o *`position`* que eu esqueci de falar, por favor não deixe de colocar nos comentários, sempre é bom aprender mais. Dúvidas também são legais, não deixe de perguntar seja no comentário ou se preferir pode me adicionar nas redes sociais.

Boas festas e se cuidem! 🍾🍻