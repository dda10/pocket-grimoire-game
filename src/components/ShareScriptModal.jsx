import React, { useState } from 'react';
import { Share2, Copy, Check, QrCode, X, ExternalLink } from 'lucide-react';
import { UI_TRANSLATIONS } from '../data/translations';

export default function ShareScriptModal({ activeScriptRoles, activeEdition, language, onClose }) {
  const [copied, setCopied] = useState(false);
  const isVi = language === 'vi';

  // Construct URL with query parameters encoding the active edition & role IDs
  const roleIds = activeScriptRoles.map(r => r.id).join(',');
  const shareUrl = `${window.location.origin}${window.location.pathname}?view=almanac&edition=${activeEdition}&roles=${encodeURIComponent(roleIds)}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-sheet" onClick={e => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Share2 size={24} color="var(--accent-gold)" />
            <h3 className="font-serif" style={{ color: 'var(--accent-gold)', fontSize: '1.2rem' }}>
              {isVi ? 'Chia Sẻ Kịch Bản Cho Người Chơi' : 'Share Script with Players'}
            </h3>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '1.2rem', cursor: 'pointer' }}>✕</button>
        </div>

        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '16px' }}>
          {isVi 
            ? 'Gửi đường link này cho người chơi để họ tự tra cứu chức năng của tất cả nhân vật trong kịch bản trên điện thoại cá nhân!'
            : 'Send this link to players so they can look up all character abilities in the active script on their own phones!'}
        </p>

        {/* LINK COPY BOX */}
        <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '12px', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <input
            type="text"
            readOnly
            value={shareUrl}
            style={{ flex: 1, background: 'none', border: 'none', color: 'var(--accent-gold)', fontSize: '0.8rem', outline: 'none', overflow: 'hidden', textOverflow: 'ellipsis' }}
          />
          <button
            className={`btn btn-sm ${copied ? 'btn-primary' : 'btn-outline-gold'}`}
            onClick={handleCopyLink}
            style={{ flexShrink: 0 }}
          >
            {copied ? <><Check size={14} /> {isVi ? 'Đã Chép!' : 'Copied!'}</> : <><Copy size={14} /> {isVi ? 'Sao Chép' : 'Copy'}</>}
          </button>
        </div>

        {/* QR CODE DISPLAY */}
        <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '14px', padding: '20px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{ background: '#fff', padding: '12px', borderRadius: '12px', boxShadow: '0 0 16px rgba(0,0,0,0.5)' }}>
            <img 
              src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(shareUrl)}`} 
              alt="QR Code" 
              style={{ width: '160px', height: '160px', display: 'block' }}
            />
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            📷 {isVi ? 'Người chơi có thể quét mã QR bằng camera điện thoại để xem kịch bản' : 'Players can scan this QR code with their phone camera to open reference sheet'}
          </div>
        </div>

        <button className="btn btn-secondary" style={{ width: '100%' }} onClick={onClose}>
          {isVi ? 'Đóng' : 'Close'}
        </button>
      </div>
    </div>
  );
}
