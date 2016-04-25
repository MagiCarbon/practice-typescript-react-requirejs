/// <reference path="./tsd.d.ts" />
/// <reference path="./interfaces.d.ts" />

import { List }  from "./list";

class App extends React.Component<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props);
        this.state = {
            items: [],
            input: ""
        };
    }

    private handleInput(e: React.FormEvent) {
        e.preventDefault();
        this.setState({
            input: (e.target as any).value
        });
    }

    private handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        var items: Array<TodoModel> = this.state.items.slice();
        items.push({
            id: items.length + 1,
            title: this.state.input
        });
        this.setState({
            input: "",
            items: items
        });
    }

    public render(): JSX.Element {

        return (
            <div>
                <h3>TODO</h3>
                <List items={this.state.items} />
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input onChange={ e => this.handleInput(e) } type="text" value={this.state.input}/>
                    <button type="submit">{'Add #' + (this.state.items.length+1)}</button>
                </form>
            </div>
        );
    }
}

export = App;
