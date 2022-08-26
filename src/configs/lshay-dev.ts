import { Zone } from "@pulumi/cloudflare";

const lshayDev = new Zone(
  "lshay-dev",
  {
    plan: "free",
    zone: "lshay.dev",
  },
  {
    protect: true,
  },
);
