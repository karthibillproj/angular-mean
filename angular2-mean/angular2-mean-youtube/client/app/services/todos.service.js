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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var TodoService = (function () {
    function TodoService(_http) {
        this._http = _http;
    }
    TodoService.prototype.getTodos = function () {
        return this._http.get('http://localhost:3030/api/todos')
            .map(function (res) { return res.json(); });
    };
    TodoService.prototype.addTodo = function (newTodo) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('http://localhost:3030/api/todos', JSON.stringify(newTodo), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TodoService.prototype.deleteTodo = function (id) {
        return this._http.delete('http://localhost:3030/api/todo/id/' + id)
            .map(function (res) { return res.json(); });
    };
    return TodoService;
}());
TodoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todos.service.js.map