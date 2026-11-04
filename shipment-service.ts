// shipment-service.ts (before)
import { shipments } from "./models";

function findShipment(id: string)  {
  return shipments.find((s) => s.id === id);
}

function describeShipment(id:string): string {
    
  const shipment = findShipment(id);
  if (shipment === undefined) {
        return "No shipment found"
    }
  return `${shipment.trackingId}: ${shipment.origin} -> ${shipment.destination}`;
}


function totalWeightForCustomer(customerId: string, statusFilter: string) {
  return shipments
    .filter((s) => s.customerId === customerId && s.status === statusFilter)
    .reduce((total, s) => total + s.weightKg, 0);
}

console.log(describeShipment("s1"));
console.log(totalWeightForCustomer("c1", "in_transit"));