import React, { useState } from 'react';
import { ALL_ROLES } from '../data/editionsAndRoles';
import { getLocalizedRole } from '../services/aiGuideService';
import { UI_TRANSLATIONS } from '../data/translations';
import { Search, BookOpen, Moon, Share2, Filter } from 'lucide-react';

export default function RoleAlmanacView({ activeEdition, activeScriptRoles = [], language, onOpenShareModal }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [scriptOnlyFilter, setScriptOnlyFilter] = useState(activeScriptRoles.length > 0);
  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.en;
  const isVi = language === 'vi';

  const baseRoles = scriptOnlyFilter && activeScriptRoles.length > 0 
    ? activeScriptRoles 
    : ALL_ROLES.filter(r => r.edition === activeEdition || r.edition === '' || activeEdition === 'custom');

  const filteredRoles = baseRoles.map(r => getLocalizedRole(r, language)).filter(role => {
    const matchesSearch = role.name.toLowerCase().includes(searchQuery.toLowerCase()) || role.ability.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'all' || role.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* SHARE SCRIPT TOOLBAR BUTTON */}
      <div style={{ background: 'var(--bg-card)', padding: '12px 14px', borderRadius: '14px', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--accent-gold)' }}>
            {scriptOnlyFilter && activeScriptRoles.length > 0 ? (isVi ? 'Kịch Bản Hiện Tại' : 'Active Script Sheet') : (isVi ? 'Toàn Bộ Thư Viện' : 'Full Edition Library')}
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
            {filteredRoles.length} {isVi ? 'nhân vật' : 'roles'}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '6px' }}>
          {activeScriptRoles.length > 0 && (
            <button
              className={`btn btn-sm ${scriptOnlyFilter ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setScriptOnlyFilter(!scriptOnlyFilter)}
              title="Toggle active script filter"
            >
              <Filter size={14} /> {scriptOnlyFilter ? (isVi ? 'Hiện Tất Cả' : 'Show All') : (isVi ? 'Lọc Kịch Bản' : 'Filter Script')}
            </button>
          )}

          <button className="btn btn-outline-gold btn-sm" onClick={onOpenShareModal} title="Share script link with players">
            <Share2 size={14} /> {isVi ? 'Chia Sẻ Link' : 'Share Link'}
          </button>
        </div>
      </div>

      {/* Search Input */}
      <div style={{ position: 'relative' }}>
        <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
        <input
          type="text"
          placeholder={t.searchRoles}
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          style={{
            width: '100%',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '12px',
            padding: '12px 14px 12px 42px',
            color: '#fff',
            fontSize: '0.9rem'
          }}
        />
      </div>

      {/* Filter Chips */}
      <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '4px' }}>
        {['all', 'townsfolk', 'outsider', 'minion', 'demon'].map(type => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            style={{
              padding: '6px 12px',
              borderRadius: '8px',
              background: selectedType === type ? 'var(--accent-gold)' : 'var(--bg-card)',
              color: selectedType === type ? '#000' : 'var(--text-primary)',
              border: '1px solid var(--border-color)',
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              cursor: 'pointer',
              flexShrink: 0
            }}
          >
            {t[type] || type}
          </button>
        ))}
      </div>

      {/* Role Cards List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {filteredRoles.map(role => (
          <div
            key={role.id}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '12px',
              padding: '14px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {role.image && <img src={role.image} alt="" style={{ width: '32px', height: '32px' }} />}
                <span className={`badge-align ${role.type}`}>
                  {role.type}
                </span>
                <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>
                  {role.name}
                </span>
              </div>

              {(role.firstNight > 0 || role.otherNight > 0) && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.7rem', color: 'var(--accent-gold)' }}>
                  <Moon size={12} /> Wake Order
                </div>
              )}
            </div>

            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.45' }}>
              {role.ability}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
