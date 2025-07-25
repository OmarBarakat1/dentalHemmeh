

        // العدادات الديناميكية
        function animateCounter(id, end, duration) {
            let start = 0;
            const stepTime = Math.abs(Math.floor(duration / end));
            const timer = setInterval(function() {
                start++;
                document.getElementById(id).textContent = start;
                if (start >= end) {
                    clearInterval(timer);
                }
            }, stepTime);
        }

        // تشغيل العدادات عند تحميل الصفحة
        window.onload = function() {
            animateCounter('visitors', 5000, 2000);
            animateCounter('summaries', 300, 2000);
            animateCounter('testbank', 1000, 2000);
        };