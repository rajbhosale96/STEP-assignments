export class Ratio {
  #numerator;
  #denominator;

  constructor(numerator, denominator) {
    this.#numerator = numerator;
    this.#denominator = denominator;
  }

  toString() {
    return `${this.#numerator}/${this.#denominator}`;
  }

  gcd(num1, num2) {
    if (num2 === 0) {
      return num1;
    }
    return this.gcd(num2, num1 % num2);
  }

  simplify() {
    const gcd = this.gcd(this.#numerator, this.#denominator);
    return new Ratio(this.#numerator / gcd, this.#denominator / gcd);
  }

  add(ratio) {
    const numerator =
      this.#numerator * ratio.#denominator +
      ratio.#numerator * this.#denominator;
    const denominator = this.#denominator * ratio.#denominator;

    return new Ratio(numerator, denominator);
  }
  
  sub(ratio) {
    const numerator =
      this.#numerator * ratio.#denominator -
      ratio.#numerator * this.#denominator;
    const denominator = this.#denominator * ratio.#denominator;

    return new Ratio(numerator, denominator);
  }
}
