import { Routes } from "@angular/router";
import { canLeaveEditPage, NewTaskComponent } from "../tasks/new-task/new-task.component";
import { resolveUserTasks, TasksComponent } from "../tasks/tasks.component";


export const routes: Routes = [
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