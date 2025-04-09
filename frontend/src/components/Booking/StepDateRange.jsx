import { Box, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const StepDateRange = ({ form, setForm, normalizeDate }) => (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box display="flex" gap={2} mt={2}>
            <DatePicker
                label="Start Date"
                value={form.dateRange[0]}
                onChange={newValue => setForm({ ...form, dateRange: [normalizeDate(newValue), form.dateRange[1]] })}
                renderInput={(params) => <TextField {...params} fullWidth />}
            />
            <DatePicker
                label="End Date"
                value={form.dateRange[1]}
                onChange={newValue => setForm({ ...form, dateRange: [form.dateRange[0], normalizeDate(newValue)] })}
                minDate={form.dateRange[0]}
                renderInput={(params) => <TextField {...params} fullWidth />}
            />
        </Box>
    </LocalizationProvider>
);

export default StepDateRange;
