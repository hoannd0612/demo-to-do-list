import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Grid, Container } from '@material-ui/core';

class TodoInput extends Component {
    render() {
        return (
            <Container>
                <Grid container direction="column" alignItems="center" justify="center">
                    <TextField id="filled-basic" variant="outlined" placeholder="add item" style={{ width: 500 }} ></TextField>
                    <Button type="submit" variant="contained" color="primary" style={{ marginTop: 10, width: 300 }}>
                        Add item
                 </Button>
                </Grid>
            </Container>
        )
    }
}
export default TodoInput;
