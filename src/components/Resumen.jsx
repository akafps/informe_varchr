import React from 'react';
import { FileText, Calendar, Users, ShieldAlert } from 'lucide-react';

export default function Resumen() {
  return (
    <div className="p-8 bg-white rounded-[32px] shadow-soft border border-slate-200 space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-200 pb-5">
        <FileText className="text-blue-500 w-9 h-9 shrink-0" />
        <h2 className="text-3xl font-semibold text-slate-950">01. Resumen Ejecutivo del Caso</h2>
      </div>

      {/* Intro */}
      <p className="text-slate-900 leading-relaxed text-justify">
        En noviembre de 2020, la multinacional de videojuegos <strong>Capcom</strong> sufrió un ataque informático masivo perpetrado por el grupo criminal <strong>"Ragnar Locker"</strong>. Los atacantes lograron infiltrarse en los servidores internos utilizando un ransomware personalizado, cifrando más de 1 TB de archivos críticos y exigiendo un rescate de 11 millones de dólares en criptomonedas. El acceso inicial se obtuvo a través de una VPN obsoleta de la red norteamericana de la compañía, lo que permitió al grupo moverse lateralmente hasta comprometer los sistemas centrales. Bajo el escenario planteado para esta evaluación, analizamos el impacto hipotético de este incidente sobre la infraestructura de la empresa en territorio chileno, considerando las obligaciones legales vigentes bajo la normativa nacional.
      </p>

      {/* Grid de 2 cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
          alignItems: 'stretch',
        }}
      >
        {/* Card 1 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '1.75rem',
            border: '1px solid #e2e8f0',
            backgroundColor: '#f8fafc',
            padding: '1.5rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.75rem' }}>
            <Calendar style={{ color: '#3b82f6', width: '1.25rem', height: '1.25rem', flexShrink: 0 }} />
            <span>¿Cuándo ocurrió?</span>
          </div>
          <p style={{ fontSize: '0.875rem', color: '#0f172a', lineHeight: 1.65, margin: 0, flexGrow: 1 }}>
            Detectado el 2 de noviembre de 2020, con filtraciones de datos que se extendieron durante las semanas siguientes. La empresa tardó varios días en contener el ataque y restaurar la operatividad parcial de sus sistemas internos.
          </p>
        </div>

        {/* Card 2 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '1.75rem',
            border: '1px solid #e2e8f0',
            backgroundColor: '#f8fafc',
            padding: '1.5rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.75rem' }}>
            <Users style={{ color: '#3b82f6', width: '1.25rem', height: '1.25rem', flexShrink: 0 }} />
            <span>Actores Involucrados</span>
          </div>
          <p style={{ fontSize: '0.875rem', color: '#0f172a', lineHeight: 1.65, margin: 0, flexGrow: 1 }}>
            <strong>Atacantes:</strong> Ragnar Locker, grupo criminal de ransomware con operaciones en Europa del Este.<br /><br />
            <strong>Afectados:</strong> Capcom Chile, empleados, colaboradores y más de 350.000 usuarios de la plataforma de videojuegos cuyos datos fueron expuestos públicamente.
          </p>
        </div>
      </div>

      {/* Impacto General */}
      <div
        style={{
          padding: '1.25rem 1.5rem',
          backgroundColor: '#fff1f2',
          borderRadius: '0.75rem',
          border: '1px solid #fecaca',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#991b1b', fontWeight: 700, marginBottom: '0.75rem' }}>
          <ShieldAlert style={{ color: '#ef4444', width: '1.25rem', height: '1.25rem', flexShrink: 0 }} />
          <span>Impacto General</span>
        </div>
        <ul style={{ paddingLeft: '1.25rem', margin: 0, fontSize: '0.875rem', color: '#0c0a09', lineHeight: 1.75 }}>
          <li><strong>Financiero:</strong> Paralización de operaciones por varios días, costos de remediación de sistemas, honorarios de respuesta a incidentes y potenciales multas regulatorias.</li>
          <li><strong>Propiedad Intelectual:</strong> Filtración de códigos fuente de videojuegos no lanzados, planes comerciales confidenciales y roadmaps de desarrollo.</li>
          <li><strong>Privacidad:</strong> Exposición masiva en la Dark Web de nombres, correos, fechas de nacimiento y datos de contacto de más de 350.000 jugadores chilenos y extranjeros.</li>
          <li><strong>Reputacional:</strong> Pérdida de confianza de clientes, socios comerciales e inversores, con cobertura mediática internacional negativa durante semanas.</li>
        </ul>
      </div>
    </div>
  );
}