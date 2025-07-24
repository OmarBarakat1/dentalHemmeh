 function updateContent() {
            const yearSelect = document.getElementById('yearSelect').value;
            const contentDiv = document.getElementById('content');
            let content = '';

            switch (yearSelect) {
                case 'year1':
                    content = `
                        <h2>السنة الأولى</h2>
                        <p>المواد: تشريح، كيمياء حيوية، مقدمة في طب الأسنان</p>
                        <p>الأدوات: كتب دراسية، ملخصات، فلاش كاردز</p>
                    `;
                    break;
                case 'year2':
                    content = `
                        <h2>السنة الثانية</h2>
                        <p>المواد: علم الأمراض، علم الأدوية، طب الأسنان الوقائي</p>
                        <p>الأدوات: أسئلة اختبارات، ملخصات، فيديوهات تعليمية</p>
                    `;
                    break;
                case 'year3':
                    content = `
                        <h2>السنة الثالثة</h2>
                        <p>المواد: جراحة الفم، علاج الجذور، طب أسنان الأطفال</p>
                        <p>الأدوات: نماذج اختبارات، أدوات عملية</p>
                    `;
                    break;
                case 'year4':
                    content = `
                        <h2>السنة الرابعة</h2>
                        <p>المواد: تقويم الأسنان، زراعة الأسنان، طب الأسنان الترميمي</p>
                        <p>الأدوات: دراسات حالة، ملخصات متقدمة</p>
                    `;
                    break;
                case 'year5':
                    content = `
                        <h2>السنة الخامسة</h2>
                        <p>المواد: إدارة عيادات الأسنان، أخلاقيات المهنة، تدريب عملي</p>
                        <p>الأدوات: أدلة تدريب، اختبارات محوسبة</p>
                    `;
                    break;
                default:
                    content = '<p>يرجى اختيار سنة دراسية لعرض المواد والأدوات المتاحة.</p>';
            }

            contentDiv.innerHTML = content;
        }
 function navigateToYear() {
            const yearSelect = document.getElementById('yearSelect').value;
            if (yearSelect) {
                window.location.href = yearSelect; // الانتقال إلى الصفحة المحددة
            }
        }