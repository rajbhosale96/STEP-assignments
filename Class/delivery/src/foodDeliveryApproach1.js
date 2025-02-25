const processNext = (msg, timeElapse, nextState, orderDetails) => {
  setTimeout(() => {
    console.log(msg, orderDetails);
    nextState(orderDetails);
  }, timeElapse);
};

const displayStatus = (msg) => {
  console.log(msg);
};

const deliveryingOrder = ({ ...orderDetails }) => {
  displayStatus("Delivering Order...");
  processNext("Order Delivered", 5000, Deno.exit, orderDetails);
};

const packingOrder = ({ ...orderDetails }) => {
  displayStatus("Packing Order...");
  processNext("Order packed:", 2000, deliveryingOrder, orderDetails);
};

const perparingFood = ({ ...orderDetails }) => {
  displayStatus("Preparing food...");

  processNext("Food is ready...", 3000, packingOrder, orderDetails);
};

const orderReceived = () => {
  const orderId = Math.floor(Math.random() * 100 + 100);
  const orderDetails = { orderId: orderId };
  processNext("Order received:", 0, perparingFood, orderDetails);
};

const main = () => {
  orderReceived();
};

main();
