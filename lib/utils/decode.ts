import * as chars from './chars';
import * as size from './size';

export const decodeByte = (str: string) => {
  let index: number[] = [];
  let result = 0;

  const reverse = chars.n.indexOf(str.charAt(0)) < 0;
  if (!reverse) {
    index = [
      chars.n.indexOf(str.charAt(0)),
      chars.a.indexOf(str.charAt(1))
    ];
  } else {
    index = [
      chars.i.indexOf(str.charAt(0)),
      chars.e.indexOf(str.charAt(1))
    ];
  }

  if (index.includes(-1)) throw Error('Not a valid string');
  if (!reverse) {
    result = (
      index[0] * size.a + 
      index[1]
    );
  } else {
    result = (
      index[0] * size.e + 
      index[1]
    );
  }

  if (result > 0x7F) throw new Error('Byte overflow');
  return reverse ? result | 0x80 : result;
};

export const decodeDouble = (str: string) => {
  let index: number[] = [];
  let result: number = 0;

  const reverse = chars.n.indexOf(str.charAt(0)) < 0;
  if (!reverse) {
    index = [
      chars.n.indexOf(str.charAt(0)),
      chars.a.indexOf(str.charAt(1)),
      chars.p.indexOf(str.charAt(2)),
      chars.t.indexOf(str.charAt(3)),
    ];
  } else {
    index = [
      chars.p.indexOf(str.charAt(0)),
      chars.t.indexOf(str.charAt(1)),
      chars.i.indexOf(str.charAt(2)),
      chars.e.indexOf(str.charAt(3)),
    ];
  }

  if (index.includes(-1)) throw Error('Not a valid string');
  if (!reverse) {
    result = (
      index[0] * size.apt + 
      index[1] * size.pt + 
      index[2] * size.t + 
      index[3]
    );
  } else {
    result = (
      index[0] * size.tie + 
      index[1] * size.ie + 
      index[2] * size.e + 
      index[3]
    );
  }

  if (result > 0xFFFF) throw new Error('Double overflow');
  return result;
};

export const decodeTriple = (str: string) => {
  const index: number[] = [
    chars.n.indexOf(str.charAt(0)),
    chars.a.indexOf(str.charAt(1)),
    chars.p.indexOf(str.charAt(2)),
    chars.t.indexOf(str.charAt(3)),
    chars.i.indexOf(str.charAt(4)),
    chars.e.indexOf(str.charAt(5)),
  ];

  if (index.includes(-1)) throw Error('Not a valid string');
  const result = (
    index[0] * size.aptie + 
    index[1] * size.ptie + 
    index[2] * size.tie + 
    index[3] * size.ie + 
    index[4] * size.e + 
    index[5]
  );
  if (result > 0xFFFFFF) throw Error('Triple overflow');
  return result;
};
