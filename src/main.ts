import * as Naptie from '../lib/main';
import './style.css';

const qs = (selector: string) => document.querySelector(selector);
const encoder = new TextEncoder();
const decoder = new TextDecoder('utf-8');

window.addEventListener('load', () => {
  const encodeDom = qs('#textarea-encode')! as HTMLTextAreaElement;
  const decodeDom = qs('#textarea-decode')! as HTMLTextAreaElement;

  encodeDom.addEventListener('input', () => {
    decodeDom.value = Naptie.encode(encoder.encode(encodeDom.value));
  });

  decodeDom.addEventListener('input', () => {
    encodeDom.value = decoder.decode(Naptie.decode(decodeDom.value));
  });
});
