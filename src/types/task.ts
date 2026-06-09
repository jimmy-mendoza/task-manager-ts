enum Priority {
    High,
    Medium,
    Low
}

enum Status {
    Pending,
    InProgress,
    Completed
}

interface Task {
    id: number;
    title: string;
    description: string;
    status: Status;
    createdAt: Date;
    priority: Priority;
}
