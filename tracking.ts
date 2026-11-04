import randomstring from "randomstring";
import { hri } from "human-readable-ids";

import { Shipment } from "./models";


function createShipment(fields: Omit <Shipment, "id" | "trackingId">) {
    const randId = randomstring.generate({ length: 6, charset: "alphanumeric", capitalization: "uppercase" });
    const trackingId = `CC-${randId}`;
    const id = hri.random()
    const ids = {id: id, trackinId: trackingId}
    let ship = {...ids, ...fields}
    return ship
}