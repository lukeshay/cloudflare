import { Zone } from "@pulumi/cloudflare";

new Zone(
  "lshay-xyz",
  {
    plan: "free",
    zone: "lshay.xyz",
  },
  {
    protect: true,
  },
);
