export class User{
    JSON(): unknown {
      throw new Error('Method not implemented.');
    }
    firstName: string | undefined;
    lastName: string | undefined;
    email: string | undefined;
    birthDate: number | undefined;
    city: string | undefined;
    street: string | undefined;
    zipCode: string | undefined;


    constructor(obj?:any){
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName: '';
        this.email = obj ? obj.email: '';
        this.birthDate = obj ? obj.birthDate: '';
        this.street = obj ? obj.street: '';
        this.city = obj ? obj.city: '';
        this.zipCode = obj ? obj.zipCode: '';
    }
    toJSON(){
        return {
            firstName: this.firstName, 
            lastName :this.lastName,
            email :this.email,
            birthDate: this.birthDate,
            city: this.city, 
            street: this.street, 
            zipCode: this.zipCode
        }
    }
}