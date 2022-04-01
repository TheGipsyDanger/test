import {
  IField,
  withChildren,
  IProfilePersonForm,
  IProfileContactForm,
} from '~/utils';
export interface IProfile {
  data?: any;
}

export interface IProfileLayout extends IProfile {
  openLogin(): void;
  press(): void;
  updateInfosState(value: string): void;
  infosState: IProfileInfoState;
  profilePersonForm: IProfilePersonForm;
  profilePersonFormFields: IField[];
  profileContactForm: IProfileContactForm;
  profileContactFormFields: IField[];
}

export interface IProfilePersonLayout
  extends Pick<
    IProfileLayout,
    'profilePersonFormFields' | 'profilePersonForm'
  > {}

export interface IProfileContactLayout
  extends Pick<
    IProfileLayout,
    'profileContactForm' | 'profileContactFormFields'
  > {}
export interface IProfileContactLayout
  extends Pick<
    IProfileLayout,
    'profileContactForm' | 'profileContactFormFields'
  > {}

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
