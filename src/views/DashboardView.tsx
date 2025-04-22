import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query"
import { getProjects } from "@/api/ProjectApi";

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

interface Project {
  id: string;
  projectName: string;
  clientName: string;
  description: string;
}

export default function DashboardView() {
    const { data, isLoading } = useQuery<Project[]>({
        queryKey: ["projects"],
        queryFn: getProjects,
    })

    if (isLoading) return <div>Cargando...</div>
    console.log(data)

    return (
        <>
        <div className="flex justify-between items-center mb-5">
            <div className="flex items-center gap-3">
            </div>
           
        </div>

        {data && data.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((project: Project) => (
                    <div key={project.id} className="relative group">
                        <Link to={`/projects/${project.id}`}>
                            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
                        
                                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                    <div className="pattern-diagonal-stripes pattern-gray-300 pattern-bg-white pattern-size-2 pattern-opacity-20 w-full h-full">
                                        <div className="flex flex-col items-center justify-center h-full p-5 text-center">
                                            <h3 className="text-2xl font-bold text-gray-700">{project.projectName}</h3>
                                            <p className="mt-2 text-gray-500">
                                                {project.description?.substring(0, 80)}{project.description?.length > 80 ? '...' : ''}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Footer de la tarjeta */}
                                <div className="p-4 border-t border-gray-100 flex justify-between items-center">
                                    <div className="text-sm text-gray-500">
                                        Cliente: {project.clientName}
                                    </div>
                                    <div className="text-xs text-gray-400">
                                        Viewed about 1 year ago
                                    </div>
                                </div>
                            </div>
                        </Link>
                        
                        {/* Menú de opciones */}
                        <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Menu as="div" className="relative flex-none">
                                <Menu.Button className="bg-white p-1.5 rounded-md shadow-sm text-gray-500 hover:text-gray-900">
                                    <span className="sr-only">opciones</span>
                                    <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
                                </Menu.Button>
                                <Transition as={Fragment} enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95">
                                    <Menu.Items
                                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
                                    >
                                        <Menu.Item>
                                            <Link to={`/projects/${project.id}`}
                                                className='block px-3 py-1 text-sm leading-6 text-gray-900'>
                                                Ver Proyecto
                                            </Link>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Link to={`/projects/${project.id}/edit`}
                                                className='block px-3 py-1 text-sm leading-6 text-gray-900'>
                                                Editar Proyecto
                                            </Link>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <button
                                                type='button'
                                                className='block px-3 py-1 text-sm leading-6 text-red-500'
                                                onClick={() => { }}
                                            >
                                                Eliminar Proyecto
                                            </button>
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    </div>
                ))}
            </div>
        ) : (
            <div className="bg-white border border-gray-200 rounded-lg p-10 text-center shadow-sm">
                <p className="text-xl text-gray-500 mb-4">No hay proyectos para mostrar</p>
                <Link
                    to="/proyects/create"	
                    className="bg-blue-500 hover:bg-blue-600 px-5 py-2 text-white font-medium rounded-md transition-colors inline-block"
                >
                    Nuevo Proyecto
                </Link>
            </div>
        )}
    </>
    )
}