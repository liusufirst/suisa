// 彩纸颜色数组
const confettiColors = [
    '#ff6b6b', '#4ecdc4', '#ffe66d', '#ff9ff3', 
    '#f368e0', '#ff8e8e', '#44a08d', '#ffd93d'
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
    
    // 改变按钮文本
    const btn = document.querySelector('.celebrate-btn');
    btn.textContent = '🎉 太棒了！ 🎉';
    btn.style.background = 'linear-gradient(45deg, #4ecdc4, #44a08d)';
    
    // 3秒后恢复按钮
    setTimeout(() => {
        btn.textContent = '再次庆祝！';
        btn.style.background = 'linear-gradient(45deg, #ff6b6b, #ff8e8e)';
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
        '🎉 生日快乐！ 🎉',
        '🌟 愿你梦想成真！ 🌟',
        '💫 祝你天天开心！ 💫',
        '🎊 愿你的生日充满欢乐！ 🎊'
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
        background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
        color: white;
        padding: 20px 40px;
        border-radius: 50px;
        font-size: 1.5rem;
        font-weight: bold;
        z-index: 1000;
        animation: popIn 0.5s ease-out;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
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
});

// 添加鼠标悬停效果
document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.birthday-card');
    
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}); 