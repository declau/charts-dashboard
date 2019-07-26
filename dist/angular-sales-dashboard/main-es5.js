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

module.exports = "<div class=\"container\">\n  <div class=\"header\">\n      <h2>\n          Charts Dashboard\n      </h2>\n  </div>\n  \n  <div class=\"row\">\n      <div class=\"col-7\">\n          <app-line-chart></app-line-chart>\n      </div>\n      <div class=\"col-5\">\n          <app-pie-chart></app-pie-chart>\n      </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-12\">\n          <app-table-chart></app-table-chart>\n      </div>\n  </div>\n</div>"

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

module.exports = "<div class=\"donut\" id=\"divDonutchart\">\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/google-chart/table-chart/table-chart.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/google-chart/table-chart/table-chart.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"divTableChart\">\n\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-sales-dashboard';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _google_chart_google_chart_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./google-chart/google-chart.module */ "./src/app/google-chart/google-chart.module.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
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
    return AppModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _service_service_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/service.module */ "./src/app/google-chart/service/service.module.ts");
/* harmony import */ var _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./line-chart/line-chart.component */ "./src/app/google-chart/line-chart/line-chart.component.ts");
/* harmony import */ var _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pie-chart/pie-chart.component */ "./src/app/google-chart/pie-chart/pie-chart.component.ts");
/* harmony import */ var _table_chart_table_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./table-chart/table-chart.component */ "./src/app/google-chart/table-chart/table-chart.component.ts");







var GoogleChartModule = /** @class */ (function () {
    function GoogleChartModule() {
    }
    GoogleChartModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_4__["LineChartComponent"], _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_5__["PieChartComponent"], _table_chart_table_chart_component__WEBPACK_IMPORTED_MODULE_6__["TableChartComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _service_service_module__WEBPACK_IMPORTED_MODULE_3__["ServiceModule"]
            ],
            exports: [_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_4__["LineChartComponent"], _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_5__["PieChartComponent"], _table_chart_table_chart_component__WEBPACK_IMPORTED_MODULE_6__["TableChartComponent"]],
            providers: []
        })
    ], GoogleChartModule);
    return GoogleChartModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_google_chart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/google-chart.service */ "./src/app/google-chart/service/google-chart.service.ts");



var LineChartComponent = /** @class */ (function () {
    function LineChartComponent(gChartService) {
        this.gChartService = gChartService;
        this.gLib = this.gChartService.getGoogle();
        this.gLib.charts.load('current', { 'packages': ['corechart', 'table'] });
        this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
    }
    LineChartComponent.prototype.ngOnInit = function () {
    };
    LineChartComponent.prototype.drawChart = function () {
        var data = this.gLib.visualization.arrayToDataTable([
            ['Year', 'Sales', 'Expenses', 'Cash'],
            ['2004', 1000, 400, 1000],
            ['2005', 1170, 460, 1200],
            ['2006', 660, 1120, 800],
            ['2007', 1030, 540, 2100]
        ]);
        var options = {
            legend: 'none',
            colors: ['green', 'blue', 'red']
        };
        var chart = new this.gLib.visualization.LineChart(document.getElementById('divLineChart'));
        chart.draw(data, options);
    };
    LineChartComponent.ctorParameters = function () { return [
        { type: _service_google_chart_service__WEBPACK_IMPORTED_MODULE_2__["GoogleChartService"] }
    ]; };
    LineChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-line-chart',
            template: __webpack_require__(/*! raw-loader!./line-chart.component.html */ "./node_modules/raw-loader/index.js!./src/app/google-chart/line-chart/line-chart.component.html"),
            styles: [__webpack_require__(/*! ./line-chart.component.scss */ "./src/app/google-chart/line-chart/line-chart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_google_chart_service__WEBPACK_IMPORTED_MODULE_2__["GoogleChartService"]])
    ], LineChartComponent);
    return LineChartComponent;
}());



/***/ }),

/***/ "./src/app/google-chart/pie-chart/pie-chart.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/google-chart/pie-chart/pie-chart.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".donut {\n  width: 900px;\n  height: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RlbmlzL0Rlc2t0b3AvZXN0dWRvLXByb2pldG9zL2NoYXJ0cy1kYXNoYm9hcmQvc3JjL2FwcC9nb29nbGUtY2hhcnQvcGllLWNoYXJ0L3BpZS1jaGFydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ29vZ2xlLWNoYXJ0L3BpZS1jaGFydC9waWUtY2hhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZ29vZ2xlLWNoYXJ0L3BpZS1jaGFydC9waWUtY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZG9udXQge1xuICAgIHdpZHRoOiA5MDBweDsgXG4gICAgaGVpZ2h0OiA1MDBweDtcbn0iLCIuZG9udXQge1xuICB3aWR0aDogOTAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_google_chart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/google-chart.service */ "./src/app/google-chart/service/google-chart.service.ts");



var PieChartComponent = /** @class */ (function () {
    function PieChartComponent(gChartService) {
        this.gChartService = gChartService;
        this.gLib = this.gChartService.getGoogle();
        this.gLib.charts.load('current', { 'packages': ['corechart', 'table'] });
        this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
    }
    PieChartComponent.prototype.ngOnInit = function () {
    };
    PieChartComponent.prototype.drawChart = function () {
        var chart = new this.gLib.visualization.PieChart(document.getElementById('divDonutchart'));
        var data = new this.gLib.visualization.DataTable();
        data.addColumn('string', 'Credit');
        data.addColumn('number', 'App');
        data.addRows([
            ['Credit', 800],
            ['App Loja', 1000]
        ]);
        var options = {
            'title': 'Info',
            pieHole: 0.8,
            colors: ['#007AFF', '#39424C'],
            pieSliceTextStyle: {
                color: 'black',
            },
            legend: 'none'
        };
        chart.draw(data, options);
    };
    PieChartComponent.ctorParameters = function () { return [
        { type: _service_google_chart_service__WEBPACK_IMPORTED_MODULE_2__["GoogleChartService"] }
    ]; };
    PieChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pie-chart',
            template: __webpack_require__(/*! raw-loader!./pie-chart.component.html */ "./node_modules/raw-loader/index.js!./src/app/google-chart/pie-chart/pie-chart.component.html"),
            styles: [__webpack_require__(/*! ./pie-chart.component.scss */ "./src/app/google-chart/pie-chart/pie-chart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_google_chart_service__WEBPACK_IMPORTED_MODULE_2__["GoogleChartService"]])
    ], PieChartComponent);
    return PieChartComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service.module */ "./src/app/google-chart/service/service.module.ts");



var GoogleChartService = /** @class */ (function () {
    function GoogleChartService() {
        this.google = google;
    }
    GoogleChartService.prototype.getGoogle = function () {
        return this.google;
    };
    GoogleChartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: _service_module__WEBPACK_IMPORTED_MODULE_2__["ServiceModule"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GoogleChartService);
    return GoogleChartService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var ServiceModule = /** @class */ (function () {
    function ServiceModule() {
    }
    ServiceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], ServiceModule);
    return ServiceModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_google_chart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/google-chart.service */ "./src/app/google-chart/service/google-chart.service.ts");



var TableChartComponent = /** @class */ (function () {
    function TableChartComponent(gChartService) {
        this.gChartService = gChartService;
        this.gLib = this.gChartService.getGoogle();
        this.gLib.charts.load('current', { 'packages': ['corechart', 'table'] });
        this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
    }
    TableChartComponent.prototype.ngOnInit = function () {
    };
    TableChartComponent.prototype.drawChart = function () {
        var chart = new this.gLib.visualization.Table(document.getElementById('divTableChart'));
        var data = new this.gLib.visualization.DataTable();
        data.addColumn('string', 'Year');
        data.addColumn('number', 'Sales');
        data.addColumn('number', 'Expenses');
        data.addRows([
            ['2004', 1000, 400],
            ['2005', 1170, 460],
            ['2006', 660, 1120],
            ['2007', 1030, 540]
        ]);
        var options = {
            'title': 'Sales Tabular Data',
            'width': '100%',
            'height': '100%'
        };
        chart.draw(data, options);
    };
    TableChartComponent.ctorParameters = function () { return [
        { type: _service_google_chart_service__WEBPACK_IMPORTED_MODULE_2__["GoogleChartService"] }
    ]; };
    TableChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table-chart',
            template: __webpack_require__(/*! raw-loader!./table-chart.component.html */ "./node_modules/raw-loader/index.js!./src/app/google-chart/table-chart/table-chart.component.html"),
            styles: [__webpack_require__(/*! ./table-chart.component.scss */ "./src/app/google-chart/table-chart/table-chart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_google_chart_service__WEBPACK_IMPORTED_MODULE_2__["GoogleChartService"]])
    ], TableChartComponent);
    return TableChartComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


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
//# sourceMappingURL=main-es5.js.map