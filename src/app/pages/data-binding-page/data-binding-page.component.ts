import { Component, signal } from '@angular/core';
import { ITask } from '../../core/interfaces';

@Component({
  selector: 'app-data-binding-page',
  imports: [],
  templateUrl: './data-binding-page.component.html',
})
export class DataBindingPageComponent {
  //Define variables to hold the task and the list of tasks
  title= 'Data Binding Page';
  text_field = signal('');
  messageError = signal('')
  tasks = signal<ITask[]>([]);




  // Define a method to add a new task to the list

resetTask() {
    this.text_field.set('');
    this.messageError.set('');
  }

deleteTask(id: number) {
    this.tasks.update(tasks => tasks.filter(task => task.id !== id));
  }

  addTask() {

    if (!this.text_field().trim()) {
      this.messageError.set('The task name is required');
      return; // Do not add empty tasks
    }
    const newTask: ITask = {
      id: this.tasks().length + 1,
      name: this.text_field()
    };
    this.tasks.update(tasks => [...tasks, newTask]);
    this.resetTask();
  }


 }

