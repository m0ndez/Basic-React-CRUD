import React, {Component} from 'react'
import axios from 'axios'
import TableRow from "./TableRow";

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {body: []}
    }
    componentDidUpdate() {
        axios.get('http://128.199.167.160:3000/api/v1/users')
            .then(res => {
                this.setState({body: res.data.data})
            })
            .catch(err => console.log(err))
    }
    componentDidMount() {
        axios.get('http://128.199.167.160:3000/api/v1/users')
            .then(res => {
                this.setState({body: res.data.data})
                console.log(`Data Array`,res.data.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    tabRow(){
        return this.state.body.map(function (object, i) {
            return <TableRow obj={object} key={i} />;
        })
    }


    render() {
        return(
            <div>
                <h3 align="center">User List</h3>

                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>PhoneNumber</th>
                        <th>Email</th>
                        <th colSpan="2">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.tabRow() }
                    </tbody>
                </table>
            </div>
        )
    }

}
