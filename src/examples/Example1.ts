/* ABSTRACT FACTORY */
interface Door {
  getDescription(): void;
}
interface DoorFittingExpert {
  getDescription(): void;
}
interface DoorFactory {
  makeDoor(): Door;
  makeFittingExpert(): DoorFittingExpert;
}
class WoodenDoor implements Door {
  public getDescription() {
    console.log("I am a wooden door");
  }
}
class IronDoor implements Door {
  public getDescription() {
    console.log("I am an iron door");
  }
}

class Welder implements DoorFittingExpert {
  public getDescription() {
    console.log("I can only fit iron doors");
  }
}

class Carpenter implements DoorFittingExpert {
  public getDescription() {
    console.log("I can only fit wooden doors");
  }
}

// Wooden factory to return carpenter and wooden door
class WoodenDoorFactory implements DoorFactory {
  public makeDoor(): Door {
    return new WoodenDoor();
  }

  public makeFittingExpert(): DoorFittingExpert {
    return new Carpenter();
  }
}

// Iron door factory to get iron door and the relevant fitting expert
class IronDoorFactory implements DoorFactory {
  public makeDoor(): Door {
    return new IronDoor();
  }

  public makeFittingExpert(): DoorFittingExpert {
    return new Welder();
  }
}

/* BUILDER */

class Burger {
  protected size: number;
  protected cheese: boolean = false;
  protected pepperoni: boolean = false;
  protected lettuce: boolean = false;
  protected tomato: boolean = false;
  constructor(builder: BurgerBuilder) {
    this.size = builder.size;
    this.cheese = builder.cheese;
    this.pepperoni = builder.pepperoni;
    this.lettuce = builder.lettuce;
    this.tomato = builder.tomato;
  }
}
class BurgerBuilder {
  public size: number;
  public cheese = false;
  public pepperoni = false;
  public lettuce = false;
  public tomato = false;

  constructor(size: number) {
    this.size = size;
  }

  public addPepperoni() {
    this.pepperoni = true;
    return this;
  }

  public addLettuce() {
    this.lettuce = true;
    return this;
  }

  public addCheese() {
    this.cheese = true;
    return this;
  }

  public addTomato() {
    this.tomato = true;
    return this;
  }

  public build(): Burger {
    return new Burger(this);
  }
}
/* ADAPTER */
interface Lion {
  roar(): any;
}

class AfricanLion implements Lion {
  public roar() {
    console.log("AfricanLion: AAAAAAAAF");
  }
}

class AsianLion implements Lion {
  public roar() {
    console.log("AsianLion: AAAAAAAAS");
  }
}
class Hunter {
  public hunt(lion: Lion): void {
    lion.roar();
  }
}

// This needs to be added to the game
class WildDog {
  public bark() {
    console.log("WILD DOG : AWAWAW");
  }
}

// Adapter around wild dog to make it compatible with our game
class WildDogAdapter implements Lion {
  protected dog: WildDog;

  constructor(dog: WildDog) {
    this.dog = dog;
  }

  public roar() {
    this.dog.bark();
  }
}
/* OBSERVER */
interface ImplObservable {
  // subscribe method
  subscribe(observer: ImplObservable): void;
  // unsubscribe method
  unsubscribe(observer: ImplObservable): void;
  // notify method
  notify(...args: unknown[]): void;
}

//concrete subject (implements -> subscribe(), unsubscribe(), notify())
class Subject implements ImplObservable {
  observers: Set<ImplObserver>;

  constructor() {
    this.observers = new Set();
  }

  subscribe(observer: ImplObserver): void {
    this.observers.add(observer);
  }

  unsubscribe(observer: ImplObserver): void {
    this.observers.delete(observer);
  }

  notify(...args: unknown[]): void {
    this.observers.forEach((observer) => {
      observer.notify(...args);
      // console.log("notified");
    });
  }
}

//observer interface (declares -> notify())
interface ImplObserver {
  // receive notification
  notify(...args: unknown[]): void;
}

let COUNTER = 0;
//concrete observer (implements -> notify())
class Observer implements ImplObserver {
  id: number;

  constructor(observable: ImplObservable) {
    this.id = ++COUNTER;
  }

  notify(...args: unknown[]): void {
    console.log(
      `observer with id ${this.id} received: ${JSON.stringify(args)}`
    );
  }
}
/* MEDIATOR */
interface ChatRoomMediator {
  showMessage(user: User, message: string): any;
}

class ChatRoom implements ChatRoomMediator {
  showMessage(user: User, message: string) {
    var timee = new Date();
    let day = timee.getDay();
    let month = timee.getMonth();
    let year = timee.getFullYear();
    var time: string = `${day}.${month}.${year}`;

    let sender = user.getName();

    console.log(time, sender, message);
  }
}

class User {
  protected name: string;

  protected chatMediator: any;

  constructor(name: string, chatMediator: any) {
    this.name = name;

    this.chatMediator = chatMediator;
  }

  getName() {
    return this.name;
  }

  send(message: any) {
    this.chatMediator.showMessage(this, message);
  }
}
/* COMPOSITE */
interface Employee {
  getName(): string;
  setSalary(salary: number): void;
  getSalary(): number;
  getRoles(): Array<string>;
}

class Developer implements Employee {
  protected salary: number;
  protected name: string;
  protected roles: Array<string> = [];

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  public getName(): string {
    return this.name;
  }

  public setSalary(salary: number): void {
    this.salary = salary;
  }

  public getSalary(): number {
    return this.salary;
  }

  public getRoles(): Array<string> {
    return this.roles;
  }
}

class Designer implements Employee {
  protected salary: number;
  protected name: string;
  protected roles: Array<string> = [];

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }
  public getName(): string {
    return this.name;
  }

  public setSalary(salary: number): void {
    this.salary = salary;
  }

  public getSalary(): number {
    return this.salary;
  }

  public getRoles(): Array<string> {
    return this.roles;
  }
}
class Organization {
  protected employees: Array<Employee> = [];

  public addEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  public getNetSalaries(): number {
    var netSalary: number = 0;
    this.employees.forEach((employee) => {
      netSalary += employee.getSalary();
    });
    return netSalary;
  }
}
export {
  WoodenDoorFactory,
  IronDoorFactory,
  BurgerBuilder,
  WildDog,
  WildDogAdapter,
  Hunter,
  ChatRoom,
  User,
  Developer,
  Designer,
  Organization,
  AfricanLion,
  AsianLion,
  Subject,
  Observer,
};
