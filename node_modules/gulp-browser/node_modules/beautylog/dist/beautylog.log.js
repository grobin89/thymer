"use strict";
require("typings-global");
var beautylog_log_helpers_1 = require("./beautylog.log.helpers");
var beautylog_log_helpers_2 = require("./beautylog.log.helpers");
exports.log = beautylog_log_helpers_2.log;
/**
 * logs an info to console
 * @param logText
 * @returns {boolean}
 */
exports.info = function (logText) {
    return beautylog_log_helpers_1.log(logText, 'info');
};
/**
 * logs an 'OK!' message to console
 * @param logText
 * @returns {boolean}
 */
exports.ok = function (logText) {
    return beautylog_log_helpers_1.log(logText, 'ok');
};
/**
 * logs a success to console
 * @param logText string to log as error
 * @returns {boolean}
 */
exports.success = function (logText) {
    return beautylog_log_helpers_1.log(logText, 'success');
};
/**
 * logs a 'warn:' message to console
 * @param logText string to log as error
 * @returns {boolean}
 */
exports.warn = function (logText) {
    return beautylog_log_helpers_1.log(logText, 'warn');
};
/**
 * logs an error to console
 * @param logText
 * @returns {boolean}
 */
exports.error = function (logText) {
    return beautylog_log_helpers_1.log(logText, 'error');
};
/**
 * logs an directory to console
 * @param logText
 * @returns {boolean}
 */
exports.dir = function (logText) {
    return beautylog_log_helpers_1.log(logText, 'dir');
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlYXV0eWxvZy5sb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFFBQU8sZ0JBQWdCLENBQUMsQ0FBQTtBQUV4QixzQ0FBa0IseUJBQXlCLENBQUMsQ0FBQTtBQUM1QyxzQ0FBa0IseUJBQXlCLENBQUM7QUFBcEMsMENBQW9DO0FBRTVDOzs7O0dBSUc7QUFDUSxZQUFJLEdBQUcsVUFBVSxPQUFPO0lBQy9CLE1BQU0sQ0FBQywyQkFBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNoQyxDQUFDLENBQUM7QUFFRjs7OztHQUlHO0FBQ1EsVUFBRSxHQUFHLFVBQVUsT0FBTztJQUM3QixNQUFNLENBQUMsMkJBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDOUIsQ0FBQyxDQUFDO0FBRUY7Ozs7R0FJRztBQUNRLGVBQU8sR0FBRyxVQUFVLE9BQU87SUFDbEMsTUFBTSxDQUFDLDJCQUFHLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQztBQUVGOzs7O0dBSUc7QUFDUSxZQUFJLEdBQUcsVUFBVSxPQUFPO0lBQy9CLE1BQU0sQ0FBQywyQkFBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNoQyxDQUFDLENBQUM7QUFFRjs7OztHQUlHO0FBQ1EsYUFBSyxHQUFHLFVBQVUsT0FBTztJQUNoQyxNQUFNLENBQUMsMkJBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDakMsQ0FBQyxDQUFDO0FBRUY7Ozs7R0FJRztBQUNRLFdBQUcsR0FBRyxVQUFVLE9BQU87SUFDOUIsTUFBTSxDQUFDLDJCQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQyIsImZpbGUiOiJiZWF1dHlsb2cubG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwidHlwaW5ncy1nbG9iYWxcIjtcclxuXHJcbmltcG9ydCB7bG9nfSBmcm9tIFwiLi9iZWF1dHlsb2cubG9nLmhlbHBlcnNcIjtcclxuZXhwb3J0IHtsb2d9IGZyb20gXCIuL2JlYXV0eWxvZy5sb2cuaGVscGVyc1wiO1xyXG5cclxuLyoqXHJcbiAqIGxvZ3MgYW4gaW5mbyB0byBjb25zb2xlXHJcbiAqIEBwYXJhbSBsb2dUZXh0XHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGxldCBpbmZvID0gZnVuY3Rpb24gKGxvZ1RleHQpIHtcclxuICAgIHJldHVybiBsb2cobG9nVGV4dCwgJ2luZm8nKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBsb2dzIGFuICdPSyEnIG1lc3NhZ2UgdG8gY29uc29sZVxyXG4gKiBAcGFyYW0gbG9nVGV4dFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBsZXQgb2sgPSBmdW5jdGlvbiAobG9nVGV4dCkge1xyXG4gICAgcmV0dXJuIGxvZyhsb2dUZXh0LCAnb2snKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBsb2dzIGEgc3VjY2VzcyB0byBjb25zb2xlXHJcbiAqIEBwYXJhbSBsb2dUZXh0IHN0cmluZyB0byBsb2cgYXMgZXJyb3JcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgbGV0IHN1Y2Nlc3MgPSBmdW5jdGlvbiAobG9nVGV4dCkge1xyXG4gICAgcmV0dXJuIGxvZyhsb2dUZXh0LCAnc3VjY2VzcycpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIGxvZ3MgYSAnd2FybjonIG1lc3NhZ2UgdG8gY29uc29sZVxyXG4gKiBAcGFyYW0gbG9nVGV4dCBzdHJpbmcgdG8gbG9nIGFzIGVycm9yXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGxldCB3YXJuID0gZnVuY3Rpb24gKGxvZ1RleHQpIHtcclxuICAgIHJldHVybiBsb2cobG9nVGV4dCwgJ3dhcm4nKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBsb2dzIGFuIGVycm9yIHRvIGNvbnNvbGVcclxuICogQHBhcmFtIGxvZ1RleHRcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgbGV0IGVycm9yID0gZnVuY3Rpb24gKGxvZ1RleHQpIHtcclxuICAgIHJldHVybiBsb2cobG9nVGV4dCwgJ2Vycm9yJyk7XHJcbn07XHJcblxyXG4vKipcclxuICogbG9ncyBhbiBkaXJlY3RvcnkgdG8gY29uc29sZVxyXG4gKiBAcGFyYW0gbG9nVGV4dFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBsZXQgZGlyID0gZnVuY3Rpb24gKGxvZ1RleHQpIHtcclxuICAgIHJldHVybiBsb2cobG9nVGV4dCwgJ2RpcicpO1xyXG59OyJdfQ==
