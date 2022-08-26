import { Zone } from "@pulumi/cloudflare";

const lshayOrg = new Zone(
  "lshay-org",
  {
    plan: "free",
    zone: "lshay.org",
  },
  {
    protect: true,
  },
);
