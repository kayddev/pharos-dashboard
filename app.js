function generateData() {
  return {
    wallets: 8000 + Math.floor(Math.random() * 2000),
    txs: 45000 + Math.floor(Math.random() * 5000),
    block: 920000 + Math.floor(Math.random() * 1000)
  };
}

function loadData() {
  const data = generateData();

  document.getElementById("wallets").innerText = data.wallets;
  document.getElementById("txs").innerText = data.txs;
  document.getElementById("block").innerText = data.block;
}

// Auto refresh every 3 seconds
setInterval(loadData, 3000);

// Initial load
loadData();
