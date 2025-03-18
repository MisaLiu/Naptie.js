import * as chars from './chars';
import * as size from './size';
import { divisior } from './math';

export const encodeByte = (byte: number) => {
  if (byte > 0xFF) throw Error('Byte overflow');

  if (byte > 0xAA) {
    const _byte = byte & 0xAA;
    return (
      chars.i[divisior(_byte, size.e)] + 
      chars.e[_byte % size.e]
    );
  }
  
  if (byte > 0x55) {
    const _byte = byte & 0x55;
    return (
      chars.p[divisior(_byte, size.t)] + 
      chars.t[_byte % size.t]
    );
  }

  return (
    chars.n[divisior(byte, size.a)] + 
    chars.a[byte % size.a]
  );
};

export const encodeDouble = (short: number) => {
  if (short > 0xFFFF) throw Error('Short bites overflow');
  
  if (short > 0x7FFF) {
    const _short = short & 0x7FFF;
    const _index = [
      divisior(_short, size.tie),
      divisior(_short % size.tie, size.ie),
      divisior(_short % size.ie, size.e),
      _short % size.e
    ];

    return [
      chars.p[_index[0]],
      chars.t[_index[1]],
      chars.i[_index[2]],
      chars.e[_index[3]]
    ].join('');
  }

  const index: number[] = [
    divisior(short, size.apt),
    divisior(short % size.apt, size.pt),
    divisior(short % size.pt, size.t),
    short % size.t
  ];

  return [
    chars.n[index[0]],
    chars.a[index[1]],
    chars.p[index[2]],
    chars.t[index[3]]
  ].join('');
};

export const encodeTriple = (short: number) => {
  if (short > 0xFFFFFF) throw Error('Triple bites overflow');

  const resultIndex: number[] = [
    divisior(short, size.aptie),
    divisior(short % size.aptie, size.ptie),
    divisior(short % size.ptie, size.tie),
    divisior(short % size.tie, size.ie),
    divisior(short % size.ie, size.e),
    short % size.e
  ];

  const result = [
    chars.n[resultIndex[0]],
    chars.a[resultIndex[1]],
    chars.p[resultIndex[2]],
    chars.t[resultIndex[3]],
    chars.i[resultIndex[4]],
    chars.e[resultIndex[5]],
  ];

  return result.join('');
};
