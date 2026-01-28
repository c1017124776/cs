// ======================
// 模拟数据库
// ======================
const data = [
  {
    keywords: ["魔术师", "魔术师库诺"],
    title: "魔术师库诺看得见一切｜赤血更新",
    desc: "持续更新，点击进入 Telegram 观看",
    tg: "https://t.me/budingdm/978"
  },
  {
    keywords: ["动漫", "热血", "战斗"],
    title: "热血动漫精选",
    desc: "持续更新，点击查看 Telegram 内容",
    tg: "https://t.me/budingdm"
  },
  {
    keywords: ["完美", "世界", "完美世界"],
    title: "完美世界",
    desc: "持续更新，点击进入 Telegram 观看",
    tg: "https://t.me/wmsj6"
  },
  {
    keywords: ["斗破", "苍穹", "斗破苍穹"],
    title: "斗破苍穹",
    desc: "持续更新，点击进入 Telegram 观看",
    tg: "https://t.me/bddpcq"
  },
  {
    keywords: ["遮天", "遮", "天"],
    title: "遮天",
    desc: "持续更新，点击进入 Telegram 观看",
    tg: "https://t.me/tgzhetian"
  },
  {
    keywords: ["吞噬", "星空", "吞噬星空"],
    title: "吞噬星空",
    desc: "持续更新，点击进入 Telegram 观看",
    tg: "https://t.me/tsxk4"
  },
  {
    keywords: ["仙逆", "仙", "逆"],
    title: "仙逆",
    desc: "持续更新，点击进入 Telegram 观看",
    tg: "https://t.me/xianniw"
  },
  {
    keywords: ["凡人", "修仙", "凡人修仙传"],
    title: "凡人修仙传",
    desc: "持续更新，点击进入 Telegram 观看",
    tg: "https://t.me/frxxzzxk"
  },
  {
    type: "seasonal",
    title: "进击的巨人",
    desc: "全系列合集，按季选择观看",
    keywords: ["进击的巨人", "巨人", "aot", "attack on titan"],
    seasons: [
      { order: 1, label: "第一季", episodes: 25, tg: "https://t.me/budingdm/169" },
      { order: 2, label: "第二季", episodes: 12, tg: "https://t.me/budingdm/150" },
      { order: 3, label: "第三季", episodes: 22, tg: null },
      { order: 4, label: "最终季 Part 2", episodes: 12, tg: "https://t.me/budingdm/3" },
      { order: 5, label: "最终季 完结篇", episodes: 2, tg: "https://t.me/budingdm/41" }
    ]
  }
];

// ======================
// 搜索逻辑
// ======================
const searchInput = document.getElementById("search");
const resultsContainer = document.getElementById("results");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  resultsContainer.innerHTML = "";

  if (!query) return;

  const filteredResults = data.filter(item => {
    const keywords = (item.keywords || []).join(" ").toLowerCase();
    return keywords.includes(query);
  });

  renderResults(filteredResults);
});

// ======================
// 渲染结果
// ======================
function renderResults(results) {
  results.forEach(item => {
    const div = document.createElement("div");
    div.className = "result-item";

    if (item.type === "seasonal") {
      const seasonsHtml = item.seasons
        .map(season => {
          return season.tg
            ? `<a href="${season.tg}" target="_blank">${season.label}（${season.episodes} 集）</a>`
            : `<span>${season.label}（${season.episodes} 集） - 暂无链接</span>`;
        })
        .join("<br>");

      div.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <div>${seasonsHtml}</div>
      `;
    } else {
      div.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <a href="${item.tg}" target="_blank">点击进入 Telegram</a>
      `;
    }

    resultsContainer.appendChild(div);
  });
}
