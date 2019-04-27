export interface HomeworkTemplate {
  taskName: string;
  taskDescr: string;
  isDone: boolean;
}

export class Homework implements HomeworkTemplate {
  public taskName: string;
  public taskDescr: string;
  public isDone: boolean;

  constructor(
    taskName: string, 
    taskDescr: string, 
    isDone: boolean
  ) {
    this.taskName = taskName;
    this.taskDescr = taskDescr;
    this.isDone = isDone;
  }
}
