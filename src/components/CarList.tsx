import React from 'react';
import { Link } from 'react-router-dom';

const CarList: React.FC = () => {
    const cars = [
        { id: 1, make: 'Toyota', model: 'Corolla', year: 2020 },
        { id: 2, make: 'Honda', model: 'Civic', year: 2019 },
    ];

    return (
        <div>
            <h2>Car Inventory</h2>
            <ul>
                {cars.map(car => (
                    <li key={car.id}>
                        <Link to={`/car/${car.id}`}>
                            {car.make} {car.model} ({car.year})
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CarList;
