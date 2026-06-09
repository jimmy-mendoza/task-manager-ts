export enum Priority {
    High,
    Medium,
    Low
}

export enum Status {
    Pending,
    InProgress,
    Completed
}

export interface Task {
    id: number;
    title: string;
    description: string;
    status: Status;
    createdAt: Date;
    priority: Priority;
}
