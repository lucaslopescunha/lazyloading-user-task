import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UsersComponent } from "./users/users.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UsersComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
