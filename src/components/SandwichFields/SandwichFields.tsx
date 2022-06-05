import { useEffect } from "react";
import { Field, useForm } from "react-final-form";

import FormItem from "../FormItem/FormItem";

import * as S from "../DishesForm/styles";
import { fadeInUpFast } from "../../utils/constants";
import { required } from "../../utils/validators";
import { toInt } from "../../utils/helpers";

const SandwichFields = () => {
  const form = useForm();
  useEffect(() => {
    return () => {
      form.change("slices_of_bread", undefined);
    };
  }, [form]);
  return (
    <>
      <FormItem
        name="slices_of_bread"
        label="Slices of bread"
        className={fadeInUpFast}
      >
        <Field name="slices_of_bread" validate={required} parse={toInt}>
          {(props) => (
            <S.Input
              id="slices_of_bread"
              type="number"
              step="1"
              min="0"
              required
              className={fadeInUpFast}
              {...props.input}
            />
          )}
        </Field>
      </FormItem>
    </>
  );
};

export default SandwichFields;
