'use client';

import { useState } from 'react';
import { Search, BookOpen, Video, FileText, ChevronRight, PlayCircle } from 'lucide-react';
import styles from './materi.module.css';

const DUMMY_MATERI = [
  {
    id: 1,
    title: "Memahami Self-Harm: Mengapa Kita Melakukannya?",
    category: "Artikel",
    duration: "5 min baca",
    thumbnail: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2500&auto=format&fit=crop",
    icon: <FileText size={20} />,
    description: "Artikel ini membahas akar penyebab mengapa seseorang mungkin beralih ke self-harm sebagai mekanisme koping."
  },
  {
    id: 2,
    title: "Teknik Grounding 5-4-3-2-1",
    category: "Video",
    duration: "3 min tonton",
    thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2500&auto=format&fit=crop",
    icon: <Video size={20} />,
    description: "Panduan video singkat untuk berlatih teknik grounding 5-4-3-2-1 saat merasa kewalahan."
  },
  {
    id: 3,
    title: "Mengenal Distorsi Kognitif",
    category: "Modul",
    duration: "10 min pelajari",
    thumbnail: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2500&auto=format&fit=crop",
    icon: <BookOpen size={20} />,
    description: "Pelajari pola pikir negatif umum yang dapat memperburuk suasana hati dan cara menantangnya."
  },
  {
    id: 4,
    title: "Strategi Koping Alternatif",
    category: "Artikel",
    duration: "7 min baca",
    thumbnail: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=2500&auto=format&fit=crop",
    icon: <FileText size={20} />,
    description: "Daftar 50+ aktivitas aman yang bisa dilakukan sebagai pengganti self-harm saat dorongan muncul."
  }
];

export default function MateriPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredMateri = DUMMY_MATERI.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'Semua' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="fade-in">
      <div className="page-header">
        <h1>Materi Edukasi</h1>
        <p>Pelajari strategi koping dan pahami diri lebih baik</p>
      </div>

      <div className={styles.container}>
        <div className={styles.searchSection}>
          <div className={styles.searchBar}>
            <Search size={20} className={styles.searchIcon} />
            <input 
              type="text" 
              placeholder="Cari materi..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>
          
          <div className={styles.filterGroup}>
            {['Semua', 'Artikel', 'Video', 'Modul'].map(cat => (
              <button 
                key={cat}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.activeFilter : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.materiGrid}>
          {filteredMateri.length > 0 ? (
            filteredMateri.map((item) => (
              <div key={item.id} className={styles.materiCard}>
                <div 
                  className={styles.thumbnail}
                  style={{ backgroundImage: `url(${item.thumbnail})` }}
                >
                  <div className={styles.categoryBadge}>
                    {item.icon}
                    <span>{item.category}</span>
                  </div>
                  {item.category === 'Video' && (
                    <div className={styles.playOverlay}>
                      <PlayCircle size={48} color="white" />
                    </div>
                  )}
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.description}</p>
                  <div className={styles.cardFooter}>
                    <span className={styles.duration}>{item.duration}</span>
                    <button className={styles.readBtn}>
                      Mulai <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.emptyState}>
              <BookOpen size={48} color="var(--text-muted)" />
              <p>Materi tidak ditemukan.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}