import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const StepWheels = ({ form, setForm }) => (
    <FormControl component="fieldset">
        <FormLabel component="legend">Wheels</FormLabel>
        <RadioGroup value={form.wheels} onChange={e => setForm({ ...form, wheels: e.target.value })}>
            <FormControlLabel value="2" control={<Radio />} label="2 Wheels" />
            <FormControlLabel value="4" control={<Radio />} label="4 Wheels" />
        </RadioGroup>
    </FormControl>
);

export default StepWheels;
