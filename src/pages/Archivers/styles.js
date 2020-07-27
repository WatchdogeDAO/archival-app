import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export const ArchiversContainer = styled.div``;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${props => props.theme.spacing(3)}px auto;
`;

export const MemberArea = styled.div`
  margin-top: ${props => props.theme.spacing(3)}px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 960px) {
    width: 75%;
  }
  @media (min-width: 1280px) {
    width: 50%;
  }
`;

export const FormTitle = styled(Typography).attrs({variant: 'h5'})`
  margin-bottom: ${props => props.theme.spacing(1)}px;
`;
export const FormDescription = styled(Typography)`
  margin-bottom: ${props => props.theme.spacing(1)}px;
`;

export const LoadingMembers = styled.div`
  padding: ${props => props.theme.spacing(4)}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormField = styled(TextField)`
  margin-bottom: ${props => props.theme.spacing(1)}px;
  width: 100%;
`;

export const FormSubmit = styled(Button)``;

export const LoadingText = styled(Typography)`
  color: ${props => props.theme.palette.primary.light};
`;

// Member Title Styles

export const TableTitle = styled(Typography)`
  margin-bottom: ${props => props.theme.spacing(1)}px;
`;

export const TableContainer = styled.div``;
