"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.time = exports.numberPercent = exports.numberInteger = exports.numberFmt = exports.numberCurrency = exports.duration = exports.date = void 0;
var date_js_1 = require("./fmt/date.js");
Object.defineProperty(exports, "date", { enumerable: true, get: function () { return date_js_1.date; } });
var duration_js_1 = require("./fmt/duration.js");
Object.defineProperty(exports, "duration", { enumerable: true, get: function () { return duration_js_1.duration; } });
var number_js_1 = require("./fmt/number.js");
Object.defineProperty(exports, "numberCurrency", { enumerable: true, get: function () { return number_js_1.numberCurrency; } });
Object.defineProperty(exports, "numberFmt", { enumerable: true, get: function () { return number_js_1.numberFmt; } });
Object.defineProperty(exports, "numberInteger", { enumerable: true, get: function () { return number_js_1.numberInteger; } });
Object.defineProperty(exports, "numberPercent", { enumerable: true, get: function () { return number_js_1.numberPercent; } });
var time_js_1 = require("./fmt/time.js");
Object.defineProperty(exports, "time", { enumerable: true, get: function () { return time_js_1.time; } });
