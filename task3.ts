import { customers, drivers, Shipment } from "./models";
import { Driver } from "./models";
import { Customer } from "./models";
import { findByID } from "./find-by-Id";
import {shipments} from "./models";


type ServiceResult<T> = 
| { status: "success"; data: T }
  | { status: "error"; message: string };


function fetchShipment(id: string): ServiceResult<Shipment> {
    const shipment = findByID(shipments, id)
    if (shipment === undefined) {
        return { status: "error", message: "shipment not found"}
    }
    else {
        return {status: "success", data: shipment}
    }


}



function fetchCustomer(id: string): ServiceResult<Customer> {
    const customer = findByID(customers, id)
        if (customer === undefined) {
            return { status: "error", message: "customer not found"}
        }
        else {
            return {status: "success", data: customer}
        }


}

function fetchDriver(id: string): ServiceResult<Driver> {
    const driver = findByID(drivers, id)
        if (driver === undefined) {
            return { status: "error", message: "customer not found"}
        }
        else {
            return {status: "success", data: driver}
        }


}



function describeResult<T>(result: ServiceResult<T>): string {
    if (result.status === "success") {
        return `${JSON.stringify(result.data)}`
    }
        else {
        return `${result.message}`
    }
    
    }

