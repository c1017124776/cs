// ======================
// 模拟数据库
// ======================
const content_initial = [ // 我创建了一个新的数组来包含这些散落的对象
{
  id: "arune-no-jikenbo",
  title: "阿尔涅的事件簿",
  type: "TV",
  region: "JP", // 🇯🇵 日本动漫
  year: 2023,
  genres: ["悬疑", "奇幻", "推理"],
  rating: 7.8,
  cover: "https://via.placeholder.com/300x400?text=阿尔涅的事件簿"
},
{
  id: "ao-shi-dan-shen-2025",
  title: "傲世丹神",
  type: "TV",
  region: "CN", // 🇨🇳 国产动漫
  year: 2025,
  genres: ["玄幻", "修真", "战斗"],
  rating: 7.5,
  cover: "https://via.placeholder.com/300x400?text=傲世丹神"
},
{
  id: "bei-lin-guo-wang-zi-ni-ai-de-fan-pai-nv-zhu",
  title: "被邻国王子溺爱的反派女主",
  type: "TV",
  region: "JP", // 🇯🇵 日本动漫（乙女向异世界）
  year: 2023,
  genres: ["恋爱", "异世界", "反派女主"],
  rating: 7.6,
  cover: "https://via.placeholder.com/300x400?text=被邻国王子溺爱的反派女主"
},
{
  id: "bai-lian-cheng-shen-s3-2025",
  title: "百炼成神 第三季",
  type: "TV",
  region: "CN", // 🇨🇳 国产动漫
  year: 2025,
  genres: ["玄幻", "修真", "热血"],
  rating: 8.4,
  cover: "https://via.placeholder.com/300x400?text=百炼成神+第三季"
},
{
  id: "cheng-he-ti-tong-s2-2026",
  title: "成何体统 第二季",
  type: "TV",
  region: "CN", // 🇨🇳 国产动漫
  year: 2026,
  genres: ["古风", "恋爱", "喜剧"],
  rating: 7.9,
  cover: "https://via.placeholder.com/300x400?text=成何体统+第二季"
},
{
  id: "jigoku-mode-speedrun-isekai-2026",
  title: "地狱模式 ～喜欢速通游戏的玩家在废设定异世界无双",
  type: "TV",
  region: "JP", // 🇯🇵 日本动漫
  year: 2026,
  genres: ["异世界", "爽文", "冒险"],
  rating: 7.7,
  cover: "https://via.placeholder.com/300x400?text=地狱模式"
},
{
  id: "dou-po-cang-qiong",
  title: "斗破苍穹",
  type: "TV",
  region: "CN", // 🇨🇳 国产动漫
  year: 2017,
  genres: ["玄幻", "修真", "热血"],
  rating: 8.6,
  cover: "https://via.placeholder.com/300x400?text=斗破苍穹"
},
{
  id: "dong-dao-dan-san-lang-kamen-rider",
  title: "东岛丹三郎想成为假面骑士",
  type: "TV",
  region: "JP", // 🇯🇵 日本动漫
  year: 2024,
  genres: ["特摄", "热血", "青春"],
  rating: 7.8,
  cover: "https://via.placeholder.com/300x400?text=东岛丹三郎想成为假面骑士"
},
{
  id: "jigokuraku-s2",
  title: "地狱乐 第二季",
  type: "TV",
  region: "JP", // 🇯🇵 日本动漫
  year: 2025,
  genres: ["战斗", "黑暗奇幻", "忍者"],
  rating: 8.8,
  cover: "https://via.placeholder.com/300x400?text=地狱乐+第二季"
},
{
  id: "da-tang-cheng-feng-lu-2025",
  title: "大唐乘风录",
  type: "TV",
  region: "CN", // 🇨🇳 国产动漫
  year: 2025,
  genres: ["历史", "武侠", "冒险"],
  rating: 7.6,
  cover: "https://via.placeholder.com/300x400?text=大唐乘风录"
},
{
  id: "da-gong-zai-de-kao-wen-ri-chang",
  title: "打工仔的拷问日常",
  type: "TV",
  region: "JP", // 🇯🇵 日本动漫
  year: 2024,
  genres: ["搞笑", "日常", "职场"],
  rating: 7.4,
  cover: "https://via.placeholder.com/300x400?text=打工仔的拷问日常"
},
{
  id: "darwin-jihen",
  title: "达尔文事变",
  type: "TV",
  region: "JP", // 🇯🇵 日本动漫
  year: 2025,
  genres: ["社会", "悬疑", "剧情"],
  rating: 8.5,
  cover: "https://via.placeholder.com/300x400?text=达尔文事变"
},
{
  id: "fan-ren-xiu-xian-chuan",
  title: "凡人修仙传",
  type: "TV",
  region: "CN", // 🇨🇳 国产动漫
  year: 2020,
  genres: ["修真", "玄幻", "成长"],
  rating: 9.0,
  cover: "https://t.me/frxxzzxk"
},
{
  id: "fei-ren-xue-sheng-yu-yan-shi-jiao-shi-2026",
  title: "非人学生与厌世教师",
  type: "TV",
  region: "JP", // 🇯🇵 日本动漫
  year: 2026,
  genres: ["校园", "治愈", "奇幻"],
  rating: 7.7,
  cover: "https://via.placeholder.com/300x400?text=非人学生与厌世教师"
},
{
    id: "gong-zhu-da-ren-kao-wen-shi-jian-s2",
    title: "公主大人，接下来是“拷问”时间 第二季",
    type: "TV",
    region: "JP",
    year: 2025,
    genres: ["搞笑", "奇幻", "日常"],
    rating: 7.8,
    cover: "https://via.placeholder.com/300x400?text=公主大人%20第二季"
  },
  {
    id: "guang-yin-zhi-wai-2025",
    title: "光阴之外 (2025)",
    type: "TV",
    region: "JP",
    year: 2025,
    genres: ["科幻", "冒险", "悬疑"],
    rating: 8.3,
    cover: "https://via.placeholder.com/300x400?text=光阴之外%20(2025)"
  },
  {
    id: "gu-wei-nan-ting-2025",
    title: "谷围南亭 (2025)",
    type: "TV",
    region: "CN",
    year: 2025,
    genres: ["历史", "悬疑", "剧情"],
    rating: 7.6,
    cover: "https://via.placeholder.com/300x400?text=谷围南亭%20(2025)"
  },
  {
    id: "gao-xiao-qi-mian-zu",
    title: "高校奇面组",
    type: "TV",
    region: "JP",
    year: 2025,
    genres: ["搞笑", "校园", "冒险"],
    rating: 7.2,
    cover: "https://via.placeholder.com/300x400?text=高校奇面组"
  },
  {
    id: "gu-nuo-xia-2025",
    title: "古诺希亚 (2025)",
    type: "TV",
    region: "JP",
    year: 2025,
    genres: ["科幻", "悬疑", "冒险"],
    rating: 8.5,
    cover: "https://via.placeholder.com/300x400?text=古诺希亚%20(2025)"
  },
  {
    id: "he-qing-mei-zhu-ma-zhi-jian-bu-hui-you-lian-ai-xi-ju",
    title: "和青梅竹马之间不会有恋爱喜剧",
    type: "TV",
    region: "JP",
    year: 2025,
    genres: ["恋爱", "喜剧", "校园"],
    rating: 7.0,
    cover: "https://via.placeholder.com/300x400?text=和青梅竹马之间不会有恋爱喜剧"
  },
  {
    id: "hei-zhi-yue-yue-zhi-jing-tan-tan",
    title: "黑之月月之祭坛",
    type: "TV",
    region: "JP",
    year: 2025,
    genres: ["奇幻", "冒险", "悬疑"],
    rating: 7.9,
    cover: "https://via.placeholder.com/300x400?text=黑之月月之祭坛"
  },
  {
    id: "hua-yang-shao-nian-shao-nu",
    title: "花样少年少女",
    type: "TV",
    region: "JP",
    year: 2025,
    genres: ["校园", "恋爱", "喜剧"],
    rating: 8.1,
    cover: "https://via.placeholder.com/300x400?text=花样少年少女"
  },
  {
    id: "huo-chi-niao-yu-shu-lan-li-lu-yuan-zu",
    title: "火喰鸟 羽州褴褛鸢组",
    type: "TV",
    region: "JP",
    year: 2025,
    genres: ["奇幻", "冒险", "战斗"],
    rating: 8.2,
    cover: "https://via.placeholder.com/300x400?text=火喰鸟%20羽州褴褛鸢组"
  },
  {
    id: "jian-lai-di-er-ji",
    title: "剑来第二季",
    type: "TV",
    region: "CN",
    year: 2025,
    genres: ["武侠", "冒险", "动作"],
    rating: 8.0,
    cover: "https://via.placeholder.com/300x400?text=剑来第二季"
  },
  {
    id: "jiu-yang-wu-shen-2025",
    title: "九阳武神 (2025)",
    type: "TV",
    region: "CN",
    year: 2025,
    genres: ["武侠", "奇幻", "动作"],
    rating: 7.7,
    cover: "https://via.placeholder.com/300x400?text=九阳武神%20(2025)"
  },
  {
    id: "jin-ji-de-ji-ren-di-yi-ji",
    title: "进击的巨人 第一季",
    type: "TV",
    region: "JP",
    year: 2013,
    genres: ["动作", "冒险", "战斗"],
    rating: 8.9,
    cover: "https://via.placeholder.com/300x400?text=进击的巨人%20第一季"
  },
  {
    id: "jin-ji-de-ji-ren-di-er-ji",
    title: "进击的巨人 第二季",
    type: "TV",
    region: "JP",
    year: 2017,
    genres: ["动作", "冒险", "战斗"],
    rating: 8.8,
    cover: "https://via.placeholder.com/300x400?text=进击的巨人%20第二季"
  },
  {
    id: "jin-ji-de-ji-ren-zui-zhong-ji",
    title: "进击的巨人 最终季 完结篇 前篇",
    type: "TV",
    region: "JP",
    year: 2023,
    genres: ["动作", "冒险", "战斗"],
    rating: 9.1,
    cover: "https://via.placeholder.com/300x400?text=进击的巨人%20最终季"
  },
  {
    id: "jian-ji-de-ji-ren-zui-zhong-ji-hou-pian",
    title: "进击的巨人 最终季 完结篇 后篇",
    type: "TV",
    region: "JP",
    year: 2024,
    genres: ["动作", "冒险", "战斗"],
    rating: 9.2,
    cover: "https://via.placeholder.com/300x400?text=进击的巨人%20最终季"
  },
  {
    id: "jian-ji-de-ji-ren-zui-zhong-ji-2020",
    title: "进击的巨人 最终季 2020",
    type: "TV",
    region: "JP",
    year: 2020,
    genres: ["动作", "冒险", "战斗"],
    rating: 8.9,
    cover: "https://via.placeholder.com/300x400?text=进击的巨人%20最终季%202020"
  },
  {
    id: "jian-ji-de-ji-ren-zui-zhong-ji-part2",
    title: "进击的巨人 最终季 Part 2",
    type: "TV",
    region: "JP",
    year: 2022,
    genres: ["动作", "战争", "黑暗", "剧情"],
    rating: 9.0,
    cover: "https://via.placeholder.com/300x400?text=进击的巨人+Final+Part2"
  },
  {
    id: "jian-die-guo-jia-jia-s1",
    title: "间谍过家家 第一季",
    type: "TV",
    region: "JP",
    year: 2022,
    genres: ["搞笑", "家庭", "日常"],
    rating: 8.6,
    cover: "https://via.placeholder.com/300x400?text=间谍过家家+S1"
  },
  {
    id: "jian-die-guo-jia-jia-s2",
    title: "间谍过家家 第二季",
    type: "TV",
    region: "JP",
    year: 2023,
    genres: ["搞笑", "家庭", "日常"],
    rating: 8.4,
    cover: "https://via.placeholder.com/300x400?text=间谍过家家+S2"
  },
  {
    id: "jian-die-guo-jia-jia-s3",
    title: "间谍过家家 第三季",
    type: "TV",
    region: "JP",
    year: 2025,
    genres: ["搞笑", "家庭", "日常"],
    rating: 8.5,
    cover: "https://via.placeholder.com/300x400?text=间谍过家家+S3"
  },
  {
    id: "lan-se-guan-xian-le-s1",
    title: "蓝色管弦乐 第一季",
    type: "TV",
    region: "JP",
    year: 2023,
    genres: ["音乐", "青春", "成长"],
    rating: 8.2,
    cover: "https://via.placeholder.com/300x400?text=蓝色管弦乐+S1"
  },
  {
    id: "lan-se-guan-xian-le-s2",
    title: "蓝色管弦乐 第二季",
    type: "TV",
    region: "JP",
    year: 2025,
    genres: ["音乐", "青春", "成长"],
    rating: 8.3,
    cover: "https://via.placeholder.com/300x400?text=蓝色管弦乐+S2"
  },
  {
    id: "leng-jing-lian-qu",
    title: "棱镜恋曲",
    type: "TV",
    region: "JP",
    year: 2024,
    genres: ["恋爱", "青春", "音乐"],
    rating: 7.9,
    cover: "https://via.placeholder.com/300x400?text=棱镜恋曲"
  },
  {
    id: "long-zu-s1",
    title: "龙族 第一季",
    type: "TV",
    region: "CN",
    year: 2022,
    genres: ["奇幻", "冒险", "成长"],
    rating: 7.8,
    cover: "https://via.placeholder.com/300x400?text=龙族+S1"
  },
  {
    id: "long-zu-s2",
    title: "龙族 第二季",
    type: "TV",
    region: "CN",
    year: 2025,
    genres: ["奇幻", "冒险", "成长"],
    rating: 8.0,
    cover: "https://via.placeholder.com/300x400?text=龙族+S2"
  },
  {
    id: "luan-ma-1-2",
    title: "乱马 1/2",
    type: "TV",
    region: "JP",
    year: 1989,
    genres: ["搞笑", "恋爱", "奇幻"],
    rating: 8.3,
    cover: "https://via.placeholder.com/300x400?text=乱马1/2"
  },
  {
    id: "luan-ma-1-2-s2",
    title: "乱马 1/2 第二季",
    type: "TV",
    region: "JP",
    year: 1990,
    genres: ["搞笑", "恋爱", "奇幻"],
    rating: 8.2,
    cover: "https://via.placeholder.com/300x400?text=乱马1/2+S2"
  },
  {
    id: "mo-wang-de-nv-er-tai-wen-rou-le",
    title: "魔王的女儿太温柔了",
    type: "TV",
    region: "JP",
    year: 2024,
    genres: ["奇幻", "喜剧", "治愈"],
    rating: 7.6,
    cover: "https://via.placeholder.com/300x400?text=魔王的女儿"
  },
  {
    id: "ming-yun-qi-yi-yan-pin",
    title: "命运/奇异赝品",
    type: "TV",
    region: "JP",
    year: 2023,
    genres: ["奇幻", "战斗", "冒险"],
    rating: 8.2,
    cover: "https://via.placeholder.com/300x400?text=Fate+Strange+Fake"
  },
  {
    id: "mo-gu-mo-nv",
    title: "蘑菇魔女",
    type: "TV",
    region: "JP",
    year: 2025,
    genres: ["奇幻", "治愈", "日常"],
    rating: 7.4,
    cover: "https://via.placeholder.com/300x400?text=蘑菇魔女"
  },
  {
    id: "mo-shu-shi-ku-nuo",
    title: "魔术师库诺看得见一切",
    type: "TV",
    region: "JP",
    year: 2024,
    genres: ["悬疑", "超能力", "推理"],
    rating: 7.8,
    cover: "https://via.placeholder.com/300x400?text=魔术师库诺"
  },
  {
    id: "mu-shen-ji",
    title: "牧神记",
    type: "TV",
    region: "CN",
    year: 2024,
    genres: ["玄幻", "冒险", "热血"],
    rating: 8.3,
    cover: "https://via.placeholder.com/300x400?text=牧神记"
  },
  {
    id: "marvel-zombies",
    title: "漫威丧尸",
    type: "TV",
    region: "US",
    year: 2024,
    genres: ["超级英雄", "丧尸", "动作"],
    rating: 7.9,
    cover: "https://via.placeholder.com/300x400?text=Marvel+Zombies"
  },
  {
    id: "mao-yan-san-jie-2025",
    title: "猫眼三姐妹 完全新版",
    type: "TV",
    region: "JP",
    year: 2025,
    genres: ["动作", "犯罪", "怀旧"],
    rating: 7.7,
    cover: "https://via.placeholder.com/300x400?text=猫眼三姐妹"
  },
  {
    id: "pan-chu-yong-zhe-xing",
    title: "判处勇者刑",
    type: "TV",
    region: "JP",
    year: 2025,
    genres: ["奇幻", "黑暗", "剧情"],
    rating: 8.0,
    cover: "https://via.placeholder.com/300x400?text=判处勇者刑"
  },
  {
    id: "qing-zhi-ren-sheng-lang",
    title: "青之壬生浪",
    type: "TV",
    region: "JP",
    year: 2024,
    genres: ["历史", "热血", "武士"],
    rating: 7.9,
    cover: "https://via.placeholder.com/300x400?text=青之壬生浪"
  },
  {
    id: "qing-zhi-ren-sheng-lang-an-sha",
    title: "青之壬生浪：芹泽暗杀篇",
    type: "TV",
    region: "JP",
    year: 2025,
    genres: ["历史", "剧情", "武士"],
    rating: 8.1,
    cover: "https://via.placeholder.com/300x400?text=青之壬生浪+暗杀篇"
  },
  {
    id: "qiang-shen-stargaze",
    title: "枪神 STARGAZE",
    type: "TV",
    region: "JP",
    year: 2026,
    genres: ["科幻", "动作", "西部"],
    rating: 8.3,
    cover: "https://via.placeholder.com/300x400?text=枪神+STARGAZE"
  },
  {
    id: "quan-neng-gao-shou",
    title: "全能高手",
    type: "TV",
    region: "CN",
    year: 2023,
    genres: ["电竞", "热血", "成长"],
    rating: 8.0,
    cover: "https://via.placeholder.com/300x400?text=全能高手"
  },
  {
    id: "rick-and-morty-s1",
    title: "瑞克和莫蒂 第一季",
    type: "TV",
    region: "US",
    year: 2013,
    genres: ["科幻", "喜剧", "黑色幽默"],
    rating: 9.0,
    cover: "https://via.placeholder.com/300x400?text=Rick+Morty+S1"
  },
  {
    id: "death-note",
    title: "死亡笔记",
    type: "TV",
    region: "JP",
    year: 2006,
    genres: ["悬疑", "心理", "推理"],
    rating: 9.2,
    cover: "https://via.placeholder.com/300x400?text=死亡笔记"
  },
  {
    id: "dr-stone",
    title: "石纪元",
    type: "TV",
    region: "JP",
    year: 2019,
    genres: ["科幻", "冒险", "热血"],
    rating: 8.5,
    cover: "https://via.placeholder.com/300x400?text=石纪元"
  },
  {
    id: "tun-shi-xing-kong",
    title: "吞噬星空",
    type: "TV",
    region: "CN",
    year: 2020,
    genres: ["科幻", "修真", "冒险"],
    rating: 8.4,
    cover: "https://via.placeholder.com/300x400?text=吞噬星空"
  },
  {
    id: "wan-mei-shi-jie",
    title: "完美世界",
    type: "TV",
    region: "CN",
    year: 2021,
    genres: ["玄幻", "热血", "冒险"],
    rating: 8.2,
    cover: "https://via.placeholder.com/300x400?text=完美世界"
  },
  {
    id: "xian-ni",
    title: "仙逆",
    type: "TV",
    region: "CN",
    year: 2023,
    genres: ["修真", "成长", "冒险"],
    rating: 8.3,
    cover: "https://via.placeholder.com/300x400?text=仙逆"
  },
  {
    id: "yi-quan-chao-ren",
    title: "一拳超人",
    type: "TV",
    region: "JP",
    year: 2015,
    genres: ["热血", "搞笑", "动作"],
    rating: 8.9,
    cover: "https://via.placeholder.com/300x400?text=一拳超人"
  },
  {
    id: "yan-yan-xiao-fang-dui",
    title: "炎炎消防队",
    type: "TV",
    region: "JP",
    year: 2019,
    genres: ["热血", "战斗", "超能力"],
    rating: 8.1,
    cover: "https://via.placeholder.com/300x400?text=炎炎消防队"
  },
  {
    id: "zhe-tian",
    title: "遮天",
    type: "TV",
    region: "CN",
    year: 2023,
    genres: ["玄幻", "修真", "冒险"],
    rating: 8.5,
    cover: "https://via.placeholder.com/300x400?text=遮天"
  },
  {
    id: "jujutsu-kaisen-s3",
    title: "咒术回战 第三季",
    type: "TV",
    region: "JP",
    year: 2025,
    genres: ["战斗", "黑暗", "奇幻"],
    rating: 8.8,
    cover: "https://via.placeholder.com/300x400?text=咒术回战+S3"
  },
  {
    id: "your-name",
    title: "你的名字",
    type: "Movie",
    region: "JP",
    year: 2016,
    genres: ["恋爱", "奇幻", "青春"],
    rating: 9.0,
    cover: "https://via.placeholder.com/300x400?text=你的名字"
  },
  {
    id: "zootopia",
    title: "疯狂动物城",
    type: "Movie",
    region: "US",
    year: 2016,
    genres: ["动画", "冒险", "喜剧"],
    rating: 8.9,
    cover: "https://via.placeholder.com/300x400?text=Zootopia"
  },
  {
    id: "luo-xiao-hei-2",
    title: "罗小黑战记2",
    type: "Movie",
    region: "CN",
    year: 2025,
    genres: ["治愈", "冒险", "奇幻"],
    rating: 8.6,
    cover: "https://via.placeholder.com/300x400?text=罗小黑2"
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

