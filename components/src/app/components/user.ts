import { HomeworkTemplate } from './homework';

export interface UserTemplate {
  firstName: string;
  secondName: string;
  taskList: HomeworkTemplate[];
}

export class User implements UserTemplate {
  public firstName: string;
  public secondName: string;
  public taskList: HomeworkTemplate[];

  private id: number = ((): number => {
    const ALPHABET = '0123456789';
    const ID_LENGTH = 5;
    let strId = '';
    for (let i = 0; i < ID_LENGTH; i++) {
      strId += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
    }
    return Number(strId);
  })();

  constructor(firstName: string, secondName: string, ...args: HomeworkTemplate[]) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.taskList = args;
  }

  getId() {
    return this.id;
  }
}
