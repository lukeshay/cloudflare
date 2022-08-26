import { Zone } from "@pulumi/cloudflare";

new Zone(
  "lshay-dev",
  {
    plan: "free",
    zone: "lshay.dev",
  },
  {
    protect: true,
  },
);
