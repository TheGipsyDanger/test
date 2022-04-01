import { IUser, withChildren } from '~/utils';
export interface IProfile {
  data?: any;
}
export interface IProfileLayout extends IProfile {
  t: any;
  onPress(): void;
  goBack(): void;
  user: IUser;
  updateInfosState(value: string): void;
  infosState: IProfileInfoState;
  profilePerson: IProfileTypeValue[];
  profileOptions: IProfileTypeValue[];
  profileContact: IProfileTypeValue[];
}

export interface IProfileTypeValue {
  label: string;
  value: string;
}
export interface IProfileLayoutHeader
  extends Pick<IProfileLayout, 'goBack' | 't'> {}

export interface IProfileLayoutFooter
  extends Pick<IProfileLayout, 'onPress' | 't'> {}

export interface IProfileLayoutAvatar extends Pick<IProfileLayout, 'user'> {}

export interface IProfilePersonLayout
  extends Pick<IProfileLayout, 'profilePerson'> {}

export interface IProfileContactLayout
  extends Pick<IProfileLayout, 'profileContact'> {}
export interface IProfileOptionsLayout
  extends Pick<IProfileLayout, 'profileOptions'> {}

export interface IProfileCard extends withChildren {}

export interface IProfileInfoState {
  person: boolean;
  contact: boolean;
  permissions: boolean;
  optional: boolean;
}

export const interests: string[] = [
  'Moda',
  'Esportes',
  'Games',
  'Culinária',
  'Viagens',
  'Séries',
  'Cultura Pop',
  'Tecnologia',
  'Livros',
  'Cinema',
  'Música',
];

export const permissions: string[] = [
  'Declaro não ser residente da União Europeia',
  'Gostaria de receber as novidades do Outback® por email.',
  'Gostaria de receber as novidades do Outback® por SMS.',
];

export const profilePersonFiles: IProfileTypeValue[] = [
  {
    label: 'Nome Completo',
    value: 'Renan Henrique Da Fonte Costa',
  },
  {
    label: 'CPF',
    value: '151.205.297-39',
  },
  {
    label: 'Data de nascimento',
    value: '22/05/1994',
  },
  {
    label: 'Senha',
    value: '•••••••••••••',
  },
];

export const profileContactFiles: IProfileTypeValue[] = [
  {
    label: 'Telefone',
    value: '(21) 99223-1184',
  },
  {
    label: 'E-mail',
    value: 'renan.henrique.fonte@gmail.com ',
  },
];
export const profileOptionsFiles: IProfileTypeValue[] = [
  {
    label: 'Com qual gênero você se identifica?',
    value: 'Não-binário',
  },
  {
    label: 'Você possui filhos?',
    value: 'Não tenho filhos',
  },
  {
    label: 'Quais os seus interesses?',
    value: 'Moda, Viagens, Cinema, Música',
  },
];
