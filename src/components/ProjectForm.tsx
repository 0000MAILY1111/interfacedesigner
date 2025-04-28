import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { ProjectFormData } from '@/views/CreateProjectView';

interface ProjectFormProps {
  register: UseFormRegister<ProjectFormData>;
  errors: FieldErrors<ProjectFormData>;
  isEditing?: boolean;
}

export default function ProjectForm({ register, errors, isEditing = false }: ProjectFormProps) {
  return (
    <div className="space-y-6">
      <div>
        <label 
          htmlFor="projectName" 
          className="text-gray-700 uppercase font-bold text-sm"
        >
          Nombre del Proyecto
        </label>
        <input
          id="projectName"
          type="text"
          className={`w-full p-2 mt-2 placeholder-gray-400 border ${
            errors.projectName ? 'border-red-500' : 'border-gray-300'
          } rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500`}
          placeholder="Nombre del proyecto"
          {...register("projectName", {
            required: "El nombre del proyecto es obligatorio",
            minLength: {
              value: 3,
              message: "El nombre debe tener al menos 3 caracteres"
            }
          })}
        />
        {errors.projectName && (
          <p className="text-red-500 text-xs italic mt-1">
            {errors.projectName.message}
          </p>
        )}
      </div>

      <div>
        <label 
          htmlFor="clientName" 
          className="text-gray-700 uppercase font-bold text-sm"
        >
          Nombre del Cliente
        </label>
        <input
          id="clientName"
          type="text"
          className={`w-full p-2 mt-2 placeholder-gray-400 border ${
            errors.clientName ? 'border-red-500' : 'border-gray-300'
          } rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500`}
          placeholder="Nombre del cliente"
          {...register("clientName", {
            required: "El nombre del cliente es obligatorio",
            minLength: {
              value: 3,
              message: "El nombre debe tener al menos 3 caracteres"
            }
          })}
        />
        {errors.clientName && (
          <p className="text-red-500 text-xs italic mt-1">
            {errors.clientName.message}
          </p>
        )}
      </div>

      <div>
        <label 
          htmlFor="description" 
          className="text-gray-700 uppercase font-bold text-sm"
        >
          Descripción
        </label>
        <textarea
          id="description"
          rows={5}
          className={`w-full p-2 mt-2 placeholder-gray-400 border ${
            errors.description ? 'border-red-500' : 'border-gray-300'
          } rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500`}
          placeholder="Descripción del proyecto"
          {...register("description", {
            required: "La descripción es obligatoria",
            minLength: {
              value: 10,
              message: "La descripción debe tener al menos 10 caracteres"
            }
          })}
        />
        {errors.description && (
          <p className="text-red-500 text-xs italic mt-1">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Puedes añadir más campos aquí según sea necesario */}
    </div>
  );
}