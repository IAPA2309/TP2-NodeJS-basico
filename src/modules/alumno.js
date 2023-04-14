export class Alumno{
    constructor(username, DNI) {
        this.username = username;
        this.DNI = DNI;  
    }

    mostrar() {
        return this.username + ' ' + this.DNI;
    }
}