import React, { useState } from 'react';
import { BookOpen, Moon, Sun, Settings, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import { UI_TRANSLATIONS } from '../data/translations';

export default function MobileHeader({ 
  currentPhase, 
  dayNumber, 
  onTogglePhase, 
  onPreviousPhase,
  editionName, 
  onOpenSettings, 
  language, 
  setLanguage 
}) {
  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.en;
  const [showTurnAdjuster, setShowTurnAdjuster] = useState(false);

  const toggleLanguage = () => {
    const nextLang = language === 'en' ? 'vi' : 'en';
    setLanguage(nextLang);
  };

  return (
    <header className="app-header">
      <div className="header-title-container">
        <BookOpen className="header-icon" />
        <div>
          <h1 className="header-title">Pocket Grimoire</h1>
          <div className="header-subtitle">{editionName}</div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        {/* Language Toggle */}
        <button
          onClick={toggleLanguage}
          style={{
            background: language === 'vi' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(255, 255, 255, 0.1)',
            border: `1px solid ${language === 'vi' ? '#ef4444' : 'var(--border-color)'}`,
            color: '#fff',
            borderRadius: '20px',
            padding: '4px 8px',
            fontSize: '0.75rem',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}
          title="Switch Language / Đổi Ngôn Ngữ"
        >
          <span>{language === 'vi' ? '🇻🇳 VI' : '🇬🇧 EN'}</span>
        </button>

        {/* Turn Navigation Container with Back & Forward Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', background: 'var(--bg-secondary)', borderRadius: '20px', border: '1px solid var(--border-color)', padding: '2px' }}>
          <button
            onClick={onPreviousPhase}
            style={{ background: 'none', border: 'none', color: 'var(--accent-gold)', padding: '4px 6px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            title="Return to previous turn / Quay lại lượt trước"
          >
            <ChevronLeft size={16} />
          </button>

          <button 
            className={`phase-badge ${currentPhase}`}
            onClick={onTogglePhase}
            style={{ borderRadius: '16px', padding: '4px 10px', margin: '0 2px' }}
            title="Tap to advance phase / Chạm để sang lượt tiếp theo"
          >
            {currentPhase === 'night' ? <Moon size={13} /> : <Sun size={13} />}
            <span>{currentPhase === 'night' ? `${t.night} ${dayNumber}` : `${t.day} ${dayNumber}`}</span>
          </button>

          <button
            onClick={onTogglePhase}
            style={{ background: 'none', border: 'none', color: 'var(--accent-gold)', padding: '4px 6px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            title="Advance to next turn / Tiến tới lượt sau"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        <button 
          onClick={onOpenSettings}
          style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', padding: '4px' }}
        >
          <Settings size={20} />
        </button>
      </div>
    </header>
  );
}
