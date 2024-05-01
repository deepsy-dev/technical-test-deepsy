
import sqlite3Package from 'sqlite3';
const { verbose } = sqlite3Package;
const sqlite3 = verbose();

const db = new sqlite3.Database('./deepsy_test.db', (err) => {
    if (err) return console.error(err.message);
});

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS test (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      ref TEXT NOT NULL UNIQUE,
      title TEXT NOT NULL,
      sub_title TEXT,
      is_active BOOLEAN NOT NULL DEFAULT 0,
      color TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP
    )`);

    db.run(`CREATE TRIGGER IF NOT EXISTS update_timestamp AFTER UPDATE ON test
    BEGIN
      UPDATE test SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
    END;`);

    const insertData = [
        { ref: 'AnXious', title_fr: 'AnXious', title_en: 'AnXious', sub_title_fr: 'Anxiété', sub_title_en: 'Anxiety', is_active: true, color: '#a8325e' },
        { ref: 'Burn_Out', title_fr: 'Burn Out', title_en: 'Burn Out', sub_title_fr: 'Épuisement professionnel', sub_title_en: 'Professional exhaustion', is_active: true, color: '#7c83fd' },
        { ref: 'Cyrious', title_fr: 'Cyrious', title_en: 'Cyrious', sub_title_fr: 'Conscience professionnelle', sub_title_en: 'Professional conscience', is_active: true, color: '#e2f3e9' },
        { ref: 'Excited', title_fr: 'Excited', title_en: 'Excited', sub_title_fr: 'Excité', sub_title_en: 'Excited', is_active: true, color: '#8b728e' },
        { ref: 'Eager', title_fr: 'Eager', title_en: 'Eager', sub_title_fr: 'Impatient', sub_title_en: 'Impatient', is_active: true, color: '#c48b9f' },
        { ref: 'Happy', title_fr: 'Heureux', title_en: 'Happy', sub_title_fr: 'Content', sub_title_en: 'Content', is_active: true, color: '#66806a' },
        { ref: 'Sad', title_fr: 'Triste', title_en: 'Sad', sub_title_fr: 'Déprimé', sub_title_en: 'Depressed', is_active: true, color: '#414833' },
        { ref: 'Angry', title_fr: 'En colère', title_en: 'Angry', sub_title_fr: 'Fâché', sub_title_en: 'Mad', is_active: true, color: '#4a2c36' },
        { ref: 'Calm', title_fr: 'Calme', title_en: 'Calm', sub_title_fr: 'Serein', sub_title_en: 'Serene', is_active: true, color: '#ffb367' },
        { ref: 'Confused', title_fr: 'Confus', title_en: 'Confused', sub_title_fr: 'Perplexe', sub_title_en: 'Perplexed', is_active: true, color: '#8ac6d1' },
        { ref: 'Stressed', title_fr: 'Stressé', title_en: 'Stressed', sub_title_fr: 'Tendu', sub_title_en: 'Tense', is_active: true, color: '#5e548e' },
        { ref: 'Relaxed', title_fr: 'Détendu', title_en: 'Relaxed', sub_title_fr: 'Relaxé', sub_title_en: 'Relaxed', is_active: true, color: '#9e2a2b' },
        { ref: 'Sleepy', title_fr: 'Endormi', title_en: 'Sleepy', sub_title_fr: 'Somnolent', sub_title_en: 'Drowsy', is_active: true, color: '#f4978e' },
        { ref: 'Awake', title_fr: 'Éveillé', title_en: 'Awake', sub_title_fr: 'Vigilant', sub_title_en: 'Vigilant', is_active: true, color: '#613f75' },
        { ref: 'Bored', title_fr: 'Ennuyé', title_en: 'Bored', sub_title_fr: 'Désintéressé', sub_title_en: 'Uninterested', is_active: true, color: '#0c7489' },
        { ref: 'Inspired', title_fr: 'Inspiré', title_en: 'Inspired', sub_title_fr: 'Inspiré', sub_title_en: 'Inspired', is_active: true, color: '#d4a5a5' },
        { ref: 'Motivated', title_fr: 'Motivé', title_en: 'Motivated', sub_title_fr: 'Motivé', sub_title_en: 'Motivated', is_active: true, color: '#ffc4eb' },
        { ref: 'Lazy', title_fr: 'Paresseux', title_en: 'Lazy', sub_title_fr: 'Paresseux', sub_title_en: 'Lazy', is_active: true, color: '#ffcb77' },
        { ref: 'Productive', title_fr: 'Productif', title_en: 'Productive', sub_title_fr: 'Productif', sub_title_en: 'Productive', is_active: true, color: '#b1b3b3' },
        { ref: 'Unproductive', title_fr: 'Non productif', title_en: 'Unproductive', sub_title_fr: 'Non productif', sub_title_en: 'Unproductive', is_active: true, color: '#153e90' },
        { ref: 'Innovative', title_fr: 'Innovant', title_en: 'Innovative', sub_title_fr: 'Innovant', sub_title_en: 'Innovative', is_active: true, color: '#009ddc' },
        { ref: 'Traditional', title_fr: 'Traditionnel', title_en: 'Traditional', sub_title_fr: 'Traditionnel', sub_title_en: 'Traditional', is_active: true, color: '#ca6641' },
        { ref: 'Progressive', title_fr: 'Progressiste', title_en: 'Progressive', sub_title_fr: 'Progressiste', sub_title_en: 'Progressive', is_active: true, color: '#ced4da' },
        { ref: 'Conservative', title_fr: 'Conservateur', title_en: 'Conservative', sub_title_fr: 'Conservateur', sub_title_en: 'Conservative', is_active: true, color: '#2d2d34' },
        { ref: 'Active', title_fr: 'Actif', title_en: 'Active', sub_title_fr: 'Actif', sub_title_en: 'Active', is_active: true, color: '#94ae89' },
        { ref: 'Inactive', title_fr: 'Inactif', title_en: 'Inactive', sub_title_fr: 'Inactif', sub_title_en: 'Inactive', is_active: true, color: '#724e91' },
        { ref: 'Ambitious', title_fr: 'Ambitieux', title_en: 'Ambitious', sub_title_fr: 'Ambitieux', sub_title_en: 'Ambitious', is_active: true, color: '#e9c46a' },
        { ref: 'Content', title_fr: 'Content', title_en: 'Content', sub_title_fr: 'Content', sub_title_en: 'Content', is_active: true, color: '#f77f00' },
        { ref: 'Discontent', title_fr: 'Mécontent', title_en: 'Discontent', sub_title_fr: 'Mécontent', sub_title_en: 'Discontent', is_active: true, color: '#90be6d' },
        { ref: 'Focused', title_fr: 'Concentré', title_en: 'Focused', sub_title_fr: 'Concentré', sub_title_en: 'Focused', is_active: true, color: '#577590' },
        { ref: 'Distracted', title_fr: 'Distrait', title_en: 'Distracted', sub_title_fr: 'Distrait', sub_title_en: 'Distracted', is_active: true, color: '#c7b198' },
        { ref: 'Organized', title_fr: 'Organisé', title_en: 'Organized', sub_title_fr: 'Organisé', sub_title_en: 'Organized', is_active: true, color: '#9f5f80' },
        { ref: 'Disorganized', title_fr: 'Désorganisé', title_en: 'Disorganized', sub_title_fr: 'Désorganisé', sub_title_en: 'Disorganized', is_active: true, color: '#7286a0' },
        { ref: 'Efficient', title_fr: 'Efficace', title_en: 'Efficient', sub_title_fr: 'Efficace', sub_title_en: 'Efficient', is_active: true, color: '#a6808c' },
        { ref: 'Inefficient', title_fr: 'Inefficace', title_en: 'Inefficient', sub_title_fr: 'Inefficace', sub_title_en: 'Inefficient', is_active: true, color: '#f28482' },
        { ref: 'Proactive', title_fr: 'Proactif', title_en: 'Proactive', sub_title_fr: 'Proactif', sub_title_en: 'Proactive', is_active: true, color: '#80ced7' },
        { ref: 'Reactive', title_fr: 'Réactif', title_en: 'Reactive', sub_title_fr: 'Réactif', sub_title_en: 'Reactive', is_active: true, color: '#d4a5a5' },
        { ref: 'Resilient', title_fr: 'Résilient', title_en: 'Resilient', sub_title_fr: 'Résilient', sub_title_en: 'Resilient', is_active: true, color: '#cdb4db' },
        { ref: 'Fragile', title_fr: 'Fragile', title_en: 'Fragile', sub_title_fr: 'Fragile', sub_title_en: 'Fragile', is_active: true, color: '#8ecae6' },
        { ref: 'Demotivated', title_fr: 'Démotivé', title_en: 'Demotivated', sub_title_fr: 'Démotivé', sub_title_en: 'Demotivated', is_active: true, color: '#e5989b' },
        { ref: 'Satisfied', title_fr: 'Satisfait', title_en: 'Satisfied', sub_title_fr: 'Satisfait', sub_title_en: 'Satisfied', is_active: true, color: '#ffb5a7' },
        { ref: 'Dissatisfied', title_fr: 'Insatisfait', title_en: 'Dissatisfied', sub_title_fr: 'Insatisfait', sub_title_en: 'Dissatisfied', is_active: true, color: '#6d6875' },
        { ref: 'Enthusiastic', title_fr: 'Enthousiaste', title_en: 'Enthusiastic', sub_title_fr: 'Enthousiaste', sub_title_en: 'Enthusiastic', is_active: true, color: '#f4a261' },
        { ref: 'Attentive', title_fr: 'Attentionné', title_en: 'Attentive', sub_title_fr: 'Attentionné', sub_title_en: 'Attentive', is_active: true, color: '#bc6c25' },
        { ref: 'Inattentive', title_fr: 'Inattentif', title_en: 'Inattentive', sub_title_fr: 'Inattentif', sub_title_en: 'Inattentive', is_active: true, color: '#264653' },
        { ref: 'Creative', title_fr: 'Créatif', title_en: 'Creative', sub_title_fr: 'Créatif', sub_title_en: 'Creative', is_active: true, color: '#2a9d8f' },
        { ref: 'Routine', title_fr: 'Routinier', title_en: 'Routine', sub_title_fr: 'Routinier', sub_title_en: 'Routine', is_active: true, color: '#264653' },
        { ref: 'Adventurous', title_fr: 'Aventurier', title_en: 'Adventurous', sub_title_fr: 'Aventurier', sub_title_en: 'Adventurous', is_active: true, color: '#e76f51' },
        { ref: 'Cautious', title_fr: 'Prudent', title_en: 'Cautious', sub_title_fr: 'Prudent', sub_title_en: 'Cautious', is_active: true, color: '#2a6f97' },
        { ref: 'Fearless', title_fr: 'Intrépide', title_en: 'Fearless', sub_title_fr: 'Intrépide', sub_title_en: 'Fearless', is_active: true, color: '#f4a261' },
        { ref: 'Anxious', title_fr: 'Anxieux', title_en: 'Anxious', sub_title_fr: 'Anxieux', sub_title_en: 'Anxious', is_active: true, color: '#43aa8b' },
        { ref: 'Tranquil', title_fr: 'Tranquille', title_en: 'Tranquil', sub_title_fr: 'Tranquille', sub_title_en: 'Tranquil', is_active: true, color: '#90be6d' },
        { ref: 'Restless', title_fr: 'Agité', title_en: 'Restless', sub_title_fr: 'Agité', sub_title_en: 'Restless', is_active: true, color: '#577590' },
        { ref: 'Composed', title_fr: 'Composé', title_en: 'Composed', sub_title_fr: 'Composé', sub_title_en: 'Composed', is_active: true, color: '#ffb367' },
        { ref: 'Panicked', title_fr: 'Paniqué', title_en: 'Panicked', sub_title_fr: 'Paniqué', sub_title_en: 'Panicked', is_active: true, color: '#d62828' },
        { ref: 'Courageous', title_fr: 'Courageux', title_en: 'Courageous', sub_title_fr: 'Courageux', sub_title_en: 'Courageous', is_active: true, color: '#fcbf49' },
        { ref: 'Cowardly', title_fr: 'Lâche', title_en: 'Cowardly', sub_title_fr: 'Lâche', sub_title_en: 'Cowardly', is_active: true, color: '#3d405b' },
        { ref: 'Compassionate', title_fr: 'Compassionné', title_en: 'Compassionate', sub_title_fr: 'Compassionné', sub_title_en: 'Compassionate', is_active: true, color: '#f4a261' },
        { ref: 'Joyful', title_fr: 'Joyeux', title_en: 'Joyful', sub_title_fr: 'Joyeux', sub_title_en: 'Joyful', is_active: true, color: '#ffba08' },
        { ref: 'Gloomy', title_fr: 'Morose', title_en: 'Gloomy', sub_title_fr: 'Morose', sub_title_en: 'Gloomy', is_active: true, color: '#6a4c93' },
        { ref: 'Adaptable', title_fr: 'Adaptable', title_en: 'Adaptable', sub_title_fr: 'Adaptable', sub_title_en: 'Adaptable', is_active: true, color: '#e9c46a' },
        { ref: 'Inflexible', title_fr: 'Inflexible', title_en: 'Inflexible', sub_title_fr: 'Inflexible', sub_title_en: 'Inflexible', is_active: true, color: '#cb997e' },
        { ref: 'Patient', title_fr: 'Patient', title_en: 'Patient', sub_title_fr: 'Patient', sub_title_en: 'Patient', is_active: true, color: '#f4a261' },
        { ref: 'Impatient', title_fr: 'Impatient', title_en: 'Impatient', sub_title_fr: 'Impatient', sub_title_en: 'Impatient', is_active: true, color: '#e76f51' },
        { ref: 'Kind', title_fr: 'Gentil', title_en: 'Kind', sub_title_fr: 'Gentil', sub_title_en: 'Kind', is_active: true, color: '#83c5be' },
        { ref: 'Cruel', title_fr: 'Cruel', title_en: 'Cruel', sub_title_fr: 'Cruel', sub_title_en: 'Cruel', is_active: true, color: '#006d77' },
        { ref: 'Forgiving', title_fr: 'Indulgent', title_en: 'Forgiving', sub_title_fr: 'Indulgent', sub_title_en: 'Forgiving', is_active: true, color: '#e29578' },
        { ref: 'Vengeful', title_fr: 'Vengeur', title_en: 'Vengeful', sub_title_fr: 'Vengeur', sub_title_en: 'Vengeful', is_active: true, color: '#006d77' },
        { ref: 'Humble', title_fr: 'Modeste', title_en: 'Humble', sub_title_fr: 'Modeste', sub_title_en: 'Humble', is_active: true, color: '#bc6c25' },
        { ref: 'Arrogant', title_fr: 'Arrogant', title_en: 'Arrogant', sub_title_fr: 'Arrogant', sub_title_en: 'Arrogant', is_active: true, color: '#264653' },
        { ref: 'Resourceful', title_fr: 'Ingénieux', title_en: 'Resourceful', sub_title_fr: 'Ingénieux', sub_title_en: 'Resourceful', is_active: true, color: '#2a9d8f' },
        { ref: 'Helpless', title_fr: 'Impuissant', title_en: 'Helpless', sub_title_fr: 'Impuissant', sub_title_en: 'Helpless', is_active: true, color: '#e76f51' }
    ];

    insertData.forEach(data => {
        db.run(`INSERT INTO test (ref, title, sub_title, is_active, color) 
                VALUES (?, ?, ?, ?, ?)`, [data.ref, JSON.stringify({ fr: data.title_fr, en: data.title_en }),
        JSON.stringify({ fr: data.sub_title_fr, en: data.sub_title_en }),
        data.is_active, data.color], (err) => {
            if (err) {
                console.error("Error inserting data:", err.message);
            } else {
                console.log("✅ Data inserted successfully");
            }
        });
    });
});
