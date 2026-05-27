import React from 'react';
import { Gavel, CheckCircle } from 'lucide-react';

export default function Marco() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md space-y-6">
      <div className="flex items-center gap-2 mb-4 border-b pb-4">
        <Gavel className="text-purple-500 w-8 h-8" />
        <h2 className="text-3xl font-bold text-gray-800">02. Marco Normativo Aplicable</h2>
      </div>
      
      <p className="text-gray-600 text-justify">
        Para regular y sancionar el ciberataque sufrido por Capcom bajo la jurisdicción de la República de Chile, se identifican y justifican las siguientes cuatro normas jurídicas:
      </p>

      <div className="space-y-4">
        <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
          <h3 className="font-bold text-purple-950 flex items-center gap-2 mb-1">
            <CheckCircle className="w-4 h-4 text-purple-600" /> 1. Ley N° 21.459 (Ley de Delitos Informáticos - Chile)
          </h3>
          <p className="text-sm text-purple-900"><strong>Justificación:</strong> Es la norma principal aplicable para sancionar penalmente a los miembros del grupo criminal "Ragnar Locker". Esta ley tipifica de manera específica las acciones de hackeo, el uso de malware (ransomware) y la extracción de datos de los servidores.</p>
        </div>

        <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
          <h3 className="font-bold text-purple-950 flex items-center gap-2 mb-1">
            <CheckCircle className="w-4 h-4 text-purple-600" /> 2. Ley N° 19.628 (Sobre Protección de la Vida Privada - Chile)
          </h3>
          <p className="text-sm text-purple-900"><strong>Justificación:</strong> Regula el tratamiento de datos personales en el país. Aplica directamente a Capcom Chile debido a su responsabilidad legal en el resguardo, almacenamiento y confidencialidad de los datos personales de los usuarios chilenos que fueron filtrados a la Dark Web.</p>
        </div>

        <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
          <h3 className="font-bold text-purple-950 flex items-center gap-2 mb-1">
            <CheckCircle className="w-4 h-4 text-purple-600" /> 3. Reglamento General de Protección de Datos (GDPR - Unión Europea)
          </h3>
          <p className="text-sm text-purple-900"><strong>Justificación:</strong> Aunque es una norma internacional, su aplicación es extraterritorial. Debido a que el ataque comprometió datos de ciudadanos de la Unión Europea y Capcom comercializa globalmente, la empresa está sujeta a este marco normativo y a sus severas sanciones económicas por brechas de seguridad.</p>
        </div>

        <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
          <h3 className="font-bold text-purple-950 flex items-center gap-2 mb-1">
            <CheckCircle className="w-4 h-4 text-purple-600" /> 4. Estándar ISO/IEC 27001 (Sistemas de Gestión de Seguridad)
          </h3>
          <p className="text-sm text-purple-900"><strong>Justificación:</strong> Funciona como el marco de gobernanza técnica de referencia. Permite evaluar si Capcom contaba con los controles de seguridad institucionales mínimos exigidos internacionalmente para la mitigación de riesgos de infraestructura y continuidad de negocio ante ataques de ransomware.</p>
        </div>
      </div>
    </div>
  );
}