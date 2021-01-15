import React from 'react'
import classes from './footerData.module.css'

class FooterData extends React.Component {

    render() {
        
        return (
           <div className={classes.footerDiscription}>
            <div className={classes.lefttWrapp}>
                <div>{this.props.headingLeft}</div>
                <div>{this.props.valueLeft}</div>
            </div>
            <div className={classes.rigghtWrapp}>
                <div>{this.props.headingRight}</div>
                <div>{this.props.valueRight}</div>
            </div>
           </div>
                 
                
        )
    }
}



export default FooterData