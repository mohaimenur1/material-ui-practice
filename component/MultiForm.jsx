"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import * as yup from "yup";

import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
  useFieldArray,
} from "react-hook-form";

import { TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";

// function getSteps() {
//   return [
//     "Basic information",
//     "Contact Information",
//     "Personal Information",
//     "Payment",
//   ];
// }
// const BasicForm = () => {
//   const {
//     control,
//     formState: { errors },
//   } = useFormContext();
//   console.log(errors);
//   return (
//     <Box>
//       {fields.map(item, (index) => {
//         return (
//           <>
//             <Controller
//               control={control}
//               // name="firstName"
//               name={`test.${index}.firstName`}
//               rules={{ required: "this field is required." }}
//               render={({ field }) => (
//                 <TextField
//                   id="first-name"
//                   label="First Name"
//                   variant="outlined"
//                   placeholder="Enter Your First Name"
//                   fullWidth
//                   margin="normal"
//                   {...field}
//                   error={Boolean(errors?.firstName)}
//                   helperText={errors.firstName?.message}
//                 />
//               )}
//             />
//             <button type="button" onClick={() => remove(index)}>
//               Delete
//             </button>
//           </>
//         );
//       })}
//     </Box>
//     // <>
//     //   <Controller
//     //     control={control}
//     //     name="firstName"
//     //     rules={{ required: "this field is required." }}
//     //     render={({ field }) => (
//     //       <TextField
//     //         id="first-name"
//     //         label="First Name"
//     //         variant="outlined"
//     //         placeholder="Enter Your First Name"
//     //         fullWidth
//     //         margin="normal"
//     //         {...field}
//     //         error={Boolean(errors?.firstName)}
//     //         helperText={errors.firstName?.message}
//     //       />
//     //     )}
//     //   />

//     //   <Controller
//     //     control={control}
//     //     name="lastName"
//     //     rules={{ required: "this field is required." }}
//     //     render={({ field }) => (
//     //       <TextField
//     //         id="last-name"
//     //         label="Last Name"
//     //         variant="outlined"
//     //         placeholder="Enter Your Last Name"
//     //         fullWidth
//     //         margin="normal"
//     //         {...field}
//     //         error={Boolean(errors?.lastName)}
//     //         helperText={errors.lastName?.message}
//     //       />
//     //     )}
//     //   />

//     //   <Controller
//     //     control={control}
//     //     name="nickName"
//     //     rules={{ required: "this field is required." }}
//     //     render={({ field }) => (
//     //       <TextField
//     //         id="nick-name"
//     //         label="Nick Name"
//     //         variant="outlined"
//     //         placeholder="Enter Your Nick Name"
//     //         fullWidth
//     //         margin="normal"
//     //         {...field}
//     //         error={Boolean(errors?.nickName)}
//     //         helperText={errors.nickName?.message}
//     //       />
//     //     )}
//     //   />
//     // </>
//   );
// };
// const ContactForm = () => {
//   const { control } = useFormContext();
//   return (
//     <>
//       <Controller
//         control={control}
//         name="emailAddress"
//         render={({ field }) => (
//           <TextField
//             id="email"
//             label="E-mail"
//             variant="outlined"
//             placeholder="Enter Your E-mail Address"
//             fullWidth
//             margin="normal"
//             {...field}
//           />
//         )}
//       />

//       <Controller
//         control={control}
//         name="phoneNumber"
//         render={({ field }) => (
//           <TextField
//             id="phone-number"
//             label="Phone Number"
//             variant="outlined"
//             placeholder="Enter Your Phone Number"
//             fullWidth
//             margin="normal"
//             {...field}
//           />
//         )}
//       />
//       <Controller
//         control={control}
//         name="alternatePhone"
//         render={({ field }) => (
//           <TextField
//             id="alternate-phone"
//             label="Alternate Phone"
//             variant="outlined"
//             placeholder="Enter Your Alternate Phone"
//             fullWidth
//             margin="normal"
//             {...field}
//           />
//         )}
//       />
//     </>
//   );
// };
// const PersonalForm = () => {
//   const { control } = useFormContext();
//   return (
//     <>
//       <Controller
//         control={control}
//         name="address1"
//         render={({ field }) => (
//           <TextField
//             id="address1"
//             label="Address 1"
//             variant="outlined"
//             placeholder="Enter Your Address 1"
//             fullWidth
//             margin="normal"
//             {...field}
//           />
//         )}
//       />
//       <Controller
//         control={control}
//         name="address2"
//         render={({ field }) => (
//           <TextField
//             id="address2"
//             label="Address 2"
//             variant="outlined"
//             placeholder="Enter Your Address 2"
//             fullWidth
//             margin="normal"
//             {...field}
//           />
//         )}
//       />
//       <Controller
//         control={control}
//         name="country"
//         render={({ field }) => (
//           <TextField
//             id="country"
//             label="Country"
//             variant="outlined"
//             placeholder="Enter Your Country Name"
//             fullWidth
//             margin="normal"
//             {...field}
//           />
//         )}
//       />
//     </>
//   );
// };
// const PaymentForm = () => {
//   const { control } = useFormContext();
//   return (
//     <>
//       <Controller
//         control={control}
//         name="cardNumber"
//         render={({ field }) => (
//           <TextField
//             id="cardNumber"
//             label="Card Number"
//             variant="outlined"
//             placeholder="Enter Your Card Number"
//             fullWidth
//             margin="normal"
//             {...field}
//           />
//         )}
//       />
//       <Controller
//         control={control}
//         name="cardMonth"
//         render={({ field }) => (
//           <TextField
//             id="cardMonth"
//             label="Card Month"
//             variant="outlined"
//             placeholder="Enter Your Card Month"
//             fullWidth
//             margin="normal"
//             {...field}
//           />
//         )}
//       />
//       <Controller
//         control={control}
//         name="cardYear"
//         render={({ field }) => (
//           <TextField
//             id="cardYear"
//             label="Card Year"
//             variant="outlined"
//             placeholder="Enter Your Card Year"
//             fullWidth
//             margin="normal"
//             {...field}
//           />
//         )}
//       />
//     </>
//   );
// };

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return <BasicForm />;

//     case 1:
//       return <ContactForm />;
//     case 2:
//       return <PersonalForm />;
//     case 3:
//       return <PaymentForm />;
//     default:
//       return "unknown step";
//   }
// }

// const maxSize = 1024 * 1024 * 2; // 2MB

function isValidFileType(fileName, fileType) {
  return (
    fileName &&
    validFileExtensions[fileType].indexOf(fileName.split(".").pop()) > -1
  );
}

function getAllowedExt(type) {
  return validFileExtensions[type].map((e) => `.${e}`).toString();
}

const MAX_FILE_SIZE = 102400;

const personSchema = yup.object().shape({
  test: yup.array().of(
    yup.object().shape({
      firstName: yup.string().required("Fill up this field"),
      lastName: yup.string().required("Fill up this field"),
      nickName: yup.string().required("Fill up this field"),
      emailAddress: yup.string().required("Fill up this field"),
      dob: yup.string().required("Fill up the date"),
      // fileUpload: yup
      //   .mixed()
      //   .test("fileSize", "File size is too large", (value) => {
      //     console.log("file value", value);
      //     if (!value || !value[0]) return true; // If no file is uploaded, skip the validation
      //     return value[0].size <= maxSize;
      //   })
      //   .nullable()
      //   // .test("fileFormat", "Unsupported file format", (value) => {
      //   //   if (!value || !value[0]) return true; // If no file is uploaded, skip the validation
      //   //   return supportedFormats.includes(value[0].type);
      //   // })
      //   .required("Please upload a file"),

      fileUpload: yup
        .mixed()
        .required("Required")
        .test("is-valid-type", "Not a valid image type", (value) =>
          isValidFileType(value && value.name.toLowerCase(), "image")
        )
        .test(
          "is-valid-size",
          "Max allowed size is 100KB",
          (value) => value && value.size <= MAX_FILE_SIZE
        ),
    })
  ),
});

const MultiForm = () => {
  const methods = useForm({
    defaultValues: {
      test: [
        {
          firstName: "",
          lastName: "",
          nickName: "",
          emailAddress: "",
          dob: "",
          fileUpload: null,
        },
      ],
      phoneNumber: "",
      alternatePhone: "",
      address1: "",
      address2: "",
      country: "",
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
    },
    resolver: yupResolver(personSchema),
  });

  const {
    control,
    register,
    formState: { errors },
  } = methods;

  const { fields, append, remove } = useFieldArray({ control, name: "test" });

  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();
  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };
  const isStepFalied = () => {
    return Boolean(Object.keys(methods.formState.errors).length);
  };
  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (data) => {
    console.log(data);
    if (activeStep == steps.length - 1) {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
          setActiveStep(activeStep + 1);
        });
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                optional
              </Typography>
            );
          }
          if (isStepFalied() && activeStep == index) {
            labelProps.error = true;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
              {/* {getStepContent(activeStep)} */}
              <>
                <Box>
                  {fields.map((item, index) => {
                    return (
                      <>
                        <Controller
                          name={`test.${index}.firstName`}
                          control={control}
                          render={({ field, fieldState: { error } }) => (
                            <TextField
                              {...field}
                              error={!!error}
                              label="First Name"
                              helperText={error?.message}
                              fullWidth
                              size="small"
                              placeholder="Type Here"
                            ></TextField>
                          )}
                        />
                        <Controller
                          name={`test.${index}.lastName`}
                          control={control}
                          render={({ field, fieldState: { error } }) => (
                            <TextField
                              {...field}
                              error={!!error}
                              label="Last Name"
                              helperText={error?.message}
                              fullWidth
                              size="small"
                              placeholder="Type Here"
                            ></TextField>
                          )}
                        />

                        <Controller
                          name={`test.${index}.dob`}
                          control={control}
                          render={({ field, fieldState: { error } }) => (
                            <LocalizationProvider
                              dateAdapter={AdapterDayjs}
                              adapterLocale="en-gb"
                            >
                              <DatePicker
                                {...field}
                                label={"DD/MM/YYYY"}
                                slotProps={{
                                  textField: {
                                    variant: "outlined",
                                    error: !!error,
                                    helperText: error?.message,
                                  },
                                }}
                                sx={{ color: "red" }}
                                fullWidth
                              />
                            </LocalizationProvider>
                          )}
                        />

                        <button type="button" onClick={() => remove(index)}>
                          Delete
                        </button>
                      </>
                    );
                  })}
                </Box>
                <button
                  type="button"
                  onClick={() => {
                    append({ firstName: "appendBill", lastName: "appendLuo" });
                  }}
                >
                  Add
                </button>
              </>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                >
                  skip
                </Button>
              )}
              <Button
                variant="contained"
                color="primary"
                // onClick={handleNext}
                type="submit"
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default MultiForm;

function getSteps() {
  return [
    "Basic information",
    "Contact Information",
    "Personal Information",
    "Payment",
  ];
}
const BasicForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  console.log(errors);
  return (
    <Box>
      {fields.map(item, (index) => {
        return (
          <>
            <Controller
              control={control}
              // name="firstName"
              name={`test.${index}.firstName`}
              rules={{ required: "this field is required." }}
              render={({ field }) => (
                <TextField
                  id="first-name"
                  label="First Name"
                  variant="outlined"
                  placeholder="Enter Your First Name"
                  fullWidth
                  margin="normal"
                  {...field}
                  error={Boolean(errors?.firstName)}
                  helperText={errors.firstName?.message}
                />
              )}
            />
            <Controller
              control={control}
              name={`test.${index}.lastName`}
              rules={{ required: "this field is required." }}
              render={({ field }) => (
                <TextField
                  id="last-name"
                  label="Last Name"
                  variant="outlined"
                  placeholder="Enter Your Last Name"
                  fullWidth
                  margin="normal"
                  {...field}
                  error={Boolean(errors?.lastName)}
                  helperText={errors.lastName?.message}
                />
              )}
            />
            <button type="button" onClick={() => remove(index)}>
              Delete
            </button>
          </>
        );
      })}
    </Box>
    // <>
    //   <Controller
    //     control={control}
    //     name="firstName"
    //     rules={{ required: "this field is required." }}
    //     render={({ field }) => (
    //       <TextField
    //         id="first-name"
    //         label="First Name"
    //         variant="outlined"
    //         placeholder="Enter Your First Name"
    //         fullWidth
    //         margin="normal"
    //         {...field}
    //         error={Boolean(errors?.firstName)}
    //         helperText={errors.firstName?.message}
    //       />
    //     )}
    //   />

    //   <Controller
    //     control={control}
    //     name="lastName"
    //     rules={{ required: "this field is required." }}
    //     render={({ field }) => (
    //       <TextField
    //         id="last-name"
    //         label="Last Name"
    //         variant="outlined"
    //         placeholder="Enter Your Last Name"
    //         fullWidth
    //         margin="normal"
    //         {...field}
    //         error={Boolean(errors?.lastName)}
    //         helperText={errors.lastName?.message}
    //       />
    //     )}
    //   />

    //   <Controller
    //     control={control}
    //     name="nickName"
    //     rules={{ required: "this field is required." }}
    //     render={({ field }) => (
    //       <TextField
    //         id="nick-name"
    //         label="Nick Name"
    //         variant="outlined"
    //         placeholder="Enter Your Nick Name"
    //         fullWidth
    //         margin="normal"
    //         {...field}
    //         error={Boolean(errors?.nickName)}
    //         helperText={errors.nickName?.message}
    //       />
    //     )}
    //   />
    // </>
  );
};
const ContactForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="emailAddress"
        render={({ field }) => (
          <TextField
            id="email"
            label="E-mail"
            variant="outlined"
            placeholder="Enter Your E-mail Address"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="phoneNumber"
        render={({ field }) => (
          <TextField
            id="phone-number"
            label="Phone Number"
            variant="outlined"
            placeholder="Enter Your Phone Number"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="alternatePhone"
        render={({ field }) => (
          <TextField
            id="alternate-phone"
            label="Alternate Phone"
            variant="outlined"
            placeholder="Enter Your Alternate Phone"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};
const PersonalForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="address1"
        render={({ field }) => (
          <TextField
            id="address1"
            label="Address 1"
            variant="outlined"
            placeholder="Enter Your Address 1"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="address2"
        render={({ field }) => (
          <TextField
            id="address2"
            label="Address 2"
            variant="outlined"
            placeholder="Enter Your Address 2"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="country"
        render={({ field }) => (
          <TextField
            id="country"
            label="Country"
            variant="outlined"
            placeholder="Enter Your Country Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};
const PaymentForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="cardNumber"
        render={({ field }) => (
          <TextField
            id="cardNumber"
            label="Card Number"
            variant="outlined"
            placeholder="Enter Your Card Number"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="cardMonth"
        render={({ field }) => (
          <TextField
            id="cardMonth"
            label="Card Month"
            variant="outlined"
            placeholder="Enter Your Card Month"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="cardYear"
        render={({ field }) => (
          <TextField
            id="cardYear"
            label="Card Year"
            variant="outlined"
            placeholder="Enter Your Card Year"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicForm />;

    case 1:
      return <ContactForm />;
    case 2:
      return <PersonalForm />;
    case 3:
      return <PaymentForm />;
    default:
      return "unknown step";
  }
}
