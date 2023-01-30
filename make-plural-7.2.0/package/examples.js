const a = {"cardinal":{"one":["1","1.0","1.00","1.000","1.0000"],"other":["0","2","16","100","1000","10000","100000","1000000","0.0","0.9","1.1","1.6","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"other":["0","15","100","1000","10000","100000","1000000"]}};
const b = {"cardinal":{"one":["0","1","0.0","1.0","0.00","1.00","0.000","1.000","0.0000","1.0000"],"other":["2","17","100","1000","10000","100000","1000000","0.1","0.9","1.1","1.7","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{}};
const c = {"cardinal":{"one":["1","1.0","1.00","1.000","1.0000"],"other":["0","2","16","100","1000","10000","100000","1000000","0.0","0.9","1.1","1.6","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{}};
const d = {"cardinal":{"one":["1"],"other":["0","2","16","100","1000","10000","100000","1000000","0.0","1.0","1.5","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"other":["0","15","100","1000","10000","100000","1000000"]}};
const e = {"cardinal":{"other":["0","15","100","1000","10000","100000","1000000","0.0","1.0","1.5","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{}};
const f = {"cardinal":{"other":["0","15","100","1000","10000","100000","1000000","0.0","1.0","1.5","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"other":["0","15","100","1000","10000","100000","1000000"]}};
const g = {"cardinal":{"one":["1","1.0","1.00","1.000","1.0000"],"two":["2","2.0","2.00","2.000","2.0000"],"other":["0","3","17","100","1000","10000","100000","1000000","0.0","0.9","1.1","1.6","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{}};

(function (root, pluralCategories) {
  Object.defineProperty(pluralCategories, '__esModule', { value: true });
  if (typeof define === 'function' && define.amd) define(pluralCategories);
  else if (typeof exports === 'object') module.exports = pluralCategories;
  else root.pluralCategories = pluralCategories;
}(this, {
af: a,
ak: b,
am: {"cardinal":{"one":["0","1","0.0","1.0","0.00","0.04"],"other":["2","17","100","1000","10000","100000","1000000","1.1","2.6","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"other":["0","15","100","1000","10000","100000","1000000"]}},
an: a,
ar: {"cardinal":{"zero":["0","0.0","0.00","0.000","0.0000"],"one":["1","1.0","1.00","1.000","1.0000"],"two":["2","2.0","2.00","2.000","2.0000"],"few":["3","10","103","110","1003","3.0","4.0","5.0","6.0","7.0","8.0","9.0","10.0","103.0","1003.0"],"many":["11","26","111","1011","11.0","12.0","13.0","14.0","15.0","16.0","17.0","18.0","111.0","1011.0"],"other":["100","102","200","202","300","302","400","402","500","502","600","1000","10000","100000","1000000","0.1","0.9","1.1","1.7","10.1","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"other":["0","15","100","1000","10000","100000","1000000"]}},
ars: {"cardinal":{"zero":["0","0.0","0.00","0.000","0.0000"],"one":["1","1.0","1.00","1.000","1.0000"],"two":["2","2.0","2.00","2.000","2.0000"],"few":["3","10","103","110","1003","3.0","4.0","5.0","6.0","7.0","8.0","9.0","10.0","103.0","1003.0"],"many":["11","26","111","1011","11.0","12.0","13.0","14.0","15.0","16.0","17.0","18.0","111.0","1011.0"],"other":["100","102","200","202","300","302","400","402","500","502","600","1000","10000","100000","1000000","0.1","0.9","1.1","1.7","10.1","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{}},
as: {"cardinal":{"one":["0","1","0.0","1.0","0.00","0.04"],"other":["2","17","100","1000","10000","100000","1000000","1.1","2.6","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"one":["1","5","7","10"],"two":["2","3"],"few":["4"],"many":["6"],"other":["0","11","25","100","1000","10000","100000","1000000"]}},
asa: c,
ast: d,
az: {"cardinal":{"one":["1","1.0","1.00","1.000","1.0000"],"other":["0","2","16","100","1000","10000","100000","1000000","0.0","0.9","1.1","1.6","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"one":["1","2","5","7","8","11","12","15","17","18","20","22","25","101","1001"],"few":["3","4","13","14","23","24","33","34","43","44","53","54","63","64","73","74","100","1003"],"many":["0","6","16","26","36","40","46","56","106","1006"],"other":["9","10","19","29","30","39","49","59","69","79","109","1000","10000","100000","1000000"]}},
bal: {"cardinal":{"one":["1","1.0","1.00","1.000","1.0000"],"other":["0","2","16","100","1000","10000","100000","1000000","0.0","0.9","1.1","1.6","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"one":["1"],"other":["0","2","16","100","1000","10000","100000","1000000"]}},
be: {"cardinal":{"one":["1","21","31","41","51","61","71","81","101","1001","1.0","21.0","31.0","41.0","51.0","61.0","71.0","81.0","101.0","1001.0"],"few":["2","4","22","24","32","34","42","44","52","54","62","102","1002","2.0","3.0","4.0","22.0","23.0","24.0","32.0","33.0","102.0","1002.0"],"many":["0","5","19","100","1000","10000","100000","1000000","0.0","5.0","6.0","7.0","8.0","9.0","10.0","11.0","100.0","1000.0","10000.0","100000.0","1000000.0"],"other":["0.1","0.9","1.1","1.7","10.1","100.1","1000.1"]},"ordinal":{"few":["2","3","22","23","32","33","42","43","52","53","62","63","72","73","82","83","102","1002"],"other":["0","1","4","17","100","1000","10000","100000","1000000"]}},
bem: c,
bez: c,
bg: a,
bho: b,
bm: e,
bn: {"cardinal":{"one":["0","1","0.0","1.0","0.00","0.04"],"other":["2","17","100","1000","10000","100000","1000000","1.1","2.6","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"one":["1","5","7","10"],"two":["2","3"],"few":["4"],"many":["6"],"other":["0","11","25","100","1000","10000","100000","1000000"]}},
bo: e,
br: {"cardinal":{"one":["1","21","31","41","51","61","81","101","1001","1.0","21.0","31.0","41.0","51.0","61.0","81.0","101.0","1001.0"],"two":["2","22","32","42","52","62","82","102","1002","2.0","22.0","32.0","42.0","52.0","62.0","82.0","102.0","1002.0"],"few":["3","4","9","23","24","29","33","34","39","43","44","49","103","1003","3.0","4.0","9.0","23.0","24.0","29.0","33.0","34.0","103.0","1003.0"],"many":["1000000","1000000.0","1000000.00","1000000.000","1000000.0000"],"other":["0","5","8","10","20","100","1000","10000","100000","0.0","0.9","1.1","1.6","10.0","100.0","1000.0","10000.0","100000.0"]},"ordinal":{}},
brx: c,
bs: {"cardinal":{"one":["1","21","31","41","51","61","71","81","101","1001","0.1","1.1","2.1","3.1","4.1","5.1","6.1","7.1","10.1","100.1","1000.1"],"few":["2","4","22","24","32","34","42","44","52","54","62","102","1002","0.2","0.4","1.2","1.4","2.2","2.4","3.2","3.4","4.2","4.4","5.2","10.2","100.2","1000.2"],"other":["0","5","19","100","1000","10000","100000","1000000","0.0","0.5","1.0","1.5","2.0","2.5","2.7","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"other":["0","15","100","1000","10000","100000","1000000"]}},
ca: {"cardinal":{"one":["1"],"many":["1000000"],"other":["0","2","16","100","1000","10000","100000","0.0","1.0","1.5","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"one":["1","3"],"two":["2"],"few":["4"],"other":["0","5","19","100","1000","10000","100000","1000000"]}},
ce: a,
ceb: {"cardinal":{"one":["0","3","5","7","8","10","13","15","17","18","20","21","100","1000","10000","100000","1000000","0.0","0.3","0.5","0.7","0.8","1.0","1.3","1.5","1.7","1.8","2.0","2.1","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"],"other":["4","6","9","14","16","19","24","26","104","1004","0.4","0.6","0.9","1.4","1.6","1.9","2.4","2.6","10.4","100.4","1000.4"]},"ordinal":{}},
cgg: c,
chr: c,
ckb: c,
cs: {"cardinal":{"one":["1"],"few":["2","4"],"many":["0.0","1.0","1.5","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"],"other":["0","5","19","100","1000","10000","100000","1000000"]},"ordinal":{"other":["0","15","100","1000","10000","100000","1000000"]}},
cy: {"cardinal":{"zero":["0","0.0","0.00","0.000","0.0000"],"one":["1","1.0","1.00","1.000","1.0000"],"two":["2","2.0","2.00","2.000","2.0000"],"few":["3","3.0","3.00","3.000","3.0000"],"many":["6","6.0","6.00","6.000","6.0000"],"other":["4","5","7","20","100","1000","10000","100000","1000000","0.1","0.9","1.1","1.7","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"zero":["0","7","9"],"one":["1"],"two":["2"],"few":["3","4"],"many":["5","6"],"other":["10","25","100","1000","10000","100000","1000000"]}},
da: {"cardinal":{"one":["1","0.1","1.0","1.6"],"other":["0","2","16","100","1000","10000","100000","1000000","0.0","2.0","3.4","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"other":["0","15","100","1000","10000","100000","1000000"]}},
de: d,
doi: {"cardinal":{"one":["0","1","0.0","1.0","0.00","0.04"],"other":["2","17","100","1000","10000","100000","1000000","1.1","2.6","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{}},
dsb: {"cardinal":{"one":["1","101","201","301","401","501","601","701","1001","0.1","1.1","2.1","3.1","4.1","5.1","6.1","7.1","10.1","100.1","1000.1"],"two":["2","102","202","302","402","502","602","702","1002","0.2","1.2","2.2","3.2","4.2","5.2","6.2","7.2","10.2","100.2","1000.2"],"few":["3","4","103","104","203","204","303","304","403","404","503","504","603","604","703","704","1003","0.3","0.4","1.3","1.4","2.3","2.4","3.3","3.4","4.3","4.4","5.3","5.4","6.3","6.4","7.3","7.4","10.3","100.3","1000.3"],"other":["0","5","19","100","1000","10000","100000","1000000","0.0","0.5","1.0","1.5","2.0","2.5","2.7","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"other":["0","15","100","1000","10000","100000","1000000"]}},
dv: c,
dz: e,
ee: c,
el: a,
en: {"cardinal":{"one":["1"],"other":["0","2","16","100","1000","10000","100000","1000000","0.0","1.0","1.5","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"one":["1","21","31","41","51","61","71","81","101","1001"],"two":["2","22","32","42","52","62","72","82","102","1002"],"few":["3","23","33","43","53","63","73","83","103","1003"],"other":["0","4","18","100","1000","10000","100000","1000000"]}},
eo: c,
es: {"cardinal":{"one":["1","1.0","1.00","1.000","1.0000"],"many":["1000000"],"other":["0","2","16","100","1000","10000","100000","0.0","0.9","1.1","1.6","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"other":["0","15","100","1000","10000","100000","1000000"]}},
et: d,
eu: a,
fa: {"cardinal":{"one":["0","1","0.0","1.0","0.00","0.04"],"other":["2","17","100","1000","10000","100000","1000000","1.1","2.6","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"other":["0","15","100","1000","10000","100000","1000000"]}},
ff: {"cardinal":{"one":["0","1","0.0","1.0","1.5"],"other":["2","17","100","1000","10000","100000","1000000","2.0","3.5","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{}},
fi: d,
fil: {"cardinal":{"one":["0","3","5","7","8","10","13","15","17","18","20","21","100","1000","10000","100000","1000000","0.0","0.3","0.5","0.7","0.8","1.0","1.3","1.5","1.7","1.8","2.0","2.1","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"],"other":["4","6","9","14","16","19","24","26","104","1004","0.4","0.6","0.9","1.4","1.6","1.9","2.4","2.6","10.4","100.4","1000.4"]},"ordinal":{"one":["1"],"other":["0","2","16","100","1000","10000","100000","1000000"]}},
fo: c,
fr: {"cardinal":{"one":["0","1","0.0","1.0","1.5"],"many":["1000000"],"other":["2","17","100","1000","10000","100000","2.0","3.5","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"one":["1"],"other":["0","2","16","100","1000","10000","100000","1000000"]}},
fur: c,
fy: d,
ga: {"cardinal":{"one":["1","1.0","1.00","1.000","1.0000"],"two":["2","2.0","2.00","2.000","2.0000"],"few":["3","6","3.0","4.0","5.0","6.0","3.00","4.00","5.00","6.00","3.000","4.000","5.000","6.000","3.0000","4.0000","5.0000","6.0000"],"many":["7","10","7.0","8.0","9.0","10.0","7.00","8.00","9.00","10.00","7.000","8.000","9.000","10.000","7.0000","8.0000","9.0000","10.0000"],"other":["0","11","25","100","1000","10000","100000","1000000","0.0","0.9","1.1","1.6","10.1","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"one":["1"],"other":["0","2","16","100","1000","10000","100000","1000000"]}},
gd: {"cardinal":{"one":["1","11","1.0","11.0","1.00","11.00","1.000","11.000","1.0000"],"two":["2","12","2.0","12.0","2.00","12.00","2.000","12.000","2.0000"],"few":["3","10","13","19","3.0","4.0","5.0","6.0","7.0","8.0","9.0","10.0","13.0","14.0","15.0","16.0","17.0","18.0","19.0","3.00"],"other":["0","20","34","100","1000","10000","100000","1000000","0.0","0.9","1.1","1.6","10.1","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"one":["1","11"],"two":["2","12"],"few":["3","13"],"other":["0","4","10","14","21","100","1000","10000","100000","1000000"]}},
gl: d,
gsw: a,
gu: {"cardinal":{"one":["0","1","0.0","1.0","0.00","0.04"],"other":["2","17","100","1000","10000","100000","1000000","1.1","2.6","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"one":["1"],"two":["2","3"],"few":["4"],"many":["6"],"other":["0","5","7","20","100","1000","10000","100000","1000000"]}},
guw: b,
gv: {"cardinal":{"one":["1","11","21","31","41","51","61","71","101","1001"],"two":["2","12","22","32","42","52","62","72","102","1002"],"few":["0","20","40","60","80","100","120","140","1000","10000","100000","1000000"],"many":["0.0","1.0","1.5","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"],"other":["3","10","13","19","23","103","1003"]},"ordinal":{}},
ha: c,
haw: c,
he: {"cardinal":{"one":["1","0.0","0.9","0.00","0.05"],"two":["2"],"other":["0","3","17","100","1000","10000","100000","1000000","1.0","2.5","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"other":["0","15","100","1000","10000","100000","1000000"]}},
hi: {"cardinal":{"one":["0","1","0.0","1.0","0.00","0.04"],"other":["2","17","100","1000","10000","100000","1000000","1.1","2.6","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"one":["1"],"two":["2","3"],"few":["4"],"many":["6"],"other":["0","5","7","20","100","1000","10000","100000","1000000"]}},
hnj: e,
hr: {"cardinal":{"one":["1","21","31","41","51","61","71","81","101","1001","0.1","1.1","2.1","3.1","4.1","5.1","6.1","7.1","10.1","100.1","1000.1"],"few":["2","4","22","24","32","34","42","44","52","54","62","102","1002","0.2","0.4","1.2","1.4","2.2","2.4","3.2","3.4","4.2","4.4","5.2","10.2","100.2","1000.2"],"other":["0","5","19","100","1000","10000","100000","1000000","0.0","0.5","1.0","1.5","2.0","2.5","2.7","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"other":["0","15","100","1000","10000","100000","1000000"]}},
hsb: {"cardinal":{"one":["1","101","201","301","401","501","601","701","1001","0.1","1.1","2.1","3.1","4.1","5.1","6.1","7.1","10.1","100.1","1000.1"],"two":["2","102","202","302","402","502","602","702","1002","0.2","1.2","2.2","3.2","4.2","5.2","6.2","7.2","10.2","100.2","1000.2"],"few":["3","4","103","104","203","204","303","304","403","404","503","504","603","604","703","704","1003","0.3","0.4","1.3","1.4","2.3","2.4","3.3","3.4","4.3","4.4","5.3","5.4","6.3","6.4","7.3","7.4","10.3","100.3","1000.3"],"other":["0","5","19","100","1000","10000","100000","1000000","0.0","0.5","1.0","1.5","2.0","2.5","2.7","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"other":["0","15","100","1000","10000","100000","1000000"]}},
hu: {"cardinal":{"one":["1","1.0","1.00","1.000","1.0000"],"other":["0","2","16","100","1000","10000","100000","1000000","0.0","0.9","1.1","1.6","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"one":["1","5"],"other":["0","2","4","6","17","100","1000","10000","100000","1000000"]}},
hy: {"cardinal":{"one":["0","1","0.0","1.0","1.5"],"other":["2","17","100","1000","10000","100000","1000000","2.0","3.5","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"one":["1"],"other":["0","2","16","100","1000","10000","100000","1000000"]}},
ia: d,
id: f,
ig: e,
ii: e,
io: {"cardinal":{"one":["1"],"other":["0","2","16","100","1000","10000","100000","1000000","0.0","1.0","1.5","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{}},
is: {"cardinal":{"one":["1","21","31","41","51","61","71","81","101","1001","0.1","1.0","1.1","2.1","3.1","4.1","5.1","6.1","7.1","10.1","100.1","1000.1"],"other":["0","2","16","100","1000","10000","100000","1000000","0.0","0.2","0.9","1.2","1.8","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"other":["0","15","100","1000","10000","100000","1000000"]}},
it: {"cardinal":{"one":["1"],"many":["1000000"],"other":["0","2","16","100","1000","10000","100000","0.0","1.0","1.5","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"many":["8","11","80","800"],"other":["0","7","9","10","12","17","100","1000","10000","100000","1000000"]}},
iu: g,
ja: f,
jbo: e,
jgo: c,
jmc: c,
jv: e,
jw: e,
ka: {"cardinal":{"one":["1","1.0","1.00","1.000","1.0000"],"other":["0","2","16","100","1000","10000","100000","1000000","0.0","0.9","1.1","1.6","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"one":["1"],"many":["0","2","16","102","1002"],"other":["21","36","100","1000","10000","100000","1000000"]}},
kab: {"cardinal":{"one":["0","1","0.0","1.0","1.5"],"other":["2","17","100","1000","10000","100000","1000000","2.0","3.5","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{}},
kaj: c,
kcg: c,
kde: e,
kea: e,
kk: {"cardinal":{"one":["1","1.0","1.00","1.000","1.0000"],"other":["0","2","16","100","1000","10000","100000","1000000","0.0","0.9","1.1","1.6","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"many":["6","9","10","16","19","20","26","29","30","36","39","40","100","1000","10000","100000","1000000"],"other":["0","5","7","8","11","15","17","18","21","101","1001"]}},
kkj: c,
kl: c,
km: f,
kn: {"cardinal":{"one":["0","1","0.0","1.0","0.00","0.04"],"other":["2","17","100","1000","10000","100000","1000000","1.1","2.6","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"other":["0","15","100","1000","10000","100000","1000000"]}},
ko: f,
ks: c,
ksb: c,
ksh: {"cardinal":{"zero":["0","0.0","0.00","0.000","0.0000"],"one":["1","1.0","1.00","1.000","1.0000"],"other":["2","17","100","1000","10000","100000","1000000","0.1","0.9","1.1","1.7","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{}},
ku: c,
kw: {"cardinal":{"zero":["0","0.0","0.00","0.000","0.0000"],"one":["1","1.0","1.00","1.000","1.0000"],"two":["2","22","42","62","82","102","122","142","1000","10000","100000","2.0","22.0","42.0","62.0","82.0","102.0","122.0","142.0","1000.0","10000.0","100000.0"],"few":["3","23","43","63","83","103","123","143","1003","3.0","23.0","43.0","63.0","83.0","103.0","123.0","143.0","1003.0"],"many":["21","41","61","81","101","121","141","161","1001","21.0","41.0","61.0","81.0","101.0","121.0","141.0","161.0","1001.0"],"other":["4","19","100","1004","1000000","0.1","0.9","1.1","1.7","10.0","100.0","1000.1","1000000.0"]},"ordinal":{"one":["1","4","21","24","41","44","61","64","101","1001"],"many":["5","105","205","305","405","505","605","705","1005"],"other":["0","6","20","100","1000","10000","100000","1000000"]}},
ky: a,
lag: {"cardinal":{"zero":["0","0.0","0.00","0.000","0.0000"],"one":["1","0.1","1.0","1.6"],"other":["2","17","100","1000","10000","100000","1000000","2.0","3.5","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{}},
lb: c,
lg: c,
lij: {"cardinal":{"one":["1"],"other":["0","2","16","100","1000","10000","100000","1000000","0.0","1.0","1.5","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"many":["8","11","80","89","800","803"],"other":["0","7","9","10","12","17","100","1000","10000","100000","1000000"]}},
lkt: e,
ln: b,
lo: {"cardinal":{"other":["0","15","100","1000","10000","100000","1000000","0.0","1.0","1.5","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"one":["1"],"other":["0","2","16","100","1000","10000","100000","1000000"]}},
lt: {"cardinal":{"one":["1","21","31","41","51","61","71","81","101","1001","1.0","21.0","31.0","41.0","51.0","61.0","71.0","81.0","101.0","1001.0"],"few":["2","9","22","29","102","1002","2.0","3.0","4.0","5.0","6.0","7.0","8.0","9.0","22.0","102.0","1002.0"],"many":["0.1","0.9","1.1","1.7","10.1","100.1","1000.1"],"other":["0","10","20","30","40","50","60","100","1000","10000","100000","1000000","0.0","10.0","11.0","12.0","13.0","14.0","15.0","16.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"other":["0","15","100","1000","10000","100000","1000000"]}},
lv: {"cardinal":{"zero":["0","10","20","30","40","50","60","100","1000","10000","100000","1000000","0.0","10.0","11.0","12.0","13.0","14.0","15.0","16.0","100.0","1000.0","10000.0","100000.0","1000000.0"],"one":["1","21","31","41","51","61","71","81","101","1001","0.1","1.0","1.1","2.1","3.1","4.1","5.1","6.1","7.1","10.1","100.1","1000.1"],"other":["2","9","22","29","102","1002","0.2","0.9","1.2","1.9","10.2","100.2","1000.2"]},"ordinal":{"other":["0","15","100","1000","10000","100000","1000000"]}},
mas: c,
mg: b,
mgo: c,
mk: {"cardinal":{"one":["1","21","31","41","51","61","71","81","101","1001","0.1","1.1","2.1","3.1","4.1","5.1","6.1","7.1","10.1","100.1","1000.1"],"other":["0","2","16","100","1000","10000","100000","1000000","0.0","0.2","1.0","1.2","1.7","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"one":["1","21","31","41","51","61","71","81","101","1001"],"two":["2","22","32","42","52","62","72","82","102","1002"],"many":["7","8","27","28","37","38","47","48","57","58","67","68","77","78","87","88","107","1007"],"other":["0","3","6","9","19","100","1000","10000","100000","1000000"]}},
ml: a,
mn: a,
mo: {"cardinal":{"one":["1"],"few":["0","2","16","101","1001","0.0","1.0","1.5","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"],"other":["20","35","100","1000","10000","100000","1000000"]},"ordinal":{"one":["1"],"other":["0","2","16","100","1000","10000","100000","1000000"]}},
mr: {"cardinal":{"one":["1","1.0","1.00","1.000","1.0000"],"other":["0","2","16","100","1000","10000","100000","1000000","0.0","0.9","1.1","1.6","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"one":["1"],"two":["2","3"],"few":["4"],"other":["0","5","19","100","1000","10000","100000","1000000"]}},
ms: {"cardinal":{"other":["0","15","100","1000","10000","100000","1000000","0.0","1.0","1.5","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"one":["1"],"other":["0","2","16","100","1000","10000","100000","1000000"]}},
mt: {"cardinal":{"one":["1","1.0","1.00","1.000","1.0000"],"two":["2","2.0","2.00","2.000","2.0000"],"few":["0","3","10","103","109","1003","0.0","3.0","4.0","5.0","6.0","7.0","8.0","9.0","10.0","103.0","1003.0"],"many":["11","19","111","117","1011","11.0","12.0","13.0","14.0","15.0","16.0","17.0","18.0","111.0","1011.0"],"other":["20","35","100","1000","10000","100000","1000000","0.1","0.9","1.1","1.7","10.1","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{}},
my: f,
nah: c,
naq: g,
nb: a,
nd: c,
ne: {"cardinal":{"one":["1","1.0","1.00","1.000","1.0000"],"other":["0","2","16","100","1000","10000","100000","1000000","0.0","0.9","1.1","1.6","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"one":["1","4"],"other":["0","5","19","100","1000","10000","100000","1000000"]}},
nl: d,
nn: c,
nnh: c,
no: a,
nqo: e,
nr: c,
nso: b,
ny: c,
nyn: c,
om: c,
or: {"cardinal":{"one":["1","1.0","1.00","1.000","1.0000"],"other":["0","2","16","100","1000","10000","100000","1000000","0.0","0.9","1.1","1.6","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"one":["1","5","7","9"],"two":["2","3"],"few":["4"],"many":["6"],"other":["0","10","24","100","1000","10000","100000","1000000"]}},
os: c,
osa: e,
pa: {"cardinal":{"one":["0","1","0.0","1.0","0.00","1.00","0.000","1.000","0.0000","1.0000"],"other":["2","17","100","1000","10000","100000","1000000","0.1","0.9","1.1","1.7","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"other":["0","15","100","1000","10000","100000","1000000"]}},
pap: c,
pcm: {"cardinal":{"one":["0","1","0.0","1.0","0.00","0.04"],"other":["2","17","100","1000","10000","100000","1000000","1.1","2.6","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{}},
pl: {"cardinal":{"one":["1"],"few":["2","4","22","24","32","34","42","44","52","54","62","102","1002"],"many":["0","5","19","100","1000","10000","100000","1000000"],"other":["0.0","1.0","1.5","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"other":["0","15","100","1000","10000","100000","1000000"]}},
prg: {"cardinal":{"zero":["0","10","20","30","40","50","60","100","1000","10000","100000","1000000","0.0","10.0","11.0","12.0","13.0","14.0","15.0","16.0","100.0","1000.0","10000.0","100000.0","1000000.0"],"one":["1","21","31","41","51","61","71","81","101","1001","0.1","1.0","1.1","2.1","3.1","4.1","5.1","6.1","7.1","10.1","100.1","1000.1"],"other":["2","9","22","29","102","1002","0.2","0.9","1.2","1.9","10.2","100.2","1000.2"]},"ordinal":{"other":["0","15","100","1000","10000","100000","1000000"]}},
ps: a,
pt: {"cardinal":{"one":["0","1","0.0","1.0","1.5"],"many":["1000000"],"other":["2","17","100","1000","10000","100000","2.0","3.5","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"other":["0","15","100","1000","10000","100000","1000000"]}},
pt_PT: {"cardinal":{"one":["1"],"many":["1000000"],"other":["0","2","16","100","1000","10000","100000","0.0","1.0","1.5","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{}},
rm: c,
ro: {"cardinal":{"one":["1"],"few":["0","2","16","101","1001","0.0","1.0","1.5","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"],"other":["20","35","100","1000","10000","100000","1000000"]},"ordinal":{"one":["1"],"other":["0","2","16","100","1000","10000","100000","1000000"]}},
rof: c,
ru: {"cardinal":{"one":["1","21","31","41","51","61","71","81","101","1001"],"few":["2","4","22","24","32","34","42","44","52","54","62","102","1002"],"many":["0","5","19","100","1000","10000","100000","1000000"],"other":["0.0","1.0","1.5","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"other":["0","15","100","1000","10000","100000","1000000"]}},
rwk: c,
sah: e,
saq: c,
sat: g,
sc: {"cardinal":{"one":["1"],"other":["0","2","16","100","1000","10000","100000","1000000","0.0","1.0","1.5","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"many":["8","11","80","800"],"other":["0","7","9","10","12","17","100","1000","10000","100000","1000000"]}},
scn: {"cardinal":{"one":["1"],"other":["0","2","16","100","1000","10000","100000","1000000","0.0","1.0","1.5","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"many":["8","11","80","800"],"other":["0","7","9","10","12","17","100","1000","10000","100000","1000000"]}},
sd: a,
sdh: c,
se: g,
seh: c,
ses: e,
sg: e,
sh: {"cardinal":{"one":["1","21","31","41","51","61","71","81","101","1001","0.1","1.1","2.1","3.1","4.1","5.1","6.1","7.1","10.1","100.1","1000.1"],"few":["2","4","22","24","32","34","42","44","52","54","62","102","1002","0.2","0.4","1.2","1.4","2.2","2.4","3.2","3.4","4.2","4.4","5.2","10.2","100.2","1000.2"],"other":["0","5","19","100","1000","10000","100000","1000000","0.0","0.5","1.0","1.5","2.0","2.5","2.7","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"other":["0","15","100","1000","10000","100000","1000000"]}},
shi: {"cardinal":{"one":["0","1","0.0","1.0","0.00","0.04"],"few":["2","10","2.0","3.0","4.0","5.0","6.0","7.0","8.0","9.0","10.0","2.00","3.00","4.00","5.00","6.00","7.00","8.00"],"other":["11","26","100","1000","10000","100000","1000000","1.1","1.9","2.1","2.7","10.1","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{}},
si: {"cardinal":{"one":["0","1","0.0","0.1","1.0","0.00","0.01","1.00","0.000","0.001","1.000","0.0000","0.0001","1.0000"],"other":["2","17","100","1000","10000","100000","1000000","0.2","0.9","1.1","1.8","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"other":["0","15","100","1000","10000","100000","1000000"]}},
sk: {"cardinal":{"one":["1"],"few":["2","4"],"many":["0.0","1.0","1.5","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"],"other":["0","5","19","100","1000","10000","100000","1000000"]},"ordinal":{"other":["0","15","100","1000","10000","100000","1000000"]}},
sl: {"cardinal":{"one":["1","101","201","301","401","501","601","701","1001"],"two":["2","102","202","302","402","502","602","702","1002"],"few":["3","4","103","104","203","204","303","304","403","404","503","504","603","604","703","704","1003","0.0","1.0","1.5","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"],"other":["0","5","19","100","1000","10000","100000","1000000"]},"ordinal":{"other":["0","15","100","1000","10000","100000","1000000"]}},
sma: g,
smi: g,
smj: g,
smn: g,
sms: g,
sn: c,
so: c,
sq: {"cardinal":{"one":["1","1.0","1.00","1.000","1.0000"],"other":["0","2","16","100","1000","10000","100000","1000000","0.0","0.9","1.1","1.6","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"one":["1"],"many":["4","24","34","44","54","64","74","84","104","1004"],"other":["0","2","3","5","17","100","1000","10000","100000","1000000"]}},
sr: {"cardinal":{"one":["1","21","31","41","51","61","71","81","101","1001","0.1","1.1","2.1","3.1","4.1","5.1","6.1","7.1","10.1","100.1","1000.1"],"few":["2","4","22","24","32","34","42","44","52","54","62","102","1002","0.2","0.4","1.2","1.4","2.2","2.4","3.2","3.4","4.2","4.4","5.2","10.2","100.2","1000.2"],"other":["0","5","19","100","1000","10000","100000","1000000","0.0","0.5","1.0","1.5","2.0","2.5","2.7","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"other":["0","15","100","1000","10000","100000","1000000"]}},
ss: c,
ssy: c,
st: c,
su: e,
sv: {"cardinal":{"one":["1"],"other":["0","2","16","100","1000","10000","100000","1000000","0.0","1.0","1.5","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"one":["1","2","21","22","31","32","41","42","51","52","61","62","71","72","81","82","101","1001"],"other":["0","3","17","100","1000","10000","100000","1000000"]}},
sw: d,
syr: c,
ta: a,
te: a,
teo: c,
th: f,
ti: b,
tig: c,
tk: {"cardinal":{"one":["1","1.0","1.00","1.000","1.0000"],"other":["0","2","16","100","1000","10000","100000","1000000","0.0","0.9","1.1","1.6","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"few":["6","9","10","16","19","26","29","36","39","106","1006"],"other":["0","5","7","8","11","15","17","18","20","100","1000","10000","100000","1000000"]}},
tl: {"cardinal":{"one":["0","3","5","7","8","10","13","15","17","18","20","21","100","1000","10000","100000","1000000","0.0","0.3","0.5","0.7","0.8","1.0","1.3","1.5","1.7","1.8","2.0","2.1","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"],"other":["4","6","9","14","16","19","24","26","104","1004","0.4","0.6","0.9","1.4","1.6","1.9","2.4","2.6","10.4","100.4","1000.4"]},"ordinal":{"one":["1"],"other":["0","2","16","100","1000","10000","100000","1000000"]}},
tn: c,
to: e,
tpi: f,
tr: a,
ts: c,
tzm: {"cardinal":{"one":["0","1","11","24","0.0","1.0","11.0","12.0","13.0","14.0","15.0","16.0","17.0","18.0","19.0","20.0","21.0","22.0","23.0","24.0"],"other":["2","10","100","106","1000","10000","100000","1000000","0.1","0.9","1.1","1.7","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{}},
ug: c,
uk: {"cardinal":{"one":["1","21","31","41","51","61","71","81","101","1001"],"few":["2","4","22","24","32","34","42","44","52","54","62","102","1002"],"many":["0","5","19","100","1000","10000","100000","1000000"],"other":["0.0","1.0","1.5","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"few":["3","23","33","43","53","63","73","83","103","1003"],"other":["0","2","4","16","100","1000","10000","100000","1000000"]}},
und: f,
ur: d,
uz: a,
ve: c,
vec: {"cardinal":{"one":["1"],"many":["1000000"],"other":["0","2","16","100","1000","10000","100000","0.0","1.0","1.5","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"many":["8","11","80","800"],"other":["0","7","9","10","12","17","100","1000","10000","100000","1000000"]}},
vi: {"cardinal":{"other":["0","15","100","1000","10000","100000","1000000","0.0","1.0","1.5","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"one":["1"],"other":["0","2","16","100","1000","10000","100000","1000000"]}},
vo: c,
vun: c,
wa: b,
wae: c,
wo: e,
xh: c,
xog: c,
yi: {"cardinal":{"one":["1"],"other":["0","2","16","100","1000","10000","100000","1000000","0.0","1.0","1.5","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{}},
yo: e,
yue: f,
zh: f,
zu: {"cardinal":{"one":["0","1","0.0","1.0","0.00","0.04"],"other":["2","17","100","1000","10000","100000","1000000","1.1","2.6","10.0","100.0","1000.0","10000.0","100000.0","1000000.0"]},"ordinal":{"other":["0","15","100","1000","10000","100000","1000000"]}}
}));
