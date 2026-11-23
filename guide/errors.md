# Errors and rate limits

Every non-success response uses the same JSON envelope:

```json
{
  "statusCode": 400,
  "error": "Bad Request",
  "message": "Unsupported wrap: ethereum/FOO"
}
```

## Common status codes

| Status | Meaning | Client action |
| --- | --- | --- |
| `400` | Invalid address, chain, ticker or quote ID | Correct the request; do not retry unchanged |
| `403` | The client exceeded the ban threshold | Stop requests and wait |
| `404` | Quote not found | Verify the quote ID |
| `429` | Rate limit exceeded | Back off before retrying |
| `500` | Internal server error | Retry later with exponential backoff |

## Retry policy

- Retry only `429` and `5xx` responses automatically.
- Use exponential backoff with jitter.
- Do not create another quote merely because status polling failed.
- Keep the original quote ID and resume polling.
- Limit polling to a reasonable cadence, such as once every 5–10 seconds.
