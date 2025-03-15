import React from 'react';
import { Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function MUIbutton() {
    return (
        <div>
            <div style={{ marginBottom: '50px' }}>
                <Button variant='text'>Giriş Yap</Button>
                <Button variant='contained'>Giriş Yap</Button>
                <Button variant='outlined'>Giriş Yap</Button>
            </div>

            <div style={{ marginBottom: '50px' }}>
                <Button variant='text' color='primary'>Giriş Yap</Button>
                <Button variant='contained' color='secondary'>Giriş Yap</Button>
                <Button variant='outlined' color='error'>Giriş Yap</Button>
            </div>

            <div style={{ marginBottom: '50px' }}>
                <Button variant='text' disabled>Giriş Yap</Button>
                <Button variant='contained' disabled>Giriş Yap</Button>
                <Button variant='outlined' disabled>Giriş Yap</Button>
            </div>

            <div style={{ marginBottom: '50px' }}>
                <Button variant='text' size='small'>Giriş Yap</Button>
                <Button variant='contained' size='medium'>Giriş Yap</Button>
                <Button variant='outlined' size='large'>Giriş Yap</Button>
            </div>

            <div style={{ marginBottom: '50px' }}>
                <Button variant='text' size='small' fullWidth>Giriş Yap</Button>
                <Button variant='contained' size='medium' fullWidth>Giriş Yap</Button>
                <Button variant='outlined' size='large' fullWidth>Giriş Yap</Button>
            </div>

            <div style={{ marginBottom: '50px' }}>
                <Button variant='text' color='primary' startIcon={<AddCircleIcon />} >Giriş Yap</Button>
                <Button variant='contained' color='secondary' endIcon={<AddCircleIcon />}>Giriş Yap</Button>
                <Button variant='outlined' color='error'>Giriş Yap</Button>
            </div>
        </div>
    )
}

export default MUIbutton
