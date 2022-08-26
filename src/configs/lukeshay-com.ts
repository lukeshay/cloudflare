import { Record } from "@pulumi/cloudflare";

import { DenoDeploy } from "../lib/deno-deploy";
import { Zones } from "../lib/zones";

new Record("fresh-a", {
  zoneId: Zones.LUKESHAY_COM,
  name: "fresh",
  type: "A",
  value: DenoDeploy.IPv4,
  proxied: true,
});

new Record("fresh-aaaa", {
  zoneId: Zones.LUKESHAY_COM,
  name: "fresh",
  type: "AAAA",
  value: DenoDeploy.IPv6,
  proxied: true,
});

new Record("fresh-acme-challenge", {
  zoneId: Zones.LUKESHAY_COM,
  name: "_acme-challenge.fresh",
  type: "CNAME",
  value: "8b4d7903a993d63d627962dc._acme.deno.dev",
  proxied: false,
});

new Record("www-a", {
  zoneId: Zones.LUKESHAY_COM,
  name: "www",
  type: "A",
  value: DenoDeploy.IPv4,
  proxied: true,
});

new Record("www-aaaa", {
  zoneId: Zones.LUKESHAY_COM,
  name: "www",
  type: "AAAA",
  value: DenoDeploy.IPv6,
  proxied: true,
});

new Record("www-acme-challenge", {
  zoneId: Zones.LUKESHAY_COM,
  name: "_acme-challenge.www",
  type: "CNAME",
  value: "7c9e8fcc6f7ea5fa0f62c238._acme.deno.dev",
  proxied: false,
});

new Record("@-a", {
  zoneId: Zones.LUKESHAY_COM,
  name: "@",
  type: "A",
  value: DenoDeploy.IPv4,
  proxied: true,
});

new Record("@-aaaa", {
  zoneId: Zones.LUKESHAY_COM,
  name: "@",
  type: "AAAA",
  value: DenoDeploy.IPv6,
  proxied: true,
});

new Record("@-acme-challenge", {
  zoneId: Zones.LUKESHAY_COM,
  name: "_acme-challenge",
  type: "CNAME",
  value: "dd2650195b4678fec5d9cae9._acme.deno.dev",
  proxied: false,
});
