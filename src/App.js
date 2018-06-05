import React from 'react';
import ReactDOM from 'react-dom';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather'
import './App.css';

const API_KEY='b3e83e7362e1c0dbcdfbf2f81b3bcc11';



class App extends React.Component{

    state={
        temperature:"",
        humidity:"",
        description:"",
        country:"",
        city:"",
        error:""
    }

    getWeather= async(e)=>{
        e.preventDefault();
        const city= e.target.city.value;
        const country= e.target.country.value;
        if(city && country){
            const api_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metrics`);
            const data=await api_call.json();
            console.log(data);
            const tempCelcius=data.main.temp-273.15;
            this.setState({
               temperature:tempCelcius,
               humidity:data.main.humidity,
               description:data.weather[0].description,
               country:data.sys.country,
               city:data.name,
               error:""
            });
        }
        else{
           this.setState({
               temperature:"",
               humidity:"",
               description:"",
               country:"",
               city:"",
               error:"Please Enter City and Country."
            });
        }

    }
    render(){
        return(

            <div className="container-fluid main">
                <div className="col-md-2"></div>
                <div className="col-md-3 titleColumn">
                    <Titles/>
                </div>
                <div className="col-md-5 inputColumn">
                     <Form getWeather={this.getWeather}/>
                     <Weather
                         temperature={this.state.temperature}
                         humidity={this.state.humidity}
                         description={this.state.description}
                         country={this.state.country}
                         city={this.state.city}
                         error={this.state.error}
                     />
                </div>
                <div className="col-md-2"></div>
            </div>





        );
    }
}

export default App;