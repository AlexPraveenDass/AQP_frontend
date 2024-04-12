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

export function SignUp() {
  return (
      <section className="m-8 flex justify-center items-center">  {/* Centered section */}
        <div className="w-full lg:w-3/5 flex flex-col items-center justify-center">  {/* Centered form container */}
          <div className="text-center">
            <img src={CustomLogo} alt="AQP LOGO" className="h-20 mb-6" /> {/* Added mb-4 for bottom margin */}
            <Typography variant="h3" className="font-bold mb-4">Registra Ora</Typography>  {/* Italian title */}
            <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Inserisci la tua email per registrarti.</Typography>  {/* Italian description */}
          </div>
          <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                Nome
              </Typography>
              <Input
                  size="lg"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
              />
            </div>
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                Cognome
              </Typography>
              <Input
                  size="lg"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
              />
            </div>
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                La tua email
              </Typography>
              <Input
                  size="lg"
                  placeholder="name@mail.com"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
              />
            </div>
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                password
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
            <Button className="mt-6" fullWidth>
              Richiedi un account
            </Button>


          </form>

        </div>
      </section>
  );
}

export default SignUp;
