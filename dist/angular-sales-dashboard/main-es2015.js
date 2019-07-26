(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div>\n  <app-line-chart></app-line-chart>\n</div>\n<div>\n  <app-pie-chart></app-pie-chart>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/google-chart/line-chart/line-chart.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/google-chart/line-chart/line-chart.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  id=\"divLineChart\">\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/google-chart/pie-chart/pie-chart.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/google-chart/pie-chart/pie-chart.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  id=\"divPieChart\">\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/google-chart/table-chart/table-chart.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/google-chart/table-chart/table-chart.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>table-chart works!</p>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'angular-sales-dashboard';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _google_chart_google_chart_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./google-chart/google-chart.module */ "./src/app/google-chart/google-chart.module.ts");





let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _google_chart_google_chart_module__WEBPACK_IMPORTED_MODULE_4__["GoogleChartModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/google-chart/google-chart.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/google-chart/google-chart.module.ts ***!
  \*****************************************************/
/*! exports provided: GoogleChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartModule", function() { return GoogleChartModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _service_service_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/service.module */ "./src/app/google-chart/service/service.module.ts");
/* harmony import */ var _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./line-chart/line-chart.component */ "./src/app/google-chart/line-chart/line-chart.component.ts");
/* harmony import */ var _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pie-chart/pie-chart.component */ "./src/app/google-chart/pie-chart/pie-chart.component.ts");
/* harmony import */ var _table_chart_table_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./table-chart/table-chart.component */ "./src/app/google-chart/table-chart/table-chart.component.ts");







let GoogleChartModule = class GoogleChartModule {
};
GoogleChartModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_4__["LineChartComponent"], _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_5__["PieChartComponent"], _table_chart_table_chart_component__WEBPACK_IMPORTED_MODULE_6__["TableChartComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _service_service_module__WEBPACK_IMPORTED_MODULE_3__["ServiceModule"]
        ],
        exports: [_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_4__["LineChartComponent"], _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_5__["PieChartComponent"]],
        providers: []
    })
], GoogleChartModule);



/***/ }),

/***/ "./src/app/google-chart/line-chart/line-chart.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/google-chart/line-chart/line-chart.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dvb2dsZS1jaGFydC9saW5lLWNoYXJ0L2xpbmUtY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/google-chart/line-chart/line-chart.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/google-chart/line-chart/line-chart.component.ts ***!
  \*****************************************************************/
/*! exports provided: LineChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChartComponent", function() { return LineChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_google_chart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/google-chart.service */ "./src/app/google-chart/service/google-chart.service.ts");



let LineChartComponent = class LineChartComponent {
    constructor(gChartService) {
        this.gChartService = gChartService;
        this.gLib = this.gChartService.getGoogle();
        this.gLib.charts.load('current', { 'packages': ['corechart', 'table'] });
        this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
    }
    ngOnInit() {
    }
    drawChart() {
        let data = this.gLib.visualization.arrayToDataTable([
            ['Year', 'Sales', 'Expenses'],
            ['2004', 1000, 400],
            ['2005', 1170, 460],
            ['2006', 660, 1120],
            ['2007', 1030, 540]
        ]);
        let chart = new this.gLib.visualization.LineChart(document.getElementById('divLineChart'));
        chart.draw(data);
    }
};
LineChartComponent.ctorParameters = () => [
    { type: _service_google_chart_service__WEBPACK_IMPORTED_MODULE_2__["GoogleChartService"] }
];
LineChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-line-chart',
        template: __webpack_require__(/*! raw-loader!./line-chart.component.html */ "./node_modules/raw-loader/index.js!./src/app/google-chart/line-chart/line-chart.component.html"),
        styles: [__webpack_require__(/*! ./line-chart.component.scss */ "./src/app/google-chart/line-chart/line-chart.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_google_chart_service__WEBPACK_IMPORTED_MODULE_2__["GoogleChartService"]])
], LineChartComponent);



/***/ }),

/***/ "./src/app/google-chart/pie-chart/pie-chart.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/google-chart/pie-chart/pie-chart.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dvb2dsZS1jaGFydC9waWUtY2hhcnQvcGllLWNoYXJ0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/google-chart/pie-chart/pie-chart.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/google-chart/pie-chart/pie-chart.component.ts ***!
  \***************************************************************/
/*! exports provided: PieChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChartComponent", function() { return PieChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_google_chart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/google-chart.service */ "./src/app/google-chart/service/google-chart.service.ts");



let PieChartComponent = class PieChartComponent {
    constructor(gChartService) {
        this.gChartService = gChartService;
        this.gLib = this.gChartService.getGoogle();
        this.gLib.charts.load('current', { 'packages': ['corechart', 'table'] });
        this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
    }
    ngOnInit() {
    }
    drawChart() {
        let chart = new this.gLib.visualization.PieChart(document.getElementById('divPieChart'));
        let data = new this.gLib.visualization.DataTable();
        data.addColumn('string', 'Accessories');
        data.addColumn('number', 'Quantity');
        data.addRows([
            ['Computers', 3],
            ['Hard Drives', 6],
            ['Printers', 4],
            ['Monitors', 5],
            ['RAM', 2]
        ]);
        let options = { 'title': 'Sales Info' };
        chart.draw(data, options);
    }
};
PieChartComponent.ctorParameters = () => [
    { type: _service_google_chart_service__WEBPACK_IMPORTED_MODULE_2__["GoogleChartService"] }
];
PieChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pie-chart',
        template: __webpack_require__(/*! raw-loader!./pie-chart.component.html */ "./node_modules/raw-loader/index.js!./src/app/google-chart/pie-chart/pie-chart.component.html"),
        styles: [__webpack_require__(/*! ./pie-chart.component.scss */ "./src/app/google-chart/pie-chart/pie-chart.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_google_chart_service__WEBPACK_IMPORTED_MODULE_2__["GoogleChartService"]])
], PieChartComponent);



/***/ }),

/***/ "./src/app/google-chart/service/google-chart.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/google-chart/service/google-chart.service.ts ***!
  \**************************************************************/
/*! exports provided: GoogleChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartService", function() { return GoogleChartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service.module */ "./src/app/google-chart/service/service.module.ts");



let GoogleChartService = class GoogleChartService {
    constructor() {
        this.google = google;
    }
    getGoogle() {
        return this.google;
    }
};
GoogleChartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: _service_module__WEBPACK_IMPORTED_MODULE_2__["ServiceModule"]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GoogleChartService);



/***/ }),

/***/ "./src/app/google-chart/service/service.module.ts":
/*!********************************************************!*\
  !*** ./src/app/google-chart/service/service.module.ts ***!
  \********************************************************/
/*! exports provided: ServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceModule", function() { return ServiceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let ServiceModule = class ServiceModule {
};
ServiceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], ServiceModule);



/***/ }),

/***/ "./src/app/google-chart/table-chart/table-chart.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/google-chart/table-chart/table-chart.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dvb2dsZS1jaGFydC90YWJsZS1jaGFydC90YWJsZS1jaGFydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/google-chart/table-chart/table-chart.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/google-chart/table-chart/table-chart.component.ts ***!
  \*******************************************************************/
/*! exports provided: TableChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableChartComponent", function() { return TableChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TableChartComponent = class TableChartComponent {
    constructor() { }
    ngOnInit() {
    }
};
TableChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-table-chart',
        template: __webpack_require__(/*! raw-loader!./table-chart.component.html */ "./node_modules/raw-loader/index.js!./src/app/google-chart/table-chart/table-chart.component.html"),
        styles: [__webpack_require__(/*! ./table-chart.component.scss */ "./src/app/google-chart/table-chart/table-chart.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TableChartComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/denis/Desktop/estudo-projetos/charts-dashboard/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map