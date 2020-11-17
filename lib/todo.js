"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function Todo() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var description = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var dueDate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var priority = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 3;
  var _title = title;
  var _description = description;
  var _dueDate = dueDate;
  var _priority = priority;

  var getTitle = function getTitle() {
    return _title;
  };

  var setTitle = function setTitle(newTitle) {
    if (typeof newTitle !== "string") {
      throw TypeError('title must be a string');
    }

    return _title = newTitle;
  };

  var getDescription = function getDescription() {
    return _description;
  };

  var setDescription = function setDescription(newDesc) {
    if (typeof newDesc !== "string") {
      throw TypeError('description must be a string');
    }

    return _description = newDesc;
  };

  var getDueDate = function getDueDate() {
    return _dueDate;
  };

  var setDueDate = function setDueDate(newDate) {
    if (newDate instanceof Date === false) {
      throw TypeError('due date must be a date object');
    }

    return _dueDate = newDate;
  };

  var getPriority = function getPriority() {
    return _priority;
  };

  var setPriority = function setPriority(newPri) {
    if (typeof newPri !== "number") {
      throw TypeError('priority must be a number');
    }

    return _priority = newPri;
  };

  return {
    getTitle: getTitle,
    setTitle: setTitle,
    getDescription: getDescription,
    setDescription: setDescription,
    getDueDate: getDueDate,
    setDueDate: setDueDate,
    getPriority: getPriority,
    setPriority: setPriority
  };
}

var _default = Todo;
exports["default"] = _default;