// // Comparison of different import approaches of lodash

// /**
//  * Lodash
//  */

// // Import as a whole
// import * as _ from 'lodash'; // 68.96kb
// _.map([1, 2, 3], (x) => 2 * x);

// // Selective Import
// import { times } from 'lodash'   // 68.96kB  :(, No difference with above
// import times from 'lodash/times' //  2.08kB! :), Does only import times function
// times(3, () => console.log('whee'))

// import map from 'lodash/map'; // 18.62 kb, seriously? one map function from lodash takes 18kb?!
// map([1, 2, 3], (x) => 2 * x);

// import filter from 'lodash/filter'; // 18.59 kb
// filter([1, 2, 3], (x) => x > 2);

// import map from 'lodash/map';
// import filter from 'lodash/filter';  // 18.83 in total, since there are a lot of shared utilities
// filter(map([1, 2, 3], (x) => 2 * x), (x) => x > 2);

// /**
//  * Lodash-es
//  */

//  import * as _ from 'lodash-es'; // 97.17 kb

import { times } from 'lodash-es'; // 97.17kB  :(, No difference with above
// import times from 'lodash/times' //  2.08 kB! :), Does only import times function
times(3, () => console.log('whee'));

// import map from 'lodash-es/map'; // 15.15 kb
// map([1, 2, 3], (x) => 2 * x);

// import filter from 'lodash-es/filter' // 15.11 kb
// filter([1, 2, 3], (x) => x > 2);

// import map from 'lodash-es/map';
// import filter from 'lodash-es/filter';  // 16.48
// filter(map([1, 2, 3], (x) => 2 * x), (x) => x > 2);

// /**
//  * Lodash/fp
//  */

//  import * as _ from 'lodash/fp'; // 80.25kb
//  _.map((x) => 2 * x)([1, 2, 3]);

//  import map from 'lodash/fp/map'; // 46.18 kb...
//  map((x) => 2 * x)([1, 2, 3]);
