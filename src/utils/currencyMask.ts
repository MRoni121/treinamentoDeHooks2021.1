const reverseString = (value: string): string => 
    value === '' 
    ? ''
    : reverseString(value.substr(1)) + value.charAt(0)
;


const currencyMask = (value: number | string): string => {
  if (typeof value == 'string')
      value = Number(value);
      
  let newValue = String(value?.toFixed(2)).replace('.', '');

  const reversedValue = reverseString(newValue)
  .replace(/(\d{2})(\d)/, '$1,$2')
  .replace(/(\d{3})(\d)/, '$1.$2')
  .replace(/(\d{3})(\d)/, '$1.$2')
  .replace(/(\d{3})(\d)/, '$1.$2')
  .replace(/(\d{3})(\d)/, '$1.$2')
  ;
  return reverseString(reversedValue)
}

export default currencyMask;