"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var product_list_component_1 = require('./products/product-list.component');
var product_filter_pipe_1 = require('./products/product-filter.pipe');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
            declarations: [app_component_1.AppComponent, product_list_component_1.ProductListComponent, product_filter_pipe_1.ProductFilterPipe],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
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
//# sourceMappingURL=app.module.js.map