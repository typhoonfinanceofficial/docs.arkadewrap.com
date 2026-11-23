---
layout: home

hero:
  name: "Arkade Wrap"
  text: "Move assets into Arkade"
  tagline: Integrate mainnet wrapping and redemption across Ethereum, Polygon and Tron with a small HTTP API.
  image:
    src: /logo.svg
    alt: Arkade Wrap
  actions:
    - theme: brand
      text: Start integrating
      link: /guide/getting-started
    - theme: alt
      text: Live API reference
      link: https://api.arkadewrap.com/docs

features:
  - title: One quote API
    details: Request a deposit destination, submit the exact transfer and poll one resource through completion.
  - title: Multi-chain
    details: Support for native and token assets on Ethereum, Polygon and Tron, settled as Arkade assets.
  - title: Machine-readable assets
    details: Consume the public mainnet registry to discover identifiers, decimals, contracts and enabled directions.
---

## How it works

Arkade Wrap is a custodial bridge between external chains and Arkade:

1. Your application requests a time-limited quote.
2. The API returns the treasury address for that quote.
3. The user sends the asset from the declared sender address.
4. The service detects and confirms the deposit.
5. The wrapped asset or underlying payout is sent to the declared receiver.

Use the production API at:

```text
https://api.arkadewrap.com
```

::: warning Mainnet funds
The production API moves real assets. Always validate the selected network,
ticker, amount, sender and receiver before asking the user to transfer funds.
:::
