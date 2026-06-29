import React from 'react';
import { Users, Sparkles, Wand2, BookMarked } from 'lucide-react';
import { UI_TRANSLATIONS } from '../data/translations';

export default function MobileNavBar({ activeTab, setActiveTab, language }) {
  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.en;

  const tabs = [
    { id: 'grimoire', label: t.grimoire, icon: Users },
    { id: 'script', label: t.scriptBuilder, icon: Wand2 },
    { id: 'ai-guide', label: t.aiGuide, icon: Sparkles },
    { id: 'almanac', label: t.almanac, icon: BookMarked }
  ];

  return (
    <nav className="app-navbar">
      {tabs.map(tab => {
        const IconComponent = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            className={`nav-item ${isActive ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <IconComponent size={20} />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
