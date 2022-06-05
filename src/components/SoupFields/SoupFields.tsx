import { useEffect } from "react";
import { Field, useForm } from "react-final-form";

import FormItem from "../FormItem/FormItem";

import * as S from "./styles";
import { fadeInUpFast } from "../../utils/constants";
import { required } from "../../utils/validators";
import { toInt } from "../../utils/helpers";

const SoupFields = () => {
  const form = useForm();
  useEffect(() => {
    return () => {
      form.change("spiciness_scale", undefined);
    };
  }, [form]);
  return (
    <>
      <FormItem
        name="spiciness_scale"
        label="Spiciness scale"
        className={fadeInUpFast}
      >
        <Field name="spiciness_scale" validate={required} parse={toInt}>
          {(props) => (
            <S.Range
              id="spiciness_scale"
              type="range"
              step="1"
              min="1"
              max="10"
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

export default SoupFields;
