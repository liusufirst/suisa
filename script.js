// 荧光彩纸颜色数组
const confettiColors = [
    '#ff00ff', '#00ffff', '#00ff00', '#8000ff', 
    '#ffff00', '#ff8000', '#ff0080', '#0080ff'
];

// 庆祝函数
function celebrate() {
    // 播放音效（如果浏览器支持）
    playSound();
    
    // 创建彩纸效果
    createConfetti();
    
    // 添加震动效果
    addShakeEffect();
    
    // 显示庆祝消息
    showCelebrationMessage();
    
    // 创建烟花效果
    createFireworks();
    
    // 改变按钮文本
    const btn = document.querySelector('.celebrate-btn');
    btn.textContent = '🎉 Amazing! 🎉';
    btn.style.background = 'linear-gradient(45deg, #00ffff, #0080ff)';
    
    // 3秒后恢复按钮
    setTimeout(() => {
        btn.textContent = 'Click to Celebrate!';
        btn.style.background = 'linear-gradient(45deg, #ff00ff, #00ffff)';
    }, 3000);
}

// 创建彩纸效果
function createConfetti() {
    const container = document.getElementById('confetti-container');
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
            confetti.style.animationDuration = (Math.random() * 2 + 1) + 's';
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            
            container.appendChild(confetti);
            
            // 移除彩纸元素
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 3000);
        }, i * 20);
    }
}

// 创建烟花效果
function createFireworks() {
    const fireworksContainer = document.querySelector('.fireworks');
    
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const firework = document.createElement('div');
            firework.className = 'firework';
            firework.style.left = Math.random() * 100 + '%';
            firework.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
            firework.style.animationDelay = Math.random() * 0.5 + 's';
            
            fireworksContainer.appendChild(firework);
            
            // 移除烟花元素
            setTimeout(() => {
                if (firework.parentNode) {
                    firework.parentNode.removeChild(firework);
                }
            }, 2000);
        }, i * 200);
    }
}

// 添加震动效果
function addShakeEffect() {
    const card = document.querySelector('.birthday-card');
    card.style.animation = 'shake 0.5s ease-in-out';
    
    setTimeout(() => {
        card.style.animation = '';
    }, 500);
}

// 显示庆祝消息
function showCelebrationMessage() {
    const messages = [
        '🎉 Happy Birthday! 🎉',
        '🌟 May your dreams come true! 🌟',
        '💫 Wishing you happiness! 💫',
        '🎊 May your birthday be magical! 🎊'
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // 创建临时消息元素
    const messageDiv = document.createElement('div');
    messageDiv.textContent = randomMessage;
    messageDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(45deg, #ff00ff, #00ffff);
        color: white;
        padding: 20px 40px;
        border-radius: 50px;
        font-size: 1.5rem;
        font-weight: bold;
        z-index: 1000;
        animation: popIn 0.5s ease-out;
        box-shadow: 0 0 30px rgba(255, 0, 255, 0.8);
        text-shadow: 0 0 10px #fff;
    `;
    
    document.body.appendChild(messageDiv);
    
    // 3秒后移除消息
    setTimeout(() => {
        messageDiv.style.animation = 'popOut 0.5s ease-in';
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.parentNode.removeChild(messageDiv);
            }
        }, 500);
    }, 2000);
}

// 播放音效
function playSound() {
    // 创建音频上下文（如果浏览器支持）
    if (typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined') {
        const audioContext = new (AudioContext || webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    }
}

// 添加CSS动画
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    
    @keyframes popIn {
        from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }
    
    @keyframes popOut {
        from {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
        }
    }
`;
document.head.appendChild(style);

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', function() {
    // 添加键盘事件监听
    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space' || event.code === 'Enter') {
            event.preventDefault();
            celebrate();
        }
    });
    
    // 添加触摸事件监听（移动设备）
    let touchStartY = 0;
    document.addEventListener('touchstart', function(event) {
        touchStartY = event.touches[0].clientY;
    });
    
    document.addEventListener('touchend', function(event) {
        const touchEndY = event.changedTouches[0].clientY;
        const touchDiff = touchStartY - touchEndY;
        
        // 向上滑动触发庆祝
        if (touchDiff > 50) {
            celebrate();
        }
    });
    
    // 自动播放一些动画
    setTimeout(() => {
        const gifts = document.querySelectorAll('.gift');
        gifts.forEach((gift, index) => {
            setTimeout(() => {
                gift.style.animation = 'bounce 0.5s ease-in-out';
                setTimeout(() => {
                    gift.style.animation = '';
                }, 500);
            }, index * 200);
        });
    }, 1000);
    
    // 添加鼠标悬停效果
    const card = document.querySelector('.birthday-card');
    
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    // 添加滚动动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 观察信件部分
    const letterSection = document.querySelector('.letter-section');
    if (letterSection) {
        letterSection.style.opacity = '0';
        letterSection.style.transform = 'translateY(50px)';
        letterSection.style.transition = 'all 0.8s ease-out';
        observer.observe(letterSection);
    }
    
    // 观察时间轴项目
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        item.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
        observer.observe(item);
    });
    
    // 隐藏滚动提示
    const scrollHint = document.querySelector('.scroll-hint');
    if (scrollHint) {
        setTimeout(() => {
            scrollHint.style.opacity = '0';
            scrollHint.style.transform = 'translateX(-50%) translateY(20px)';
            scrollHint.style.transition = 'all 0.5s ease-out';
            setTimeout(() => {
                scrollHint.style.display = 'none';
            }, 500);
        }, 5000);
    }
});

// 添加滚动监听
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.castle-background');
    const speed = scrolled * 0.5;
    
    if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`;
    }
}); 