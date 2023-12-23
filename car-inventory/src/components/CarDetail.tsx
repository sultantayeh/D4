// src/components/CarDetail.tsx

import React from 'react';

interface CarDetailProps {
    carId: number;
}

const CarDetail: React.FC<CarDetailProps> = ({ carId }) => {

    const car = { id: carId, make: 'Toyota', model: 'Corolla', year: 2020 };

    return (
        <div>
            <h3>Car Details</h3>
            <p>Make: {car.make}</p>
            <p>Model: {car.model}</p>
            <p>Year: {car.year}</p>
        </div>
    );
};

export default CarDetail;
