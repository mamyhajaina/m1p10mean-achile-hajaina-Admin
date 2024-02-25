interface InventoryStatus {
    label: string;
    value: string;
}

export class RendezVous {
    _id: any;
    User: any;
    Employe: any;
    Service: any;
    dateTime: Date = new Date();
    etat: any;
    inventoryStatus?: InventoryStatus;
}
