import { ALL_ROLES, PLAYER_DISTRIBUTION } from '../data/editionsAndRoles';
import { VI_ROLE_MAP } from '../data/translations';

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

  // Helper to find assigned player for a role
  const getAssignedPlayerName = (roleId) => {
    const p = players.find(player => player.role?.id === roleId);
    return p ? p.name : (isVi ? 'Chưa phân người' : 'Unassigned');
  };

  if (phase === 'night' && dayNumber === 1) {
    steps.push({
      id: 'step-intro',
      title: isVi ? 'Cài Đặt Đêm 1 & Thông Báo' : 'Night 1 Setup & Announcement',
      instruction: isVi ? 'Nói: "Nhắm mắt lại. Tất cả người chơi thức dậy nhưng giữ nhắm mắt... pha thông tin minion & demon."' : 'Say: "Close your eyes. Everyone, wake up with eyes closed... minion & demon info phase."',
      icon: 'Moon'
    });

    // Minion info mapped to exact player names
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

    // Waking roles in firstNight order mapped to names
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
 * AI Strategic Advisor: Generates dynamic difficulty override recommendations for the Storyteller mapped to exact player names.
 */
export function generateAIStrategicOverrides(players = [], language = 'en') {
  const recommendations = [];
  const isVi = language === 'vi';

  const drunkPlayer = players.find(p => p.role?.id === 'drunk');
  const fortuneTeller = players.find(p => p.role?.id === 'fortune_teller');
  const empath = players.find(p => p.role?.id === 'empath');

  if (drunkPlayer) {
    if (fortuneTeller) {
      const ftName = fortuneTeller.name;
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

  if (fortuneTeller) {
    const goodPlayers = players.filter(p => p.role?.type === 'townsfolk' || p.role?.type === 'outsider');
    const targetRedHerring = goodPlayers.find(p => p.id !== fortuneTeller.id);
    if (targetRedHerring) {
      recommendations.push({
        id: 'rec-ft-herring',
        targetRole: 'Fortune Teller',
        title: isVi ? `Manh Mối Giả -> ${targetRedHerring.name}` : `Red Herring -> ${targetRedHerring.name}`,
        advice: isVi ? `Chỉ định người chơi ${targetRedHerring.name} làm Red Herring cho Tiên Tri (${fortuneTeller.name}). Khi ${fortuneTeller.name} soi ${targetRedHerring.name}, trả về kết quả CÓ là Quỷ để gây nhiễu.` : `Designate player ${targetRedHerring.name} as the Fortune Teller Red Herring for ${fortuneTeller.name}. When ${fortuneTeller.name} points at ${targetRedHerring.name}, return a positive Demon ping to confuse town.`,
        impact: isVi ? 'Gây Nhiễu' : 'Misdirection'
      });
    }
  }

  const demons = players.filter(p => p.role?.type === 'demon');
  if (demons.length > 0) {
    const demonPlayer = demons[0];
    recommendations.push({
      id: 'rec-demon-bluffs',
      targetRole: 'Demon',
      title: isVi ? `Farol Giả Cho Quỷ -> ${demonPlayer.name}` : `Demon Bluffs -> ${demonPlayer.name}`,
      advice: isVi ? `Đưa cho người chơi Quỷ [${demonPlayer.name}] các thẻ giả như Ngại Ngùng hoặc Đồ Tể để họ an tâm mạo danh mà không sợ bị lộ sớm.` : `Provide Demon player [${demonPlayer.name}] high-power character bluffs so they can fake information safely.`,
      impact: isVi ? 'Cân Bằng' : 'Balancing'
    });
  }

  recommendations.push({
    id: 'rec-std-mode',
    targetRole: 'Storyteller',
    title: isVi ? 'Nhịp Độ Tối Ưu' : 'Optimal Flow',
    advice: isVi ? 'Giữ cho các hành động ban đêm diễn ra mượt mà và đảm bảo người chơi ghi nhớ vai trò của họ.' : 'Keep night actions moving smoothly and ensure players write down their claimed roles during Day discussions.',
    impact: isVi ? 'Tiêu Chuẩn' : 'Standard'
  });

  return recommendations;
}
