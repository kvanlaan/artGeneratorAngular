"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var material_1 = require("@angular/material");
var tooltip_1 = require("@angular/material/tooltip");
var slide_toggle_1 = require("@angular/material/slide-toggle");
var flex_layout_1 = require("@angular/flex-layout");
var animations_1 = require("@angular/platform-browser/animations");
var generator_component_1 = require("./generator/generator.component");
require("hammerjs");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                app_component_1.LoginDialogComponent,
                app_component_1.DeleteDialogComponent,
                generator_component_1.GeneratorComponent
            ],
            entryComponents: [
                app_component_1.LoginDialogComponent,
                app_component_1.DeleteDialogComponent
            ],
            imports: [
                material_1.MatButtonModule,
                material_1.MatDialogModule,
                forms_1.FormsModule,
                animations_1.BrowserAnimationsModule,
                material_1.MatButtonToggleModule,
                slide_toggle_1.MatSlideToggleModule,
                tooltip_1.MatTooltipModule,
                http_1.HttpClientModule,
                platform_browser_1.BrowserModule,
                flex_layout_1.FlexLayoutModule,
                material_1.MatGridListModule,
                material_1.MatIconModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatDividerModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map