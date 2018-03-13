class Cookie {
  constructor() {
    this._waktuMatang = 0;
  }

  set waktuMatang(waktu) {
    this._waktuMatang = waktu;
  }
}

module.exports = {
  Cookie
};
