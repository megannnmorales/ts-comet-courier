import { Shipment, Driver } from "./models";

function mostRecent<T extends { id: string; updatedAt: string }>(items: T[]): T | undefined{
    let date1 = items[0].updatedAt
    for (let item of items){
        if (date1 < item.updatedAt){
            date1 = item.updatedAt
        }

    
    }
    return items.find(item => item.updatedAt === date1)
}
