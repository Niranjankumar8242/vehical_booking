import React, { useState, useEffect } from 'react';
import { Typography, Paper, Alert, Box, Button } from '@mui/material';
import StepName from '../components/Booking/StepName';
import StepWheels from '../components/Booking/StepWheels';
import StepVehicleType from '../components/Booking/StepVehicleType';
import StepVehicleModel from '../components/Booking/StepVehicleModel';
import StepDateRange from '../components/Booking/StepDateRange';
import StepReview from '../components/Booking/StepReview';
import api from '../api';

const questions = [
    'What is your name?',
    'Number of wheels?',
    'Type of vehicle?',
    'Specific model?',
    'Select date range for booking',
    'Review your booking details'
];

const VehicleBookingPage = () => {
    const [step, setStep] = useState(0);
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        wheels: '',
        typeId: '',
        typeName: '',
        vehicleId: '',
        vehicleModel: '',
        dateRange: [null, null],
    });
    const [error, setError] = useState('');
    const [types, setTypes] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        const fetchTypes = async () => {
            if (!form.wheels) return;
            try {
                const res = await api.get(`/vehicle-types?wheels=${form.wheels}`);
                setTypes(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchTypes();
    }, [form.wheels]);

    useEffect(() => {
        const fetchVehicles = async () => {
            if (!form.typeId) return;
            try {
                const res = await api.get(`/vehicles?typeId=${form.typeId}`);
                setVehicles(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchVehicles();
    }, [form.typeId]);

    const normalizeDate = (date) => {
        if (!date) return null;
        const d = new Date(date);
        d.setHours(0, 0, 0, 0);
        return d;
    };

    const formatDateOnly = (date) => {
        const d = new Date(date);
        return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    };

    const handleNext = () => {
        switch (step) {
            case 0:
                if (!form.firstName || !form.lastName) return setError('Please enter your full name');
                break;
            case 1:
                if (!form.wheels) return setError('Please select number of wheels');
                break;
            case 2:
                if (!form.typeId) return setError('Please select a vehicle type');
                break;
            case 3:
                if (!form.vehicleId) return setError('Please select a vehicle model');
                break;
            case 4:
                if (!form.dateRange[0] || !form.dateRange[1]) return setError('Please select a valid date range');
                if (form.dateRange[1] < form.dateRange[0]) return setError('End date cannot be before start date');
                break;
            default:
                break;
        }
        setError('');
        setStep(step + 1);
    };

    const handleBack = () => {
        setMessage('');
        if (step > 0) {
            setError('');
            setStep(step - 1);
        }
    };

    const handleBooking = async () => {
        try {
            const res = await api.post('/book', {
                firstName: form.firstName,
                lastName: form.lastName,
                vehicleId: form.vehicleId,
                startDate: formatDateOnly(form.dateRange[0]),
                endDate: formatDateOnly(form.dateRange[1])
            });
            if (res.status === 201) {
                setMessage(res.data.message);
            } else {
                setError(res.data.message);
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Booking failed');
        }
    };

    const resetBooking = () => {
        setForm({
            firstName: '',
            lastName: '',
            wheels: '',
            typeId: '',
            typeName: '',
            vehicleId: '',
            vehicleModel: '',
            dateRange: [null, null],
        });
        setStep(0);
        setError('');
        setMessage(null);
        setTypes([]);
        setVehicles([]);
    };

    const stepComponents = [
        <StepName form={form} setForm={setForm} />,
        <StepWheels form={form} setForm={setForm} />,
        <StepVehicleType form={form} setForm={setForm} types={types} />,
        <StepVehicleModel form={form} setForm={setForm} vehicles={vehicles} />,
        <StepDateRange form={form} setForm={setForm} normalizeDate={normalizeDate} />,
        <StepReview form={form} />,
    ];

    return (
        <Box className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200 px-4">
            <Paper elevation={6} className="p-10 max-w-xl w-full rounded-3xl">
                <Typography variant="h4" align="center" gutterBottom>Vehicle Booking</Typography>
                <Typography variant="h6" align="center" gutterBottom>{questions[step]}</Typography>

                {error && <Alert severity="error" className="mb-4">{error}</Alert>}
                {message && <Alert severity="success" className="mb-4">{message}</Alert>}

                {stepComponents[step]}

                <Box display="flex" gap={2} mt={4}>
                    {!message ? (
                        <>
                            {step > 0 && (
                                <Button variant="contained" color="error" fullWidth onClick={handleBack}>
                                    Back
                                </Button>
                            )}
                            {step < 5 ? (
                                <Button variant="contained" color="primary" fullWidth onClick={handleNext}>
                                    Next
                                </Button>
                            ) : (
                                <Button variant="contained" color="success" fullWidth onClick={handleBooking}>
                                    Confirm Booking
                                </Button>
                            )}
                        </>
                    ) : (
                        <Button variant="contained" color="primary" fullWidth onClick={resetBooking}>
                            Make Another Booking
                        </Button>
                    )}
                </Box>
            </Paper>
        </Box>
    );
};

export default VehicleBookingPage;
