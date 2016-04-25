interface TodoModel {
    id: number;
    title: string;
}


interface ListProps {
    items: Array<TodoModel>;
}

interface ListState {}

interface AppProps {}

interface AppState {
    items?: Array<TodoModel>;
    input?: string;
}