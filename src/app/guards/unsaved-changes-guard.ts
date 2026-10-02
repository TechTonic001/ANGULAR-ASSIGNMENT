import { CanDeactivateFn } from '@angular/router';

export const unsavedChangesGuard: CanDeactivateFn<unknown> = () => {
  return confirm('You have unsaved changes. Leave this page?');
};
