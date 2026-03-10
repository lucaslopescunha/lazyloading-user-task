import { Routes } from "@angular/router";
import { canLeaveEditPage, NewTaskComponent } from "../tasks/new-task/new-task.component";
import { resolveUserTasks, TasksComponent } from "../tasks/tasks.component";
import { TasksService } from "../tasks/tasks.service";


export const routes: Routes = [
    {
        path: '',
        /**
         * This will make TasksService available to nested routes lazily.
         */
        providers: [TasksService],
        children: [
            {
                path: '',
                redirectTo: 'tasks',
                pathMatch: 'full',
            },
            {
                path: 'tasks',
                /**
                 * To load components lazily, they must be removed for the imports and "load component" must be used.
                 * @returns 
                 */
                component: TasksComponent,
                runGuardsAndResolvers: 'always',
                resolve: {
                    /**
                     * The entire route will be lazily loaded
                     */
                    userTasks: resolveUserTasks,

                }
            },
            {
                path: 'tasks/new',
                component: NewTaskComponent,
                canDeactivate: [canLeaveEditPage]
            }
        ]
    }
]