import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";

class SubmitButton extends Component {
    render() {
        return (
            <div>
                <Grid container>
                    <Button
                        variant="contained"
                        disabled={this.props.disabled}
                        onClick={ () => this.props.onClick()}
                        style={{
                            marginLeft: "725px",
                            backgroundColor:"#FFFFFF",
                        }}
                    >
                        {this.props.text}
                    </Button>
                </Grid>
            </div>
        )
    }
}

export default SubmitButton
