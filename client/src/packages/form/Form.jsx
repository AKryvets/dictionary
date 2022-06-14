import React, { memo, useEffect, useMemo } from 'react';

import { Formik } from 'formik';

import { nanoid } from '@reduxjs/toolkit';

import { FormWrapper } from './styled';

export const Form = memo(
  ({
    validationSchema,
    initialValues,
    onSubmit,
    children,
    onChange,
    conditionField,
    isLoading,
    ...rest
  }) => (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
      {...rest}
    >
      {({
        isSubmitting,
        values,
        handleChange,
        errors,
        touched,
        validateForm,
        setValues,
      }) => {
        const formattedChildren = children.reduce((accum, child) => {
          if (child?.length) return [...accum, ...child];

          return [...accum, child];
        }, []);

        const fields = useMemo(
          () =>
            formattedChildren.filter(
              (child) =>
                child?.props?.name || child?.props?.component === 'field'
            ),
          [children]
        );

        const buttons = useMemo(
          () =>
            formattedChildren.filter(
              (child) =>
                child?.props?.type === 'submit' ||
                child?.props?.component === 'button'
            ),
          [children]
        );

        const onChangeHandler = (e) => {
          handleChange(e);

          if (onChange) onChange(e.target.name, e.target.value, e);
        };

        useEffect(() => {
          validateForm(values);
          setValues({
            ...initialValues,
            ...values,
          });
        }, [validationSchema]);

        return (
          <FormWrapper>
            {fields.map((child) =>
              React.cloneElement(child, {
                ...child.props,
                value: values[child.props.name] || '',
                onChange: onChangeHandler,
                key: child.props.name,
                disabled: child.props.disabled ?? isLoading ?? isSubmitting,
                error:
                  touched[child.props.name] &&
                  Boolean(errors[child.props.name]),
                helperText:
                  touched[child.props.name] && errors[child.props.name],
                [conditionField]: conditionField
                  ? values[conditionField]
                  : null,
              })
            )}
            {buttons.map((child) =>
              React.cloneElement(child, {
                ...child.props,
                key: nanoid(10),
                disabled: isLoading ?? isSubmitting,
              })
            )}
          </FormWrapper>
        );
      }}
    </Formik>
  )
);
