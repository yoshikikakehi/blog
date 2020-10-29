import React, { Fragment } from 'react';
import {Component} from 'react';
import BlogCard from "../component/BlogCard";
import NewPostDialog from "../component/NewPostDialog";
import axios from "axios";

//Mui Stuff
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

class home extends Component {
    state = {
        blogs: [],
    };
    componentDidMount() {
        axios
          .get("/blogs")
          .then((documents) => {
            this.setState({
              blogs: documents.data,
            });
            console.log(this.state.blogs);
          })
          .catch((err) => console.log(err));
    }    
    
    render() {
        return (
            <Fragment>
                <AppBar style={{ padding: "10px" }}>
                    <ToolBar>
                        <Typography variant="h4">Yoshiki's Blog</Typography>
                        <NewPostDialog />
                    </ToolBar>
                </AppBar>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    spacing={5}
                    style={{ paddingTop: "125px" }}
                >
                    {this.state.blogs.map((blogObject) => (
                        <Grid item>
                            <BlogCard blog={blogObject}/>
                        </Grid>
                    ))};
                </Grid>
            </Fragment>
        );
    }
}

export default home;