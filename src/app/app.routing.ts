import {Routes, RouterModule} from "@angular/router";
import {CollectionComponent} from "./collection/collection.component";
import {MarketComponent} from "./market/market.component";
const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/collection', pathMatch: 'full'},
    { path: 'market', component: MarketComponent},
    { path: 'collection', component: CollectionComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);