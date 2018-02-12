import * as React from 'react';
import { IReadProps } from '../Read/IReadProps';
import { IReadState } from '../Read/IReadState';
import Top from '../Top/Top';
//import RecordTable from '../RecordsTable/RecordsTable';


//API
//import { IAuthorAPI } from '../../api/IAuthorAPI';
import { AuthorAPI } from '../../api/AuthorAPI';
import ReadList from './../ReadList/ReadList';



export default class Read extends React.Component<IReadProps, IReadState> {
    private AuthorService: AuthorAPI;

    public constructor(props: IReadProps, state: IReadState) {
        super(props);
        this.state = {
            items: []
        }

        this.AuthorService = new AuthorAPI();

    }

    public componentDidMount() {
        this.AuthorService.getAllAuthors().then((items) => {
            this.setState({
                items
            });
        });
    }
    // on unmount, kill course fetching in case the request is still pending
    public componentWillUnmount() {
        //this.dataService.abort();
    }

    // render component on the page  
    public render(): React.ReactElement<IReadProps> {

        let ReadListComponent: JSX.Element = this.state.items.length > 0 ? <ReadList items={this.state.items} changeAppMode={this.props.changeAppMode} /> : null

        return (
            <div className="row">
                <div className="col-sm-12">
                    <Top changeAppMode={this.props.changeAppMode} />
                </div>
                <div className="col-sm-12">
                    {ReadListComponent}
                </div>
            </div>


        );
    }

}

