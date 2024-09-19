document.addEventListener('DOMContentLoaded', function() {
    // 初始化AOS库
    AOS.init();

    // 返回顶部按钮
    var backToTopButton = document.getElementById('back-to-top');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });

    // 作品集模态框
    var portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(function(item) {
        item.addEventListener('click', function() {
            // 这里添加打开模态框的逻辑
        });
    });

    // 表单提交
    var contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // 这里添加表单提交逻辑
        });
    }
});