import { Record, Zone } from "@pulumi/cloudflare";

import { DenoDeploy } from "../lib/deno-deploy";

const lukeshayCom = new Zone(
  "lukeshay-com",
  {
    plan: "free",
    zone: "lukeshay.com",
  },
  {
    protect: true,
  },
);

new Record("fresh-a", {
  name: "fresh",
  proxied: true,
  type: "A",
  value: DenoDeploy.IPv4,
  zoneId: lukeshayCom.id,
});

new Record("fresh-aaaa", {
  name: "fresh",
  proxied: true,
  type: "AAAA",
  value: DenoDeploy.IPv6,
  zoneId: lukeshayCom.id,
});

new Record("fresh-acme-challenge", {
  name: "_acme-challenge.fresh",
  proxied: false,
  type: "CNAME",
  value: "8b4d7903a993d63d627962dc._acme.deno.dev",
  zoneId: lukeshayCom.id,
});

new Record("www-a", {
  name: "www",
  proxied: true,
  type: "A",
  value: DenoDeploy.IPv4,
  zoneId: lukeshayCom.id,
});

new Record("www-aaaa", {
  name: "www",
  proxied: true,
  type: "AAAA",
  value: DenoDeploy.IPv6,
  zoneId: lukeshayCom.id,
});

new Record("www-acme-challenge", {
  name: "_acme-challenge.www",
  proxied: false,
  type: "CNAME",
  value: "7c9e8fcc6f7ea5fa0f62c238._acme.deno.dev",
  zoneId: lukeshayCom.id,
});

new Record("@-a", {
  name: "@",
  proxied: true,
  type: "A",
  value: DenoDeploy.IPv4,
  zoneId: lukeshayCom.id,
});

new Record("@-aaaa", {
  name: "@",
  proxied: true,
  type: "AAAA",
  value: DenoDeploy.IPv6,
  zoneId: lukeshayCom.id,
});

new Record("@-acme-challenge", {
  name: "_acme-challenge",
  proxied: false,
  type: "CNAME",
  value: "dd2650195b4678fec5d9cae9._acme.deno.dev",
  zoneId: lukeshayCom.id,
});
