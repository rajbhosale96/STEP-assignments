import { Ratio } from "./ratio.js";

function main() {
  const sugarPart = new Ratio(1, 3);
  const eggPart = new Ratio(1, 4);
  const totalMixture = new Ratio(2, 2);
  const flourPart = totalMixture.sub(sugarPart.add(eggPart));

  console.log("flour part:", flourPart.simplify().toString());
  // Answer is 5/12
}

main();
