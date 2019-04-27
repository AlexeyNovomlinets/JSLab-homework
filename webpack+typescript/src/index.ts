import { Homework } from './Homework';
import { UserTemplate, User } from './User';

function getInfo(users: UserTemplate[]):void {
  console.log('\nGet info: ');
  users.forEach(item => {
    console.log(`${item.firstName} ${item.secondName}`);
    item.taskList.forEach(task => {
      const isDone = task.isDone ? 'Done!' : 'no Done!';
      console.log(`Task: ${task.taskName} Status: ${isDone}`);
    });
  });
}

function getCount(users: UserTemplate[]):number {
  return users.filter(item =>
    item.taskList.every(task => task.isDone)
  ).length;
}

console.log('Homework #1');

const task_1 = new Homework('A', 'AAA', false);
const task_2 = new Homework('B', 'BBB', true);
const task_3 = new Homework('C', 'CCC', true);
const task_4 = new Homework('D', 'DDD', false);
const task_5 = new Homework('E', 'EEE', true);

const user_1 = new User('Alexey', 'Novomlinets', task_1, task_2, task_5);
const user_2 = new User('Dmitry', 'Savinok', task_3, task_4);
const user_3 = new User('Alexandr', 'Tkach', task_2);

const userList = [user_1, user_2, user_3];

getInfo(userList);
console.log('\nCount Users with All Done Tasks: ' + getCount(userList));

