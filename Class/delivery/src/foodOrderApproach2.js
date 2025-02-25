const formatTime = (time) => {
  return ((Date.now() - time) / 1000).toFixed(2);
};

const display = ({ time, status, ...details }) => {
  console.log(`[${formatTime(time)}s] ${status}:`, details);
};

const displayNext = ({ time, status }) => {
  console.log(`[${formatTime(time)}s] ${status}...`);
};

const receiveOrder = () => {
  const foodDetails = "Burger and Fries";
  const orderId = Math.floor(Math.random() * 100 + 100);
  return { foodDetails, orderId };
};

const deliverOrder = (details) => {
  const orderDetails = {
    ...details,
    status: "Order delivered",
    deliveryDetails: "Delivered by John at 7:30 PM",
  };

  display(orderDetails);

  return Deno.exit(0);
};

const packOrder = (details) => {
  const orderDetails = {
    ...details,
    status: "Order packed",
    packageDetails: "Packed in eco-friendly box",
  };

  display(orderDetails);
  displayNext({ ...orderDetails, status: "Delivering order" });

  return setTimeout(() => deliverOrder(orderDetails), 5000);
};

const prepareOrder = (details) => {
  const orderDetails = {
    ...details,
    status: "Food is ready",
  };

  display(orderDetails);
  displayNext({ ...orderDetails, status: "Packing order" });

  return setTimeout(() => packOrder(orderDetails), 2000);
};

const main = () => {
  const { foodDetails, orderId } = receiveOrder();

  const orderDetails = {
    time: Date.now(),
    orderId: orderId,
    status: "Order received",
  };

  display(orderDetails);
  displayNext({ ...orderDetails, status: "Preparing food" });

  return setTimeout(() => prepareOrder({ ...orderDetails, foodDetails }), 3000);
};

main();
