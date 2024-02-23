import Option from '@mui/joy/Option';
import Select from '@mui/joy/Select';
import Stack from '@mui/joy/Stack';

export default function SelectForm() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());
        alert(JSON.stringify(formJson));
      }}
    >
      <Stack spacing={2} alignItems="flex-start">
        <Select
          placeholder="Select a pet"
          name="foo"
          required
          sx={{ minWidth: 200 }}
        >
          <Option value="dog">Dog</Option>
          <Option value="cat">Cat</Option>
          <Option value="fish">Fish</Option>
          <Option value="bird">Bird</Option>
        </Select>
      </Stack>
    </form>
  );
}