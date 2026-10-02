import { CanActivateChildFn } from '@angular/router';

export const adminChildGuard: CanActivateChildFn = () => {
  return true;
};
