// const expense = [12.5, 3.45, 1.75, 2.3];

// export const calculateTotalExpense = (expense) => {
//   const totalExpense = expense.reduce((sum, number) => Number(number) + sum, 0);

//   return Number(totalExpense.toFixed(2));
// };

export class Expense {
  #dollars;
  #cents;

  constructor(dollars, cents) {
    this.#dollars = dollars;
    this.#cents = cents;
  }

  static parse(cash) {
    const totalCents = Math.floor(cash * 100);
    const dollars = Math.floor(totalCents / 100);
    const cents = totalCents % 100;

    return new Expense(dollars, cents);
  }

  add(otherExpense) {
    const totalCents = this.#cents + otherExpense.#cents;
    const totalDollars =
      this.#dollars + otherExpense.#dollars + Math.floor(totalCents / 100);

    return new Expense(totalDollars, totalCents % 100);
  }

  toString() {
    return `${this.#dollars}.${this.#cents}`;
  }
}

// const cents = this.#cents + otherExpense.#cents;
// const dollars = this.#dollars + otherExpense.#dollars;
// const totalCents = cents % 100;
// const totalDollars = dollars + Math.floor(cents / 100);

// return new Expense(totalDollar, totalCents);
