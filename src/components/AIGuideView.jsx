import React, { useState } from 'react';
import { generateStepByStepGuide, generateAIStrategicOverrides, DEFAULT_AI_KEY } from '../services/aiGuideService';
import { UI_TRANSLATIONS } from '../data/translations';
import { Sparkles, Moon, Sun, CheckCircle2, Circle, ShieldAlert, Key, Zap, Info, Edit3, Target, Scale, Shield, Skull, Plus, Globe, Cpu, Lock } from 'lucide-react';

export default function AIGuideView({ currentPhase, dayNumber, players, language }) {
  const [activeSubTab, setActiveSubTab] = useState('steps'); // 'steps', 'advisor', 'notes'
  const [completedSteps, setCompletedSteps] = useState(new Set());
  const [apiKey, setApiKey] = useState(localStorage.getItem('gemini_api_key') || DEFAULT_AI_KEY);
  const [showApiKeyModal, setShowApiKeyModal] = useState(false);

  // Strategic Win Goal & Storyteller Journal Notes State
  const [targetGoal, setTargetGoal] = useState('balanced'); // 'balanced', 'good_win', 'evil_win'
  const [gameNotes, setGameNotes] = useState(localStorage.getItem('storyteller_notes') || '');

  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.en;
  const isVi = language === 'vi';

  const steps = generateStepByStepGuide(currentPhase, dayNumber, players, language);
  const overrides = generateAIStrategicOverrides(players, language, targetGoal, gameNotes);

  const handleToggleStep = (id) => {
    const next = new Set(completedSteps);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setCompletedSteps(next);
  };

  const handleSaveNotes = (text) => {
    setGameNotes(text);
    localStorage.setItem('storyteller_notes', text);
  };

  const handleAddQuickTag = (tagText) => {
    const updated = gameNotes ? `${gameNotes}\n• ${tagText}` : `• ${tagText}`;
    handleSaveNotes(updated);
  };

  const handleSaveApiKey = () => {
    localStorage.setItem('gemini_api_key', apiKey);
    setShowApiKeyModal(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* AI ASSISTANT BANNER */}
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
            <div style={{ fontSize: '0.75rem', color: '#d8b4fe', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Lock size={12} color="#10b981" /> {isVi ? 'Đã Bảo Mật Qua Vercel Env Var' : 'Secured via Vercel Env Var'}
            </div>
          </div>
        </div>

        <button 
          onClick={() => setShowApiKeyModal(true)}
          style={{ background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', color: '#fff', borderRadius: '8px', padding: '6px 10px', fontSize: '0.75rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
        >
          <Cpu size={12} /> Key
        </button>
      </div>

      {/* STRATEGIC WIN GOAL SELECTOR */}
      <div style={{ background: 'var(--bg-card)', padding: '12px 14px', borderRadius: '14px', border: '1px solid var(--border-color)' }}>
        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-gold)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Target size={14} /> {isVi ? 'Mục Tiêu Kết Quả Của Trận Đấu' : 'Strategic Game Outcome Goal'}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
          <button
            onClick={() => setTargetGoal('balanced')}
            style={{
              padding: '8px 4px',
              borderRadius: '8px',
              background: targetGoal === 'balanced' ? 'var(--accent-gold)' : 'var(--bg-primary)',
              color: targetGoal === 'balanced' ? '#000' : 'var(--text-primary)',
              border: '1px solid var(--border-color)',
              fontSize: '0.75rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px'
            }}
          >
            <Scale size={14} /> {isVi ? 'Cân Bằng 50/50' : 'Balanced'}
          </button>
          <button
            onClick={() => setTargetGoal('good_win')}
            style={{
              padding: '8px 4px',
              borderRadius: '8px',
              background: targetGoal === 'good_win' ? '#3b82f6' : 'var(--bg-primary)',
              color: targetGoal === 'good_win' ? '#fff' : 'var(--text-primary)',
              border: '1px solid var(--border-color)',
              fontSize: '0.75rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px'
            }}
          >
            <Shield size={14} /> {isVi ? 'Cho Dân Thắng' : 'Good Win'}
          </button>
          <button
            onClick={() => setTargetGoal('evil_win')}
            style={{
              padding: '8px 4px',
              borderRadius: '8px',
              background: targetGoal === 'evil_win' ? '#ef4444' : 'var(--bg-primary)',
              color: targetGoal === 'evil_win' ? '#fff' : 'var(--text-primary)',
              border: '1px solid var(--border-color)',
              fontSize: '0.75rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px'
            }}
          >
            <Skull size={14} /> {isVi ? 'Cho Quỷ Thắng' : 'Evil Win'}
          </button>
        </div>
      </div>

      {/* SUB TAB NAVIGATION */}
      <div style={{ display: 'flex', gap: '6px' }}>
        <button
          className={`btn btn-sm ${activeSubTab === 'steps' ? 'btn-primary' : 'btn-secondary'}`}
          style={{ flex: 1 }}
          onClick={() => setActiveSubTab('steps')}
        >
          {currentPhase === 'night' ? <Moon size={14} /> : <Sun size={14} />} {t.phaseWalkthrough}
        </button>
        <button
          className={`btn btn-sm ${activeSubTab === 'advisor' ? 'btn-primary' : 'btn-secondary'}`}
          style={{ flex: 1, position: 'relative' }}
          onClick={() => setActiveSubTab('advisor')}
        >
          <ShieldAlert size={14} /> {t.difficultyAdvisor}
          {overrides.length > 0 && (
            <span style={{ position: 'absolute', top: -4, right: -4, background: '#ef4444', color: '#fff', fontSize: '0.65rem', borderRadius: '10px', padding: '1px 6px', fontWeight: 800 }}>
              {overrides.length}
            </span>
          )}
        </button>
        <button
          className={`btn btn-sm ${activeSubTab === 'notes' ? 'btn-primary' : 'btn-secondary'}`}
          style={{ flex: 1 }}
          onClick={() => setActiveSubTab('notes')}
        >
          <Edit3 size={14} /> {isVi ? 'Nhật Ký Note' : 'Notes'}
        </button>
      </div>

      {/* TAB 1: PHASE WALKTHROUGH STEPS */}
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

      {/* TAB 2: AI STRATEGIC OVERRIDES */}
      {activeSubTab === 'advisor' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ background: 'var(--bg-card)', padding: '12px 14px', borderRadius: '12px', border: '1px solid var(--border-color)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            💡 <strong style={{ color: 'var(--accent-gold)' }}>AI Strategic Guidance:</strong> {isVi ? 'AI đang hoạt động bảo mật qua Biến Môi Trường Vercel!' : 'AI operates securely via Vercel Environment Variables!'}
          </div>

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

      {/* TAB 3: STORYTELLER LIVE NOTES JOURNAL */}
      {activeSubTab === 'notes' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ background: 'var(--bg-card)', padding: '14px', borderRadius: '14px', border: '1px solid var(--border-color)' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-gold)', display: 'block', marginBottom: '8px' }}>
              📝 {isVi ? 'Nhật Ký Diễn Biến Của Quản Trò' : 'Storyteller Live Game Journal'}
            </label>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
              {isVi ? 'Ghi chú các biến số trận đấu (ví dụ: "Chef chết sớm Đêm 1", "Bảo bị nghi ngờ fake Tiên Tri"). AI sẽ đọc ghi chú này để điều chỉnh chiến thuật!' : 'Write down live game events. AI will read these notes to adapt strategy!'}
            </p>

            <textarea
              rows={6}
              value={gameNotes}
              onChange={e => handleSaveNotes(e.target.value)}
              placeholder={isVi ? 'Nhập ghi chú biến số trận đấu tại đây...' : 'Type live match variables here...'}
              style={{ width: '100%', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '12px', color: '#fff', fontSize: '0.85rem', lineHeight: '1.5', resize: 'vertical' }}
            />

            <div style={{ marginTop: '12px' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '6px' }}>
                ⚡ {isVi ? 'Chạm Thêm Nhanh Biến Số:' : 'Quick Insert Variable Tags:'}
              </div>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {[
                  isVi ? 'Chef chết đêm 1' : 'Chef died night 1',
                  isVi ? 'Quỷ bị nghi ngờ' : 'Demon suspected',
                  isVi ? 'Dân nghi ngờ lẫn nhau' : 'Townsfolk paranoiac',
                  isVi ? 'Cần cứu phe Quỷ' : 'Need save Evil',
                  isVi ? 'Đã lộ Tiên Tri' : 'Fortune Teller claimed'
                ].map(tag => (
                  <button
                    key={tag}
                    onClick={() => handleAddQuickTag(tag)}
                    style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)', color: 'var(--accent-gold)', borderRadius: '16px', padding: '4px 10px', fontSize: '0.7rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
                  >
                    <Plus size={10} /> {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* AI MODEL MODAL */}
      {showApiKeyModal && (
        <div className="modal-overlay" onClick={() => setShowApiKeyModal(false)}>
          <div className="modal-sheet" onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <h3 className="font-serif" style={{ color: 'var(--accent-gold)' }}>
                {isVi ? 'Cấu Hình Bảo Mật AI Key' : 'Secure AI Key Config'}
              </h3>
              <button onClick={() => setShowApiKeyModal(false)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>✕</button>
            </div>

            <div style={{ background: 'rgba(16, 185, 129, 0.12)', border: '1px solid #10b981', borderRadius: '12px', padding: '12px', marginBottom: '14px' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#10b981', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Lock size={16} /> {isVi ? 'Bảo Mật Bằng Biến Môi Trường Vercel:' : 'Secured via Vercel Env Var:'}
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: '1.4' }}>
                {isVi 
                  ? 'Key của bạn được bảo mật tuyệt đối dưới dạng biến môi Trường VITE_GEMINI_API_KEY trên Vercel. Mã nguồn công khai sẽ không chứa key!'
                  : 'Your key is securely injected via VITE_GEMINI_API_KEY Vercel environment variable.'}
              </p>
            </div>

            <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>
              {isVi ? 'Ghi Đè API Key Khác (Tùy Chọn)' : 'Override Custom API Key (Optional)'}
            </label>
            <input
              type="password"
              placeholder="Enter custom key..."
              value={apiKey}
              onChange={e => setApiKey(e.target.value)}
              style={{ width: '100%', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '10px 12px', color: '#fff', marginBottom: '14px' }}
            />
            <div style={{ display: 'flex', gap: '10px' }}>
              <button className="btn btn-primary" style={{ flex: 1 }} onClick={handleSaveApiKey}>{isVi ? 'Lưu Cấu Hình' : 'Save Config'}</button>
              <button className="btn btn-secondary" style={{ flex: 1 }} onClick={() => setShowApiKeyModal(false)}>{isVi ? 'Hủy' : 'Cancel'}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
