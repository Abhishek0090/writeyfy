  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      phone: "",
      residence: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email"),
      password: Yup.string().min(8),
      confirmPassword: Yup.string()
        .min(8)
        .oneOf([Yup.ref("password")], "Passwords do not match"),
      firstName: Yup.string(),
      lastName: Yup.string(),
    }),
    onSubmit: () => {
      if (currentStep === steps.length - 1) {
        console.log("last step");
      } else {
        setActiveStep((prevStep) => prevStep + 1);
      }
    },
  });