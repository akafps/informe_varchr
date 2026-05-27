import React from 'react';
import { ShieldAlert, AlertTriangle } from 'lucide-react';

export default function Delitos() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md space-y-6">
      <div className="flex items-center gap-2 mb-4 border-b pb-4">
        <ShieldAlert className="text-red-500 w-8 h-8" />
        <h2 className="text-3xl font-bold text-gray-800">03. Tipificación de Delitos (Ley 21.459)</h2>
      </div>
      
      <p className="text-gray-600">
        El actuar del grupo delictivo "Ragnar Locker" en el ataque a Capcom configura los siguientes delitos informáticos bajo la legislación penal chilena:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-red-50 rounded-lg border border-red-100">
          <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-red-500" /> Acceso Ilícito (Artículo 1)
          </h3>
          <p className="text-xs text-red-800 text-justify">Los atacantes vulneraron los perímetros de seguridad informática y las credenciales de los servidores de Capcom, ingresando sin autorización ni derecho a los sistemas computacionales de la empresa.</p>
        </div>

        <div className="p-4 bg-red-50 rounded-lg border border-red-100">
          <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-red-500" /> Interceptación Ilícita (Artículo 2)
          </h3>
          <p className="text-xs text-red-800 text-justify">Durante la intrusión, el grupo criminal interceptó y capturó flujos de datos internos de la red corporativa, deteniendo y extrayendo las transmisiones de datos no públicas como planes de desarrollo y correos.</p>
        </div>

        <div className="p-4 bg-red-50 rounded-lg border border-red-100">
          <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-red-500" /> Ataque a la Integridad (Artículo 3)
          </h3>
          <p className="text-xs text-red-800 text-justify">El uso del ransomware encriptó los archivos de bases de datos, códigos fuente y sistemas operativos corporativos, alterando y dañando de forma directa la disponibilidad del patrimonio informático.</p>
        </div>

        <div className="p-4 bg-red-50 rounded-lg border border-red-100">
          <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-red-500" /> Recepción de Datos (Artículo 6)
          </h3>
          <p className="text-xs text-red-800 text-justify">Los atacantes, conociendo el origen ilícito de la información sustraída, almacenaron, comercializaron y divulgaron masivamente en un sitio web de la Dark Web los datos personales robados.</p>
        </div>
      </div>
    </div>
  );
}