import { createContext } from "react";

export const FormContext = createContext();

export const FormContextProvider = ({ children }) => {
  const formSubmit = (e) => {
    e.preventDefault();

    console.log("hi");
    // const newFormData = {
    //   ...data,
    // };

    // let profile_pic;

    // // if there is an file
    // if (profileFile) {
    //   const data = new FormData();
    //   const fileName = Date.now() + profileFile.name;
    //   data.append("name", fileName);
    //   data.append("file", profileFile);
    //   newFormData.profile_pic = fileName;

    //   console.log(profile_pic);

    //   try {
    //     const response = await axios.post("http://localhost:5000/upload", data);
    //     console.log(response.data);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }

    // try {
    //   const res = await register(newFormData);
    //   console.log(res.data);

    //   saved();
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <FormContext.Provider value={formSubmit}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
