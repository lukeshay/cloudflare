import { Zone } from "@pulumi/cloudflare";

const lshayLand = new Zone(
  "lshay-land",
  {
    plan: "free",
    zone: "lshay.land",
  },
  {
    protect: true,
  },
);
