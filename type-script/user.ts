class SimpleUser {
  id: number;
  name: string;
  getInfo(): string {
    return 'id:' + this.id + ' name:' + this.name;
  }
}

let dmitriy: SimpleUser = new SimpleUser();
dmitriy.id = 1;
dmitriy.name = 'Dmitriy';
console.log(dmitriy.getInfo());

class UserWithConstructor {
  id: number;
  name: string;
  constructor(userId: number, userName: string) {
    this.id = userId;
    this.name = userName;
  }
  getInfo(): string {
    return 'id:' + this.id + ' name:' + this.name;
  }
}

let dmitriy2: UserWithConstructor = new UserWithConstructor(2, 'Dmitriy');
console.log(dmitriy2.getInfo());
