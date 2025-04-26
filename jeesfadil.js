// Tambahkan ini jika ingin menggunakan efek animasi scroll
document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk mendeteksi elemen dalam viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Fungsi untuk menambahkan kelas animasi saat scroll
    function checkVisibility() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        timelineItems.forEach(item => {
            if (isInViewport(item)) {
                item.classList.add('animate');
            }
        });
    }
    
    // Periksa saat halaman dimuat
    checkVisibility();
    
    // Periksa saat scroll
    window.addEventListener('scroll', checkVisibility);
    
    // Tambahkan interaktivitas saat hover pada timeline item
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.querySelector('.timeline-details').style.maxHeight = this.querySelector('.timeline-details').scrollHeight + 'px';
        });
        
        item.addEventListener('mouseleave', function() {
            this.querySelector('.timeline-details').style.maxHeight = null;
        });
    });
});