// 页面加载时的初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎉 页面开始加载...');
    
    // 确保开场动画和视频容器都是隐藏的
    const openingAnimation = document.getElementById('opening-animation');
    const birthdayVideoContainer = document.getElementById('birthday-video-container');
    
    if (openingAnimation) {
        openingAnimation.style.display = 'none';
    }
    
    if (birthdayVideoContainer) {
        birthdayVideoContainer.style.display = 'none';
    }
    
    // 启动开场动画
    handleOpeningAnimation();
    
    console.log('✅ 页面初始化完成!');
});

// 开场动画处理
function handleOpeningAnimation() {
    console.log('🎬 开场动画已启用');
    // 显示开场动画，8秒后淡出（给每个字符足够时间）
    const openingAnimation = document.getElementById('opening-animation');
    if (openingAnimation) {
        openingAnimation.style.display = 'flex';
        // 8秒后自动隐藏开场动画
        setTimeout(() => {
            openingAnimation.style.display = 'none';
            console.log('🎬 开场动画结束，显示相机监视屏');
            showBirthdayVideo();
        }, 8000);
    }
}

// 显示生日视频
function showBirthdayVideo() {
    const birthdayVideoContainer = document.getElementById('birthday-video-container');
    const cameraFrame = document.querySelector('.camera-frame');
    
    console.log('🔍 开始显示生日视频...');
    console.log('🔍 生日视频容器:', birthdayVideoContainer);
    console.log('🔍 相机框架:', cameraFrame);
    
    if (birthdayVideoContainer) {
        birthdayVideoContainer.style.display = 'flex';
        birthdayVideoContainer.style.visibility = 'visible';
        birthdayVideoContainer.style.zIndex = '10002';
        birthdayVideoContainer.style.opacity = '1';
        console.log('🎬 显示生日视频');
        console.log('📺 相机监视屏容器:', birthdayVideoContainer);
        console.log('📺 相机监视屏样式:', birthdayVideoContainer.style.display);
        console.log('📺 相机监视屏可见性:', birthdayVideoContainer.style.visibility);
        console.log('📺 相机监视屏z-index:', birthdayVideoContainer.style.zIndex);
        
        if (cameraFrame) {
            cameraFrame.style.display = 'block';
            cameraFrame.style.visibility = 'visible';
            cameraFrame.style.zIndex = '10003';
            cameraFrame.style.opacity = '1';
            console.log('📺 相机框架:', cameraFrame);
            console.log('📺 相机框架样式:', cameraFrame.style.display);
            console.log('📺 相机框架可见性:', cameraFrame.style.visibility);
            console.log('📺 相机框架z-index:', cameraFrame.style.zIndex);
        } else {
            console.log('❌ 未找到相机框架元素');
        }
        
        playBirthdayVideo();
    } else {
        console.log('❌ 未找到生日视频容器元素');
    }
}

// 播放生日视频
function playBirthdayVideo() {
    const video = document.getElementById('birthday-video-player');
    const overlay = document.getElementById('birthday-video-overlay');
    console.log('🎬 开始播放生日视频...');
    
    if (video) {
        console.log('✅ 找到生日视频元素');
        console.log('📹 视频源:', video.src);
        console.log('🎥 视频就绪状态:', video.readyState);
        
        // 直接显示手动播放按钮
        if (overlay) {
            overlay.style.display = 'flex';
            overlay.innerHTML = `
                <div class="manual-play-btn" onclick="startBirthdayVideo()">
                    <span>🎬 Click to Play</span>
                </div>
            `;
        }
        
        // 监听视频结束事件
        video.addEventListener('ended', () => {
            console.log('🎬 生日视频播放结束');
            skipBirthdayVideo();
        });
        
        // 监听视频错误
        video.addEventListener('error', (e) => {
            console.log('❌ 生日视频播放错误:', e);
            console.log('🔍 错误详情:', video.error);
            showBirthdayVideoError();
        });
        
        // 监听视频加载事件
        video.addEventListener('loadstart', () => {
            console.log('📹 开始加载生日视频');
        });
        
        video.addEventListener('canplay', () => {
            console.log('✅ 生日视频可以播放');
        });
        
        video.addEventListener('loadeddata', () => {
            console.log('📹 生日视频数据加载完成');
        });
    } else {
        console.log('❌ 未找到生日视频元素');
        showBirthdayVideoError();
    }
}

// 手动开始播放生日视频
function startBirthdayVideo() {
    const video = document.getElementById('birthday-video-player');
    const overlay = document.getElementById('birthday-video-overlay');
    
    if (video) {
        console.log('🎬 手动开始播放生日视频');
        console.log('📹 视频状态检查:');
        console.log('- 视频源:', video.src);
        console.log('- 就绪状态:', video.readyState);
        console.log('- 网络状态:', video.networkState);
        console.log('- 错误状态:', video.error);
        console.log('- 当前时间:', video.currentTime);
        console.log('- 持续时间:', video.duration);
        
        video.play().then(() => {
            console.log('✅ 生日视频播放成功');
            // 隐藏手动播放按钮
            if (overlay) {
                overlay.style.display = 'none';
            }
        }).catch(error => {
            console.log('❌ 生日视频播放失败:', error);
            console.log('🔍 错误详情:', error.message);
            showBirthdayVideoPlayPrompt();
        });
    } else {
        console.log('❌ 未找到生日视频元素');
    }
}

// 跳过生日视频
function skipBirthdayVideo() {
    const birthdayVideoContainer = document.getElementById('birthday-video-container');
    if (birthdayVideoContainer) {
        birthdayVideoContainer.style.display = 'none';
    }
    document.body.style.overflow = 'auto';
    createMagicConfetti();
    console.log('🎉 进入主页面');
}

// 显示生日视频播放提示
function showBirthdayVideoPlayPrompt() {
    const prompt = document.createElement('div');
    prompt.style.position = 'fixed';
    prompt.style.top = '50%';
    prompt.style.left = '50%';
    prompt.style.transform = 'translate(-50%, -50%)';
    prompt.style.background = 'rgba(0, 0, 0, 0.9)';
    prompt.style.color = '#ffd700';
    prompt.style.padding = '20px';
    prompt.style.borderRadius = '10px';
    prompt.style.border = '2px solid rgba(255, 215, 0, 0.3)';
    prompt.style.zIndex = '10005';
    prompt.style.textAlign = 'center';
    prompt.style.fontFamily = 'Comic Neue, Indie Flower, Microsoft YaHei, cursive, fantasy';
    
    prompt.innerHTML = `
        <h3>🎬 点击播放小米生日快乐视频</h3>
        <p>请点击视频开始播放</p>
        <button onclick="this.parentElement.remove()" style="margin-top: 10px; padding: 8px 16px; background: #ffd700; border: none; border-radius: 5px; cursor: pointer; color: #000;">知道了</button>
    `;
    
    document.body.appendChild(prompt);
}

// 显示生日视频错误信息
function showBirthdayVideoError() {
    const errorMessage = document.createElement('div');
    errorMessage.style.position = 'fixed';
    errorMessage.style.top = '50%';
    errorMessage.style.left = '50%';
    errorMessage.style.transform = 'translate(-50%, -50%)';
    errorMessage.style.background = 'rgba(0, 0, 0, 0.9)';
    errorMessage.style.color = '#ffd700';
    errorMessage.style.padding = '20px';
    errorMessage.style.borderRadius = '10px';
    errorMessage.style.border = '2px solid rgba(255, 215, 0, 0.3)';
    errorMessage.style.zIndex = '10004';
    errorMessage.style.textAlign = 'center';
    errorMessage.style.fontFamily = 'Comic Neue, Indie Flower, Microsoft YaHei, cursive, fantasy';
    
    errorMessage.innerHTML = `
        <h3>🎬 视频文件未找到</h3>
        <p>请将视频文件 "suisa2.mp4" 添加到网站文件夹中。</p>
        <button onclick="skipBirthdayVideo()" style="margin-top: 10px; padding: 8px 16px; background: #ffd700; border: none; border-radius: 5px; cursor: pointer; color: #000;">跳过视频</button>
    `;
    
    document.body.appendChild(errorMessage);
}

// 点击计数器
let clickCount = 0;

// 点击按钮功能
function clickIt() {
    const title = document.querySelector('.title');
    const btn = document.querySelector('.click-btn');
    const container = document.querySelector('.container');

    clickCount++;

    if (title && btn && container) {
        console.log('🌟 点击! 🌟');

        // 第一次点击时播放视频音乐
        if (clickCount === 1) {
            const backgroundMusic = document.getElementById('background-music');
            if (backgroundMusic) {
                backgroundMusic.loop = true; // 设置循环播放
                backgroundMusic.play();
                console.log('🎵 开始播放循环背景音乐! 🎵');
            }
            
            // 按钮变成蓝粉紫循环
            btn.style.background = 'linear-gradient(45deg, #0000ff, #ff69b4, #800080)';
            btn.style.backgroundSize = '300% 300%';
            btn.style.animation = 'rainbow 1.5s ease-in-out infinite';
            btn.style.border = 'none';
            btn.style.color = 'white';
            
            // 改变按钮文字
            btn.textContent = 'Click me again';

            // 标题变成彩虹渐变效果
            title.style.animation = 'rainbow 1.5s ease-in-out infinite';
            title.style.background = 'linear-gradient(45deg, #0000ff, #ff69b4, #800080)';
            title.style.backgroundSize = '300% 300%';
            title.style.webkitBackgroundClip = 'text';
            title.style.webkitTextFillColor = 'transparent';
            title.style.backgroundClip = 'text';
            title.style.color = 'transparent';
            title.style.fontWeight = 'bold';
            title.style.textShadow = 'none';

            // 调整容器布局到屏幕右边1/4处，不缩小
            container.style.justifyContent = 'center';
            container.style.alignItems = 'center';
            container.style.width = 'auto';
            container.style.marginLeft = '75%';
            container.style.transform = 'translateX(-50%)';
            container.style.transition = 'all 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';

            // 创建并添加图片
            const image = document.createElement('img');
            image.src = '456BEE79-1EC4-4DDB-88F3-4E7FC21F9E1B_1_201_a.jpeg';
            image.style.position = 'fixed';
            image.style.left = '-50%'; // 初始位置在屏幕外
            image.style.width = '800px';
            image.style.height = 'auto';
            image.style.maxHeight = '80vh';
            image.style.objectFit = 'contain';
            image.style.zIndex = '1000';
            image.style.transition = 'all 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            image.style.borderRadius = '30px';
            image.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.5)';
            image.style.pointerEvents = 'none';

            // 将图片添加到body中
            document.body.appendChild(image);

            // 延迟一点时间后让图片滑入到左边1/4处，与Happy Birthday上下对齐
            setTimeout(() => {
                image.style.left = '25%'; // 屏幕1/4处
                image.style.top = '50%';
                image.style.transform = 'translate(-50%, -50%)'; // 让图片中心对准25%位置
            }, 200);
            
            console.log('🌟 第一次点击! 🌟');
        } else {
            // 第二次点击及以后显示"小米，make a wish！"的流程
            console.log('🌟 第二次及以后点击! 🌟');

            // 让背景图片和Happy Birthday虚化
            const image = document.querySelector('img[src*="456BEE79"]');
            
            if (image) {
                image.style.filter = 'blur(10px)';
                image.style.transition = 'filter 0.5s ease-in-out';
            }
            
            if (title) {
                title.style.filter = 'blur(8px)';
                title.style.transition = 'filter 0.5s ease-in-out';
            }

            // 显示"小米，make a wish！"和萨摩耶图片
            if (clickCount > 1) {
                // 创建"小米，make a wish！"文本
                const makeAWish = document.createElement('div');
                makeAWish.textContent = '小米，make a wish！';
                makeAWish.style.position = 'fixed';
                makeAWish.style.top = '35%';
                makeAWish.style.left = '50%';
                makeAWish.style.transform = 'translate(-50%, -50%)';
                makeAWish.style.color = '#ffff00';
                makeAWish.style.fontSize = '48px';
                makeAWish.style.fontWeight = 'bold';
                makeAWish.style.textShadow = '0 0 10px #ffff00, 0 0 20px #ffff00, 0 0 30px #ffff00, 0 0 40px #ffff00';
                makeAWish.style.zIndex = '2000';
                makeAWish.style.opacity = '0';
                makeAWish.style.transition = 'opacity 1s ease-in-out';
                document.body.appendChild(makeAWish);
                
                // 创建萨摩耶图片
                const samoyedImage = document.createElement('img');
                samoyedImage.src = 'Samoyed-Dog-Full-Grown-No-Background.png';
                samoyedImage.style.position = 'fixed';
                samoyedImage.style.top = '75%';
                samoyedImage.style.left = '50%';
                samoyedImage.style.transform = 'translate(-50%, -50%)';
                samoyedImage.style.width = '200px';
                samoyedImage.style.height = 'auto';
                samoyedImage.style.maxHeight = '40vh';
                samoyedImage.style.objectFit = 'contain';
                samoyedImage.style.zIndex = '2000';
                samoyedImage.style.opacity = '0';
                samoyedImage.style.transition = 'opacity 1s ease-in-out';
                document.body.appendChild(samoyedImage);
                
                // 背景模糊效果
                if (image) image.style.filter = 'blur(10px)';
                if (title) title.style.filter = 'blur(8px)';
                if (btn) btn.style.filter = 'blur(8px)';
                
                // 创建星星效果
                createStars();
                
                // 淡入"小米，make a wish！"文字
                setTimeout(() => {
                    makeAWish.style.opacity = '1';
                }, 100);
                
                // 淡入萨摩耶图片
                setTimeout(() => {
                    samoyedImage.style.opacity = '1';
                }, 800);
                
                // 4秒后淡出"小米，make a wish！"文字和图片，并恢复背景清晰度
                setTimeout(() => {
                    makeAWish.style.opacity = '0';
                    samoyedImage.style.opacity = '0';
                    
                    // 恢复背景图片和Happy Birthday的清晰度
                    if (image) {
                        image.style.filter = 'blur(0px)';
                    }
                    
                    if (title) {
                        title.style.filter = 'blur(0px)';
                    }
                    
                    if (btn) {
                        btn.style.filter = 'blur(0px)';
                    }
                    
                    setTimeout(() => {
                        if (makeAWish.parentNode) {
                            makeAWish.parentNode.removeChild(makeAWish);
                        }
                        if (samoyedImage.parentNode) {
                            samoyedImage.parentNode.removeChild(samoyedImage);
                        }
                        
                        // 让迪士尼城堡图片淡出
                        if (image) {
                            image.style.transition = 'opacity 2s ease-in-out';
                            image.style.opacity = '0';
                            
                            // 2秒后显示文字内容
                            setTimeout(() => {
                                if (image.parentNode) {
                                    image.parentNode.removeChild(image);
                                }
                                
                                // 创建文字容器
                                const textContainer = document.createElement('div');
                                textContainer.style.position = 'fixed';
                                textContainer.style.left = '12.5%';
                                textContainer.style.top = '50%';
                                textContainer.style.transform = 'translateY(-50%)';
                                textContainer.style.width = '500px';
                                textContainer.style.maxHeight = '60vh';
                                textContainer.style.overflowY = 'auto';
                                textContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                                textContainer.style.color = 'white';
                                textContainer.style.padding = '20px';
                                textContainer.style.borderRadius = '10px';
                                textContainer.style.fontSize = '14px';
                                textContainer.style.lineHeight = '1.6';
                                textContainer.style.zIndex = '1500';
                                textContainer.style.opacity = '0';
                                textContainer.style.transition = 'opacity 1s ease-in-out';
                                
                                textContainer.innerHTML = `
                                    <h2 style="text-align: center; margin-bottom: 20px; color: #FFD700;">给小米</h2>
                                    <br>
                                    <p>对不起，上一封本来是生日篇的。</p>
                                    <br>
                                    <p>但是小米19岁了！生日快乐呀，宝宝！</p>
                                    <br>
                                    <p>还记得来上海的第一天，我一开门小米就像小猫一样跑过来了，跳着抱住我。然后我就一直抱小米，亲小米和小米睡觉。我还和小米出去玩，和小米吃好吃的，然后等小米下班。感觉好开心呀。</p>
                                    <br>
                                    <p>希望19岁的小米是明媚的，开心的，漂亮的，自由的。希望小米一直可爱。我也会一直一直爱我的可爱的小米。</p>
                                    <br>
                                    <p>2024年10月11日 认识小米</p>
                                    <p>2025年3月16日 和小米玩玩双人成行</p>
                                    <p>2025年4月5日 和小米通关双人成行</p>
                                    <p>2025年4月2日 和小米去看Hamilton</p>
                                    <p>2025年4月6日 和小米去kanto</p>
                                    <p>2025年4月7日 在Greenwich跟小米表白</p>
                                    <p>2025年5月16号 把穿着我的衣服的小米亲睡着了</p>
                                    <p>2025年 5月18号 和小米去伦敦过520</p>
                                    <p>2025年5月27号 陪小米去医院</p>
                                    <p>2025年6月19日 和小米在巴黎迪士尼看烟花</p>
                                    <p>2025年 7月 24日 来上海找小米</p>
                                    <p>2025年8月9日 小米19岁了</p>
                                    <br>
                                    <p style="text-align: right; font-weight: bold;">刘夙</p>
                                `;
                                
                                document.body.appendChild(textContainer);
                                
                                // 淡入文字内容
                                setTimeout(() => {
                                    textContainer.style.opacity = '1';
                                }, 100);
                            }, 2000);
                        }
                    }, 1000);
                }, 4000);
            }
        }
    }
}

// 显示滚动提示和信封 - 已注释

// 创建星星效果
function createStar() {
    const star = document.createElement('div');
    star.textContent = '⭐';
    star.style.position = 'fixed';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 100 + 'vh';
    star.style.color = '#ffff00';
    star.style.fontSize = '20px';
    star.style.zIndex = '2001';
    star.style.opacity = '0';
    star.style.transition = 'opacity 0.5s ease-in-out';
    document.body.appendChild(star);
    
    // 淡入
    setTimeout(() => {
        star.style.opacity = '1';
    }, 100);
    
    // 淡出并移除
    setTimeout(() => {
        star.style.opacity = '0';
        setTimeout(() => {
            if (star.parentNode) {
                star.parentNode.removeChild(star);
            }
        }, 500);
    }, 2000);
}

function createStars() {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            createStar();
        }, i * 200);
    }
}

// 创建彩带效果
function createConfetti() {
    const container = document.body;
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        
        container.appendChild(confetti);
        
        // 5秒后移除彩带
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, 5000);
    }
}

// 创建魔法彩带
function createMagicConfetti() {
    console.log('🎉 进入主页面');
} 