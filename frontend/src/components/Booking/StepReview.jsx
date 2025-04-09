import { Box, Typography, Divider } from '@mui/material';

const StepReview = ({ form }) => (
    <Box mt={2}>
        <Divider sx={{ mb: 2 }} />
        <Typography><strong>First Name:</strong> {form.firstName}</Typography>
        <Typography><strong>Last Name:</strong> {form.lastName}</Typography>
        <Typography><strong>Wheels:</strong> {form.wheels}</Typography>
        <Typography><strong>Vehicle Type:</strong> {form.typeName}</Typography>
        <Typography><strong>Vehicle Model:</strong> {form.vehicleModel}</Typography>
        <Typography><strong>Start Date:</strong> {form.dateRange[0]?.toDateString()}</Typography>
        <Typography><strong>End Date:</strong> {form.dateRange[1]?.toDateString()}</Typography>
        <Divider sx={{ mt: 2 }} />
    </Box>
);

export default StepReview;
