import React from 'react';
import { CheckCircle, HeartPulse } from 'lucide-react';

export default function Conclusiones() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md space-y-6">
      <div className="flex items-center gap-2 mb-4 border-b pb-4">
        <CheckCircle className="text-emerald-500 w-8 h-8" />
        <h2 className="text-3xl font-bold text-gray-800">07. Recomendaciones y Conclusiones</h2>
      </div>

      <div className="space-y-3">
        <h3 className="font-bold text-gray-800 text-lg flex items-center gap-1">🛡️ Controles de Seguridad Sugeridos</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600">
          <li className="p-3 bg-gray-50 border rounded"><strong>MFA Obligatorio:</strong> Autenticación de múltiples factores para accesos remotos y cuentas críticas de desarrolladores.</li>
          <li className="p-3 bg-gray-50 border rounded"><strong>Segmentación de Red:</strong> Aislar los servidores con propiedad intelectual y códigos de juegos de las redes comunes.</li>
          <li className="p-3 bg-gray-50 border rounded"><strong>Backups Inmutables:</strong> Copias de seguridad cifradas y desconectadas de la red para restaurar sistemas sin pagar rescates.</li>
          <li className="p-3 bg-gray-50 border rounded"><strong>Gestión de Parches:</strong> Actualización inmediata de sistemas operativos y VPNs ante vulnerabilidades conocidas.</li>
        </ul>
      </div>

      <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
        <h3 className="font-bold text-emerald-950 flex items-center gap-2 mb-2"><HeartPulse className="text-emerald-600 w-5 h-5"/> Reflexión Final</h3>
        <p className="text-sm text-emerald-900 text-justify">
          El caso de Capcom demuestra que las empresas de entretenimiento digital manejan un patrimonio de datos críticos tan valioso como cualquier entidad financiera. La implementación de la Ley N° 21.459 en Chile dota al país de mejores herramientas para perseguir el cibercrimen, pero impone a los informáticos el desafío de elevar los estándares éticos y técnicos para garantizar la confianza pública.
        </p>
      </div>
    </div>
  );
}