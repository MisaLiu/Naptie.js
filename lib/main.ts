import { encodeByte, encodeDouble, encodeTriple } from './utils/encode';
import { decodeByte, decodeDouble, decodeTriple } from './utils/decode';

/**
 * Encode everything into `Naptie`
 */
export const encode = (arr: Uint8Array) => {
  if (!(arr instanceof Uint8Array)) {
    throw TypeError('argument is not an instance of Uint8Array');
  }

  const loopCount = Math.floor(arr.length / 3);
  let result: string = '';
  for (let i = 0; i < loopCount; i++) {
    const triple = (
      arr[i * 3] << 16 |
      arr[i * 3 + 1] << 8 |
      arr[i * 3 + 2]
    );
    result += encodeTriple(triple);
  }

  const remainBytes = arr.length % 3;
  if (remainBytes === 2)
    result += encodeDouble(arr[arr.length - 2] << 8 | arr[arr.length - 1]); 
  if (remainBytes === 1)
    result += encodeByte(arr[arr.length - 1]); 

  return result;
};

/**
 * Decode things from `Naptie`
 */
export const decode = (str: string) => {
  if (str.length & 1) throw Error('Invalid length');

  const loopCount = Math.floor(str.length / 6);
  const arr: number[] = [];
  for (let i = 0; i < loopCount; i++) {
    const startStr = i * 6;
    const triple = decodeTriple(str.substring(startStr, startStr + 6));
    arr.push(triple >> 16);
    arr.push(triple >> 8);
    arr.push(triple & 0xFF);
  }

  const remainStr = (str.length % 6) / 2;
  if (remainStr === 2) {
    const double = decodeDouble(str.substring(str.length - (2 * 2), str.length));
    arr.push(double >> 8);
    arr.push(double);
  }
  if (remainStr === 1)
    arr.push(decodeByte(str.substring(str.length - 2, str.length)));

  return Uint8Array.from(arr);
};
