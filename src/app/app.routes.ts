import { Routes } from '@angular/router';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { CollectionsComponent } from './components/collections/collections.component';

export const routes: Routes = [
    {
        path: 'front-page', component: FrontPageComponent
    },
    {
        path: 'collections', component: CollectionsComponent
    }
];
