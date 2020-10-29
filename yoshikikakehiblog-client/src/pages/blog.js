import React from 'react';
import {Component} from 'react';
import {Fragment} from 'react';
import axios from "axios";
import dayjs from "dayjs";
import ReturnHome from "../component/ReturnHome";

//Mui stuff
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";


class blog extends Component {
    state = {
        title: "",
        name: "",
        date: "",
        content: "",
    };
    
    componentDidMount() {
        const blogId = this.props.match.params.blogId;
        axios
            .get(`/blogs/${blogId}`)
            .then((doc) => {
                this.setState({
                    title: doc.data.title,
                    name: doc.data.name,
                    date: doc.data.date,
                    content: doc.data.content,
                });
                console.log(doc);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    
    handleClick = () => {
        console.log("Delete this post!");
        const blogId = this.props.match.params.blogId;
        axios
            .delete(`/blogs/${blogId}`)
            .then((doc) => {
                console.log(doc.data);
            })
            .catch((err) => {
                console.log(err);
            });
        window.location.href = "/";
    };

    render() {
        return(
            <Fragment>
                <AppBar style={{ padding: "10px" }}>
                    <ToolBar>
                        <Typography variant="h4">Yoshiki's Blog</Typography>
                        <ReturnHome />
                    </ToolBar>
                </AppBar>
            <Card
                style={{
                    margin: "50px auto",
                    padding: "75px 50px",
                    maxWidth: "1000px",
                    marginTop: "100px"
                }}
            >
                <Grid
                    container
                    direction="column"
                    justify="center"
                    spacing={1}
                >
                    <Grid item>
                        <Typography variant="h2">{this.state.title}</Typography>
                    </Grid>
                    <Grid item style={{ paddingTop:"10px" }}>
                        <Typography variant="h5">{this.state.name}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1">
                            {dayjs(this.state.date).format("dddd, MMMM D, YYYY @ h:mma")}
                        </Typography>
                    </Grid>
                    <Grid item style={{ paddingTop:"10px" }}>
                        <Typography variant="h6">{this.state.content}</Typography>
                    </Grid>
                    <Grid item style={{ paddingTop:"50px" }}>
                        <Button onClick={this.handleClick}>Delete</Button>
                    </Grid>
                </Grid>
            </Card>
            </Fragment>
        );
    }
}

export default blog;