import React, { useState } from 'react';
import CreateUserForm from './CreateUserForm';
import { Card, CardHeader, CardBody, Typography, Chip } from "@material-tailwind/react";
import { UsersIcon, PlusIcon } from "@heroicons/react/24/solid";

export function Tables() {
    const [showForm, setShowForm] = useState(false);

    const handleButtonClick = () => {
        setShowForm(true);
    };

    return (
        <div className="mt-12 mb-8 relative flex flex-col gap-12">
            <Card>
                <CardHeader variant="gradient" color="gray" className="mb-8 p-6 flex justify-center">
                    <Typography variant="h4" color="white">
                        Anagrafica
                    </Typography>
                </CardHeader>
                {/* Add Button Below CardHeader */}
                <button className="create-button absolute top-0 right-0 bg-green-500 hover:bg-green-900 focus:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center space-x-2 transition-colors" onClick={handleButtonClick}>
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
                        {/* Render user data */}
                        </tbody>
                    </table>
                </CardBody>
            </Card>
            {showForm && <CreateUserForm />} {/* Display form when showForm is true */}
        </div>
    );
}

export default Tables;
