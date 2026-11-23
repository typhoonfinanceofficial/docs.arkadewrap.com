# Getting started

The API accepts and returns JSON over HTTPS. It does not currently require an
API key.

```js
const API_URL = "https://api.arkadewrap.com";
```

## 1. Select an asset

Read the [mainnet asset registry](/assets/mainnet) or fetch it directly:

```js
const registry = await fetch(
  "https://docs.arkadewrap.com/assets/mainnet.json",
).then((response) => response.json());

const asset = registry.assets.find(
  ({ chain, ticker }) => chain === "ethereum" && ticker === "USDT",
);
```

The registry's `operations` array indicates whether a pair supports `wrap`,
`unwrap`, or both.

## 2. Create a quote

For a wrap, identify the source chain sender and the Arkade receiver:

```js
const response = await fetch(`${API_URL}/wrap`, {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: JSON.stringify({
    chain: "ethereum",
    ticker: "USDT",
    sender: "0xYourEthereumAddress",
    receiver: "ark1yourarkadeaddress",
  }),
});

if (!response.ok) throw new Error(await response.text());
const quote = await response.json();
```

## 3. Fulfil the quote

Send the selected asset:

- **from exactly** the `sender` supplied in the request;
- **to exactly** `quote.treasury`;
- before `quote.expiry`, expressed as Unix time in milliseconds.

The service matches a transfer by chain, ticker, sender and treasury. A transfer
from a different address will not fulfil the quote.

::: danger Do not reuse treasury addresses blindly
Always create a quote before transferring. A treasury address is not a unique
payment address, and a direct transfer without an active matching quote may not
be credited.
:::

## 4. Poll the status

```js
async function waitForQuote(id) {
  while (true) {
    const response = await fetch(`${API_URL}/quote/${id}`);
    if (!response.ok) throw new Error(await response.text());

    const quote = await response.json();
    if (["completed", "failed", "expired"].includes(quote.status)) return quote;

    await new Promise((resolve) => setTimeout(resolve, 5_000));
  }
}
```

Use backoff and stop polling after a terminal status. See
[quote lifecycle](/api/quote) for every state.

## Amounts and precision

All amounts returned by the API are decimal strings in the asset's smallest
unit. Do not parse them as JavaScript `Number`; use `BigInt` or a decimal-safe
library.

```js
const amount = BigInt(quote.amount);
const decimals = asset.decimals;
```
