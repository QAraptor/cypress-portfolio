
export {};

import * as pages from '../pages';
import type { fx as FX } from '../fixtures';   // type-only import

declare global {
  var cp: typeof pages;
  var fx: typeof FX;                            // matches the runtime assignment

 
// ---- CYPRESS COMMAND AUGMENTATION (must be inside declare global in a module .d.ts)
  namespace Cypress {
    interface Chainable {
      startSignup(user: { name: string; email: string }): Chainable<void>;
      navigateSignup(): Chainable<void>;
      registerUser(entityKey: string): Chainable<void>;
    }
  }
}

export {}; // keep file as a module
