// 主要JavaScript文件
document.addEventListener('DOMContentLoaded', function() {
    try {
    // 导航栏滚动效果
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // 移动端菜单切换
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
            body.classList.toggle('menu-open');
        });
    }
    
    // 移动端下拉菜单处理
    const dropdown = document.querySelector('.dropdown');
    const businessArea = document.querySelector('.business-area');
    
    if (businessArea) {
        businessArea.addEventListener('click', function(e) {
            // 判断是否在移动端视图
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
                
                // 添加平滑过渡效果
                const dropdownContent = dropdown.querySelector('.dropdown-content');
                if (dropdownContent) {
                    if (dropdown.classList.contains('active')) {
                        // 展开时滚动到可见位置
                        setTimeout(() => {
                                try {
                            dropdownContent.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                                } catch (error) {
                                    // 兼容不支持平滑滚动的浏览器
                                    dropdownContent.scrollIntoView();
                                }
                        }, 300);
                    }
                }
            }
        });
    }
    
    // 窗口大小变化时处理菜单状态
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            // 在桌面视图下，移除移动端特有的类
            if (dropdown) {
                dropdown.classList.remove('active');
            }
            
            if (menuToggle && menuToggle.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                body.classList.remove('menu-open');
            }
        }
    });

    // 当前页面导航高亮
    highlightCurrentPage();
    
    // 滚动动画
    initScrollAnimations();
    
    // 初始化轮播图
        if (document.querySelector('.slider')) {
    initSlider();
        }
    
    // 初始化联系页面功能
        if (document.querySelector('.contact-section')) {
    initContactPage();
        }
    
    // 初始化数字统计动画
        if (document.querySelector('.stats-section')) {
    initNumberCounter();
        }
    
    // 处理页面内锚点平滑滚动
    handleSmoothScroll();
    
    // 处理业务范围页面
        if (window.location.pathname.includes('services.html')) {
    handleServicePage();
        }
    
    // 优化优势卡片结构
        if (document.querySelectorAll('.advantage-card').length > 0) {
    optimizeAdvantageCards();
        }
        
        // 检查地图加载状态
        checkMapStatus();
    } catch (error) {
        console.error('初始化错误:', error);
    }
});

// 检查地图加载状态
function checkMapStatus() {
    const mapIframe = document.getElementById('companyMap');
    if (mapIframe) {
        // 检查地图是否加载成功
        mapIframe.addEventListener('load', function() {
            console.log('地图加载成功');
        });
        
        mapIframe.addEventListener('error', function() {
            console.log('地图加载失败，显示备用信息');
            this.classList.add('error');
        });
    }
}

// 优化优势卡片结构，确保图片底部对齐
function optimizeAdvantageCards() {
    try {
    const advantageCards = document.querySelectorAll('.advantage-card');
    
    advantageCards.forEach((card, index) => {
        // 跳过第一个卡片(合规性与资质保障)
        if (index === 0) return;
        
        // 获取卡片中的所有内容元素，除了图片和按钮
        const cardContent = document.createElement('div');
        cardContent.className = 'card-content';
        
        // 将图片和按钮之前的所有元素移到内容容器中
        const image = card.querySelector('.advantage-image');
        const button = card.querySelector('.btn-primary');
        
        // 临时存储所有子元素
        const children = Array.from(card.childNodes);
        
        // 移动元素到内容容器
        children.forEach(child => {
            // 如果不是图片容器或按钮，则移动到内容容器
            if (child !== image && child !== button && 
                !(child.classList && (child.classList.contains('advantage-image') || child.classList.contains('btn-primary')))) {
                cardContent.appendChild(child.cloneNode(true));
            }
        });
        
        // 清空卡片
        while (card.firstChild) {
            card.removeChild(card.firstChild);
        }
        
        // 重新添加元素，保持正确顺序
        card.appendChild(cardContent);
        
        // 添加图片容器
        if (image) {
            card.appendChild(image);
        }
        
        // 添加按钮(如果有)
        if (button) {
            card.appendChild(button);
        }
    });
    } catch (error) {
        console.error('优化卡片结构错误:', error);
    }
}

// 高亮当前页面导航
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    const urlParams = new URLSearchParams(window.location.search);
    const serviceType = urlParams.get('type');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else if (currentPage.includes('services.html') && href && href.includes('services.html')) {
            // 检查是否包含匹配的type参数
            if (href.includes(serviceType)) {
                link.classList.add('active');
            }
        } else if (!link.classList.contains('business-area')) {
            link.classList.remove('active');
        }
    });
    
    // 业务范围页面特殊处理
    if (currentPage.includes('services.html')) {
        const businessLink = document.querySelector('.business-area');
        if (businessLink) {
            businessLink.classList.add('active');
        }
    }
}

// 初始化滚动动画
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    
    // 检查元素是否在视口内
    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // 处理滚动动画
    function handleScroll() {
        animatedElements.forEach(el => {
            if (isInViewport(el) && !el.classList.contains('visible')) {
                el.classList.add('visible');
            }
        });
    }
    
    // 触发初始检查
    setTimeout(handleScroll, 200);
    
    // 监听滚动事件
    window.addEventListener('scroll', handleScroll);
    
    // 页面加载时触发第一屏动画
    const firstScreenElements = document.querySelectorAll('.slide.active .fade-in-up, .slide.active .fade-in-left, .slide.active .fade-in-right');
    setTimeout(() => {
        firstScreenElements.forEach(el => {
            el.classList.add('visible');
        });
    }, 100);
}

// 初始化轮播图
function initSlider() {
    const slider = document.querySelector('.slider');
    if (!slider) return;
    
    const slides = slider.querySelectorAll('.slide');
    const nextBtn = slider.querySelector('.slider-button.next');
    const prevBtn = slider.querySelector('.slider-button.prev');
    const dots = slider.querySelectorAll('.dot');
    
    let currentSlide = 0;
    let slideInterval;
    const intervalTime = 5000;
    
    // 切换到指定幻灯片
    function goToSlide(index) {
        // 移除当前活动幻灯片
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // 激活新幻灯片
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
        
        // 重置动画
        resetSlideAnimations(slides[currentSlide]);
    }
    
    // 下一张幻灯片
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }
    
    // 上一张幻灯片
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }
    
    // 重置幻灯片动画
    function resetSlideAnimations(slide) {
        const elements = slide.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
        elements.forEach(el => {
            el.classList.remove('visible');
        });
        
        // 触发动画重播
        setTimeout(() => {
            elements.forEach(el => {
                el.classList.add('visible');
            });
        }, 50);
    }
    
    // 自动轮播
    function startSlideInterval() {
        if (slideInterval) {
            clearInterval(slideInterval);
        }
        slideInterval = setInterval(nextSlide, intervalTime);
    }
    
    // 添加事件监听
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            nextSlide();
            startSlideInterval();
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            prevSlide();
            startSlideInterval();
        });
    }
    
    // 点击指示点切换幻灯片
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            goToSlide(index);
            startSlideInterval();
        });
    });
    
    // 开始自动轮播
    startSlideInterval();
    
    // 鼠标悬停时暂停轮播
    slider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    // 鼠标离开时恢复轮播
    slider.addEventListener('mouseleave', () => {
        startSlideInterval();
    });
}

// 初始化联系页面功能
function initContactPage() {
    try {
        // 防止页面自动滚动
        setTimeout(() => window.scrollTo(0, 0), 100);
    
        // 触发页面动画
        setTimeout(() => {
            document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
            
            // 延迟触发带延迟的元素
            setTimeout(() => {
                document.querySelectorAll('.delay-1, .delay-2').forEach(el => el.classList.add('visible'));
            }, 200);
        }, 100);
    } catch (error) {
        console.error('初始化联系页面错误:', error);
    }
} 

// 数字统计动画
function initNumberCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    if (statNumbers.length === 0) return;
    
    let animated = false;
    
    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    function animateNumbers() {
        if (animated) return;
        
        const statsSection = document.querySelector('.stats-section');
        if (!statsSection || !isInViewport(statsSection)) return;
        
        animated = true;
        
        statNumbers.forEach(statNumber => {
            const targetNumber = parseInt(statNumber.getAttribute('data-count'), 10);
            const duration = 2000; // 动画持续时间（毫秒）
            const startTime = performance.now();
            
            function updateNumber(currentTime) {
                const elapsedTime = currentTime - startTime;
                
                if (elapsedTime < duration) {
                    const progress = elapsedTime / duration;
                    const easedProgress = easeOutCubic(progress);
                    const currentNumber = Math.round(easedProgress * targetNumber);
                    statNumber.textContent = currentNumber;
                    requestAnimationFrame(updateNumber);
                } else {
                    statNumber.textContent = targetNumber;
                }
            }
            
            // 缓动函数，使数字增长更自然
            function easeOutCubic(x) {
                return 1 - Math.pow(1 - x, 3);
            }
            
            requestAnimationFrame(updateNumber);
        });
    }
    
    // 页面加载时检查
    setTimeout(animateNumbers, 500);
    
    // 滚动时检查
    window.addEventListener('scroll', animateNumbers);
} 

// 处理平滑滚动到锚点
function handleSmoothScroll() {
    // 检查URL是否包含锚点
    if (window.location.hash) {
        // 延迟执行以确保页面完全加载
        setTimeout(function() {
            const targetElement = document.querySelector(window.location.hash);
            if (targetElement) {
                // 平滑滚动到目标元素
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        }, 300);
    }
    
    // 为所有内部链接添加平滑滚动
    document.querySelectorAll('a[href*="#"]:not([href="#"])').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // 检查链接是否指向当前页面的锚点
            if (this.pathname === window.location.pathname || this.pathname === '/' + window.location.pathname.split('/').pop()) {
                e.preventDefault();
                const targetId = this.hash;
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                    
                    // 更新URL但不刷新页面
                    history.pushState(null, null, targetId);
                }
            }
        });
    });
}

// 处理业务范围页面特定功能
function handleServicePage() {
    // 检查是否在业务范围页面
    if (window.location.pathname.includes('services.html')) {
        // 获取查询参数
        const urlParams = new URLSearchParams(window.location.search);
        const type = urlParams.get('type');
        
        // 设置业务类型标签和内容
        if (type) {
            setActiveService(type);
        }
        
        // 为业务类型标签添加点击事件
        const serviceTabs = document.querySelectorAll('.service-tab');
        serviceTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const serviceType = this.getAttribute('data-type');
                setActiveService(serviceType);
                
                // 更新URL，不刷新页面
                const url = new URL(window.location);
                url.searchParams.set('type', serviceType);
                window.history.pushState({}, '', url);
            });
        });
    }
}

// 设置活动的服务类型
function setActiveService(type) {
    // 移除所有标签的活动状态
    document.querySelectorAll('.service-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // 隐藏所有内容
    document.querySelectorAll('.service-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // 激活选中的标签和内容
    const selectedTab = document.querySelector(`.service-tab[data-type="${type}"]`);
    const selectedContent = document.querySelector(`#${type}-content`);
    
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    if (selectedContent) {
        selectedContent.classList.add('active');
        
        // 更新顶部图片
        const serviceHero = document.querySelector('.service-hero');
        const serviceTitle = document.querySelector('#service-title');
        const serviceSubtitle = document.querySelector('#service-subtitle');
        
        if (serviceHero) {
            if (type === 'chemical') {
                serviceHero.style.backgroundImage = 'url("images/service/1/顶部图片.jpg")';
                serviceTitle.textContent = '危化品/普货运输';
                serviceSubtitle.textContent = '专业、安全、高效的危化品运输解决方案';
            } else if (type === 'bulk') {
                serviceHero.style.backgroundImage = 'url("images/service/2/顶部图片.jpg")';
                serviceTitle.textContent = '大宗散货运输';
                serviceSubtitle.textContent = '专业、可靠、高效的大宗散货运输服务';
            }
        }
    }
} 