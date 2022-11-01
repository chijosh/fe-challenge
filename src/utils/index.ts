export function isEmpty(obj: any) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }

  return true;
}

export function handleIntl(key: string, intlObj: Record<string, any>): string {
  if (isEmpty(intlObj.messages)) return key;

  return intlObj.messages[key];
}
