import accounting from 'accounting';

export function BRLMoney(value: number): string {
  return accounting.formatMoney(value, {
    symbol: 'R$ ',
    decimal: ',',
    thousand: '.',
    precision: 2,
  });
}
