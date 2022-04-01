import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init(
  {
    lng: 'pt-BR',
    fallbackLng: 'pt-BR',
    resources: {
      'pt-BR': {
        translation: {
          TOAST_MODAL: {
            SWIPE: 'Deslize a aba e veja os\ndetalhes do seu pedido.',
          },
          LOGIN: {
            MAIN: 'Para prosseguir, vamos nos conhecer melhor?',
            FORGOT_PASSWORD: 'Esqueceu sua senha?',
            ERROR: 'Ocorreu algum erro, tente novamente',
          },
          AZURE_LOGIN: {
            MAIN: 'Seja bem vindo!\n{{ name }}\n{{ email }}',
          },
          REGISTER: {
            MAIN: 'Vamos realizar seu cadastro.',
            FOOTER_MAIN: 'Ao se cadastrar você concorda com nossos',
            TERMS_OF_USE: 'Termos de Uso',
            PRIVACY_POLICY: 'Política de privacidade',
            INFO_MODAL: {
              SUCCESS: 'Cadastro realizado\ncom sucesso.\n',
              ERROR:
                'Cadastro não realizado,\nrevise as informações fornecidas.',
            },
          },
          PAYMENT: {
            CARDS: {
              DELIVERY_IN: {
                TITLE: 'Entregar em:',
                CHANGE: 'Alterar',
                CHANGE_CONFIRM: 'Sim, quero alterar o endereço',
                CANCEL_CHANGE: 'Cancelar alteração',
                CHANGE_CARD: 'Deseja realmente alterar?',
                ADDRESS:
                  'Av. Loureiro da Silva, 1670 - 302\nBelém Novo, Curitiba\n90090-008',
              },
              PAYMENT_FORM: 'Forma de pagamento',
              NEW_CARD: 'Novo cartão de Crédito',
              BTN: 'Adicionar Cartão de crédito',
              TITLE: 'Meus cartões',
              EDIT: 'Editar',
              CLEAN_MESSAGE:
                'Cadastre um cartão de crédito\npara realizar o pagamento.',
              REMOVE: 'Apagar',
              VERIFY_YOUR_CONNECTION: 'Verifique sua conexão',
              CONFIRM_REMOVE_CARD: 'Deseja realmente excluir este cartão?',
              SAVE_CARD: 'Salvar novo cartão',
              ALERT_CHANGE_SURNAME:
                'Por segurança, você só pode alterar o apelido do cartão. Se preferir, você pode excluir este cartão e adicionar um novo.',
              ALERT_CARD:
                'Parar pagamentos online somente serão aceitos Cartões de Crédito.',
              CHANGE_ADDRESS:
                'Atenção, alterar seu endereço \n reinicia o seu pedido.',
            },
          },
          CART: {
            STEP_1: {
              BTN: 'Adicionar produtos',
              OPT: 'Opcionais',
              CUTLERY: 'Talheres',
              EMPTY_LIST: 'Você ainda não selecionou\nnenhum produto',
            },
            RESUME: {
              HEADER_TITLE: 'Seu pedido',
              FORECAST: 'Previsão de entrega:     ',
              OBSERVATION: 'Observações:',
              DELIVERY: 'Taxa de entrega',
              DELIVERY_VALUE: 'R$ 11,99',
              TOTAL: 'Total',
              BTN: 'Selecionar forma de pagamento',
              BTN_2: 'Finalizar pedido',
            },
          },
          PROFILE: {
            MY: {
              HEADER: 'Meus Dados',
              BTN: 'Editar informações',
            },
          },
          MY_ORDERS: {
            EMPTY_TITLE: 'Você ainda não fez nenhum pedido.',
            EMPTY_DESCRIPTION:
              'Dê uma olhadinha em nosso cardápio\ne faça o seu primeiro :)',
            ORDERS: {
              HELP: 'Ajuda',
              BTN: 'Pedir novamente',
            },
            RESUME: {
              HEADER: 'Detalhes do pedido',
              BTN: 'Pedir novamente',
            },
          },
          ACTION: {
            OUTBACK: {
              REQUEST_LOGIN: {
                TEXT: 'Faça seu login para prosseguir,\ne tenha acesso a ofertas\ne dicas especiais para você.',
                BTN: 'Fazer Login',
              },
              ACTION_TYPE_DISPLAY: {
                LABEL: {
                  WITHDRAWAL: 'Retirada',
                  DELIVERY: 'Delivery',
                  RESERVE: 'Reserva',
                },
                DESCRIPTION: {
                  WITHDRAWAL: 'Quero retirar no Outback',
                  DELIVERY: 'Quero receber em casa',
                  RESERVE: 'Quero comer no Outback',
                },
              },
              ORDER: {
                YOUR_POSITION: 'Sua posição',
                YOUR_IDENTIFICATION: 'Sua identificação',
                LEAVE_QUEUE: 'Sair da fila',
              },
              QUEUE: {
                STEP_1: {
                  TOAST: 'Para prosseguir, preencha todos os campos',
                  ID: 'Sua identificação',
                  REQUEST_ADDRESS: 'Insira sua localização',
                  RESERVE_COUNT: 'Deseja mesa para quantas pessoas:',
                  TOGGLE_MAIN: 'Você aceita sentar ou comer no bar?',
                  TOGGLE_SECOND: '\n(opicional)',
                  ADDRESS: 'Escolha seu Outback',
                },
                STEP_2: {
                  CONFIRMED_QUEUE: 'Você agora está na Fila',
                  TODAY: 'HOJE',
                  SITTING_OR_EATING: 'Sentar ou comer no bar',
                  ROW_MENU: 'Cardápio Fila',
                  SEE_OPTIONS: 'Que tal ver nossas opções?',
                  QUEUE_POSITION: 'Posição na fila:',
                  WAIT: 'Espera:',
                },
              },
              WITHDRAWAL: {
                STEP_2: {
                  MAIN: 'Bem vindo à Retirada no Outback',
                  BETTER_DAY: 'Qual o melhor dia para você?',
                  SELECT_DAY: 'Selecione uma data',
                  BETTER_HOUR: 'Qual o melhor horário para você?',
                  SELECT_HOUR: 'Selecione um horário',
                },
                STEP_3: {
                  MAIN: 'Você selecionou:',
                  DATE: 'Data:',
                  HOUR: 'Horário:',
                  REQUEST_BY: 'Pedindo de:',
                  CHANGE: 'Alterar forma de pedir',
                },
              },
              DELIVERY: {
                STEP_1: {
                  MAIN: 'Bem vindo ao Delivery Outback',
                  REQUEST_ADDRESS: 'Insira sua localização',
                  TYPE: 'Selecione uma opção para fazer sua refeição:',
                  ADDRESS: 'Mais próximos de você',
                },
                STEP_2: {
                  MAIN: 'Você selecionou:',
                  REQUEST_BY: 'Pedindo de:',
                  CHANGE: 'Alterar forma de pedir',
                },
                INFOS_MODAL: {
                  SUCCESS: 'Pedido feito\ncom sucesso',
                  SUCCESS_RESERVE: 'Reserva feita\ncom sucesso',
                  SUCCESS_DELIVERY:
                    'Forma de consumo\nselecionada com sucesso.',
                  CHANGE:
                    'Atenção,\nalterar a forma de pedir\nreinicia seu pedido.',
                  CHANGE_RESTAURANT:
                    'Atenção,\nalterar o restaurante\nreinicia seu pedido.',
                  CHANGE_LOCATION:
                    'Atenção,\nalterar seu endereço\nreinicia seu pedido.',
                  BTN_SUCCESS: 'Acompanhar pedido',
                  BTN_SUCCESS_DELIVERY: 'Fazer Pedido',
                  BTN_SUCCESS_RESERVE: 'Ver Informações',
                  BTN_CHANGE: 'Alterar',
                },
              },
              RESERVE: {
                STEP_2: {
                  MAIN: 'Vamos fazer sua Reserva no Outback',
                  REQUEST_BY: 'Reservado em:',
                  SELECT_DAY: 'Qual o melhor dia para você?',
                  CHANGE: 'Alterar forma de pedir',
                  BETTER_DAY: 'Qual o melhor dia para você?',
                  BETTER_HOUR: 'Qual o melhor horário para você?',
                  SELECT_HOUR: 'Selecione um horário',
                  RESERVE_COUNT: 'Deseja mesa para quantas pessoas:',
                  AMBIENT: 'Escolha um ambiente:',
                },
                STEP_3: {
                  MAIN: 'Você selecionou:',
                  DATE: 'Data:',
                  HOUR: 'Horário:',
                  REQUEST_BY: 'Pedindo de:',
                  RESERVE_COUNT: 'Mesa para:',
                  AMBIENT: 'Ambiente:',
                  CHANGE: 'Alterar forma de pedir',
                  HOUR_ALERT:
                    '(Reserva feita somente para o horário selecionado)',
                  OBS: 'Observação:',
                },
              },
              REQUEST_LOCATION_MODAL: {
                BTN_1: 'Ativar localização',
                BTN_2: 'Inserir localidade',
                MAIN: 'Ative sua localixação para acessarn\no Outback mais perto de você.',
                DESCRIPTION:
                  'Ative sua localixação para acessarn\no Outback mais perto de você.',
              },
            },
          },
          RESET_PASSWORD: {
            TITLE: 'Vamos recuperar a sua senha.',
            STEP_1: {
              MAIN_PART_1: 'Informe seu',
              MAIN_PART_2: ' e-mail ',
              MAIN_PART_3:
                'cadastrado.\nVocê vai receber uma mensagem com\n um link para cadastrar sua nova senha.',
            },
            STEP_2: {
              MAIN_PART_1: 'Enviamos um',
              MAIN_PART_2: ' código ',
              MAIN_PART_3:
                'para o e-mail abaixo.\nInsira o código enviado para prosseguir.',
            },
            STEP_3: {
              SUCCESS: 'Código validado\ncom sucesso!',
              MAIN: 'Alterar senha',
            },
          },
          FORM: {
            ERRORS: {
              REQUIRED_FIELD: 'Este campo é obrigatório',
              INVALID_DATE_LENGTH:
                'Preencha todos os campos no formato DD/MM/YYYY',
              INVALID_DATE_DD: 'O dia deve ser menor ou igual 31',
              INVALID_DATE_MM: 'O mês deve ser menor ou igual 12',
              INVALID_DATE_YYYY: 'O ano deve ser menor ou igual o ano atual',
              INVALID_AGE: 'Você deve ter mais de 18 anos para o cadastro',
              INVALID_TAXID_FORMAT: 'CPF com formato inválido.',
              INVALID_TAXID: 'CPF/CNPJ inválido.',
              INVALID_EMAIL_FORMAT: 'Formato de email inválido',
              PASS_NOT_EQUAL: 'As senhas devem ser iguais',
              INVALID_PASSWORD_FORMAT:
                'A senha deve conter, no mínimo, 8 caracteres sendo ao menos uma letra maiúscula, uma minúscula, um número e um caractere especial, e no máximo 30 caracteres. ',
              INVALID_DATE_FORMAT: 'Formato de data inválido',
              INVALID_PHONE_FORMAT: 'Formato de telefone inválido',
              EMAIL_NOT_EQUAL: 'Os emails devem ser iguais',
              MIN_LENGTH_REQUIRED: 'Mínimo {{min}} caracteres',
              MAX_LENGTH_REQUIRED: 'Máximo {{max}} caracteres',
              FIELD_REQUIRED: 'Campo obrigatório',
              EMPTY_LAST_NAME: 'Ops, não esqueça de colocar seu sobrenome.',
              INVALID_USER_OR_PASSWORD: 'E-mail e/ou senha não correspondem',
            },
          },
        },
      },
    },
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  },
  (err, t) => {
    i18n.t('alertView.title');
  }
);

export default i18n;
