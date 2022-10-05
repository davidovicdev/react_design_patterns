import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { WoodenDoorFactory } from "./examples/Example1";
import { IronDoorFactory } from "./examples/Example1";
import { BurgerBuilder } from "./examples/Example1";
import { WildDog } from "./examples/Example1";
import { WildDogAdapter } from "./examples/Example1";
import { AfricanLion } from "./examples/Example1";
import { AsianLion } from "./examples/Example1";
import { Hunter } from "./examples/Example1";
import { User } from "./examples/Example1";
import { ChatRoom } from "./examples/Example1";
import { Designer } from "./examples/Example1";
import { Developer } from "./examples/Example1";
import { Subject } from "./examples/Example1";
import { Observer } from "./examples/Example1";
import { Organization } from "./examples/Example1";
/* ABSTRACT FACTORY */
console.log("-------ABSTRACT FACTORY");
const woodenFactory = new WoodenDoorFactory();
var door = woodenFactory.makeDoor();
var expert = woodenFactory.makeFittingExpert();
door.getDescription(); // Output: I am a wooden door
expert.getDescription(); // Output: I can only fit wooden doors
// Same for Iron Factory
const ironFactory = new IronDoorFactory();
door = ironFactory.makeDoor();
expert = ironFactory.makeFittingExpert();
door.getDescription(); // Output: I am an iron door
expert.getDescription(); // Output: I can only fit iron doors
/* BUILDER */

console.log("-------BUILDER");
const burger = new BurgerBuilder(14)
  .addPepperoni()
  .addLettuce()
  .addTomato()
  .build();
console.log(burger);
/* ADAPTER */
console.log("-------ADAPTER");
const wildDog = new WildDog();
const wildDogAdapter = new WildDogAdapter(wildDog);
const hunter = new Hunter();
const afLion = new AfricanLion();
hunter.hunt(afLion);
hunter.hunt(wildDogAdapter);
/* OBSERVER */
console.log("-------OBSERVER");
const mySubject = new Subject();
const myObserver1 = new Observer(mySubject);
const myObserver2 = new Observer(mySubject);
const myObserver3 = new Observer(mySubject);
const myObserver4 = new Observer(mySubject);
const myObserver5 = new Observer(mySubject);
const myObserver6 = new Observer(mySubject);

mySubject.subscribe(myObserver1);
mySubject.subscribe(myObserver2);
mySubject.subscribe(myObserver3);
mySubject.subscribe(myObserver4);
mySubject.subscribe(myObserver5);
mySubject.subscribe(myObserver6);

mySubject.notify("first notification", [1, 2, 3]);
// myObserver1.notify('asd');
console.log("------------------------------------------------");
mySubject.unsubscribe(myObserver2);

mySubject.notify("after unsubscribing obs2", [1, 4, 5]);
/* MEDIATOR */
console.log("-------MEDIATOR");
const mediator = new ChatRoom();
const john = new User("John Doe", mediator);
const jane = new User("Jane Doe", mediator);
john.send("Hi there!");
jane.send("Hey!");
/* COMPOSITE */
console.log("-------COMPOSITE");
// Prepare the employees
const developer = new Developer("John Doe", 12000);
const desinger = new Designer("Jane Doe", 15000);
const desinger2 = new Designer("Janey Doey", 22000);
// Add them to organization
const organization = new Organization();
organization.addEmployee(developer);
organization.addEmployee(desinger);
organization.addEmployee(desinger2);

console.log(`Net salaries: ${organization.getNetSalaries()}`); // Net Salaries: 49000
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
