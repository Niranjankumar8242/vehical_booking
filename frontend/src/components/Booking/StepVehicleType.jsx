import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const StepVehicleType = ({ form, setForm, types }) => (
    <FormControl component="fieldset">
        <FormLabel component="legend">Vehicle Types</FormLabel>
        <RadioGroup
            value={form.typeId}
            onChange={e => {
                const selected = types.find(t => t.id.toString() === e.target.value);
                setForm({ ...form, typeId: e.target.value, typeName: selected?.name || '' });
            }}
        >
            {types.map(type => (
                <FormControlLabel key={type.id} value={type.id.toString()} control={<Radio />} label={type.name} />
            ))}
        </RadioGroup>
    </FormControl>
);

export default StepVehicleType;
