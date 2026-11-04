"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// shipment-service.ts (before)
const models_1 = require("./models");
function findShipment(id) {
    return models_1.shipments.find((s) => s.id === id);
}
function describeShipment(id) {
    const shipment = findShipment(id);
    if (shipment === undefined) {
        return "No shipment found";
    }
    return `${shipment.trackingId}: ${shipment.origin} -> ${shipment.destination}`;
}
function totalWeightForCustomer(customerId, statusFilter) {
    return models_1.shipments
        .filter((s) => s.customerId === customerId && s.status === statusFilter)
        .reduce((total, s) => total + s.weightKg, 0);
}
console.log(describeShipment("s1"));
console.log(totalWeightForCustomer("c1", "in_transit"));
