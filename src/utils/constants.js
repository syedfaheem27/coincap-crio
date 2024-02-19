export const drawerWidth = 240;
export const navItems = ["Coins", "Exchanges", "Swap", "API", "Settings"];
export const MarketSnap = [
  "Market Cap",
  "Exchange Vol",
  "Assets",
  "Exchanges",
  "Markets",
  "BTC Dom Index",
];
export const DATA_PER_PAGE = 20;

export const getTotalMarketCap = (data) =>
  data.reduce((acc, curr) => acc + curr.marketCapUsd / Math.pow(10, 12), 0);

export const getExchangeVolume = (data) =>
  data.reduce((acc, curr) => acc + curr.volumeUsd24Hr / Math.pow(10, 9), 0);
