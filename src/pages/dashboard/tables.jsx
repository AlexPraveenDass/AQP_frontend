import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import { UsersIcon, PlusIcon } from "@heroicons/react/24/solid"; // Import UsersIcon and PlusIcon
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "@/data";

export function Tables() {
  return (
      <div className="mt-12 mb-8 relative flex flex-col gap-12">
        <Card>
          <CardHeader variant="gradient" color="gray" className="mb-8 p-6 flex justify-center">  {/* Added justify-center class for centering */}
            <Typography variant="h4" color="white">
              Anagrafica
            </Typography>
          </CardHeader>
          {/* Add Button Below CardHeader */}
          <button className="create-button absolute top-0 right-0 bg-green-500 hover:bg-green-900 focus:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center space-x-2 transition-colors">
            <PlusIcon className="h-5 w-5" /> {/* Plus icon */}
            Aggiungi utenti
          </button>

          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
              <tr>
                {["Utente", "Tipo", "Stato", "contratto fino a", ""].map((el) => (
                    <th
                        key={el}
                        className="border-b border-blue-gray-50 py-3 px-5 text-left"
                    >
                      <Typography
                          variant="small"
                          className="text-[11px] font-bold uppercase text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                ))}
              </tr>
              </thead>
              <tbody>
              {authorsTableData.map(
                  ({ img, name, email, job, online, date }, key) => {
                    const className = `py-3 px-5 ${
                        key === authorsTableData.length - 1
                            ? ""
                            : "border-b border-blue-gray-50"
                    }`;

                    return (
                        <tr key={name}>
                          <td className={className}>
                            <div className="flex items-center gap-4">

                              <div>
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-semibold"
                                >
                                  {name}
                                </Typography>
                                <Typography className="text-xs font-normal text-blue-gray-500">
                                  {email}
                                </Typography>
                              </div>
                            </div>
                          </td>
                          <td className={className}>
                            <Typography className="text-xs font-semibold text-blue-gray-600">
                              {job[0]}
                            </Typography>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {job[1]}
                            </Typography>
                          </td>
                          <td className={className}>
                            <Chip
                                variant="gradient"
                                color={online ? "green" : "blue-gray"}
                                value={online ? "Disponibile" : "Non-Disponibile"}
                                className="py-0.5 px-2 text-[11px] font-medium w-fit"
                            />
                          </td>
                          <td className={className}>
                            <Typography className="text-xs font-semibold text-blue-gray-600">
                              {date}
                            </Typography>
                          </td>
                          <td className={className}>
                            <Typography
                                as="a"
                                href="#"
                                className="text-xs font-semibold text-blue-gray-600"
                            >
                              Edit
                            </Typography>
                            <Typography
                                as="a"
                                href="#"
                                className="text-xs font-semibold text-red-600"
                            >
                              Delete
                            </Typography>
                          </td>
                        </tr>
                    );
                  }
              )}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
  );
}

export default Tables;
