# Mainnet assets

This is the canonical public registry for Arkade Wrap mainnet integrations.
The same data is available as [machine-readable JSON](/assets/mainnet.json).

Last updated: **2026-11-17**

## Arkade asset IDs

| Arkade asset | Decimals | Asset ID |
| --- | ---: | --- |
| `ETH-CX` | 18 | <span class="asset-id">28a0194ea9a8d4383f630af83e4c564a38803b3f1f21123efd09ffaef3265f380000</span> |
| `USDT-CX` | 6 | <span class="asset-id">d4e095d6e9003607655a65936057a4db37e9cf2b3003d522ea121df5793f76a00000</span> |
| `POL-CX` | 18 | <span class="asset-id">2e362cab95506c03e2e7c2905ebf9a1dfc18657bca5815943e5ebd8b3d85e0f90000</span> |
| `TRX-CX` | 6 | <span class="asset-id">161d02fbced1a827e422b14189fd35eddaf4a29c1f337f57a30f4a22eeeb7c7c0000</span> |

Arkade network: `mainnet`  
Arkade server: `https://arkade.computer`

## Supported pairs

| Chain | Underlying | Arkade asset | Contract | Operations |
| --- | --- | --- | --- | --- |
| Ethereum | `ETH` | `ETH-CX` | Native | wrap, unwrap |
| Ethereum | `USDT` | `USDT-CX` | `0xdAC17F958D2ee523a2206206994597C13D831ec7` | wrap, unwrap |
| Polygon | `POL` | `POL-CX` | Native | wrap, unwrap |
| Polygon | `USDT` | `USDT-CX` | `0xc2132D05D31c914a87C6611C10748AEb04B58e8F` | wrap only |
| Tron | `TRX` | `TRX-CX` | Native | wrap, unwrap |
| Tron | `USDT` | `USDT-CX` | `TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t` | wrap only |

::: warning Verify identifiers
Asset IDs and token contracts are network-specific. Compare identifiers
exactly; never select an asset by ticker alone.
:::

## Registry consumption

```js
const { assets } = await fetch(
  "https://docs.arkadewrap.com/assets/mainnet.json",
).then((response) => response.json());

const availableForUnwrap = assets.filter((asset) =>
  asset.operations.includes("unwrap"),
);
```
