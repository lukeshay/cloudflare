import { Record, Zone } from "@pulumi/cloudflare";

const zone = new Zone(
	"lshay-dev",
	{
		plan: "free",
		zone: "lshay.dev",
	},
	{
		protect: true,
	},
);

new Record("mail-server-1", {
	name: "@",
	priority: 10,
	proxied: false,
	type: "MX",
	value: "mx1.privateemail.com",
	zoneId: zone.id,
});

new Record("mail-server-2", {
	name: "@",
	priority: 10,
	proxied: false,
	type: "MX",
	value: "mx2.privateemail.com",
	zoneId: zone.id,
});

new Record("mail-server-txt", {
	name: "@",
	proxied: false,
	type: "TXT",
	value: "v=spf1 include:spf.privateemail.com ~all",
	zoneId: zone.id,
});

new Record("pompous-a", {
	name: "pompous",
	proxied: false,
	type: "A",
	value: "d3i656xw71x3lf.cloudfront.net",
	zoneId: zone.id,
});

new Record("pompous-aaaa", {
	name: "pompous",
	proxied: false,
	type: "AAAA",
	value: "d3i656xw71x3lf.cloudfront.net",
	zoneId: zone.id,
});
