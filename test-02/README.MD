# Prova 02

## Qual a diferença entre testes unitários e testes E2E (End to End) em aplicações mobile?

Testes unitários e testes E2E (End-to-End) possuem finalidades semelhantes, mas operam de formas diferentes.

Os testes unitários verificam componentes ou funcionalidades isoladas, garantindo que cada parte do código funcione corretamente de forma independente. Eles podem ser aplicados desde o início do desenvolvimento e não dependem de telas ou fluxos completos. No contexto mobile, aspectos como sensores e notificações push podem trazer desafios específicos em comparação a aplicações desktop ou web.

Já os testes E2E simulam cenários reais de uso da aplicação, como login, atualização de perfil ou preenchimento de formulários. Eles validam a integração entre diferentes partes do sistema, garantindo que a aplicação funcione corretamente como um todo. No mobile, esses testes precisam lidar com interações por toque, gestos, mudanças de orientação e consumo de bateria, tornando sua execução mais complexa do que em ambientes desktop.