import React from 'react';
import { Database, EyeOff, ShieldCheck } from 'lucide-react';

export default function Datos() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md space-y-6">
      <div className="flex items-center gap-2 mb-4 border-b pb-4">
        <Database className="text-cyan-500 w-8 h-8" />
        <h2 className="text-3xl font-bold text-gray-800">06. Tratamiento de Datos Personales (Ley 19.628)</h2>
      </div>

      <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-100 space-y-3">
        <h3 className="font-bold text-cyan-950 flex items-center gap-2"><EyeOff className="text-cyan-600 w-5 h-5"/> 1. Distinción de Datos Vulnerados</h3>
        <ul className="text-sm text-cyan-900 list-disc pl-5 space-y-2">
          <li><strong>Datos Personales Estándar:</strong> Nombres de usuario, correos electrónicos, teléfonos y contraseñas encriptadas de los jugadores chilenos. Se vulneró el principio de seguridad informática.</li>
          <li><strong>Datos Sensibles:</strong> Historiales médicos preliminares y datos de recursos humanos correspondientes a la planilla de empleados. La ley chilena prohíbe el tratamiento de estos datos sin autorización expresa.</li>
        </ul>
      </div>

      <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-100 space-y-3">
        <h3 className="font-bold text-cyan-950 flex items-center gap-2"><ShieldCheck className="text-cyan-600 w-5 h-5"/> 2. Afectación de los Derechos ARCO</h3>
        <p className="text-sm text-cyan-900 text-justify">
          Los jugadores chilenos vieron vulnerados sus derechos de **Acceso** al no conocer la magnitud de los perfiles robados en la Dark Web, su capacidad de **Rectificación** por congelamiento de sistemas, y su derecho de **Cancelación y Oposición** para exigir el borrado total e inmediato de sus registros financieros para evitar fraudes adicionales.
        </p>
      </div>
    </div>
  );
}