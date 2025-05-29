import { ModuleType } from '../types';

const modules: ModuleType[] = [
  {
    id: 'criacao',
    title: 'A Criação',
    description: 'Aprenda sobre como Deus criou o mundo e tudo o que nele existe.',
    coverImage: 'https://raw.githubusercontent.com/storyset/assets/main/religious/creation.svg',
    story: [
      {
        title: 'No Princípio',
        content: 'No princípio, Deus criou os céus e a terra. A terra, porém, estava sem forma e vazia. Havia trevas sobre a face do abismo, e o Espírito de Deus pairava sobre a face das águas.\n\nDeus disse: "Haja luz!" E houve luz. Deus viu que a luz era boa e separou a luz das trevas. Chamou à luz "dia" e às trevas, "noite". Houve tarde e manhã: o primeiro dia.',
        image: 'https://raw.githubusercontent.com/storyset/assets/main/religious/universe.svg'
      },
      {
        title: 'O Céu e as Águas',
        content: 'Deus disse: "Haja um firmamento no meio das águas, e separe ele as águas das águas". E assim se fez. Deus chamou ao firmamento "céu". Houve tarde e manhã: o segundo dia.\n\nDeus disse: "Ajuntem-se as águas debaixo dos céus num só lugar, e apareça a parte seca". E assim se fez. Chamou à parte seca "terra" e ao ajuntamento das águas, "mares". E Deus viu que isso era bom.',
        image: 'https://raw.githubusercontent.com/storyset/assets/main/religious/sky-and-water.svg'
      },
      {
        title: 'Plantas e Árvores',
        content: 'Deus disse: "Produza a terra vegetação, ervas que deem semente e árvores frutíferas que deem fruto segundo a sua espécie, cuja semente esteja nele, sobre a terra". E assim se fez.\n\nA terra produziu vegetação, ervas que davam semente segundo a sua espécie e árvores que davam fruto, cuja semente estava nele, segundo a sua espécie. Deus viu que isso era bom. Houve tarde e manhã: o terceiro dia.',
        image: 'https://raw.githubusercontent.com/storyset/assets/main/religious/garden.svg'
      },
      {
        title: 'O Sol, a Lua e as Estrelas',
        content: 'Deus disse: "Haja luzeiros no firmamento dos céus, para fazerem separação entre o dia e a noite; sejam eles para sinais e para estações, para dias e anos."\n\nDeus fez os dois grandes luzeiros: o maior para governar o dia, o menor para governar a noite; e fez também as estrelas. Deus viu que isso era bom. Houve tarde e manhã: o quarto dia.',
        image: 'https://raw.githubusercontent.com/storyset/assets/main/religious/stars.svg'
      },
      {
        title: 'Os Animais',
        content: 'Deus disse: "Povoem-se as águas de enxames de seres viventes; e voem as aves sobre a terra, sob o firmamento dos céus". Deus criou as grandes criaturas marinhas e todos os seres viventes que se movem, os quais povoavam as águas, segundo as suas espécies; e todas as aves, segundo as suas espécies. Deus viu que isso era bom.\n\nDeus disse: "Produza a terra seres viventes, segundo a sua espécie: animais domésticos, répteis e animais selvagens". E assim se fez. Deus viu que isso era bom.',
        image: 'https://raw.githubusercontent.com/storyset/assets/main/religious/animals.svg'
      },
      {
        title: 'O Homem e a Mulher',
        content: 'Deus disse: "Façamos o homem à nossa imagem, conforme a nossa semelhança. Domine ele sobre os peixes do mar, sobre as aves do céu, sobre os animais domésticos, sobre toda a terra e sobre todos os répteis que rastejam pela terra".\n\nCriou Deus, pois, o homem à sua imagem, à imagem de Deus o criou; homem e mulher os criou. Deus os abençoou e lhes disse: "Sejam férteis e multipliquem-se! Encham e subjuguem a terra! Dominem sobre os peixes do mar, sobre as aves do céu e sobre todos os animais que se movem pela terra".',
        image: 'https://raw.githubusercontent.com/storyset/assets/main/religious/adam-and-eve.svg'
      },
      {
        title: 'O Descanso de Deus',
        content: 'Assim foram concluídos os céus e a terra com todo o seu exército. No sétimo dia, Deus já havia concluído a obra que realizara, e nesse dia descansou.\n\nAbençoou Deus o sétimo dia e o santificou, porque nele descansou de toda a obra que realizara na criação.\n\nEsta é a história da criação dos céus e da terra.',
        image: 'https://raw.githubusercontent.com/storyset/assets/main/religious/rest.svg'
      }
    ],
    quiz: [
      {
        text: 'O que Deus criou no primeiro dia?',
        options: [
          'O sol e a lua',
          'Os animais',
          'A luz e as trevas',
          'As plantas'
        ],
        correctOption: 2,
        explanation: 'No primeiro dia, Deus criou a luz e separou a luz das trevas, chamando à luz "dia" e às trevas "noite".'
      },
      {
        text: 'Quantos dias Deus levou para criar todas as coisas?',
        options: [
          '3 dias',
          '6 dias',
          '7 dias',
          '40 dias'
        ],
        correctOption: 1,
        explanation: 'Deus criou tudo em 6 dias e descansou no sétimo dia.'
      },
      {
        text: 'À imagem de quem o ser humano foi criado?',
        options: [
          'Dos anjos',
          'Dos animais',
          'De Deus',
          'Da natureza'
        ],
        correctOption: 2,
        explanation: 'A Bíblia diz que Deus criou o homem à sua própria imagem e semelhança.'
      },
      {
        text: 'O que Deus fez no sétimo dia?',
        options: [
          'Criou o homem',
          'Criou os animais',
          'Descansou',
          'Criou o universo'
        ],
        correctOption: 2,
        explanation: 'No sétimo dia, Deus descansou de toda a obra que havia realizado na criação.'
      },
      {
        text: 'Qual foi a primeira coisa que Deus criou?',
        options: [
          'O homem',
          'Os céus e a terra',
          'Os animais',
          'O sol e a lua'
        ],
        correctOption: 1,
        explanation: 'A Bíblia começa dizendo: "No princípio, Deus criou os céus e a terra".'
      }
    ]
  },
  {
    id: 'jesus',
    title: 'A História de Jesus',
    description: 'Conheça a vida, os ensinamentos e o amor de Jesus Cristo.',
    coverImage: 'https://raw.githubusercontent.com/storyset/assets/main/religious/jesus-birth.svg',
    story: [
      {
        title: 'O Nascimento de Jesus',
        content: 'Há mais de 2000 anos, em uma cidade chamada Nazaré, vivia uma jovem chamada Maria. Um dia, o anjo Gabriel apareceu a ela e disse: "Alegre-se, cheia de graça! O Senhor está com você!"\n\nO anjo disse a Maria que ela teria um filho e deveria dar-lhe o nome de Jesus. Este filho seria o Filho do Altíssimo e seu reino não teria fim. Maria estava noiva de José, um carpinteiro.',
        image: 'https://raw.githubusercontent.com/storyset/assets/main/religious/annunciation.svg'
      },
      {
        title: 'Viagem a Belém',
        content: 'Naquela época, o imperador Augusto ordenou um recenseamento em todo o império romano. José e Maria tiveram que ir até Belém, a cidade de Davi, pois José era descendente de Davi.\n\nQuando chegaram a Belém, não havia lugar para eles na hospedaria. O bebê Jesus nasceu em um estábulo e foi colocado em uma manjedoura.',
        image: 'https://raw.githubusercontent.com/storyset/assets/main/religious/bethlehem.svg'
      },
      {
        title: 'Os Pastores e os Anjos',
        content: 'Naquela noite, havia pastores nos campos próximos, cuidando de seus rebanhos. Um anjo do Senhor apareceu a eles, e a glória do Senhor brilhou ao redor deles.\n\nO anjo disse: "Não tenham medo. Estou trazendo boas notícias de grande alegria para todo o povo. Hoje, na cidade de Davi, nasceu o Salvador, que é Cristo, o Senhor". De repente, uma multidão de anjos apareceu, louvando a Deus.',
        image: 'https://raw.githubusercontent.com/storyset/assets/main/religious/shepherds.svg'
      },
      {
        title: 'Jesus Cresce em Sabedoria',
        content: 'Jesus cresceu em Nazaré com seus pais, Maria e José. A Bíblia nos diz que Jesus crescia em sabedoria, estatura e graça diante de Deus e dos homens.\n\nQuando Jesus tinha 12 anos, foi com seus pais a Jerusalém para a festa da Páscoa. Quando a festa terminou, Maria e José partiram para casa, mas Jesus ficou em Jerusalém sem que eles soubessem. Depois de três dias, o encontraram no templo, sentado entre os mestres, ouvindo-os e fazendo-lhes perguntas.',
        image: 'https://raw.githubusercontent.com/storyset/assets/main/religious/young-jesus.svg'
      },
      {
        title: 'O Batismo de Jesus',
        content: 'Quando Jesus tinha cerca de 30 anos, foi ao rio Jordão para ser batizado por João Batista. João estava pregando o arrependimento e batizando as pessoas no rio.\n\nQuando Jesus foi batizado, os céus se abriram, e o Espírito de Deus desceu como uma pomba sobre ele. Uma voz do céu disse: "Este é o meu Filho amado, em quem me agrado".',
        image: 'https://raw.githubusercontent.com/storyset/assets/main/religious/baptism.svg'
      },
      {
        title: 'Os Milagres de Jesus',
        content: 'Jesus percorreu toda a Galileia, ensinando nas sinagogas, pregando as boas novas do Reino e curando todas as enfermidades e doenças entre o povo.\n\nEle curou leprosos, fez cegos enxergarem, fez surdos ouvirem, ressuscitou mortos e alimentou multidões com apenas alguns pães e peixes. Suas ações demonstravam seu poder divino e seu amor pelas pessoas.',
        image: 'https://raw.githubusercontent.com/storyset/assets/main/religious/miracles.svg'
      },
      {
        title: 'A Última Ceia',
        content: 'Na véspera de sua crucificação, Jesus reuniu seus discípulos para uma última refeição, conhecida como a Última Ceia. Durante essa refeição, Jesus pegou o pão, deu graças, partiu-o e o deu aos discípulos, dizendo: "Isto é o meu corpo, que é dado por vocês; façam isto em memória de mim".\n\nDo mesmo modo, depois da ceia, tomou o cálice e disse: "Este cálice é a nova aliança no meu sangue, que é derramado por vocês".',
        image: 'https://raw.githubusercontent.com/storyset/assets/main/religious/last-supper.svg'
      },
      {
        title: 'A Cruz e a Ressurreição',
        content: 'Jesus foi preso, julgado injustamente e condenado à morte por crucificação. Ele morreu na cruz para perdoar nossos pecados e nos reconciliar com Deus.\n\nTrês dias depois de sua morte, algumas mulheres foram ao túmulo e o encontraram vazio. Um anjo lhes disse que Jesus havia ressuscitado dos mortos! Mais tarde, Jesus apareceu a seus discípulos e a muitas outras pessoas.\n\nAntes de voltar para o céu, Jesus ordenou a seus seguidores que levassem suas boas novas a todas as nações.',
        image: 'https://raw.githubusercontent.com/storyset/assets/main/religious/resurrection.svg'
      }
    ],
    quiz: [
      {
        text: 'Onde Jesus nasceu?',
        options: [
          'Nazaré',
          'Jerusalém',
          'Belém',
          'Roma'
        ],
        correctOption: 2,
        explanation: 'Jesus nasceu em Belém, como estava profetizado no Antigo Testamento.'
      },
      {
        text: 'Quem batizou Jesus?',
        options: [
          'Pedro',
          'João Batista',
          'Maria',
          'José'
        ],
        correctOption: 1,
        explanation: 'Jesus foi batizado por João Batista no rio Jordão.'
      },
      {
        text: 'O que desceu sobre Jesus quando ele foi batizado?',
        options: [
          'Uma estrela',
          'Um anjo',
          'Uma pomba (o Espírito Santo)',
          'Uma águia'
        ],
        correctOption: 2,
        explanation: 'Quando Jesus foi batizado, o Espírito Santo desceu sobre ele na forma de uma pomba.'
      },
      {
        text: 'Quantos dias Jesus ficou no deserto sendo tentado?',
        options: [
          '10 dias',
          '30 dias',
          '40 dias',
          '7 dias'
        ],
        correctOption: 2,
        explanation: 'Jesus jejuou por 40 dias no deserto, onde foi tentado pelo diabo.'
      },
      {
        text: 'Depois de morrer na cruz, quando Jesus ressuscitou?',
        options: [
          'No mesmo dia',
          'Depois de um ano',
          'Depois de três dias',
          'Ele não ressuscitou'
        ],
        correctOption: 2,
        explanation: 'Jesus ressuscitou ao terceiro dia após sua morte, como havia prometido.'
      }
    ]
  },
  {
    id: 'sacramentos',
    title: 'Os Sacramentos',
    description: 'Descubra os sete sacramentos da Igreja Católica e seu significado.',
    coverImage: 'https://raw.githubusercontent.com/storyset/assets/main/religious/sacraments.svg',
    story: [
      {
        title: 'O Que São os Sacramentos?',
        content: 'Os sacramentos são sinais sagrados instituídos por Jesus Cristo para nos transmitir sua graça. São gestos e palavras que nos ajudam a entender e experimentar o amor de Deus em momentos especiais de nossa vida.\n\nA Igreja Católica celebra sete sacramentos: Batismo, Eucaristia, Crisma, Reconciliação, Unção dos Enfermos, Matrimônio e Ordem.',
        image: 'https://raw.githubusercontent.com/storyset/assets/main/religious/church-symbols.svg'
      },
      {
        title: 'O Batismo',
        content: 'O Batismo é o primeiro sacramento que recebemos. Através dele, nos tornamos filhos de Deus e membros da Igreja. O Batismo nos limpa do pecado original e nos dá uma nova vida em Cristo.\n\nNo Batismo, a pessoa é mergulhada na água ou recebe água sobre a cabeça enquanto o sacerdote ou diácono diz: "Eu te batizo em nome do Pai, e do Filho, e do Espírito Santo".',
        image: 'https://raw.githubusercontent.com/storyset/assets/main/religious/baptism-ceremony.svg'
      },
      {
        title: 'A Eucaristia',
        content: 'A Eucaristia, também chamada de Comunhão, é o sacramento em que recebemos o Corpo e o Sangue de Jesus Cristo sob as aparências de pão e vinho. É o centro da vida cristã.\n\nJesus instituiu a Eucaristia na Última Ceia, quando pegou o pão, deu graças, partiu-o e o deu aos discípulos, dizendo: "Isto é o meu corpo". Depois, tomou o cálice de vinho e disse: "Este é o meu sangue".',
        image: 'https://raw.githubusercontent.com/storyset/assets/main/religious/eucharist.svg'
      },
      {
        title: 'A Crisma',
        content: 'A Crisma, ou Confirmação, é o sacramento que fortalece e completa a graça do Batismo. Na Crisma, recebemos o Espírito Santo de uma maneira especial, que nos dá força para sermos verdadeiras testemunhas de Jesus.\n\nDurante a Crisma, o bispo impõe as mãos sobre a cabeça da pessoa e a unge com o óleo do crisma, dizendo: "Recebe, por este sinal, o Espírito Santo, o dom de Deus".',
        image: 'https://raw.githubusercontent.com/storyset/assets/main/religious/confirmation.svg'
      },
      {
        title: 'A Reconciliação',
        content: 'A Reconciliação, também chamada de Confissão ou Penitência, é o sacramento em que recebemos o perdão de Deus pelos nossos pecados. Quando nos confessamos, reconhecemos nossas faltas e expressamos nosso arrependimento.\n\nJesus deu aos apóstolos o poder de perdoar pecados quando disse: "Recebam o Espírito Santo. Os pecados daqueles que vocês perdoarem serão perdoados".',
        image: 'https://raw.githubusercontent.com/storyset/assets/main/religious/confession.svg'
      },
      {
        title: 'A Unção dos Enfermos',
        content: 'A Unção dos Enfermos é o sacramento que traz conforto, paz e força às pessoas que estão doentes ou em perigo de morte. Através deste sacramento, a Igreja ora pelo doente, pedindo a Deus que o cure e o fortaleça.\n\nDurante a Unção dos Enfermos, o sacerdote unge a testa e as mãos do doente com óleo abençoado, enquanto faz uma oração especial.',
        image: 'https://raw.githubusercontent.com/storyset/assets/main/religious/anointing.svg'
      },
      {
        title: 'O Matrimônio',
        content: 'O Matrimônio é o sacramento pelo qual um homem e uma mulher se unem diante de Deus para formar uma família. No Matrimônio, os noivos prometem amar-se e respeitar-se por toda a vida.\n\nDurante a cerimônia do Matrimônio, os noivos trocam seus consentimentos e alianças, simbolizando seu compromisso mútuo e com Deus.',
        image: 'https://raw.githubusercontent.com/storyset/assets/main/religious/marriage.svg'
      },
      {
        title: 'A Ordem',
        content: 'A Ordem é o sacramento pelo qual alguns homens são consagrados para servir a Igreja como diáconos, padres ou bispos. Através deste sacramento, eles recebem uma graça especial para guiar e servir o povo de Deus.\n\nDurante a ordenação, o bispo impõe as mãos sobre a cabeça do candidato e faz uma oração de consagração, pedindo a Deus que envie o Espírito Santo sobre ele.',
        image: 'https://raw.githubusercontent.com/storyset/assets/main/religious/ordination.svg'
      }
    ],
    quiz: [
      {
        text: 'Quantos sacramentos existem na Igreja Católica?',
        options: [
          'Três',
          'Cinco',
          'Sete',
          'Doze'
        ],
        correctOption: 2,
        explanation: 'A Igreja Católica celebra sete sacramentos: Batismo, Eucaristia, Crisma, Reconciliação, Unção dos Enfermos, Matrimônio e Ordem.'
      },
      {
        text: 'Qual é o primeiro sacramento que recebemos?',
        options: [
          'Eucaristia',
          'Batismo',
          'Crisma',
          'Reconciliação'
        ],
        correctOption: 1,
        explanation: 'O Batismo é o primeiro sacramento que recebemos, através do qual nos tornamos filhos de Deus e membros da Igreja.'
      },
      {
        text: 'O que recebemos na Eucaristia?',
        options: [
          'Apenas pão e vinho',
          'Uma bênção especial',
          'O Corpo e o Sangue de Jesus',
          'O Espírito Santo'
        ],
        correctOption: 2,
        explanation: 'Na Eucaristia, recebemos o Corpo e o Sangue de Jesus Cristo sob as aparências de pão e vinho.'
      },
      {
        text: 'Qual sacramento nos dá uma força especial do Espírito Santo?',
        options: [
          'Batismo',
          'Crisma',
          'Reconciliação',
          'Matrimônio'
        ],
        correctOption: 1,
        explanation: 'A Crisma, ou Confirmação, é o sacramento que nos dá uma força especial do Espírito Santo para sermos testemunhas de Jesus.'
      },
      {
        text: 'Qual sacramento é conhecido também como Confissão?',
        options: [
          'Batismo',
          'Eucaristia',
          'Reconciliação',
          'Unção dos Enfermos'
        ],
        correctOption: 2,
        explanation: 'A Reconciliação, também chamada de Confissão ou Penitência, é o sacramento em que recebemos o perdão de Deus pelos nossos pecados.'
      }
    ]
  },
  {
    id: 'oracoes',
    title: 'As Orações Básicas',
    description: 'Aprenda as principais orações da fé católica e como conversar com Deus.',
    coverImage: 'https://raw.githubusercontent.com/storyset/assets/main/religious/prayer.svg',
    story: [
      {
        title: 'O Que é a Oração?',
        content: 'A oração é nossa conversa com Deus. Através da oração, falamos com Deus, ouvimos sua voz em nosso coração e construímos um relacionamento com Ele. Podemos orar em qualquer lugar e a qualquer momento.\n\nJesus nos ensinou a importância da oração. Ele mesmo costumava se retirar para lugares solitários para orar. Ele disse: "Peçam, e lhes será dado; busquem, e encontrarão; batam, e a porta lhes será aberta".',
        image: 'https://raw.githubusercontent.com/storyset/assets/main/religious/praying-hands.svg'
      },
      {
        title: 'O Sinal da Cruz',
        content: 'O Sinal da Cruz é um gesto que nos lembra o amor de Deus por nós e a nossa fé na Santíssima Trindade. É a oração mais simples e frequente que fazemos.\n\nPara fazer o Sinal da Cruz, tocamos a testa, o peito, o ombro esquerdo e depois o direito, dizendo: "Em nome do Pai, e do Filho, e do Espírito Santo. Amém".',
        image: 'https://raw.githubusercontent.com/storyset/assets/main/religious/cross-sign.svg'
      },
      {
        title: 'O Pai Nosso',
        content: 'O Pai Nosso é a oração que Jesus mesmo nos ensinou. Quando seus discípulos pediram que ele os ensinasse a orar, Jesus respondeu: "Quando vocês orarem, digam: Pai nosso, que estás nos céus..."\n\nNesta oração, reconhecemos Deus como nosso Pai amoroso, expressamos nosso desejo de que sua vontade seja feita, pedimos o que precisamos para viver e pedimos perdão pelos nossos pecados.',
        image: 'https://raw.githubusercontent.com/storyset/assets/main/religious/lords-prayer.svg'
      },
      {
        title: 'A Ave Maria',
        content: 'A Ave Maria é uma bela oração dedicada à Mãe de Jesus. Ela é composta por duas partes: a saudação do anjo Gabriel a Maria ("Ave, cheia de graça, o Senhor é contigo") e a saudação de Isabel a Maria ("Bendita és tu entre as mulheres e bendito é o fruto do teu ventre").\n\nNa segunda parte da oração, pedimos a intercessão de Maria: "Santa Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora da nossa morte. Amém".',
        image: 'https://raw.githubusercontent.com/storyset/assets/main/religious/mary-prayer.svg'
      },
      {
        title: 'O Glória',
        content: 'O Glória é uma oração de louvor à Santíssima Trindade. Através dela, damos glória a Deus Pai, Filho e Espírito Santo.\n\n"Glória ao Pai, ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém."',
        image: 'https://raw.githubusercontent.com/storyset/assets/main/religious/glory.svg'
      },
      {
        title: 'O Credo',
        content: 'O Credo é a oração em que professamos nossa fé. Existem duas versões principais: o Credo dos Apóstolos e o Credo Niceno-Constantinopolitano.\n\nNo Credo, afirmamos nossa crença em Deus Pai, em Jesus Cristo, no Espírito Santo, na Igreja Católica, na comunhão dos santos, no perdão dos pecados, na ressurreição da carne e na vida eterna.',
        image: 'https://raw.githubusercontent.com/storyset/assets/main/religious/creed.svg'
      },
      {
        title: 'O Ato de Contrição',
        content: 'O Ato de Contrição é uma oração em que expressamos nosso arrependimento pelos pecados cometidos e nosso desejo de mudar de vida.\n\n"Meu Deus, eu me arrependo de todo o coração de vos ter ofendido, porque sois tão bom e amável. Prometo, com a vossa graça, não voltar mais a pecar. Meu Jesus, misericórdia!"',
        image: 'https://raw.githubusercontent.com/storyset/assets/main/religious/contrition.svg'
      },
      {
        title: 'Como Rezar o Terço',
        content: 'O Terço é uma parte do Rosário, uma das orações mais tradicionais da Igreja Católica. Rezar o Terço nos ajuda a meditar sobre a vida de Jesus e de Maria.\n\nPara rezar o Terço, começamos com o Sinal da Cruz, depois rezamos o Credo, um Pai Nosso, três Ave Marias e um Glória. Em seguida, anunciamos o primeiro mistério, rezamos um Pai Nosso, dez Ave Marias e um Glória. Repetimos isso para os cinco mistérios.\n\nOs mistérios do Rosário são divididos em quatro grupos: Gozosos, Luminosos, Dolorosos e Gloriosos.',
        image: 'https://raw.githubusercontent.com/storyset/assets/main/religious/rosary.svg'
      }
    ],
    quiz: [
      {
        text: 'Quem nos ensinou a oração do Pai Nosso?',
        options: [
          'Maria',
          'Pedro',
          'Jesus',
          'João Batista'
        ],
        correctOption: 2,
        explanation: 'Jesus ensinou a oração do Pai Nosso aos seus discípulos quando eles pediram que ele os ensinasse a orar.'
      },
      {
        text: 'O que dizemos ao fazer o Sinal da Cruz?',
        options: [
          'Ave Maria, cheia de graça',
          'Em nome do Pai, e do Filho, e do Espírito Santo',
          'Creio em Deus Pai todo-poderoso',
          'Pai Nosso que estais nos céus'
        ],
        correctOption: 1,
        explanation: 'Ao fazer o Sinal da Cruz, dizemos: "Em nome do Pai, e do Filho, e do Espírito Santo. Amém."'
      },
      {
        text: 'A quem é dirigida a oração Ave Maria?',
        options: [
          'A Deus Pai',
          'A Jesus Cristo',
          'Ao Espírito Santo',
          'À Virgem Maria'
        ],
        correctOption: 3,
        explanation: 'A Ave Maria é uma oração dirigida à Virgem Maria, mãe de Jesus.'
      },
      {
        text: 'Qual oração professamos nossa fé?',
        options: [
          'Pai Nosso',
          'Ave Maria',
          'Credo',
          'Glória'
        ],
        correctOption: 2,
        explanation: 'No Credo, professamos nossa fé em Deus Pai, em Jesus Cristo, no Espírito Santo e nas verdades da Igreja Católica.'
      },
      {
        text: 'Qual oração expressamos arrependimento pelos pecados?',
        options: [
          'Ato de Contrição',
          'Pai Nosso',
          'Glória',
          'Ave Maria'
        ],
        correctOption: 0,
        explanation: 'O Ato de Contrição é a oração em que expressamos nosso arrependimento pelos pecados cometidos e nosso desejo de mudar de vida.'
      }
    ]
  }
];

export function getModules(): ModuleType[] {
  return modules;
}

export function getModuleById(id: string): ModuleType | undefined {
  return modules.find(module => module.id === id);
}