import React, {Component} from 'react'
import axios from 'axios';

export default class Edit extends Component{
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
            phonenumber: '',
            email: ''
        }
    }

    componentDidMount() {
        axios.get('http://128.199.167.160:3000/api/v1/users/'+ this.props.match.params.id)
            .then(res => {
                this.setState({
                    firstname: res.data.data.firstname,
                    lastname: res.data.data.lastname,
                    phonenumber: res.data.data.phonenumber,
                    email: res.data.data.email
                })
            })
            .catch( error => console.log(error))
    }

    onChangeFirstName(e){
        this.setState({
            firstname: e.target.value
        })
    }

    onChangeLastName(e){
        this.setState({
            lastname: e.target.value
        })
    }

    onChangePhoneNumber(e){
        this.setState({
            phonenumber: e.target.value
        })
    }

    onChangeEmail(e){
        this.setState({
            email: e.target.value
        })

    }

    onSubmit(e){
        e.preventDefault();
        const obj = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            phonenumber: this.state.phonenumber,
            email: this.state.email
        }
        // console.log(obj)
        axios.put('http://128.199.167.160:3000/api/v1/users/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data.data, `Data`))
        this.props.history.push('/index');
    }
    render() {
        return(
            <div style={{ marginTop: 10 }}>
                <h3 align="center">Update, Edit</h3>
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
                        <label>PhoneNumber: </label>
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
                        <input type="submit"
                               value="Update Business"
                               className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
