import React from 'React';

export default function weatherForm() {
  return (
    <Form>
    <FormGroup>
      <Label for="location">Enter Your Location</Label>
      <Input type="text" name="location" id="location" placeholder="Location" />
    </FormGroup>
    <Button color="info" type="submit">Submit</Button>
    </Form>
  );
}
