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

new Record("aws-ns-com", {
	name: "@",
	type: "NS",
	value: "ns-381.awsdns-47.com",
	zoneId: zone.id,
});

new Record("aws-ns-co-uk", {
	name: "@",
	type: "NS",
	value: "ns-1776.awsdns-30.co.uk",
	zoneId: zone.id,
});

new Record("aws-ns-org", {
	name: "@",
	type: "NS",
	value: "ns-1161.awsdns-17.org",
	zoneId: zone.id,
});

new Record("aws-ns-net", {
	name: "@",
	type: "NS",
	value: "ns-789.awsdns-34.net",
	zoneId: zone.id,
});
