// Vietnamese & English Translations Dictionary

export const UI_TRANSLATIONS = {
  "en": {
    "grimoire": "Grimoire",
    "scriptBuilder": "Script Build",
    "aiGuide": "AI Operator",
    "almanac": "Almanac",
    "seatedPlayers": "Seated Players",
    "alive": "Alive",
    "dead": "Dead",
    "passPhone": "Pass Phone",
    "list": "List",
    "ring": "Ring",
    "dragHint": "🖐️ Drag & drop tokens around the ring to match physical seating positions!",
    "numberPlayers": "Number of Players",
    "playEdition": "Play Edition",
    "autoRandom": "Auto Random",
    "manualSelection": "Manual Selection",
    "genRandomScript": "Generate Random Script",
    "applyScript": "Apply Script to Grimoire Seating",
    "applyScriptPassPhone": "Apply Script & Start Pass-the-Phone Setup 📲",
    "openPlayerSetup": "Open Player Setup Mode Directly",
    "activeScript": "Generated Active Script",
    "phaseWalkthrough": "Phase Walkthrough",
    "difficultyAdvisor": "Difficulty Advisor",
    "llmAssistant": "LLM Storyteller Assistant",
    "liveGemini": "⚡ Live Gemini LLM Engine Connected",
    "builtInRules": "🧠 Built-in Intelligent Rules Engine",
    "searchRoles": "Search role abilities or names...",
    "all": "All",
    "townsfolk": "Townsfolk",
    "outsider": "Outsider",
    "minion": "Minion",
    "demon": "Demon",
    "playerSetupTitle": "Player Setup (Pass the Phone)",
    "playerSetupDesc": "Seat {seat} of {total}: Enter your name and secretly tap to view your assigned character token.",
    "playerName": "Player Name",
    "tapToReveal": "Tap to Reveal Character Token",
    "hideToken": "Hide Character Token",
    "hiddenDesc": "Your character token is hidden. Make sure no other players are looking at the screen!",
    "passToNext": "Done! Pass Phone to Next Player",
    "completeSetup": "Complete Setup & Start Game",
    "night": "Night",
    "day": "Day",
    "manage": "Manage",
    "save": "Save",
    "changeRole": "Change Role",
    "assignedCharacter": "Assigned Character",
    "statusReminders": "Status Reminders",
    "ghostVoteToken": "Dead Ghost Vote Token",
    "ghostVoteAvailable": "Ghost Vote Available",
    "voteUsed": "Vote Used"
  },
  "vi": {
    "grimoire": "Sổ Sách (Grimoire)",
    "scriptBuilder": "Tạo Kịch Bản",
    "aiGuide": "Quản Trò AI",
    "almanac": "Tra Cứu Nhân Vật",
    "seatedPlayers": "Người Chơi Đã Ngồi",
    "alive": "Còn Sống",
    "dead": "Đã Chết",
    "passPhone": "Chuyền Máy",
    "list": "Danh Sách",
    "ring": "Vòng Tròn",
    "dragHint": "🖐️ Kéo và thả thẻ nhân vật quanh vòng tròn để sắp xếp đúng vị trí chỗ ngồi thực tế!",
    "numberPlayers": "Số Lượng Người Chơi",
    "playEdition": "Phiên Bản Chơi",
    "autoRandom": "Tự Động Ngẫu Nhiên",
    "manualSelection": "Chọn Thủ Công",
    "genRandomScript": "Tạo Kịch Bản Ngẫu Nhiên",
    "applyScript": "Áp Dụng Kịch Bản Vào Chỗ Ngồi",
    "applyScriptPassPhone": "Áp Dụng Kịch Bản & Bắt Đầu Chuyền Máy Setup 📲",
    "openPlayerSetup": "Mở Chế Độ Chuyền Máy Setup Trực Tiếp",
    "activeScript": "Kịch Bản Hiện Tại",
    "phaseWalkthrough": "Hướng Dẫn Theo Pha",
    "difficultyAdvisor": "Cố Vấn Độ Khó",
    "llmAssistant": "Trợ Lý Quản Trò LLM AI",
    "liveGemini": "⚡ Đã Kết Nối Gemini LLM Trực Tiếp",
    "builtInRules": "🧠 Động Cơ Quy Tắc Thông Minh Tích Hợp",
    "searchRoles": "Tìm kiếm tên hoặc kỹ năng nhân vật...",
    "all": "Tất Cả",
    "townsfolk": "Dân Làng (Townsfolk)",
    "outsider": "Kẻ Ngoài Cuộc (Outsider)",
    "minion": "Tay Sai (Minion)",
    "demon": "Quỷ (Demon)",
    "playerSetupTitle": "Cài Đặt Người Chơi (Chuyền Máy)",
    "playerSetupDesc": "Ghế {seat} / {total}: Nhập tên của bạn và chạm bảo mật để xem thẻ nhân vật được chia.",
    "playerName": "Tên Người Chơi",
    "tapToReveal": "Chạm Để Xem Thẻ Nhân Vật Secret",
    "hideToken": "Ẩn Thẻ Nhân Vật",
    "hiddenDesc": "Thẻ nhân vật của bạn đang ẩn. Hãy đảm bảo không có người chơi nào khác đang nhìn màn hình!",
    "passToNext": "Xong! Chuyền Máy Cho Người Tiếp Theo",
    "completeSetup": "Hoàn Tất Setup & Bắt Đầu Game",
    "night": "Đêm",
    "day": "Ngày",
    "manage": "Quản Lý",
    "save": "Lưu",
    "changeRole": "Đổi Nhân Vật",
    "assignedCharacter": "Nhân Vật Được Giao",
    "statusReminders": "Cờ Trạng Thái",
    "ghostVoteToken": "Thẻ Phiếu Ma (Đã Chết)",
    "ghostVoteAvailable": "Phiếu Ma Còn",
    "voteUsed": "Đã Dùng Phiếu"
  }
};
export const VI_ROLE_MAP = {
  "acrobat": {
    "name": "Nghệ sĩ xiếc",
    "ability": "Mỗi đêm*, hãy chọn một người chơi: nếu họ say hoặc bị đầu độc vào đêm nay, bạn sẽ chết.",
    "firstNightPrompt": "",
    "otherNightPrompt": "Người nhào lộn sẽ chọn một người chơi. Nếu họ say hoặc bị đầu độc vào đêm nay, người chơi nhào lộn sẽ chết."
  },
  "alchemist": {
    "name": "Nhà giả kim",
    "ability": "Bạn có chức năng của Tay sai ngoài cuộc.",
    "firstNightPrompt": "Cho Nhà giả kim thấy thẻ của tay sai ngoài cuộc",
    "otherNightPrompt": ""
  },
  "alhadikhia": {
    "name": "Al-Hadikhia",
    "ability": "Mỗi đêm*, chọn 3 người (mọi người biết là ai): mỗi người bí mật chọn được sống hoặc chết, nếu tất cả chọn sống, họ cùng chết",
    "firstNightPrompt": "",
    "otherNightPrompt": "Al-Hadikhia chọn 3 người. Thông báo người đầu tiên, gọi họ dậy để gật đầu có để sống, lắc đầu không để chết, giết hoặc hồi sinh phù hợp, rồi cho họ đi ngủ và thông báo người tiếp theo. nếu cả 3 cùng sống sau này, họ cùng chết."
  },
  "alsaahir": {
    "name": "Alsaahir",
    "ability": "Một lần mỗi ngày, nếu bạn công khai đoán được (những) ai là Quỷ và (những) ai là Tay sai, phe tốt thắng.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "amnesiac": {
    "name": "Mất trí nhớ",
    "ability": "Bạn không biết bạn có chức năng gì. Mỗi ngày, đoán nó là gì: bạn biết độ chính xác của dự đôán.",
    "firstNightPrompt": "Quyết định chức năng của Mất trí nhớ. Nếu chức năng của họ cần họ phải dậy trong đêm nay: Gọi Mất trí nhớ dậy và thực hiện chức năng.",
    "otherNightPrompt": "Nếu chức năng của Mất trí nhớ cần họ phải dậy trong đêm nay: Gọi Mất trí nhớ dậy và thực hiện chức năng."
  },
  "angel": {
    "name": "Thiên thần",
    "ability": "Nếu người chơi mới bị chết, ai có trách nhiệm nhiều nhất có thể sẽ bị gặp điều xấu.  ",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "apprentice": {
    "name": "Tập sự",
    "ability": "Vào đêm đâu tiên của bạn, bạn có chức năng của Dân làng (nếu là tốt), hoặc của Tay sai (nếu là xấu).",
    "firstNightPrompt": "Cho tập sự thấy lá 'Bạn là', và thẻ Dân làng hoặc Tay sai. Trong Grimoire, thay thẻ Tập sự với thẻ nhân vật đó, và đặt đánh dấu \"là Tập sụ\" của Tập sự bên cạnh thẻ đó",
    "otherNightPrompt": ""
  },
  "artist": {
    "name": "Họa sĩ",
    "ability": "Một lần trong game, trong ngày, bí mật hỏi Người kể chuyện bất kỳ câu hỏi đúng/sai.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "assassin": {
    "name": "Sát thủ",
    "ability": "Một lần trong game, trong đêm*, chọn 1 người: họ chết, ngay cả khi có lý do họ không chết.",
    "firstNightPrompt": "",
    "otherNightPrompt": "Nếu Sát thủ chưa dùng chức năng: Sát thủ có thể lắc đầu, hoặc chỉ một người. Người đó chết."
  },
  "atheist": {
    "name": "Vô thần",
    "ability": "Người kể chuyện có thể phá luật & nếu bị hành quyết, phe tốt thắng, ngay cả khi bạn chết [Không có nhân vật xấu]",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "balloonist": {
    "name": "Khinh khí cầu gia",
    "ability": "Mỗi đêm, bạn biết 1 người khác loại với với người bạn biết đêm qua. [+0 hoặc +1 Lữ khách]",
    "firstNightPrompt": "Chọn 1 loại nhân vật. Chỉ người thuộc về loại nhân vật đó. Đặt đánh dấu Đã biết của Khinh khí cầu gia cạnh nhân vật đó.",
    "otherNightPrompt": "Chọn 1 loại nhân vật chưa có thẻ đánh dấu Đã biết cạnh nhân vật. Chỉ 1 người có nhân vật thuộc loại đó, nếu còn. Đặt đánh dấu Đã biết của Khinh khí cầu gia cạnh nhân vật đó."
  },
  "banshee": {
    "name": "Quỷ báo tử",
    "ability": "Nếu Quỷ giết bạn, tất cả người chơi biết điều đó. Từ lúc đó, bạn có thể biểu quyết 2 lần 1 ngày và bỏ 2 phiếu cho mỗi lần biểu quyết.",
    "firstNightPrompt": "",
    "otherNightPrompt": "Thông báo Quỷ báo tử đã chết."
  },
  "barber": {
    "name": "Thợ cắt tóc",
    "ability": "Nếu bạn chết hôm nay, trong đêm Quỷ có thể chọn 2 người (không phải Quỷ khác) để tráo nhân vật.",
    "firstNightPrompt": "",
    "otherNightPrompt": "Nếu Thợ cắt tóc chết hôm nay: Gọi Quỷ dậy. Cho xem là 'Nhân vật này chọn bạn' và thẻ Thợ cắt tóc. Quỷ có thể lắc đầu, hoặc chỉ 2 người. Nếu họ chọn người: Tráo thẻ nhân vật. Gọi mỗi người. Cho xem 'Bạn là', và thẻ nhân vật mới."
  },
  "barista": {
    "name": "Thợ pha cà phê",
    "ability": "Mỗi đêm, đến hoàng hôn, 1) 1 người sẽ tỉnh, khỏe mạnh và nhận thông tin đúng, hoặc 2) chức năng của họ được sử dụng 2 lần. Họ biết nó là gì.",
    "firstNightPrompt": "Chọn 1 người, gọi họ dậy và thông báo cho họ chức năng tác động lên họ. Sử dụng phù hợp chức năng (thông tin tỉnh/khỏe/đúng hoặc sử dụng chức năng 2 lần).",
    "otherNightPrompt": "Chọn 1 người, gọi họ dậy và thông báo cho họ chức năng tác động lên họ. Sử dụng phù hợp chức năng (thông tin tỉnh/khỏe/đúng hoặc sử dụng chức năng 2 lần)."
  },
  "baron": {
    "name": "Nam tước",
    "ability": "Có thêm Lữ khách trong game. [+2 Lữ khách]",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "beggar": {
    "name": "Ăn xin",
    "ability": "Bạn phải có thẻ phiểu để bỏ phiếu. Người chết có thể đưa thẻ của họ. Nếu vậy, bạn biết phe của họ. Bạn luôn tỉnh & khỏe mạnh.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "bishop": {
    "name": "Giám mục",
    "ability": "Chỉ có Người kể chuyện được biểu quyết. Mỗi ngày, ít nhất 1 người khác phe bạn bị biểu quyết.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "boffin": {
    "name": "Boffin",
    "ability": "Quỷ dữ (kể cả khi say rượu hoặc bị đầu độc) có một khả năng tốt của nhân vật không chơi. Cả hai bạn đều biết khả năng đó.",
    "firstNightPrompt": "Đánh thức Boffin và cho họ xem mã thông báo về khả năng mà Quỷ dữ có. Đưa Boffin trở lại trạng thái ngủ. Đánh thức Quỷ dữ, cho xem mã thông báo Boffin, sau đó cho xem mã thông báo về khả năng tốt mà Quỷ dữ có.",
    "otherNightPrompt": ""
  },
  "bonecollector": {
    "name": "Nhà sưu tầm xương",
    "ability": "Một lần trong game, vào buổi đêm, chọn người chết: họ lấy lại chức năng đến hoàng hôn.",
    "firstNightPrompt": "",
    "otherNightPrompt": "Nhà sưu tầm xương có thể lắc đầu hoặc chọn 1 người. Nếu họ chỉ người chết, đặt đánh dấu 'Có chức năng' của Nhà sưu tầm xương cạnh thẻ nhân vật được chọn. (Họ có thể phải thức dậy trong đêm để dùng nó.)"
  },
  "boomdandy": {
    "name": "Kẻ giữ bom",
    "ability": "Nếu bạn bị hành quyết, tất cả trừ 3 người chết. 1 phút sau, người có nhiều người chỉ nhất chết.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "bootlegger": {
    "name": "Kẻ buôn lậu",
    "ability": "Kịch bản này có nhân vật hoặc luật tự chế.",
    "firstNightPrompt": "Thông báo có Kẻ buôn lậu trong game và thông báo các nhân vật hoặc/và các luật tự chế.",
    "otherNightPrompt": ""
  },
  "bountyhunter": {
    "name": "Thợ săn tiền thưởng",
    "ability": "Bạn biết 1 người xấu đầu game. Nếu người bạn biết chết, bạn biết 1 người xấu khác tối nay. [1 Dân làng là xấu]",
    "firstNightPrompt": "Chỉ 1 người xấu. Gọi dân làng xấu dậy và cho họ thấy lá 'Bạn là' và giơ ngón cái xuống thể hiện xấu.",
    "otherNightPrompt": "Nếu người xấu đã biết chết, chỉ người xấu khác. "
  },
  "buddhist": {
    "name": "Phật tử",
    "ability": "Trong 2 phút đầu tiên mỗi ngày, người kỳ cựu không được nói.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "bureaucrat": {
    "name": "Công chức",
    "ability": "Mỗi đêm, chọn 1 người (không phải bạn): phiếu của họ được tính là 3 phiếu vào ngày mai.",
    "firstNightPrompt": "Công chức chỉ 1 người. Đặt đánh dấu '3 phiếu' của Công chức cạnh thẻ nhân vật của người được chọn.",
    "otherNightPrompt": "Công chức chỉ 1 người. Đặt đánh dấu '3 phiếu' của Công chức cạnh thẻ nhân vật của người được chọn."
  },
  "butcher": {
    "name": "Hàng thịt",
    "ability": "Mỗi ngày, sau hành quyết đầu tiên, bạn có thể biểu quyết lại.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "butler": {
    "name": "Quản gia",
    "ability": "Mỗi đêm, chọn 1 người (không phải bạn). Ngày hôm sau, bạn chỉ được bỏ phiếu khi người đó bỏ phiếu.",
    "firstNightPrompt": "Quản gia chỉ 1 người. Đánh dấu người đó là 'Chủ nhân'.",
    "otherNightPrompt": "Quản gia chỉ 1 người. Đánh dấu người đó là 'Chủ nhân'."
  },
  "cannibal": {
    "name": "Ăn thịt người",
    "ability": "Bạn có chức năng của người chết vì hành quyết gần nhất. Nếu họ là xấu, bạn trúng độc cho đến khi người tốt chết vì hành quyết.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "cerenovus": {
    "name": "Tẩy não",
    "ability": "Mỗi đêm, chọn 1 người & nhân vật tốt: họ phải 'điên' rằng họ là nhân vật đó, hoặc có thể bị hành quyết ngày mai.",
    "firstNightPrompt": "Tẩy não chỉ một người, và một nhân vật trong tờ của họ. Gọi người đó dậy, cho xem lá 'Nhân vật này chọn bạn', và thẻ Tẩy não. Cho xem thẻ nhân vật được chọn. Nếu họ không điên rằng mình là nhân vật đó vào ngày mai, họ có thể bị hành quyết.",
    "otherNightPrompt": "Tẩy não chỉ một người, và một nhân vật trong tờ của họ. Gọi người đó dậy, cho xem lá 'Nhân vật này chọn bạn', và thẻ Tẩy não. Cho xem thẻ nhân vật được chọn. Nếu họ không điên rằng mình là nhân vật đó vào ngày mai, họ có thể bị hành quyết."
  },
  "chambermaid": {
    "name": "Nữ phục vụ",
    "ability": "Mỗi đêm, chọn 2 người sống (không phải bạn): bạn biết số người thức dậy tối này vì chức năng của họ.",
    "firstNightPrompt": "Nữ phục vụ chỉ 2 người. Cho xem dấu hiệu số (0, 1, 2, …) bằng số người thức dậy tối nay vì chức năng của họ.",
    "otherNightPrompt": "Nữ phục vụ chỉ 2 người. Cho xem dấu hiệu số (0, 1, 2, …) bằng số người thức dậy tối nay vì chức năng của họ."
  },
  "chef": {
    "name": "Đầu bếp",
    "ability": "Đêm đầu tiên, bạn biết có bao nhiêu cặp người xấu ngồi cạnh nhau (hoặc là không có).",
    "firstNightPrompt": "Cho xem dấu hiệu số (1, 2,…) bằng số cặp người Xấu ngồi cạnh nhau, hoặc 0 nếu không có cặp nào.",
    "otherNightPrompt": ""
  },
  "choirboy": {
    "name": "Ca đoàn",
    "ability": "Nếu Quỷ giết Ông vua, bạn biết người nào là Quỷ. [+ Ông vua]",
    "firstNightPrompt": "",
    "otherNightPrompt": "Nếu Ông vua bị giết bởi Quỷ, gọi Ca đoàn dậy và chỉ người là Quỷ."
  },
  "clockmaker": {
    "name": "Thợ đồng hồ",
    "ability": "Đêm đầu tiên bạn biết khoảng cách từ Quỷ cho đến Tay Sai gần nhất.",
    "firstNightPrompt": "Cho xem dấu hiệu số (1, 2, 3, v.v.) bằng khoảng cách từ Quỷ đến Tay Sai gần nhất.",
    "otherNightPrompt": ""
  },
  "courtier": {
    "name": "Cận thần",
    "ability": "Một lần trong game, trong đêm, chọn 1 nhân vật: họ bị say trong 3 ngày & 3 đêm.",
    "firstNightPrompt": "Cận thần có thể lắc đầu, hoặc chỉ 1 nhân vật trong tờ của họ. Nếu Cận thần dùng chức năng của họ: Nếu có nhân vật đó trong game, người đó bị say.",
    "otherNightPrompt": "Giảm số ngày còn lại người bị đánh dấu bị bị say. Nếu Cận thần chưa sử dụng chức năng: Cận thần có thể lắc đầu, hoặc chỉ 1 nhân vật trong tờ của họ. Nếu Cận thần dùng chức năng của họ: Nếu có nhân vật đó trong game, người đó bị say."
  },
  "cultleader": {
    "name": "Trưởng giáo phái",
    "ability": "Mỗi đêm, bạn có phe của 1 người hàng xóm còn sống. Nếu tất cả những người tốt tham gia giáo phái của bạn, phe bạn thắng.",
    "firstNightPrompt": "Nếu trưởng giáo phái đổi phe, cho họ thấy ngón cái lên thể hiện tốt hoặc ngón cái xuống thể hiện xấu.",
    "otherNightPrompt": "Nếu trưởng giáo phái đổi phe, cho họ thấy ngón cái lên thể hiện tốt hoặc ngón cái xuống thể hiện xấu."
  },
  "damsel": {
    "name": "Thiếu nữ",
    "ability": "Tất cả tay sai biết bạn trong game. Nếu Tay sai công khai đoán bạn (lần duy nhất), phe bạn thua.",
    "firstNightPrompt": "Gọi tất cả tay sai dậy, cho họ xem lá 'Nhân vật này chọn bạn' và thẻ Thiếu nữ.",
    "otherNightPrompt": "Nếu được chọn bởi Thợ săn, gọi Thiếu nữ dậy, cho xem lá 'Bạn là' và thẻ Dân làng ngoài game."
  },
  "deusexfiasco": {
    "name": "Deus ex Fiasco",
    "ability": "Một lần trong game, Người kể chuyện sẽ \"mắc lỗi\", sửa nó và thừa nhận lỗi của mình.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "deviant": {
    "name": "Kẻ lệch lạc",
    "ability": "Nếu bạn hài hước hôm nay, bạn không thể chết vì bị đuổi.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "devilsadvocate": {
    "name": "Luật sư của Quỷ",
    "ability": "Mỗi đêm, chọn 1 người sống (khác đêm qua): nếu bị hành quyết ngày mai, họ không chết.",
    "firstNightPrompt": "Luật sư của Quỷ chỉ 1 người sống. người đó sống sót hành quyết ngày mai.",
    "otherNightPrompt": "Luật sư của Quỷ chỉ 1 người sống, khác đêm trước. người đó sống sót hành quyết ngày mai."
  },
  "djinn": {
    "name": "Thần đèn",
    "ability": "Sử dụng luật đặc biệt của Thần đèn. Tất cả mọi người biết nó là gì.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "doomsayer": {
    "name": "Khẩu nghiệp",
    "ability": "Nếu có ít nhất 4 người còn sống, mỗi người sống có thể công khai chọn (một lần duy nhất) một người cùng phe họ để chết.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "dreamer": {
    "name": "Mơ mộng",
    "ability": "Mỗi đêm, chọn 1 người (không phải mình hay Lữ Khách): được biết 1 chức năng tốt và 1 chức năng xấu, 1 trong số đó là đúng.",
    "firstNightPrompt": "Mơ mộng chỉ 1 người. Cho xem 1 thẻ nhân vật tốt và 1 thẻ nhân vật xấu; 1 trong số đó là đúng.",
    "otherNightPrompt": "Mơ mộng chỉ 1 người. Cho xem 1 thẻ nhân vật tốt và 1 thẻ nhân vật xấu; 1 trong số đó là đúng."
  },
  "drunk": {
    "name": "Say rượu",
    "ability": "Bạn không biết bạn là Say rượu. Bạn nghĩ bạn là nhân vật Dân làng, nhưng mà bạn không phải.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "duchess": {
    "name": "Phu nhân",
    "ability": "Mỗi ngày, 3 người có thể thăm bạn. Trong đêm*, mỗi người thăm sẽ biết được có bao nhiêu người thăm xấu, nhưng 1 người nhận sai thông tin.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "empath": {
    "name": "Đồng cảm",
    "ability": "Mỗi đêm, bạn biết số người xấu trong 2 hàng xóm sống của bạn.",
    "firstNightPrompt": "Cho xem dấu hiệu số (0, 1, 2) bằng số hàng xóm là người xấu sống bên cạnh Đồng cảm.",
    "otherNightPrompt": "Cho xem dấu hiệu số (0, 1, 2) bằng số hàng xóm là người Xấu sống bên cạnh Đồng cảm."
  },
  "engineer": {
    "name": "Kĩ sư",
    "ability": "Một lần trong game, trong đêm, chọn Quỷ nào hoặc những Tay sai nào trong game.",
    "firstNightPrompt": "Kĩ sư có thể lắc đầu, hoặc chỉ 1 Quỷ hoặc chỉ số lượng Tay sai thích hợp. Nếu Kĩ sư chọn nhân vật, thay thế Quỷ hoặc Tay sai với lựa chọn đó, rối gọi người liên quan dậy và cho xem lá 'Bạn là' và những thẻ thích hợp.",
    "otherNightPrompt": "Kĩ sư có thể lắc đầu, hoặc chỉ 1 Quỷ hoặc chỉ số lượng Tay sai thích hợp. Nếu Kĩ sư chọn nhân vật, thay thế Quỷ hoặc Tay sai với lựa chọn đó, rối gọi người liên quan dậy và cho xem lá 'Bạn là' và những thẻ thích hợp."
  },
  "eviltwin": {
    "name": "Sinh đôi xấu",
    "ability": "Bạn & 1 người khác phe biết nhau. Nếu người đó bị hành quyết, phe xấu thắng. Phe Tốt không thể thắng nếu 2 người cùng sống.",
    "firstNightPrompt": "Gọi Sinh đôi xấu và sinh đôi của họ, chắc chắn rằng cả 2 biết nhau. Chỉ Sinh đôi xấu, cho xem thẻ \"Sinh đôi xấu\" cho Sinh đôi tốt. Chỉ Sinh đôi tốt, cho xem thẻ nhân vật của họ cho Sinh đôi xấu.",
    "otherNightPrompt": ""
  },
  "exorcist": {
    "name": "Thầy trừ tà",
    "ability": "Mỗi đêm*, chọn 1 người (khác đêm qua): Quỷ, nếu được chọn, biết bạn là ai và không thức dậy đêm nay.",
    "firstNightPrompt": "",
    "otherNightPrompt": "Thầy trừ tà chỉ 1 người, khác đêm trước. Nếu ngườ đó là Quỷ: Gọi Quỷ dậy. Cho xem thẻ Thầy trừ tà. Chỉ Thầy trừ tà. Quỷ không hành động đêm nay."
  },
  "fanggu": {
    "name": "Fang Gu",
    "ability": "Mỗi đêm*, chọn 1 người: họ chết. Lữ khách  đầu tiên bị nhân vật này chọn sẽ biến thành Fang Gu xấu & bạn chết. [+1 Lữ khách]",
    "firstNightPrompt": "",
    "otherNightPrompt": "Fang Gu chỉ 1 người. người đó chết. Hoặc, nếu người đó là Lữ khách và không có Fang Gu khác: Fang Gu chết thay cho người được chọn. Người được chọn sẽ trở thành Fang Gu xấu. Gọi Fang Gu mới dậy. Cho xem lá 'Bạn là, thẻ Fang Gu. Cho xem lá 'Bạn là', và giơ ngón cái xuống thể hiện theo Phe Xấu."
  },
  "farmer": {
    "name": "Nông dân",
    "ability": "Nếu bạn chết trong đêm, 1 người tốt trở thành Nông dân.",
    "firstNightPrompt": "",
    "otherNightPrompt": "Nếu 1 Nông dân chết trong đêm, chọn người tốt khác và biến họ thành Nông dân. Gọi người tốt đó dậy, cho họ xem lá 'Bạn là' và thẻ nhân vật Nông dân."
  },
  "fearmonger": {
    "name": "Kẻ gây hãi",
    "ability": "Mỗi đêm, chọn 1 người. nếu bạn biểu quyết & hành quyết họ, phe họ thua. Tất cả mọi người biết bạn chọn 1 người mới.",
    "firstNightPrompt": "Kẻ gây hãi chỉ 1 người. Đặt thẻ Sợ hãi bên cạnh người đó và thông báo rằng 1 người mới đã được chọn bởi chức năng của Kẻ gây hãi.",
    "otherNightPrompt": "Kẻ gây hãi chỉ 1 người. Nếu khac đêm trước, đặt thẻ Sợ hãi bên cạnh người đó và thông báo rằng 1 người mới đã được chọn bởi chức năng của Kẻ gây hãi."
  },
  "fibbin": {
    "name": "Dối lừa",
    "ability": "1 lần trong game,có thể 1 người tốt nhận thông tin sai.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "fiddler": {
    "name": "Người vĩ cầm",
    "ability": "Một lần trong game, Quỷ chọn người khác phe: tất cả mọi người quyết định người thắng trong số 2 người.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "fisherman": {
    "name": "Ngư dân",
    "ability": "Một lần trong game, trong ngày, thăm Người kể chuyện để nhận tư vấn giúp bạn thắng.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "flowergirl": {
    "name": "Bán hoa",
    "ability": "Mỗi đêm*, bạn biết Quỷ có bỏ phiếu hôm nay hay không.",
    "firstNightPrompt": "",
    "otherNightPrompt": "Gật đầu 'có' hoặc lắc đầu 'không' tùy theo Quỷ có bỏ phiếu hôm nay không. Đặt thẻ đánh dấu 'Quỷ không bỏ phiếu' (bỏ 'Quỷ bỏ phiếu', nếu có)."
  },
  "fool": {
    "name": "Thằng ngốc",
    "ability": "Lần đầu bạn chết, bạn không.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "fortuneteller": {
    "name": "Thầy bói",
    "ability": "Mỗi đêm, chọn 2 người: bạn biết trong đó có Quỷ hay không. Có 1 người tốt bị tính là Quỷ với bạn.",
    "firstNightPrompt": "Thầy bói chỉ 2 người. Đưa dấu hiệu đầu (gật đầu đúng, lắc đầu sai) tùy theo trong số đó có Quỷ không. ",
    "otherNightPrompt": "Thầy bói chỉ 2 người. Đưa dấu hiệu đầu (gật đầu đúng, lắc đầu sai) tùy theo trong số đó có Quỷ không. "
  },
  "gambler": {
    "name": "Con bạc",
    "ability": "Mỗi đêm*, chọn 1 người & đoán nhân vật của họ: nếu bạn đoán sai, bạn chết.",
    "firstNightPrompt": "",
    "otherNightPrompt": "Con bạc chỉ 1 người, và 1 nhân vật trong tờ của họ. Nếu sai, Con bạc chết."
  },
  "gangster": {
    "name": "Xã hội đen",
    "ability": "Một lần trong ngày, bạn có thể chọn giết 1 hàng xóm sống, nếu hàng xóm sống còn lại đồng ý.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "general": {
    "name": "Đại tướng",
    "ability": "Mỗi đêm, bạn biết phe mà Người kể chuyện nghĩ là đang thắng: tốt, xấu, hoặc ngang bằng.",
    "firstNightPrompt": "Cho Đại tướng thấy ngón cái lên nếu tốt đang thắng, ngón cái xuống nếu xấu đang thắng hoặc ngón cái ngang nếu đang cân bằng.",
    "otherNightPrompt": "Cho Đại tướng thấy ngón cái lên nếu tốt đang thắng, ngón cái xuống nếu xấu đang thắng hoặc ngón cái ngang nếu đang cân bằng."
  },
  "gnome": {
    "name": "Chú lùn",
    "ability": "Tất cả người chơi bắt đầu biết một người chơi có cùng phe với bạn. Bạn có thể chọn giết bất kỳ ai đề cử họ.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "goblin": {
    "name": "Yêu tinh",
    "ability": "Nếu bạn công khai rằng mình là Yêu tinh khi bị biểu quyết & bị hành quyết ngày hôm đó, đội bạn thắng.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "godfather": {
    "name": "Bố già",
    "ability": "Bạn bắt đầu biết những Lữ khách trong game. Nếu 1 trong số đó chết hôm nay, chọn 1 người đêm nay: họ chết. [−1 or +1 Lữ khách]",
    "firstNightPrompt": "Cho xem tất cả thẻ Lữ khách trong game.",
    "otherNightPrompt": "Nếu Lữ khách chết hôm nay: Bố già chỉ 1 người. người đó chết."
  },
  "golem": {
    "name": "Golem",
    "ability": "Bạn chỉ được biểu quyết 1 lần trong game. Khi đó, nếu người được biểu quyết không phải là Quỷ, họ chết.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "goon": {
    "name": "Bất lương",
    "ability": "Mỗi đêm, người đầu tiên chọn bạn bằng chức năng của họ sẽ bị say đến hoàng hôm. Bạn trở thành phe người đó.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "gossip": {
    "name": "Bà tám",
    "ability": "Mỗi ngày, bạn có thể đưa ra 1 mệnh đề công khai. Đêm nay, nếu nó đúng, 1 người chết.",
    "firstNightPrompt": "",
    "otherNightPrompt": "Nếu mệnh đề công khai của Bà tám là đúng: Chọn 1 người không được bảo vệ khỏi cái chết tối nay. người đó chết."
  },
  "grandmother": {
    "name": "Bà ngoại",
    "ability": "Bạn bắt đầu biết 1 người tốt & nhân vật của họ. Nếu Quỷ giết họ, bạn chết theo.",
    "firstNightPrompt": "Cho xem thẻ nhân vật được đánh dấu. Chỉ người được đánh dấu.",
    "otherNightPrompt": "Nếu cháu của Bà ngoại bị giết bởi Quỷ tối nay: Bà ngoại chết."
  },
  "gunslinger": {
    "name": "Xạ thủ",
    "ability": "Mỗi ngày, sau khi phiếu bầu đầu tiên được đếm, bạn có thể chọn 1 người bỏ phiếu: họ chết.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "harlot": {
    "name": "Gái điếm",
    "ability": "Mỗi đêm*, chọn 1 người sống: nếu họ đồng ý, bạn biết nhân vật của họ, nhưng cả hai có thể chết.",
    "firstNightPrompt": "",
    "otherNightPrompt": "Gái điếm chỉ bất kì người nào. Rồi cho Gái điếm đi ngủ. Gọi người được chọn, Cho họ xem lá 'Nhân vật này chọn bạn', và thẻ Gái điếm. người đó có thể gật đầu có hoặc lắc đầu không. Nếu họ gật đầu có, gọi Gái điếm và cho xem thẻ nhân vật của người được chọn. Rồi bạn có thể cho cả hai cùng chết."
  },
  "harpy": {
    "name": "Người chim",
    "ability": "Mỗi đêm, chọn 2 người: ngày mai, người thứ nhất điên rằng người thứ hai là xấu, hoặc chỉ 1 hoặc cả hai có thể chết.",
    "firstNightPrompt": "Gọi Người chim dậy; họ chỉ 1 người và 1 người khác. Gọi người đầu tiên được Người chim chỉ, cho họ xem lá 'Nhân vật này chọn bạn', và token Người chim, rồi chỉ người thứ hai được Người chim chỉ.",
    "otherNightPrompt": "Gọi Người chim dậy; họ chỉ 1 người và 1 người khác. Gọi người đầu tiên được Người chim chỉ, cho họ xem lá 'Nhân vật này chọn bạn', và token Người chim, rồi chỉ người thứ hai được Người chim chỉ."
  },
  "hatter": {
    "name": "Thợ làm mũ",
    "ability": "Nếu bạn chết trong hôm nay hoặc đêm nay, Quỷ và Tay sai có thể chọn để trở thành nhân vật Quỷ và Tay sai mới.",
    "firstNightPrompt": "",
    "otherNightPrompt": "Nếu Thợ làm mũ chết trong hôm nay: Gọi Quỷ và Tay sai dậy. Cho họ thấy token \"Nhân vật này chọn bạn\", và token Thợ làm mũ. Mỗi người có thể lắc đầu hoặc chọn 1 nhân vật cùng loại với nhân vật của họ.  Nếu đó có 2 người cùng nhân vật, lắc đầu và ra dấu cho người sau chọn lại. Cho họ đi ngủ. Đổi nhân vật của họ bằng nhân vật họ chọn."
  },
  "hellslibrarian": {
    "name": "Thư viện Địa ngục",
    "ability": "Điều xấu có thể xảy ra với người nói khi Người kể chuyện cần im lặng.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "heretic": {
    "name": "Dị giáo",
    "ability": "Ai thắng, thua & ai thua, thắng, ngay cả khi bạn đã chết.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "hermit": {
    "name": "Hermit",
    "ability": "Bạn có tất cả các khả năng của Outsider. [-0 hoặc -1 Outsider]",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "highpriestess": {
    "name": "Nữ thượng tế",
    "ability": "Mỗi đêm, bạn biết Người kể chuyện nghĩ bạn nên nói chuyện với người nào nhất",
    "firstNightPrompt": "Chỉ 1 người.",
    "otherNightPrompt": "Chỉ 1 người."
  },
  "huntsman": {
    "name": "Thợ săn",
    "ability": "Một lần trong game, trong đêm, chọn người sống: Thiếu nữ, nếu được chọn, trở thành Dân làng ngoài game. [+Thiếu nữ]",
    "firstNightPrompt": "Thợ săn lắc đầu hoặc chỉ 1 người. Nếu họ chỉ Thiếu nữ: gọi người đó dậy, cho xem lá 'Bạn là' và thẻ nhân vật ngoài game.",
    "otherNightPrompt": "Thợ săn lắc đầu hoặc chỉ 1 người. Nếu họ chỉ Thiếu nữ: gọi người đó dậy, cho xem lá 'Bạn là' và thẻ nhân vật ngoài game."
  },
  "imp": {
    "name": "Imp",
    "ability": "Mỗi đêm*, chọn 1 người: họ chết. Nếu bạn giết chính mình bằng cách này, 1 Tay sai trở thành Imp.",
    "firstNightPrompt": "",
    "otherNightPrompt": "Imp chỉ 1 người. Người đó chết. Nếu Imp chỉ chính mình: Thay thế thẻ nhân vật của 1 tay sai còn sống bằng thẻ Imp thừa . Cho xem lá 'Bạn là', và thẻ Imp."
  },
  "innkeeper": {
    "name": "Chủ quán trọ",
    "ability": "Mỗi đêm*, chọn 2 người: họ không thể chết đêm nay, nhưng 1 người bị say đến hoàng hôn.",
    "firstNightPrompt": "",
    "otherNightPrompt": "người được bảo vệ và bị say trước đó mất đánh dầu. Chủ quán trọ chỉ 2 người. Những người đó được bảo vệ. Một trong số đó bị say."
  },
  "investigator": {
    "name": "Điều tra viên",
    "ability": "Đêm đầu tiên, bạn biết chức năng của Tay Sai thuộc về 1 trong 2 người.",
    "firstNightPrompt": "Cho xem thẻ nhân vật của Tay Sai trong cuộc. Chỉ 2 người, 1 trong số họ là nhân vật đó.",
    "otherNightPrompt": ""
  },
  "judge": {
    "name": "Thẩm phán",
    "ability": "Một lần trong game, nếu người khác biểu quyết, bạn có thể ép hành quyết hiện tại thành công hay thất bại.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "juggler": {
    "name": "Tung hứng",
    "ability": "Vào ngày đầu tiên của bạn, đoán công khai nhân vật của 5 người. Đêm đó, bạn biết bạn có bao nhiêu người đúng.",
    "firstNightPrompt": "",
    "otherNightPrompt": "Nếu hôm nay là ngày đầu tiên của Tung hứng: Cho xem dấu hiệu số (0, 1, 2, v.v) bằng số thẻ 'Đúng'. Bỏ đánh dấu."
  },
  "kazali": {
    "name": "Kazali",
    "ability": "Mỗi đêm* chọn 1 người: họ chết. [Bạn chọn những ai là Tay sai. -? đến +? Lữ khách]",
    "firstNightPrompt": "Kazali chỉ 1 người và nhân vật trong tờ nhân vật. Đổi nhân vật cũ của họ với nhân vật Tay sai mới, cho họ thấy token \"Bạn là\" và nhân vật Tay sai đó, và giơ ngón cái xuống. Lặp đi lặp lại cho đến khi đủ số Tay sai. Cho Kazali đi ngủ.",
    "otherNightPrompt": "Kazali chỉ 1 người. Người đó chết."
  },
  "king": {
    "name": "Ông vua",
    "ability": "Mỗi đêm, nếu số người chết nhiều hơn hoặc bằng số người sống, bạn biết nhân vật của người sống. Quỷ biết bạn là ai.",
    "firstNightPrompt": "Gọi Quỷ dậy, cho xem lá 'Nhân vật này chọn bạn', cho xem thẻ Ông vua và chỉ vào Ông vua.",
    "otherNightPrompt": "Nếu người chết nhiều hơn hoặc bằng người sống, cho Ông vua xem thẻ nhân vật của người sống."
  },
  "klutz": {
    "name": "Hậu đậu",
    "ability": "Khi bạn biết bạn chết, công khai chọn 1 người sống: nếu họ là người Xấu, phe bạn thua.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "knight": {
    "name": "Hiệp sỹ",
    "ability": "Bạn bắt đầu biết 2 người chơi không phải là Quỷ",
    "firstNightPrompt": "Chỉ 2 người không phải Quỷ ",
    "otherNightPrompt": ""
  },
  "legion": {
    "name": "Legion",
    "ability": "Mỗi đêm*, một người có thể chết. Hành quyết thất bại nếu chỉ có người xấu bỏ phiếu. Bạn cũng được thấy là Tay sai. [Đa số người là Legion]",
    "firstNightPrompt": "",
    "otherNightPrompt": "Chọn 1 người, người đó chết."
  },
  "leviathan": {
    "name": "Leviathan",
    "ability": "Nếu nhiều hơn 1 người tốt bị hành quyết, bạn thắng. Tất cả người biết bạn trong cuộc. Sau ngày 5, xấu thắng.",
    "firstNightPrompt": "Đặt đánh dấu 'Ngày 1' của Leviathan. Thông báo rằng 'Có Leviathan trong cuộc: Hôm nay là ngày 1.'",
    "otherNightPrompt": "Đổi đánh dấu ngày của Leviathan sang ngày hôm sau."
  },
  "librarian": {
    "name": "Thủ thư",
    "ability": "Đêm đầu tiên, bạn biết chức năng của Lữ khách thuộc về 1 trong 2 người (hoặc là không có Lữ khách).",
    "firstNightPrompt": "Cho xem thẻ nhân vật Lữ khách trong cuộc. Chỉ vào 2 người, 1 trong số họ là nhân vật đó.",
    "otherNightPrompt": ""
  },
  "lilmonsta": {
    "name": "Lil' Monsta",
    "ability": "Mỗi đêm, Tay sai quyết định ai trông nom thẻ Lil' Monsta & \"là Quỷ\".Mỗi đêm*, một người có thể chết. [+1 Tay sai]",
    "firstNightPrompt": "Gọi tất cả Tay sai dậy, cho họ chỉ phiếu cho người họ muốn trông coi Lil' Monsta.",
    "otherNightPrompt": "Gọi tất cả Tay sai dậy, cho họ chỉ phiếu cho người họ muốn trông coi Lil' Monsta.. Chọn 1 người, người đó chết."
  },
  "lleech": {
    "name": "Lleech",
    "ability": "Mỗi đêm*, chọn 1 người: họ chết. Bạn chọn 1 người lúc bắt đầu: họ trúng độc - bạn chết khi & chỉ khi họ chết.",
    "firstNightPrompt": "Lleech chọn 1 người. Đặt thẻ nhớ 'Trúng độc'.",
    "otherNightPrompt": "Lleech chỉ 1 người. Người đó chết."
  },
  "lordoftyphon": {
    "name": "Thần Typhon",
    "ability": "Mỗi đêm*, chọn 1 người: họ chết [Tất cả người xấu ngồi theo hàng. Bạn là người ở giữa. +1 Tay sai. -? đến +? Lữ khách]",
    "firstNightPrompt": "Gọi những người ngồi 2 bên của Quỷ dậy. Cho xem lá \"Bạn Là\", token Tay sai họ biến thành, và ngón cái xuống thể hiện họ là người xấu.",
    "otherNightPrompt": "Thần Typhon chỉ 1 người. Họ chết."
  },
  "lunatic": {
    "name": "Người điên",
    "ability": "Bạn nghĩ bạn là Quỷ, nhưng bạn không phải. Quỷ biết bạn là ai & người bạn chọn trong đêm.",
    "firstNightPrompt": "Nếu có 7 người trở lên: Cho Người điên thấy 'Tay sai' ngẫu nhiên, bằng số Tay sai trong game. Cho xem 3 nhân vật tốt ngẫu nhiên. Nếu Người điên nhận được thẻ Quỷ thức dậy đêm nay: Cho Người điên sử dụng chức năng Quỷ đó. Đặt đánh dấu 'tấn công' của họ. Gọi Quỷ dậy. Cho Quỷ xem thẻ nhân vật thật sự của họ. Cho họ thấy Người điên. Nếu Người điên tấn công người: Cho Quỷ thật sự biết những người đó. Bỏ tất cả đánh dấu 'tấn công'.",
    "otherNightPrompt": "Cho Người điên sử dụng chức năng Quỷ. Đặt đánh dấu 'tấn công'. Nếu Người điên chọn người: Wake the Demon. Cho xem đánh dấu 'tấn công', và chỉ tất cả người được đánh dấu. Bỏ tất cả đánh dấu 'tấn công'."
  },
  "lycanthrope": {
    "name": "Người sói",
    "ability": "Mỗi đêm*, chọn 1 người sống: nếu là tốt, họ chết, nhưng họ là người duy nhất có thể chết đêm nay.",
    "firstNightPrompt": "",
    "otherNightPrompt": "Người sói chỉ người sống: nếu là tốt, họ chết và những người khác không thế chết đêm nay."
  },
  "magician": {
    "name": "Ảo thuật gia",
    "ability": "Quỷ nghĩ bạn là Tay sau. Tay sai nghĩ bạn là Quỷ.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "marionette": {
    "name": "Con rối",
    "ability": "Bạn nghĩ bạn là nhân vật tốt nhưng không phải. Quỷ biết bạn là ai. [Bạn ngồi cạnh Quỷ]",
    "firstNightPrompt": "Chọn một người tốt ngồi kế Quỷ và đặt thẻ đánh dấu 'là Con rối'. Gọi Quỷ dậy và cho họ biết Con rối.",
    "otherNightPrompt": ""
  },
  "mastermind": {
    "name": "Chủ mưu",
    "ability": "Nếu Quỷ chết vì hành quyết (kết thúc game), chơi thêm 1 ngày nữa. Nếu 1 người bị hành quyết sau đó, phe họ thua.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "mathematician": {
    "name": "Nhà toán học",
    "ability": "Mỗi đêm, bạn biết có bao nhiêu tính năng hoạt động bất thường (từ sáng) do chức năng của nhân vật khác.",
    "firstNightPrompt": "Cho xem dấu hiệu số (0, 1, 2, v.v.) bằng số người có chức năng hoạt động bất thường vì chức năng khác.",
    "otherNightPrompt": "Cho xem dấu hiệu số (0, 1, 2, v.v.) bằng số người có chức năng hoạt động bất thường vì chức năng khác."
  },
  "matron": {
    "name": "Bá chủ",
    "ability": "Mỗi ngày, bạn có thể đổi chỗ của nhiều nhất 3 cặp. người không được rời chỗ ngồi để nói chuyện riêng.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "mayor": {
    "name": "Thị trưởng",
    "ability": "Nếu còn 3 người sống mà ko ai bị Hành Quyết, phe bạn thắng. Nếu bạn sẽ chết trong đêm, có thể người khác sẽ chết thay.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "mezepheles": {
    "name": "Kẻ chiêu mộ",
    "ability": "Bạn bắt đầu biết 1 từ bí mật. Người tốt đầu tiên nói từ này trở thành người xấu đêm đó.",
    "firstNightPrompt": "Cho Kẻ chiêu mộ biết từ bí mật.",
    "otherNightPrompt": "Gọi người tốt đầu tiên nói từ bí mật của Kẻ chiêu mộ dậy và cho xem lá 'Bạn là' và ngón tay cái xuống thể hiện xấu."
  },
  "minstrel": {
    "name": "Người hát rong",
    "ability": "Nếu 1 Tay sai chết vì hành quyết, tất cả người khác (trừ Du khách)  đều bị say đến hoàng hôn ngày hôm sau.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "monk": {
    "name": "Nhà sư",
    "ability": "Mỗi đêm*, chọn 1 người (không phải bạn): họ an toàn khỏi Quỷ đêm nay.",
    "firstNightPrompt": "",
    "otherNightPrompt": "Người được bảo vệ trước đó sẽ không được bảo vệ nữa. Nhà sư chỉ 1 người không phải chính họ. Đánh dấu người đó 'Bảo vệ'."
  },
  "moonchild": {
    "name": "Con trăng",
    "ability": "Khi bạn biết bạn chết, công khai chọn 1 người sống. Tối nay, nếu họ là người tốt, họ chết.",
    "firstNightPrompt": "",
    "otherNightPrompt": "Nếu Con trăng sử dụng chức năng lên 1 người hôm nay: Nếu người đó là tốt, họ chết."
  },
  "mutant": {
    "name": "Đột biến",
    "ability": "Nếu bạn \"điên' rằng mình là Lữ khách, có thể bạn bị Hành Quyết.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "nightwatchman": {
    "name": "Người gác đêm",
    "ability": "Một lần trong game, trong đêm, chọn 1 người: họ biết bạn là ai.",
    "firstNightPrompt": "Người gác đêm có thể chỉ 1 người. Gọi người đó dậy, cho xem lá 'Nhân vật này chọn bạn' và thẻ Người gác đêm, và chỉ Người gác đêm.",
    "otherNightPrompt": "Người gác đêm có thể chỉ 1 người. Gọi người đó dậy, cho xem lá 'Nhân vật này chọn bạn' và thẻ Người gác đêm, và chỉ Người gác đêm."
  },
  "noble": {
    "name": "Quý tộc",
    "ability": "Bạn bắt đầu biết 3 người, 1 và chỉ 1 người là xấu.",
    "firstNightPrompt": "Chỉ 3 người trong đó có người xấu, không theo thứ tự.",
    "otherNightPrompt": ""
  },
  "nodashii": {
    "name": "No Dashii",
    "ability": "Mỗi đêm*, chọn 1 người: họ chết. 2 hàng xóm Dân làng của bạn trúng độc.",
    "firstNightPrompt": "",
    "otherNightPrompt": "No Dashii chỉ 1 người. Người đó chết."
  },
  "ogre": {
    "name": "Ogre",
    "ability": "Trong đêm đầu tiên, chọn 1 người (không phải bạn): bạn trở thành phe của họ (bạn không biết phe của mình) ngay cả khi say hoặc bị độc.",
    "firstNightPrompt": "Orge chỉ 1 người (không phải chính họ) và trở thành phe đó.",
    "otherNightPrompt": ""
  },
  "ojo": {
    "name": "Ojo",
    "ability": "Mỗi đêm*, chọn 1 nhân vật: họ chết. Nếu nó không có trong game, Người kể chuyện chọn người chết.",
    "firstNightPrompt": "",
    "otherNightPrompt": "Ojo chỉ 1 nhân vật trong tờ kịch bản; nếu có trong game, người đó chết. Nếu nó không có trong game, quản trò chọn người chết thay."
  },
  "oracle": {
    "name": "Tiên tri",
    "ability": "Mỗi đêm*, bạn biết có bao nhiêu người chết là Phe Xấu.",
    "firstNightPrompt": "",
    "otherNightPrompt": "Cho xem dấu hiệu số (0, 1, 2, v.v.) bằng số Phe Xấu đã chết."
  },
  "organgrinder": {
    "name": "Nhạc công đường phố",
    "ability": "Tất cả người chơi đều nhắm mắt khi bỏ phiếu và số phiếu bầu sẽ được giữ bí mật. Mỗi đêm, hãy chọn xem bạn có say hay không.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "pacifist": {
    "name": "Hòa bình",
    "ability": "Người tốt bị hành quyết có thể không chết.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "philosopher": {
    "name": "Triết gia",
    "ability": "Chỉ 1 lần duy nhất, trong đêm, chọn 1 nhân vật Phe Tốt: nhận chức năng đó. Nếu nhân vật này đã có trong làng, họ sẽ bị say.",
    "firstNightPrompt": "Nếu Triết gia không dùng chức năng, họ có thể lắc đầu. Nếu Triết gia muốn chọn nhân vật, họ chỉ vào tờ của họ. Tráo thẻ nhân vật của Triết gia với nhân vật ngoài cuộc. Hoặc, nếu nhân vật này trong cuộc, đánh dấu \"Say\" cạnh nhân vật đó và thẻ \"là Triết gia\" cạnh Triết gia.",
    "otherNightPrompt": "Nếu Triết gia không dùng chức năng, họ có thể lắc đầu. Nếu Triết gia muốn chọn nhân vật, họ chỉ vào tờ của họ. Tráo thẻ nhân vật của Triết gia với nhân vật ngoài cuộc. Hoặc, nếu nhân vật này trong cuộc, đánh dấu \"Say\" cạnh nhân vật đó và thẻ \"là Triết gia\" cạnh Triết gia."
  },
  "pithag": {
    "name": "Pit-Hag",
    "ability": "Mỗi đêm*, chọn 1 người & 1 nhân vật mà họ biến thành (nếu ngoài cuộc). Nếu Quỷ được sinh ra, cái chết xảy ra ngẫu nhiên.",
    "firstNightPrompt": "",
    "otherNightPrompt": "Pit-hag chỉ 1 người và nhân vật trong tờ của họ. Nếu nhân vật này ở ngoài cuộc, gọi người đó dậy và cho họ xem lá 'Bạn là' và thẻ nhân vật liên quan. Nếu nhân vật này ở trong cuộc, không có gì xảy ra."
  },
  "pixie": {
    "name": "Tiểu tiên",
    "ability": "Bạn biết 1 Dân làng trong cuộc. Nếu bạn điên rằng bạn là nhân vật này, bạn nhân chức năng của họ khi họ chết.",
    "firstNightPrompt": "Cho Tiểu tiên xem 1 thẻ nhân vật của Dân làng trong cuộc.",
    "otherNightPrompt": ""
  },
  "plaguedoctor": {
    "name": "Bác sĩ dịch hạch",
    "ability": "Khi bạn chết, Người kể chuyện có chức năng của Tay sai.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "po": {
    "name": "Po",
    "ability": "Mỗi đêm*, bạn có thể chọn 1 người: họ chết. Nếu lựa chọn trước là không ai cả, chọn 3 người tối nay.",
    "firstNightPrompt": "",
    "otherNightPrompt": "Nếu Po không chọn ai đêm trước: Po chỉ 3 người. Ngược lại: Po có thể lắc đầu, hoặc chỉ 1 người. Người được chọn chết"
  },
  "poisoner": {
    "name": "Độc thủ",
    "ability": "Mỗi đêm, chọn 1 người, họ sẽ bị đầu độc cho đến hết sáng hôm sau.",
    "firstNightPrompt": "Độc thủ chỉ 1 người. Đánh dấu là \"Trúng độc\"",
    "otherNightPrompt": "Người bị trúng độc trước đó không còn bị trúng độc. Kẻ đầu độc chỉ 1 người. Chuyển \"Trúng độc\" sang người mới."
  },
  "politician": {
    "name": "Chính trị gia",
    "ability": "Nếu bạn chịu trách nhiệm lớn nhất đến sự thất bạn của đội bạn, bạn đổi phe và thắng, ngay cả khi chết.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "poppygrower": {
    "name": "Người trồng hoa",
    "ability": "Quỷ & Tay sai không biết nhau. Nếu bạn chết, họ biết nhau trong đêm đó.",
    "firstNightPrompt": "Không cho Quỷ/Tay sai biết nhau",
    "otherNightPrompt": "Nếu Người trồng hoa chết, cho Quỷ/Tay sai biết nhau."
  },
  "preacher": {
    "name": "Mục sư",
    "ability": "Mỗi đêm, chọn 1 người: Tay sai, nếu được chọn, biết điều đó. Tất cả Tay sai được chọn không có chức năng.",
    "firstNightPrompt": "Mục sư chọn 1 người. Nếu Tay sai được chọn, gọi Tay sai dậy và cho xem lá \"Nhân vật này chọn bạn\" và thẻ Mục sư.",
    "otherNightPrompt": "Mục sư chọn 1 người. Nếu Tay sai được chọn, gọi Tay sai dậy và cho xem lá \"Nhân vật này chọn bạn\" và thẻ Mục sư."
  },
  "princess": {
    "name": "Công chúa",
    "ability": "Vào ngày đầu tiên của bạn, nếu bạn đề cử và xử tử một người chơi, Ác quỷ sẽ không giết người vào đêm nay.",
    "firstNightPrompt": "",
    "otherNightPrompt": "Nếu hôm nay là ngày đầu tiên của Công chúa, và họ đề cử và xử tử một người chơi, Ác quỷ sẽ không giết người."
  },
  "professor": {
    "name": "Giáo sư",
    "ability": "Một lần trong game, trong đêm*, chọn người chết: Nếu họ là Dân làng, họ được hồi sinh.",
    "firstNightPrompt": "",
    "otherNightPrompt": "Nếu Giáo sư chưa dùng chức năng: Giáo sư có thể lắc đầu hoặc chỉ 1 người. Nếu người đó là Dân làng, họ được sống lại."
  },
  "psychopath": {
    "name": "Người tâm thần",
    "ability": "Mỗi ngày, trước biểu quyết, bạn có thể công khai chọn 1 người: họ chết. Nếu bị hành quyết, bạn chỉ chết khi bạn thua oẳn tù tì.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "pukka": {
    "name": "Pukka",
    "ability": "Mỗi đêm, chọn 1 người: họ trúng độc. Người trúng độc trước đó chết rồi khỏe lại.",
    "firstNightPrompt": "Pukka chỉ 1 người. Người đó bị trúng độc.",
    "otherNightPrompt": "Pukka chỉ 1 người. Người đó bị trúng độc. Người trúng độc trước đó chết."
  },
  "puzzlemaster": {
    "name": "Bậc thầy câu đố",
    "ability": "1 người bị say rượu, ngay cả khi bạn chết. Nếu bạn đoán (1 lần) người đó là ai, biết Quỷ là ai, nhưng nếu đoán sai sẽ nhận thông tin sai.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "ravenkeeper": {
    "name": "Nuôi quạ",
    "ability": "Nếu bạn chết trong đêm, bạn được gọi dậy để chọn 1 người: bạn biết nhân vật của họ.",
    "firstNightPrompt": "",
    "otherNightPrompt": "Nếu Nuôi quạ chết trong đêm: Nuôi quạ chỉ 1 người. Cho xem thẻ nhân vật của người đó."
  },
  "recluse": {
    "name": "Người ẩn dật",
    "ability": "Bạn bị thấy là người xấu, và là Tay Sai hoặc Quỷ, kể cả khi chết.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "revolutionary": {
    "name": "Cách mạng",
    "ability": "2 người ngồi cạnh nhau được biết là cùng phe. Một lần trong game, một trong số họ thấy sai.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "riot": {
    "name": "Nổi loạn",
    "ability": "Người được biểu quyết chết, nhưng họ có thể biểu quyết ngay lập tức (trong ngày 3, họ bắt buộc). Sau ngày 3, phe xấu thắng. [All Minions are Riot]",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "sage": {
    "name": "Hiền nhân",
    "ability": "Nếu bạn bị Quỷ giết, bạn sẽ biết nó là 1 trong 2 người.",
    "firstNightPrompt": "",
    "otherNightPrompt": "Nếu Hiền nhân bị giết bởi Quỷ: Chỉ 2 người, một trong số họ là Quỷ."
  },
  "sailor": {
    "name": "Thủy thủ",
    "ability": "Mỗi đêm, chọn người sống: Bạn hoặc họ bị say đến hoàng hôn. Bạn không thể chết.",
    "firstNightPrompt": "Thủy thủ chỉ người sống. Thủy thủ hoặc người đó bị say.",
    "otherNightPrompt": "Người bị say trước đó không còn bị say nữa. Thủy thủ chỉ 1 người. Thủy thủ hoặc người đó bị say."
  },
  "saint": {
    "name": "Thánh",
    "ability": "Nếu bạn bị Hành Quyết, phe bạn thua.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "savant": {
    "name": "Nhà bác học",
    "ability": "Mỗi ngày, bạn có thể gặp Quản trò để học 2 điều: 1 đúng và 1 sai.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "scapegoat": {
    "name": "Hiến tế",
    "ability": "Nếu người cùng phe bạn bị hành quyết, bạn có thể bị hành quyết thay.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "scarletwoman": {
    "name": "Phụ nữ đỏ",
    "ability": "Nếu còn 5 người trở lên còn sống & Quỷ chết, bạn trở thành Quỷ. (Không tính Du khách)",
    "firstNightPrompt": "",
    "otherNightPrompt": "Nếu Phụ nữ đỏ trở thành Quỷ: Cho xem lá \"Bạn là\", và thẻ quỷ."
  },
  "seamstress": {
    "name": "Thợ may",
    "ability": "Chỉ 1 lần duy nhất, trong đêm, chọn 2 người (không phải mình): bạn biết họ có cùng phe hay không.",
    "firstNightPrompt": "Nếu Thợ may không dùng chức năng của họ: Thợ may có thể lắc đầu không. Nếu Thợ may chọn 2 người, lắc đầu hoặc gật đầu tùy theo 2 người đó có cùng phe không.",
    "otherNightPrompt": "Nếu Thợ may không dùng chức năng của họ: Thợ may có thể lắc đầu không. Nếu Thợ may chọn 2 người, lắc đầu hoặc gật đầu tùy theo 2 người đó có cùng phe không."
  },
  "sentinel": {
    "name": "Lính gác",
    "ability": "Có thể có thêm hoặc bớt 1 Lữ khách trong cuộc.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "shabaloth": {
    "name": "Shabaloth",
    "ability": "Mỗi đêm*, chọn 2 người: họ chết. 1 người chết đêm qua có thể bị nôn ra.",
    "firstNightPrompt": "",
    "otherNightPrompt": "Một người bị giết bởi Shabaloth đêm qua có thể được hồi sinh. Shabaloth chỉ 2 người. Những người đó chết."
  },
  "shugenja": {
    "name": "Shugenja",
    "ability": "Bạn bắt đầu biết người xấu gần nhất với bạn ngồi theo chiều hay ngược chiều kim đồng hồ. Nếu như nhau, thông tin này sẽ mang tính ngẫu nhiên.",
    "firstNightPrompt": "Gọi Shugenja dậy; chỉ ngang về hướng có người xấu gần nhất. Nếu cả 2 người xấu gần nhất có khoảng cách như nhau, chỉ tay về 1 trong 2 hướng.",
    "otherNightPrompt": ""
  },
  "slayer": {
    "name": "Diệt quỷ",
    "ability": "Chỉ 1 lần duy nhất, ban ngày, chọn 1 người công khai: Quỷ mà bị chọn thì sẽ chết.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "snakecharmer": {
    "name": "Nuôi rắn",
    "ability": "Mỗi đêm, chọn người sống: Quỷ được chọn sẽ hoán đổi nhân vật & phe với bạn & sau đó bị trúng độc.",
    "firstNightPrompt": "Nuôi rắn chỉ 1 người. Nếu người đó là Quỷ: hoán đổi nhân vật và phe của Quỷ và Nuôi rắn. Gọi mỗi người dậy để thông báo phe và nhân vật của họ.  Nuôi rắn hoá thành Quỷ và đổi sang Phe Xấu. Quỷ cũ hoá thành Nuôi rắn, và đổi sang Phe Tốt và bị trúng độc (không còn chức năng).",
    "otherNightPrompt": "Nuôi rắn chỉ 1 người. Nếu người đó là Quỷ: hoán đổi nhân vật và phe của Quỷ và Nuôi rắn. Gọi mỗi người dậy để thông báo phe và nhân vật của họ.  Nuôi rắn mới bị trúng độc (không còn chức năng)."
  },
  "snitch": {
    "name": "Mách lẻo",
    "ability": "Tay sai bắt đầu biết 3 nhân vật ngoài cuộc.",
    "firstNightPrompt": "Nếu Phụ nữ đỏ trở thành Quỷ: Cho xem lá \"Bạn là\", và thẻ quỷ.",
    "otherNightPrompt": ""
  },
  "soldier": {
    "name": "Chiến sĩ",
    "ability": "Không bị ảnh hưởng bởi Quỷ.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "spiritofivory": {
    "name": "Thần ngà",
    "ability": "Không thể có thêm quá 1 người xấu.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "spy": {
    "name": "Gián điệp",
    "ability": "Mỗi đêm, được xem Grimore. Có thể được thấy là người tốt, và là Dân làng hoặc Lữ khách, kể cả khi chết.",
    "firstNightPrompt": "Cho Gián điệp xem Grimore đến khi họ không cần nữa.",
    "otherNightPrompt": "Cho Gián điệp xem Grimore đến khi họ không cần nữa."
  },
  "steward": {
    "name": "Quản lý",
    "ability": "Bạn biết 1 người tốt đầu game.",
    "firstNightPrompt": "Chỉ 1 người tốt.",
    "otherNightPrompt": ""
  },
  "stormcatcher": {
    "name": "Người bắt bão",
    "ability": "Đọc tên nhân vật tốt. Nếu trong cuộc, họ chỉ có thể bị chết vì hành quyết, nhưng phe xấu biết họ là ai.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "summoner": {
    "name": "Kẻ triệu hồi",
    "ability": "Bạn biết 3 bluff. Đêm thứ 3, chọn 1 người: người đó trở thành Quỷ xấu do bạn chọn. [Không có Quỷ]",
    "firstNightPrompt": "Cho xem lá \"Những nhân vật sau không có trong game\". Cho xem 3 nhân vật tốt không có trong game..",
    "otherNightPrompt": "Nếu đây là đêm thứ 3, gọi Kẻ triệu hồi dậy. Họ chỉ 1 người và 1 Quỷ trong tờ nhân vật - người đó trở thành Quỷ đó."
  },
  "sweetheart": {
    "name": "Con cưng",
    "ability": "Khi bạn chết, 1 người sẽ bắt đầu bị say.",
    "firstNightPrompt": "",
    "otherNightPrompt": "Chọn 1 người để bị say."
  },
  "tealady": {
    "name": "Cô hầu trà",
    "ability": "Nếu cả 2 hàng xóm sống của bạn đều là tốt, họ không thể chết.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "thief": {
    "name": "Trộm",
    "ability": "Mỗi đêm, chọn 1 người (không phải bạn): phiếu của họ tính là âm ngày mai.",
    "firstNightPrompt": "Trộm chỉ 1 người. Đắt đánh dấu \"Âm phiếu\" của trộm cạnh thẻ nhân vật của người được chọn.",
    "otherNightPrompt": "Trộm chỉ 1 người. Đắt đánh dấu \"Âm phiếu\" của trộm cạnh thẻ nhân vật của người được chọn."
  },
  "tinker": {
    "name": "Thợ vụng vặt",
    "ability": "Có thể bạn chết bất cứ lúc nào.",
    "firstNightPrompt": "",
    "otherNightPrompt": "Có thể thợ vụng vặt chết."
  },
  "towncrier": {
    "name": "Mõ làng",
    "ability": "Mỗi đêm*, bạn biết Tay Sai có Biểu Quyết hôm nay hay không.",
    "firstNightPrompt": "",
    "otherNightPrompt": "Gật đầu hoặc lắc đầu tùy theo việc Tay Sai có chọn người hay không. Đặt đánh dấu 'Tay sai chưa biểu quyết' (Bỏ 'Tay sai biểu quyết, nếu có)."
  },
  "toymaker": {
    "name": "Người làm đồ chơi",
    "ability": "Quỷ có thể chọn không tấn công & phải làm việc này 1 lần trong game. Người xấu nhận thông tin bắt đầu như thường.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "undertaker": {
    "name": "Chôn cất",
    "ability": "Mỗi đêm*, bạn biết nhân vật nào chết bởi Hành Quyết hôm nay.",
    "firstNightPrompt": "",
    "otherNightPrompt": "Nếu có người bị Hành Quyết  Cho xem thẻ nhân vật của người đó."
  },
  "vigormortis": {
    "name": "Vigormortis",
    "ability": "Mỗi đêm*, chọn 1 người: họ chết. Tay sai bạn giết được giữ chức năng & đầu độc 1 hàng xóm là Dân làng. [−1 Lữ khách]",
    "firstNightPrompt": "",
    "otherNightPrompt": "Vigormortis chỉ 1 người. Người đó chết. Nếu họ là Tay sai, họ giữ chức năng và 1 trong những hàng xóm Dân làng của họ bị trúng độc."
  },
  "villageidiot": {
    "name": "Ngố làng",
    "ability": "Mỗi đêm, chọn 1 người: bạn biết phe của họ. [+0 đến +2 Ngố làng. 1 trong số người được thêm bị say]",
    "firstNightPrompt": "Ngỗ làng chỉ 1 người: giơ ngón cái lên nếu họ là người tốt, ngón cái xuống nếu họ là người xấu.",
    "otherNightPrompt": "Ngỗ làng chỉ 1 người: giơ ngón cái lên nếu họ là người tốt, ngón cái xuống nếu họ là người xấu."
  },
  "virgin": {
    "name": "Trinh nữ",
    "ability": "Lần đầu bạn bị Biểu Quyết, nếu người chọn bạn là Dân Làng, họ bị Hành Quyết ngay lập tức.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "vizier": {
    "name": "Tể tướng",
    "ability": "Tất cả người chơi biết bạn là ai. Bạn không thể chết trong ngày. Nếu tốt bỏ phiếu, bạn có thể cho hành quyết ngay lập tức.",
    "firstNightPrompt": "Thông báo \"Có Tề tướng trong cuộc\" và họ là ai.",
    "otherNightPrompt": ""
  },
  "vortox": {
    "name": "Vortox",
    "ability": "Mỗi đêm*, chọn 1 người: họ chết. Chức năng của Dân làng luôn cho thông tin sai. Mỗi ngày, nếu không ai bị Hành Quyết, Phe Xấu thắng.",
    "firstNightPrompt": "",
    "otherNightPrompt": "Vortox chỉ 1 người. Người đó chết."
  },
  "voudon": {
    "name": "Voudon",
    "ability": "Chỉ có bạn và người chết được bỏ phiếu. Họ không cần thẻ vote để làm vậy. Hơn 50% số phiếu là không cần thiết.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "washerwoman": {
    "name": "Thợ giặt",
    "ability": "Đêm đầu tiên, bạn biết chức năng của Dân Làng thuộc về 1 trong 2 người.",
    "firstNightPrompt": "Cho xem thẻ nhân vật Dân Làng trong cuộc. Chỉ 2 người, 1 trong số họ là nhân vật đó.",
    "otherNightPrompt": ""
  },
  "widow": {
    "name": "Góa phụ",
    "ability": "Trong đêm đầu của bạn, nhìn Grimore & chọn 1 người: họ bị trúng độc. 1 người tốt biết có Góa phụ trong cuộc.",
    "firstNightPrompt": "Cho Góa phụ xem Grimore đến khi họ không cần nữa. Góa phụ chỉ 1 người. Người đó bị trúng độc. Gọi 1 người tốt dậy. Cho xem lá 'Những nhân vật này trong cuộc', và thẻ nhân vật Góa phụ.",
    "otherNightPrompt": ""
  },
  "witch": {
    "name": "Phù thủy",
    "ability": "Mỗi đêm, chọn 1 người: nếu họ chọn người biểu quyết ngày mai, họ chết. Nếu còn 3 người sống, bạn mất chức năng này.",
    "firstNightPrompt": "Phù thủy chỉ 1 người. Nếu người đó biểu quyết ngày mai, họ chết ngay lập tức.",
    "otherNightPrompt": "Nếu còn 4 người sống trở lên: Phù thủy chỉ 1 người. Nếu người đó biểu quyết ngày mai, họ chết ngay lập tức."
  },
  "wizard": {
    "name": "Pháp sư",
    "ability": "Một lần trong game, chọn để nói ra 1 điều ước.  Nếu được ban, nó có thể trả giá và để lại chứng cứ liên quan đến nó.",
    "firstNightPrompt": "Chạy khả năng Pháp sư nếu có.",
    "otherNightPrompt": "Chạy khả năng Pháp sư nếu có."
  },
  "wraith": {
    "name": "Hồn ma",
    "ability": "Bạn có quyền chọn để mở mắt trong đêm. Bạn dậy khi người xấu dậy.",
    "firstNightPrompt": "Đánh thức Hồn ma vào đêm nay bất cứ khi nào những người chơi xấu khác thức dậy.",
    "otherNightPrompt": "Đánh thức Hồn ma vào đêm nay bất cứ khi nào những người chơi xấu khác thức dậy."
  },
  "xaan": {
    "name": "Xaan",
    "ability": "Vào đêm X, tất cả Dân làng bị độc. [X Lữ khách]",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "yaggababble": {
    "name": "Yaggababble",
    "ability": "Bạn bắt đầu biết 1 câu bí mật. Với mỗi lần bạn công khai nói câu đó, 1 người có thể chết.",
    "firstNightPrompt": "Cho Yaggababble thấy câu của họ.",
    "otherNightPrompt": "Chọn số người nhỏ hơn hoặc bằng số lần Yaggababble công khai nói câu bí mật, họ chết"
  },
  "zealot": {
    "name": "Kẻ quá khích",
    "ability": "Nếu có 5 người sống trở lên, bạn phải bỏ phiếu cho tất cả các biểu quyết.",
    "firstNightPrompt": "",
    "otherNightPrompt": ""
  },
  "zombuul": {
    "name": "Zombuul",
    "ability": "Mỗi đêm*, nếu không ai chết hôm nay, chọn 1 người: họ chết. Lần đầu bạn chết, bạn sống nhưng tính là chết.",
    "firstNightPrompt": "",
    "otherNightPrompt": "Nếu không ai chết trong ngày: Zombuul chỉ 1 người. Người đó chết."
  }
};
