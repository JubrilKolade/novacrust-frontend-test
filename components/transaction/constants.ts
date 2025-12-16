export const tabOptions = [
  { value: "crypto-to-cash", label: "Crypto to cash" },
  { value: "cash-to-crypto", label: "Cash to crypto" },
  { value: "crypto-to-fiat-loan", label: "Crypto to fiat loan" },
];

export const cryptoCurrencies = [
  { value: "eth", label: "ETH", icon: "/eth.png", color: "#627EEA" },
  { value: "usdt-celo", label: "USDT - CELO", icon: "/celo.png", color: "#26A17B" },
  { value: "usdt-ton", label: "USDT - TON", icon: "/ton.png", color: "#0088CC" },
  { value: "usdt-bnb", label: "USDT - BNB", icon: "/bnb.png", color: "#F3BA2F" },
];

export const fiatCurrencies = [
  { value: "ngn", label: "NGN", icon: "/ng.png", color: "#008751" },
  { value: "usd", label: "USD", icon: "/ng.png", color: "#002868" },
  { value: "eur", label: "EUR", icon: "/ng.png", color: "#003399" },
  { value: "gbp", label: "GBP", icon: "/ng.png", color: "#012169" },
];

export const walletOptions = [
  { value: "metamask", label: "Metamask", icon: "/metamask.png" },
  { value: "rainbow", label: "Rainbow", icon: "/rainbow.png" },
  { value: "walletconnect", label: "WalletConnect", icon: "/walletconnect.png" },
  { value: "other", label: "Other Crypto Wallets (Binance, Coinbase, Bybit etc)", icon: "/Wallet.png" },
];

export const bankOptions = [
  { value: "gtbank", label: "GTBank" },
  { value: "firstbank", label: "First Bank" },
  { value: "zenith", label: "Zenith Bank" },
  { value: "access", label: "Access Bank" },
  // { value: "uba", label: "UBA" },
  // { value: "kuda", label: "Kuda Bank" },
  // { value: "opay", label: "OPay" },
];

export type CurrencyOption = typeof cryptoCurrencies[number];
export type WalletOption = typeof walletOptions[number];
export type BankOption = typeof bankOptions[number];

