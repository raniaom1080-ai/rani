skincareLink.addEventListener('click', function(e) {
    e.preventDefault();
    skincareSection.style.display = 'block';
    
    // يخلي الشاشة تروح لبداية القسم بالضبط
    window.scrollTo({
        top: skincareSection.offsetTop,
        behavior: 'smooth'
    });
});
// تعريف عناصر المكياج
const makeupLink = document.querySelector('a[href="#makeup"]');
const makeupSection = document.querySelector('.makeup-section');

makeupLink.addEventListener('click', function(e) {
    e.preventDefault();
    
    // نخفي قسم السكين كير إذا كان مفتوحاً ونظهر المكياج
    document.querySelector('.skincare-section').style.display = 'none';
    makeupSection.style.display = 'block';
    
    window.scrollTo({
        top: makeupSection.offsetTop,
        behavior: 'smooth'
    });
});
<script>
    // دالة للتحكم في ظهور الأقسام والنزول لها بسلاسة
    function setupNavigation(linkSelector, sectionId) {
        const link = document.querySelector(linkSelector);
        const section = document.getElementById(sectionId);

        if (link && section) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                // إظهار القسم في حال كان مخفياً
                section.style.display = 'block';
                // النزول للقسم بسلاسة
                section.scrollIntoView({ behavior: 'smooth' });
            });
        }
    }

    // تشغيل الدالة للقسمين
    setupNavigation('a[href="#skincare"]', 'skincare');
    setupNavigation('a[href="#makeup"]', 'makeup');
</script>