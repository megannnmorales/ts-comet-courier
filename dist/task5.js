"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function updateEntity(array, id, fields) {
    let newArray = [];
    for (let item of array) {
        if (item.id === id) {
            let shipToUpdate = { ...item, ...fields };
            newArray.push(shipToUpdate);
        }
        else {
            newArray.push(item);
        }
    }
    return newArray;
}
// if shipment["id"] == id
//     for field in fields
//      if field is in shipment:
//         shipment["field"] == fields["field"]
//         append
// else append
// for (const [key, value] of Object.entries(fields)){
//             item[key] = value
//         }
