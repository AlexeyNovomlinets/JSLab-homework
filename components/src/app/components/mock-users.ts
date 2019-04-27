import { Homework } from './homework';
import { User } from './user';

const task1 = new Homework(
  'Task 1',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  false
);
const task2 = new Homework(
  'Task 2', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  true
);
const task3 = new Homework(
  'Task 3',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  true
);
const task4 = new Homework(
  'Task 4',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  false
);
const task5 = new Homework(
  'Task 5',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  true
);

const user1 = new User('Alexey', 'Novomlinets', task1, task2, task5);
const user2 = new User('Dmitry', 'Savinok', task3, task4);
const user3 = new User('Alexandr', 'Tkach', task2, task5);

export const USER_LIST = [user1, user2, user3];
