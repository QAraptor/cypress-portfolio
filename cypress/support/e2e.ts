import './commands';
import * as pages from '../pages';
import { fx as FX } from '../fixtures';   // <-- alias the import

declare global {
  var cp: typeof pages;
  var fx: typeof FX;                      // <-- refer to the aliased import type
}

globalThis.cp = pages;
globalThis.fx = FX;