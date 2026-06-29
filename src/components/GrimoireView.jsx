import React, { useState } from 'react';
import { Skull, Heart, Shield, AlertCircle, Plus, Edit2, RotateCw, List, Circle, User, Smartphone, ArrowUpDown } from 'lucide-react';
import { getLocalizedRole } from '../services/aiGuideService';
import { UI_TRANSLATIONS } from '../data/translations';

export default function GrimoireView({ players, setPlayers, scriptRoles, onOpenRolePicker, onStartPlayerSetup, language }) {
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'circle'
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);
  const [editingPlayerName, setEditingPlayerName] = useState('');

  const [draggedPlayerIndex, setDraggedPlayerIndex] = useState(null);
  const [dragOverPlayerIndex, setDragOverPlayerIndex] = useState(null);

  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.en;
  const selectedPlayer = players.find(p => p.id === selectedPlayerId);

  const handleToggleAlive = (id) => {
    setPlayers(players.map(p => p.id === id ? { ...p, isAlive: !p.isAlive } : p));
  };

  const handleToggleGhostVote = (id) => {
    setPlayers(players.map(p => p.id === id ? { ...p, hasGhostVote: !p.hasGhostVote } : p));
  };

  const handleAddToken = (id, tokenName) => {
    setPlayers(players.map(p => {
      if (p.id === id) {
        const tokens = p.tokens || [];
        if (tokens.includes(tokenName)) {
          return { ...p, tokens: tokens.filter(t => t !== tokenName) };
        } else {
          return { ...p, tokens: [...tokens, tokenName] };
        }
      }
      return p;
    }));
  };

  const handleSaveName = (id) => {
    if (!editingPlayerName.trim()) return;
    setPlayers(players.map(p => p.id === id ? { ...p, name: editingPlayerName.trim() } : p));
    setEditingPlayerName('');
  };

  const handleDragStart = (e, index) => {
    setDraggedPlayerIndex(index);
    e.dataTransfer.setData('text/plain', index);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (dragOverPlayerIndex !== index) {
      setDragOverPlayerIndex(index);
    }
  };

  const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    if (draggedPlayerIndex === null || draggedPlayerIndex === targetIndex) {
      setDraggedPlayerIndex(null);
      setDragOverPlayerIndex(null);
      return;
    }

    const newPlayers = [...players];
    const temp = newPlayers[draggedPlayerIndex];
    newPlayers[draggedPlayerIndex] = newPlayers[targetIndex];
    newPlayers[targetIndex] = temp;

    setPlayers(newPlayers);
    setDraggedPlayerIndex(null);
    setDragOverPlayerIndex(null);
  };

  const handleMoveSeat = (fromIndex, direction) => {
    const toIndex = direction === 'left' 
      ? (fromIndex - 1 + players.length) % players.length
      : (fromIndex + 1) % players.length;

    const newPlayers = [...players];
    const temp = newPlayers[fromIndex];
    newPlayers[fromIndex] = newPlayers[toIndex];
    newPlayers[toIndex] = temp;
    setPlayers(newPlayers);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Top Toolbar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-card)', padding: '10px 14px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
        <div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
            {t.seatedPlayers} ({players.length})
          </span>
          <div style={{ fontSize: '0.75rem', color: 'var(--accent-gold)' }}>
            {t.alive}: {players.filter(p => p.isAlive).length} | {t.dead}: {players.filter(p => !p.isAlive).length}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '6px' }}>
          <button className="btn btn-outline-gold btn-sm" onClick={onStartPlayerSetup} title="Pass-the-phone player setup">
            <Smartphone size={14} /> {t.passPhone}
          </button>
          <button
            className={`btn btn-sm ${viewMode === 'list' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setViewMode('list')}
          >
            <List size={14} />
          </button>
          <button
            className={`btn btn-sm ${viewMode === 'circle' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setViewMode('circle')}
          >
            <Circle size={14} />
          </button>
        </div>
      </div>

      {/* CIRCLE RING VIEW */}
      {viewMode === 'circle' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center' }}>
            {t.dragHint}
          </div>

          <div style={{ 
            position: 'relative', 
            height: '360px', 
            background: 'radial-gradient(circle, #1a1d2b 0%, #090a0f 70%)', 
            borderRadius: '20px', 
            border: '1px solid var(--border-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', color: 'rgba(212, 175, 55, 0.08)', textAlign: 'center' }}>
              <Skull size={130} />
              <div className="font-serif" style={{ fontSize: '0.95rem', marginTop: '4px', letterSpacing: '2px' }}>POCKET GRIMOIRE</div>
            </div>

            {players.map((player, idx) => {
              const localized = getLocalizedRole(player.role, language);
              const total = players.length;
              const angle = (idx / total) * 2 * Math.PI - Math.PI / 2;
              const radius = 130;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              const alignment = localized?.type || 'townsfolk';
              let borderColor = 'var(--align-townsfolk)';
              if (alignment === 'outsider') borderColor = 'var(--align-outsider)';
              if (alignment === 'minion') borderColor = 'var(--align-minion)';
              if (alignment === 'demon') borderColor = 'var(--align-demon)';

              const isDragging = draggedPlayerIndex === idx;
              const isDragOver = dragOverPlayerIndex === idx;

              return (
                <div
                  key={player.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, idx)}
                  onDragOver={(e) => handleDragOver(e, idx)}
                  onDrop={(e) => handleDrop(e, idx)}
                  onClick={() => setSelectedPlayerId(player.id)}
                  style={{
                    position: 'absolute',
                    transform: `translate(${x}px, ${y}px) scale(${isDragOver ? 1.2 : isDragging ? 0.85 : 1})`,
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: player.isAlive ? '#1c1f2e' : '#140c0e',
                    backgroundImage: 'url(/img/token/character-token-noise.webp)',
                    backgroundSize: 'cover',
                    border: `3px solid ${isDragOver ? '#f59e0b' : player.isAlive ? borderColor : '#4b5563'}`,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'grab',
                    boxShadow: isDragOver ? '0 0 20px #f59e0b' : player.isAlive ? `0 0 14px ${borderColor}60` : 'none',
                    opacity: isDragging ? 0.4 : player.isAlive ? 1 : 0.6,
                    transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                    padding: '2px',
                    zIndex: isDragOver ? 20 : 10
                  }}
                >
                  {!player.isAlive && (
                    <div style={{ position: 'absolute', top: -6, right: -6, background: '#ef4444', borderRadius: '50%', padding: '2px', boxShadow: '0 0 6px #000', zIndex: 5 }}>
                      <Skull size={12} color="#fff" />
                    </div>
                  )}
                  
                  {localized?.image ? (
                    <img 
                      src={localized.image} 
                      alt={localized.name} 
                      style={{ width: '36px', height: '36px', objectFit: 'contain', pointerEvents: 'none' }}
                    />
                  ) : (
                    <User size={22} color="var(--text-muted)" style={{ pointerEvents: 'none' }} />
                  )}

                  <div style={{ fontSize: '0.6rem', fontWeight: 800, textAlign: 'center', padding: '0 2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '56px', color: '#fff', textShadow: '0 1px 3px #000', pointerEvents: 'none' }}>
                    {player.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* LIST VIEW */}
      {viewMode === 'list' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {players.map((player, idx) => {
            const localized = getLocalizedRole(player.role, language);
            const alignment = localized?.type || 'townsfolk';
            return (
              <div
                key={player.id}
                style={{
                  background: 'var(--bg-card)',
                  border: `1px solid ${selectedPlayerId === player.id ? 'var(--accent-gold)' : 'var(--border-color)'}`,
                  borderRadius: '12px',
                  padding: '12px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '10px',
                  opacity: player.isAlive ? 1 : 0.65,
                  transition: 'all 0.2s ease'
                }}
                onClick={() => setSelectedPlayerId(player.id)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                  {localized?.image ? (
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: '#1c1f2e',
                      backgroundImage: 'url(/img/token/character-token-noise.webp)',
                      backgroundSize: 'cover',
                      border: `2px solid var(--align-${alignment})`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      padding: '4px',
                      boxShadow: `0 0 8px var(--align-${alignment})40`
                    }}>
                      <img src={localized.image} alt={localized.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                  ) : (
                    <div style={{ 
                      width: '48px', 
                      height: '48px', 
                      borderRadius: '50%', 
                      background: 'var(--bg-secondary)', 
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      color: 'var(--accent-gold)',
                      flexShrink: 0
                    }}>
                      {idx + 1}
                    </div>
                  )}

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontWeight: 700, fontSize: '0.95rem', color: player.isAlive ? 'var(--text-primary)' : 'var(--text-muted)', textDecoration: player.isAlive ? 'none' : 'line-through' }}>
                        {player.name}
                      </span>
                      {localized && (
                        <span className={`badge-align ${alignment}`}>
                          {alignment}
                        </span>
                      )}
                    </div>

                    <div style={{ fontSize: '0.8rem', color: localized ? 'var(--accent-gold-light)' : 'var(--text-muted)', marginTop: '2px', fontWeight: 600 }}>
                      {localized ? localized.name : 'Tap to set role...'}
                    </div>

                    {player.tokens && player.tokens.length > 0 && (
                      <div style={{ display: 'flex', gap: '4px', marginTop: '6px', flexWrap: 'wrap' }}>
                        {player.tokens.map(tokenItem => (
                          <span key={tokenItem} style={{ fontSize: '0.65rem', background: 'rgba(212, 175, 55, 0.15)', color: 'var(--accent-gold)', padding: '2px 6px', borderRadius: '4px', border: '1px solid var(--border-glow)' }}>
                            {tokenItem}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }} onClick={e => e.stopPropagation()}>
                  <button
                    onClick={() => handleMoveSeat(idx, 'left')}
                    title="Swap seat with previous player"
                    style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)', color: 'var(--text-secondary)', borderRadius: '6px', padding: '6px', cursor: 'pointer' }}
                  >
                    <ArrowUpDown size={14} />
                  </button>
                  <button
                    onClick={() => handleToggleAlive(player.id)}
                    style={{
                      background: player.isAlive ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                      border: `1px solid ${player.isAlive ? '#10b981' : '#ef4444'}`,
                      color: player.isAlive ? '#10b981' : '#ef4444',
                      borderRadius: '8px',
                      padding: '6px 10px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.75rem',
                      fontWeight: 600
                    }}
                  >
                    {player.isAlive ? <Heart size={14} /> : <Skull size={14} />}
                    {player.isAlive ? t.alive : t.dead}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* PLAYER DETAIL MODAL SHEET */}
      {selectedPlayer && (() => {
        const localized = getLocalizedRole(selectedPlayer.role, language);
        return (
          <div className="modal-overlay" onClick={() => setSelectedPlayerId(null)}>
            <div className="modal-sheet" onClick={e => e.stopPropagation()}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {localized?.image && (
                    <img src={localized.image} alt="" style={{ width: '36px', height: '36px' }} />
                  )}
                  <h3 className="font-serif" style={{ color: 'var(--accent-gold)', fontSize: '1.2rem' }}>
                    {t.manage} {selectedPlayer.name}
                  </h3>
                </div>
                <button onClick={() => setSelectedPlayerId(null)} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '1.2rem', cursor: 'pointer' }}>✕</button>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>{t.playerName}</label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input
                    type="text"
                    defaultValue={selectedPlayer.name}
                    onChange={e => setEditingPlayerName(e.target.value)}
                    style={{ flex: 1, background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '8px 12px', color: '#fff', fontSize: '0.9rem' }}
                  />
                  <button className="btn btn-secondary btn-sm" onClick={() => handleSaveName(selectedPlayer.id)}>{t.save}</button>
                </div>
              </div>

              <div style={{ marginBottom: '16px', background: 'var(--bg-primary)', padding: '12px', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {localized?.image && (
                      <img src={localized.image} alt="" style={{ width: '44px', height: '44px' }} />
                    )}
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{t.assignedCharacter}</div>
                      <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--accent-gold)' }}>
                        {localized ? localized.name : 'Unassigned'}
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-outline-gold btn-sm" onClick={() => { setSelectedPlayerId(null); onOpenRolePicker(selectedPlayer.id); }}>
                    {t.changeRole}
                  </button>
                </div>
                {localized && (
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '8px', fontStyle: 'italic' }}>
                    "{localized.ability}"
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)' }}>{t.statusReminders}</div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {['Poisoned', 'Drunk', 'Safe', 'Madness', 'Demon Bluff'].map(tokenItem => {
                    const active = selectedPlayer.tokens?.includes(tokenItem);
                    return (
                      <button
                        key={tokenItem}
                        onClick={() => handleAddToken(selectedPlayer.id, tokenItem)}
                        style={{
                          background: active ? 'var(--accent-gold)' : 'var(--bg-primary)',
                          color: active ? '#000' : 'var(--text-primary)',
                          border: '1px solid var(--border-color)',
                          padding: '6px 12px',
                          borderRadius: '20px',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          cursor: 'pointer'
                        }}
                      >
                        {active ? '✓ ' : '+ '}{tokenItem}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-primary)', padding: '10px 14px', borderRadius: '10px' }}>
                <span style={{ fontSize: '0.85rem' }}>{t.ghostVoteToken}</span>
                <button
                  className={`btn btn-sm ${selectedPlayer.hasGhostVote ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => handleToggleGhostVote(selectedPlayer.id)}
                >
                  {selectedPlayer.hasGhostVote ? t.ghostVoteAvailable : t.voteUsed}
                </button>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}
