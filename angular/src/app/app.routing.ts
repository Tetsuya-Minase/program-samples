import { ModuleWithProviders, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MyPageComponent } from './my-page/my-page.component';
import { AuthGuard } from './auth.guard';


const routes = [
    { path: 'login', component: LoginComponent },
    { path: 'my-page', component: MyPageComponent, canActivate: [AuthGuard]},
];

export const ROUTES: ModuleWithProviders = RouterModule.forRoot(routes);
