import React, { Component } from 'react'
import axios from 'axios'

export default class Create extends Component{
    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            firstname: '',
            lastname: '',
            phonenumber:'',
            email:''
        }
    }
    onChangeFirstName(e) {
        this.setState({
            firstname: e.target.value
        });
    }
    onChangeLastName(e) {
        this.setState({
            lastname: e.target.value
        })
    }
    onChangePhoneNumber(e) {
        this.setState({
            phonenumber: e.target.value
        })
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(`The values are Firstname "${this.state.firstname}", Lastname "${this.state.lastname}", Phone "${this.state.phonenumber}", Email "${this.state.email}"`)
        const body = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            phonenumber: this.state.phonenumber,
            email: this.state.email
        };
        axios.post('http://128.199.167.160:3000/api/v1/users',body)
            .then(res => console.log(res.data))
        /*
        axios.post('http://localhost:4000/business/add', obj)
            .then(res => console.log(res.data))

         */
        this.setState({
            firstname: '',
            lastname: '',
            phonenumber: '',
            email:''
        })
    }

    render() {
        return(

            <div style={{ marginTop: 10 }}>
                <h3>Add New Business</h3>

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>FirstName:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.firstname}
                            onChange={this.onChangeFirstName}
                        />
                    </div>
                    <div className="form-group">
                        <label>LastName: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.lastname}
                               onChange={this.onChangeLastName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone-number: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.phonenumber}
                               onChange={this.onChangePhoneNumber}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.email}
                               onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Business" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }

}
