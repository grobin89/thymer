"use strict";
require("typings-global");
var plugins = require("./beautylog.plugins");
var beautylog_log_helpers_1 = require("./beautylog.log.helpers");
exports.oraActive = false; // when an Ora is active (e.g. start()) this is true;
var Ora = (function () {
    function Ora(textArg, colorArg, startArg) {
        if (startArg === void 0) { startArg = false; }
        this._oraObject = plugins.ora({
            spinner: "dots",
            text: textArg,
            color: colorArg
        });
        startArg ? this._oraObject.start() : void (0);
    }
    Ora.prototype.text = function (textArg) {
        this._oraObject.text = textArg;
    };
    ;
    Ora.prototype.start = function (textArg, colorArg) {
        if (textArg)
            this._oraObject.text = textArg;
        if (colorArg)
            this._oraObject.color = colorArg;
        exports.activeOra = this;
        exports.oraActive = true;
        this._oraObject.start();
    };
    ;
    Ora.prototype.end = function () {
        this._oraObject.stop();
        this._oraObject.clear();
        exports.activeOra = undefined;
        exports.oraActive = false;
    };
    Ora.prototype.endOk = function (textArg) {
        this.end();
        beautylog_log_helpers_1.logNode(textArg, "ok");
    };
    ;
    Ora.prototype.endError = function (textArg) {
        this.end();
        beautylog_log_helpers_1.logNode(textArg, "error");
    };
    ;
    Ora.prototype.pause = function () {
        this._oraObject.stop();
    };
    Ora.prototype.stop = function () {
        this.end();
    };
    // log methods that play nice with ora
    Ora.prototype.log = function (logText, logType) {
        this.stop();
        beautylog_log_helpers_1.logNode(logText, logType);
        this.start();
    };
    return Ora;
}());
exports.Ora = Ora;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlYXV0eWxvZy5jbGFzc2VzLm9yYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsUUFBTyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ3hCLElBQVksT0FBTyxXQUFNLHFCQUFxQixDQUFDLENBQUE7QUFDL0Msc0NBQXNCLHlCQUF5QixDQUFDLENBQUE7QUFFckMsaUJBQVMsR0FBVyxLQUFLLENBQUMsQ0FBQyxxREFBcUQ7QUFHM0Y7SUFHSSxhQUFZLE9BQWMsRUFBQyxRQUFlLEVBQUMsUUFBd0I7UUFBeEIsd0JBQXdCLEdBQXhCLGdCQUF3QjtRQUMvRCxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDMUIsT0FBTyxFQUFDLE1BQU07WUFDZCxJQUFJLEVBQUMsT0FBTztZQUNaLEtBQUssRUFBQyxRQUFRO1NBQ2pCLENBQUMsQ0FBQztRQUVILFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxHQUFHLEtBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBQ0Qsa0JBQUksR0FBSixVQUFLLE9BQU87UUFDUixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7SUFDbkMsQ0FBQzs7SUFFRCxtQkFBSyxHQUFMLFVBQU0sT0FBZSxFQUFDLFFBQWdCO1FBQ2xDLEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQztZQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztRQUMzQyxFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUM7WUFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDOUMsaUJBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsaUJBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM1QixDQUFDOztJQUNELGlCQUFHLEdBQUg7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEIsaUJBQVMsR0FBRyxTQUFTLENBQUM7UUFDdEIsaUJBQVMsR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUNELG1CQUFLLEdBQUwsVUFBTSxPQUFPO1FBQ1QsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1gsK0JBQU8sQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7SUFDRCxzQkFBUSxHQUFSLFVBQVMsT0FBTztRQUNaLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNYLCtCQUFPLENBQUMsT0FBTyxFQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7O0lBQ0QsbUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUNELGtCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQsc0NBQXNDO0lBQ3RDLGlCQUFHLEdBQUgsVUFBSSxPQUFjLEVBQUMsT0FBYztRQUM3QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWiwrQkFBTyxDQUFDLE9BQU8sRUFBQyxPQUFPLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUNMLFVBQUM7QUFBRCxDQWxEQSxBQWtEQyxJQUFBO0FBbERZLFdBQUcsTUFrRGYsQ0FBQSIsImZpbGUiOiJiZWF1dHlsb2cuY2xhc3Nlcy5vcmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJ0eXBpbmdzLWdsb2JhbFwiO1xyXG5pbXBvcnQgKiBhcyBwbHVnaW5zIGZyb20gXCIuL2JlYXV0eWxvZy5wbHVnaW5zXCI7XHJcbmltcG9ydCB7bG9nTm9kZX0gZnJvbSBcIi4vYmVhdXR5bG9nLmxvZy5oZWxwZXJzXCI7XHJcblxyXG5leHBvcnQgbGV0IG9yYUFjdGl2ZTpib29sZWFuID0gZmFsc2U7IC8vIHdoZW4gYW4gT3JhIGlzIGFjdGl2ZSAoZS5nLiBzdGFydCgpKSB0aGlzIGlzIHRydWU7XHJcbmV4cG9ydCBsZXQgYWN0aXZlT3JhOk9yYTsgLy9wb2ludHMgdG8gdGhlIGN1cnJlbnRseSBhY3RpdmUgT3JhIG9iamVjdFxyXG5cclxuZXhwb3J0IGNsYXNzIE9yYSB7XHJcbiAgICBwcml2YXRlIF9vcmFPYmplY3Q7XHJcbiAgICBzdGF0ZTpzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0QXJnOnN0cmluZyxjb2xvckFyZzpzdHJpbmcsc3RhcnRBcmc6Ym9vbGVhbiA9IGZhbHNlKXtcclxuICAgICAgICB0aGlzLl9vcmFPYmplY3QgPSBwbHVnaW5zLm9yYSh7XHJcbiAgICAgICAgICAgIHNwaW5uZXI6XCJkb3RzXCIsXHJcbiAgICAgICAgICAgIHRleHQ6dGV4dEFyZyxcclxuICAgICAgICAgICAgY29sb3I6Y29sb3JBcmdcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBzdGFydEFyZyA/IHRoaXMuX29yYU9iamVjdC5zdGFydCgpIDogdm9pZCgwKTtcclxuICAgIH1cclxuICAgIHRleHQodGV4dEFyZyl7XHJcbiAgICAgICAgdGhpcy5fb3JhT2JqZWN0LnRleHQgPSB0ZXh0QXJnO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgc3RhcnQodGV4dEFyZz86c3RyaW5nLGNvbG9yQXJnPzpzdHJpbmcpe1xyXG4gICAgICAgIGlmKHRleHRBcmcpIHRoaXMuX29yYU9iamVjdC50ZXh0ID0gdGV4dEFyZztcclxuICAgICAgICBpZihjb2xvckFyZykgdGhpcy5fb3JhT2JqZWN0LmNvbG9yID0gY29sb3JBcmc7XHJcbiAgICAgICAgYWN0aXZlT3JhID0gdGhpcztcclxuICAgICAgICBvcmFBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX29yYU9iamVjdC5zdGFydCgpO1xyXG4gICAgfTtcclxuICAgIGVuZCgpe1xyXG4gICAgICAgIHRoaXMuX29yYU9iamVjdC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5fb3JhT2JqZWN0LmNsZWFyKCk7XHJcbiAgICAgICAgYWN0aXZlT3JhID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIG9yYUFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZW5kT2sodGV4dEFyZyl7XHJcbiAgICAgICAgdGhpcy5lbmQoKTtcclxuICAgICAgICBsb2dOb2RlKHRleHRBcmcsXCJva1wiKTtcclxuICAgIH07XHJcbiAgICBlbmRFcnJvcih0ZXh0QXJnKXtcclxuICAgICAgICB0aGlzLmVuZCgpO1xyXG4gICAgICAgIGxvZ05vZGUodGV4dEFyZyxcImVycm9yXCIpO1xyXG4gICAgfTtcclxuICAgIHBhdXNlKCl7XHJcbiAgICAgICAgdGhpcy5fb3JhT2JqZWN0LnN0b3AoKTtcclxuICAgIH1cclxuICAgIHN0b3AoKXsgLy8gYWxpYXMgZm9yIGVuZFxyXG4gICAgICAgIHRoaXMuZW5kKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIGxvZyBtZXRob2RzIHRoYXQgcGxheSBuaWNlIHdpdGggb3JhXHJcbiAgICBsb2cobG9nVGV4dDpzdHJpbmcsbG9nVHlwZTpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgIGxvZ05vZGUobG9nVGV4dCxsb2dUeXBlKTtcclxuICAgICAgICB0aGlzLnN0YXJ0KCk7XHJcbiAgICB9XHJcbn0iXX0=
