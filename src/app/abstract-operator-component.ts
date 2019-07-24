import { BehaviorSubject } from 'rxjs';
import { Step } from './step';

export class AbstractOperatorComponent {
  public result: BehaviorSubject<string> = new BehaviorSubject<string>('3');

  public algorithm: Array<Step> = [];

  constructor() {
    this.resetDemo();
  }

  public resetDemo(): void {
    this.result.next(undefined);
    this.algorithm = [];
  }

  public addOperation(typescript: string) {
    this.algorithm.push({ algorithm: typescript });
  }

  public addIntermediateResult(data: any) {
    if (data === null) {
      this.algorithm.push({ data: '' });
      this.result.next(undefined);
    } else {
      const text = JSON.stringify(data).replace(",", ", ").replace(":", ", ");
      this.algorithm.push({ data: text});
      this.result.next(text);
    }
  }
}
