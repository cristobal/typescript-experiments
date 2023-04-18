// Erased away entirely.
import type { A } from "./a.js";

// Rewritten to 'import { b } from "bcd";'
import { B, type C, type D } from "./bcd.js";

// Rewritten to 'import {} from "xyz";'
import { type XYZ } from "./xyz.js";

const a: A = { property: "valu" };
const b = B;
const c: C = "world";
const d: D = new EventTarget();
const xyz: XYZ = {
  x: 1,
  y: 2,
  z: 3,
};

console.log(a, b, c, d, xyz);
