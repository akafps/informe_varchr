import React, { useState } from 'react';
import { 
  FileText, 
  Gavel, 
  ShieldAlert, 
  Scale, 
  Users, 
  Database, 
  CheckCircle, 
  Bot 
} from 'lucide-react';

import Resumen from './components/Resumen';
import Marco from './components/Marco';
import Delitos from './components/Delitos';
import Comparacion from './components/Comparacion';
import Responsabilidades from './components/Responsabilidades';
import Datos from './components/Datos';
import Conclusiones from './components/Conclusiones';
import Prompts from './components/Prompts';

export default function App() {
  const [activeTab, setActiveTab] = useState('resumen');

  const renderContent = () => {
    switch (activeTab) {
      case 'resumen':           return <Resumen />;
      case 'marco':             return <Marco />;
      case 'delitos':           return <Delitos />;
      case 'comparacion':       return <Comparacion />;
      case 'responsabilidades': return <Responsabilidades />;
      case 'datos':             return <Datos />;
      case 'conclusiones':      return <Conclusiones />;
      case 'prompts':           return <Prompts />;
      default:                  return <Resumen />;
    }
  };

  const menuItems = [
    { id: 'resumen',            label: '01. Resumen',           icon: FileText },
    { id: 'marco',              label: '02. Marco Normativo',   icon: Gavel },
    { id: 'delitos',            label: '03. Delitos',           icon: ShieldAlert },
    { id: 'comparacion',        label: '04. Comparación',       icon: Scale },
    { id: 'responsabilidades',  label: '05. Responsabilidades', icon: Users },
    { id: 'datos',              label: '06. Datos Personales',  icon: Database },
    { id: 'conclusiones',       label: '07. Conclusiones',      icon: CheckCircle },
    { id: 'prompts',            label: '08. Bitácora IA',       icon: Bot },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap');
      `}</style>

      <div style={{ display: 'flex', minHeight: '100vh', background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)', fontFamily: "'DM Sans', sans-serif" }}>

        {/* Sidebar */}
        <aside style={{
          width: '300px',
          background: 'linear-gradient(180deg, #020617 0%, #0c1a2e 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '2rem 1.25rem',
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh',
          zIndex: 50,
          borderRight: '1px solid #1e3a5f',
          boxShadow: '4px 0 24px rgba(0,0,0,0.4)',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

            {/* Logo / título */}
            <div style={{ paddingBottom: '1.5rem', borderBottom: '1px solid #1e3a5f' }}>
              <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.2em', color: '#38bdf8', textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif" }}>
                Informe Técnico
              </span>
              <h1 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#f0f9ff', marginTop: '0.4rem', lineHeight: 1.2, fontFamily: "'DM Sans', sans-serif", letterSpacing: '-0.02em' }}>
                Varchr
              </h1>
              <h2 style={{ fontSize: '0.85rem', fontWeight: 300, color: '#7dd3fc', marginTop: '0.2rem', fontStyle: 'italic', fontFamily: "'DM Sans', sans-serif" }}>
                Ciberseguridad
              </h2>
              <p style={{ fontSize: '0.68rem', color: '#475569', marginTop: '0.75rem', lineHeight: 1.5, fontFamily: "'DM Sans', sans-serif" }}>
                Caso Capcom analizado bajo el marco legal de la República de Chile.
              </p>
            </div>

            {/* Nav */}
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.7rem 1rem',
                      borderRadius: '0.6rem',
                      fontSize: '0.82rem',
                      fontWeight: isActive ? 500 : 300,
                      fontStyle: 'italic',
                      fontFamily: "'DM Sans', sans-serif",
                      letterSpacing: '0.01em',
                      textAlign: 'left',
                      border: isActive ? '1px solid #38bdf8' : '1px solid transparent',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      background: isActive
                        ? 'linear-gradient(90deg, #0ea5e9 0%, #0369a1 100%)'
                        : 'transparent',
                      color: isActive ? '#ffffff' : '#94a3b8',
                      boxShadow: isActive ? '0 2px 12px rgba(14,165,233,0.35)' : 'none',
                    }}
                    onMouseEnter={e => {
                      if (!isActive) {
                        e.currentTarget.style.color = '#e0f2fe';
                        e.currentTarget.style.background = '#0c1e35';
                      }
                    }}
                    onMouseLeave={e => {
                      if (!isActive) {
                        e.currentTarget.style.color = '#94a3b8';
                        e.currentTarget.style.background = 'transparent';
                      }
                    }}
                  >
                    <Icon style={{
                      width: '1rem',
                      height: '1rem',
                      flexShrink: 0,
                      color: isActive ? '#e0f2fe' : '#334f6e',
                    }} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Footer sidebar */}
          <div style={{ borderTop: '1px solid #1e3a5f', paddingTop: '1rem', fontSize: '0.6rem', color: '#334155', fontFamily: "'DM Sans', sans-serif" }}>
            Sección activa:{' '}
            <span style={{ color: '#38bdf8', fontWeight: 500 }}>{activeTab}</span>
          </div>
        </aside>

        {/* Contenido principal */}
        <main style={{
          marginLeft: '300px',
          flex: 1,
          padding: '2.5rem 3rem',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}>
          <div style={{ maxWidth: '900px', width: '100%', margin: '0 auto' }}>
            {renderContent()}
          </div>
        </main>

      </div>
    </>
  );
}