import { CanMatchFn } from '@angular/router';

export const premiumFeatureGuard: CanMatchFn = () => {
  return false;
};