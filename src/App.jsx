import React, { useState, useEffect } from 'react';
import MobileHeader from './components/MobileHeader';
import MobileNavBar from './components/MobileNavBar';
import GrimoireView from './components/GrimoireView';
import ScriptBuilderView from './components/ScriptBuilderView';
import AIGuideView from './components/AIGuideView';
import RoleAlmanacView from './components/RoleAlmanacView';
import PlayerSetupMode from './components/PlayerSetupMode';
import ShareScriptModal from './components/ShareScriptModal';
import { EDITIONS, ALL_ROLES } from './data/editionsAndRoles';
import { generateRandomScript, getLocalizedRole } from './services/aiGuideService';

export default function App() {
  const [activeTab, setActiveTab] = useState('grimoire');
  const [currentPhase, setCurrentPhase] = useState('night'); // 'night' or 'day'
  const [dayNumber, setDayNumber] = useState(1);
  const [playerCount, setPlayerCount] = useState(7);
  const [activeEdition, setActiveEdition] = useState('tb');
  const [language, setLanguage] = useState(localStorage.getItem('app_lang') || 'vi');

  // Active script and players setup
  const [activeScriptRoles, setActiveScriptRoles] = useState([]);
  const [players, setPlayers] = useState([]);
  const [isPlayerSetupActive, setIsPlayerSetupActive] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  // Role picker state for Grimoire player assignment
  const [rolePickerTargetPlayerId, setRolePickerTargetPlayerId] = useState(null);

  // Handle language change
  const handleSetLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('app_lang', lang);
  };

  // Initialize script and players on mount + check for shared URL parameters
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const viewParam = params.get('view');
    const editionParam = params.get('edition');
    const rolesParam = params.get('roles');

    if (viewParam === 'almanac' && rolesParam) {
      const roleIdList = rolesParam.split(',');
      const matchedRoles = roleIdList.map(id => ALL_ROLES.find(r => r.id === id)).filter(Boolean);
      if (matchedRoles.length > 0) {
        setActiveScriptRoles(matchedRoles);
        if (editionParam) setActiveEdition(editionParam);
        setActiveTab('almanac');
        
        // Setup initial default players for this shared script
        const defaultNames = Array.from({ length: matchedRoles.length }).map((_, i) => language === 'vi' ? `Người chơi ${i + 1}` : `Player ${i + 1}`);
        setPlayers(defaultNames.map((name, i) => ({
          id: `p-${i + 1}`,
          name,
          role: matchedRoles[i] || null,
          isAlive: true,
          hasGhostVote: true,
          tokens: []
        })));
        return;
      }
    }

    // Default setup if no share URL params
    const initialRoles = generateRandomScript(7, 'tb');
    setActiveScriptRoles(initialRoles);

    const defaultNames = ['Bảo', 'Chi', 'Dũng', 'Hà', 'Khang', 'Linh', 'Minh'];
    const initialPlayers = defaultNames.map((name, i) => ({
      id: `p-${i + 1}`,
      name,
      role: initialRoles[i] || null,
      isAlive: true,
      hasGhostVote: true,
      tokens: []
    }));
    setPlayers(initialPlayers);
  }, []);

  const handleTogglePhase = () => {
    if (currentPhase === 'night') {
      setCurrentPhase('day');
    } else {
      setCurrentPhase('night');
      setDayNumber(prev => prev + 1);
    }
  };

  const handlePreviousPhase = () => {
    if (currentPhase === 'day') {
      setCurrentPhase('night');
    } else if (currentPhase === 'night' && dayNumber > 1) {
      setCurrentPhase('day');
      setDayNumber(prev => prev - 1);
    }
  };

  const handleApplyScriptToGrimoire = () => {
    const updatedPlayers = Array.from({ length: playerCount }).map((_, i) => {
      const existing = players[i];
      return {
        id: existing ? existing.id : `p-${i + 1}`,
        name: existing ? existing.name : `Người chơi ${i + 1}`,
        role: activeScriptRoles[i] || null,
        isAlive: existing ? existing.isAlive : true,
        hasGhostVote: existing ? existing.hasGhostVote : true,
        tokens: existing ? existing.tokens : []
      };
    });
    setPlayers(updatedPlayers);
    setIsPlayerSetupActive(true);
  };

  const handleOpenRolePicker = (playerId) => {
    setRolePickerTargetPlayerId(playerId);
  };

  const handleAssignRoleToPlayer = (role) => {
    setPlayers(players.map(p => p.id === rolePickerTargetPlayerId ? { ...p, role } : p));
    setRolePickerTargetPlayerId(null);
  };

  const activeEditionName = EDITIONS.find(e => e.id === activeEdition)?.name || 'Trouble Brewing';

  return (
    <>
      <MobileHeader
        currentPhase={currentPhase}
        dayNumber={dayNumber}
        onTogglePhase={handleTogglePhase}
        onPreviousPhase={handlePreviousPhase}
        editionName={activeEditionName}
        onOpenSettings={() => setActiveTab('script')}
        language={language}
        setLanguage={handleSetLanguage}
      />

      <main className="app-body">
        {isPlayerSetupActive ? (
          <PlayerSetupMode
            players={players}
            setPlayers={setPlayers}
            scriptRoles={activeScriptRoles}
            language={language}
            onFinishSetup={() => {
              setIsPlayerSetupActive(false);
              setActiveTab('grimoire');
            }}
          />
        ) : (
          <>
            {activeTab === 'grimoire' && (
              <GrimoireView
                players={players}
                setPlayers={setPlayers}
                scriptRoles={activeScriptRoles}
                language={language}
                onOpenRolePicker={handleOpenRolePicker}
                onStartPlayerSetup={() => setIsPlayerSetupActive(true)}
              />
            )}

            {activeTab === 'script' && (
              <ScriptBuilderView
                playerCount={playerCount}
                setPlayerCount={setPlayerCount}
                activeEdition={activeEdition}
                setActiveEdition={setActiveEdition}
                activeScriptRoles={activeScriptRoles}
                setActiveScriptRoles={setActiveScriptRoles}
                language={language}
                onApplyScriptToGrimoire={handleApplyScriptToGrimoire}
                onStartPlayerSetup={() => setIsPlayerSetupActive(true)}
                onOpenShareModal={() => setShowShareModal(true)}
              />
            )}

            {activeTab === 'ai-guide' && (
              <AIGuideView
                currentPhase={currentPhase}
                dayNumber={dayNumber}
                players={players}
                language={language}
              />
            )}

            {activeTab === 'almanac' && (
              <RoleAlmanacView 
                activeEdition={activeEdition} 
                activeScriptRoles={activeScriptRoles}
                language={language} 
                onOpenShareModal={() => setShowShareModal(true)}
              />
            )}
          </>
        )}
      </main>

      <MobileNavBar activeTab={activeTab} setActiveTab={setActiveTab} language={language} />

      {/* SHARE SCRIPT MODAL */}
      {showShareModal && (
        <ShareScriptModal
          activeScriptRoles={activeScriptRoles}
          activeEdition={activeEdition}
          language={language}
          onClose={() => setShowShareModal(false)}
        />
      )}

      {/* ROLE PICKER MODAL SHEET */}
      {rolePickerTargetPlayerId && (
        <div className="modal-overlay" onClick={() => setRolePickerTargetPlayerId(null)}>
          <div className="modal-sheet" onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <h3 className="font-serif" style={{ color: 'var(--accent-gold)' }}>
                {language === 'vi' ? 'Chọn Nhân Vật Từ Kịch Bản' : 'Select Role from Active Script'}
              </h3>
              <button onClick={() => setRolePickerTargetPlayerId(null)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>✕</button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '60vh', overflowY: 'auto' }}>
              {activeScriptRoles.map(role => {
                const localized = getLocalizedRole(role, language);
                return (
                  <div
                    key={role.id}
                    onClick={() => handleAssignRoleToPlayer(role)}
                    style={{
                      background: 'var(--bg-primary)',
                      border: '1px solid var(--border-color)',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      {localized.image && <img src={localized.image} alt="" style={{ width: '28px', height: '28px' }} />}
                      <span className={`badge-align ${localized.type}`}>{localized.type}</span>
                      <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>{localized.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
