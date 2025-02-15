# Prova 02

## Qual a diferença entre testes unitários e testes E2E (End to End) em aplicações mobile?

Testes unitários e testes E2E (End-to-End) possuem finalidades semelhantes, mas operam de formas diferentes.

Os testes unitários verificam componentes ou funcionalidades isoladas, garantindo que cada parte do código funcione corretamente de forma independente. Eles podem ser aplicados desde o início do desenvolvimento e não dependem de telas ou fluxos completos. No contexto mobile, aspectos como sensores e notificações push podem trazer desafios específicos em comparação a aplicações desktop ou web.

Já os testes E2E simulam cenários reais de uso da aplicação, como login, atualização de perfil ou preenchimento de formulários. Eles validam a integração entre diferentes partes do sistema, garantindo que a aplicação funcione corretamente como um todo. No mobile, esses testes precisam lidar com interações por toque, gestos, mudanças de orientação e consumo de bateria, tornando sua execução mais complexa do que em ambientes desktop.

## Ambiente

Os testes foram desenvolvidos e executas em um ambiente emulado e um celular real, mas ambos Android.

## Realizando os testes

### Dependências

- Maestro
- Jest

### Instalando dependências

#### Maestro (Linux)

Siga os passos de:
https://docs.maestro.dev/getting-started/installing-maestro

#### Jest

A biblioteca Jest já vem listada como dependências do projeto, portanto basta executar o comando abaixo para que ela seja instalada:
```
yarn install
```
### Executando os testes (com os passos anteriores realizados)

### Unitários

#### Execute:
```
yarn test
```

Desta forma os testes unitários serão executados.

### E2E - celular físico

Para executar os testes com um celular físio, é necessário que o modo de depuração via USB nas opções de desenvolvedor seja habilitado. Pesquise sobre o tema e habilite a opção de acordo com o seu celular.

#### Execute:
```
yarn start
```

Assim que o expo carregue a aplicação, acesse-a por meio do QR Code.

Com o celular devidamente configurado e conectado via USB, abra a aplicação, permaneça na tela de login e execute (na raiz do projeto):

```
maestro test __tests__/E2E/{caminho_do_teste}
```
É importante dizer que existem vários testes e você deve passar o caminho daquele que deseja executar.

## Atenção !!

Todos os testes E2E consideram um fluxo que se inicia na tela de login. Portanto, caso seja necessário realizar outro teste, volte para esta tela de forma que o fluxo não seja comprometido.

### E2E - Emulador android

Com o android Studio instalado e configurado, siga os passos a seguir.

#### Importante:
O emulador deve possuir teclado virtual também. Caso contrário, alguns testes podem agir inesperadamente.

#### Execute:
```
yarn start
```
Assim que a aplicação carregar, pressione 'a' para android e o emulador deve abrir o sistema.

Na tela inicial, execute:
```
maestro test __tests__/E2E/{caminho_do_teste}
```
É importante dizer que existem vários testes e você deve passar o caminho daquele que deseja executar.

## Atenção !!

Todos os testes E2E consideram um fluxo que se inicia na tela de login. Portanto, caso seja necessário realizar outro teste, volte para esta tela de forma que o fluxo não seja comprometido.
