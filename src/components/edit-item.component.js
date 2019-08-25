import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditItem extends Component {
    constructor(props){
        super(props);

        this.onChangeCustomername   = this.onChangeCustomername.bind(this);
        this.onChangeDate           = this.onChangeDate.bind(this);
        this.onChangeDescription    = this.onChangeDescription.bind(this);
        this.onChangeRno            = this.onChangeRno.bind(this);
        this.onChangeStatus         = this.onChangeStatus.bind(this);
        this.onSubmit               = this.onSubmit.bind(this);

        this.state = {
            customername:'',
            description:'',
            rno:'',
            status:'',
            date:new Date(),
            customers: []
        }
    }
//reactLifecycle method
    componentDidMount(){
        
        axios.get('http://localhost:5000/items/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    customername:response.data.customername,
                    description:response.data.description,
                    rno:response.data.rno,
                    status:response.data.status,
                    date:new Date(response.data.date)
                })
            })
            .catch(function(error){
                console.log(error);
            })

        axios.get('http://localhost:5000/customers/')
        .then(response => {
            console.log(response.data.length);
            if (response.data.length > 0 ){
                console.log('not empty');
                this.setState({
                    customers: response.data.map(customer => customer.customername),
                    customername: response.data[0].customername
                })
            }
            else {
                console.log('errorlah');
            }
        })
    }

    onChangeCustomername(e){
        this.setState({
            customername: e.target.value
        });   
    }
    onChangeDescription(e){
        this.setState({
            description: e.target.value
        });   
    }
    onChangeRno(e){
        this.setState({
            rno: e.target.value
        });   
    }
    onChangeStatus(e){
        this.setState({
            status: e.target.value
        });   
    }
    onChangeDate(date){
        this.setState({
            date: date
        });   
    }

    onSubmit(e){
        e.preventDefault();

        const item = {
            customername: this.state.customername,
            description: this.state.description,
            rno: this.state.rno,
            status: this.state.status,
            date: this.state.date
        }
        console.log(item)

        axios.post('http://localhost:5000/items/update/'+this.props.match.params.id, item)
            .then(res => console.log(res.data));
            
        window.location ='/';
        console.log('success');
    }

    render() {
        return(
            <div>
                <h1> Edit Item Log</h1>
                <form onSubmit ={this.onSubmit}>
                    <div className="form-group">
                        <label> Customer Name : </label>
                        <select ref="userInput"
                        required={true}
                        className =" form-control"
                        value ={this.state.customername}
                        onChange = {this.onChangeCustomername}>
                            {
                                this.state.customers.map((customer)=>{
                                    return <option
                                    key={customer}
                                    value={customer}>{customer}
                                    </option>
                                })
                            }
                        </select>
                    </div>
                    <div className ="form-group">
                        <label> Description : </label>
                        <input
                            type="text"
                            required={true}
                            className ="form-control"
                            value = {this.state.description}
                            onChange = {this.onChangeDescription}
                            />
                    </div>
                    <div className ="form-group">
                        <label> Receive Note Number : </label>
                        <input
                            type="text"
                            required={true}
                            className ="form-control"
                            value = {this.state.rno}
                            onChange = {this.onChangeRno}
                            />
                    </div>
                    <div className ="form-group">
                        <label> Status : </label>
                        <input
                            type="text"
                            required={true}
                            className ="form-control"
                            value = {this.state.status}
                            onChange = {this.onChangeStatus}
                            />
                    </div>
                    <div className ="form-group">
                        <label> Date : </label>
                        <DatePicker
                            selected ={this.state.date}
                            onChange = {this.onChangeDate}
                        />
                    </div>
                    <div className="form-group">
                          <input type="submit" value="Finish editting" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}