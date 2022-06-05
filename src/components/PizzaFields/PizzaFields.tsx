import { useEffect } from "react";
import { Field, useForm } from "react-final-form";

import FormItem from "../FormItem/FormItem";

import * as S from "../DishesForm/styles";
import { fadeInUpFast } from "../../utils/constants";
import { required } from "../../utils/validators";
import { toFloat, toInt } from "../../utils/helpers";

const PizzaFields = () => {
  const form = useForm();
  useEffect(() => {
    return () => {
      form.change("no_of_slices", undefined);
      form.change("diameter", undefined);
    };
  }, [form]);
  return (
    <>
      <FormItem
        name="no_of_slices"
        label="Number of slices"
        className={fadeInUpFast}
      >
        <Field name="no_of_slices" validate={required} parse={toInt}>
          {(props) => (
            <S.Input
              id="no_of_slices"
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
      <FormItem name="diameter" label="Diameter" className={fadeInUpFast}>
        <Field name="diameter" validate={required} parse={toFloat}>
          {(props) => (
            <S.Input
              id="diameter"
              type="number"
              step="0.0001"
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

export default PizzaFields;
