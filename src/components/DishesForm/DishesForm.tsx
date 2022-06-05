import { Form, Field } from "react-final-form";
import { FormApi } from "final-form";

import FormItem from "../FormItem/FormItem";
import PizzaFields from "../PizzaFields/PizzaFields";
import SandwichFields from "../SandwichFields/SandwichFields";
import SoupFields from "../SoupFields/SoupFields";
import TimeDuration from "../TimeDuration/TimeDuration";

import * as S from "./styles";
import { fadeInUp } from "../../utils/constants";
import { required } from "../../utils/validators";
import { Dish, DishType } from "../../types/types";
import { formApi } from "../../services/formAPI";

interface ConditionProps {
  when: string;
  is: string;
  children: React.ReactNode;
}

const DishesForm = () => {
  const onSubmit = async (
    values: Dish,
    form: FormApi<Dish, Partial<Record<string, any>>>
  ) => {
    try {
      await formApi.postDish(values);
      form.restart();
    } catch (err: any) {
      return err;
    }
  };

  const Condition = ({ when, is, children }: ConditionProps) => (
    <Field name={when}>
      {({ input: { value } }) => (value === is ? children : null)}
    </Field>
  );

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <S.Form onSubmit={handleSubmit} autoComplete="off">
          <S.BrownDishIcon />
          <S.Title>Create a dish</S.Title>

          <FormItem name="name" label="Name" className={fadeInUp}>
            <Field name="name" validate={required}>
              {(props) => (
                <S.Input
                  id="name"
                  required
                  className={fadeInUp}
                  {...props.input}
                />
              )}
            </Field>
          </FormItem>

          <S.FormItemsContainer>
            <FormItem
              name="preparation_time"
              label="Preparation time"
              className={fadeInUp}
            >
              <Field name="preparation_time" validate={required}>
                {({ input }) => <TimeDuration {...input} />}
              </Field>
            </FormItem>

            <FormItem name="type" label="Type" className={fadeInUp}>
              <Field name="type" validate={required}>
                {(props) => (
                  <S.Select
                    id="type"
                    required
                    className={fadeInUp}
                    {...props.input}
                  >
                    <option hidden disabled value=""></option>
                    <option value={DishType.pizza}>{DishType.pizza}</option>
                    <option value={DishType.soup}>{DishType.soup}</option>
                    <option value={DishType.sandwich}>
                      {DishType.sandwich}
                    </option>
                  </S.Select>
                )}
              </Field>
            </FormItem>
          </S.FormItemsContainer>

          <Condition when="type" is={DishType.pizza}>
            <PizzaFields />
          </Condition>
          <Condition when="type" is={DishType.soup}>
            <SoupFields />
          </Condition>
          <Condition when="type" is={DishType.sandwich}>
            <SandwichFields />
          </Condition>

          <S.SubmitButton type="submit">Submit</S.SubmitButton>
        </S.Form>
      )}
    ></Form>
  );
};

export default DishesForm;
