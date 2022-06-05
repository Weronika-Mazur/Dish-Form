import ErrorField from "../ErrorField/ErrorField";
import * as S from "./styles";

interface FormItemProps {
  children: React.ReactElement;
  name: string;
  label: string;
  className?: string;
}

const FormItem = ({ name, label, className, children }: FormItemProps) => {
  return (
    <S.Item>
      <S.Label htmlFor={name} className={className}>
        {label}
      </S.Label>
      {children}
      <ErrorField name={name} />
    </S.Item>
  );
};

export default FormItem;
