import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';

class NewPostDialog extends Component {
    state={
        open: false,
        title: "",
        name: "",
        content: "",
    };

    handleClickOpen = () => {
        this.setState({
            open: true,
        });
    };
    
    handleClose = () => {
        this.setState({
            open: false,
        });
    };

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        });
        console.log(this.state[event.target.id]);
    };

    handleSubmit = () => {
        console.log(
            `the inputted values are title: ${this.state.title}, name: ${this.state.name}, and content: ${this.state.content}.`
        );
        const newPost = {
            title: this.state.title,
            name: this.state.name,
            content: this.state.content,
        };
        axios
            .post("/blogs/postBlog", newPost)
            .then((doc) => {
                console.log(doc);
                setTimeout(() => this.handleClose(), 1000);
            })
            .catch((err) => {
                this.setState({
                    errors: err.response.data,
                });
            });
        window.location.href = "/";
    }

    render() {
        return (
            <div>
                <Button
                    variant="contained"
                    onClick={this.handleClickOpen}
                    style={{
                        marginLeft:"50px",
                        backgroundColor:"#FFFFFF",
                    }}
                >
                    New Post
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">
                        Write a New Blog Post
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            You can submit new blog posts here!
                            Just add your name and the title and context of the blog post
                        </DialogContentText>
                        <TextField
                            id="title"
                            label="Title"
                            type="text"
                            fullWidth
                            onChange={this.handleChange}
                        />
                        <TextField
                            id="name"
                            label="Name"
                            type="text"
                            fullWidth
                            onChange={this.handleChange}
                        />
                        <TextField
                            id="content"
                            label="Content"
                            type="text"
                            fullWidth
                            multiline
                            rows={10}
                            onChange={this.handleChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose}>Cancel</Button>
                        <Button onClick={this.handleSubmit}>Submit</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default NewPostDialog
