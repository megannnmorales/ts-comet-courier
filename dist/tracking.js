"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const randomstring_1 = __importDefault(require("randomstring"));
const human_readable_ids_1 = require("human-readable-ids");
function createShipment(fields) {
    const randId = randomstring_1.default.generate({ length: 6, charset: "alphanumeric", capitalization: "uppercase" });
    const trackingId = `CC-${randId}`;
    const id = human_readable_ids_1.hri.random();
    const ids = { id: id, trackinId: trackingId };
    let ship = { ...ids, ...fields };
    return ship;
}
