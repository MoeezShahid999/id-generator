"use strict"
var _alphabets_lc = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var _alphabets_uc = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var _numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var _symb = ["!", "@", "#", "$", "%", "^", "&", "*"];

const id_generator = (length) => {

  const ch_generator = () => {
    const len = _alphabets_lc.length;
    const random_ind = Math.floor(Math.random() * len);
    return _alphabets_lc[random_ind];
  };

  const CH_generator = () => {
    const len = _alphabets_uc.length;
    const random_ind = Math.floor(Math.random() * len);
    return _alphabets_uc[random_ind];
  };
  const num_generator = () => {
    const len = _numbers.length;
    const random_ind = Math.floor(Math.random() * len);
    return _numbers[random_ind];
  };
  const symb_generator = () => {
    const len = _symb.length;
    const random_ind = Math.floor(Math.random() * len);
    return _symb[random_ind];
  };

  const idEl_generator = () => {
    const arr = [ch_generator, CH_generator, num_generator, symb_generator];
    const len = 4;
    const random_ind = Math.floor(Math.random() * len);
    return arr[random_ind]();
  };

  let id = "";
  if (typeof length === 'number') {
    if (isNaN(length)) {
      throw new Error("Please provide a valid number");
    }

    if (length > 3) {
      for (let i = 0; i < length; i++) {
        id += idEl_generator();
      }
    } else {
      throw new Error("Can not create an id of length less than four");
    }
  } else {
    throw new Error("Please provide length of type number");
  }
  return id;
};

module.exports = id_generator;
