import React, { Component } from 'react';
import axios from 'axios';
export default class CreateCustomer extends Component {
    constructor(props){
        super(props);

        this.onChangeCustomername   = this.onChangeCustomername.bind(this);
        this.onSubmit               = this.onSubmit.bind(this);

        this.state = {
            customername:'',
        }
    }

    onChangeCustomername(e){
        this.setState({
            customername: e.target.value
        });   
    }

onSubmit(e){
        e.preventDefault();

        const customer = {
            customername: this.state.customername,
        }
        console.log(customer);
        
        axios.post('http://localhost:5000/customers/add', customer)
            .then(res => console.log(res.data));
            
        this.setState({
            customername: ''
        }); 
    }

    render() {
        return(
            <div className='container'>
                <h1> Create New User</h1>
                <form onSubmit ={this.onSubmit}>
                <div className ="form-group">
                        <label> customer Name : </label>
                        <input
                            type="text"
                            required={true}
                            className ="form-control"
                            value = {this.state.customername}
                            onChange = {this.onChangeCustomername}
                            />
                    </div>
                    <div className="form-group">
                          <input type="submit" value="Submit" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}