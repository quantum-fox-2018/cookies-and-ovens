const {Cookie} = require("./cookies.js");

class KueKeju extends Cookie {
  constructor() {
    super();
    this._waktuMatang = 35;
  }
}

module.exports = {
  KueKeju
};
