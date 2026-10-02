import { ResolveFn } from '@angular/router';

export const userDataResolver: ResolveFn<{ status: string; amount: number }> = () => {
  return { status: 'Paid', amount: 500 };
};