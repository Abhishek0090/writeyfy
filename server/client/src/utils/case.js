
const formContent = (step) => {
    switch (step) {
      case 1:
        return <General formik={formik} />;
      case 2:
        return <Credentials />;
      default:
        return <div>404: Not Found</div>;
    }
  };