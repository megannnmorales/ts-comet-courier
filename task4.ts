import { Shipment, Driver, Customer, customers } from "./models";

type UpdateShipment = Partial < Pick < Shipment, "status" | "destination" | "weightKg" > >

type DriverProfile = Pick < Driver, "name" | "vehicleType" >

type NewCustomer = Omit < Customer, "id" >



