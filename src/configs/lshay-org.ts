import { Zone } from "@pulumi/cloudflare";

new Zone(
	"lshay-org",
	{
		plan: "free",
		zone: "lshay.org",
	},
	{
		protect: true,
	},
);
