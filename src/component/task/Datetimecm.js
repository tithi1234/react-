import React, { Component } from 'react'

 class Datetimecm extends Component {
    
    constructor(props) {
        super(props)
        var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var tooday = new Date(),
        time = tooday.toLocaleString();


        this.state = {
        currentDate: date,
        currentTime: time,
        };
    
      }
    render() {
        return (
            <div>
               <p>
               Today date { this.state.currentDate } and time { this.state.currentTime }
               </p> 
            </div>
        )
    }
}

export default Datetimecm
