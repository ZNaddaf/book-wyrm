import React from 'react';
import ResultsCard from './ResultsCard';
import API from '../utils/API'

class Saved extends React.Component {
    state = {
        saved: null,
    }

    componentDidMount() {
        this.getSavedBooks();
    }

    getSavedBooks = () => {
        API.getSaved()
            .then(res =>
                this.setState({
                    saved: res.data
                })
            )
            .catch(err => console.log(err));
    };

    handleDelete = id => {
        API.deleteBook(id).then(res => this.getSavedBooks());
    }

    render() {
        return (
            <div>
                <ResultsCard books={this.state.saved} saved={true} handleSaveDelete={this.handleDelete} />
            </div>
        );
    }
}

export default Saved;