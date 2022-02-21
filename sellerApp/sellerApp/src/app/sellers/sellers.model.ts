export class Sellers {
  
    public anPersonId:string;
    public first_name: string;
    public  last_name: string;
    public externalId: string;
    public companyName: string;
    public  cardType:string;
    public  product: string;
    public  phone: string;
    public  email: string;
  
    constructor(anPersonId:string,first_name:string,last_name:string,externalId:
      string,companyName:string,cardType:string,
      product:string,phone:string,
      email:string
      ) {
      this.anPersonId = anPersonId;
      this.first_name = first_name;
      this.last_name = last_name;
      this.externalId = externalId;
      this.companyName = companyName;
      this.cardType = cardType;
      this.product = product;
      this.phone = phone;
      this.email = email;
    }
    
  }