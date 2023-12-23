import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const AddCar: React.FC = () => {
    const [car, setCar] = useState({ make: '', model: '', year: '' });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCar({ ...car, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(car); 
    };

    return (
        <div>
            <h3>Add a New Car</h3>
            <form onSubmit={handleSubmit}>
                <TextField 
                    label="Make" 
                    variant="outlined" 
                    name="make"
                    value={car.make} 
                    onChange={handleChange} 
                />
                <TextField 
                    label="Model" 
                    variant="outlined" 
                    name="model"
                    value={car.model} 
                    onChange={handleChange} 
                />
                <TextField 
                    label="Year" 
                    variant="outlined" 
                    name="year"
                    value={car.year} 
                    onChange={handleChange} 
                />
                <Button type="submit" variant="contained" color="primary">
                    Add Car
                </Button>
            </form>
        </div>
    );
};

export default AddCar;
