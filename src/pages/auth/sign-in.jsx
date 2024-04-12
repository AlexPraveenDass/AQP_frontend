import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import CustomLogo from "/img/logo-aqp.png";
import React from "react";

export function SignIn() {
  return (
      <section className="m-8 flex justify-center items-center">  {/* Centered the section horizontally and vertically */}
        <div className="w-full lg:w-3/5 mt-24">
          <div className="text-center flex flex-col items-center">
            <img src={CustomLogo} alt="AQP LOGO" className="h-20 mb-4" /> {/* Added mb-4 for bottom margin */}
            <Typography variant="h2" className="font-bold">Accedi</Typography> {/* Removed mb-4 */}
            <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Inserisci la tua Email e Password.</Typography>
          </div>

          <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Il tuo Email
            </Typography>
            <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
            />
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Password
            </Typography>
            <Input
                type="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
            />
          </div>

          <Button className="mt-6" fullWidth style={{backgroundColor: '#1a3755'}}>
            Sign In
          </Button>




          {/*<Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">*/}
          {/*  Non sei registrato?*/}
          {/*  <Link to="/auth/sign-up" className="text-gray-900 ml-1">Crea un account</Link>*/}
          {/*</Typography>*/}
        </form>

      </div>
      {/*<div className="w-2/5 h-full hidden lg:block">*/}
      {/*  <img*/}
      {/*      src="/img/pattern.png"*/}
      {/*      className="h-full w-full object-cover rounded-3xl"*/}
      {/*  />*/}
      {/*</div>*/}

    </section>
  );
}

export default SignIn;
