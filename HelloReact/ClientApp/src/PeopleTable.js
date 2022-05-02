import React from 'react';
import PersonForm from './PersonForm';
import PersonRow from './PersonRow';

class PeopleTable extends React.Component {

    state = {
        people: [],
        firstName: '',
        lastName: '',
        weight: ''
    }

    populateTable = () => {
        if (this.state.people.length == 0) {
            return <h1>Help! This list is empty! Let's get some ppl going here!</h1>
        }

        else {
            return (
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Weight</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.people.map((p, k) => <PersonRow person={p} key={k} />)}
                    </tbody>
                </table>)
        }
    }

    onChangeFirstName = e => {
        this.setState({ firstName: e.target.value });
    }

    onChangeLastName = e => {
        this.setState({ lastName: e.target.value });
    }

    onChangeWeight = e => {
        this.setState({ weight: e.target.value });
    }

    onAddClick = () => {
        const { firstName, lastName, weight, people } = this.state;
        const person = {
            firstName,
            lastName,
            weight
        }
        const allPpl = [person, ...people];
        this.setState({ people: allPpl, firstName: '', lastName: '', weight: '' });
    }

    onClearClick = () => {
        this.setState({ people: [] });
    }

    render() {
        return (
            <div className='container mt-5'>

                <PersonForm
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    weight={this.state.weight}
                    onChangeFirstName={this.onChangeFirstName}
                    onChangeLastName={this.onChangeLastName}
                    onChangeWeight={this.onChangeWeight}
                    onAddClick={this.onAddClick}
                    onClearClick={this.onClearClick} />
                {this.populateTable()}
            </div>
        )
    }
}
export default PeopleTable;