import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Arkade Wrap",
  description: "Integrate Ethereum, Polygon and Tron assets with Arkade",
  lang: "en-US",
  cleanUrls: true,
  srcExclude: ["README.md"],
  lastUpdated: true,
  head: [
    ["link", { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }],
    ["meta", { name: "theme-color", content: "#f36523" }],
    ["meta", { property: "og:title", content: "Arkade Wrap API" }],
    ["meta", {
      property: "og:description",
      content: "Developer documentation for wrapping assets into Arkade and redeeming them on mainnet.",
    }],
  ],
  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "Arkade Wrap",
    nav: [
      { text: "Guide", link: "/guide/getting-started" },
      { text: "API Reference", link: "https://api.arkadewrap.com/docs" },
      { text: "Mainnet assets", link: "/assets/mainnet" },
    ],
    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "Overview", link: "/" },
          { text: "Getting started", link: "/guide/getting-started" },
          { text: "Wrap flow", link: "/guide/wrap" },
          { text: "Unwrap flow", link: "/guide/unwrap" },
          { text: "Errors & rate limits", link: "/guide/errors" },
        ],
      },
      {
        text: "Integration examples",
        items: [
          { text: "API overview", link: "/api/" },
          { text: "POST /wrap", link: "/api/wrap" },
          { text: "POST /unwrap", link: "/api/unwrap" },
          { text: "GET /quote/:id", link: "/api/quote" },
          { text: "Live API reference ↗", link: "https://api.arkadewrap.com/docs" },
        ],
      },
      {
        text: "Networks",
        items: [
          { text: "Mainnet assets", link: "/assets/mainnet" },
          { text: "Asset registry JSON", link: "/assets/mainnet.json" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/arkade-os" },
    ],
    footer: {
      message: "Arkade Wrap developer documentation",
      copyright: "Built for the Arkade ecosystem",
    },
    search: { provider: "local" },
    outline: { level: [2, 3] },
  },
});
