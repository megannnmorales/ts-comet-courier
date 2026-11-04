import { shipments } from "./models";
import { drivers } from "./models";
import { customers } from "./models";

function findByID<T extends { id: string }>(array: T[], id: string) {
    return array.find((s) => s.id === id);
}

console.log(findByID(shipments, 's1'))
console.log(findByID(customers, 'c1'))
console.log(findByID(drivers, 'd1'))