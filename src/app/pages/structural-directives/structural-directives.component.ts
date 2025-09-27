import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  imports: [],
  templateUrl: './structural-directives.component.html',
})
export class StructuralDirectivesComponent {

  //Conditional If 

  isVisible = signal(true);

  toggleVisibility() {
    this.isVisible.update(v => !v);
  }

  //Conditional Switch

  viewMode = signal<'list' | 'grid' | 'none'>('none');
  
  setViewMode(mode: 'list' | 'grid' | 'none') {
    this.viewMode.set(mode);
  }

  //Cycle - For Loop
  users = signal([
    { id: 1, name: 'Alice', role: 'admin' },
    { id: 2, name: 'Bob', role: 'user' },
    { id: 3, name: 'Charlie', role: 'user' },
  ]); 

}