---
title: "Posicionamento de elementos na tela com CSS: Float"
description: Aprendendo a usar a propriedade float em conjunto com o overflow e clear
date: 2020-12-09 03:11:53
image: /assets/img/cover.png
category: css
background: "#009FFF"
color: "#FFFFFF"
---
# Posicionamento de elementos na tela com CSS: Float

# Introdução

Oii 🤗!! Esse é o primeiro post da série sobre posicionamento de elementos com CSS. Pra esse primeiro post vou abordar o uso do Float e todas as particularidades e comportamento que essa propriedade pode trazer. A ideia dessa série é facilitar o entendimento das propriedades pra que assim saibamos lidar da melhor forma com ela. 

Para falar do float é necessário abordar duas outras propriedades que andam de mãos dadas com o float: overflow e clear. Então você verá um exemplo prático do uso do float combinando com essas propriedades. 

## Questionamentos iniciais

Para entendermos melhor o que é o float e suas particularidades é necessário responder as três perguntas abaixo.

1. **O que é o float?** A tradução literal da palavra significa *“flutuar”,* ou seja, o float faz com que o elemento *“flutue*” no html.
2. **Pra quê ele serve?** O float ajuda a montarmos nossos layouts, permitindo que elementos flutuem para os lados.
3. **Quais os comportamentos do float**? O float possui muitas peculiaridades, portanto vamos nos ater nessa pergunta por um tempinho.

## Exemplo prático

Aqui temos 3 elementos: header, nav e h1. Onde o header é o pai dos dois elementos restantes. Vamos analisar 3 situações e comportamentos diferentes, na imagem você pode acompanhar pelos marcadores 1, 2 e 3.

![exemplo do uso do float](/assets/img/position-float.png)

### **Situação 1**

Será aplicado no `h1` um `float: left`. Após a propriedade ser aplicada é possível notar uma mudança de comportamento nos outros elementos e também no próprio `h1`. 

> *O que houve com o h1 que está menor e por cima do nav?* 

Quando aplicamos a **propriedade float é criado um novo contexto**, você pode entender contexto como camada, nesse novo contexto você vai encontrar o elemento em que o float foi aplicado, no caso do nosso exemplo o h1 foi para um novo contexto, um contexto a frente da camada do browser. Podemos observar também que o h1 mudou de tamanho, **antes de ser aplicado o float o h1 ocupava inteiramente a largura do pai, mas depois do float ele passará a ocupar apenas o tamanho do seu conteúdo interno**, uma vez que ele já não está no mesmo contexto do elemento pai. 

> *Por que o header diminuiu o tamanho?* 

**O elemento pai ignora a altura do elemento com a propriedade float e respeita a altura dos demais elementos**. Isso ocorre devido ao novo contexto que foi criado, o pai dele passa a somente enxergar apenas o contexto do browser e não o do float; **o pai não consegue ver o elemento flutuando no novo contexto e admite que ele não está no contexto do browser e passa a respeitar somente a altura dos demais elementos que estão no mesmo contexto.** 

### **Situação 2**

Será aplicado no `nav` um `float: right`. Podemos observar mudanças no comportamento do `nav` e do `header.`

> *O que houve com o nav que diminuiu de tamanho?*

No nav foi aplicado o float e com isso ele passa a flutuar a direita em um novo contexto, a diminuição do tamanho ocorre porque agora **estando em um contexto diferente do pai o nav passa a ter a largura do seu conteúdo interno e não mais a largura do elemento pai.** 

> *Por que o header não está mais lá?*

O único elemento que prendia o header era o nav e após o nav receber a propriedade float e ir para outro contexto o **header fica sem nenhum elemento e com isso ele passa a não ocupar mais o tamanho de ninguém e por isso ele não aparece mais.**

### Situação 3

Podemos observar que o header volta a aparecer e agora os elementos h1 e nav estão no mesmo contexto do header. No `header` será aplicado a propriedade `overflow: hidden`;

> *Por que o header voltou a aparecer e os outros elementos estão respeitando o header?*

O header tinha sumido porque não havia nenhum elemento no mesmo contexto dele, já que o header ocupa o tamanho dos seus filhos. Ao aplicar a propriedade overflow: hidden; no header estamos dizendo ao **elemento pai que ele deve considerar a altura dos elementos com o float**, e para fazer isso é necessário que **o pai recalcule o contexto para poder enxergar os filhos** e com isso ele **passa a mostrar os elementos que não vazam a altura nem a largura todos em um contexto só.** 

## Pontos importantes

* Ao ser aplicado no **elemento X esse elemento vai para frente, numa nova camada (novo contexto) que é criada à frente da antiga**, diferente da camada que ele estava antes do float. **Logo, os outros elementos que estão na camada antiga ficam com espaço sobrando e acabam subindo para ocupar esse espaço.**
* **NUNCA o float esconderá um conteúdo (texto, parágrafo, etc)**
* O elemento antes de aplicar o float ocupava inteiramente a largura do pai, **depois de aplicado o float o tamanho dele passa a ser o tamanho do conteúdo dele.**
* **O elemento pai ignora a altura do elemento com a propriedade float** e respeita a altura dos demais elementos. Isso ocorre devido ao novo contexto que foi criado, o pai dele passa a somente enxergar apenas o contexto do browser e não o do float; o pai não consegue ver o elemento flutuando no novo contexto e admite que ele não está no contexto do browser. **Nesse caso é preciso dizer para o elemento pai considerar a altura do elemento com o float** para fazer isso é preciso fazer com que o pai recalcule o contexto (para que assim ele passe a enxergar os filhos) **para isso se usa a propriedade `overflow: hidden`**
* a propriedade`overflow: hidden` é usada para esconder um elemento e deve ser aplicada no elemento pai. **Caso você defina uma altura ou largura menor/maior do que a do elemento pai ele será escondido, ou seja qualquer elemento que vaze o tamanho do pai é escondido.**
* Caso você queira forçar o posicionamento de algum elemento de texto abaixo dos elementos que estão flutuando opte por  usar a **propriedade `clear`.** O **intuito dessa propriedade é limpar o contexto e fazer com que o posicionamento de textos seja respeitado pelos elementos que estão flutuando**. Essa propriedade pode ter  os seguintes valores: `right`, `left` ou `both`.

# Conclusão

Se você sabe algo a mais sobre o *`float`* que eu esqueci de falar, por favor não deixe de colocar nos comentários, sempre é bom aprender mais. Dúvidas também são legais, não deixe de perguntar seja no comentário ou se preferir pode me adicionar nas redes sociais.\
\
Até o próximo post! 👋👋