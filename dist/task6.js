"use strict";

const { shipments } = require("./models");

Object.defineProperty(exports, "__esModule", { value: true });
function mostRecent(items) {
    let date1 = items[0].updatedAt;
    for (let item of items) {
        if (date1 < item.updatedAt) {
            date1 = item.updatedAt;
        }
    }
    return items.find(item => item.updatedAt === date1);
}

console.log(mostRecent(shipments))