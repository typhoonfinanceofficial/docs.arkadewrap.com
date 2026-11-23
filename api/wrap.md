# `POST /wrap`

Creates a quote for depositing an external-chain asset and receiving its Arkade
counterpart.

For the canonical schema and interactive request builder, use the
[live API reference](https://api.arkadewrap.com/docs).

## Request

```http
POST /wrap HTTP/1.1
Host: api.arkadewrap.com
Content-Type: application/json
```

```json
{
  "chain": "ethereum",
  "ticker": "USDT",
  "sender": "0x742d35cc6634c0532925a3b844bc9e7595f0beb1",
  "receiver": "ark1yourmainnetarkadeaddress"
}
```

| Field | Type | Description |
| --- | --- | --- |
| `chain` | string | Source chain: `ethereum`, `polygon` or `tron` |
| `ticker` | string | Underlying ticker enabled for wrapping |
| `sender` | string | Address that will originate the deposit |
| `receiver` | string | Arkade address that will receive the CX asset |

## Example

```bash
curl --request POST https://api.arkadewrap.com/wrap \
  --header 'content-type: application/json' \
  --data '{
    "chain": "ethereum",
    "ticker": "USDT",
    "sender": "0x742d35cc6634c0532925a3b844bc9e7595f0beb1",
    "receiver": "ark1yourmainnetarkadeaddress"
  }'
```

## Response

```json
{
  "id": "3f4c0b5a-2e1d-4a7b-9f8c-1a2b3c4d5e6f",
  "type": "wrap",
  "chain": "ethereum",
  "ticker": "USDT",
  "sender": "0x742d35cc6634c0532925a3b844bc9e7595f0beb1",
  "receiver": "ark1yourmainnetarkadeaddress",
  "treasury": "0x00000000000000000000000000000000deadbeef",
  "status": "pending",
  "amount": null,
  "fee_amount": null,
  "payout_amount": null,
  "deposit_tx_hash": null,
  "mint_tx_hash": null,
  "burn_tx_hash": null,
  "payout_tx_hash": null,
  "expiry": 1795000000000
}
```

Deposit to `treasury` from the exact `sender` before `expiry`, then poll
[`GET /quote/:id`](/api/quote).
