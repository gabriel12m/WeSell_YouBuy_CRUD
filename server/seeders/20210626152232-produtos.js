"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Produtos", [
      {
        idproduto: "1",
        nome: "Processador Intel Core i7-10700K 8-Core 3.8GHz c/ Turbo 5.1GHz 16MB Skt1200",
        preco: "325.90",
        fotografia:
          "https://static.pcdiga.com/media/catalog/product/cache/7800e686cb8ccc75494e29411e232323/s/e/sem-ti_tulo-18_2.jpg",
        detalhes:
          "A POTÊNCIA DA 10ª GERAÇÃO <br/> Os processadores Intel Core da 10ª geração oferecem atualizações de desempenho incríveis, para melhorar a produtividade e proporcionar entretenimento surpreendente, com clocks poderosos, otimização inteligente de sistema e muito mais. <br/>PRODUTIVIDADE ACELERADA<br/>Recursos de desempenho inteligente integrados aprendem adaptam-se ao que você faz, direcionando potência dinamicamente para onde ela é mais necessária. Os processadores Intel® Core™ da 10ª geração fornecem a responsividade para fazer mais.<br/>ENTRETENIMENTO PREMIUM<br/>Uma nova arquitetura de gráficos oferece suporte a experiências visuais ultravívidas, como vídeo em HDR 4K e jogos a 1080p. Os processadores Intel® Core™ da 10ª geração permitem experiências de entretenimento nunca vistas.<br/>JOGOS SÉRIOS<br/>Aproveite jogos incríveis com alto FPS, até mesmo enquanto realiza streaming e gravação. Os processadores Intel® Core™ da 10ª geração executam nas plataformas definitivas de jogos.<br/> Socket: LGA 1200<br/>Frequência Base: 3.80 GHz<br/>Frequência Turbo: Até 5.10 GHz<br/>Número Núcleos: 8<br/>Número Threads: 16 <br/> Cache: 16 MB <br/> Gráficos Integrados: Intel® UHD Graphics 630 <br/> Litografia: 14 nm<br/>TDP: 95 W",
        stock: "1",
        marca: "Intel Core",
      },
      {
        idproduto: "2",
        nome: "Processador Intel Core i5-10400F 6-Core 2.9GHz c/ Turbo 4.3GHz 12MB Skt1200",
        preco: "159.90",
        fotografia:
          "https://static.pcdiga.com/media/catalog/product/cache/7800e686cb8ccc75494e29411e232323/5/7/575.jpg",
        detalhes:
          "A POTÊNCIA DA 10ª GERAÇÃO Os processadores Intel Core da 10ª geração oferecem atualizações de desempenho incríveis, para melhorar a produtividade e proporcionar entretenimento surpreendente, com clocks poderosos, otimização inteligente de sistema e muito mais.    PRODUTIVIDADE ACELERADA   Recursos de desempenho inteligente integrados aprendem adaptam-se ao que você faz, direcionando potência dinamicamente para onde ela é mais necessária. Os processadores Intel® Core™ da 10ª geração fornecem a responsividade para fazer mais.   ENTRETENIMENTO PREMIUM   Uma nova arquitetura de gráficos oferece suporte a experiências visuais ultravívidas, como vídeo em HDR 4K e jogos a 1080p. Os processadores Intel® Core™ da 10ª geração permitem experiências de entretenimento nunca vistas.  JOGOS SÉRIOS  Aproveite jogos incríveis com alto FPS, até mesmo enquanto realiza streaming e gravação. Os processadores Intel® Core™ da 10ª geração executam nas plataformas definitivas de jogos.  Socket: LGA 1200 Frequência Base: 2.90 GHz  Frequência Turbo: Até 4.30 GHz   Número Núcleos: 6   Número Threads: 12   Cache: 12 MB Litografia: 14 nmTDP: 65 W",
        stock: "1",
        marca: "Intel Core",
      },
      {
        idproduto: "3",
        nome: "Processador Intel Core i9-9900KF Octa-Core 3.6GHz c/ Turbo 5.0GHz 16MB Skt1151",
        preco: "298.90",
        fotografia:
          "https://static.pcdiga.com/media/catalog/product/cache/7800e686cb8ccc75494e29411e232323/1/_/1_13_1.jpg",
        detalhes:
          "PROJETADO PARA OS MELHORES GAMERS DO MUNDO  Usufrua de desempenho excepcional, entretenimento imersivo e conveniência simples com os processadores Intel Core da 9ª Geração. O processador i9 9900KF amplia todos os recursos que os utilizadores adoram nos CPUs da geração anterior com inovações ainda mais avançadas que oferecem novos níveis de desempenho que o colocam no seu computador em vários formatos. O i9 9900KF apresenta todas as mais recentes tecnologias da Intel para permitir que você tenha a melhor experiência em computação, e este CPU em particular é desbloqueado, permitindo que você faça overclock para capacidade adicional em jogos ou de produção.    JOGUE, FAÇA STREAM E GRAVE SEM COMPROMISSO.  Os processadores Intel Core da 9ª Geração redefinem o desempenho do PC desktop convencional. O i9 9900KF possui oito núcleos para maior capacidade de processamento e multitarefa sem esforço. O recurso Desbloqueado neste chip permite overclocking, permitindo ajustar o desempenho. A tecnologia Intel Turbo Boost 2.0 também aumentou a frequência turbo máxima de 5,0 GHz e até 16 MB de memória cache para uma jogabilidade e resposta ultra-suaves. O processador da 9ª geração i9 permite-lhe desfrutar de excelentes jogos e experiências de VR.         FAÇA STREAM E JOGUE EM 4K UHD     Os computadores desktop baseados nos processadores Intel Core da 9ª Geração integram tecnologias avançadas que trazem conteúdo premium de alta qualidade para o seu desktop para oferecer streaming suave de entretenimento 4K UHD premium para o seu PC.         Socket: LGA 1151  Frequência Base: 3.60 GHz  Frequência Turbo: Até 5.00 GHz Número Núcleos: 8  Número Threads: 16   Cache: 16 MB  Litografia: 14 nmTDP: 95 W",
        stock: "1",
        marca: "Intel Core",
      },
      {
        idproduto: "4",
        nome: "Processador Intel Core i7-10700K 8-Core 3.8GHz c/ Turbo 5.1GHz 16MB Skt1200",
        preco: "225.90",
        fotografia:
          "https://static.pcdiga.com/media/catalog/product/cache/7800e686cb8ccc75494e29411e232323/s/e/sem-ti_tulo-18_2.jpg",
        detalhes:
          "A POTÊNCIA DA 10ª GERAÇÃO <br/> Os processadores Intel Core da 10ª geração oferecem atualizações de desempenho incríveis, para melhorar a produtividade e proporcionar entretenimento surpreendente, com clocks poderosos, otimização inteligente de sistema e muito mais. <br/>PRODUTIVIDADE ACELERADA<br/>Recursos de desempenho inteligente integrados aprendem adaptam-se ao que você faz, direcionando potência dinamicamente para onde ela é mais necessária. Os processadores Intel® Core™ da 10ª geração fornecem a responsividade para fazer mais.<br/>ENTRETENIMENTO PREMIUM<br/>Uma nova arquitetura de gráficos oferece suporte a experiências visuais ultravívidas, como vídeo em HDR 4K e jogos a 1080p. Os processadores Intel® Core™ da 10ª geração permitem experiências de entretenimento nunca vistas.<br/>JOGOS SÉRIOS<br/>Aproveite jogos incríveis com alto FPS, até mesmo enquanto realiza streaming e gravação. Os processadores Intel® Core™ da 10ª geração executam nas plataformas definitivas de jogos.<br/> Socket: LGA 1200<br/>Frequência Base: 3.80 GHz<br/>Frequência Turbo: Até 5.10 GHz<br/>Número Núcleos: 8<br/>Número Threads: 16 <br/> Cache: 16 MB <br/> Gráficos Integrados: Intel® UHD Graphics 630 <br/> Litografia: 14 nm<br/>TDP: 95 W",
        stock: "0",
        marca: "Intel Core",
      },
      {
        idproduto: "5",
        nome: "Processador Intel Core i5-10400F 6-Core 2.9GHz c/ Turbo 4.3GHz 12MB Skt1200",
        preco: "59.90",
        fotografia:
          "https://static.pcdiga.com/media/catalog/product/cache/7800e686cb8ccc75494e29411e232323/5/7/575.jpg",
        detalhes:
          "A POTÊNCIA DA 10ª GERAÇÃO Os processadores Intel Core da 10ª geração oferecem atualizações de desempenho incríveis, para melhorar a produtividade e proporcionar entretenimento surpreendente, com clocks poderosos, otimização inteligente de sistema e muito mais.    PRODUTIVIDADE ACELERADA   Recursos de desempenho inteligente integrados aprendem adaptam-se ao que você faz, direcionando potência dinamicamente para onde ela é mais necessária. Os processadores Intel® Core™ da 10ª geração fornecem a responsividade para fazer mais.   ENTRETENIMENTO PREMIUM   Uma nova arquitetura de gráficos oferece suporte a experiências visuais ultravívidas, como vídeo em HDR 4K e jogos a 1080p. Os processadores Intel® Core™ da 10ª geração permitem experiências de entretenimento nunca vistas.  JOGOS SÉRIOS  Aproveite jogos incríveis com alto FPS, até mesmo enquanto realiza streaming e gravação. Os processadores Intel® Core™ da 10ª geração executam nas plataformas definitivas de jogos.  Socket: LGA 1200 Frequência Base: 2.90 GHz  Frequência Turbo: Até 4.30 GHz   Número Núcleos: 6   Número Threads: 12   Cache: 12 MB Litografia: 14 nmTDP: 65 W",
        stock: "0",
        marca: "Intel Core",
      },
      {
        idproduto: "6",
        nome: "Processador Intel Core i9-9900KF Octa-Core 3.6GHz c/ Turbo 5.0GHz 16MB Skt1151",
        preco: "198.90",
        fotografia:
          "https://static.pcdiga.com/media/catalog/product/cache/7800e686cb8ccc75494e29411e232323/1/_/1_13_1.jpg",
        detalhes:
          "PROJETADO PARA OS MELHORES GAMERS DO MUNDO  Usufrua de desempenho excepcional, entretenimento imersivo e conveniência simples com os processadores Intel Core da 9ª Geração. O processador i9 9900KF amplia todos os recursos que os utilizadores adoram nos CPUs da geração anterior com inovações ainda mais avançadas que oferecem novos níveis de desempenho que o colocam no seu computador em vários formatos. O i9 9900KF apresenta todas as mais recentes tecnologias da Intel para permitir que você tenha a melhor experiência em computação, e este CPU em particular é desbloqueado, permitindo que você faça overclock para capacidade adicional em jogos ou de produção.    JOGUE, FAÇA STREAM E GRAVE SEM COMPROMISSO.  Os processadores Intel Core da 9ª Geração redefinem o desempenho do PC desktop convencional. O i9 9900KF possui oito núcleos para maior capacidade de processamento e multitarefa sem esforço. O recurso Desbloqueado neste chip permite overclocking, permitindo ajustar o desempenho. A tecnologia Intel Turbo Boost 2.0 também aumentou a frequência turbo máxima de 5,0 GHz e até 16 MB de memória cache para uma jogabilidade e resposta ultra-suaves. O processador da 9ª geração i9 permite-lhe desfrutar de excelentes jogos e experiências de VR.         FAÇA STREAM E JOGUE EM 4K UHD     Os computadores desktop baseados nos processadores Intel Core da 9ª Geração integram tecnologias avançadas que trazem conteúdo premium de alta qualidade para o seu desktop para oferecer streaming suave de entretenimento 4K UHD premium para o seu PC.         Socket: LGA 1151  Frequência Base: 3.60 GHz  Frequência Turbo: Até 5.00 GHz Número Núcleos: 8  Número Threads: 16   Cache: 16 MB  Litografia: 14 nmTDP: 95 W",
        stock: "0",
        marca: "Intel Core",
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Produtos", null, {});
  },
};
