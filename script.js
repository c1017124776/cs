// 数据库模拟：关键词和对应的 Telegram 链接
const data = [
  {
    keywords: ["魔术师", "魔术师库诺"],
    title: "魔术师库诺看得见一切｜全集",
    desc: "高清完整版，点击进入 Telegram 观看",
    tg: "https://t.me/budingdm/978"
  },
  {
    keywords: ["动漫", "热血", "战斗"],
    title: "热血动漫精选",
    desc: "持续更新，点击查看 Telegram 内容",
    tg: "https://t.me/budingdm"
  },
  {
    keywords: ["编程", "技术", "学习"],
    title: "编程学习资料",
    desc: "提升你的编程技能，加入我们的学习频道",
    tg: "https://t.me/your_channel_link_3"
  }
];

// 监听输入框变化，实时搜索
document.getElementById("search").addEventListener("input", e => {
  const query = e.target.value.trim().toLowerCase();
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = ""; // 清空以前的结果

  if (!query) return; // 如果没有输入内容，什么也不显示

  // 搜索匹配
  const filteredResults = data.filter(item =>
    item.keywords.some(keyword => keyword.toLowerCase().includes(query))
  );

  // 展示匹配结果
  filteredResults.forEach(item => {
    const resultDiv = document.createElement("div");
    resultDiv.classList.add("result-item");
    resultDiv.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <a href="${item.tg}" target="_blank">点击进入 Telegram</a>
    `;
    resultsContainer.appendChild(resultDiv);
  });
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
