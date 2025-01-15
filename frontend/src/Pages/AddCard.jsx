import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { axiosPrivate } from '@/services/apiClient';
import { useNavigate } from 'react-router-dom';
import './AddCard.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '450px',
  },
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const AddContainer = styled(Stack)(({ theme }) => ({
  height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
  minHeight: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage:
        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));

function AddCard() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  return (
    <>
      <CssBaseline />
      <AddContainer direction="column" justifyContent="center">
        <StyledCard variant="outlined">
          <Typography
            component="h1"
            variant="h4"
            sx={{
              width: '100%',
              fontSize: 'clamp(2rem, 10vw, 2.15rem)',
              fontWeight: 'bold',
              textAlign: 'center',
              padding: '20px',
            }}
          >
            Add a Plant
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(async (data) => {
              try {
                const response = await axiosPrivate.post('/user/plants', data);
                navigate('/dashboard');
                console.log(response);
              } catch (error) {
                console.error(error);
              }
            })}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 2,
            }}
          >
            <TextField
              id="plantName"
              label="Name"
              placeholder="Enter plant name"
              variant="outlined"
              fullWidth
              {...register('plantName')}
            />
            <TextField
              id="location"
              label="Location"
              placeholder="Enter location in your house"
              variant="outlined"
              fullWidth
              {...register('location')}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#006400',
                '&:hover': { backgroundColor: '#004d00' },
              }}
            >
              Add
            </Button>
          </Box>
        </StyledCard>
      </AddContainer>
    </>
  );
}

export default AddCard;