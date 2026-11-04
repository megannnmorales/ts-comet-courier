"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("./models");
const find_by_Id_1 = require("./find-by-Id");
const models_2 = require("./models");
function fetchShipment(id) {
    const shipment = (0, find_by_Id_1.findByID)(models_2.shipments, id);
    if (shipment === undefined) {
        return { status: "error", message: "shipment not found" };
    }
    else {
        return { status: "success", data: shipment };
    }
}
function fetchCustomer(id) {
    const customer = (0, find_by_Id_1.findByID)(models_1.customers, id);
    if (customer === undefined) {
        return { status: "error", message: "customer not found" };
    }
    else {
        return { status: "success", data: customer };
    }
}
function fetchDriver(id) {
    const driver = (0, find_by_Id_1.findByID)(models_1.drivers, id);
    if (driver === undefined) {
        return { status: "error", message: "customer not found" };
    }
    else {
        return { status: "success", data: driver };
    }
}
function describeResult(result) {
    if (result.status === "success") {
        return `${JSON.stringify(result.data)}`;
    }
    else {
        return `${result.message}`;
    }
}

console.log(describeResult(fetchCustomer("d5")))