# API integration

The canonical, interactive API reference is published by the production
service:

[Open the live API reference →](https://api.arkadewrap.com/docs)

It is generated directly from the API schemas and should be considered the
source of truth for request and response definitions. The pages in this
section provide integration examples and explain the quote lifecycle.

## Base URL

```text
https://api.arkadewrap.com
```

Requests use `Content-Type: application/json`. No authentication header is
currently required.

## Endpoints

| Method | Path | Purpose |
| --- | --- | --- |
| `POST` | [`/wrap`](/api/wrap) | Create a quote to wrap an external-chain asset |
| `POST` | [`/unwrap`](/api/unwrap) | Create a quote to redeem an Arkade asset |
| `GET` | [`/quote/:id`](/api/quote) | Read the current quote status |
| `GET` | `/health` | Check API availability |

The current OpenAPI 3.1 document is available from the production API at
[`https://api.arkadewrap.com/openapi.json`](https://api.arkadewrap.com/openapi.json).

## Conventions

- Chain and ticker values are case-sensitive; use values exactly as published.
- Monetary values are base-unit integer strings.
- Quote expiry is a Unix timestamp in milliseconds.
- Transaction hash fields remain `null` until the corresponding step occurs.
