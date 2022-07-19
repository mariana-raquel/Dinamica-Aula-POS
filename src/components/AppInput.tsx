import React from 'react';
import TextField from '@mui/material/TextField';

export const AppInput = (props: any) => {
    return (
        <div>
            <TextField placeholder={props.placeholder}/>
        </div>
    );
}