// 假设你的数据结构保持不变
const content_initial = [
    { id: "arune-no-jikenbo", title: "阿尔涅的事件簿", type: "TV", region: "JP", year: 2023, genres: ["悬疑", "奇幻", "推理"], rating: 7.8, cover: "https://via.placeholder.com/100x150?text=阿尔涅的事件簿" },
    { id: "bang-dream-mygo", title: "BanG Dream! It's MyGO!!!!!", type: "TV", region: "JP", year: 2023, genres: ["音乐", "青春"], rating: 9.1, cover: "https://via.placeholder.com/100x150?text=BanG+Dream!+It's+MyGO!!!!!" },
    { id: "woshibaizelin-1", title: "我是白泽林", type: "TV", region: "CN", year: 2023, genres: ["原创", "魔幻"], rating: 6.5, cover: "https://via.placeholder.com/100x150?text=我是白泽林" },
    { id: "jian-ke-shan-xian-sheng", title: "捡可怜先生", type: "TV", region: "CN", year: 2023, genres: ["日常", "治愈"], rating: 7.2, cover: "https://via.placeholder.com/100x150?text=捡可怜先生" },
    { id: "shijie-zhi-shou", title: "世界之兽", type: "TV", region: "JP", year: 2023, genres: ["奇幻", "冒险"], rating: 7.5, cover: "https://via.placeholder.com/100x150?text=世界之兽" },
    { id: "juanshengtan", title: "眷生谭", type: "TV", region: "CN", year: 2023, genres: ["原创", "奇幻", "剧情"], rating: 8.0, cover: "https://via.placeholder.com/100x150?text=眷生谭" },
    { id: "gongwuyuan-baozhangjinpian", title: "公务员保障金片", type: "TV", region: "CN", year: 2022, genres: ["喜剧", "日常"], rating: 6.8, cover: "https://via.placeholder.com/100x150?text=公务员保障金片" },
    { id: "gongwuyuan-baozhangjinpian-2", title: "公务员保障金片 2", type: "TV", region: "CN", year: 2023, genres: ["喜剧", "日常"], rating: 7.0, cover: "https://via.placeholder.com/100x150?text=公务员保障金片+2" },
    { id: "dounan-daxiaguai", title: "都南大厦怪闻", type: "TV", region: "CN", year: 2023, genres: ["悬疑", "惊悚"], rating: 7.3, cover: "https://via.placeholder.com/100x150?text=都南大厦怪闻" },
    { id: "nanjieshiduoluo", title: "南街拾堕", type: "TV", region: "CN", year: 2023, genres: ["原创", "科幻"], rating: 7.9, cover: "https://via.placeholder.com/100x150?text=南街拾堕" },
    { id: "wodefengkuangyifu", title: "我的疯狂义父", type: "TV", region: "CN", year: 2023, genres: ["搞笑", "沙雕", "奇幻"], rating: 8.5, cover: "https://via.placeholder.com/100x150?text=我的疯狂义父" },
    { id: "moxian-daxia", title: "魔线大侠", type: "TV", region: "CN", year: 2023, genres: ["搞笑", "武侠"], rating: 7.7, cover: "https://via.placeholder.com/100x150?text=魔线大侠" },
    { id: "qiao-qianwan-wu-yao", title: "千万屋勿要", type: "TV", region: "CN", year: 2023, genres: ["奇幻", "冒险"], rating: 7.6, cover: "https://via.placeholder.com/100x150?text=千万屋勿要" },
    { id: "jianxiuguren-zhuan", title: "剑修古人传", type: "TV", region: "CN", year: 2023, genres: ["原创", "奇幻", "修仙"], rating: 8.2, cover: "https://via.placeholder.com/100x150?text=剑修古人传" },
    { id: "shishishifang-2", title: "世世师房2", type: "TV", region: "CN", year: 2023, genres: ["日常", "搞笑"], rating: 7.1, cover: "https://via.placeholder.com/100x150?text=世世师房2" },
    { id: "yueshang-chouchang", title: "乐上愁肠", type: "TV", region: "CN", year: 2023, genres: ["奇幻", "剧情"], rating: 7.0, cover: "https://via.placeholder.com/100x150?text=乐上愁肠" },
    { id: "xuanhuan-dashi", title: "玄幻大师", type: "TV", region: "CN", year: 2023, genres: ["搞笑", "热血", "修仙"], rating: 8.3, cover: "https://via.placeholder.com/100x150?text=玄幻大师" },
    { id: "mianju-xia", title: "面具侠", type: "TV", region: "CN", year: 2024, genres: ["热血", "战斗"], rating: 8.1, cover: "https://via.placeholder.com/100x150?text=面具侠" },
    { id: "yishengshouye", title: "一生守夜", type: "TV", region: "CN", year: 2023, genres: ["治愈", "日常"], rating: 7.4, cover: "https://via.placeholder.com/100x150?text=一生守夜" },
    { id: "xianfu-dazhuanjie", title: "仙服大转界", type: "TV", region: "CN", year: 2023, genres: ["奇幻", "修仙"], rating: 6.9, cover: "https://via.placeholder.com/100x150?text=仙服大转界" },
    { id: "guizang-xiuxian", title: "归藏修仙", type: "TV", region: "CN", year: 2023, genres: ["奇幻", "修仙"], rating: 7.7, cover: "https://via.placeholder.com/100x150?text=归藏修仙" },
    { id: "xingyu-zhanshen", title: "星域战神", type: "TV", region: "CN", year: 2023, genres: ["科幻", "机甲"], rating: 8.6, cover: "https://via.placeholder.com/100x150?text=星域战神" },
    { id: "yeguixing", title: "夜归行", type: "TV", region: "CN", year: 2023, genres: ["奇幻", "冒险"], rating: 7.3, cover: "https://via.placeholder.com/100x150?text=夜归行" },
    { id: "tianshang-zongguanshi", title: "天上总管侍", type: "TV", region: "CN", year: 2023, genres: ["搞笑", "日常"], rating: 7.0, cover: "https://via.placeholder.com/100x150?text=天上总管侍" },
    { id: "guigu-linghun", title: "归谷灵魂", type: "TV", region: "CN", year: 2023, genres: ["原创", "奇幻"], rating: 7.5, cover: "https://via.placeholder.com/100x150?text=归谷灵魂" },
    { id: "qiannian-zhenhun", title: "千年镇魂", type: "TV", region: "CN", year: 2023, genres: ["奇幻", "悬疑"], rating: 8.0, cover: "https://via.placeholder.com/100x150?text=千年镇魂" },
    { id: "huangye-tianqi", title: "荒野天气", type: "TV", region: "CN", year: 2023, genres: ["冒险", "生存"], rating: 7.8, cover: "https://via.placeholder.com/100x150?text=荒野天气" },
    { id: "shanhai-ling", title: "山海令", type: "TV", region: "CN", year: 2023, genres: ["奇幻", "冒险"], rating: 8.4, cover: "https://via.placeholder.com/100x150?text=山海令" },
    { id: "jixie-xingtu", title: "机械星途", type: "TV", region: "CN", year: 2023, genres: ["科幻", "机甲"], rating: 7.6, cover: "https://via.placeholder.com/100x150?text=机械星途" },
    { id: "lingqi-fusu", title: "灵气复苏", type: "TV", region: "CN", year: 2023, genres: ["玄幻", "异能"], rating: 8.1, cover: "https://via.placeholder.com/100x150?text=灵气复苏" },
    { id: "mojing-shijie", title: "魔晶世界", type: "TV", region: "CN", year: 2023, genres: ["奇幻", "冒险"], rating: 7.9, cover: "https://via.placeholder.com/100x150?text=魔晶世界" },
    { id: "caocao-dazhuan", title: "曹操大传", type: "TV", region: "CN", year: 2023, genres: ["历史", "战争"], rating: 8.3, cover: "https://via.placeholder.com/100x150?text=曹操大传" },
    { id: "shendu-zhiling", title: "神都指令", type: "TV", region: "CN", year: 2023, genres: ["悬疑", "探案"], rating: 8.0, cover: "https://via.placeholder.com/100x150?text=神都指令" },
    { id: "yeyu-miaoyu", title: "夜雨庙语", type: "TV", region: "CN", year: 2023, genres: ["古风", "奇幻"], rating: 7.2, cover: "https://via.placeholder.com/100x150?text=夜雨庙语" },
    { id: "wuxing-shengdian", title: "五行圣殿", type: "TV", region: "CN", year: 2023, genres: ["玄幻", "修仙"], rating: 7.7, cover: "https://via.placeholder.com/100x150?text=五行圣殿" },
    { id: "qiannian-xuyuan", title: "千年许愿", type: "TV", region: "CN", year: 2023, genres: ["奇幻", "爱情"], rating: 7.5, cover: "https://via.placeholder.com/100x150?text=千年许愿" },
    { id: "sanguo-zhuan", title: "三国传", type: "TV", region: "CN", year: 2023, genres: ["历史", "战争"], rating: 8.5, cover: "https://via.placeholder.com/100x150?text=三国传" },
    { id: "loulan-mishi", title: "楼兰秘史", type: "TV", region: "CN", year: 2023, genres: ["冒险", "悬疑"], rating: 7.8, cover: "https://via.placeholder.com/100x150?text=楼兰秘史" },
    { id: "xianyu-fanzhuan", title: "咸鱼反转", type: "TV", region: "CN", year: 2023, genres: ["搞笑", "日常"], rating: 6.8, cover: "https://via.placeholder.com/100x150?text=咸鱼反转" },
    { id: "daoluan-xianwang", title: "倒-乱仙王", type: "TV", region: "CN", year: 2023, genres: ["玄幻", "修仙"], rating: 8.2, cover: "https://via.placeholder.com/100x150?text=倒-乱仙王" },
    { id: "taigu-zhongshen", title: "太古众神", type: "TV", region: "CN", year: 2023, genres: ["玄幻", "冒险"], rating: 8.4, cover: "https://via.placeholder.com/100x150?text=太古众神" },
    { id: "wudao-dalu", title: "武道大陆", type: "TV", region: "CN", year: 2023, genres: ["武侠", "玄幻"], rating: 8.0, cover: "https://via.placeholder.com/100x150?text=武道大陆" },
    { id: "shenlong-zhanji", title: "神龙战记", type: "TV", region: "CN", year: 2023, genres: ["奇幻", "战斗"], rating: 7.6, cover: "https://via.placeholder.com/100x150?text=神龙战记" },
    { id: "guwu-zhenhun", title: "古物镇魂", type: "TV", region: "CN", year: 2023, genres: ["悬疑", "奇幻"], rating: 7.9, cover: "https://via.placeholder.com/100x150?text=古物镇魂" },
    { id: "xianmo-geju", title: "仙魔格局", type: "TV", region: "CN", year: 2023, genres: ["玄幻", "修仙"], rating: 8.1, cover: "https://via.placeholder.com/100x150?text=仙魔格局" },
    { id: "yuzhou-lingzhu", title: "宇宙灵主", type: "TV", region: "CN", year: 2023, genres: ["科幻", "冒险"], rating: 8.3, cover: "https://via.placeholder.com/100x150?text=宇宙灵主" },
];

const resultsContainer = document.getElementById("results-container");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const loadingIndicator = document.getElementById("loading-indicator");

// 用于 Intersection Observer 的实例，将其定义在全局或更高作用域，以便在每次渲染后重用或销毁
let lazyImageObserver;

// --- 懒加载功能核心 ---
function setupLazyLoading() {
    // 每次重新渲染结果后，都需要重新设置观察器
    // 因此，如果之前存在观察器，先停止观察所有旧元素并断开链接
    if (lazyImageObserver) {
        lazyImageObserver.disconnect();
    }

    const lazyImages = document.querySelectorAll(".lazy-load-image");

    if ("IntersectionObserver" in window) {
        // 创建 Intersection Observer 实例
        // 回调函数会在被观察的元素进入/离开视口时触发
        lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                // 如果元素与视口（或其他根元素）相交
                if (entry.isIntersecting) {
                    let lazyImage = entry.target; // 获取当前正在相交的图片元素
                    const originalSrc = lazyImage.dataset.src; // 从 data-src 获取真实图片 URL

                    if (originalSrc) { // 确保有真实的 URL
                        lazyImage.src = originalSrc; // 将真实 URL 赋给 src 属性

                        // 可选：图片加载成功/失败的回调
                        lazyImage.onload = () => {
                            // console.log("图片加载成功:", originalSrc);
                            lazyImage.classList.add('loaded'); // 添加'loaded'类，可用于CSS动画等
                        };
                        lazyImage.onerror = () => {
                            console.error("图片加载失败:", originalSrc);
                            // 如果图片加载失败，可以显示一个默认的错误图片
                            lazyImage.src = originalSrc.replace('100x150', '100x150?text=Error'); // 示例：显示 Error 文本
                        };
                    }

                    observer.unobserve(lazyImage); // 一旦图片开始加载，就不再观察它，节省资源
                }
            });
        }, {
            // Options for the Intersection Observer
            // root: null (默认是浏览器视口)
            // rootMargin: "0px 0px 100px 0px" 表示在图片进入视口前100px就开始加载
            //             可以根据需要调整，更大的值可以提前加载，但会增加并发量
            rootMargin: "0px 0px 100px 0px",
            // threshold: 0 (默认，元素有一个像素可见即触发)
        });

        // 遍历所有有 'lazy-load-image' 类的图片元素，并观察它们
        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        // Fallback for browsers that don't support Intersection Observer
        // (这种情况下，所有图片将立即加载，或者你可以实现一个基于滚动事件的旧版懒加载)
        console.warn("当前浏览器不支持 IntersectionObserver，所有图片将立即加载。");
        lazyImages.forEach(function(img) {
            const originalSrc = img.dataset.src;
            if (originalSrc) {
                img.src = originalSrc;
            }
        });
        // 对于老旧浏览器，也可以考虑实现一个基于scroll和resize事件的懒加载，但代码会复杂很多
        // 鉴于现代浏览器普及率，IntersectionObserver 是首选。
    }
}
// --- 懒加载功能核心结束 ---


// 搜索过滤函数
function filterResults(query) {
    if (!query) {
        return content_initial; // 如果查询为空，显示所有初始内容
    }
    const lowerCaseQuery = query.toLowerCase();
    return content_initial.filter(item =>
        item.title.toLowerCase().includes(lowerCaseQuery) ||
        item.genres.some(genre => genre.toLowerCase().includes(lowerCaseQuery))
    );
}

// 渲染结果到页面的函数
function renderResults(results) {
    resultsContainer.innerHTML = ""; // 首先清空容器

    if (results.length === 0) {
        resultsContainer.innerHTML = "<p>没有找到相关结果。</p>";
        return;
    }

    results.forEach(item => {
        const div = document.createElement("div");
        div.className = "result-item";

        div.innerHTML = `
          <!-- 注意这里：src 为空白 Base64 GIF 或空，真实 URL 在 data-src -->
          <img class="lazy-load-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="${item.cover}" alt="${item.title}" style="width: 100px; height: 150px; object-fit: cover;">
          <div>
            <h3>${item.title} (${item.year})</h3>
            <p>类型: ${item.type} | 地区: ${item.region}</p>
            <p>流派: ${item.genres.join(", ")}</p>
            <p>评分: ${item.rating}</p>
          </div>
        `;
        resultsContainer.appendChild(div);
    });

    // 在渲染完所有结果后，初始化懒加载观察器
    setupLazyLoading();
}

// 页面加载时的初始显示
renderResults(content_initial);

// 搜索按钮点击事件
searchButton.addEventListener("click", () => {
    const query = searchInput.value.trim();
    loadingIndicator.style.display = 'block'; // 显示加载指示器
    // 模拟异步搜索（如果有后端 API）
    setTimeout(() => {
        const filtered = filterResults(query);
        renderResults(filtered);
        loadingIndicator.style.display = 'none'; // 隐藏加载指示器
    }, 300); // 模拟网络延迟
});

// 搜索输入框回车事件
searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        searchButton.click(); // 触发搜索按钮的点击事件
    }
});
