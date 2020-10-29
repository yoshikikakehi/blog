import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class ReturnHome extends Component {
    handleClick = () => {
        window.location.href = "/";
    }
    
    render() {
        return (
            <div>
                <Button
                    variant="contained"
                    onClick={this.handleClick}
                    style={{
                        marginLeft:"50px",
                        backgroundColor:"#FFFFFF",
                }}
                >
                    Return Home
                </Button>
            </div>
        )
    }
}

export default ReturnHome;
