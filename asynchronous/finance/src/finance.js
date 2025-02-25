const files = [
  "./data/small_data/trans1.txt",
  "./data/small_data/trans2.txt",
  "./data/small_data/trans3.txt",
];

const fetchCustomerTransactions = ({ name, transactionFiles }) => {
  const allTransactions = transactionFiles.map(Deno.readTextFile);
  return Promise.all(allTransactions).then((data) => ({ name, data }));
};

const parseCustomerRecord = (data) => {
  const [name, ...transactionFiles] = data.split(",");

  return { name, transactionFiles };
};

const calculateTransactions = (transactions, amount) => {
  return {
    balance: transactions.balance + Number(amount),
    count: transactions.count + 1,
  };
};

const transactionSummary = ({ name, data }) => {
  const allTransactions = data.flatMap((data) => data.split("\n"));
  const transactions = allTransactions.reduce(calculateTransactions, {
    balance: 0,
    count: 0,
  });

  return { name, ...transactions };
};

const main = () => {
  Deno.readTextFile("./data/small_data/customers.csv")
    .then((fileContents) => fileContents.split("\n"))
    .then((lines) => lines.map(parseCustomerRecord))
    .then((customersRecord) =>
      Promise.all(customersRecord.map(fetchCustomerTransactions))
    )
    .then((customersSummary) => customersSummary.map(transactionSummary))
    .then(console.log);
};

main();


