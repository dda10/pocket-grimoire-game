import React, { useState } from 'react';
import { EDITIONS, ALL_ROLES, PLAYER_DISTRIBUTION } from '../data/editionsAndRoles';
import { generateRandomScript, getLocalizedRole } from '../services/aiGuideService';
import { UI_TRANSLATIONS } from '../data/translations';
import { Wand2, Users, Shuffle, Check, ShieldAlert, BookOpen, Smartphone, Share2 } from 'lucide-react';

export default function ScriptBuilderView({ 
  playerCount, 
  setPlayerCount, 
  activeEdition, 
  setActiveEdition, 
  activeScriptRoles, 
  setActiveScriptRoles,
  onApplyScriptToGrimoire,
  onStartPlayerSetup,
  onOpenShareModal,
  language
}) {
  const [generationMode, setGenerationMode] = useState('auto');
  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.en;
  const isVi = language === 'vi';

  const dist = PLAYER_DISTRIBUTION[playerCount] || PLAYER_DISTRIBUTION[7];
  const currentEditionRoles = ALL_ROLES.filter(r => r.edition === activeEdition || r.edition === '' || activeEdition === 'custom');

  const handleGenerateRandom = () => {
    const randomRoles = generateRandomScript(playerCount, activeEdition);
    setActiveScriptRoles(randomRoles);
  };

  const handleToggleManualRole = (role) => {
    if (activeScriptRoles.some(r => r.id === role.id)) {
      setActiveScriptRoles(activeScriptRoles.filter(r => r.id !== role.id));
    } else {
      setActiveScriptRoles([...activeScriptRoles, role]);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ background: 'var(--bg-card)', padding: '16px', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <label style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Users size={16} /> {t.numberPlayers}
          </label>
          <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff', background: 'var(--bg-secondary)', padding: '2px 12px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
            {playerCount}
          </span>
        </div>

        <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '6px', marginBottom: '12px' }}>
          {Object.keys(PLAYER_DISTRIBUTION).map(count => (
            <button
              key={count}
              onClick={() => setPlayerCount(Number(count))}
              style={{
                padding: '8px 14px',
                borderRadius: '8px',
                background: Number(count) === playerCount ? 'var(--accent-gold)' : 'var(--bg-primary)',
                color: Number(count) === playerCount ? '#000' : 'var(--text-primary)',
                border: '1px solid var(--border-color)',
                fontWeight: 700,
                cursor: 'pointer',
                flexShrink: 0
              }}
            >
              {count}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px', textAlign: 'center' }}>
          <div style={{ background: 'var(--align-townsfolk-bg)', padding: '8px', borderRadius: '8px', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
            <div style={{ fontSize: '0.65rem', color: 'var(--align-townsfolk)', fontWeight: 700 }}>TOWNSFOLK</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff' }}>{dist.townsfolk}</div>
          </div>
          <div style={{ background: 'var(--align-outsider-bg)', padding: '8px', borderRadius: '8px', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
            <div style={{ fontSize: '0.65rem', color: 'var(--align-outsider)', fontWeight: 700 }}>OUTSIDER</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff' }}>{dist.outsider}</div>
          </div>
          <div style={{ background: 'var(--align-minion-bg)', padding: '8px', borderRadius: '8px', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
            <div style={{ fontSize: '0.65rem', color: 'var(--align-minion)', fontWeight: 700 }}>MINION</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff' }}>{dist.minion}</div>
          </div>
          <div style={{ background: 'var(--align-demon-bg)', padding: '8px', borderRadius: '8px', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
            <div style={{ fontSize: '0.65rem', color: 'var(--align-demon)', fontWeight: 700 }}>DEMON</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff' }}>{dist.demon}</div>
          </div>
        </div>
      </div>

      <div style={{ background: 'var(--bg-card)', padding: '16px', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
        <label style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--accent-gold)', display: 'block', marginBottom: '10px' }}>
          {t.playEdition}
        </label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {EDITIONS.map(ed => (
            <div
              key={ed.id}
              onClick={() => setActiveEdition(ed.id)}
              style={{
                background: activeEdition === ed.id ? 'rgba(212, 175, 55, 0.12)' : 'var(--bg-primary)',
                border: `1px solid ${activeEdition === ed.id ? 'var(--accent-gold)' : 'var(--border-color)'}`,
                borderRadius: '10px',
                padding: '12px 14px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: activeEdition === ed.id ? 'var(--accent-gold)' : 'var(--text-primary)' }}>
                  {ed.name}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                  {ed.description}
                </div>
              </div>
              {activeEdition === ed.id && <Check size={18} color="var(--accent-gold)" />}
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: 'var(--bg-card)', padding: '16px', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
          <button
            className={`btn ${generationMode === 'auto' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ flex: 1 }}
            onClick={() => setGenerationMode('auto')}
          >
            <Shuffle size={16} /> {t.autoRandom}
          </button>
          <button
            className={`btn ${generationMode === 'manual' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ flex: 1 }}
            onClick={() => setGenerationMode('manual')}
          >
            <Wand2 size={16} /> {t.manualSelection}
          </button>
        </div>

        {generationMode === 'auto' && (
          <div style={{ textAlign: 'center', padding: '10px 0' }}>
            <button className="btn btn-primary" style={{ width: '100%', padding: '12px' }} onClick={handleGenerateRandom}>
              <Shuffle size={18} /> {t.genRandomScript} ({playerCount})
            </button>
          </div>
        )}

        {generationMode === 'manual' && (
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxHeight: '300px', overflowY: 'auto' }}>
              {currentEditionRoles.map(role => {
                const localized = getLocalizedRole(role, language);
                const isSelected = activeScriptRoles.some(r => r.id === role.id);
                return (
                  <div
                    key={role.id}
                    onClick={() => handleToggleManualRole(role)}
                    style={{
                      background: isSelected ? 'var(--bg-secondary)' : 'var(--bg-primary)',
                      border: `1px solid ${isSelected ? 'var(--accent-gold)' : 'var(--border-color)'}`,
                      padding: '8px 12px',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      {localized.image && <img src={localized.image} alt="" style={{ width: '24px', height: '24px' }} />}
                      <span className={`badge-align ${localized.type}`}>
                        {localized.type}
                      </span>
                      <span style={{ fontWeight: 600, fontSize: '0.85rem' }}>{localized.name}</span>
                    </div>
                    {isSelected && <Check size={16} color="var(--accent-gold)" />}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {activeScriptRoles.length > 0 && (
        <div style={{ background: 'var(--bg-card)', padding: '16px', borderRadius: '16px', border: '1px solid var(--accent-gold)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <h4 style={{ color: 'var(--accent-gold)', fontSize: '0.95rem' }}>{t.activeScript} ({activeScriptRoles.length})</h4>
            <button className="btn btn-outline-gold btn-sm" onClick={onOpenShareModal}>
              <Share2 size={14} /> {isVi ? 'Chia Sẻ' : 'Share'}
            </button>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '14px' }}>
            {activeScriptRoles.map(r => {
              const localized = getLocalizedRole(r, language);
              return (
                <div key={r.id} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'var(--bg-primary)', padding: '4px 8px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                  {localized.image && <img src={localized.image} alt="" style={{ width: '20px', height: '20px' }} />}
                  <span className={`badge-align ${localized.type}`} style={{ fontSize: '0.7rem' }}>
                    {localized.name}
                  </span>
                </div>
              );
            })}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <button className="btn btn-primary" style={{ width: '100%' }} onClick={onApplyScriptToGrimoire}>
              {t.applyScriptPassPhone}
            </button>
            <button className="btn btn-secondary btn-sm" style={{ width: '100%' }} onClick={onStartPlayerSetup}>
              <Smartphone size={14} /> {t.openPlayerSetup}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
