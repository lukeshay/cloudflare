import { Zone } from "@pulumi/cloudflare";

new Zone(
  "lshay-land",
  {
    plan: "free",
    zone: "lshay.land",
  },
  {
    protect: true,
  },
);
