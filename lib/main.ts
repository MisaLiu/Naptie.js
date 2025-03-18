import { encodeByte, encodeDouble, encodeTriple } from './utils/encode';

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
