const {Cookie} = require("./cookies.js");

class KueCoklat extends Cookie {
  constructor() {
    super();
    this._waktuMatang = 20;
  }
}

module.exports = {
  KueCoklat
};
