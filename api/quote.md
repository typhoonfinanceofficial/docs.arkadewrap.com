# `GET /quote/:id`

Returns the latest state of a quote.

For the canonical response schema, use the
[live API reference](https://api.arkadewrap.com/docs).

```bash
curl https://api.arkadewrap.com/quote/3f4c0b5a-2e1d-4a7b-9f8c-1a2b3c4d5e6f
```

## Lifecycle

```text
pending → deposited → processing → completed
   └──────────────→ expired       └→ failed
```

| Status | Meaning |
| --- | --- |
| `pending` | Waiting for a matching deposit |
| `deposited` | Deposit detected; may be waiting for confirmations or liquidity |
| `processing` | Mint, burn or payout is in progress |
| `completed` | Payout completed |
| `failed` | Processing failed and requires investigation |
| `expired` | No matching deposit was detected before expiry |

## Response fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | string | Quote UUID |
| `type` | string | `wrap` or `unwrap` |
| `chain` | string | External source or destination chain |
| `ticker` | string | Requested asset ticker |
| `sender` | string | Required deposit origin |
| `receiver` | string | Final payout destination |
| `treasury` | string | Required deposit destination |
| `status` | string | Current lifecycle state |
| `amount` | string \| null | Observed deposit in base units |
| `fee_amount` | string \| null | Protocol fee in base units |
| `payout_amount` | string \| null | Net payout in base units |
| `deposit_tx_hash` | string \| null | Detected deposit transaction |
| `mint_tx_hash` | string \| null | Arkade mint transaction for wrap |
| `burn_tx_hash` | string \| null | Arkade burn transaction for unwrap |
| `payout_tx_hash` | string \| null | Final payout transaction |
| `expiry` | number | Unix timestamp in milliseconds |

`amount`, `fee_amount` and `payout_amount` are integer strings so they remain
safe for arbitrary precision.
