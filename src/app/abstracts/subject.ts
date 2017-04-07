import { Observer } from '../interfaces/observer'; 

export abstract class Subject {

    private observers: Observer[] = new Array();

    registerListener(observer: Observer): void {
        this.observers.push(observer);
    }

    notifyListeners(): void {
        this.observers.forEach(observer =>
        observer.notify());
    }
}