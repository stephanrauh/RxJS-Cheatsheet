import { BehaviorSubject } from 'rxjs';
import { Step } from './step';

export abstract class AbstractOperatorComponent {
  public result: BehaviorSubject<string> = new BehaviorSubject<string>('3');

  public algorithm: Array<Step> = [];

  constructor() {
    this.resetDemo();
  }

  public abstract startRequest(): void;

  public resetDemo(): void {
    this.result.next(undefined);
    this.algorithm = [];
  }

  public addOperation(typescript: string) {
    this.algorithm.push({ algorithm: typescript });
  }

  public addIntermediateResult(data: any, lines = 1) {
    if (data === null) {
      this.algorithm.push({ data: '', lines });
      this.result.next(undefined);
    } else {
      const text = JSON.stringify(data)
        .replace(',', ', ')
        .replace(':', ', ');
      this.algorithm.push({ data: text, lines });
      this.result.next(text);
    }
  }

  public onSecondButtonClick() {}
}
