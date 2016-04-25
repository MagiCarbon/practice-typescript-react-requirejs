/// <reference path="./tsd.d.ts" />
/// <reference path="./interfaces.d.ts" />

class List extends React.Component<ListProps, ListState> {
    constructor(props: ListProps, state: ListState) {
        super(props);
    }

    private createItem(item: TodoModel) {
        return <li key={item.id}>{item.title}</li>;
    }

    public render(): JSX.Element {
        return <ul>{this.props.items.map(this.createItem)}</ul>;
    }
}

export { List };