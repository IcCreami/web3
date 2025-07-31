// 网站内容加载器
let loadAttempts = 0;
const maxLoadAttempts = 10;

function initializeContentLoader() {
    loadAttempts++;
    
    // 检查websiteData是否可用
    if (typeof websiteData === 'undefined') {
        if (loadAttempts < maxLoadAttempts) {
            console.log(`⏳ websiteData 未就绪，等待中... (尝试 ${loadAttempts}/${maxLoadAttempts})`);
            setTimeout(initializeContentLoader, 100);
            return;
        } else {
            console.error('❌ websiteData 加载失败！请检查 js/website-data.js 是否正确加载');
            return;
        }
    }
    
    console.log('✅ websiteData 加载成功，开始更新页面内容');
    loadWebsiteContent();
}

// 加载网站内容
function loadWebsiteContent() {
    const data = websiteData;
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    console.log(`📄 当前页面: ${currentPage}`);
    
    // 根据页面类型加载内容
    if (currentPage === 'index.html' || currentPage === '') {
        updateHomeContent(data.home);
    } else if (currentPage === 'services.html') {
        updateServicesContent(data.services);
    } else if (currentPage === 'about.html') {
        updateAboutContent(data.about);
    } else if (currentPage === 'contact.html') {
        updateContactContent(data.global);
    } else if (currentPage === 'news.html') {
        updateNewsContent(data.global);
    }
    
    // 更新全局内容
    updateGlobalContent(data.global);
}

// 更新首页内容
function updateHomeContent(homeData) {
    console.log('🏠 开始更新首页内容');
    
    // 更新轮播图
    updateCarousel(homeData.carousel);
    
    // 更新服务项目
    updateServices(homeData.services);
    
    // 更新数字统计
    updateStats(homeData.stats);
    
    // 更新优势
    updateAdvantages(homeData.advantages);
}

// 更新轮播图
function updateCarousel(carouselData) {
    if (!carouselData) return;
    
    carouselData.forEach((item, index) => {
        const slide = document.querySelector(`.slide:nth-child(${index + 1})`);
        if (slide) {
            slide.style.backgroundImage = `url('${item.image}')`;
            
            const title = slide.querySelector('h1');
            if (title) title.textContent = item.title;
            
            const subtitle = slide.querySelector('p');
            if (subtitle) subtitle.textContent = item.subtitle;
        }
    });
    console.log('✅ 轮播图已更新');
}

// 更新服务项目
function updateServices(servicesData) {
    if (!servicesData) return;
    
    const serviceItems = document.querySelectorAll('.service-item');
    servicesData.forEach((item, index) => {
        if (serviceItems[index]) {
            const icon = serviceItems[index].querySelector('.service-icon');
            if (icon) icon.textContent = item.icon;
            
            const title = serviceItems[index].querySelector('h3');
            if (title) title.textContent = item.title;
            
            const desc = serviceItems[index].querySelector('p');
            if (desc) desc.textContent = item.description;
        }
    });
    console.log('✅ 服务项目已更新');
}

// 更新数字统计
function updateStats(statsData) {
    if (!statsData) return;
    
    const statItems = document.querySelectorAll('.stat-item');
    statsData.forEach((item, index) => {
        if (statItems[index]) {
            const icon = statItems[index].querySelector('.stat-icon i');
            if (icon) icon.className = item.icon;
            
            const number = statItems[index].querySelector('.stat-number');
            if (number) {
                number.textContent = '0';
                number.setAttribute('data-count', item.number);
            }
            
            const title = statItems[index].querySelector('.stat-title');
            if (title) title.innerHTML = item.title;
        }
    });
    console.log('✅ 数字统计已更新');
}

// 更新优势
function updateAdvantages(advantagesData) {
    if (!advantagesData) return;
    
    const advantageCards = document.querySelectorAll('.advantage-card');
    advantagesData.forEach((item, index) => {
        if (advantageCards[index]) {
            const icon = advantageCards[index].querySelector('.advantage-icon i');
            if (icon) icon.className = item.icon;
            
            const title = advantageCards[index].querySelector('h3');
            if (title) title.textContent = item.title;
            
            const desc = advantageCards[index].querySelector('p');
            if (desc) desc.textContent = item.description;
        }
    });
    console.log('✅ 优势内容已更新');
}

// 更新业务范围页面内容
function updateServicesContent(servicesData) {
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type') || 'chemical';
    
    console.log(`📋 开始更新${type}业务页面`);
    
    if (!servicesData[type]) {
        console.error(`❌ 未找到${type}类型的数据`);
        return;
    }
    
    const data = servicesData[type];
    
    // 更新页面标题和副标题
    updatePageHeader(data);
    
    // 更新危化品分类
    if (type === 'chemical' && data.hazardClasses) {
        updateHazardClasses(data.hazardClasses);
    }
    
    // 更新核心优势
    if (data.advantages) {
        updateServiceAdvantages(data.advantages, type);
    }
    
    // 更新操作流程
    if (data.operatingProcess) {
        updateOperatingProcess(data.operatingProcess, type);
    }
    
    // 更新大宗散货简介
    if (type === 'bulk' && data.introduction) {
        updateBulkIntroduction(data.introduction);
    }
}

// 更新页面标题
function updatePageHeader(data) {
    const title = document.getElementById('service-title');
    if (title) title.textContent = data.title;
    
    const subtitle = document.getElementById('service-subtitle');
    if (subtitle) subtitle.textContent = data.subtitle;
    
    const hero = document.querySelector('.service-hero');
    if (hero) hero.style.backgroundImage = `url('${data.headerImage}')`;
    
    console.log('✅ 页面标题已更新');
}

// 更新危化品分类
function updateHazardClasses(hazardData) {
    const hazardTitle = document.querySelector('.hazard-section .hazard-title h2');
    if (hazardTitle) hazardTitle.textContent = hazardData.title;
    
    const hazardDesc = document.querySelector('.hazard-section .hazard-title p');
    if (hazardDesc) hazardDesc.textContent = hazardData.description;
    
    const hazardCards = document.querySelectorAll('.hazard-card');
    hazardData.classes.forEach((item, index) => {
        if (hazardCards[index]) {
            const icon = hazardCards[index].querySelector('.hazard-icon i');
            if (icon) icon.className = item.icon;
            
            const title = hazardCards[index].querySelector('h3');
            if (title) title.textContent = item.title;
            
            const content = hazardCards[index].querySelector('ul, p');
            if (content) {
                if (item.description.startsWith('<ul>')) {
                    if (content.tagName !== 'UL') {
                        const ul = document.createElement('ul');
                        ul.innerHTML = item.description.replace('<ul>', '').replace('</ul>', '');
                        content.parentElement.replaceChild(ul, content);
                    } else {
                        content.innerHTML = item.description.replace('<ul>', '').replace('</ul>', '');
                    }
                } else {
                    if (content.tagName !== 'P') {
                        const p = document.createElement('p');
                        p.textContent = item.description;
                        content.parentElement.replaceChild(p, content);
                    } else {
                        content.textContent = item.description;
                    }
                }
            }
        }
    });
    console.log('✅ 危化品分类已更新');
}

// 更新服务优势
function updateServiceAdvantages(advantagesData, type) {
    const firstAdvantagesGrid = document.querySelector(`#${type}-content .advantages-grid`);
    if (firstAdvantagesGrid) {
        const advantageCards = firstAdvantagesGrid.querySelectorAll('.advantage-card');
        advantagesData.forEach((item, index) => {
            if (advantageCards[index]) {
                const icon = advantageCards[index].querySelector('.advantage-icon i');
                if (icon) icon.className = item.icon;
                
                const title = advantageCards[index].querySelector('h3');
                if (title) title.textContent = item.title;
                
                const desc = advantageCards[index].querySelector('p');
                if (desc) desc.textContent = item.description;
                
                const img = advantageCards[index].querySelector('.advantage-image img');
                if (img) img.src = item.image;
            }
        });
        console.log('✅ 服务优势已更新');
    }
}

// 更新操作流程
function updateOperatingProcess(processData, type) {
    const processTitle = document.querySelector(`#${type}-content .process-section .section-title h2`);
    if (processTitle) processTitle.textContent = processData.title;
    
    const processSteps = document.querySelectorAll(`#${type}-content .process-step`);
    processData.steps.forEach((step, index) => {
        if (processSteps[index]) {
            const icon = processSteps[index].querySelector('.process-icon i');
            if (icon) icon.className = step.icon;
            
            const name = processSteps[index].querySelector('.process-name');
            if (name) name.textContent = step.name;
            
            const number = processSteps[index].querySelector('.process-number');
            if (number) number.textContent = index + 1;
        }
    });
    console.log('✅ 操作流程已更新');
}

// 更新大宗散货简介
function updateBulkIntroduction(introData) {
    const allSectionTitles = document.querySelectorAll('#bulk-content .section-title');
    const introTitleSection = allSectionTitles[allSectionTitles.length - 1];
    
    if (introTitleSection) {
        const introTitle = introTitleSection.querySelector('h2');
        if (introTitle) introTitle.textContent = introData.title;
        
        const introDesc = introTitleSection.querySelector('p');
        if (introDesc) introDesc.textContent = introData.description;
    }
    
    const allAdvantagesGrids = document.querySelectorAll('#bulk-content .advantages-grid');
    const introAdvantagesGrid = allAdvantagesGrids[allAdvantagesGrids.length - 1];
    
    if (introAdvantagesGrid) {
        const serviceCards = introAdvantagesGrid.querySelectorAll('.advantage-card');
        introData.services.forEach((item, index) => {
            if (serviceCards[index]) {
                const icon = serviceCards[index].querySelector('.advantage-icon i');
                if (icon) icon.className = item.icon;
                
                const title = serviceCards[index].querySelector('h3');
                if (title) title.textContent = item.title;
                
                const desc = serviceCards[index].querySelector('p');
                if (desc) desc.textContent = item.description;
                
                const featuresList = serviceCards[index].querySelector('ul.service-features');
                if (featuresList && item.features) {
                    featuresList.innerHTML = '';
                    item.features.forEach(feature => {
                        const li = document.createElement('li');
                        li.textContent = feature;
                        featuresList.appendChild(li);
                    });
                }
                
                const img = serviceCards[index].querySelector('.advantage-image img');
                if (img) img.src = item.image;
            }
        });
    }
    console.log('✅ 大宗散货简介已更新');
}

// 更新关于我们页面内容
function updateAboutContent(aboutData) {
    console.log('ℹ️ 开始更新关于我们页面');
    
    // 更新公司简介
    const companyIntroText = document.querySelector('.about-text p:first-of-type');
    if (companyIntroText && aboutData.companyIntro) {
        const paragraphs = aboutData.companyIntro.split('\n\n');
        companyIntroText.textContent = paragraphs[0];
        
        if (paragraphs.length > 1) {
            let secondParagraph = document.querySelector('.about-text p:nth-of-type(2)');
            if (!secondParagraph) {
                secondParagraph = document.createElement('p');
                companyIntroText.parentNode.appendChild(secondParagraph);
            }
            secondParagraph.textContent = paragraphs[1];
        }
    }
    
    // 更新服务理念
    if (aboutData.values) {
        const valueCards = document.querySelectorAll('.values-grid .value-card');
        aboutData.values.forEach((item, index) => {
            if (valueCards[index]) {
                const icon = valueCards[index].querySelector('.value-icon i');
                if (icon) icon.className = item.icon;
                
                const title = valueCards[index].querySelector('h3');
                if (title) title.textContent = item.title;
                
                const desc = valueCards[index].querySelector('p');
                if (desc) desc.textContent = item.description;
            }
        });
    }
    
    // 更新发展策略
    if (aboutData.strategies) {
        const strategyItems = document.querySelectorAll('.strategy-item');
        aboutData.strategies.forEach((item, index) => {
            if (strategyItems[index]) {
                const title = strategyItems[index].querySelector('h3');
                if (title) {
                    const iconElement = title.querySelector('i');
                    if (iconElement) iconElement.className = item.icon;
                    title.textContent = item.title;
                    if (iconElement) title.prepend(iconElement);
                }
                
                const desc = strategyItems[index].querySelector('p');
                if (desc) desc.textContent = item.description;
            }
        });
    }
    
    console.log('✅ 关于我们页面已更新');
}

// 更新联系页面内容
function updateContactContent(globalData) {
    if (!globalData || !globalData.contactInfo) return;
    
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        const title = item.querySelector('h4').textContent;
        const content = item.querySelector('p');
        
        if (title.includes('公司地址')) {
            content.textContent = globalData.contactInfo.address;
        } else if (title.includes('联系电话')) {
            content.textContent = globalData.contactInfo.phone;
        } else if (title.includes('手机号码')) {
            content.textContent = globalData.contactInfo.mobile;
        } else if (title.includes('电子邮箱')) {
            content.textContent = globalData.contactInfo.email;
        } else if (title.includes('QQ号码')) {
            content.textContent = globalData.contactInfo.qq;
        } else if (title.includes('工作时间')) {
            content.textContent = globalData.contactInfo.workingHours;
        }
    });
    
    console.log('✅ 联系页面已更新');
}

// 更新招聘页面内容
function updateNewsContent(globalData) {
    if (!globalData || !globalData.hrContactInfo) return;
    
    const hrInfo = globalData.hrContactInfo;
    const hrContactInfo = document.querySelector('.hr-contact-info');
    
    if (hrContactInfo) {
        const phoneElement = hrContactInfo.querySelector('p:nth-child(2)');
        const emailElement = hrContactInfo.querySelector('p:nth-child(3)');
        
        if (phoneElement) {
            phoneElement.innerHTML = `<i class="fas fa-phone-alt"></i> 电话：${hrInfo.phone} <i class="fas fa-mobile-alt ml-20"></i> 手机：${hrInfo.mobile}`;
        }
        
        if (emailElement) {
            emailElement.innerHTML = `<i class="fas fa-envelope"></i> 邮箱：${hrInfo.email}`;
        }
    }
    
    console.log('✅ 招聘页面已更新');
}

// 更新全局内容
function updateGlobalContent(globalData) {
    if (!globalData) return;
    
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const footerContact = document.querySelector('.footer-contact');
    
    if (footerContact && globalData.contactInfo) {
        const contactInfo = globalData.contactInfo;
        
        // 判断是否为招聘相关页面（显示人力资源部联系方式）
        const isHRPage = currentPage === 'news.html' || currentPage === 'job-detail.html';
        
        if (isHRPage && globalData.hrContactInfo) {
            const hrInfo = globalData.hrContactInfo;
            footerContact.innerHTML = `
                <p><i class="fas fa-map-marker-alt"></i> 地址：${contactInfo.address}</p>
                <p><i class="fas fa-phone"></i> 电话：${hrInfo.phone}（人力资源部）</p>
                <p><i class="fas fa-mobile-alt"></i> 手机：${hrInfo.mobile}</p>
                <p><i class="fas fa-envelope"></i> 邮箱：${hrInfo.email}</p>
                <p><i class="fas fa-user-circle"></i> QQ：${hrInfo.qq || '稍后提供'}</p>
                <p><i class="fas fa-clock"></i> 工作时间：${contactInfo.workingHours}</p>
            `;
            console.log('✅ 已加载人力资源部联系方式');
        } else {
            footerContact.innerHTML = `
                <p><i class="fas fa-map-marker-alt"></i> 地址：${contactInfo.address}</p>
                <p><i class="fas fa-phone"></i> 电话：${contactInfo.phone}</p>
                <p><i class="fas fa-mobile-alt"></i> 手机：${contactInfo.mobile}</p>
                <p><i class="fas fa-envelope"></i> 邮箱：${contactInfo.email}</p>
                <p><i class="fas fa-user-circle"></i> QQ：${contactInfo.qq}</p>
                <p><i class="fas fa-clock"></i> 工作时间：${contactInfo.workingHours}</p>
            `;
            console.log('✅ 已加载商务部联系方式');
        }
    }
    
    // 更新公司名称（如果页面中有footer-info h3元素）
    const companyNameElement = document.querySelector('.footer-info h3');
    if (companyNameElement && globalData.companyName) {
        companyNameElement.textContent = globalData.companyName;
    }
    
    console.log(`✅ 全局内容已更新 (页面: ${currentPage})`);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initializeContentLoader, 50);
}); 