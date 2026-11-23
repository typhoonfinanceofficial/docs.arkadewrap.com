# Redeem from Arkade

Unwrapping redeems an Arkade wrapped asset for the underlying asset on its
destination chain.

## Flow

```text
POST /unwrap
    ↓
receive quote and Arkade treasury
    ↓
send the CX asset from quote.sender to quote.treasury
    ↓
pending → deposited → processing → completed
    ↓
receive the underlying asset at quote.receiver
```

## Integration rules

- Pass the **Arkade ticker** in the request, for example `ETH-CX`, `USDT-CX`,
  `POL-CX` or `TRX-CX`.
- The sender must be the Arkade address that makes the deposit.
- The receiver must be valid for the selected destination chain.
- Use the Arkade asset ID from the [mainnet registry](/assets/mainnet).
- Check that the selected pair includes `unwrap` in `operations`.

::: info Liquidity
After a deposit is detected, a quote can remain in `deposited` while the
destination hot wallet is being replenished. The Arkade asset is not burned
until payout liquidity is available.
:::

Continue to [`POST /unwrap`](/api/unwrap) for the full request and response.
