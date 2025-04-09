import { TextField, Box } from '@mui/material';

const StepName = ({ form, setForm }) => (
    <Box display="flex" flexDirection="column" gap={2}>
        <TextField label="First Name" value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} fullWidth />
        <TextField label="Last Name" value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} fullWidth />
    </Box>
);

export default StepName;
