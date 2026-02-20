import { User } from "./login";
import { getCurrentUser } from "./util";

/**
 * TypeScript interface copy of the Java Task object.
 */
export interface Task {
	id: number;
	title: string;
	description: string;
	completed: boolean;
	dueDate?: Date;
	priority: 1|2|3|4|5; // e.g. 1 (high) .. 5 (low)
	createdAt: Date;
	updatedAt?: Date;
	assignedTo?: User; 
    owner: User;
    stage:  "unassigned" | "backlog" | "in-progress" |"needs-help" |"needs-review"|"completed";
}

function createTask() {
    let now: Date = new Date();
    let t: Task = {
        id: 0,
        title: (document.getElementById("title") as HTMLInputElement).value,
        description: (document.getElementById("description") as HTMLTextAreaElement).value,
        completed: false,
        dueDate: new Date((document.getElementById("due") as HTMLInputElement).value),
        priority: parseInt((document.getElementById("priority") as HTMLSelectElement).value) as 1|2|3|4|5,
        createdAt: now,
        stage: "unassigned",
        owner: getCurrentUser() // Assuming owner is not set in the UI
    };
}