import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent }  from './app.component';
import { ProductListComponent }  from './products/product-list.component';
import {ProductFilterPipe} from './products/product-filter.pipe';

@NgModule({
  imports: [ BrowserModule, FormsModule ], // third-party directives, components, and pipes declared here
  declarations: [ AppComponent, ProductListComponent, ProductFilterPipe ], // our directives, components, and pipes declared here
  bootstrap: [ AppComponent ]
})
export class AppModule { 



}

// TODO: checkout Data Binding & Binding - Checklists and Summary video
// interpolation
// property binding
// event binding
// two-way binding

// ngModel requires FormsModule

// Interface: a specification identifying a related set of properties and methods. A class commits to supporting the specification by implementing the interface.
// That means the class includes code for each property and method identified in the interface.
// Use the interface as a data type. Interfaces are dev time only - supported by Typescript
// import the interface then use it as a data type
// https://app.pluralsight.com/player?course=angular-2-getting-started-update&author=deborah-kurata&name=angular-2-getting-started-update-m6&clip=1&mode=live

//Lifecyle Hooks
// https://app.pluralsight.com/player?course=angular-2-getting-started-update&author=deborah-kurata&name=angular-2-getting-started-update-m6&clip=3&mode=live
// OnInit
// OnChanges
// OnDestroy

// module.id
//https://app.pluralsight.com/player?course=angular-2-getting-started-update&author=deborah-kurata&name=angular-2-getting-started-update-m6&clip=5&mode=live
// module.id is a semi global variable that is available when using the CommonJS format
// using module.id requires that we write our modules using the CommonJS format - see tsconfig.json
// it also requires that we use a module loader such as SystemJS