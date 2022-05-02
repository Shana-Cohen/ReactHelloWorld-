import React from 'react';

class PersonRow extends React.Component {

    getObese = (weight) => {
        let className = '';
        if (weight > 200) {
            className = 'bg-danger'
        }
        return className;
    }

    render() {
        const { person, key } = this.props;
        return (
            <tr key={key} className={this.getObese(person.weight)}>
                <td>{person.firstName}</td>
                <td>{person.lastName}</td>
                <td>{person.weight}</td>
            </tr>
        )
    }
}

export default PersonRow;
