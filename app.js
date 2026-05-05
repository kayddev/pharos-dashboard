async function loadData() {
  // TEMP: mock data (replace with real API later)
  const data = {
    wallets: Math.floor(Math.random() * 10000),
    txs: Math.floor(Math.random() * 50000),
    block: Math.floor(Math.random() * 1000000)
  };

  document.getElementById("wallets").innerText = data.wallets;
  document.getElementById("txs").innerText = data.txs;
  document.getElementById("block").innerText = data.block;
}

// auto load
loadData();
