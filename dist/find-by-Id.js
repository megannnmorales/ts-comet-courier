"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findByID = findByID;
const models_1 = require("./models");
const models_2 = require("./models");
const models_3 = require("./models");
function findByID(array, id) {
    return array.find((s) => s.id === id);
}
console.log(findByID(models_1.shipments, 's1'));
console.log(findByID(models_3.customers, 'c1'));
console.log(findByID(models_2.drivers, 'd1'));
