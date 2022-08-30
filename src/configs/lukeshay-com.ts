import { PageRule, Zone } from "@pulumi/cloudflare";

import { addRecords } from "../lib/deno-deploy";

const zone = new Zone(
	"lukeshay-com",
	{
		plan: "free",
		zone: "lukeshay.com",
	},
	{
		protect: true,
	},
);

addRecords("fresh", zone.id, "8b4d7903a993d63d627962dc._acme.deno.dev");
addRecords("www", zone.id, "7c9e8fcc6f7ea5fa0f62c238._acme.deno.dev");
addRecords("@", zone.id, "dd2650195b4678fec5d9cae9._acme.deno.dev");

new PageRule("lukeshay-com", {
	actions: {
		forwardingUrl: {
			statusCode: 302,
			url: "https://www.lukeshay.com/$1",
		},
	},
	target: "https://lukeshay.com/*",
	zoneId: zone.id,
});
