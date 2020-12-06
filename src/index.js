import { join } from 'lodash-es';
import MigrationProject from './MigrationProject/MigrationProject';
import * as React from 'react';
import { render } from 'react-dom';

// export function numToWord(num) {
//   return _.reduce(numRef, (accum, ref) => {
//     return ref.num === num ? ref.word : accum;
//   }, '');
// }

// export function wordToNum(word) {
//   return _.reduce(numRef, (accum, ref) => {
//     return ref.word === word && word.toLowerCase() ? ref.num : accum;
//   }, -1);
// }

// import MigrationProject from './MigrationProject/MigrationProject';

// function component() {
//   const element = document.createElement('div');
//   // element.innerHTML = join(['Hello', 'webpack'], ' ');
//   element.setAttribute('id', 'root');
//   // element.innerHTML = join(test);
//   return element;
// }

let element = document.createElement('div');
element.setAttribute('id', 'root');
document.body.appendChild(element);

render(<MigrationProject />, document.getElementById('root'));

// document.body.appendChild(component());
// export { MigrationProject }