# `POST /unwrap`

Creates a quote for depositing an Arkade CX asset and receiving its underlying
asset on the selected destination chain.

For the canonical schema and interactive request builder, use the
[live API reference](https://api.arkadewrap.com/docs).

## Request

```http
POST /unwrap HTTP/1.1
Host: api.arkadewrap.com
Content-Type: application/json
```

```json
{
  "chain": "ethereum",
  "ticker": "USDT-CX",
  "sender": "ark1yourmainnetarkadeaddress",
  "receiver": "0x742d35cc6634c0532925a3b844bc9e7595f0beb1"
}
```

| Field | Type | Description |
| --- | --- | --- |
| `chain` | string | Destination chain |
| `ticker` | string | Arkade ticker, including the `-CX` suffix |
| `sender` | string | Arkade address that will originate the deposit |
| `receiver` | string | Destination-chain payout address |

::: warning Ticker format
Unlike `/wrap`, this endpoint expects the Arkade CX ticker. Use `USDT-CX`
rather than `USDT`.
:::

## Example

```bash
curl --request POST https://api.arkadewrap.com/unwrap \
  --header 'content-type: application/json' \
  --data '{
    "chain": "ethereum",
    "ticker": "USDT-CX",
    "sender": "ark1yourmainnetarkadeaddress",
    "receiver": "0x742d35cc6634c0532925a3b844bc9e7595f0beb1"
  }'
```

The response has the same shape as a [wrap quote](/api/wrap), with
`type: "unwrap"`. Send the correct Arkade asset ID to `treasury` from the exact
`sender`, then poll [`GET /quote/:id`](/api/quote).
