// 数据库模拟：关键词和对应的 Telegram 链接
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
    keywords: ["完美", "世界","完美世界"],
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
  cover: "aot.jpg",
  seasons: [
    {
      order: 1,
      label: "第一季",
      episodes: 25,
      tg: "https://t.me/budingdm/169"
    },
    {
      order: 2,
      label: "第二季",
      episodes: 12,
      tg: "https://t.me/budingdm/150"
    },
    {
      order: 3,
      label: "第三季",
      episodes: 22,
      tg: null
    },
    {
      order: 4,
      label: "最终季 Part 2",
      episodes: 12,
      tg: "https://t.me/budingdm/3"
    },
    {
      order: 5,
      label: "最终季 完结篇",
      episodes: 2,
      tg: "https://t.me/budingdm/41"
    }
  ];
}


// 监听输入框变化，实时搜索
document.getElementById("search").addEventListener("input", e => {
  const query = e.target.value.trim().toLowerCase();
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = ""; // 清空以前的结果

  if (!query) return; // 如果没有输入内容，什么也不显示

  // 搜索匹配
const query = searchInput.value.trim().toLowerCase();

const filteredResults = data.filter(item => {
  if (!query) return true; // 没输入时显示全部
  if (!item.keywords) return false;

  return item.keywords
    .toString()
    .toLowerCase()
    .includes(query);
});

  // 展示匹配结果
  filteredResults.forEach(item => {
  const resultDiv = document.createElement("div");
  resultDiv.classList.add("result-item");

  if (item.type === "seasonal") {
    // 如果是“季节性”类型的条目，渲染每一季
    let seasonsHtml = item.seasons.map(season => {
      let tgLink = season.tg ? `<a href="${season.tg}" target="_blank">${season.label}（${season.episodes} 集）</a>` : `<span>${season.label}（${season.episodes} 集） - 暂无链接</span>`;
      return tgLink;
    }).join("<br>");

    resultDiv.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      ${seasonsHtml}
    `;
  } else {
    // 如果是普通类型的条目
    let tgLink = item.tg ? `<a href="${item.tg}" target="_blank">点击进入 Telegram</a>` : "<span>暂无链接</span>";
    resultDiv.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      ${tgLink}
    `;
  }

  resultsContainer.appendChild(resultDiv);
});

// ====== 从 URL 中读取搜索词 ======
const params = new URLSearchParams(window.location.search);
const wordFromUrl = params.get("word");

if (wordFromUrl) {
  const searchInput = document.getElementById("search");
  searchInput.value = wordFromUrl;

  // 手动触发一次搜索
  const event = new Event("input");
  searchInput.dispatchEvent(event);
}









