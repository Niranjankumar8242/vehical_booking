import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const StepVehicleModel = ({ form, setForm, vehicles }) => (
    <FormControl component="fieldset">
        <FormLabel component="legend">Vehicle Models</FormLabel>
        <RadioGroup
            value={form.vehicleId}
            onChange={e => {
                const selected = vehicles.find(v => v.id.toString() === e.target.value);
                setForm({ ...form, vehicleId: e.target.value, vehicleModel: selected?.model || '' });
            }}
        >
            {vehicles.map(vehicle => (
                <FormControlLabel key={vehicle.id} value={vehicle.id.toString()} control={<Radio />} label={vehicle.model} />
            ))}
        </RadioGroup>
    </FormControl>
);

export default StepVehicleModel;
