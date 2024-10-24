function telephone(n, p, s, r) {
  this.marque = n;
  this.prix = p;
  this.stock = s;
  this.ref = r;
  this.verifierStock = function () {
    if (this.stock > 0) return true;
    else return false;
  };
}

let tel = new telephone("SmartF22", 400, 200, "Smartphone2022");

console.log(tel.marque);
console.log(tel.verifierStock());
