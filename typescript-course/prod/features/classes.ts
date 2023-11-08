class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('blue');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('vroom');
  }

  public startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}
const car1 = new Car(4, 'red');
car1.startDrivingProcess();
