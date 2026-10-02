import { Routes } from '@angular/router';
import { adminChildGuard } from './guards/admin-child-guard';
import { authGuard } from './guards/auth-guard';
import { premiumFeatureGuard } from './guards/premium-feature-guard';
import { unsavedChangesGuard } from './guards/unsaved-changes-guard';
import { userDataResolver } from './guards/user-data-resolver';
import { AdminPanel } from './pages/admin-panel/admin-panel';
import { Dashboard } from './pages/dashboard/dashboard';
import { EditProfile } from './pages/edit-profile/edit-profile';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'admin',
    canActivate: [authGuard],
    canActivateChild: [adminChildGuard],
    children: [{ path: '', component: AdminPanel }],
  },
  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [authGuard],
    resolve: { userData: userDataResolver },
  },
  {
    path: 'edit-profile',
    component: EditProfile,
    canDeactivate: [unsavedChangesGuard],
  },
  {
    path: 'premium',
    canMatch: [premiumFeatureGuard],
    component: Dashboard,
  },
];