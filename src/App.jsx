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

// Importación de tus componentes con los datos reales
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

  // Función para renderizar el componente según la pestaña activa
  const renderContent = () => {
    switch (activeTab) {
      case 'resumen':
        return <Resumen />;
      case 'marco':
        return <Marco />;
      case 'delitos':
        return <Delitos />;
      case 'comparacion':
        return <Comparacion />;
      case 'responsabilidades':
        return <Responsabilidades />;
      case 'datos':
        return <Datos />;
      case 'conclusiones':
        return <Conclusiones />;
      case 'prompts':
        return <Prompts />;
      default:
        return <Resumen />;
    }
  };

  const menuItems = [
    { id: 'resumen', label: '01. Resumen', icon: FileText },
    { id: 'marco', label: '02. Marco Normativo', icon: Gavel },
    { id: 'delitos', label: '03. Delitos', icon: ShieldAlert },
    { id: 'comparacion', label: '04. Comparación', icon: Scale },
    { id: 'responsabilidades', label: '05. Responsabilidades', icon: Users },
    { id: 'datos', label: '06. Datos Personales', icon: Database },
    { id: 'conclusiones', label: '07. Conclusiones', icon: CheckCircle },
    { id: 'prompts', label: '08. Bitácora IA', icon: Bot },
  ];

  return (
    <div className="flex min-h-screen bg-slate-100 text-slate-900 font-sans">
      {/* Sidebar Lateral */}
      <aside className="w-80 bg-slate-950 text-white flex flex-col justify-between p-6 fixed h-full z-10">
        <div className="space-y-6">
          <div>
            <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase">Informe Técnico</span>
            <h1 className="text-2xl font-bold text-white mt-1">Varchr - Ciberseguridad</h1>
            <p className="text-xs text-slate-400 mt-2">Caso Capcom analizado bajo el marco legal de la República de Chile.</p>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all text-left duration-200 ${
                    isActive
                      ? 'bg-white text-slate-950 shadow-lg scale-[1.02]'
                      : 'text-slate-400 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="border-t border-slate-900 pt-4 text-[10px] text-slate-500">
          <p>Sección activa: <span className="text-slate-300 font-bold capitalize">{activeTab}</span></p>
        </div>
      </aside>

      {/* Contenedor Principal de la Información */}
      <main className="flex-1 ml-80 p-10 min-h-screen bg-slate-100 flex flex-col justify-start">
        <div className="max-w-4xl w-full mx-auto transition-opacity duration-300">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}