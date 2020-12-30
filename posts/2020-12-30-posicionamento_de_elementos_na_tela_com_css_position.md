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

Oi galera! Aqui vamos pro último post de 2020. Nesse post vou abordar a propriedade position e suas particularidades e comportamentos que a propriedade irá trazer. A principio a propriedade position pode assumir os valores: static, absolute, fixed, relative e sticky. Vamos entender um pouco sobre cada valor desses.



## position: static;

* Essa é o valor padrão, já vem por default e não é necessário declará-la, a não ser que você queira mudar o tipo de position.
* Ele não muda em nada o comportamento padrão do elemento.
* Com a *`position:static`* não adianta definir as propriedades : *`top, bottom, left e right`* pois ela simplesmente não mudará de lugar.

## position: absolute;

* O *p`osition:absolute`* faz referência ao **elemento pai**. Tomando como **base o ponto superior esquerdo do elemento pai.** E esse mesmo pai deve ter um position definido, porém deve ser diferente de static.
* Quando definido cria um novo contexto que fica a frente do browser.
* Logo, a div com *`position:absolute`* referencia sua posição pelo div mais próximo que o envolve e que também tenha um position definido, caso não haja essa div, a div filha irá se referenciar pelo body.

  >

## position: relative;

## position: fixed;

## position: sticky;