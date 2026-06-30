import React, { useState } from 'react';
import { UserCheck, Eye, EyeOff, CheckCircle2, RotateCcw, Shield, ArrowRight, Smartphone, Lock } from 'lucide-react';
import { getLocalizedRole } from '../services/aiGuideService';
import { UI_TRANSLATIONS } from '../data/translations';

export default function PlayerSetupMode({ players, setPlayers, scriptRoles, onFinishSetup, language }) {
  const [currentSeatIndex, setCurrentSeatIndex] = useState(0);
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.en;
  const isVi = language === 'vi';

  const defaultPlayerName = isVi ? `Người chơi ${currentSeatIndex + 1}` : `Player ${currentSeatIndex + 1}`;

  const [playerNameInput, setPlayerNameInput] = useState(players[0]?.name || defaultPlayerName);
  const [isRevealed, setIsRevealed] = useState(false);

  const currentPlayer = players[currentSeatIndex] || { id: `p-${currentSeatIndex + 1}`, name: defaultPlayerName, role: scriptRoles[currentSeatIndex] || null };
  const localizedRole = getLocalizedRole(currentPlayer.role, language);

  const handleNextPlayer = () => {
    // Save current player name and role
    const updatedPlayers = [...players];
    updatedPlayers[currentSeatIndex] = {
      ...currentPlayer,
      name: playerNameInput.trim() || defaultPlayerName,
      role: currentPlayer.role || scriptRoles[currentSeatIndex] || null,
      isAlive: true,
      hasGhostVote: true,
      tokens: []
    };
    setPlayers(updatedPlayers);

    // Proceed to next player and AUTOMATICALLY reset reveal state to hide the token!
    if (currentSeatIndex < players.length - 1) {
      const nextIdx = currentSeatIndex + 1;
      setCurrentSeatIndex(nextIdx);
      const nextDefaultName = isVi ? `Người chơi ${nextIdx + 1}` : `Player ${nextIdx + 1}`;
      setPlayerNameInput(players[nextIdx]?.name || nextDefaultName);
      setIsRevealed(false); // Instantly hide the role for the next player!
    } else {
      // All players finished setup: show secure Storyteller lock screen
      setIsSetupComplete(true);
    }
  };

  if (isSetupComplete) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px 0', textAlign: 'center', animation: 'fadeIn 0.3s ease' }}>
        <div style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(26, 29, 43, 0.9) 100%)', border: '1px solid #10b981', borderRadius: '20px', padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
          <Lock size={48} color="#10b981" />
          <h2 className="font-serif" style={{ color: '#10b981', fontSize: '1.4rem' }}>
            {isVi ? 'Setup Hoàn Tất & Đã Khóa Bảo Mật!' : 'Setup Complete & Locked!'}
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: '1.5' }}>
            {isVi 
              ? 'Tất cả thẻ nhân vật đã được ẩn an toàn. Hãy đưa máy lại cho Quản Trò (Storyteller) để bắt đầu game.'
              : 'All character tokens are securely hidden. Please hand the phone back to the Storyteller to begin.'}
          </p>
        </div>

        <button 
          className="btn btn-primary" 
          style={{ width: '100%', padding: '16px', fontSize: '1.05rem', marginTop: '10px' }} 
          onClick={onFinishSetup}
        >
          <Shield size={20} /> {isVi ? 'Quản Trò Mở Sổ Sách Grimoire 📖' : 'Storyteller Open Grimoire 📖'}
        </button>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '10px 0' }}>
      <div style={{ background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(26, 29, 43, 0.9) 100%)', border: '1px solid var(--accent-gold)', borderRadius: '16px', padding: '16px', textAlign: 'center' }}>
        <Smartphone size={32} style={{ color: 'var(--accent-gold)', marginBottom: '8px' }} />
        <h2 className="font-serif" style={{ color: 'var(--accent-gold)', fontSize: '1.2rem', marginBottom: '4px' }}>
          {t.playerSetupTitle}
        </h2>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
          {t.playerSetupDesc.replace('{seat}', currentSeatIndex + 1).replace('{total}', players.length)}
        </p>
      </div>

      <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-gold)', display: 'block', marginBottom: '6px' }}>
            {t.playerName} ({isVi ? 'Ghế' : 'Seat'} {currentSeatIndex + 1})
          </label>
          <input
            type="text"
            value={playerNameInput}
            onChange={e => setPlayerNameInput(e.target.value)}
            placeholder={isVi ? 'Nhập tên...' : 'Enter name...'}
            style={{ width: '100%', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '12px 14px', color: '#fff', fontSize: '1rem', fontWeight: 600 }}
          />
        </div>

        <div style={{ background: 'var(--bg-primary)', border: '1px dashed var(--border-glow)', borderRadius: '14px', padding: '20px', textAlign: 'center', minHeight: '180px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
          {!isRevealed ? (
            <>
              <Shield size={40} color="var(--accent-gold)" />
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                {t.hiddenDesc}
              </div>
              <button className="btn btn-outline-gold" onClick={() => setIsRevealed(true)}>
                <Eye size={18} /> {t.tapToReveal}
              </button>
            </>
          ) : (
            <>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', animation: 'fadeIn 0.3s ease' }}>
                {localizedRole?.image ? (
                  <div style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '50%',
                    background: '#1c1f2e',
                    backgroundImage: 'url(/img/token/character-token-noise.webp)',
                    backgroundSize: 'cover',
                    border: `3px solid var(--align-${localizedRole.type})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '6px',
                    boxShadow: `0 0 16px var(--align-${localizedRole.type})60`
                  }}>
                    <img src={localizedRole.image} alt={localizedRole.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                ) : (
                  <Shield size={48} color="var(--accent-gold)" />
                )}

                <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: `var(--align-${localizedRole?.type || 'townsfolk'})` }}>
                  {localizedRole?.type}
                </div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent-gold)' }}>
                  {localizedRole ? localizedRole.name : (isVi ? 'Dân Làng' : 'Villager')}
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontStyle: 'italic', maxWidth: '280px', lineHeight: '1.4' }}>
                  "{localizedRole ? localizedRole.ability : ''}"
                </p>
              </div>

              <button className="btn btn-secondary btn-sm" style={{ marginTop: '8px' }} onClick={() => setIsRevealed(false)}>
                <EyeOff size={14} /> {t.hideToken}
              </button>
            </>
          )}
        </div>

        <button className="btn btn-primary" style={{ width: '100%', padding: '14px', fontSize: '1rem' }} onClick={handleNextPlayer}>
          {currentSeatIndex < players.length - 1 ? (
            <>{isVi ? 'Xác Nhận & Chuyển Người Tiếp Theo' : 'Confirm & Next Player'} <ArrowRight size={18} /></>
          ) : (
            <>{t.completeSetup} <CheckCircle2 size={18} /></>
          )}
        </button>
      </div>
    </div>
  );
}
