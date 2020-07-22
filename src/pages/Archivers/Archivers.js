import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    width: 50%;
  }
`;

const Archivers = () => {
  return (
    <div>
      <p>Want to add an approved archiver?</p>
      <p>
        We need their Twitter ID, you can get it from{" "}
        <a href="http://gettwitterid.com/" target="_blank" rel="noopener noreferrer">
          here
        </a>
      </p>
      <Form>
        <TextField label="Twitter Id" rows={4} placeholder="994080172" variant="outlined" />
        <TextField
          label="Message"
          multiline
          rows={4}
          placeholder="I should be accepted as an archiver because..."
          variant="outlined"
        />
        <Button variant="contained" color="primary">
          Request Approval
        </Button>
      </Form>
    </div>
  );
};

export default Archivers;
