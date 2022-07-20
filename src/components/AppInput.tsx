import React from 'react';
import {TextField} from '@mui/material';

export const AppInput = (props: any) => {
    return (
            <TextField placeholder={props.placeholder}/>
    );
}