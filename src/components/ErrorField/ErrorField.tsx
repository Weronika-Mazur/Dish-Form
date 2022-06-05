import { useField } from "react-final-form";
import * as S from "./styles";

interface ErrorProps {
  name: string;
}

const ErrorField = ({ name }: ErrorProps) => {
  const {
    meta: { touched, error, submitError },
  } = useField(name, {
    subscription: { touched: true, error: true, submitError: true },
  });
  return touched && (error || submitError) ? (
    <S.ErrorText>{error || submitError}</S.ErrorText>
  ) : null;
};

export default ErrorField;
