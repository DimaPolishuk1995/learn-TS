class SimpleUser {
    id: number;
    name: string;
    getInfo(): string {
        return "id:" + this.id + " name:" + this.name;
    }
}

let dmitriy: SimpleUser = new SimpleUser();
dmitriy.id = 1;
dmitriy.name = "Dmitriy";
console.log(dmitriy.getInfo());
