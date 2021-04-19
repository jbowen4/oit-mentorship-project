import Link from "next/link";
import Layout from "../components/Layout";
import { Formik, Form } from "formik";
import { TextInputWrapped } from "@my-org-name/ui-components";
import React, { useState } from "react";
import { Button } from "@material-ui/core";

const IndexPage = () => {
  const initaFormValues = {
    name: "",
    password: "",
  };

  const [externalFormState, setExternalFormState] = useState(initaFormValues);

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <h1>Outside Formik ( after onSubmit ) </h1>
      <h2>{JSON.stringify(externalFormState, null, 2)}</h2>
      <Formik
        initialValues={initaFormValues}
        onSubmit={(formikValues) => {
          //before you submit flip each string backward
          setExternalFormState(formikValues);
          //values stick around - reset it
        }}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <Form>
            <TextInputWrapped
              name="name"
              value={values.name}
              errors={Boolean(errors.name)}
              onChange={handleChange}
            />
            <TextInputWrapped
              name="password"
              value={values.password}
              errors={Boolean(errors.password)}
              onChange={handleChange}
            />
            {/* For this button we want to do 3 things
            1 disable it if validation is not correct ( so create validation and disable this button until the forms correct)
            2 delay the response and show a spinner while it is loading
            3 change up this form so that we can just press enter to submit the form, and not manually handleSubmit() */}
            <Button onClick={() => handleSubmit()}>Submit that!</Button>
            <h3>Inside the scope of Formik</h3>
            <h4>{JSON.stringify(values, null, 2)}</h4>
          </Form>
        )}
      </Formik>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
