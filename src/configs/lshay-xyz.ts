import { Zone } from "@pulumi/cloudflare";

const lshayXyz = new Zone(
  "lshay-xyz",
  {
    plan: "free",
    zone: "lshay.xyz",
  },
  {
    protect: true,
  },
);
