import React from 'react';
import Button from '@mui/material/Button';

export const AppButton = (props: any) => {
    return (
        <Button
            sx = {{ margin : '10px'}}
            {...props}
            >
                {props.value}
        </Button>
    );
};