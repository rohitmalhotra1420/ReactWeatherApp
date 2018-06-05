import React from 'react';


class Form extends React.Component{
    render(){
        return(
            <div className="myForm">
                <form onSubmit={this.props.getWeather} >
                    <input type="text" className="myInputs form-control" name="city" placeholder="City"/>
                    <input type="text" className="myInputs form-control" name="country" placeholder="Country"/>
                    <button className="btn btn-warning" >Get Weather</button>
                </form>
            </div>
        );
    }
}


export default Form;