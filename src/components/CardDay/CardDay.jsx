import React from 'react'
import classes from './cardDay.module.css'
import snow from './../../img/snow-1.svg'



class CardDay extends React.Component {
   
    render () {
        return (
            <div className={classes.cardDayWrapp}>
                <h3>{this.props.weekDay}</h3>
                <img src={snow} alt='weather'/>
                <div className={classes.degree}>{this.props.degree}&#8451;</div>
                <div className={classes.discription}>Snow</div>
            </div>
        )
    }
}



export default CardDay