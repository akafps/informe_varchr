import React from 'react';
import { FileText, Calendar, Users, ShieldAlert } from 'lucide-react';

export default function Resumen() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md space-y-6">
      <div className="flex items-center gap-2 mb-4 border-b pb-4">
        <FileText className="text-blue-500 w-8 h-8" />
        <h2 className="text-3xl font-bold text-gray-800">01. Resumen Ejecutivo del Caso</h2>
      </div>
      
      <div className="text-gray-600 space-y-4 text-justify">
        <p>
          En noviembre de 2020, la multinacional de videojuegos <strong>Capcom</strong> sufrió un ataque informático masivo perpetrado por el grupo criminal <strong>"Ragnar Locker"</strong>. Los atacantes lograron infiltrarse en los servidores internos utilizando un ransomware personalizado, cifrando los sistemas y exigiendo un rescate millonario. Bajo el escenario planteado para esta evaluación, analizamos el impacto hipotético de este incidente sobre la infraestructura de la empresa en territorio chileno.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div className="flex items-center gap-2 text-gray-800 font-bold mb-2">
            <Calendar className="text-blue-500 w-5 h-5" />
            <span>¿Cuándo ocurrió?</span>
          </div>
          <p className="text-sm text-gray-600">Detectado el 2 de noviembre de 2020, con filtraciones de datos que se extendieron durante las semanas siguientes.</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div className="flex items-center gap-2 text-gray-800 font-bold mb-2">
            <Users className="text-blue-500 w-5 h-5" />
            <span>Actores Involucrados</span>
          </div>
          <p className="text-sm text-gray-600"><strong>Atacantes:</strong> Ragnar Locker. <br /><strong>Afectados:</strong> Capcom Chile, empleados, colaboradores y más de 350.000 usuarios de la plataforma de videojuegos.</p>
        </div>
      </div>

      <div className="p-4 bg-red-50 rounded-lg border border-red-200">
        <div className="flex items-center gap-2 text-red-800 font-bold mb-2">
          <ShieldAlert className="text-red-500 w-5 h-5" />
          <span>Impacto General</span>
        </div>
        <ul className="list-disc pl-5 text-sm text-red-950 space-y-1">
          <li><strong>Financiero:</strong> Paralización de operaciones y costos de remediación de sistemas.</li>
          <li><strong>Propiedad Intelectual:</strong> Filtración de códigos fuente y planes comerciales.</li>
          <li><strong>Privacidad:</strong> Exposición masiva en la Dark Web de nombres, correos y datos de contacto de jugadores chilenos.</li>
        </ul>
      </div>
    </div>
  );
}