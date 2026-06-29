import { ALL_ROLES, PLAYER_DISTRIBUTION } from '../data/editionsAndRoles';
import { VI_ROLE_MAP } from '../data/translations';

export const DEFAULT_AI_KEY = 'sk-d6020945a1e55134-unbhdd-8ed0b0eb';

/**
 * Gets character details in selected language (en or vi).
 */
export function getLocalizedRole(role, language = 'en') {
  if (!role) return role;
  if (language === 'vi' && VI_ROLE_MAP[role.id]) {
    const vi = VI_ROLE_MAP[role.id];
    return {
      ...role,
      name: vi.name || role.name,
      ability: vi.ability || role.ability,
      firstNightPrompt: vi.firstNightPrompt || role.firstNightPrompt,
      otherNightPrompt: vi.otherNightPrompt || role.otherNightPrompt
    };
  }
  return role;
}

/**
 * Randomly generates a balanced script of roles for a given player count and edition.
 */
export function generateRandomScript(playerCount, editionId, selectedManualRoles = []) {
  const editionRoles = ALL_ROLES.filter(r => r.edition === editionId || r.edition === '' || editionId === 'custom');
  const dist = PLAYER_DISTRIBUTION[playerCount] || PLAYER_DISTRIBUTION[7];

  let townsfolkCount = dist.townsfolk;
  let outsiderCount = dist.outsider;
  let minionCount = dist.minion;
  let demonCount = dist.demon;

  const hasBaron = selectedManualRoles.some(r => r.id === 'baron');
  if (hasBaron) {
    outsiderCount += 2;
    townsfolkCount = Math.max(1, townsfolkCount - 2);
  }

  const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

  const availableTownsfolk = editionRoles.filter(r => r.type === 'townsfolk');
  const availableOutsiders = editionRoles.filter(r => r.type === 'outsider');
  const availableMinions = editionRoles.filter(r => r.type === 'minion');
  const availableDemons = editionRoles.filter(r => r.type === 'demon');

  const pickedRoles = [...selectedManualRoles];

  const fillCategory = (available, currentCount, targetCount) => {
    const existingIds = new Set(pickedRoles.map(r => r.id));
    const pool = shuffle(available.filter(r => !existingIds.has(r.id)));
    const needed = Math.max(0, targetCount - currentCount);
    return pool.slice(0, needed);
  };

  const currentTownsfolk = pickedRoles.filter(r => r.type === 'townsfolk').length;
  const currentOutsiders = pickedRoles.filter(r => r.type === 'outsider').length;
  const currentMinions = pickedRoles.filter(r => r.type === 'minion').length;
  const currentDemons = pickedRoles.filter(r => r.type === 'demon').length;

  pickedRoles.push(...fillCategory(availableTownsfolk, currentTownsfolk, townsfolkCount));
  pickedRoles.push(...fillCategory(availableOutsiders, currentOutsiders, outsiderCount));
  pickedRoles.push(...fillCategory(availableMinions, currentMinions, minionCount));
  pickedRoles.push(...fillCategory(availableDemons, currentDemons, demonCount));

  return pickedRoles;
}

/**
 * Generates the step-by-step Game Operator walkthrough for night & day phases mapped to player names.
 */
export function generateStepByStepGuide(phase, dayNumber, players = [], language = 'en') {
  const steps = [];
  const isVi = language === 'vi';

  if (phase === 'night' && dayNumber === 1) {
    steps.push({
      id: 'step-intro',
      title: isVi ? 'Cài Đặt Đêm 1 & Thông Báo' : 'Night 1 Setup & Announcement',
      instruction: isVi ? 'Nói: "Nhắm mắt lại. Tất cả người chơi thức dậy nhưng giữ nhắm mắt... pha thông tin minion & demon."' : 'Say: "Close your eyes. Everyone, wake up with eyes closed... minion & demon info phase."',
      icon: 'Moon'
    });

    const minions = players.filter(p => p.role?.type === 'minion');
    const minionNames = minions.map(p => p.name).join(', ') || (isVi ? 'Các Tay Sai' : 'Minions');
    const demons = players.filter(p => p.role?.type === 'demon');
    const demonNames = demons.map(p => p.name).join(', ') || (isVi ? 'Quỷ' : 'Demon');

    steps.push({
      id: 'step-minion-info',
      title: isVi ? 'Pha Thông Tin Tay Sai (Minion)' : 'Minion Info Phase',
      instruction: isVi 
        ? `Gọi người chơi Tay Sai [${minionNames}] thức dậy. Cho họ biết mặt nhau và chỉ cho họ biết Quỷ là [${demonNames}].`
        : `Wake Minion player(s) [${minionNames}]. Show them who each other are, and point to Demon player [${demonNames}].`,
      icon: 'Eye'
    });

    steps.push({
      id: 'step-demon-info',
      title: isVi ? 'Pha Thông Tin Quỷ (Demon)' : 'Demon Info Phase',
      instruction: isVi 
        ? `Gọi người chơi Quỷ [${demonNames}] thức dậy. Cho họ biết Tay Sai là [${minionNames}] và cho xem 3 thẻ nhân vật Dân Làng giả.`
        : `Wake Demon player [${demonNames}]. Show them Minion player(s) [${minionNames}], and show them 3 false Townsfolk character bluffs.`,
      icon: 'Skull'
    });

    const wakingPlayers = players
      .filter(p => p.role && p.role.firstNight > 0)
      .sort((a, b) => a.role.firstNight - b.role.firstNight);

    wakingPlayers.forEach(p => {
      const localized = getLocalizedRole(p.role, language);
      steps.push({
        id: `step-${p.id}`,
        title: `${isVi ? 'Gọi' : 'Wake'} ${p.name} (${localized.name})`,
        instruction: `${isVi ? 'Gọi' : 'Wake'} ${p.name} (${localized.name}): ${localized.firstNightPrompt || localized.ability}`,
        roleId: localized.id,
        icon: 'UserCheck'
      });
    });

    steps.push({
      id: 'step-dawn-1',
      title: isVi ? 'Pha Bình Minh' : 'Dawn Phase',
      instruction: isVi ? 'Nói: "Mở mắt ra, Ngày 1 bắt đầu!" Thông báo không có ai chết đêm nay.' : 'Say: "Eyes open, it is Day 1!" Announce no one died tonight.',
      icon: 'Sun'
    });
  } else if (phase === 'night') {
    steps.push({
      id: 'step-night-intro',
      title: isVi ? `Cài Đặt Đêm ${dayNumber}` : `Night ${dayNumber} Setup`,
      instruction: isVi ? `Nói: "Nhắm mắt lại, Đêm ${dayNumber} bắt đầu."` : `Say: "Close your eyes, it is Night ${dayNumber}."`,
      icon: 'Moon'
    });

    const wakingPlayers = players
      .filter(p => p.role && p.role.otherNight > 0 && (p.isAlive || p.role.id === 'ravenkeeper'))
      .sort((a, b) => a.role.otherNight - b.role.otherNight);

    wakingPlayers.forEach(p => {
      const localized = getLocalizedRole(p.role, language);
      steps.push({
        id: `step-${p.id}`,
        title: `${isVi ? 'Gọi' : 'Wake'} ${p.name} (${localized.name})`,
        instruction: `${isVi ? 'Gọi' : 'Wake'} ${p.name} (${localized.name}): ${localized.otherNightPrompt || localized.ability}`,
        roleId: localized.id,
        icon: 'UserCheck'
      });
    });

    steps.push({
      id: 'step-dawn-n',
      title: isVi ? `Bình Minh Ngày ${dayNumber}` : `Dawn Day ${dayNumber}`,
      instruction: isVi ? `Nói: "Mở mắt ra, Ngày ${dayNumber} bắt đầu!" Thông báo những người chết đêm nay.` : `Say: "Eyes open, it is Day ${dayNumber}!" Announce tonight's deaths.`,
      icon: 'Sun'
    });
  } else {
    const alivePlayers = players.filter(p => p.isAlive).map(p => p.name).join(', ');
    steps.push({
      id: 'step-day-discussion',
      title: isVi ? `Thảo Luận Ngày ${dayNumber}` : `Day ${dayNumber} Discussions`,
      instruction: isVi ? `Cho phép các người chơi [${alivePlayers}] thảo luận riêng và chung.` : `Allow players [${alivePlayers}] private and public discussions.`,
      icon: 'MessageSquare'
    });
    steps.push({
      id: 'step-day-nominations',
      title: isVi ? 'Tố Giác & Bỏ Phiếu' : 'Nominations & Voting',
      instruction: isVi ? 'Mở tố giác treo cổ. Gọi bỏ phiếu cho từng người chơi bị tố giác.' : 'Open nominations for execution. Call for votes for each nominated player.',
      icon: 'Vote'
    });
    steps.push({
      id: 'step-day-execution',
      title: isVi ? 'Xử Lý Treo Cổ' : 'Execution Resolution',
      instruction: isVi ? 'Nếu một người chơi nhận đa số phiếu và cao nhất, xử tử họ và tuyên bố cái chết.' : 'If a player receives majority votes and is highest, execute them and declare their death.',
      icon: 'AlertTriangle'
    });
  }

  return steps;
}

/**
 * AI Strategic Advisor: Generates dynamic difficulty override recommendations reading Storyteller Notes & Target Win Goal.
 */
export function generateAIStrategicOverrides(players = [], language = 'en', targetGoal = 'balanced', gameNotes = '') {
  const recommendations = [];
  const isVi = language === 'vi';
  const notesLower = gameNotes.toLowerCase();

  const drunkPlayer = players.find(p => p.role?.id === 'drunk');
  const fortuneTeller = players.find(p => p.role?.id === 'fortune_teller');
  const empath = players.find(p => p.role?.id === 'empath');
  const demons = players.filter(p => p.role?.type === 'demon');
  const demonPlayer = demons[0];

  if (targetGoal === 'evil_win') {
    recommendations.push({
      id: 'rec-goal-evil',
      targetRole: 'Storyteller',
      title: isVi ? '😈 Chiến Thuật Trực Tiếp: Hỗ Trợ Phe Quỷ Thắng' : '😈 Strategy: Assist Evil Victory',
      advice: isVi 
        ? 'Bảo vệ Quỷ bằng cách gây nhiễu tối đa cho Dân Làng. Cho Tiên Tri hoặc Thấu Cảm kết quả giả để Dân Làng nghi ngờ lẫn nhau và tự treo cổ người tốt.'
        : 'Protect the Demon by maximizing confusion for Townsfolk. Feed false pings to Fortune Teller or Empath so town executes each other.',
      impact: isVi ? 'Trực Tiếp AI Studio' : 'Direct AI Call'
    });
  } else if (targetGoal === 'good_win') {
    recommendations.push({
      id: 'rec-goal-good',
      targetRole: 'Storyteller',
      title: isVi ? '🛡️ Chiến Thuật Trực Tiếp: Hỗ Trợ Phe Dân Thắng' : '🛡️ Strategy: Assist Good Victory',
      advice: isVi 
        ? 'Cung cấp manh mối chuẩn xác cho Dân Làng. Hạn chế tác động của Kẻ Say và hướng sự chú ý của thị trấn về phía các Tay Sai hoặc Quỷ đang lẩn trốn.'
        : 'Provide clear information to Townsfolk. Minimize Drunk misdirection and guide town attention toward hidden Minions or Demon.',
      impact: isVi ? 'Trực Tiếp AI Studio' : 'Direct AI Call'
    });
  } else {
    recommendations.push({
      id: 'rec-goal-bal',
      targetRole: 'Storyteller',
      title: isVi ? '⚖️ Chiến Thuật Trực Tiếp: Cân Bằng & Kịch Tính Cao' : '⚖️ Strategy: High Tension & Balanced',
      advice: isVi 
        ? 'Duy trì thế giằng co 50/50. Nếu Dân Làng đang áp đảo, hãy tung manh mối giả. Nếu Quỷ sắp bị lộ quá sớm, hãy dùng Kẻ Say hoặc Red Herring để cứu nguy.'
        : 'Maintain a 50/50 balanced tug-of-war. If Townsfolk dominate, introduce false pings. If Demon is threatened early, utilize Drunk or Red Herring.',
      impact: isVi ? 'Trực Tiếp AI Studio' : 'Direct AI Call'
    });
  }

  if (notesLower.length > 0) {
    if (notesLower.includes('chef') || notesLower.includes('đầu bếp') || notesLower.includes('chết')) {
      recommendations.push({
        id: 'rec-note-chef',
        targetRole: 'Storyteller Note',
        title: isVi ? '📝 Xử Lý Nhật Ký: Biến Số Chết Chóc' : '📝 Note Adaptation: Death Variables',
        advice: isVi 
          ? `Theo nhật ký của bạn: Vai trò đã chết/bị lộ. Hãy chuyển hướng thông tin sang cho ${fortuneTeller ? fortuneTeller.name : (demons[0]?.name || 'Quỷ')} để điều phối lại nhịp độ trận đấu theo mục tiêu ${targetGoal === 'evil_win' ? 'Quỷ Thắng' : targetGoal === 'good_win' ? 'Dân Thắng' : 'Cân Bằng'}.`
          : `Based on your note: Key roles died or claimed. Pivot info focus to keep the game aligned with your ${targetGoal} objective.`,
        impact: isVi ? 'Điều Chỉnh Nhật Ký' : 'Live Note Pivot'
      });
    }

    if (notesLower.includes('nghi') || notesLower.includes('suspect') || notesLower.includes('fake')) {
      recommendations.push({
        id: 'rec-note-suspect',
        targetRole: 'Storyteller Note',
        title: isVi ? '📝 Xử Lý Nhật Ký: Nghi Ngờ Trong Thị Trấn' : '📝 Note Adaptation: Suspicion Flow',
        advice: isVi 
          ? `Nhật ký ghi nhận có sự nghi ngờ giả/thật. ${targetGoal === 'evil_win' ? 'Hãy tiếp tục đẩy sâu sự nghi ngờ vào người chơi phe tốt!' : 'Hãy cho Tiên Tri hoặc thông tin chuẩn để minh oan cho người tốt.'}`
          : `Notes indicate active suspicion. Direct next night info to adjust tension accordingly.`,
        impact: isVi ? 'Xử Lý Nhật Ký' : 'Note Adapted'
      });
    }
  }

  if (drunkPlayer) {
    if (fortuneTeller) {
      recommendations.push({
        id: 'rec-drunk-ft',
        targetRole: 'Drunk',
        title: isVi ? `Ghi Đè Kẻ Say -> ${drunkPlayer.name}` : `Override Drunk -> ${drunkPlayer.name}`,
        advice: isVi ? `Giao danh tính giả của ${drunkPlayer.name} là Tiên Tri. Cho họ kết quả "CÓ" giả khi soi người phe tốt để tạo nghi ngờ giữa Dân Làng!` : `Assign ${drunkPlayer.name}'s fake identity as Fortune Teller. Give them false "YES" pings on good players to create severe suspicion between Townsfolk!`,
        impact: isVi ? 'Kịch Tính Cao' : 'High Tension'
      });
    } else if (empath) {
      recommendations.push({
        id: 'rec-drunk-empath',
        targetRole: 'Drunk',
        title: isVi ? `Ghi Đè Kẻ Say -> ${drunkPlayer.name}` : `Override Drunk -> ${drunkPlayer.name}`,
        advice: isVi ? `Giao danh tính giả của ${drunkPlayer.name} là Thấu Cảm. Cho họ chỉ số "1" hoặc "2" giả khi ngồi cạnh người phe tốt để gây hoang mang.` : `Assign ${drunkPlayer.name}'s fake identity as Empath. Feed them a false "1" or "2" ping when sitting next to good players to cause paranoia.`,
        impact: isVi ? 'Nghi Ngờ Cao' : 'High Suspense'
      });
    }
  }

  return recommendations;
}
