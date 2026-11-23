# Wrap into Arkade

Wrapping converts an asset on Ethereum, Polygon or Tron into its Arkade
counterpart, such as `USDT` into `USDT-CX`.

## Flow

```text
POST /wrap
    ↓
receive quote and external-chain treasury
    ↓
send the underlying asset from quote.sender to quote.treasury
    ↓
pending → deposited → processing → completed
    ↓
receive the Arkade asset at quote.receiver
```

## Integration rules

- Pass the underlying ticker in the request, for example `ETH`, `USDT`, `POL`
  or `TRX`.
- The sender must be an address on the selected external chain.
- The receiver must be a mainnet Arkade address beginning with `ark1`.
- Transfer from the exact sender used to create the quote.
- ERC-20 and TRC-20 transfers must use the contract listed in the
  [mainnet registry](/assets/mainnet).
- Treat a quote as successful only after `status` becomes `completed`.

Continue to [`POST /wrap`](/api/wrap) for the full request and response.
