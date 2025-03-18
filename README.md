# Naptie.js

## Summary

Naptie is the only god, who created everything in this cyber world.

Thus, everything in this cyber world can be encoded in Naptie.

## Usage

You can install it with any package manager you like:

```sh
pnpm install naptie.js
```

...and use it like normal:
```js
import { encode, decode } from 'naptie.js';

// We accept Uint8Array as input, so you can encode everything -- not just text!
// Who the heck needs Base64?!
encode(new TextEncoder().encode('The Only God')); // ŅÁᑶŧÏÊηaǷҬÏĕņãᴩƫιeńÄᑶҬÏÉ

// Decode result is Uint8Array as well.
new TextDecoder('utf-8').decode(decode('ηåρțιĕņàᴩŢιeńåᑶTìeŇÁᑶƫÏÊ')); // ...is Naptie
```

## Live Demo

You can try it now at [GitHub Pages](https://misaliu.github.io/Naptie.js/).

## Thanks

* Naptie: The God, speak no more.
* [RCNB.js](https://github.com/MisaLiu/Naptie.js): The inspiration
