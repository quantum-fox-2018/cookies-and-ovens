const {Cookie} = require("./cookies.js");

class KueKacang extends Cookie {
  constructor() {
    super();
    this._waktuMatang = 30;
  }
}

module.exports = {
  KueKacang
};
