import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { invoke } from '@tauri-apps/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public readonly nameForm = new FormControl('');
  public message: string | null = null;

  public async greet() {
    const name = this.nameForm.value;
    if (!name) {
      throw new Error(`name is required.`);
    }
    const result = await invoke('custom_greet', {name});
    
    if (typeof result !== 'string') {
      throw new TypeError(`result(${result}) is not string.`);
    }
    this.message = result;
  }
}
