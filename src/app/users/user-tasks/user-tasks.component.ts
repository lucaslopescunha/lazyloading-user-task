import { Component, inject, input } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterLink, RouterOutlet, RouterStateSnapshot } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-tasks',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {
  userName = input.required<string>();
  message = input.required<string>();
}

export const resolveUserName: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  router: RouterStateSnapshot
) => {
  const userService = inject(UsersService);
  const userName = userService
    .users
    .find(u=> u.id === activatedRoute
      .paramMap.get('userId'))?.name || '';
  return userName;    
}

export const resolveTitle: ResolveFn<string> = (
  activatedRoute,
  routerState
) => {
  return `${resolveUserName(activatedRoute, routerState)} '\'s tasks`
}