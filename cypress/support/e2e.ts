import './commands';
import * as pages from '../pages';
import { fx as FX } from '../fixtures'; // <-- alias the import
import { api } from '../api';

declare global {
  var cp: typeof pages;
  var fx: typeof FX; // <-- refer to the aliased import type
}

globalThis.cp = pages;
globalThis.fx = FX;
(globalThis as any).api = api;
