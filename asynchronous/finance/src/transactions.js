const updateBalance = (transactions, amount) => ({
  balance: transactions.balance + amount,
  count: transactions.count + 1,
});

const convertToCSV = (msg1, msg2, msg3) => `${msg1},${msg2},${msg3}\n`;

const appendRecords = ({ name, balance, count }) =>
  Deno.writeTextFile(
    "./data/small_data/balance.csv",
    convertToCSV(name, balance, count),
    {
      append: true,
    }
  );

const parseTransactions = (transactions) =>
  transactions.flatMap((content) => content.split("\n").map(Number));

const consolidate = (name, transactionFiles) => {
  return Promise.all(transactionFiles.map(Deno.readTextFile))
    .then(parseTransactions)
    .then((transactions) =>
      transactions.reduce(updateBalance, { balance: 0, count: 0 })
    )
    .then((summary) => appendRecords({ name, ...summary }));
};

const processCustomerTransactions = (records) => {
  return records.forEach((line) => {
    const [name, ...transactionFiles] = line.split(",");
    consolidate(name, transactionFiles);
  });
};

const main = () => {
  Deno.readTextFile("./data/small_data/customers.csv")
    .then((fileContents) => fileContents.split("\n"))
    .then(processCustomerTransactions)
    .catch(console.error);
};

main();
