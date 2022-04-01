import { IWrappedSystem, IUser } from '~/utils';

export interface IProfile {}

export interface IProfileLayout extends IProfile {
  user: IUser;
  openLogin(): void;
  pressItem(value: string): void;
  profileOptions: IProfileOption[];
}

export interface IProfileCard extends IProfileOption, IWrappedSystem {}

export interface IProfileSubHeader
  extends Pick<IProfileLayout, 'user' | 'openLogin'> {}

interface IProfileOption {
  title: string;
  subtitle: string;
  icon: string;
  enabled: boolean;
}

export const profileOptions: IProfileOption[] = [
  {
    title: 'Meus dados',
    subtitle: 'Do seu jeito',
    icon: 'person',
    enabled: true,
  },
  // DESABILITADO ATE A V.2
  // {
  //   title: 'Meus endereços',
  //   subtitle: 'Gerencie seus endereços',
  //   icon: 'mapLocation',
  //   enabled: true,
  // },
  // {
  //   title: 'Meus cartões',
  //   subtitle: 'Gerencie suas formas de pagar',
  //   icon: 'card',
  //   enabled: true,
  // },
  // {
  //   title: 'Informação nutricional',
  //   subtitle: 'De todos os nossos produtos',
  //   icon: 'alert',
  //   enabled: true,
  // },
  // {
  //   title: 'Ajuda',
  //   subtitle: 'A gente te ajuda',
  //   icon: 'question',
  //   enabled: true,
  // },
  // {
  //   title: 'Fale conosco',
  //   subtitle: 'Queremos te ouvir',
  //   icon: 'chat',
  //   enabled: true,
  // },
  {
    title: 'Logout',
    subtitle: 'Você deseja sair do aplicativo?',
    icon: 'logout',
    enabled: true,
  },
];

export function defineOptions(isLogged: boolean, options: IProfileOption[]) {
  return isLogged
    ? options
    : options.map((item) => {
        if (
          ['Informação nutricional', 'Ajuda', 'Fale conosco'].includes(
            item.title
          )
        ) {
          return {
            ...item,
          };
        } else {
          return {
            ...item,
            enabled: false,
          };
        }
      });
}
