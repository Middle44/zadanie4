class Animal{
    typ = null;
    sound = null;
    constructor(ty, zvuk){
        this.typ = typ;
        this.zvuk = zvuk;
    }
    speak() {
        alert(this.typ + ' makes sound ' + this.zvuk)
    }
}
//const pes = new Animal('Pes','štekať');
//const macka = new Animal('Mačka','mňaukať');
class Pes extends Animal {
    typPsa = null;
    constructor(typPsa) {
        this.typPsa = typPsa;
    }
    speak() {
        alert(this.typ + ' ' + this.typPsa + ' makes sound ' + this.zvuk)
    }
}
const pes = new Pes('bigl');