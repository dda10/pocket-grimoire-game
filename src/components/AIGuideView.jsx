import React, { useState } from 'react';
import { generateStepByStepGuide, generateAIStrategicOverrides } from '../services/aiGuideService';
import { UI_TRANSLATIONS } from '../data/translations';
import { Sparkles, Moon, Sun, CheckCircle2, Circle, ShieldAlert, Key, Zap, Info } from 'lucide-react';

export default function AIGuideView({ currentPhase, dayNumber, players, language }) {
  const [activeSubTab, setActiveSubTab] = useState('steps');
  const [completedSteps, setCompletedSteps] = useState(new Set());
  const [apiKey, setApiKey] = useState(localStorage.getItem('gemini_api_key') || '');
  const [showApiKeyModal, setShowApiKeyModal] = useState(false);

  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.en;
  const steps = generateStepByStepGuide(currentPhase, dayNumber, players, language);
  const overrides = generateAIStrategicOverrides(players, language);

  const handleToggleStep = (id) => {
    const next = new Set(completedSteps);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setCompletedSteps(next);
  };

  const handleSaveApiKey = () => {
    localStorage.setItem('gemini_api_key', apiKey);
    setShowApiKeyModal(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ 
        background: 'linear-gradient(135deg, rgba(88, 28, 135, 0.4) 0%, rgba(26, 29, 43, 0.9) 100%)', 
        border: '1px solid rgba(168, 85, 247, 0.4)', 
        borderRadius: '16px', 
        padding: '14px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Sparkles size={24} style={{ color: '#c084fc' }} />
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#f3e8ff' }}>{t.llmAssistant}</div>
            <div style={{ fontSize: '0.75rem', color: '#d8b4fe' }}>
              {apiKey ? t.liveGemini : t.builtInRules}
            </div>
          </div>
        </div>

        <button 
          onClick={() => setShowApiKeyModal(true)}
          style={{ background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', color: '#fff', borderRadius: '8px', padding: '6px 10px', fontSize: '0.75rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
        >
          <Key size={12} /> Key
        </button>
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          className={`btn ${activeSubTab === 'steps' ? 'btn-primary' : 'btn-secondary'}`}
          style={{ flex: 1 }}
          onClick={() => setActiveSubTab('steps')}
        >
          {currentPhase === 'night' ? <Moon size={16} /> : <Sun size={16} />} {t.phaseWalkthrough}
        </button>
        <button
          className={`btn ${activeSubTab === 'advisor' ? 'btn-primary' : 'btn-secondary'}`}
          style={{ flex: 1, position: 'relative' }}
          onClick={() => setActiveSubTab('advisor')}
        >
          <ShieldAlert size={16} /> {t.difficultyAdvisor}
          {overrides.length > 0 && (
            <span style={{ position: 'absolute', top: -4, right: -4, background: '#ef4444', color: '#fff', fontSize: '0.65rem', borderRadius: '10px', padding: '1px 6px', fontWeight: 800 }}>
              {overrides.length}
            </span>
          )}
        </button>
      </div>

      {activeSubTab === 'steps' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 4px' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              {currentPhase === 'night' ? `${t.night} ${dayNumber}` : `${t.day} ${dayNumber}`}
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--accent-gold)' }}>
              {completedSteps.size} / {steps.length} Done
            </span>
          </div>

          {steps.map((step, idx) => {
            const isDone = completedSteps.has(step.id);
            return (
              <div
                key={step.id}
                onClick={() => handleToggleStep(step.id)}
                style={{
                  background: isDone ? 'rgba(16, 185, 129, 0.08)' : 'var(--bg-card)',
                  border: `1px solid ${isDone ? 'rgba(16, 185, 129, 0.4)' : 'var(--border-color)'}`,
                  borderRadius: '12px',
                  padding: '14px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ marginTop: '2px' }}>
                  {isDone ? <CheckCircle2 size={20} color="#10b981" /> : <Circle size={20} color="var(--text-muted)" />}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <span style={{ fontWeight: 700, fontSize: '0.9rem', color: isDone ? '#10b981' : 'var(--text-primary)', textDecoration: isDone ? 'line-through' : 'none' }}>
                      {idx + 1}. {step.title}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                    {step.instruction}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {activeSubTab === 'advisor' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {overrides.map(rec => (
            <div
              key={rec.id}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--accent-gold)',
                borderRadius: '14px',
                padding: '14px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--accent-gold)' }}>
                  {rec.title}
                </span>
                <span style={{ fontSize: '0.65rem', background: 'rgba(239, 68, 68, 0.2)', color: '#ef4444', border: '1px solid #ef4444', padding: '2px 8px', borderRadius: '10px', fontWeight: 700 }}>
                  {rec.impact}
                </span>
              </div>

              <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', lineHeight: '1.45' }}>
                {rec.advice}
              </p>
            </div>
          ))}
        </div>
      )}

      {showApiKeyModal && (
        <div className="modal-overlay" onClick={() => setShowApiKeyModal(false)}>
          <div className="modal-sheet" onClick={e => e.stopPropagation()}>
            <h3 className="font-serif" style={{ color: 'var(--accent-gold)', marginBottom: '12px' }}>Gemini LLM Settings</h3>
            <input
              type="password"
              placeholder="Enter Gemini API Key..."
              value={apiKey}
              onChange={e => setApiKey(e.target.value)}
              style={{ width: '100%', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '10px 12px', color: '#fff', marginBottom: '14px' }}
            />
            <div style={{ display: 'flex', gap: '10px' }}>
              <button className="btn btn-primary" style={{ flex: 1 }} onClick={handleSaveApiKey}>Save Key</button>
              <button className="btn btn-secondary" style={{ flex: 1 }} onClick={() => setShowApiKeyModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
