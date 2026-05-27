import React from 'react';
import { CheckCircle, HeartPulse } from 'lucide-react';

export default function Conclusiones() {
  return (
    <div className="p-8 bg-white rounded-[32px] shadow-soft border border-slate-200 space-y-8">
      <div className="flex flex-col gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <CheckCircle className="text-emerald-500 w-9 h-9" />
          <h2 className="text-3xl font-semibold text-slate-950">07. Recomendaciones y Conclusiones</h2>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-bold text-gray-800 text-lg flex items-center gap-1">🛡️ Controles de Seguridad Sugeridos</h3>
        <ul className="grid gap-4 md:grid-cols-2 text-sm text-slate-900">
          <li className="rounded-[28px] border border-slate-200 bg-slate-50 p-5"><strong>MFA Obligatorio:</strong> Autenticación de múltiples factores para accesos remotos y cuentas críticas de desarrolladores.</li>
          <li className="rounded-[28px] border border-slate-200 bg-slate-50 p-5"><strong>Segmentación de Red:</strong> Aislar los servidores con propiedad intelectual y códigos de juegos de las redes comunes.</li>
          <li className="rounded-[28px] border border-slate-200 bg-slate-50 p-5"><strong>Backups Inmutables:</strong> Copias de seguridad cifradas y desconectadas de la red para restaurar sistemas sin pagar rescates.</li>
          <li className="rounded-[28px] border border-slate-200 bg-slate-50 p-5"><strong>Gestión de Parches:</strong> Actualización inmediata de sistemas operativos y VPNs ante vulnerabilidades conocidas.</li>
        </ul>
      </div>

      <div className="rounded-[28px] border border-emerald-200 bg-emerald-50 p-6 shadow-sm">
        <h3 className="font-bold text-emerald-950 flex items-center gap-2 mb-2"><HeartPulse className="text-emerald-600 w-5 h-5"/> Reflexión Final</h3>
        <p className="text-sm text-emerald-900 text-justify">
          El caso de Capcom demuestra que las empresas de entretenimiento digital manejan un patrimonio de datos críticos tan valioso como cualquier entidad financiera. La implementación de la Ley N° 21.459 en Chile dota al país de mejores herramientas para perseguir el cibercrimen, pero impone a los informáticos el desafío de elevar los estándares éticos y técnicos para garantizar la confianza pública.
        </p>
      </div>
    </div>
  );
}