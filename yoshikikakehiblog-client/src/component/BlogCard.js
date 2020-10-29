import React, { Component } from 'react';

//Mui stuff
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

class BlogCard extends Component {
    handleClick = () => {
        console.log("Card Clicked");
        window.location.href = `/blog/${this.props.blog._id}`;
    }

    render() {
        return(
            <Card
                style={{
                    width: "750px",
                    margin: "20px auto",
                    minHeight: 150,
                }}
            >
                <CardActionArea onClick={this.handleClick}>
                    <Grid container
                        direction="column"
                        spacing={1}
                    >
                        <Grid
                            item
                            style={{
                                padding: "75px",
                                background: "linear-gradient(90deg, #c2e9fb, #81a4fd)",
                                minHeight: 150,
                                color: "#FFFFFF",
                            }}
                        >
                            <Typography variant="h2">{this.props.blog.title}</Typography>
                        </Grid>
                        <Grid
                            item
                            style={{
                                paddingLeft: "30px",
                                paddingTop: "10px",
                                color: "#3D0D95",
                            }}
                        >
                            <Typography variant="h5">{this.props.blog.name}</Typography>
                        </Grid>
                        <Grid
                            item
                            style={{
                                paddingLeft: "30px",
                                paddingBottom: "10px",
                                color: "#3D0D95",
                            }}
                        >
                            <Typography variant="h6">{this.props.blog.date}</Typography>
                        </Grid>
                    </Grid>
                </CardActionArea>
            </Card>
        );
    }
}

export default BlogCard;