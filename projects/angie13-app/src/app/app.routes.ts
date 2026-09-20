import { Routes } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { UnauthenticatedUserLayoutComponent } from "./layouts/unauthenticated-user-layout/unauthenticated-user-layout.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";

export const routes: Routes = [
    {
        path: '',
        component: UnauthenticatedUserLayoutComponent,
        children: [
            { path: '', component: HomePageComponent, pathMatch: 'full', 
                data: { title: 'Home | Angie 13' }
            },
            { path: 'dashboard', component: DashboardComponent },
            // { path: 'home', component: HomePageComponent },
            // { path: 'change-password', component: ChangePasswordPageComponent },
            // { path: 'logout', component: LogoutPageComponent },
        ]
    },

    // no layout routes
    //   { path: 'login', component: LoginPageComponent },
    //   { path: 'register', component: HomePageComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
