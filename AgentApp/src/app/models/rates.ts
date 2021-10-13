export interface Rate{
    distancePrice: number;
    weightPrice?: number;

    minWeight?: number;
    maxWeight:number;

    discountAge?: number;
    discountPercent?: number;

    countPrice(distance: number, weight?: number, age?: number): number;
}

export class AeroEco implements Rate{
    distancePrice: number;
    weightPrice: number;
    minWeight: number;
    maxWeight: number;

    constructor(){
        this.distancePrice = 4;
        this.weightPrice = 4000;
        this.minWeight = 5;
        this.maxWeight = 20;
    }

    countPrice(distance: number, weight: number): number{
        console.log(weight)
        if (weight > this.maxWeight){
            console.log('here')
            return 0;
        } else if (weight < this.minWeight){
            this.weightPrice = 0
        }
        return (distance * this.distancePrice) + this.weightPrice;
    }
}

export class AeroAdvanced implements Rate{
    distancePrice: number;
    weightPrice: number;
    minWeight: number;
    maxWeight: number;
    discountAge: number;
    discountPercent: number;

    constructor(){
        this.distancePrice = 8;
        this.weightPrice = 5000;
        this.minWeight = 20;
        this.maxWeight = 50;
        this.discountAge = 7;
        this.discountPercent = 0.3;
    }

    countPrice(distance: number, weight: number, age: number): number{
        if (weight > this.maxWeight){
            return 0;
        } else if (weight < this.minWeight){
            this.weightPrice = 0
        }
        if (age < this.discountAge){
            return (distance * this.distancePrice * (1 - this.discountPercent)) + this.weightPrice;
        } else {
            return (distance * this.distancePrice) + this.weightPrice;
        }
    }
}

 export class AeroLux implements Rate{
    distancePrice: number;
    maxWeight: number;
    discountAge: number;
    discountPercent: number;

    constructor(){
        this.distancePrice = 15;
        this.maxWeight = 50;
        this.discountAge = 16;
        this.discountPercent = 0.3;
    }

    countPrice(distance: number, weight: number, age: number): number{
        if(weight > this.maxWeight){
            return 0;
        }
        if (age < this.discountAge){
            return (distance * this.distancePrice * (1 - this.discountPercent));
        } else {
            return (distance * this.distancePrice);
        }
    }
}

export class RzdEco implements Rate{
    distancePrice: number;
    weightPrice: number;
    minWeight: number;
    maxWeight: number;
    discountAge: number;
    discountPercent: number;

    constructor(){
        this.distancePrice = 0.5;
        this.weightPrice = 50; // for every kg
        this.minWeight = 15;
        this.maxWeight = 50;
        this.discountAge = 5;
        this.discountPercent = 0.5;
    }

    countPrice(distance: number, weight: number, age: number): number{
        if (weight > this.maxWeight){
            return 0;
        } else if (weight < this.minWeight){
            this.weightPrice = 0
        }
        if (age < this.discountAge){
            return (distance * this.distancePrice * (1 - this.discountPercent)) + (this.weightPrice * weight);
        } else {
            return (distance * this.distancePrice) + this.weightPrice;
        }
    }
}

export class RzdAdvanced implements Rate{
    distancePrice: number;
    weightPrice: number;
    minWeight: number;
    maxWeight: number;
    discountAge: number;
    discountPercent: number;

    constructor(){
        this.distancePrice = 2;
        this.weightPrice = 50; // for every kg
        this.minWeight = 20;
        this.maxWeight = 60;
        this.discountAge = 8;
        this.discountPercent = 0.3;
    }

    countPrice(distance: number, age: number, weight: number): number{
        if (weight > this.maxWeight){
            return 0;
        } else if (weight < this.minWeight){
            this.weightPrice = 0
        }
        if (age < this.discountAge){
            return (distance * this.distancePrice * (1 - this.discountPercent)) + (this.weightPrice * weight);
        } else {
            return (distance * this.distancePrice) + this.weightPrice;
        }
    }
}

export class RzdLux implements Rate{
    distancePrice: number;
    maxWeight: number;
    discountAge: number;
    discountPercent: number;

    constructor(){
        this.distancePrice = 4;
        this.maxWeight = 60;
        this.discountAge = 16;
        this.discountPercent = 0.2;
    }

    countPrice(distance: number, age: number, weight: number): number{
        if(weight > this.maxWeight){
            return 0;
        }
        if (age < this.discountAge){
            return (distance * this.distancePrice * (1 - this.discountPercent));
        } else {
            return (distance * this.distancePrice);
        }
    }
}

