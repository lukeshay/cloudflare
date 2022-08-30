import { Record } from "@pulumi/cloudflare";
import type { Output } from "@pulumi/pulumi";

export const DenoDeploy = {
	IPv4: "34.120.54.55",
	IPv6: "2600:1901:0:6d85::",
} as const;

export const addRecords = (name: string, zoneId: Output<string> | string, acmeChallenge: string) => {
	const a = new Record(`${name}-a`, {
		name: String(name),
		proxied: true,
		type: "A",
		value: DenoDeploy.IPv4,
		zoneId,
	});

	const aaaa = new Record(`${name}-aaaa`, {
		name: String(name),
		proxied: true,
		type: "AAAA",
		value: DenoDeploy.IPv6,
		zoneId,
	});

	const cname = new Record(`${name}-acme-challenge`, {
		name: name === "@" ? "_acme-challenge" : `_acme-challenge.${name}`,
		proxied: false,
		type: "CNAME",
		value: acmeChallenge,
		zoneId,
	});

	return {
		a,
		aaaa,
		cname,
	};
};
