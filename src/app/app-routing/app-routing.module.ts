import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TextOverviewComponent }      from '../text-overview/text-overview.component';
import { TextCompareComponent }   from '../text-compare/text-compare.component';


const routes: Routes = [
	{ path: '', redirectTo: '/overview', pathMatch: 'full' },
	{ path: 'overview', component: TextOverviewComponent },
	{ path: 'compare/:comparisonKey', component: TextCompareComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
  RouterModule
  ]
})
export class AppRoutingModule { }
