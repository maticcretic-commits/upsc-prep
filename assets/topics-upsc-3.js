/* ==========================================================================
   EPH Topic Library data — UPSC CSE, part 3: expansion question bank.
   Augments window.EPH_TOPIC_DATA (load order: topics-upsc.js ->
   topics-upsc-2.js -> topics-upsc-3.js -> renderer):
     window.EPH_TOPIC_DATA.topics.push( 13 question-bank topic objects );
   Topic contract: { id, title, subject, tag, blurb, intro,
     sections:[{h, body?, table?, svg?, svgCap?}],
     questions:[{q, options[4], answer (0-3), expl}] }
   600 NEW questions, deduped against parts 1-2 (0 overlap). Explanations keep
   any approximate/as-reported/verify cautions attached by the writers.
   All content is original, written for this site. No external copying.
   Never mention any AI assistant.
   ========================================================================== */
(function () {
if(!window.EPH_TOPIC_DATA) return;

window.EPH_TOPIC_DATA.topics.push(

 {
  "id": "upsc-bank-ancient",
  "title": "Ancient History — Prelims Question Bank (50 MCQs)",
  "subject": "History",
  "tag": "Prelims GS I · Practice bank",
  "blurb": "Harappa to Harsha: sources, chronology and the recurring traps UPSC loves.",
  "intro": "A 50-question practice bank on ancient history, written for UPSC Prelims 2026–27. Every question carries a full explanation; solve in timed sets, log your errors, and revise the explanations — not just the answers.",
  "sections": [
   {
    "h": "How to use this bank",
    "body": "<p>Attempt questions in sets of 25 under timed conditions, then read every explanation — including for questions you got right. A few explanations flag figures or fast-moving developments as approximate or as-reported; always cross-check those against official sources (Budget documents, PIB, ministry sites) before treating them as final.</p>"
   }
  ],
  "questions": [
   {
    "q": "Consider the following statements about the Harappan Civilisation:\n1. The Great Bath has been discovered at Mohenjo-daro.\n2. Harappan seals were generally made of steatite.\n3. The dockyard has been excavated at Lothal.\nSelect the correct answer.",
    "options": [
     "1, 2 and 3",
     "1 and 3 only",
     "1 and 2 only",
     "2 and 3 only"
    ],
    "answer": 0,
    "expl": "Mohenjo-daro's Great Bath, steatite seals with unicorn motifs, and Lothal's dockyard are all established Harappan features."
   },
   {
    "q": "Match the following Harappan sites with the modern states/countries where they are located:\nA. Dholavira — 1. Haryana\nB. Rakhigarhi — 2. Gujarat\nC. Mohenjo-daro — 3. Pakistan\nD. Kalibangan — 4. Rajasthan",
    "options": [
     "A-1, B-2, C-4, D-3",
     "A-2, B-4, C-3, D-1",
     "A-4, B-1, C-3, D-2",
     "A-2, B-1, C-3, D-4"
    ],
    "answer": 3,
    "expl": "Dholavira (Gujarat), Rakhigarhi (Haryana, largest Harappan site), Mohenjo-daro (Sindh, Pakistan), Kalibangan (Rajasthan, ploughed field evidence)."
   },
   {
    "q": "Which of the following statements about Harappan town planning is/are correct?\n1. The citadel was built on a raised platform in the western part.\n2. Streets followed a grid pattern intersecting at right angles.\n3. Burnt bricks were used in construction.",
    "options": [
     "1 and 2 only",
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 3 only"
    ],
    "answer": 1,
    "expl": "Harappan cities show a raised western citadel, grid-pattern streets, and standardised burnt bricks — the hallmarks of its urban planning."
   },
   {
    "q": "The earliest evidence of the ploughed field in the Indian subcontinent comes from:",
    "options": [
     "Lothal",
     "Chanhudaro",
     "Banawali",
     "Kalibangan"
    ],
    "answer": 3,
    "expl": "Kalibangan (Rajasthan) yielded a ploughed field with criss-cross furrow marks, indicating two-crop cultivation."
   },
   {
    "q": "With reference to the Rig Vedic period, consider the following statements:\n1. The staple crop was barley (yava).\n2. The cow was the chief medium of exchange.\n3. Iron was widely used in agriculture.\nSelect the correct answer.",
    "options": [
     "1, 2 and 3",
     "1 and 3 only",
     "1 and 2 only",
     "2 and 3 only"
    ],
    "answer": 2,
    "expl": "Rig Vedic economy centred on barley and cattle as wealth/medium of exchange; iron (krishna ayas) appears only in the Later Vedic period."
   },
   {
    "q": "The 'Battle of Ten Kings' (Dasarajna) described in the Rig Veda was fought on the banks of the river:",
    "options": [
     "Sarasvati",
     "Ganga",
     "Parushni (Ravi)",
     "Yamuna"
    ],
    "answer": 2,
    "expl": "The Dasarajna, won by Sudas of the Bharatas, was fought on the Parushni (Ravi) — described in Mandala 7 of the Rig Veda."
   },
   {
    "q": "Match the following Vedic texts with their associated content:\nA. Rig Veda — 1. Musical chants\nB. Sama Veda — 2. Hymns of praise\nC. Atharva Veda — 3. Spells and charms\nD. Yajur Veda — 4. Sacrificial formulae",
    "options": [
     "A-1, B-2, C-4, D-3",
     "A-2, B-4, C-1, D-3",
     "A-4, B-1, C-3, D-2",
     "A-2, B-1, C-3, D-4"
    ],
    "answer": 3,
    "expl": "Rig Veda (praise hymns), Sama Veda (melodies), Atharva Veda (magic/medicine), Yajur Veda (ritual formulae)."
   },
   {
    "q": "Which Upanishad contains the dialogue between Nachiketa and Yama on the nature of the soul?",
    "options": [
     "Brihadaranyaka Upanishad",
     "Chandogya Upanishad",
     "Mundaka Upanishad",
     "Katha Upanishad"
    ],
    "answer": 3,
    "expl": "The Katha Upanishad presents Nachiketa's three boons and Yama's teaching on atman and immortality."
   },
   {
    "q": "Consider the following statements about Mahavira and Jainism:\n1. Mahavira was the 24th Tirthankara.\n2. He attained kevalajnana at the age of 42 under a sal tree.\n3. Jainism recognises the existence of gods but denies a creator God.\nSelect the correct answer.",
    "options": [
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 3 only",
     "1 and 2 only"
    ],
    "answer": 2,
    "expl": "Mahavira (24th Tirthankara) attained kevalin at 42 under a sal tree at Jrimbhikagrama; Jainism accepts gods as souls but rejects a creator God. All three are correct."
   },
   {
    "q": "The first Buddhist Council was held at Rajagriha under the patronage of:",
    "options": [
     "Kalashoka",
     "Ashoka",
     "Ajatashatru",
     "Kanishka"
    ],
    "answer": 2,
    "expl": "The First Council (c. 483 BCE) at Sattapanni cave, Rajagriha, was patronised by Ajatashatru; Mahakassapa presided, Upali recited Vinaya and Ananda the Sutta."
   },
   {
    "q": "Match the following Buddhist Councils with their venues:\nA. First — 1. Pataliputra\nB. Second — 2. Rajagriha\nC. Third — 3. Vaishali\nD. Fourth — 4. Kundalvana (Kashmir)",
    "options": [
     "A-3, B-2, C-1, D-4",
     "A-1, B-2, C-3, D-4",
     "A-2, B-1, C-4, D-3",
     "A-2, B-3, C-1, D-4"
    ],
    "answer": 3,
    "expl": "First (Rajagriha), Second (Vaishali, split into Sthavira/Mahasanghika), Third (Pataliputra, Ashoka), Fourth (Kundalvana, Kanishka — Sarvastivada)."
   },
   {
    "q": "The Tripitaka consists of the Vinaya Pitaka, Sutta Pitaka and Abhidhamma Pitaka. Which of them deals with monastic discipline?",
    "options": [
     "Abhidhamma Pitaka",
     "Vinaya Pitaka",
     "Sutta Pitaka",
     "Jataka tales"
    ],
    "answer": 1,
    "expl": "Vinaya Pitaka lays down monastic rules; Sutta contains discourses; Abhidhamma is philosophical analysis."
   },
   {
    "q": "Ashoka's Dhamma, as expounded in his edicts, primarily emphasised:",
    "options": [
     "Military expansion of the empire",
     "Moral and ethical conduct — tolerance, non-violence, respect for elders",
     "Abolition of the varna system",
     "State Buddhism and persecution of other sects"
    ],
    "answer": 1,
    "expl": "Ashoka's Dhamma was a moral code (tolerance among sects, ahimsa, respect for parents/teachers) — not sectarian Buddhism; he never persecuted other faiths."
   },
   {
    "q": "Which of the following Ashokan edicts is written in Greek and Aramaic?",
    "options": [
     "The Maski minor rock edict",
     "The Kandahar (Shar-i-Kuna) bilingual edict",
     "The Rummindei pillar edict",
     "The Girnar rock edict"
    ],
    "answer": 1,
    "expl": "The Shar-i-Kuna (Kandahar) edict is bilingual Greek-Aramaic; Girnar is in Prakrit (Brahmi); Maski first named 'Ashoka'; Rummindei records the Lumbini visit."
   },
   {
    "q": "Consider the following statements about the Mauryan administration:\n1. The empire was divided into provinces headed by kumara (princes).\n2. The Arthashastra of Kautilya is the principal source on Mauryan polity.\n3. Ashoka maintained a standing army of about 600,000 infantry according to Megasthenes.\nSelect the correct answer.",
    "options": [
     "1, 2 and 3",
     "1 and 2 only",
     "2 and 3 only",
     "1 and 3 only"
    ],
    "answer": 0,
    "expl": "Mauryan provinces were governed by kumaras; Kautilya's Arthashastra is the key administrative text; Megasthenes (via later writers) credits Chandragupta with a 600,000-strong infantry."
   },
   {
    "q": "The 'Saptanga' theory of the state in the Arthashastra lists seven limbs. Which of the following is NOT one of them?",
    "options": [
     "Swami (king)",
     "Sangha (monastic order)",
     "Janapada (territory and people)",
     "Amatya (ministers)"
    ],
    "answer": 1,
    "expl": "Saptanga: swami, amatya, janapada, durga (fort), kosha (treasury), danda (army), mitra (ally). Sangha is not among them."
   },
   {
    "q": "Which Mauryan ruler is credited with the construction of the Sanchi Stupa's original brick core?",
    "options": [
     "Ashoka",
     "Chandragupta Maurya",
     "Bindusara",
     "Dasharatha"
    ],
    "answer": 0,
    "expl": "Ashoka built the original brick stupa at Sanchi (3rd century BCE); the stone casing, gateways and railings are Shunga–Satavahana additions."
   },
   {
    "q": "The Hathigumpha inscription of Kharavela is located at:",
    "options": [
     "Udayagiri-Khandagiri caves, Odisha",
     "Nasik, Maharashtra",
     "Junagadh, Gujarat",
     "Sanchi, Madhya Pradesh"
    ],
    "answer": 0,
    "expl": "Kharavela's Hathigumpha inscription (Udayagiri-Khandagiri, Odisha) records his reign and mentions the Nanda king's canal — a key Jain/Chedi source."
   },
   {
    "q": "The Indo-Greek king Menander is known in Buddhist literature as:",
    "options": [
     "Milinda",
     "Maues",
     "Mihirakula",
     "Mahinda"
    ],
    "answer": 0,
    "expl": "Menander (c. 165–130 BCE) appears as Milinda in the Milindapanha, his dialogue with Nagasena; he issued bilingual coins."
   },
   {
    "q": "Consider the following statements about the Satavahanas:\n1. They issued coins mostly of lead.\n2. Gautamiputra Satakarni is called 'the destroyer of Shakas, Yavanas and Pahlavas' in the Nasik inscription.\n3. Their capital was Pratishthana (Paithan).\nSelect the correct answer.",
    "options": [
     "2 and 3 only",
     "1 and 3 only",
     "1 and 2 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "Satavahanas issued lead (and potin) coins, Gautamiputra's Nasik prashasti by his mother Gautami Balashri makes the destroyer claim, and Pratishthana was their capital."
   },
   {
    "q": "The Gandhara school of art flourished under the patronage of:",
    "options": [
     "The Kushanas",
     "The Pallavas",
     "The Guptas",
     "The Mauryas"
    ],
    "answer": 0,
    "expl": "Gandhara (Greco-Buddhist) art peaked under Kanishka and the Kushanas (1st–3rd century CE); Mathura school developed alongside under the same patronage."
   },
   {
    "q": "Which Kushana ruler convened the Fourth Buddhist Council and started the Shaka era?",
    "options": [
     "Kanishka",
     "Huvishka",
     "Kadphises I",
     "Vasudeva I"
    ],
    "answer": 0,
    "expl": "Kanishka (78 CE — start of the Shaka era) convened the Fourth Council at Kundalvana, Kashmir, where Sarvastivadin doctrine was codified."
   },
   {
    "q": "The Allahabad Pillar inscription (Prayag Prashasti) eulogising Samudragupta was composed by:",
    "options": [
     "Ravikirti",
     "Kalidasa",
     "Harishena",
     "Banabhatta"
    ],
    "answer": 2,
    "expl": "Harishena, Samudragupta's court poet, composed the Prayag Prashasti; Ravikirti composed Pulakeshin II's Aihole inscription."
   },
   {
    "q": "Consider the following statements about the Gupta period:\n1. It is often called the 'Golden Age' of ancient India.\n2. The decimal system and the concept of zero developed during this period.\n3. Fa-Hien visited India during Chandragupta II's reign.\nSelect the correct answer.",
    "options": [
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 3 only",
     "1 and 2 only"
    ],
    "answer": 0,
    "expl": "Gupta age: classical Sanskrit literature, Aryabhata's astronomy/mathematics (zero, decimals), and Fa-Hien's visit (c. 405–411 CE) during Chandragupta II Vikramaditya."
   },
   {
    "q": "The Nalanda Mahavihara was founded during the reign of:",
    "options": [
     "Harshavardhana",
     "Kumaragupta I",
     "Samudragupta",
     "Dharmapala"
    ],
    "answer": 1,
    "expl": "Kumaragupta I (Mahendraditya, early 5th century) founded Nalanda; it was later patronised by Harsha and the Palas."
   },
   {
    "q": "Match the following Gupta-era scholars with their works:\nA. Aryabhata — 1. Panchasiddhantika\nB. Varahamihira — 2. Aryabhatiya\nC. Kalidasa — 3. Abhijnanashakuntalam\nD. Vishakhadatta — 4. Mudrarakshasa",
    "options": [
     "A-1, B-2, C-4, D-3",
     "A-4, B-1, C-3, D-2",
     "A-2, B-3, C-1, D-4",
     "A-2, B-1, C-3, D-4"
    ],
    "answer": 3,
    "expl": "Aryabhata (Aryabhatiya), Varahamihira (Panchasiddhantika, Brihat Samhita), Kalidasa (Shakuntalam), Vishakhadatta (Mudrarakshasa)."
   },
   {
    "q": "The iron pillar at Mehrauli (Delhi) attributes its erection to a king named 'Chandra', identified by most scholars with:",
    "options": [
     "Chandragupta II",
     "Chandragupta Maurya",
     "Chandragupta I",
     "Chandravarman"
    ],
    "answer": 0,
    "expl": "The rust-resistant Mehrauli iron pillar's 'Chandra' is generally identified with Chandragupta II Vikramaditya of the Guptas."
   },
   {
    "q": "Harshavardhana's court poet Banabhatta wrote:",
    "options": [
     "Harshacharita and Kadambari",
     "Mudrarakshasa and Devi-Chandraguptam",
     "Vikramankadevacharita",
     "Rajatarangini"
    ],
    "answer": 0,
    "expl": "Banabhatta authored Harshacharita (Harsha's biography) and the romance Kadambari; Hiuen Tsang visited during Harsha's reign."
   },
   {
    "q": "The Aihole inscription of Pulakeshin II was composed by Ravikirti and records his victory over:",
    "options": [
     "Narasimhavarman I",
     "Harshavardhana",
     "Kubja Vishnuvardhana",
     "Mahendravarman I"
    ],
    "answer": 1,
    "expl": "Ravikirti's Aihole prashasti (634 CE) celebrates Pulakeshin II's check of Harsha on the Narmada; Narasimhavarman later defeated Pulakeshin."
   },
   {
    "q": "Consider the following statements about the Chola administration:\n1. The Uttaramerur inscription details the electoral system of village assemblies.\n2. The Chola army had a strong navy.\n3. Land revenue was the main source of state income.\nSelect the correct answer.",
    "options": [
     "1 and 3 only",
     "1 and 2 only",
     "2 and 3 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "Uttaramerur (Parantaka I) describes kudavolai elections; Rajaraja I and Rajendra I built a formidable navy (Sri Vijaya expedition); land revenue anchored Chola finance."
   },
   {
    "q": "The Brihadeshwara Temple at Thanjavur was built by:",
    "options": [
     "Parantaka I",
     "Karikala",
     "Rajendra I",
     "Rajaraja I"
    ],
    "answer": 3,
    "expl": "Rajaraja I (c. 1010 CE) built the Brihadeshwara (Rajarajeshwara) temple; Rajendra I built Gangaikondacholapuram."
   },
   {
    "q": "Which of the following statements about Sangam literature is/are correct?\n1. It is the earliest known Tamil literature.\n2. Tolkappiyam is a work on Tamil grammar.\n3. The Sangams were assemblies of Tamil poets held at Madurai.",
    "options": [
     "2 and 3 only",
     "1 and 2 only",
     "1 and 3 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "Sangam corpus (c. 300 BCE–300 CE) is the earliest Tamil literature; Tolkappiyam is its grammatical treatise; tradition speaks of three Sangams at Madurai."
   },
   {
    "q": "The port city of Arikamedu, an Indo-Roman trading station, is located near:",
    "options": [
     "Visakhapatnam",
     "Chennai",
     "Puducherry",
     "Kochi"
    ],
    "answer": 2,
    "expl": "Arikamedu (near Puducherry) yielded Roman amphorae, Arretine ware and beads — evidence of 1st-century CE Indo-Roman trade; Muziris was on the Malabar coast."
   },
   {
    "q": "Which of the following was the capital of the Pallavas?",
    "options": [
     "Kanchipuram",
     "Thanjavur",
     "Madurai",
     "Uraiyur"
    ],
    "answer": 0,
    "expl": "Kanchipuram was the Pallava capital; Mahabalipuram's shore temple and rathas are Pallava (Narasimhavarman I–II) monuments."
   },
   {
    "q": "The 'Dashavatara' temple at Deogarh is an example of:",
    "options": [
     "Pallava rock-cut architecture",
     "Gupta temple architecture",
     "Chalukyan Vesara style",
     "Chola bronze casting"
    ],
    "answer": 1,
    "expl": "Deogarh's Dashavatara temple (c. 6th century, Jhansi district) is a classic Gupta panchayatana temple with the famous Sheshashayi Vishnu panel."
   },
   {
    "q": "Consider the following statements about the Vedic 'Sabha' and 'Samiti':\n1. They were popular assemblies of the Rig Vedic period.\n2. Women participated in the Sabhas and Samitis.\n3. The king was bound by their decisions.\nSelect the correct answer.",
    "options": [
     "1 and 3 only",
     "1 and 2 only",
     "1, 2 and 3",
     "2 and 3 only"
    ],
    "answer": 1,
    "expl": "Sabha and Samiti were tribal assemblies with women's participation (Rig Veda); the king sought their support but was not constitutionally bound by them."
   },
   {
    "q": "The earliest Buddhist stupa believed to contain the Buddha's relics and patronised by Ashoka, later enlarged by the Shungas, is at:",
    "options": [
     "Amaravati",
     "Sanchi",
     "Sarnath",
     "Bharhut"
    ],
    "answer": 1,
    "expl": "Sanchi's Great Stupa: Ashokan brick core, Shunga stone casing and railings; Bharhut's railings are Shunga; Amaravati is Satavahana–Ikshvaku."
   },
   {
    "q": "Which of the following texts is known as the 'Fifth Veda'?",
    "options": [
     "Manusmriti",
     "Mahabharata",
     "Ramayana",
     "Arthashastra"
    ],
    "answer": 1,
    "expl": "The Mahabharata calls itself the fifth Veda; the Natya Shastra is also sometimes so styled."
   },
   {
    "q": "The 'Junagadh inscription' of Rudradaman I is significant because it:",
    "options": [
     "Describes the Kalinga war",
     "Mentions the Shaka era",
     "Is the earliest long inscription in chaste Sanskrit",
     "Records Ashoka's Dhamma"
    ],
    "answer": 2,
    "expl": "Rudradaman's Junagadh rock inscription (c. 150 CE) on Sudarshana lake repairs is the first major royal inscription in classical Sanskrit prose."
   },
   {
    "q": "Consider the following statements about the position of women in the Rig Vedic period:\n1. Women attended assemblies and offered sacrifices.\n2. Child marriage was widely prevalent.\n3. Gargi and Maitreyi were noted women philosophers.\nSelect the correct answer.",
    "options": [
     "2 and 3 only",
     "1 and 3 only",
     "1 and 2 only",
     "1, 2 and 3"
    ],
    "answer": 1,
    "expl": "Rig Vedic women enjoyed relative freedom — assembly participation, composers like Lopamudra, philosophers Gargi and Maitreyi (Brihadaranyaka); child marriage is a later development."
   },
   {
    "q": "The capital of the ancient kingdom of Magadha under the Haryanka dynasty was first at Rajagriha and later shifted to:",
    "options": [
     "Vaishali",
     "Kausambi",
     "Pataliputra",
     "Shravasti"
    ],
    "answer": 2,
    "expl": "Udayin (Ajatashatru's successor) shifted the Magadhan capital from Rajagriha to Pataliputra (confluence of Ganga, Son and Gandak)."
   },
   {
    "q": "Which of the following Mahajanapadas was a republic (sangha) rather than a monarchy?",
    "options": [
     "Avanti",
     "Kosala",
     "Magadha",
     "Vajji (Lichchhavi)"
    ],
    "answer": 3,
    "expl": "Vajji (with capital Vaishali) was a confederacy of eight clans including the Lichchhavis — a gana-sangha; the Buddha praised its seven principles of non-decline."
   },
   {
    "q": "The 'second urbanisation' in Indian history is associated with which period?",
    "options": [
     "The Chola period",
     "Harappan period",
     "The Mahajanapada period (6th century BCE onwards)",
     "The Gupta period"
    ],
    "answer": 2,
    "expl": "The 6th century BCE saw the second urbanisation — towns like Pataliputra, Vaishali, Shravasti — driven by iron, surplus agriculture and trade; the first was Harappan."
   },
   {
    "q": "Punch-marked coins, the earliest coins of India, were made of:",
    "options": [
     "Copper",
     "Silver",
     "Gold",
     "Lead"
    ],
    "answer": 1,
    "expl": "Punch-marked (ahat) coins were predominantly silver (some copper), bearing multiple punched symbols; issued from the 6th century BCE by Mahajanapadas and Mauryas."
   },
   {
    "q": "The Ajanta caves are primarily associated with:",
    "options": [
     "Jainism",
     "Vaishnavism",
     "Buddhism",
     "Shaivism"
    ],
    "answer": 2,
    "expl": "Ajanta's 29 caves (Satavahana–Vakataka phases) are Buddhist — chaityas and viharas with Jataka murals; Ellora has all three faiths."
   },
   {
    "q": "Which of the following statements about the Ellora caves is/are correct?\n1. They contain Buddhist, Hindu and Jain caves.\n2. The Kailasa temple was excavated under Rashtrakuta patronage.\n3. Cave 16 (Kailasa) was built during Krishna I's reign.",
    "options": [
     "1, 2 and 3",
     "1 and 3 only",
     "2 and 3 only",
     "1 and 2 only"
    ],
    "answer": 0,
    "expl": "Ellora's 34 caves span Buddhism, Hinduism and Jainism; the monolithic Kailasa temple (Cave 16) was excavated under the Rashtrakuta king Krishna I."
   },
   {
    "q": "The Vikram Samvat era (57 BCE) is traditionally associated with:",
    "options": [
     "Chandragupta Maurya's coronation",
     "Harsha's coronation",
     "Kanishka's accession",
     "King Vikramaditya of Ujjain defeating the Shakas"
    ],
    "answer": 3,
    "expl": "Vikram Samvat (57 BCE) commemorates the legendary Vikramaditya of Ujjain's victory over the Shakas; Shaka era (78 CE) marks Kanishka; Harsha era (606 CE) Harsha's accession."
   },
   {
    "q": "Consider the following statements about the Sangam-age Cheras, Cholas and Pandyas:\n1. The Cheras controlled the Malabar coast with ports like Muziris.\n2. Karikala was a famous Chola king credited with building Kallanai.\n3. The Pandyas had their capital at Madurai.\nSelect the correct answer.",
    "options": [
     "1 and 2 only",
     "2 and 3 only",
     "1, 2 and 3",
     "1 and 3 only"
    ],
    "answer": 2,
    "expl": "Cheras (Malabar/Muziris trade), Karikala Chola (Kallanai/Grand Anicut on the Kaveri), Pandyas of Madurai — the three Sangam-age Tamil powers."
   },
   {
    "q": "The 'Periplus of the Erythraean Sea' is a:",
    "options": [
     "Greek work on Indian Ocean trade (1st century CE)",
     "Roman law code",
     "Chinese pilgrim's account",
     "Persian chronicle of Alexander"
    ],
    "answer": 0,
    "expl": "The Periplus (c. 1st century CE), by an anonymous Greek-Egyptian merchant, details Red Sea–Indian Ocean trade ports including Barygaza and Muziris."
   },
   {
    "q": "Which of the following was NOT a centre of learning in ancient India?",
    "options": [
     "Taxila",
     "Vikramashila",
     "Nalanda",
     "Fatehpur Sikri"
    ],
    "answer": 3,
    "expl": "Taxila, Nalanda and Vikramashila were famed ancient universities; Fatehpur Sikri is a Mughal (Akbar's) capital, not an ancient learning centre."
   }
  ]
 },
 {
  "id": "upsc-bank-artculture",
  "title": "Art & Culture — Prelims Question Bank (40 MCQs)",
  "subject": "History",
  "tag": "Prelims GS I · Practice bank",
  "blurb": "Architecture, sculpture, painting, dance, music and literature — visual facts that reward revision.",
  "intro": "A 40-question practice bank on art & culture, written for UPSC Prelims 2026–27. Every question carries a full explanation; solve in timed sets, log your errors, and revise the explanations — not just the answers.",
  "sections": [
   {
    "h": "How to use this bank",
    "body": "<p>Attempt questions in sets of 25 under timed conditions, then read every explanation — including for questions you got right. A few explanations flag figures or fast-moving developments as approximate or as-reported; always cross-check those against official sources (Budget documents, PIB, ministry sites) before treating them as final.</p>"
   }
  ],
  "questions": [
   {
    "q": "Consider the following statements about the classical dances of India:\n1. Bharatanatyam originated in Tamil Nadu.\n2. Kathakali is from Kerala.\n3. Odissi is from Odisha.\nSelect the correct answer.",
    "options": [
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 2 only",
     "1 and 3 only"
    ],
    "answer": 0,
    "expl": "Bharatanatyam (TN), Kathakali (Kerala), Odissi (Odisha) — all correctly matched; the Sangeet Natak Akademi recognises 8 classical forms (plus Chhau)."
   },
   {
    "q": "Match the following classical dances with their states:\nA. Kathak — 1. Assam\nB. Sattriya — 2. Uttar Pradesh\nC. Kuchipudi — 3. Andhra Pradesh\nD. Manipuri — 4. Manipur",
    "options": [
     "A-4, B-1, C-3, D-2",
     "A-1, B-2, C-4, D-3",
     "A-2, B-3, C-1, D-4",
     "A-2, B-1, C-3, D-4"
    ],
    "answer": 3,
    "expl": "Kathak (UP), Sattriya (Assam, Sankardev monasteries), Kuchipudi (AP), Manipuri (Manipur, Raslila) — correct."
   },
   {
    "q": "The 'Natya Shastra' is attributed to:",
    "options": [
     "Kalidasa",
     "Bhasa",
     "Panini",
     "Bharata Muni"
    ],
    "answer": 3,
    "expl": "Bharata's Natya Shastra (c. 200 BCE–200 CE) is the foundational treatise on dramaturgy, music and dance (rasa theory)."
   },
   {
    "q": "Consider the following statements about Hindustani and Carnatic music:\n1. Hindustani music was influenced by Persian traditions.\n2. Carnatic music emphasises kritis and is centred in South India.\n3. Tansen was a court musician of Akbar.\nSelect the correct answer.",
    "options": [
     "2 and 3 only",
     "1 and 3 only",
     "1 and 2 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "Hindustani (Persian influence, gharanas), Carnatic (kriti-based, Trinity: Tyagaraja, Muthuswami Dikshitar, Shyama Shastri), Tansen (Akbar's navratna) — all correct."
   },
   {
    "q": "The 'Dhrupad' is:",
    "options": [
     "A Sufi shrine ritual only",
     "The oldest Hindustani vocal form",
     "A folk dance of Rajasthan",
     "A Carnatic percussion instrument"
    ],
    "answer": 1,
    "expl": "Dhrupad (Tansen's lineage): austere, meditative Hindustani form — older than khayal; the Dagar brothers are its exponents."
   },
   {
    "q": "Match the following musical instruments with their maestros:\nA. Sitar — 1. Bismillah Khan\nB. Shehnai — 2. Ravi Shankar\nC. Tabla — 3. Hariprasad Chaurasia\nD. Flute — 4. Zakir Hussain",
    "options": [
     "A-3, B-1, C-4, D-2",
     "A-2, B-1, C-4, D-3",
     "A-1, B-2, C-3, D-4",
     "A-2, B-4, C-1, D-3"
    ],
    "answer": 1,
    "expl": "Ravi Shankar (sitar), Bismillah Khan (shehnai), Zakir Hussain (tabla), Hariprasad Chaurasia (flute) — iconic pairings."
   },
   {
    "q": "The 'Sangeet Natak Akademi' was established in:",
    "options": [
     "1975",
     "1947",
     "1961",
     "1952"
    ],
    "answer": 3,
    "expl": "SNA (1952): apex body for performing arts; its Tagore Ratna/Tagore Puraskar and Akademi awards honour artists."
   },
   {
    "q": "Consider the following statements about the UNESCO World Heritage Sites in India:\n1. The Taj Mahal was among the first Indian sites inscribed (1983).\n2. India has over 40 World Heritage Sites.\n3. Dholavira (2021) is a Harappan city World Heritage Site.\nSelect the correct answer.",
    "options": [
     "1 and 3 only",
     "1 and 2 only",
     "2 and 3 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "Taj, Agra Fort, Ajanta, Ellora (1983 first batch); 40+ sites now (43+ by 2024, incl. Santiniketan 2023, Hoysala temples 2023); Dholavira inscribed 2021."
   },
   {
    "q": "The 'Ramnagar Ramlila' is famous as:",
    "options": [
     "A Sikh martial display",
     "A Mughal court ritual",
     "A Portuguese festival",
     "A UNESCO Intangible Cultural Heritage-associated Ramlila of Varanasi"
    ],
    "answer": 3,
    "expl": "Varanasi's Ramnagar Ramlila (month-long, Kashi Naresh's patronage) — Ramlila traditions are on UNESCO's intangible list (2008)."
   },
   {
    "q": "Match the following UNESCO Intangible Heritage elements of India:\nA. Kumbh Mela — 1. 2017\nB. Yoga — 2. 2016\nC. Ramlila — 3. 2008\nD. Chhau dance — 4. 2010",
    "options": [
     "A-1, B-2, C-3, D-4",
     "A-1, B-3, C-2, D-4",
     "A-4, B-2, C-3, D-1",
     "A-2, B-1, C-4, D-3"
    ],
    "answer": 0,
    "expl": "Ramlila (2008), Chhau (2010), Yoga (2016), Kumbh Mela (2017) — inscription years; Durga Puja (2021) and Garba (2023) followed."
   },
   {
    "q": "The 'Pattachitra' painting style belongs to:",
    "options": [
     "Kerala",
     "Rajasthan",
     "Maharashtra",
     "Odisha and West Bengal"
    ],
    "answer": 3,
    "expl": "Pattachitra (cloth scrolls: Jagannath themes in Odisha, Kalighat-adjacent Bengal patas) — GI-tagged craft."
   },
   {
    "q": "Consider the following statements about miniature paintings:\n1. Mughal miniatures blended Persian and Indian styles.\n2. Rajput miniatures include the Pahari and Rajasthani schools.\n3. The Kangra style is known for Bhagavata Purana themes.\nSelect the correct answer.",
    "options": [
     "1 and 2 only",
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 3 only"
    ],
    "answer": 1,
    "expl": "Mughal (Persian-Indian synthesis, Akbar–Shah Jahan), Rajput/Pahari schools, Kangra (Bhagavata, Bihari's Sat Sai) — all correct."
   },
   {
    "q": "The 'Madhubani' (Mithila) painting is traditionally practised in:",
    "options": [
     "Bihar and Nepal",
     "Tamil Nadu",
     "Assam",
     "Gujarat"
    ],
    "answer": 0,
    "expl": "Madhubani/Mithila (Bihar–Nepal): kohbar and ritual wall art by women artists like Sita Devi, Ganga Devi — GI-tagged."
   },
   {
    "q": "Match the following temple architecture styles:\nA. Nagara — 1. South India\nB. Dravida — 2. North India\nC. Vesara — 3. Deccan (Chalukya blend)",
    "options": [
     "A-2, B-3, C-1",
     "A-1, B-2, C-3",
     "A-2, B-1, C-3",
     "A-3, B-1, C-2"
    ],
    "answer": 2,
    "expl": "Nagara (north: shikhara), Dravida (south: vimana/gopuram), Vesara (Deccan hybrid: Pattadakal, Hoysala temples)."
   },
   {
    "q": "The Sun Temple at Konark was built by:",
    "options": [
     "Krishnadevaraya",
     "Rajaraja I",
     "Ashoka",
     "Narasimhadeva I (Eastern Ganga dynasty)"
    ],
    "answer": 3,
    "expl": "Konark (c. 1250 CE, 'Black Pagoda'): Narasimhadeva I's chariot-shaped Surya temple — World Heritage Site."
   },
   {
    "q": "Consider the following statements about Buddhist architecture:\n1. Stupas enshrine relics.\n2. Chaityas are prayer halls.\n3. Viharas are monasteries.\nSelect the correct answer.",
    "options": [
     "1, 2 and 3",
     "1 and 3 only",
     "2 and 3 only",
     "1 and 2 only"
    ],
    "answer": 0,
    "expl": "Stupa (relic mound), chaitya (apsidal prayer hall, e.g., Karle), vihara (monks' residence, e.g., Ajanta Cave 1) — the Buddhist triad."
   },
   {
    "q": "The 'Khajuraho' temples were built by the:",
    "options": [
     "Rashtrakutas",
     "Pallavas",
     "Chandelas",
     "Cholas"
    ],
    "answer": 2,
    "expl": "Chandela (950–1050 CE): Khajuraho's Nagara temples (Kandariya Mahadeva) — World Heritage, famed for erotic sculpture."
   },
   {
    "q": "Which of the following statements about the 'Ajanta' paintings is/are correct?\n1. They depict Jataka tales.\n2. They use the fresco-secco technique.\n3. They date from the 2nd century BCE to the 5th century CE.",
    "options": [
     "1 and 3 only",
     "2 and 3 only",
     "1, 2 and 3",
     "1 and 2 only"
    ],
    "answer": 2,
    "expl": "Ajanta: Jataka murals, tempera/fresco-secco on mud plaster, two phases (Satavahana c. 2nd c. BCE; Vakataka c. 5th c. CE)."
   },
   {
    "q": "The 'Sarnath Lion Capital' was adopted as India's national emblem on:",
    "options": [
     "26 January 1950",
     "15 August 1947",
     "24 January 1950",
     "22 July 1947"
    ],
    "answer": 0,
    "expl": "The Lion Capital (Ashokan, Sarnath) became the state emblem on 26 January 1950; the flag was adopted 22 July 1947."
   },
   {
    "q": "Consider the following statements about the national symbols of India:\n1. The national animal is the Bengal tiger.\n2. The national bird is the Indian peacock.\n3. The national flower is the lotus.\nSelect the correct answer.",
    "options": [
     "1 and 2 only",
     "1 and 3 only",
     "1, 2 and 3",
     "2 and 3 only"
    ],
    "answer": 2,
    "expl": "Tiger (1973), peacock (1963), lotus — plus the banyan (national tree) and Ganga dolphin (national aquatic animal)."
   },
   {
    "q": "'Jana Gana Mana' was first sung at the Calcutta session of the INC in:",
    "options": [
     "1920",
     "1911",
     "1947",
     "1905"
    ],
    "answer": 1,
    "expl": "Tagore's anthem first sung 27 December 1911 (Calcutta session); adopted as national anthem 24 January 1950."
   },
   {
    "q": "The author of 'Vande Mataram' is:",
    "options": [
     "Subhas Chandra Bose",
     "Rabindranath Tagore",
     "Aurobindo Ghosh",
     "Bankim Chandra Chatterjee"
    ],
    "answer": 3,
    "expl": "'Vande Mataram' (Anandamath, 1882, Sanskrit-Bengali) — national song (first two stanzas), adopted 24 January 1950."
   },
   {
    "q": "Consider the following statements about the Bhakti-era literature:\n1. Tulsidas wrote the Ramcharitmanas in Awadhi.\n2. Surdas's Sursagar is devoted to Krishna.\n3. Kabir's dohas blend Hindu-Muslim thought.\nSelect the correct answer.",
    "options": [
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 3 only",
     "1 and 2 only"
    ],
    "answer": 0,
    "expl": "Tulsidas (Awadhi Ramcharitmanas), Surdas (Brajbhasha Sursagar), Kabir (nirgun dohas in the Granth Sahib) — all correct."
   },
   {
    "q": "The 'Sahitya Akademi' was established in:",
    "options": [
     "1954",
     "1952",
     "1961",
     "1948"
    ],
    "answer": 0,
    "expl": "Sahitya Akademi (1954): India's national academy of letters; awards in 24 recognised languages."
   },
   {
    "q": "Match the following authors with their works:\nA. Kalidasa — 1. Gitanjali\nB. Tagore — 2. Meghaduta\nC. Banabhatta — 3. Harshacharita\nD. Ashvaghosha — 4. Buddhacharita",
    "options": [
     "A-4, B-1, C-3, D-2",
     "A-2, B-1, C-3, D-4",
     "A-1, B-2, C-4, D-3",
     "A-2, B-3, C-1, D-4"
    ],
    "answer": 1,
    "expl": "Kalidasa (Meghaduta, Shakuntalam), Tagore (Gitanjali, Nobel 1913), Banabhatta (Harshacharita), Ashvaghosha (Buddhacharita, Sutralankara)."
   },
   {
    "q": "The 'Jnanpith Award' is India's highest literary honour. The first recipient was:",
    "options": [
     "Mulk Raj Anand",
     "Premchand",
     "G. Sankara Kurup (1965, Malayalam)",
     "Tagore"
    ],
    "answer": 2,
    "expl": "Jnanpith (1965): first to G. Sankara Kurup (Odakkuzhal, Malayalam); Tagore's Nobel predates it."
   },
   {
    "q": "Consider the following statements about the languages in the Eighth Schedule:\n1. There are 22 scheduled languages.\n2. Sindhi was added in 1967.\n3. Bodo, Dogri, Maithili and Santhali were added in 2003.\nSelect the correct answer.",
    "options": [
     "1 and 2 only",
     "1 and 3 only",
     "1, 2 and 3",
     "2 and 3 only"
    ],
    "answer": 2,
    "expl": "21st Amendment (1967) added Sindhi; 71st (1992) added Konkani, Manipuri, Nepali; 92nd (2003) added Bodo, Dogri, Maithili, Santhali — total 22."
   },
   {
    "q": "The 'Dadasaheb Phalke Award' is given for:",
    "options": [
     "Best documentary",
     "Best regional film",
     "Best debut film",
     "Lifetime contribution to Indian cinema"
    ],
    "answer": 3,
    "expl": "India's highest film honour (1969, named after the father of Indian cinema); presented with the National Film Awards."
   },
   {
    "q": "The first Indian talkie film was:",
    "options": [
     "Alam Ara (1931)",
     "Pundalik",
     "Shirin Farhad",
     "Raja Harishchandra"
    ],
    "answer": 0,
    "expl": "Alam Ara (Ardeshir Irani, 1931) — first talkie; Raja Harishchandra (1913, Phalke) was the first silent feature."
   },
   {
    "q": "Consider the following statements about the 'Bharat Ratna':\n1. It was instituted in 1954.\n2. The first recipients were C. Rajagopalachari, S. Radhakrishnan and C.V. Raman.\n3. It is India's highest civilian award.\nSelect the correct answer.",
    "options": [
     "1 and 3 only",
     "1 and 2 only",
     "2 and 3 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "Bharat Ratna (1954): first trio — Rajaji, Radhakrishnan, C.V. Raman; highest civilian honour; awarded for exceptional service."
   },
   {
    "q": "The 'Padma' awards are announced every year on the occasion of:",
    "options": [
     "Independence Day",
     "Diwali",
     "Republic Day",
     "Gandhi Jayanti"
    ],
    "answer": 2,
    "expl": "Padma Vibhushan/Bhushan/Shri are announced on Republic Day eve (January) and conferred later — 2024 reinstated the practice of announcing with citations."
   },
   {
    "q": "Match the following festivals with their states:\nA. Bihu — 1. Kerala\nB. Onam — 2. Assam\nC. Pongal — 3. Tamil Nadu\nD. Baisakhi — 4. Punjab",
    "options": [
     "A-2, B-1, C-3, D-4",
     "A-4, B-1, C-3, D-2",
     "A-2, B-3, C-1, D-4",
     "A-1, B-2, C-4, D-3"
    ],
    "answer": 0,
    "expl": "Bihu (Assam), Onam (Kerala), Pongal (TN), Baisakhi (Punjab) — harvest festivals across India."
   },
   {
    "q": "The 'Hornbill Festival' is celebrated in:",
    "options": [
     "Nagaland",
     "Manipur",
     "Mizoram",
     "Arunachal Pradesh"
    ],
    "answer": 0,
    "expl": "Hornbill (December, Kisama, Nagaland): festival of festivals showcasing Naga tribes' culture."
   },
   {
    "q": "Consider the following statements about the 'Pushkar Fair':\n1. It is held in Rajasthan.\n2. It coincides with Kartik Purnima.\n3. It is famous for camel trading.\nSelect the correct answer.",
    "options": [
     "1, 2 and 3",
     "1 and 3 only",
     "2 and 3 only",
     "1 and 2 only"
    ],
    "answer": 0,
    "expl": "Pushkar (Ajmer, Rajasthan): Kartik Purnima cattle/camel fair — one of the world's largest livestock fairs."
   },
   {
    "q": "The 'Sufi' music form 'Qawwali' was popularised in India by:",
    "options": [
     "Mian Tansen's son",
     "Tyagaraja",
     "Amir Khusrau",
     "Tansen"
    ],
    "answer": 2,
    "expl": "Khusrau (13th–14th c.), disciple of Nizamuddin Auliya, is credited with shaping qawwali and Hindustani music's early forms."
   },
   {
    "q": "Which of the following statements about the 'Ajrakh' textile is/are correct?\n1. It is a block-printed textile of Kutch (Gujarat).\n2. It uses natural dyes.\n3. It received a GI tag.",
    "options": [
     "1 and 2 only",
     "1, 2 and 3",
     "1 and 3 only",
     "2 and 3 only"
    ],
    "answer": 1,
    "expl": "Ajrakh (Kutch, Khatri community): resist block-printing with natural dyes (indigo, madder) — GI-tagged craft."
   },
   {
    "q": "The 'Kalamkari' art form is associated with:",
    "options": [
     "Rajasthan",
     "Kashmir",
     "West Bengal",
     "Andhra Pradesh"
    ],
    "answer": 3,
    "expl": "Kalamkari (Srikalahasti/Machilipatnam, AP): hand-painted/dyed textiles with mythological narratives — GI-tagged."
   },
   {
    "q": "Consider the following statements about the 'Chola bronzes':\n1. They were made by the lost-wax (cire perdue) process.\n2. The Nataraja is the most famous form.\n3. They date mainly from the 9th–13th centuries.\nSelect the correct answer.",
    "options": [
     "1 and 2 only",
     "2 and 3 only",
     "1 and 3 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "Chola bronzes (9th–13th c.): lost-wax casting; Nataraja (cosmic dance) the icon — Rajaraja-era masterpieces."
   },
   {
    "q": "The 'Rani ki Vav' stepwell is located in:",
    "options": [
     "Hampi, Karnataka",
     "Orchha, Madhya Pradesh",
     "Jaipur, Rajasthan",
     "Patan, Gujarat"
    ],
    "answer": 3,
    "expl": "Rani ki Vav (Patan, Solanki era, 11th c.): intricately sculpted stepwell — World Heritage Site (2014)."
   },
   {
    "q": "Which of the following is a correct pair of GI-tagged products?\n1. Darjeeling Tea — West Bengal\n2. Kanchipuram Silk — Tamil Nadu\n3. Alphonso Mango — Maharashtra",
    "options": [
     "2 and 3 only",
     "1 and 2 only",
     "1, 2 and 3",
     "1 and 3 only"
    ],
    "answer": 2,
    "expl": "Darjeeling Tea (first GI, 2004), Kanchipuram Silk, Alphonso (Ratnagiri) — all GI-tagged; India has 600+ GIs."
   }
  ]
 },
 {
  "id": "upsc-bank-current",
  "title": "Current Affairs — Prelims Question Bank (49 MCQs)",
  "subject": "Current Affairs",
  "tag": "Prelims GS I · Practice bank",
  "blurb": "2025–26 developments across polity, economy, environment, science and world affairs. Fast-moving facts: treat figures as reported and verify from official sources before relying on them.",
  "intro": "A 49-question practice bank on current affairs, written for UPSC Prelims 2026–27. Every question carries a full explanation; solve in timed sets, log your errors, and revise the explanations — not just the answers.",
  "sections": [
   {
    "h": "How to use this bank",
    "body": "<p>Attempt questions in sets of 25 under timed conditions, then read every explanation — including for questions you got right. A few explanations flag figures or fast-moving developments as approximate or as-reported; always cross-check those against official sources (Budget documents, PIB, ministry sites) before treating them as final.</p>"
   }
  ],
  "questions": [
   {
    "q": "Who is the Chief Justice of India as of September 2026?",
    "options": [
     "Justice B.R. Gavai",
     "Justice D.Y. Chandrachud",
     "Justice Sanjiv Khanna",
     "Justice Surya Kant"
    ],
    "answer": 3,
    "expl": "Justice Surya Kant became the 53rd CJI on 24 November 2025, succeeding Justice B.R. Gavai; his term runs till February 2027."
   },
   {
    "q": "The 2025 Nobel Peace Prize was awarded to:",
    "options": [
     "Volodymyr Zelenskyy",
     "Donald Trump",
     "Greta Thunberg",
     "María Corina Machado (Venezuela)"
    ],
    "answer": 3,
    "expl": "The Norwegian Nobel Committee awarded the 2025 Peace Prize to Venezuelan opposition leader María Corina Machado for promoting democratic rights (announced 10 October 2025)."
   },
   {
    "q": "India won the ICC Champions Trophy 2025 by defeating which team in the final?",
    "options": [
     "New Zealand",
     "South Africa",
     "Australia",
     "Pakistan"
    ],
    "answer": 0,
    "expl": "India beat New Zealand in the final at Dubai (March 2025) to lift the Champions Trophy — Rohit Sharma's side remained unbeaten."
   },
   {
    "q": "Consider the following statements about the Paris Olympics 2024:\n1. India won six medals including one silver.\n2. Neeraj Chopra won silver in javelin.\n3. Manu Bhaker won two bronze medals in shooting.\nSelect the correct answer.",
    "options": [
     "1, 2 and 3",
     "1 and 3 only",
     "1 and 2 only",
     "2 and 3 only"
    ],
    "answer": 0,
    "expl": "Paris 2024: India's six medals — Neeraj's javelin silver, bronzes for Manu Bhaker (two), Swapnil Kusale, Aman Sehrawat and men's hockey."
   },
   {
    "q": "D. Gukesh became the World Chess Champion in December 2024 by defeating:",
    "options": [
     "Ian Nepomniachtchi",
     "Ding Liren",
     "Fabiano Caruana",
     "Magnus Carlsen"
    ],
    "answer": 1,
    "expl": "Gukesh Dommaraju (18) beat China's Ding Liren in Singapore — the youngest undisputed world chess champion in history."
   },
   {
    "q": "At the 45th Chess Olympiad (Budapest, 2024), India won:",
    "options": [
     "Gold in Open, silver in Women's",
     "Gold in both the Open and Women's sections",
     "Silver in both sections",
     "Bronze in Open only"
    ],
    "answer": 1,
    "expl": "India's historic double gold at Budapest 2024 (Open and Women's) — with Gukesh, Praggnanandhaa, Arjun Erigaisi, Divya Deshmukh and Vaishali starring."
   },
   {
    "q": "The consecration (pran pratishtha) of the Ram Temple at Ayodhya took place on:",
    "options": [
     "22 January 2024",
     "22 January 2023",
     "5 August 2020",
     "15 August 2024"
    ],
    "answer": 0,
    "expl": "The pran pratishtha ceremony was held on 22 January 2024; the temple's construction followed the Supreme Court's 2019 verdict."
   },
   {
    "q": "In the 2024 Lok Sabha elections, the BJP-led NDA secured a third consecutive term. Who became Prime Minister?",
    "options": [
     "Rajnath Singh",
     "Amit Shah",
     "Narendra Modi",
     "Nitin Gadkari"
    ],
    "answer": 2,
    "expl": "The NDA won the 18th Lok Sabha elections (June 2024) and Narendra Modi was sworn in for a third term as Prime Minister."
   },
   {
    "q": "The Maha Kumbh Mela of 2025 was held at:",
    "options": [
     "Prayagraj",
     "Ujjain",
     "Haridwar",
     "Nashik"
    ],
    "answer": 0,
    "expl": "The Purna Kumbh (January–February 2025) at Prayagraj's Triveni Sangam drew hundreds of millions of pilgrims."
   },
   {
    "q": "Operation Sindoor (May 2025) refers to:",
    "options": [
     "A naval exercise with the US",
     "Indian precision strikes on terror camps in Pakistan and PoK after the Pahalgam attack",
     "An evacuation operation from Sudan",
     "A census operation"
    ],
    "answer": 1,
    "expl": "After the 22 April 2025 Pahalgam terror attack, India launched Operation Sindoor (7 May 2025) striking terror infrastructure across the border; the Indus Waters Treaty was also held in abeyance."
   },
   {
    "q": "The Pahalgam terror attack of 22 April 2025 targeted:",
    "options": [
     "An army convoy in Punjab",
     "A railway station in Delhi",
     "Tourists in Jammu and Kashmir",
     "A market in Mumbai"
    ],
    "answer": 2,
    "expl": "Terrorists killed tourists at Baisaran meadow near Pahalgam (J&K) on 22 April 2025 — the deadliest civilian attack in Kashmir in years, triggering Operation Sindoor."
   },
   {
    "q": "The Waqf (Amendment) Act was passed in 2025. Which of the following statements is/are correct?\n1. It amends the Waqf Act, 1995.\n2. It was passed by Parliament in April 2025.\n3. It renames the Act to include 'UMEED' in its short title.",
    "options": [
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 3 only",
     "1 and 2 only"
    ],
    "answer": 0,
    "expl": "The Waqf (Amendment) Act, 2025 (UMEED — Unified Waqf Management, Empowerment, Efficiency and Development) amends the 1995 Act; passed in April 2025 amid opposition protests."
   },
   {
    "q": "The 'One Nation, One Election' proposal was examined by a committee headed by:",
    "options": [
     "N.K. Singh",
     "Amit Shah",
     "Ram Nath Kovind",
     "Ranjan Gogoi"
    ],
    "answer": 2,
    "expl": "The Kovind committee (report September 2024) recommended simultaneous Lok Sabha and Assembly polls; the Union Cabinet accepted it and bills were introduced."
   },
   {
    "q": "India's decision to conduct caste enumeration in the forthcoming Census was announced in:",
    "options": [
     "August 2026",
     "April 2025",
     "January 2024",
     "December 2023"
    ],
    "answer": 1,
    "expl": "In April 2025 the government announced caste enumeration in the next Census (the 2027 Census cycle) — the first since 1931."
   },
   {
    "q": "The India–UK Free Trade Agreement was concluded in:",
    "options": [
     "May 2025",
     "March 2023",
     "January 2024",
     "December 2026"
    ],
    "answer": 0,
    "expl": "India and the UK announced conclusion of FTA negotiations on 6 May 2025 — India's biggest trade deal, cutting tariffs on goods and easing services mobility."
   },
   {
    "q": "Shubhanshu Shukla, who travelled to the International Space Station in June 2025, is:",
    "options": [
     "A NASA administrator",
     "The first Indian to visit the ISS (Axiom Mission 4)",
     "An ISRO chairman",
     "The first Indian in space"
    ],
    "answer": 1,
    "expl": "IAF Group Captain Shubhanshu Shukla flew on Axiom-4 (June 2025) — the first Indian aboard the ISS and the second Indian in space after Rakesh Sharma (1984)."
   },
   {
    "q": "The NISAR satellite, launched in July 2025, is a joint mission of:",
    "options": [
     "ISRO and ESA",
     "ISRO and Roscosmos",
     "ISRO and NASA",
     "ISRO and JAXA"
    ],
    "answer": 2,
    "expl": "NISAR (NASA-ISRO Synthetic Aperture Radar, launched 30 July 2025 from Sriharikota) — the first dual-frequency (L- and S-band) radar imaging satellite."
   },
   {
    "q": "The Chenab Rail Bridge, inaugurated in June 2025, is notable as:",
    "options": [
     "India's first bullet-train bridge",
     "Asia's longest tunnel",
     "India's longest sea bridge",
     "The world's highest railway arch bridge"
    ],
    "answer": 3,
    "expl": "The Chenab bridge (359 m above the riverbed, J&K) — taller than the Eiffel Tower — completed the Udhampur-Srinagar-Baramulla rail link."
   },
   {
    "q": "Pope Francis died in April 2025 and was succeeded by:",
    "options": [
     "Pope Benedict XVII",
     "Pope John Paul III",
     "Pope Leo XIV (first American pope)",
     "Pope Francis II"
    ],
    "answer": 2,
    "expl": "Pope Francis died 21 April 2025; Cardinal Robert Prevost was elected Pope Leo XIV in May 2025 — the first American pontiff."
   },
   {
    "q": "The 47th President of the United States, inaugurated in January 2025, is:",
    "options": [
     "Ron DeSantis",
     "Kamala Harris",
     "Donald Trump",
     "Joe Biden"
    ],
    "answer": 2,
    "expl": "Donald Trump won the November 2024 election and was inaugurated on 20 January 2025 for a second non-consecutive term."
   },
   {
    "q": "In 2025, the United States imposed steep tariffs on Indian goods, citing:",
    "options": [
     "India's purchase of Russian oil",
     "India's IT exports",
     "Pharmaceutical pricing",
     "Steel dumping alone"
    ],
    "answer": 0,
    "expl": "The Trump administration imposed 25% reciprocal tariffs plus an additional 25% penalty over Russian oil imports (August 2025) — a major India-US trade friction."
   },
   {
    "q": "Sheikh Hasina resigned as Bangladesh's Prime Minister in August 2024 amid protests, and the interim government is headed by:",
    "options": [
     "Khaleda Zia",
     "Muhammad Yunus",
     "Abdul Hamid",
     "Tarique Rahman"
    ],
    "answer": 1,
    "expl": "After the July–August 2024 uprising, Hasina fled to India; Nobel laureate Muhammad Yunus heads the interim government."
   },
   {
    "q": "The Assad regime in Syria fell in December 2024. Bashar al-Assad was replaced after an offensive led by:",
    "options": [
     "Hayat Tahrir al-Sham (HTS)",
     "The Kurdish YPG",
     "Turkish armed forces directly",
     "ISIS"
    ],
    "answer": 0,
    "expl": "HTS-led rebels captured Damascus in December 2024, ending 54 years of Assad family rule; Ahmed al-Sharaa became transitional president."
   },
   {
    "q": "The G20 Summit of 2024 was hosted by:",
    "options": [
     "India",
     "Brazil (Rio de Janeiro)",
     "Indonesia",
     "South Africa"
    ],
    "answer": 1,
    "expl": "Brazil hosted the 2024 G20 at Rio (India had hosted 2023 at New Delhi, admitting the African Union); South Africa hosted 2025."
   },
   {
    "q": "India's presidency of the G20 in 2023 is remembered for:",
    "options": [
     "Founding BRICS",
     "Launching the International Solar Alliance",
     "The Paris Agreement",
     "The New Delhi Leaders' Declaration and African Union's inclusion as a permanent member"
    ],
    "answer": 3,
    "expl": "New Delhi Summit (Sept 2023): consensus declaration and the AU's admission — a landmark of India's G20 presidency."
   },
   {
    "q": "The 'Delhi Assembly elections' of February 2025 were won by the:",
    "options": [
     "Janata Dal (United)",
     "BJP",
     "Congress",
     "AAP"
    ],
    "answer": 1,
    "expl": "The BJP won the Delhi Assembly polls (February 2025), ending AAP's decade-long rule; Rekha Gupta became Chief Minister."
   },
   {
    "q": "The Bihar Assembly elections of November 2025 were won by the:",
    "options": [
     "NDA (BJP–JD(U) alliance)",
     "Congress",
     "Janasuraaj Party",
     "RJD-led Mahagathbandhan"
    ],
    "answer": 0,
    "expl": "The NDA swept the November 2025 Bihar polls (results 14 November 2025) with a decisive majority; Nitish Kumar returned as Chief Minister."
   },
   {
    "q": "The 'Z-Morh Tunnel' in Jammu and Kashmir, inaugurated in January 2025, provides:",
    "options": [
     "A tunnel under the Pir Panjal for the Chenab railway",
     "Access to the Siachen glacier",
     "All-weather connectivity to Sonamarg",
     "A rail link to Leh"
    ],
    "answer": 2,
    "expl": "The 6.5-km Z-Morh tunnel (Gagangir–Sonamarg) ensures year-round access to Sonamarg on the Srinagar-Leh axis."
   },
   {
    "q": "India's first vertical-lift sea bridge, the new Pamban Bridge, was inaugurated in 2025 connecting:",
    "options": [
     "Mumbai to Navi Mumbai",
     "Kochi to Lakshadweep",
     "Diu to Gujarat",
     "Rameswaram island to the mainland"
    ],
    "answer": 3,
    "expl": "The new Pamban rail bridge (April 2025) links Rameswaram island with Mandapam — India's first vertical-lift railway sea bridge."
   },
   {
    "q": "The 'Khelo India Youth Games 2025' were hosted by:",
    "options": [
     "Maharashtra",
     "Bihar",
     "Tamil Nadu",
     "Haryana"
    ],
    "answer": 1,
    "expl": "Bihar hosted the 7th Khelo India Youth Games (May 2025) across Patna, Gaya, Nalanda and other cities."
   },
   {
    "q": "Who won the 2024 ICC Men's T20 World Cup?",
    "options": [
     "India",
     "England",
     "South Africa",
     "Australia"
    ],
    "answer": 0,
    "expl": "India beat South Africa in the Barbados final (June 2024) — unbeaten through the tournament; Rohit Sharma and Virat Kohli retired from T20Is after."
   },
   {
    "q": "Neeraj Chopra's gold medal at the Tokyo Olympics was in the year:",
    "options": [
     "2024",
     "2022",
     "2021 (Tokyo 2020 Games)",
     "2020"
    ],
    "answer": 2,
    "expl": "Neeraj won javelin gold at the Tokyo Games held in 2021; he took silver at Paris 2024 behind Pakistan's Arshad Nadeem."
   },
   {
    "q": "The 'National Sports Governance Bill' passed in 2025 establishes:",
    "options": [
     "A new IPL team",
     "Mandatory yoga in schools",
     "A sports lottery",
     "A National Sports Board and Tribunal for sports governance"
    ],
    "answer": 3,
    "expl": "The National Sports Governance Act, 2025 creates a National Sports Board, Tribunal and ethics mechanisms — India's first sports-governance statute; it also enabled India's 2036 Olympic bid framework."
   },
   {
    "q": "India submitted its bid to host the 2036 Olympic Games. The bid letter was sent to the IOC in:",
    "options": [
     "2026",
     "2020",
     "2022",
     "2024"
    ],
    "answer": 3,
    "expl": "India formally expressed interest in hosting the 2036 Olympics with a letter of intent to the IOC (October 2024); Ahmedabad is the proposed hub."
   },
   {
    "q": "The 'PM Vishwakarma' scheme (2023) supports:",
    "options": [
     "IT startups",
     "Urban housing",
     "Traditional artisans and craftspeople",
     "Farmers' loans"
    ],
    "answer": 2,
    "expl": "PM Vishwakarma (Sept 2023): collateral-free loans, skilling and toolkit support for 18 traditional trades (carpenters, blacksmiths, potters etc.)."
   },
   {
    "q": "The 'PM Surya Ghar Muft Bijli Yojana' (2024) aims to:",
    "options": [
     "Provide free LPG cylinders",
     "Install rooftop solar in one crore households",
     "Subsidise electric vehicles",
     "Electrify all villages"
    ],
    "answer": 1,
    "expl": "PM Surya Ghar (Feb 2024): 300 units free electricity via rooftop solar for 1 crore households with CFA subsidy."
   },
   {
    "q": "The 'Digital Personal Data Protection Act' received presidential assent in:",
    "options": [
     "2021",
     "2023",
     "2025",
     "2024"
    ],
    "answer": 1,
    "expl": "The DPDP Act, 2023 (assent August 2023) — India's first data-protection law; draft rules were released for consultation in January 2025."
   },
   {
    "q": "The three new criminal laws replacing the IPC, CrPC and Evidence Act came into force on:",
    "options": [
     "1 July 2024",
     "1 January 2024",
     "26 January 2025",
     "15 August 2024"
    ],
    "answer": 0,
    "expl": "The Bharatiya Nyaya Sanhita, Nagarik Suraksha Sanhita and Sakshya Adhiniyam took effect 1 July 2024."
   },
   {
    "q": "The 'Women's Reservation Act' (Nari Shakti Vandan Adhiniyam, 2023) provides:",
    "options": [
     "33% in Rajya Sabha only",
     "33% reservation for women in Lok Sabha and state assemblies",
     "50% reservation in panchayats",
     "Reservation in government jobs"
    ],
    "answer": 1,
    "expl": "The 106th Amendment (Sept 2023): one-third seats for women in Lok Sabha/assemblies — effective after the next delimitation following the Census."
   },
   {
    "q": "India's Chandrayaan-4 mission, approved in 2024, aims to:",
    "options": [
     "Land an Indian astronaut on the Moon",
     "Build a lunar base",
     "Return lunar samples to Earth",
     "Orbit Mars"
    ],
    "answer": 2,
    "expl": "Chandrayaan-4 (approved Sept 2024): lunar sample-return mission — a stepping stone to the planned 2040 crewed Moon landing."
   },
   {
    "q": "The 'Venus Orbiter Mission' (Shukrayaan) approved by India targets launch around:",
    "options": [
     "2026",
     "2025",
     "2030",
     "2028"
    ],
    "answer": 3,
    "expl": "The Cabinet approved Shukrayaan (Venus Orbiter Mission) in September 2024 for a 2028 launch window to study Venus's atmosphere and surface."
   },
   {
    "q": "The 'Gaganyaan G1' uncrewed mission is significant as:",
    "options": [
     "A Mars sample return",
     "The precursor test flight for India's human spaceflight programme",
     "A mission to the Sun",
     "A space-station module"
    ],
    "answer": 1,
    "expl": "G1 (with the Vyommitra humanoid robot) is the uncrewed validation flight before Gaganyaan's crewed mission — part of ISRO's human-spaceflight sequence."
   },
   {
    "q": "The 'SpaDeX' mission (December 2024) demonstrated:",
    "options": [
     "A solar observatory",
     "An anti-satellite test",
     "Space docking of two Indian satellites",
     "A lunar landing"
    ],
    "answer": 2,
    "expl": "SpaDeX (30 Dec 2024): ISRO docked two satellites (SDX01/SDX02) — making India the fourth country to master space docking, key for the space station."
   },
   {
    "q": "India's first 'Vande Bharat sleeper' train was launched in 2025. It runs on which route? (Approximate — verify before exam use)",
    "options": [
     "Chennai–Bengaluru",
     "Delhi–Mumbai",
     "Patna–Delhi",
     "Howrah–Guwahati"
    ],
    "answer": 3,
    "expl": "The first Vande Bharat sleeper rake was flagged off in 2025; route allocations have been announced in phases — treat the specific route as approximate and verify from current notifications."
   },
   {
    "q": "The 'Atal Innovation Mission' 2.0 (2024) focuses on:",
    "options": [
     "Strengthening India's innovation ecosystem via AICs and tinkering labs",
     "Defence exports",
     "Building highways",
     "Rural electrification"
    ],
    "answer": 0,
    "expl": "AIM 2.0 (approved 2024, ₹2,750 crore till 2028): Atal Tinkering Labs, Incubation Centres and innovation challenges under NITI Aayog."
   },
   {
    "q": "The 'National Mission on Edible Oils – Oilseeds' (2024) aims to:",
    "options": [
     "Subsidise petrol",
     "Ban palm oil imports",
     "Achieve self-sufficiency in edible oils",
     "Promote oil exports"
    ],
    "answer": 2,
    "expl": "NMEO-Oilseeds (Oct 2024, ₹10,103 crore): raise oilseed production to cut India's ~55-60% import dependence on edible oils."
   },
   {
    "q": "The 'PM Dhan-Dhaanya Krishi Yojana' announced in Budget 2025-26 targets:",
    "options": [
     "All metro cities",
     "Coastal fisheries only",
     "Tea gardens",
     "100 low-productivity agricultural districts"
    ],
    "answer": 3,
    "expl": "PM Dhan-Dhaanya Krishi Yojana (Budget 2025-26): convergence scheme for 100 districts with low productivity and credit parameters."
   },
   {
    "q": "India's GDP growth rate for 2024-25 (as per NSO) was approximately:",
    "options": [
     "7.8%",
     "8.2%",
     "6.5%",
     "5.0%"
    ],
    "answer": 2,
    "expl": "NSO estimated 2024-25 GDP growth at ~6.5% — India remained the fastest-growing major economy; treat the precise figure as per the latest NSO release."
   },
   {
    "q": "The 'RBI's 90th anniversary' was commemorated in 2025. The RBI was established in:",
    "options": [
     "1921",
     "1947",
     "1949",
     "1935"
    ],
    "answer": 3,
    "expl": "The Reserve Bank (RBI Act, 1934) began operations on 1 April 1935; it was nationalised in 1949."
   }
  ]
 },
 {
  "id": "upsc-bank-economy",
  "title": "Economy — Prelims Question Bank (58 MCQs)",
  "subject": "Economy",
  "tag": "Prelims GS I · Practice bank",
  "blurb": "Growth, fiscal and monetary policy, Budget, banking and agriculture — backed by Economic Survey logic.",
  "intro": "A 58-question practice bank on economy, written for UPSC Prelims 2026–27. Every question carries a full explanation; solve in timed sets, log your errors, and revise the explanations — not just the answers.",
  "sections": [
   {
    "h": "How to use this bank",
    "body": "<p>Attempt questions in sets of 25 under timed conditions, then read every explanation — including for questions you got right. A few explanations flag figures or fast-moving developments as approximate or as-reported; always cross-check those against official sources (Budget documents, PIB, ministry sites) before treating them as final.</p>"
   }
  ],
  "questions": [
   {
    "q": "Consider the following statements about the measurement of national income in India:\n1. The Central Statistics Office (now NSO) compiles national accounts.\n2. The base year for GDP series was revised to 2011-12.\n3. GDP is measured at both constant and current prices.\nSelect the correct answer.",
    "options": [
     "1 and 3 only",
     "1 and 2 only",
     "2 and 3 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "NSO (under MoSPI) compiles national accounts; the 2011-12 base revision (2015) changed methodology; GDP is released at constant and current prices."
   },
   {
    "q": "The difference between GDP and GNP is:",
    "options": [
     "Net exports",
     "Indirect taxes",
     "Depreciation",
     "Net factor income from abroad"
    ],
    "answer": 3,
    "expl": "GNP = GDP + net factor income from abroad (income of residents from overseas minus foreigners' income domestically)."
   },
   {
    "q": "Which of the following statements about inflation measurement in India is/are correct?\n1. CPI (Combined) is the RBI's nominal anchor for inflation targeting.\n2. WPI measures wholesale prices and includes services.\n3. The inflation target is 4% CPI with a ±2% band.",
    "options": [
     "1 and 2 only",
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 3 only"
    ],
    "answer": 3,
    "expl": "Since 2016 the RBI targets CPI (Combined) at 4% ±2%; WPI covers only goods (no services) with base 2011-12."
   },
   {
    "q": "Consider the following statements about the Monetary Policy Committee:\n1. It has six members — three from RBI and three external.\n2. The RBI Governor has a casting vote.\n3. It decides the policy repo rate.\nSelect the correct answer.",
    "options": [
     "1 and 2 only",
     "1 and 3 only",
     "2 and 3 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "MPC (2016, RBI Act amendment): 3 RBI officials + 3 government nominees; Governor's casting vote; it fixes the repo rate to hit the inflation target."
   },
   {
    "q": "An increase in the Cash Reserve Ratio by the RBI will:",
    "options": [
     "Reduce the repo rate",
     "Increase bank lending",
     "Reduce lendable resources of banks and tighten liquidity",
     "Increase money supply"
    ],
    "answer": 2,
    "expl": "Higher CRR locks more deposits with the RBI interest-free, shrinking lendable funds — a quantitative tightening tool."
   },
   {
    "q": "Match the following RBI instruments with their nature:\nA. Repo rate — 1. Rate at which RBI borrows from banks\nB. Reverse repo rate — 2. Rate at which RBI lends to banks\nC. Bank rate — 3. Long-term rate for RBI lending without collateral\nD. Marginal Standing Facility — 4. Overnight emergency borrowing window for banks",
    "options": [
     "A-2, B-3, C-1, D-4",
     "A-1, B-2, C-4, D-3",
     "A-4, B-1, C-3, D-2",
     "A-2, B-1, C-3, D-4"
    ],
    "answer": 3,
    "expl": "Repo (RBI lends), reverse repo (RBI borrows), bank rate (long-term, no collateral), MSF (overnight emergency against SLR securities)."
   },
   {
    "q": "Open Market Operations of the RBI refer to:",
    "options": [
     "Intervention in the forex market only",
     "Buying and selling of government securities to adjust liquidity",
     "Regulation of NBFCs",
     "Lending to the government"
    ],
    "answer": 1,
    "expl": "OMOs — RBI's purchase/sale of G-secs — inject or absorb durable liquidity; forex intervention is separate."
   },
   {
    "q": "Which of the following statements about the Fiscal Responsibility and Budget Management Act is/are correct?\n1. It was enacted in 2003.\n2. It originally targeted eliminating the revenue deficit.\n3. The N.K. Singh Committee reviewed it in 2017.",
    "options": [
     "1 and 2 only",
     "1 and 3 only",
     "1, 2 and 3",
     "2 and 3 only"
    ],
    "answer": 2,
    "expl": "FRBM (2003): fiscal deficit 3% of GDP, revenue deficit elimination targets; the N.K. Singh panel (2017) suggested a debt-anchor framework (60% combined debt)."
   },
   {
    "q": "The difference between the fiscal deficit and interest payments is called the:",
    "options": [
     "Effective revenue deficit",
     "Revenue deficit",
     "Primary deficit",
     "Budget deficit"
    ],
    "answer": 2,
    "expl": "Primary deficit = fiscal deficit − interest payments; it shows the current year's borrowing excluding past-debt servicing."
   },
   {
    "q": "Consider the following statements about the Union Budget:\n1. It is presented under Article 112 as the Annual Financial Statement.\n2. The Railway Budget was merged with it from 2017-18.\n3. The budget is presented on 1 February since 2017.\nSelect the correct answer.",
    "options": [
     "1 and 3 only",
     "2 and 3 only",
     "1, 2 and 3",
     "1 and 2 only"
    ],
    "answer": 2,
    "expl": "Article 112's Annual Financial Statement; Bibek Debroy panel led to the 2017 railway-budget merger; presentation moved from 28 Feb to 1 Feb (2017)."
   },
   {
    "q": "Which of the following taxes is NOT subsumed under GST?",
    "options": [
     "Service tax",
     "Central Excise on petroleum products",
     "Countervailing duty on all imports",
     "Octroi"
    ],
    "answer": 1,
    "expl": "GST subsumed excise (except on petroleum/tobacco), service tax, VAT, octroi/entry tax; excise on petroleum remains outside GST (as do basic customs duties)."
   },
   {
    "q": "The 'Laffer Curve' illustrates the relationship between:",
    "options": [
     "Money supply and interest rates",
     "Exports and GDP",
     "Tax rates and tax revenue",
     "Inflation and unemployment"
    ],
    "answer": 2,
    "expl": "The Laffer curve posits revenue rises with tax rates up to a point, then falls as higher rates discourage activity."
   },
   {
    "q": "Consider the following statements about the NABARD:\n1. It was established in 1982.\n2. It refinances rural credit institutions.\n3. It regulates cooperative banks and RRBs.\nSelect the correct answer.",
    "options": [
     "2 and 3 only",
     "1, 2 and 3",
     "1 and 3 only",
     "1 and 2 only"
    ],
    "answer": 1,
    "expl": "NABARD (1982, Shivraman Committee): apex refinance for agriculture/rural credit; supervises RRBs and cooperative banks (excluding primary cooperatives' regulation nuances)."
   },
   {
    "q": "The 'Priority Sector Lending' target for domestic scheduled commercial banks is:",
    "options": [
     "40% of Adjusted Net Bank Credit",
     "18% of Adjusted Net Bank Credit",
     "10% of Adjusted Net Bank Credit",
     "25% of Adjusted Net Bank Credit"
    ],
    "answer": 0,
    "expl": "Domestic banks must lend 40% of ANBC to priority sectors (agriculture 18%, micro-enterprises 7.5%, weaker sections 12% sub-targets)."
   },
   {
    "q": "Which of the following statements about Small Finance Banks is/are correct?\n1. They primarily serve unserved and underserved sections.\n2. The minimum paid-up capital requirement was ₹200 crore.\n3. They can accept deposits like commercial banks.\nSelect the correct answer.",
    "options": [
     "2 and 3 only",
     "1 and 2 only",
     "1 and 3 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "SFBs (licensed from 2015, e.g., AU, Equitas): financial inclusion focus, ₹200 crore minimum capital (later raised norms), full deposit-taking banks."
   },
   {
    "q": "The 'Payments Banks' in India:\n1. Can accept demand deposits up to ₹2 lakh per customer\n2. Cannot issue loans or credit cards\n3. Were recommended by the Nachiket Mor Committee",
    "options": [
     "1, 2 and 3",
     "1 and 2 only",
     "2 and 3 only",
     "1 and 3 only"
    ],
    "answer": 0,
    "expl": "Payments banks (Nachiket Mor panel): deposits capped (raised to ₹2 lakh in 2021), no lending, must invest 75% in G-secs — e.g., Airtel, Paytm, India Post Payments Bank."
   },
   {
    "q": "Consider the following statements about the Insolvency and Bankruptcy Code, 2016:\n1. It provides a time-bound resolution process (330 days including litigation).\n2. The Committee of Creditors decides the resolution plan.\n3. It applies to companies, LLPs and individuals.\nSelect the correct answer.",
    "options": [
     "1 and 2 only",
     "2 and 3 only",
     "1 and 3 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "IBC (2016): 330-day outer limit, CoC (financial creditors) approves plans with 66% vote, NCLT adjudicates; covers companies, LLPs, partnership firms and individuals."
   },
   {
    "q": "The 'SARFAESI Act, 2002' enables banks to:",
    "options": [
     "Write off all NPAs",
     "Issue new currency",
     "Enforce security interest without court intervention",
     "Merge with other banks"
    ],
    "answer": 2,
    "expl": "SARFAESI lets secured creditors (banks/FIs) seize and sell collateral of defaulters above ₹1 lakh dues without court process (except farm land)."
   },
   {
    "q": "Which of the following is measured by the 'Human Development Index'?\n1. Life expectancy\n2. Education (mean and expected years of schooling)\n3. Per capita income (GNI)",
    "options": [
     "1 and 2 only",
     "1 and 3 only",
     "2 and 3 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "UNDP's HDI (Mahbub ul Haq/Amartya Sen): health, education, income — geometric mean of the three dimension indices."
   },
   {
    "q": "The 'Multidimensional Poverty Index' was developed by:",
    "options": [
     "OPHI and UNDP",
     "NITI Aayog alone",
     "World Bank alone",
     "IMF"
    ],
    "answer": 0,
    "expl": "The MPI (2010, Oxford Poverty & Human Development Initiative + UNDP) measures deprivations in health, education and living standards; NITI Aayog releases India's national MPI."
   },
   {
    "q": "Consider the following statements about the Mahatma Gandhi National Rural Employment Guarantee Act:\n1. It guarantees 100 days of wage employment per rural household per year.\n2. Unemployment allowance is payable if work is not provided within 15 days.\n3. At least one-third of beneficiaries must be women.\nSelect the correct answer.",
    "options": [
     "1 and 3 only",
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 2 only"
    ],
    "answer": 1,
    "expl": "MGNREGA (2005): 100 days/household, 15-day work guarantee with unemployment allowance, one-third women's participation — the world's largest workfare programme."
   },
   {
    "q": "The 'National Food Security Act, 2013' covers approximately what share of the population?",
    "options": [
     "Only BPL families",
     "All citizens",
     "Two-thirds (75% rural, 50% urban)",
     "One-third"
    ],
    "answer": 2,
    "expl": "NFSA covers up to 75% of rural and 50% of urban population (~81 crore) with 5 kg/person/month at ₹3/2/1 per kg (now free under PMGKAY extension)."
   },
   {
    "q": "Which of the following statements about the 'Pradhan Mantri Jan Dhan Yojana' is/are correct?\n1. It aims at universal banking access with zero-balance accounts.\n2. It provides RuPay debit cards with in-built accident insurance.\n3. It is a pillar of the JAM trinity.",
    "options": [
     "1 and 3 only",
     "1 and 2 only",
     "1, 2 and 3",
     "2 and 3 only"
    ],
    "answer": 2,
    "expl": "PMJDY (2014): zero-balance accounts, RuPay cards with ₹2 lakh accident cover, overdraft facility — the 'J' in JAM (Jan Dhan–Aadhaar–Mobile)."
   },
   {
    "q": "The 'Goods and Services Tax' is best described as:",
    "options": [
     "A tax levied only by states",
     "A destination-based indirect tax on consumption",
     "An origin-based direct tax",
     "A tax only on services"
    ],
    "answer": 1,
    "expl": "GST (101st Amendment, 2017) is a destination-based, dual (CGST+SGST/IGST) indirect tax subsuming most indirect taxes."
   },
   {
    "q": "Consider the following statements about the 'Make in India' initiative:\n1. It was launched in 2014.\n2. It aims to raise manufacturing's share of GDP to 25%.\n3. It covers 25 sectors of the economy.\nSelect the correct answer.",
    "options": [
     "2 and 3 only",
     "1 and 2 only",
     "1, 2 and 3",
     "1 and 3 only"
    ],
    "answer": 2,
    "expl": "Make in India (Sept 2014): manufacturing hub goal (25% of GDP), 25 focus sectors, with FDI liberalisation and ease-of-doing-business reforms."
   },
   {
    "q": "The 'Startup India' initiative was launched in the year:",
    "options": [
     "2014",
     "2020",
     "2018",
     "2016"
    ],
    "answer": 3,
    "expl": "Startup India (January 2016): tax holidays, self-certification, Fund of Funds — DPIIT recognises startups."
   },
   {
    "q": "Which of the following statements about 'Special Economic Zones' is/are correct?\n1. They are deemed foreign territory for trade purposes.\n2. The SEZ Act was passed in 2005.\n3. Units enjoy tax holidays and single-window clearance.",
    "options": [
     "1 and 3 only",
     "1, 2 and 3",
     "1 and 2 only",
     "2 and 3 only"
    ],
    "answer": 1,
    "expl": "SEZs (Act 2005): duty-free enclaves deemed outside the customs territory, with income-tax benefits and single-window clearance."
   },
   {
    "q": "The 'Foreign Exchange Management Act' replaced FERA in the year:",
    "options": [
     "2005",
     "1991",
     "1999",
     "2000"
    ],
    "answer": 2,
    "expl": "FEMA (1999, effective 2000) replaced the draconian FERA (1973) — shifting from 'control' to 'management' of forex; violations became civil offences."
   },
   {
    "q": "Consider the following statements about India's forex reserves:\n1. They are managed by the RBI.\n2. They include foreign currency assets, gold, SDRs and the IMF reserve position.\n3. They provide import cover and external stability.\nSelect the correct answer.",
    "options": [
     "1, 2 and 3",
     "1 and 3 only",
     "2 and 3 only",
     "1 and 2 only"
    ],
    "answer": 0,
    "expl": "RBI manages reserves comprising FCA, gold, SDRs and RTP; they cushion the rupee and cover imports/debt."
   },
   {
    "q": "A 'current account deficit' in the balance of payments means:",
    "options": [
     "The rupee is overvalued",
     "Imports of goods and services exceed exports plus net transfers",
     "Forex reserves are falling",
     "Fiscal deficit is high"
    ],
    "answer": 1,
    "expl": "CAD = trade deficit in goods/services adjusted for primary/secondary income; financed by capital inflows or reserve drawdown."
   },
   {
    "q": "Which of the following statements about 'FDI' and 'FPI' is/are correct?\n1. FDI involves lasting interest (10%+ voting power). \n2. FPI is more volatile ('hot money').\n3. Both are part of the capital account.",
    "options": [
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 3 only",
     "1 and 2 only"
    ],
    "answer": 0,
    "expl": "FDI (≥10% stake, lasting control) vs FPI (portfolio, volatile); both sit in the capital account of the BoP."
   },
   {
    "q": "The 'Masala Bonds' are:",
    "options": [
     "Dollar bonds issued by Indian firms abroad",
     "Municipal bonds",
     "Rupee-denominated bonds issued overseas",
     "Government bonds for retail investors"
    ],
    "answer": 2,
    "expl": "Masala bonds (2015, IFC's pioneering issue): rupee-denominated offshore bonds — the currency risk sits with the foreign investor."
   },
   {
    "q": "Consider the following statements about the 'NITI Aayog':\n1. It replaced the Planning Commission in 2015.\n2. It follows a bottom-up approach with cooperative federalism.\n3. It allocates central plan assistance to states.\nSelect the correct answer.",
    "options": [
     "1 and 2 only",
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 3 only"
    ],
    "answer": 0,
    "expl": "NITI Aayog (1 Jan 2015) replaced the Planning Commission as a think-tank for cooperative/competitive federalism; it does not allocate plan funds (Finance Commission does transfers)."
   },
   {
    "q": "The 'Fifteenth Finance Commission' (2020–26) was chaired by:",
    "options": [
     "Vijay Kelkar",
     "N.K. Singh",
     "Y.V. Reddy",
     "C. Rangarajan"
    ],
    "answer": 1,
    "expl": "N.K. Singh chaired the 15th FC: 41% vertical devolution to states (after J&K reorganisation), with criteria including income distance and demographic performance."
   },
   {
    "q": "Which of the following is the largest component of the Union Government's tax revenue?",
    "options": [
     "Excise duty",
     "GST",
     "Corporation tax and income tax (direct taxes)",
     "Customs duty"
    ],
    "answer": 2,
    "expl": "Direct taxes (corporation + personal income tax) together exceed GST collections as the largest revenue source in recent budgets — approximate, varies by year."
   },
   {
    "q": "The 'Disinvestment' of public sector enterprises in India began in earnest with:",
    "options": [
     "The 2014 Make in India",
     "The 1977 Janata policy",
     "The 1991 New Industrial Policy",
     "The 1956 Industrial Policy Resolution"
    ],
    "answer": 2,
    "expl": "1991 liberalisation began PSU disinvestment (Rangarajan Committee); strategic disinvestment/privatisation accelerated later (e.g., Air India 2022)."
   },
   {
    "q": "Consider the following statements about the 'New Industrial Policy, 1991':\n1. It abolished industrial licensing for most industries.\n2. It opened most sectors to private and foreign investment.\n3. It retained licensing only for a short list of strategic industries.\nSelect the correct answer.",
    "options": [
     "2 and 3 only",
     "1 and 2 only",
     "1, 2 and 3",
     "1 and 3 only"
    ],
    "answer": 2,
    "expl": "The 1991 policy delicensed industry (except ~18, later 6 compulsory-licence sectors), raised FDI caps, and ended most public-sector monopolies."
   },
   {
    "q": "The 'LPG' reforms of 1991 stand for:",
    "options": [
     "Labour, Production, Growth",
     "Liquidity, Profit, Gain",
     "Land, Power, Gas",
     "Liberalisation, Privatisation, Globalisation"
    ],
    "answer": 3,
    "expl": "LPG = Liberalisation, Privatisation, Globalisation — the Manmohan Singh–Narasimha Rao 1991 reform package."
   },
   {
    "q": "Which of the following statements about 'Demonetisation' (2016) is/are correct?\n1. ₹500 and ₹1,000 notes ceased to be legal tender on 8 November 2016.\n2. Its stated objectives included curbing black money and counterfeiting.\n3. The RBI Act was amended to enable it.",
    "options": [
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 2 only",
     "1 and 3 only"
    ],
    "answer": 2,
    "expl": "8 Nov 2016: ₹500/₹1000 demonetised under Section 26(2) of the RBI Act (no amendment needed); objectives included black money, terror funding and counterfeiting."
   },
   {
    "q": "The 'Insolvency and Bankruptcy Code' adjudicating authority for companies is the:",
    "options": [
     "SEBI",
     "High Court",
     "National Company Law Tribunal (NCLT)",
     "Debt Recovery Tribunal"
    ],
    "answer": 2,
    "expl": "NCLT adjudicates corporate insolvency; DRT handles individual/partnership cases; NCLAT is the appellate body."
   },
   {
    "q": "Consider the following statements about 'Non-Performing Assets':\n1. A loan becomes NPA if interest/instalment is overdue for 90 days.\n2. The '4R' strategy (Recognition, Resolution, Recapitalisation, Reforms) addressed them.\n3. Asset Reconstruction Companies buy bad loans from banks.\nSelect the correct answer.",
    "options": [
     "2 and 3 only",
     "1 and 3 only",
     "1, 2 and 3",
     "1 and 2 only"
    ],
    "answer": 2,
    "expl": "90-day NPA norm; the government's 4R approach; ARCs (under SARFAESI) acquire stressed assets — all correct."
   },
   {
    "q": "The 'Prompt Corrective Action' framework of the RBI applies to:",
    "options": [
     "Cooperative societies",
     "Weak banks breaching capital, asset quality or profitability thresholds",
     "NBFCs only",
     "Foreign banks only"
    ],
    "answer": 1,
    "expl": "PCA (revised 2017) restricts weak banks (CRAR, net NPA, RoA triggers) on lending, dividends and expansion until health is restored."
   },
   {
    "q": "Which of the following statements about 'Inflation targeting' in India is/are correct?\n1. The framework was formalised in 2016.\n2. Failure to meet the target requires the RBI to report to the government.\n3. The target is reviewed every five years.",
    "options": [
     "1 and 2 only",
     "2 and 3 only",
     "1, 2 and 3",
     "1 and 3 only"
    ],
    "answer": 2,
    "expl": "Flexible inflation targeting (RBI Act amendment, 2016): 4% ±2%; the RBI must explain misses to the government; the target is reviewed every five years."
   },
   {
    "q": "The 'base year' for the Consumer Price Index (Combined) in India is:",
    "options": [
     "2004-05",
     "2012",
     "2011",
     "2010"
    ],
    "answer": 1,
    "expl": "CPI (Combined, base 2012) covers rural, urban and combined inflation; CPI-IW (industrial workers) uses base 2016."
   },
   {
    "q": "Consider the following statements about the 'Wholesale Price Index':\n1. It is compiled by the Office of the Economic Adviser.\n2. Its base year is 2011-12.\n3. Food articles have the highest weight among primary articles.\nSelect the correct answer.",
    "options": [
     "1, 2 and 3",
     "1 and 2 only",
     "1 and 3 only",
     "2 and 3 only"
    ],
    "answer": 1,
    "expl": "WPI (Economic Adviser, DPIIT; base 2011-12): manufactured products ~64%, primary articles ~22.6%, fuel ~13.2%. Statement 3 is imprecise — manufactured products dominate overall."
   },
   {
    "q": "The 'Phillips Curve' shows the relationship between:",
    "options": [
     "Exports and imports",
     "Inflation and unemployment",
     "Income and consumption",
     "Savings and investment"
    ],
    "answer": 1,
    "expl": "The Phillips curve posits an inverse short-run relation between inflation and unemployment; stagflation challenged it in the 1970s."
   },
   {
    "q": "Which of the following is an example of a 'regressive tax'?",
    "options": [
     "Progressive income tax",
     "Wealth tax",
     "Capital gains tax",
     "A uniform GST rate on essential goods"
    ],
    "answer": 3,
    "expl": "A flat-rate tax on essentials takes a larger share of the poor's income — regressive; progressive income tax takes a larger share from the rich."
   },
   {
    "q": "The 'GST Compensation Cess' was levied to compensate states for revenue loss for a period of:",
    "options": [
     "Three years",
     "Five years (2017–2022)",
     "Permanently",
     "Ten years"
    ],
    "answer": 1,
    "expl": "The 101st Amendment guaranteed compensation for five years (till June 2022), funded by the cess on luxury/sin goods; the cess continued after 2022 to repay back-to-back loans."
   },
   {
    "q": "Consider the following statements about 'Digital India' initiatives:\n1. UPI was developed by the NPCI.\n2. India Stack includes Aadhaar, e-KYC and DigiLocker.\n3. The Jan Dhan–Aadhaar–Mobile trinity enables direct benefit transfer.\nSelect the correct answer.",
    "options": [
     "2 and 3 only",
     "1 and 3 only",
     "1 and 2 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "UPI (NPCI, 2016), India Stack layers, and JAM-driven DBT are the pillars of India's digital public infrastructure."
   },
   {
    "q": "The 'Open Network for Digital Commerce' (ONDC) aims to:",
    "options": [
     "Regulate cryptocurrency",
     "Nationalise online retail",
     "Provide free internet",
     "Democratise e-commerce with interoperable open protocols"
    ],
    "answer": 3,
    "expl": "ONDC (DPIIT, 2021) is an open e-commerce network unbundling buyer/seller apps from the transaction layer — UPI-like interoperability for commerce."
   },
   {
    "q": "Which of the following statements about 'Aatmanirbhar Bharat' is/are correct?\n1. It was announced in 2020 with a ₹20 lakh crore package.\n2. It includes Production Linked Incentive schemes.\n3. It focuses on five pillars: economy, infrastructure, technology, demography, demand.",
    "options": [
     "1 and 2 only",
     "1 and 3 only",
     "2 and 3 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "Aatmanirbhar Bharat (May 2020, ~₹20 lakh crore ≈ 10% of GDP): PLI schemes across sectors; the five pillars (economy, infrastructure, system/technology, demography, demand) frame it."
   },
   {
    "q": "The 'Production Linked Incentive' scheme provides:",
    "options": [
     "Tax holidays for all startups",
     "Free land to industries",
     "Subsidies on raw materials",
     "Incentives to firms based on incremental sales of manufactured goods"
    ],
    "answer": 3,
    "expl": "PLI (2020) rewards incremental production/sales in 14 sectors (electronics, pharma, autos, textiles etc.) to boost domestic manufacturing."
   },
   {
    "q": "Consider the following statements about the 'MSME' sector:\n1. The revised definition (2020) uses investment and turnover criteria.\n2. Udyam registration is required for MSME benefits.\n3. MSMEs contribute about one-third of India's GDP.\nSelect the correct answer.",
    "options": [
     "2 and 3 only",
     "1 and 3 only",
     "1 and 2 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "2020 revision: micro (₹1 cr investment/₹5 cr turnover), small (₹10 cr/₹50 cr), medium (₹50 cr/₹250 cr); Udyam registration; ~30% of GDP and major employment."
   },
   {
    "q": "The 'MUDRA Yojana' provides loans under three categories — Shishu, Kishore and Tarun — with maximum limits of:",
    "options": [
     "₹50,000; ₹1 lakh; ₹5 lakh",
     "₹50,000; ₹5 lakh; ₹10 lakh",
     "₹1 lakh; ₹5 lakh; ₹10 lakh",
     "₹25,000; ₹2 lakh; ₹5 lakh"
    ],
    "answer": 1,
    "expl": "PMMY: Shishu (up to ₹50,000), Kishore (₹50,001–₹5 lakh), Tarun (₹5–10 lakh); Tarun Plus (up to ₹20 lakh) was added later."
   },
   {
    "q": "Which of the following statements about 'Direct Benefit Transfer' is/are correct?\n1. It transfers subsidies directly to beneficiaries' bank accounts.\n2. PAHAL (LPG subsidy) was the first major DBT scheme.\n3. It uses the Aadhaar Payment Bridge.\nSelect the correct answer.",
    "options": [
     "1 and 2 only",
     "1 and 3 only",
     "2 and 3 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "DBT (2013): direct transfers cutting leakages; PAHAL is the world's largest DBT scheme; APB routes Aadhaar-linked payments."
   },
   {
    "q": "The 'Pradhan Mantri Fasal Bima Yojana' provides crop insurance with farmer premium capped at:",
    "options": [
     "2% for kharif, 1.5% for rabi, 5% for commercial/horticultural crops",
     "Zero premium",
     "10% for all crops",
     "5% for all crops"
    ],
    "answer": 0,
    "expl": "PMFBY (2016): farmer pays max 2% (kharif), 1.5% (rabi), 5% (commercial/horticulture); the balance is shared by Centre and states."
   },
   {
    "q": "Consider the following statements about the 'e-NAM' platform:\n1. It is a pan-India electronic trading portal for agricultural commodities.\n2. It aims at 'One Nation, One Market'.\n3. It is implemented by the Small Farmers' Agribusiness Consortium.\nSelect the correct answer.",
    "options": [
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 3 only",
     "1 and 2 only"
    ],
    "answer": 0,
    "expl": "e-NAM (2016, SFAC): online mandi integration for transparent price discovery toward one national agriculture market."
   },
   {
    "q": "The 'Minimum Support Price' in India is recommended by the:",
    "options": [
     "Food Corporation of India",
     "Commission for Agricultural Costs and Prices (CACP)",
     "NITI Aayog",
     "Ministry of Finance"
    ],
    "answer": 1,
    "expl": "CACP recommends MSPs (currently for 22 mandated crops + sugarcane FRP); the Cabinet approves; FCI/Nafed undertake procurement."
   }
  ]
 },
 {
  "id": "upsc-bank-environment",
  "title": "Environment — Prelims Question Bank (60 MCQs)",
  "subject": "Environment",
  "tag": "Prelims GS I · Practice bank",
  "blurb": "Ecology, protected areas, conventions, climate and species in news — the fastest-growing Prelims block.",
  "intro": "A 60-question practice bank on environment, written for UPSC Prelims 2026–27. Every question carries a full explanation; solve in timed sets, log your errors, and revise the explanations — not just the answers.",
  "sections": [
   {
    "h": "How to use this bank",
    "body": "<p>Attempt questions in sets of 25 under timed conditions, then read every explanation — including for questions you got right. A few explanations flag figures or fast-moving developments as approximate or as-reported; always cross-check those against official sources (Budget documents, PIB, ministry sites) before treating them as final.</p>"
   }
  ],
  "questions": [
   {
    "q": "Consider the following statements about ecological succession:\n1. Primary succession occurs on lifeless areas like bare rock.\n2. Secondary succession occurs where a community was disturbed but soil remains.\n3. The climax community is stable and self-perpetuating.\nSelect the correct answer.",
    "options": [
     "2 and 3 only",
     "1 and 3 only",
     "1 and 2 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "Primary (bare rock/lava), secondary (post-disturbance with soil), climax (stable equilibrium) — the standard succession sequence."
   },
   {
    "q": "The '10% law' of energy transfer in food chains was proposed by:",
    "options": [
     "A.G. Tansley",
     "Raymond Lindeman",
     "Eugene Odum",
     "Charles Elton"
    ],
    "answer": 1,
    "expl": "Lindeman's trophic-dynamic (1942) 10% law: only ~10% of energy passes to each successive trophic level."
   },
   {
    "q": "Match the following ecological terms:\nA. Autotrophs — 1. Decomposers\nB. Heterotrophs — 2. Producers\nC. Saprotrophs — 3. Consumers",
    "options": [
     "A-3, B-1, C-2",
     "A-1, B-2, C-3",
     "A-2, B-1, C-3",
     "A-2, B-3, C-1"
    ],
    "answer": 3,
    "expl": "Autotrophs (producers, photosynthesis), heterotrophs (consumers), saprotrophs (decomposers like fungi/bacteria)."
   },
   {
    "q": "Which of the following statements about 'biodiversity hotspots' is/are correct?\n1. The concept was introduced by Norman Myers.\n2. India has four hotspots: Himalaya, Indo-Burma, Western Ghats-Sri Lanka, Sundaland.\n3. A hotspot must have at least 1,500 endemic plant species.",
    "options": [
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 2 only",
     "1 and 3 only"
    ],
    "answer": 0,
    "expl": "Myers (1988/2000): hotspots need ≥1,500 endemic vascular plants and ≥70% habitat loss; India hosts four (Nicobar falls in Sundaland)."
   },
   {
    "q": "The 'Red Data Book' is published by the:",
    "options": [
     "UNEP",
     "Convention on Biological Diversity",
     "IUCN",
     "WWF"
    ],
    "answer": 2,
    "expl": "IUCN's Red List of Threatened Species assesses extinction risk (categories: LC, NT, VU, EN, CR, EW, EX)."
   },
   {
    "q": "Consider the following statements about the categories of protected areas in India:\n1. National Parks ban all human activity except permitted tourism.\n2. Wildlife Sanctuaries allow limited human activity.\n3. Biosphere Reserves have core, buffer and transition zones.\nSelect the correct answer.",
    "options": [
     "2 and 3 only",
     "1 and 2 only",
     "1 and 3 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "National Parks (strictest, Wildlife Protection Act 1972), sanctuaries (regulated use), biosphere reserves (UNESCO MAB: core-buffer-transition) are all correctly described."
   },
   {
    "q": "The first national park established in India was:",
    "options": [
     "Kaziranga National Park",
     "Kanha National Park",
     "Gir National Park",
     "Jim Corbett National Park (1936, as Hailey National Park)"
    ],
    "answer": 3,
    "expl": "Hailey National Park (1936, United Provinces) — renamed Corbett; Kaziranga (1974), Kanha and Gir came later."
   },
   {
    "q": "Match the following national parks with their states:\nA. Kaziranga — 1. Madhya Pradesh\nB. Kanha — 2. Assam\nC. Gir — 3. Kerala\nD. Periyar — 4. Gujarat",
    "options": [
     "A-2, B-4, C-1, D-3",
     "A-2, B-1, C-4, D-3",
     "A-1, B-2, C-3, D-4",
     "A-4, B-1, C-2, D-3"
    ],
    "answer": 1,
    "expl": "Kaziranga (Assam, one-horned rhino), Kanha (MP, tiger/barasingha), Gir (Gujarat, Asiatic lion), Periyar (Kerala, elephant/tiger reserve)."
   },
   {
    "q": "Project Tiger was launched in the year:",
    "options": [
     "1973",
     "1972",
     "1975",
     "1980"
    ],
    "answer": 0,
    "expl": "Project Tiger (1973, from Jim Corbett NP) now covers 50+ tiger reserves; NTCA oversees it; the Wildlife Protection Act came in 1972."
   },
   {
    "q": "Consider the following statements about Project Elephant:\n1. It was launched in 1992.\n2. It focuses on elephant corridors and human-elephant conflict.\n3. Kerala has the highest number of elephants in India.\nSelect the correct answer.",
    "options": [
     "1 and 3 only",
     "1, 2 and 3",
     "1 and 2 only",
     "2 and 3 only"
    ],
    "answer": 2,
    "expl": "Project Elephant (1992) addresses corridors and conflict; recent elephant census data put Karnataka among the highest — Kerala is not definitively first, so statement 3 is uncertain."
   },
   {
    "q": "The 'Great Indian Bustard' is critically endangered and found mainly in:",
    "options": [
     "Kerala",
     "Rajasthan and Gujarat",
     "Assam",
     "West Bengal"
    ],
    "answer": 1,
    "expl": "The GIB (Rajasthan's state bird) survives in the Desert NP and Gujarat grasslands; power lines and habitat loss drive its decline."
   },
   {
    "q": "Which of the following statements about 'Ramsar Sites' is/are correct?\n1. They are wetlands of international importance under the 1971 Ramsar Convention.\n2. India has the largest network of Ramsar sites in Asia.\n3. Chilika Lake was India's first Ramsar site.",
    "options": [
     "1 and 2 only",
     "2 and 3 only",
     "1, 2 and 3",
     "1 and 3 only"
    ],
    "answer": 0,
    "expl": "Ramsar (Iran, 1971) wetlands; India has Asia's largest tally (75+ sites and growing); Chilika and Keoladeo were India's first two (1981)."
   },
   {
    "q": "The 'Montreux Record' under the Ramsar Convention lists:",
    "options": [
     "The cleanest wetlands",
     "Wetlands where ecological character has changed or is changing",
     "Sites with maximum tourism",
     "Newly designated sites"
    ],
    "answer": 1,
    "expl": "The Montreux Record flags Ramsar sites needing priority conservation (Loktak and Keoladeo were once listed; both later removed)."
   },
   {
    "q": "Consider the following statements about mangroves:\n1. They grow in intertidal zones of tropical coasts.\n2. They have pneumatophores (breathing roots).\n3. The Sundarbans is the largest mangrove forest in the world.\nSelect the correct answer.",
    "options": [
     "2 and 3 only",
     "1 and 2 only",
     "1 and 3 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "Mangroves: salt-tolerant intertidal forests with pneumatophores, vivipary; Sundarbans is the largest contiguous tract."
   },
   {
    "q": "Which of the following is a correct match of endangered species and their habitat?\n1. Snow leopard — Himalayas\n2. Lion-tailed macaque — Western Ghats\n3. Hangul — Dachigam (Kashmir)",
    "options": [
     "1, 2 and 3",
     "1 and 3 only",
     "2 and 3 only",
     "1 and 2 only"
    ],
    "answer": 0,
    "expl": "Snow leopard (high Himalaya), lion-tailed macaque (Western Ghats evergreen), hangul/Kashmir stag (Dachigam) — all correct."
   },
   {
    "q": "The 'Wildlife Protection Act, 1972' provides for schedules. Which schedule lists species with the highest protection?",
    "options": [
     "Schedule V",
     "Schedule II",
     "Schedule VI",
     "Schedule I"
    ],
    "answer": 3,
    "expl": "Schedule I (tiger, elephant, GIB etc.) carries the harshest penalties; the 2022 amendment rationalised schedules (I–IV)."
   },
   {
    "q": "Consider the following statements about the 'Forest Conservation Act, 1980':\n1. It requires central approval for diversion of forest land.\n2. It was amended in 2023.\n3. It applies to all deemed forests.\nSelect the correct answer.",
    "options": [
     "1 and 3 only",
     "2 and 3 only",
     "1 and 2 only",
     "1, 2 and 3"
    ],
    "answer": 2,
    "expl": "FCA 1980: Centre's prior approval for non-forest use; the 2023 amendment (Van (Sanrakshan Evam Samvardhan) Adhiniyam) narrowed its scope — deemed forests' coverage became contested, so statement 3 is debatable."
   },
   {
    "q": "The 'National Green Tribunal' was established in 2010 under:",
    "options": [
     "Article 21 of the Constitution",
     "The Wildlife Protection Act",
     "The Environment (Protection) Act, 1986",
     "The National Green Tribunal Act, 2010"
    ],
    "answer": 3,
    "expl": "NGT (2010 Act): specialised environmental adjudication applying sustainable development, precautionary and polluter-pays principles."
   },
   {
    "q": "Which of the following statements about the 'Environment (Protection) Act, 1986' is/are correct?\n1. It was enacted after the Bhopal gas tragedy.\n2. It empowers the Centre to take all measures to protect the environment.\n3. It provides for environmental impact assessment notifications.\nSelect the correct answer.",
    "options": [
     "1, 2 and 3",
     "1 and 2 only",
     "2 and 3 only",
     "1 and 3 only"
    ],
    "answer": 0,
    "expl": "EPA 1986 (post-Bhopal, 1984): umbrella legislation; Section 3 powers; EIA notifications (1994, 2006) issued under it."
   },
   {
    "q": "The 'EIA Notification, 2006' categorises projects into:",
    "options": [
     "Tier 1 and Tier 2",
     "Category A (central appraisal) and Category B (state appraisal)",
     "Red, Orange, Green categories",
     "Schedule I and II"
    ],
    "answer": 1,
    "expl": "EIA 2006: Category A (MoEFCC appraisal) and B (SEIAA); B1 needs EIA, B2 doesn't — distinct from pollution-control's red/orange/green."
   },
   {
    "q": "Consider the following statements about the 'Kyoto Protocol':\n1. It was adopted in 1997.\n2. It imposed binding emission targets on developed countries.\n3. India had binding targets under it.\nSelect the correct answer.",
    "options": [
     "1 and 3 only",
     "2 and 3 only",
     "1 and 2 only",
     "1, 2 and 3"
    ],
    "answer": 2,
    "expl": "Kyoto (1997, in force 2005): Annex-I binding cuts; developing countries like India had no binding targets (CBDR principle)."
   },
   {
    "q": "The 'Paris Agreement' aims to limit global warming to:",
    "options": [
     "Below 1°C",
     "Well below 2°C, pursuing 1.5°C",
     "Zero warming",
     "Below 3°C"
    ],
    "answer": 1,
    "expl": "Paris (2015): well below 2°C above pre-industrial, pursuing 1.5°C; NDCs are voluntary pledges with 5-year ratchets."
   },
   {
    "q": "India's updated NDC (2022) includes which of the following targets?\n1. 50% cumulative electric power from non-fossil sources by 2030\n2. Reduce emission intensity of GDP by 45% by 2030 (vs 2005)\n3. Net-zero by 2070",
    "options": [
     "2 and 3 only",
     "1 and 3 only",
     "1, 2 and 3",
     "1 and 2 only"
    ],
    "answer": 2,
    "expl": "India's NDC: 50% non-fossil capacity by 2030, 45% emission-intensity cut, and the Panchamrit net-zero-by-2070 pledge (COP26, Glasgow)."
   },
   {
    "q": "The 'Convention on Biological Diversity' was opened for signature at:",
    "options": [
     "The Rio Earth Summit, 1992",
     "The Stockholm Conference, 1972",
     "The Kyoto Conference, 1997",
     "The Johannesburg Summit, 2002"
    ],
    "answer": 0,
    "expl": "CBD (Rio 1992): conservation, sustainable use, fair benefit-sharing — implemented via the Nagoya Protocol (access and benefit sharing)."
   },
   {
    "q": "Consider the following statements about 'CITES':\n1. It regulates international trade in endangered species.\n2. Species are listed in three appendices.\n3. India is a party to it.\nSelect the correct answer.",
    "options": [
     "1 and 3 only",
     "1 and 2 only",
     "1, 2 and 3",
     "2 and 3 only"
    ],
    "answer": 2,
    "expl": "CITES (1973): Appendix I (no commercial trade), II (regulated), III (cooperation); India is a signatory."
   },
   {
    "q": "The 'Basel Convention' deals with:",
    "options": [
     "Transboundary movement of hazardous wastes",
     "Marine pollution by oil",
     "Nuclear waste only",
     "Ozone depletion"
    ],
    "answer": 0,
    "expl": "Basel (1989): control of hazardous waste shipments; the Ban Amendment prohibits OECD-to-non-OECD hazardous exports."
   },
   {
    "q": "Which of the following statements about 'e-waste' in India is/are correct?\n1. The E-Waste (Management) Rules were notified in 2016.\n2. Extended Producer Responsibility applies to manufacturers.\n3. India is among the largest e-waste generators.",
    "options": [
     "1 and 2 only",
     "2 and 3 only",
     "1 and 3 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "E-Waste Rules 2016 (amended 2022): EPR on producers, CPCB/SPCB enforcement; India ranks among the top e-waste generators globally."
   },
   {
    "q": "The 'Single-Use Plastic' ban in India (2022) covers:",
    "options": [
     "Only plastic bags above 120 microns",
     "Identified single-use plastic items like cutlery, straws and cigarette packets' wrapping",
     "Only PET bottles",
     "All plastic products"
    ],
    "answer": 1,
    "expl": "From 1 July 2022, 19 low-utility high-litter SUP items were banned; carry-bag thickness was raised to 120 microns (Dec 2022)."
   },
   {
    "q": "Consider the following statements about 'air pollution' control in India:\n1. The Air (Prevention and Control of Pollution) Act was enacted in 1981.\n2. The National Clean Air Programme targets 40% PM reduction by 2026 in 131 cities.\n3. GRAP is invoked in Delhi-NCR during severe pollution.\nSelect the correct answer.",
    "options": [
     "2 and 3 only",
     "1, 2 and 3",
     "1 and 3 only",
     "1 and 2 only"
    ],
    "answer": 1,
    "expl": "Air Act 1981; NCAP (2019, revised 40% target by 2025-26 vs 2017); GRAP (CAQM) stages curbs by AQI — all correct."
   },
   {
    "q": "The 'National Action Plan on Climate Change' (2008) includes how many missions?",
    "options": [
     "5",
     "10",
     "8",
     "6"
    ],
    "answer": 2,
    "expl": "NAPCC's 8 missions: Solar, Energy Efficiency, Water, Himalayan Ecosystem, Green India, Sustainable Agriculture, Sustainable Habitat, Strategic Knowledge."
   },
   {
    "q": "Which of the following statements about the 'National Solar Mission' is/are correct?\n1. It is part of the NAPCC.\n2. India targets 500 GW non-fossil capacity by 2030.\n3. The International Solar Alliance is headquartered in India.",
    "options": [
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 2 only",
     "1 and 3 only"
    ],
    "answer": 0,
    "expl": "NSM (2010, NAPCC mission); 500 GW non-fossil by 2030 (Panchamrit); ISA HQ at Gurugram — all correct."
   },
   {
    "q": "The 'Chipko Movement' (1973) was led by:",
    "options": [
     "M.C. Mehta",
     "Medha Patkar",
     "Anil Agarwal",
     "Sunderlal Bahuguna in Uttarakhand"
    ],
    "answer": 3,
    "expl": "Chipko (1973, Mandal village, Chamoli): tree-hugging against logging; Bahuguna and Chandi Prasad Bhatt were its faces."
   },
   {
    "q": "Consider the following statements about the 'Narmada Bachao Andolan':\n1. It opposed large dams on the Narmada.\n2. Medha Patkar was its prominent leader.\n3. The Supreme Court allowed the Sardar Sarovar dam with conditions.\nSelect the correct answer.",
    "options": [
     "1 and 2 only",
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 3 only"
    ],
    "answer": 1,
    "expl": "NBA (1985): anti-large-dam movement; Patkar's leadership; SC's 2000 judgment permitted Sardar Sarovar's completion with resettlement conditions."
   },
   {
    "q": "The 'Silent Valley' was saved from a hydroelectric project due to protests led by:",
    "options": [
     "The Appiko movement",
     "The Kerala Sastra Sahitya Parishad",
     "The Chipko movement",
     "The Narmada Bachao Andolan"
    ],
    "answer": 1,
    "expl": "KSSP's 'Save Silent Valley' campaign (1970s–80s) stopped the Kunthipuzha project; Silent Valley became a national park in 1984."
   },
   {
    "q": "Which of the following is a correct match of environmental movements?\n1. Appiko — Karnataka (tree-hugging)\n2. Tehri anti-dam — Uttarakhand\n3. Chilika anti-aqua culture — Odisha",
    "options": [
     "1 and 2 only",
     "2 and 3 only",
     "1, 2 and 3",
     "1 and 3 only"
    ],
    "answer": 2,
    "expl": "Appiko (1983, Uttara Kannada), Tehri dam opposition (Bahuguna), Chilika fisherfolk vs aquaculture — all correctly matched."
   },
   {
    "q": "The 'Bishnoi' community is known for:",
    "options": [
     "Ship-breaking",
     "Dam construction",
     "Mining",
     "Wildlife and tree conservation (Khejarli sacrifice, 1730)"
    ],
    "answer": 3,
    "expl": "Bishnois (Guru Jambheshwar's 29 principles): the 1730 Khejarli massacre (363 killed protecting khejri trees) under Amrita Devi — precursor of Chipko."
   },
   {
    "q": "Consider the following statements about 'wetlands' in India:\n1. India has the largest number of Ramsar sites in Asia.\n2. Wetlands are protected under the Wetlands (Conservation and Management) Rules, 2017.\n3. The Montreux Record lists degraded Ramsar sites.\nSelect the correct answer.",
    "options": [
     "1, 2 and 3",
     "1 and 3 only",
     "2 and 3 only",
     "1 and 2 only"
    ],
    "answer": 0,
    "expl": "India's 75+ Ramsar sites lead Asia; the 2017 Rules decentralised wetland management to states; Montreux flags sites with changed ecological character."
   },
   {
    "q": "The 'Keoladeo National Park' is famous for:",
    "options": [
     "Tigers",
     "Lions",
     "Migratory birds, especially the Siberian crane",
     "Rhinos"
    ],
    "answer": 2,
    "expl": "Keoladeo (Bharatpur, Rajasthan): World Heritage wetland; once wintered the Siberian crane (no longer visiting) — now rich in waterfowl."
   },
   {
    "q": "Which of the following statements about 'tiger reserves' is/are correct?\n1. They have core (critical tiger habitat) and buffer zones.\n2. Nagarjunsagar-Srisailam is India's largest tiger reserve.\n3. The NTCA was set up under the Wildlife Protection Act amendment of 2006.",
    "options": [
     "2 and 3 only",
     "1 and 2 only",
     "1, 2 and 3",
     "1 and 3 only"
    ],
    "answer": 2,
    "expl": "Core-buffer model; Nagarjunsagar-Srisailam (AP/Telangana) is the largest; NTCA and the Tiger and Other Endangered Species Crime Control Bureau came via the 2006 amendment."
   },
   {
    "q": "The 'one-horned rhinoceros' is found in India primarily in:",
    "options": [
     "Kaziranga and other Assam protected areas",
     "Western Ghats",
     "Gir",
     "Sundarbans"
    ],
    "answer": 0,
    "expl": "The Indian rhino (Rhinoceros unicornis): Kaziranga holds ~70% of the world population; also Manas, Pobitora, Jaldapara."
   },
   {
    "q": "Consider the following statements about the 'Asiatic lion':\n1. It survives in the wild only in Gir, Gujarat.\n2. It is listed as Endangered on the IUCN Red List.\n3. Project Lion was announced for its conservation.\nSelect the correct answer.",
    "options": [
     "1 and 3 only",
     "1 and 2 only",
     "2 and 3 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "Gir is the sole wild home; IUCN Endangered (population recovered to 600+); Project Lion (2020) funds habitat and a second home (Kuno proposal debated)."
   },
   {
    "q": "The 'Ganges river dolphin' was declared India's National Aquatic Animal in:",
    "options": [
     "2009",
     "2019",
     "2015",
     "2000"
    ],
    "answer": 0,
    "expl": "Platanista gangetica declared National Aquatic Animal (2009); Vikramshila (Bihar) sanctuary protects it; Project Dolphin launched 2020."
   },
   {
    "q": "Which of the following statements about 'coral reefs' in India is/are correct?\n1. They occur in the Gulf of Mannar, Gulf of Kutch and Lakshadweep.\n2. They are protected under the Wildlife Protection Act.\n3. Coral bleaching events have been recorded in Indian reefs.",
    "options": [
     "1 and 2 only",
     "1 and 3 only",
     "1, 2 and 3",
     "2 and 3 only"
    ],
    "answer": 2,
    "expl": "India's four major reef areas (Mannar, Kutch, Lakshadweep, A&N); corals are Schedule I protected; bleaching recorded in 1998, 2010, 2016 events."
   },
   {
    "q": "The 'Gulf of Mannar' is known for:\n1. Coral reefs and dugongs\n2. Being India's first marine biosphere reserve\n3. Pearl fishing traditions",
    "options": [
     "1 and 2 only",
     "1 and 3 only",
     "1, 2 and 3",
     "2 and 3 only"
    ],
    "answer": 2,
    "expl": "Gulf of Mannar (Tamil Nadu): 21 islands, corals, dugongs, historic pearl fisheries; declared biosphere reserve in 1989."
   },
   {
    "q": "Consider the following statements about 'biodiversity' in India:\n1. India is one of 17 megadiverse countries.\n2. It holds about 8% of global biodiversity.\n3. The Biological Diversity Act was passed in 2002.\nSelect the correct answer.",
    "options": [
     "2 and 3 only",
     "1, 2 and 3",
     "1 and 3 only",
     "1 and 2 only"
    ],
    "answer": 1,
    "expl": "India: megadiverse (17 countries), ~7–8% of recorded species on 2.4% of land; BD Act 2002 (NBA, SBBs, BMCs; amended 2023)."
   },
   {
    "q": "The 'Nagoya Protocol' is related to:",
    "options": [
     "Climate finance",
     "Desertification",
     "Access to genetic resources and benefit-sharing",
     "Ozone layer"
    ],
    "answer": 2,
    "expl": "Nagoya (2010, CBD): ABS — fair sharing of benefits from genetic resources and traditional knowledge."
   },
   {
    "q": "Which of the following statements about 'carbon trading' is/are correct?\n1. The Kyoto Protocol introduced Clean Development Mechanism.\n2. The Paris Agreement's Article 6 enables carbon markets.\n3. India launched the Carbon Credit Trading Scheme in 2023.",
    "options": [
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 2 only",
     "1 and 3 only"
    ],
    "answer": 0,
    "expl": "Kyoto's CDM/JI/ET; Paris Article 6 (6.2, 6.4); India's CCTS (2023, Bureau of Energy Efficiency) for obligated entities — all correct."
   },
   {
    "q": "The 'Green Climate Fund' was established under the:",
    "options": [
     "UNFCCC",
     "UNDP",
     "World Bank",
     "GEF"
    ],
    "answer": 0,
    "expl": "GCF (Cancun, 2010, UNFCCC): $100-billion climate-finance vehicle for developing countries."
   },
   {
    "q": "Consider the following statements about 'desertification' in India:\n1. About one-third of India's land is degraded/desertified.\n2. India hosted COP-14 of the UNCCD in 2019.\n3. India pledged to restore 26 million hectares by 2030.\nSelect the correct answer.",
    "options": [
     "1 and 2 only",
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 3 only"
    ],
    "answer": 1,
    "expl": "ISRO's desertification atlas (~30% land degradation); UNCCD COP-14 at Delhi (2019); Bonn Challenge-linked 26 mha restoration pledge — all correct."
   },
   {
    "q": "The 'Aravalli' range is significant environmentally because it:",
    "options": [
     "Is the origin of the Ganga",
     "Checks the eastward spread of the Thar Desert",
     "Hosts the highest peak of India",
     "Separates India from Nepal"
    ],
    "answer": 1,
    "expl": "The Aravallis (oldest fold mountains, Guru Shikhar highest) act as a barrier to desertification of eastern Rajasthan — mining bans protect them."
   },
   {
    "q": "Which of the following statements about 'groundwater' in India is/are correct?\n1. India is the world's largest groundwater user.\n2. The Atal Bhujal Yojana addresses groundwater management.\n3. CGWB monitors groundwater levels.",
    "options": [
     "1, 2 and 3",
     "1 and 3 only",
     "1 and 2 only",
     "2 and 3 only"
    ],
    "answer": 0,
    "expl": "India extracts the most groundwater globally (~25% of world use); Atal Bhujal Yojana (2020, 7 states); CGWB monitors and notifies over-exploited blocks."
   },
   {
    "q": "The 'Namami Gange' programme was launched in:",
    "options": [
     "2005",
     "2019",
     "2009",
     "2014"
    ],
    "answer": 3,
    "expl": "Namami Gange (2014, ₹20,000 crore): NMCG-led Ganga rejuvenation — sewage treatment, riverfront, biodiversity (dolphins, gharials)."
   },
   {
    "q": "Consider the following statements about the 'National Water Policy':\n1. The latest policy was adopted in 2012.\n2. It treats water as an economic good.\n3. It prioritises drinking water over other uses.\nSelect the correct answer.",
    "options": [
     "2 and 3 only",
     "1 and 3 only",
     "1, 2 and 3",
     "1 and 2 only"
    ],
    "answer": 2,
    "expl": "NWP 2012: water as economic good, demand management, drinking-water priority; a new policy draft has been under discussion — approximate on 'latest'."
   },
   {
    "q": "The 'Ken-Betwa' river interlinking project connects rivers in:",
    "options": [
     "Madhya Pradesh and Uttar Pradesh",
     "Maharashtra and Gujarat",
     "Karnataka and Tamil Nadu",
     "Rajasthan and Haryana"
    ],
    "answer": 0,
    "expl": "Ken-Betwa (first ILR project, foundation 2021): Daudhan dam (MP) to irrigate Bundelkhand in MP–UP; Panna tiger reserve submergence is the controversy."
   },
   {
    "q": "Which of the following statements about 'E-waste (Management) Rules, 2022' is/are correct?\n1. They introduced EPR certificates tradable on a portal.\n2. They cover 106 electrical and electronic items.\n3. They apply to manufacturers, producers and recyclers.",
    "options": [
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 3 only",
     "1 and 2 only"
    ],
    "answer": 0,
    "expl": "E-Waste Rules 2022: EPR authorisation, credit trading on CPCB portal, expanded item coverage — all correct in substance."
   },
   {
    "q": "The 'Swachh Bharat Mission' was launched on:",
    "options": [
     "2 October 2014",
     "15 August 2014",
     "26 January 2015",
     "2 October 2015"
    ],
    "answer": 0,
    "expl": "SBM (2 Oct 2014, Gandhi Jayanti): rural (ODF by 2019 claimed) and urban missions; SBM 2.0 (2021) targets garbage-free cities."
   },
   {
    "q": "Consider the following statements about 'solid waste management' in India:\n1. The SWM Rules, 2016 mandate segregation at source.\n2. Bulk waste generators must process waste on-site.\n3. Waste-to-energy is promoted under the rules.\nSelect the correct answer.",
    "options": [
     "1 and 3 only",
     "2 and 3 only",
     "1 and 2 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "SWM Rules 2016: source segregation (3 streams), bulk generators' on-site processing, user fees, and waste-processing promotion — all correct."
   },
   {
    "q": "The 'National Biodiversity Authority' is headquartered at:",
    "options": [
     "Chennai",
     "Bengaluru",
     "Hyderabad",
     "Delhi"
    ],
    "answer": 0,
    "expl": "NBA (2003, BD Act 2002) sits in Chennai; State Biodiversity Boards and local BMCs complete the three-tier structure."
   },
   {
    "q": "Which of the following is a 'Man and Biosphere' reserve in India recognised by UNESCO?\n1. Nilgiri\n2. Sundarbans\n3. Nanda Devi",
    "options": [
     "1 and 3 only",
     "2 and 3 only",
     "1 and 2 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "India has 12 UNESCO MAB reserves (of 18 designated nationally) — Nilgiri (2000), Sundarbans (2001), Nanda Devi (2004) among them."
   },
   {
    "q": "The 'Great Nicobar' project controversy is mainly about:",
    "options": [
     "An oil refinery",
     "A transhipment port and development threatening tribal reserves and biodiversity",
     "A spaceport",
     "A nuclear plant"
    ],
    "answer": 1,
    "expl": "The ₹72,000-crore Great Nicobar project (port, airport, township) raises concerns over Galathea Bay, leatherback nesting and Shompen/Nicobarese tribal areas."
   }
  ]
 },
 {
  "id": "upsc-bank-governance",
  "title": "Governance — Prelims Question Bank (5 MCQs)",
  "subject": "Polity",
  "tag": "Prelims GS I · Practice bank",
  "blurb": "Welfare schemes, social justice, accountability institutions and e-governance — where static polity meets current affairs.",
  "intro": "A 5-question practice bank on governance, written for UPSC Prelims 2026–27. Every question carries a full explanation; solve in timed sets, log your errors, and revise the explanations — not just the answers.",
  "sections": [
   {
    "h": "How to use this bank",
    "body": "<p>Attempt questions in sets of 25 under timed conditions, then read every explanation — including for questions you got right. A few explanations flag figures or fast-moving developments as approximate or as-reported; always cross-check those against official sources (Budget documents, PIB, ministry sites) before treating them as final.</p>"
   }
  ],
  "questions": [
   {
    "q": "Consider the following statements about the 'Right to Equality' jurisprudence:\n1. E.P. Royappa (1974) linked equality to arbitrariness.\n2. The creamy layer doctrine was introduced in Indra Sawhney (1992).\n3. Jarnail Singh (2018) dealt with reservation in promotions.\nSelect the correct answer.",
    "options": [
     "1 and 3 only",
     "1 and 2 only",
     "2 and 3 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "Royappa ('equality vs arbitrariness'), Indra Sawhney (creamy layer, 50% cap), Jarnail Singh (promotion reservations need quantifiable data) — all correct."
   },
   {
    "q": "The 'Second Administrative Reforms Commission' was chaired by:",
    "options": [
     "P.C. Alexander",
     "N.R. Madhava Menon",
     "K. Santhanam",
     "Veerappa Moily"
    ],
    "answer": 3,
    "expl": "Second ARC (2005–09, Moily): 15 reports on ethics, e-governance, local governance, crisis management — key governance reform blueprint."
   },
   {
    "q": "Consider the following statements about 'Social Justice' provisions:\n1. Article 15(4) enables special provisions for SCs/STs/OBCs.\n2. Article 16(4A) provides for reservation in promotions for SCs/STs.\n3. The 103rd Amendment introduced EWS reservation.\nSelect the correct answer.",
    "options": [
     "1, 2 and 3",
     "1 and 3 only",
     "1 and 2 only",
     "2 and 3 only"
    ],
    "answer": 0,
    "expl": "15(4) (1st Amendment), 16(4A) (77th Amendment, promotions), 103rd (2019, EWS 10% — upheld in Janhit Abhiyan, 2022) — all correct."
   },
   {
    "q": "The 'National Commission for Backward Classes' got constitutional status through the:",
    "options": [
     "102nd Amendment (2018)",
     "101st Amendment",
     "104th Amendment",
     "103rd Amendment"
    ],
    "answer": 0,
    "expl": "102nd Amendment (2018): Article 338B created the constitutional NCBC; the 105th (2021) restored states' OBC-list powers."
   },
   {
    "q": "Which of the following statements about 'Disaster Management' in India is/are correct?\n1. The DM Act was passed in 2005.\n2. NDMA is chaired by the Prime Minister.\n3. NDRF battalions respond to disasters.\nSelect the correct answer.",
    "options": [
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 3 only",
     "1 and 2 only"
    ],
    "answer": 0,
    "expl": "DM Act 2005 (post-2004 tsunami): NDMA (PM chairs), SDMA (CM chairs), NDRF (16 battalions) — the three-tier structure."
   }
  ]
 },
 {
  "id": "upsc-bank-indgeo",
  "title": "Indian Geography — Prelims Question Bank (50 MCQs)",
  "subject": "Geography",
  "tag": "Prelims GS I · Practice bank",
  "blurb": "Physiography, rivers, soils, agriculture, minerals and industry — India-specific facts with map sense.",
  "intro": "A 50-question practice bank on indian geography, written for UPSC Prelims 2026–27. Every question carries a full explanation; solve in timed sets, log your errors, and revise the explanations — not just the answers.",
  "sections": [
   {
    "h": "How to use this bank",
    "body": "<p>Attempt questions in sets of 25 under timed conditions, then read every explanation — including for questions you got right. A few explanations flag figures or fast-moving developments as approximate or as-reported; always cross-check those against official sources (Budget documents, PIB, ministry sites) before treating them as final.</p>"
   }
  ],
  "questions": [
   {
    "q": "Consider the following statements about India's location:\n1. India lies entirely in the Northern Hemisphere.\n2. The Tropic of Cancer divides India into two nearly equal parts.\n3. India's southernmost mainland point is Kanyakumari.\nSelect the correct answer.",
    "options": [
     "2 and 3 only",
     "1 and 3 only",
     "1 and 2 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "India (8°4′N–37°6′N) is fully in the Northern Hemisphere; the Tropic of Cancer (23.5°N) bisects it; Kanyakumari (Cape Comorin) is the mainland's southern tip (Indira Point is southernmost overall)."
   },
   {
    "q": "The northernmost point of India is:",
    "options": [
     "Kibithu",
     "Indira Col",
     "Indira Point",
     "Guhar Moti"
    ],
    "answer": 1,
    "expl": "Indira Col (Siachen, Ladakh) is the northernmost; Kibithu (Arunachal) easternmost; Guhar Moti (Gujarat) westernmost; Indira Point (Nicobar) southernmost."
   },
   {
    "q": "Match the following Himalayan ranges from north to south:\nA. Karakoram — 1. Northernmost\nB. Zaskar — 2. South of Karakoram\nC. Pir Panjal — 3. Part of Lesser Himalaya\nD. Shiwalik — 4. Southernmost foothills",
    "options": [
     "A-4, B-3, C-2, D-1",
     "A-1, B-3, C-2, D-4",
     "A-2, B-1, C-4, D-3",
     "A-1, B-2, C-3, D-4"
    ],
    "answer": 3,
    "expl": "North to south: Karakoram (Trans-Himalaya), Zaskar, Pir Panjal (Lesser Himalaya), Shiwalik (outer foothills) — the standard sequence."
   },
   {
    "q": "Which of the following Himalayan peaks is located in India?\n1. Kanchenjunga\n2. Nanda Devi\n3. Kamet",
    "options": [
     "2 and 3 only",
     "1 and 3 only",
     "1, 2 and 3",
     "1 and 2 only"
    ],
    "answer": 2,
    "expl": "Kanchenjunga (Sikkim, 8,586 m — India's highest), Nanda Devi (Uttarakhand), Kamet (Uttarakhand) are all in India; Everest and K2 lie outside."
   },
   {
    "q": "The 'Karewas' of Kashmir are known for the cultivation of:",
    "options": [
     "Saffron",
     "Coffee",
     "Tea",
     "Rubber"
    ],
    "answer": 0,
    "expl": "Karewas (lacustrine deposits) of the Kashmir valley grow saffron (Pampore), besides almonds and apples."
   },
   {
    "q": "Consider the following statements about the Western Ghats:\n1. They run parallel to India's western coast.\n2. Anaimudi is the highest peak of peninsular India.\n3. They are a UNESCO World Heritage Site.\nSelect the correct answer.",
    "options": [
     "2 and 3 only",
     "1 and 3 only",
     "1, 2 and 3",
     "1 and 2 only"
    ],
    "answer": 2,
    "expl": "Western Ghats (Sahyadris) run north–south; Anaimudi (2,695 m, Kerala) is peninsular India's highest; the Ghats were inscribed as World Heritage in 2012."
   },
   {
    "q": "The Eastern Ghats and Western Ghats meet at the:",
    "options": [
     "Palani Hills",
     "Cardamom Hills",
     "Annamalai Hills",
     "Nilgiri Hills"
    ],
    "answer": 3,
    "expl": "The two Ghat ranges converge at the Nilgiri Hills (Tamil Nadu–Kerala–Karnataka trijunction); Doddabetta is the Nilgiris' highest peak."
   },
   {
    "q": "Which of the following passes connects Srinagar to Leh?",
    "options": [
     "Zoji La",
     "Banihal",
     "Rohtang",
     "Nathu La"
    ],
    "answer": 0,
    "expl": "Zoji La (on NH-1) links Srinagar–Leh; Banihal links Jammu–Srinagar (Chenani-Nashri tunnel); Rohtang links Manali–Leh; Nathu La is Sikkim–Tibet."
   },
   {
    "q": "Match the following passes with their locations:\nA. Nathu La — 1. Sikkim\nB. Shipki La — 2. Himachal Pradesh\nC. Bomdi La — 3. Arunachal Pradesh\nD. Lipulekh — 4. Uttarakhand",
    "options": [
     "A-4, B-2, C-3, D-1",
     "A-1, B-2, C-3, D-4",
     "A-1, B-3, C-2, D-4",
     "A-2, B-1, C-4, D-3"
    ],
    "answer": 1,
    "expl": "Nathu La (Sikkim–Tibet), Shipki La (Himachal–Tibet, Sutlej gorge), Bomdi La (Arunachal), Lipulekh (Uttarakhand–Tibet, Kailash-Manasarovar route)."
   },
   {
    "q": "The Thar Desert is located primarily in:",
    "options": [
     "Madhya Pradesh",
     "Rajasthan",
     "Haryana",
     "Gujarat"
    ],
    "answer": 1,
    "expl": "The Thar (Great Indian Desert) lies mainly in western Rajasthan, extending into Gujarat, Punjab and Haryana — a rain-shadow desert east of the Aravallis."
   },
   {
    "q": "Consider the following statements about the Indo-Gangetic Plain:\n1. The 'bhabar' is a porous piedmont zone.\n2. The 'terai' is a marshy, forested zone south of the bhabar.\n3. The 'khadar' is the newer alluvium of floodplains.\nSelect the correct answer.",
    "options": [
     "1 and 3 only",
     "2 and 3 only",
     "1, 2 and 3",
     "1 and 2 only"
    ],
    "answer": 2,
    "expl": "Bhabar (porous, streams disappear), terai (marshy re-emergence zone), bhangar (older alluvium) and khadar (newer floodplain alluvium) are the classic plain subdivisions."
   },
   {
    "q": "Which of the following rivers is NOT a tributary of the Ganga?",
    "options": [
     "Mahanadi",
     "Yamuna",
     "Gomti",
     "Son"
    ],
    "answer": 0,
    "expl": "Yamuna, Son and Gomti join the Ganga; Mahanadi is an independent east-flowing river of Odisha/Chhattisgarh."
   },
   {
    "q": "Match the following rivers with their origin:\nA. Ganga — 1. Amarkantak\nB. Narmada — 2. Gangotri (Gomukh)\nC. Godavari — 3. Nashik (Trimbakeshwar)\nD. Krishna — 4. Mahabaleshwar",
    "options": [
     "A-1, B-2, C-4, D-3",
     "A-2, B-1, C-3, D-4",
     "A-3, B-1, C-2, D-4",
     "A-2, B-4, C-1, D-3"
    ],
    "answer": 1,
    "expl": "Ganga (Gangotri), Narmada (Amarkantak), Godavari (Trimbakeshwar, Nashik), Krishna (Mahabaleshwar) — standard origins."
   },
   {
    "q": "The 'Dakshin Ganga' is another name for the river:",
    "options": [
     "Kaveri",
     "Krishna",
     "Mahanadi",
     "Godavari"
    ],
    "answer": 3,
    "expl": "The Godavari (1,465 km, longest peninsular river) is called Dakshin Ganga; it rises in Maharashtra and drains into the Bay of Bengal."
   },
   {
    "q": "Consider the following statements about the Brahmaputra:\n1. It originates in Tibet as the Yarlung Tsangpo.\n2. It enters India through Arunachal Pradesh as the Siang/Dihang.\n3. Majuli, one of the world's largest river islands, lies in it.\nSelect the correct answer.",
    "options": [
     "1 and 2 only",
     "1, 2 and 3",
     "1 and 3 only",
     "2 and 3 only"
    ],
    "answer": 1,
    "expl": "Yarlung Tsangpo (Tibet) → Siang/Dihang (Arunachal) → Brahmaputra (Assam); Majuli (Assam) is among the largest river islands."
   },
   {
    "q": "Which of the following lakes is a freshwater lake?\n1. Wular Lake\n2. Dal Lake\n3. Chilika Lake",
    "options": [
     "2 and 3 only",
     "1, 2 and 3",
     "1 and 2 only",
     "1 and 3 only"
    ],
    "answer": 2,
    "expl": "Wular and Dal (Kashmir) are freshwater; Chilika (Odisha) is a brackish lagoon — India's largest coastal lagoon."
   },
   {
    "q": "Lonar Lake in Maharashtra is a:",
    "options": [
     "Crater lake formed by meteorite impact",
     "Artificial reservoir",
     "Glacial lake",
     "Tectonic lake"
    ],
    "answer": 0,
    "expl": "Lonar (Buldhana) is a basaltic meteorite-crater lake (~35,000–50,000 years old) — one of few such hypervelocity impact craters on Earth."
   },
   {
    "q": "Match the following lakes with their states:\nA. Chilika — 1. Rajasthan\nB. Sambhar — 2. Odisha\nC. Vembanad — 3. Kerala\nD. Loktak — 4. Manipur",
    "options": [
     "A-2, B-1, C-3, D-4",
     "A-1, B-2, C-4, D-3",
     "A-4, B-1, C-3, D-2",
     "A-2, B-3, C-1, D-4"
    ],
    "answer": 0,
    "expl": "Chilika (Odisha), Sambhar (Rajasthan, salt lake), Vembanad (Kerala, longest lake), Loktak (Manipur, floating phumdis, Keibul Lamjao)."
   },
   {
    "q": "The 'Silent Valley' National Park is located in:",
    "options": [
     "Kerala",
     "Andhra Pradesh",
     "Tamil Nadu",
     "Karnataka"
    ],
    "answer": 0,
    "expl": "Silent Valley (Palakkad, Kerala) — a pristine tropical evergreen forest saved from a hydro project in the 1980s; part of the Nilgiri Biosphere Reserve."
   },
   {
    "q": "Consider the following statements about the Sundarbans:\n1. It is the world's largest mangrove forest.\n2. It is shared between India and Bangladesh.\n3. It is a UNESCO World Heritage Site.\nSelect the correct answer.",
    "options": [
     "1 and 3 only",
     "1, 2 and 3",
     "1 and 2 only",
     "2 and 3 only"
    ],
    "answer": 1,
    "expl": "Sundarbans (Ganga-Brahmaputra delta): largest mangrove tract, split India–Bangladesh, World Heritage (1987), home of the Royal Bengal tiger."
   },
   {
    "q": "Which of the following states has the longest coastline in India?",
    "options": [
     "Gujarat",
     "Maharashtra",
     "Tamil Nadu",
     "Andhra Pradesh"
    ],
    "answer": 0,
    "expl": "Gujarat (~1,600 km, including the Gulf of Kutch/Khambhat indentations) has the longest state coastline; Andhra Pradesh is second."
   },
   {
    "q": "The 'Nine Degree Channel' separates:",
    "options": [
     "Andaman from Nicobar",
     "Lakshadweep from Minicoy",
     "Kanyakumari from Maldives",
     "India from Sri Lanka"
    ],
    "answer": 1,
    "expl": "Nine Degree Channel (Lakshadweep–Minicoy); Ten Degree Channel (Andaman–Nicobar); the Palk Strait separates India and Sri Lanka."
   },
   {
    "q": "Consider the following statements about the Andaman and Nicobar Islands:\n1. They lie in the Bay of Bengal.\n2. Barren Island has India's only active volcano.\n3. Saddle Peak is the highest point.\nSelect the correct answer.",
    "options": [
     "1 and 3 only",
     "1 and 2 only",
     "1, 2 and 3",
     "2 and 3 only"
    ],
    "answer": 2,
    "expl": "A&N in the Bay of Bengal; Barren Island (active volcano); Saddle Peak (North Andaman, 732 m) is the highest point."
   },
   {
    "q": "The 'Duncan Passage' lies between:",
    "options": [
     "North and Middle Andaman",
     "Great Nicobar and Sumatra",
     "South Andaman and Little Andaman",
     "Car Nicobar and Little Andaman"
    ],
    "answer": 2,
    "expl": "Duncan Passage separates South and Little Andaman; the Ten Degree Channel separates the Andaman group from the Nicobar group."
   },
   {
    "q": "Which of the following is the correct north-to-south order of the given cities along India's west coast?",
    "options": [
     "Mumbai – Mangaluru – Kochi – Thiruvananthapuram",
     "Mumbai – Thiruvananthapuram – Kochi – Mangaluru",
     "Mangaluru – Mumbai – Kochi – Thiruvananthapuram",
     "Mumbai – Kochi – Mangaluru – Thiruvananthapuram"
    ],
    "answer": 0,
    "expl": "North to south: Mumbai → Mangaluru → Kochi → Thiruvananthapuram — the standard west-coast sequence."
   },
   {
    "q": "The 'Palghat Gap' in the Western Ghats connects:",
    "options": [
     "Gujarat with Rajasthan",
     "Karnataka with Maharashtra",
     "Kerala with Tamil Nadu",
     "Goa with Karnataka"
    ],
    "answer": 2,
    "expl": "The Palghat (Palakkad) Gap (~30 km wide) links Coimbatore (TN) with Palakkad (Kerala); the Thal and Bhor Ghats serve Mumbai."
   },
   {
    "q": "Consider the following statements about Indian agriculture:\n1. India is the largest producer of pulses in the world.\n2. West Bengal is the largest producer of rice in India.\n3. Uttar Pradesh is the largest producer of wheat and sugarcane.\nSelect the correct answer.",
    "options": [
     "1, 2 and 3",
     "1 and 2 only",
     "1 and 3 only",
     "2 and 3 only"
    ],
    "answer": 2,
    "expl": "India leads in pulses; UP leads in wheat and sugarcane; West Bengal is among the top rice producers but the largest-producer rank has varied between West Bengal and UP in recent years — statement 2 is approximate."
   },
   {
    "q": "The 'Green Revolution' in India is most associated with the states of:",
    "options": [
     "Bihar and Odisha",
     "Punjab, Haryana and western Uttar Pradesh",
     "Kerala and Tamil Nadu",
     "Assam and West Bengal"
    ],
    "answer": 1,
    "expl": "The 1960s Green Revolution (HYV seeds, fertilisers, irrigation — M.S. Swaminathan's leadership) centred on Punjab, Haryana and western UP wheat belts."
   },
   {
    "q": "Match the following crops with their ideal climatic conditions:\nA. Rice — 1. Cool climate, well-drained loamy soil\nB. Wheat — 2. Hot and humid, 125+ cm rainfall\nC. Cotton — 3. Warm climate, black soil, 50–100 cm rainfall\nD. Tea — 4. Cool, humid, sloping well-drained land",
    "options": [
     "A-2, B-1, C-3, D-4",
     "A-4, B-1, C-3, D-2",
     "A-2, B-3, C-1, D-4",
     "A-1, B-2, C-4, D-3"
    ],
    "answer": 0,
    "expl": "Rice (hot, humid), wheat (cool rabi), cotton (black regur soil, moderate rain), tea (sloped, well-drained, humid) — standard crop geography."
   },
   {
    "q": "Which of the following statements about the 'White Revolution' is/are correct?\n1. It is associated with Verghese Kurien and the Amul model.\n2. Operation Flood was implemented by the NDDB.\n3. India is the world's largest milk producer.",
    "options": [
     "1 and 3 only",
     "1 and 2 only",
     "1, 2 and 3",
     "2 and 3 only"
    ],
    "answer": 2,
    "expl": "White Revolution: Kurien's Amul cooperative model, Operation Flood (1970, NDDB); India is the largest milk producer globally."
   },
   {
    "q": "The 'Blue Revolution' in India is related to:",
    "options": [
     "Fisheries development",
     "Water conservation",
     "Ocean mining",
     "Hydroelectric power"
    ],
    "answer": 0,
    "expl": "Blue Revolution = fisheries/aquaculture growth (7th Five Year Plan onwards; Matsya Sampada Yojana, 2020); India is among the top fish producers."
   },
   {
    "q": "Consider the following statements about mineral resources in India:\n1. Jharkhand is rich in coal and iron ore.\n2. Karnataka is the largest producer of gold.\n3. Odisha is the largest producer of bauxite.\nSelect the correct answer.",
    "options": [
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 2 only",
     "1 and 3 only"
    ],
    "answer": 0,
    "expl": "Jharkhand (Jharia coal, Singhbhum iron), Karnataka (Kolar/Hutti gold — largest producer), Odisha (largest bauxite producer) are all correct."
   },
   {
    "q": "The 'Digboi' oil field is located in:",
    "options": [
     "Maharashtra",
     "Rajasthan",
     "Assam",
     "Gujarat"
    ],
    "answer": 2,
    "expl": "Digboi (Assam) — India's oldest producing oilfield (1889) and first refinery; Naharkatiya and Mumbai High are other major fields."
   },
   {
    "q": "Mumbai High, India's largest offshore oil field, lies in the:",
    "options": [
     "Gulf of Mannar",
     "Arabian Sea",
     "Palk Strait",
     "Bay of Bengal"
    ],
    "answer": 1,
    "expl": "Mumbai High (discovered 1974) is in the Arabian Sea off Mumbai; operated by ONGC."
   },
   {
    "q": "Match the following industrial regions with their characteristics:\nA. Chotanagpur — 1. Cotton textiles\nB. Mumbai-Pune — 2. Heavy industry, coal-iron base\nC. Ahmedabad-Vadodara — 3. Petrochemicals, textiles\nD. Vishakhapatnam — 4. Port-based steel and industry",
    "options": [
     "A-2, B-3, C-1, D-4",
     "A-2, B-1, C-3, D-4",
     "A-4, B-1, C-3, D-2",
     "A-1, B-2, C-4, D-3"
    ],
    "answer": 1,
    "expl": "Chotanagpur (mineral-based heavy industry), Mumbai-Pune (cotton textiles), Ahmedabad-Vadodara (textiles, petrochemicals), Vizag (port-based steel) — classic industrial regions."
   },
   {
    "q": "Which of the following statements about the Indian Railways is/are correct?\n1. It is among the world's largest rail networks.\n2. The first train ran between Mumbai and Thane in 1853.\n3. The Konkan Railway connects Mumbai and Mangaluru.",
    "options": [
     "2 and 3 only",
     "1 and 3 only",
     "1, 2 and 3",
     "1 and 2 only"
    ],
    "answer": 2,
    "expl": "Indian Railways (~68,000 km, among the largest); first train 16 April 1853 (Bori Bunder–Thane); Konkan Railway (1998) links Roha–Mangalore."
   },
   {
    "q": "The 'Golden Quadrilateral' connects:",
    "options": [
     "Delhi, Mumbai, Chennai and Kolkata",
     "Mumbai, Pune, Nashik and Nagpur",
     "Chennai, Bengaluru, Hyderabad and Kochi",
     "Delhi, Jaipur, Agra and Chandigarh"
    ],
    "answer": 0,
    "expl": "The Golden Quadrilateral (NHDP) links Delhi–Mumbai–Chennai–Kolkata; the North-South/East-West corridors link Srinagar–Kanyakumari and Porbandar–Silchar."
   },
   {
    "q": "Consider the following statements about the major ports of India:\n1. Kandla (Deendayal Port) is a tidal port in Gujarat.\n2. Paradip is a major port in Odisha.\n3. Nhava Sheva (JNPT) is India's largest container port.\nSelect the correct answer.",
    "options": [
     "1 and 3 only",
     "1 and 2 only",
     "2 and 3 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "Kandla (tidal, Gulf of Kutch), Paradip (Odisha), and JNPT/Nhava Sheva (largest container handler) are all correct."
   },
   {
    "q": "Which of the following is India's largest public sector steel plant in terms of capacity (SAIL)?",
    "options": [
     "Bhilai Steel Plant",
     "Durgapur Steel Plant",
     "Bokaro Steel Plant",
     "Rourkela Steel Plant"
    ],
    "answer": 0,
    "expl": "Bhilai (Chhattisgarh, with Soviet assistance, 1959) is SAIL's largest plant; Bokaro is also among the largest — Bhilai is generally cited first by capacity."
   },
   {
    "q": "The 'Sardar Sarovar Dam' is built on the river:",
    "options": [
     "Tapi",
     "Narmada",
     "Mahi",
     "Sabarmati"
    ],
    "answer": 1,
    "expl": "Sardar Sarovar (Gujarat) on the Narmada — the terminal dam of the Narmada valley project; the Narmada Bachao Andolan opposed it."
   },
   {
    "q": "Consider the following statements about the Tehri Dam:\n1. It is built on the Bhagirathi river.\n2. It is one of the tallest dams in India.\n3. It is located in Uttarakhand.\nSelect the correct answer.",
    "options": [
     "1 and 2 only",
     "2 and 3 only",
     "1 and 3 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "Tehri (260.5 m, among India's tallest) on the Bhagirathi in Uttarakhand — a rock-and-earth-fill dam with seismic concerns."
   },
   {
    "q": "The 'Indira Gandhi Canal' brings water to the Thar Desert from the river:",
    "options": [
     "Chambal",
     "Ganga",
     "Sutlej (via Harike Barrage)",
     "Yamuna"
    ],
    "answer": 2,
    "expl": "The Indira Gandhi (Rajasthan) Canal carries Sutlej–Beas water from Harike Barrage (Punjab) to western Rajasthan — India's longest canal."
   },
   {
    "q": "Which of the following statements about the Census of India is/are correct?\n1. The first synchronous census was held in 1881.\n2. The Census is conducted under the Census Act, 1948.\n3. The Registrar General and Census Commissioner conducts it.",
    "options": [
     "1 and 2 only",
     "1, 2 and 3",
     "1 and 3 only",
     "2 and 3 only"
    ],
    "answer": 1,
    "expl": "First regular census 1881 (Ripon); Census Act 1948; Office of the Registrar General & Census Commissioner (Home Ministry) conducts the decennial census."
   },
   {
    "q": "According to the 2011 Census, the most populous state and the least populous state of India are:",
    "options": [
     "Uttar Pradesh and Goa",
     "Uttar Pradesh and Sikkim",
     "Maharashtra and Goa",
     "Bihar and Mizoram"
    ],
    "answer": 1,
    "expl": "2011 Census: UP (~199.8 million, most populous), Sikkim (~610,000, least populous state)."
   },
   {
    "q": "The state with the highest population density in India (2011 Census) is:",
    "options": [
     "Kerala",
     "Uttar Pradesh",
     "Bihar",
     "West Bengal"
    ],
    "answer": 2,
    "expl": "Bihar (~1,106 persons/sq km) is the densest state (2011); among UTs, Delhi is densest."
   },
   {
    "q": "Consider the following statements about the 'Demographic Dividend' of India:\n1. Over 60% of India's population is in the working-age group.\n2. India has one of the world's youngest populations.\n3. The dividend is automatic and requires no policy support.\nSelect the correct answer.",
    "options": [
     "1 and 2 only",
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 3 only"
    ],
    "answer": 0,
    "expl": "India's working-age share (~62%+) and young median age (~28) create the dividend — but it needs education, health and jobs; it is not automatic."
   },
   {
    "q": "The 'tribal' population of India is concentrated most in which of the following states (largest absolute ST population, 2011)?",
    "options": [
     "Odisha",
     "Rajasthan",
     "Maharashtra",
     "Madhya Pradesh"
    ],
    "answer": 3,
    "expl": "Madhya Pradesh has the largest Scheduled Tribe population (~15.3 million, 2011); Maharashtra is second."
   },
   {
    "q": "Which of the following languages has the largest number of speakers in India (2011 Census)?",
    "options": [
     "Marathi",
     "Hindi",
     "Telugu",
     "Bengali"
    ],
    "answer": 1,
    "expl": "Hindi (~43.6% including mother-tongue variants) is first; Bengali second (~8%), Marathi third."
   },
   {
    "q": "The 'Standard Meridian of India' (82°30′E) passes through which of the following states?\n1. Uttar Pradesh\n2. Madhya Pradesh\n3. Chhattisgarh\n4. Odisha",
    "options": [
     "2 and 3 only",
     "1, 2 and 3 only",
     "1, 2, 3 and 4",
     "1 and 4 only"
    ],
    "answer": 2,
    "expl": "82°30′E passes through UP, MP, Chhattisgarh, Odisha and Andhra Pradesh — so all four listed states."
   },
   {
    "q": "Consider the following statements about the 'Coal' reserves of India:\n1. Gondwana coalfields hold most of India's coal.\n2. Jharia is famous for coking coal.\n3. Neyveli is famous for lignite.\nSelect the correct answer.",
    "options": [
     "1 and 3 only",
     "1 and 2 only",
     "1, 2 and 3",
     "2 and 3 only"
    ],
    "answer": 2,
    "expl": "Gondwana fields (Jharia, Raniganj, Bokaro) hold ~99% of reserves; Jharia gives prime coking coal; Neyveli (Tamil Nadu) is the lignite hub."
   }
  ]
 },
 {
  "id": "upsc-bank-ir",
  "title": "International Relations — Prelims Question Bank (20 MCQs)",
  "subject": "International Relations",
  "tag": "Prelims GS I · Practice bank",
  "blurb": "Neighbourhood, groupings, treaties and India's global engagements.",
  "intro": "A 20-question practice bank on international relations, written for UPSC Prelims 2026–27. Every question carries a full explanation; solve in timed sets, log your errors, and revise the explanations — not just the answers.",
  "sections": [
   {
    "h": "How to use this bank",
    "body": "<p>Attempt questions in sets of 25 under timed conditions, then read every explanation — including for questions you got right. A few explanations flag figures or fast-moving developments as approximate or as-reported; always cross-check those against official sources (Budget documents, PIB, ministry sites) before treating them as final.</p>"
   }
  ],
  "questions": [
   {
    "q": "Consider the following statements about the United Nations:\n1. It was founded in 1945 after World War II.\n2. India is a founding member.\n3. The UN Charter was signed at San Francisco.\nSelect the correct answer.",
    "options": [
     "2 and 3 only",
     "1 and 3 only",
     "1 and 2 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "UN (24 Oct 1945, San Francisco Charter); India, though not yet independent, signed as a founding member."
   },
   {
    "q": "The permanent members of the UN Security Council with veto power are:",
    "options": [
     "USA, UK, Germany, Japan, India",
     "USA, UK, France, Germany, Japan",
     "USA, Russia, China, India, Brazil",
     "USA, UK, France, Russia, China"
    ],
    "answer": 3,
    "expl": "The P5 (US, UK, France, Russia, China) hold the veto; India (G4 with Germany, Japan, Brazil) seeks permanent membership."
   },
   {
    "q": "India's 'Act East Policy' was launched in 2014 as an upgrade of the:",
    "options": [
     "Gujral Doctrine",
     "Look East Policy (1991)",
     "Panchsheel",
     "Non-Aligned Movement"
    ],
    "answer": 1,
    "expl": "Act East (2014) upgraded Rao's Look East (1991) — deeper engagement with ASEAN and the Indo-Pacific."
   },
   {
    "q": "The 'Quadrilateral Security Dialogue' (Quad) comprises:",
    "options": [
     "India, USA, Japan, Australia",
     "India, Japan, South Korea, Vietnam",
     "India, USA, Russia, China",
     "India, USA, UK, France"
    ],
    "answer": 0,
    "expl": "Quad (revived 2017): India, US, Japan, Australia — Indo-Pacific cooperation on security, tech and supply chains."
   },
   {
    "q": "Consider the following statements about BRICS:\n1. The 2024 expansion added Egypt, Ethiopia, Iran and UAE.\n2. The New Development Bank is headquartered in Shanghai.\n3. India hosted the BRICS summit in 2021.\nSelect the correct answer.",
    "options": [
     "2 and 3 only",
     "1, 2 and 3",
     "1 and 2 only",
     "1 and 3 only"
    ],
    "answer": 1,
    "expl": "BRICS expanded (2024: Egypt, Ethiopia, Iran, UAE; Indonesia joined 2025); NDB (Shanghai, 2014); India chaired the 2021 virtual summit."
   },
   {
    "q": "The 'International Solar Alliance' headquarters is located at:",
    "options": [
     "Geneva, Switzerland",
     "Paris, France",
     "Gurugram, India",
     "New York, USA"
    ],
    "answer": 2,
    "expl": "ISA HQ at Gurugram (National Institute of Solar Energy campus) — launched by India and France at COP-21 (2015)."
   },
   {
    "q": "India's 'Neighbourhood First' policy prioritises:",
    "options": [
     "Relations with the USA",
     "Relations with South Asian neighbours",
     "Trade with Europe",
     "Engagement with Africa only"
    ],
    "answer": 1,
    "expl": "Neighbourhood First (2014): priority to South Asia — connectivity, development partnership and disaster aid (e.g., Vaccine Maitri)."
   },
   {
    "q": "The 'Gujral Doctrine' in Indian foreign policy emphasises:",
    "options": [
     "Generosity towards smaller neighbours without expecting reciprocity",
     "Military alliances",
     "Economic sanctions",
     "Isolationism"
    ],
    "answer": 0,
    "expl": "I.K. Gujral's doctrine (1996): India gives to neighbours (Bangladesh, Nepal, Bhutan, Maldives, Sri Lanka) without demanding reciprocity."
   },
   {
    "q": "Consider the following statements about the 'Shanghai Cooperation Organisation':\n1. India became a full member in 2017.\n2. It is headquartered in Beijing.\n3. It focuses on regional security and counter-terrorism.\nSelect the correct answer.",
    "options": [
     "1 and 2 only",
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 3 only"
    ],
    "answer": 1,
    "expl": "SCO (2001, Beijing): India and Pakistan joined in 2017 (Astana); RATS (Tashkent) handles counter-terrorism; India chaired in 2023."
   },
   {
    "q": "The 'Indo-Pacific Economic Framework' (IPEF) was launched in 2022 by:",
    "options": [
     "The USA with 13 Indo-Pacific partners including India",
     "The European Union",
     "Japan alone",
     "China"
    ],
    "answer": 0,
    "expl": "IPEF (May 2022, Tokyo): US-led 14-member framework on supply chains, clean economy and trade — India opted out of the trade pillar."
   },
   {
    "q": "Which of the following statements about the 'WTO' is/are correct?\n1. It was established in 1995, succeeding GATT.\n2. It is headquartered in Geneva.\n3. India is a founding member.",
    "options": [
     "2 and 3 only",
     "1, 2 and 3",
     "1 and 3 only",
     "1 and 2 only"
    ],
    "answer": 1,
    "expl": "WTO (Marrakesh, 1995; Geneva HQ): India is a founding member; its dispute-settlement Appellate Body has been non-functional since 2019."
   },
   {
    "q": "The 'Panchsheel' agreement (1954) was signed between India and:",
    "options": [
     "Pakistan",
     "Myanmar",
     "Nepal",
     "China"
    ],
    "answer": 3,
    "expl": "Panchsheel (1954, Nehru–Zhou Enlai): five principles of peaceful coexistence — later violated by the 1962 war."
   },
   {
    "q": "Consider the following statements about the 'Non-Aligned Movement':\n1. The first NAM summit was held at Belgrade in 1961.\n2. India was a founding member.\n3. It was a response to Cold War bloc politics.\nSelect the correct answer.",
    "options": [
     "1 and 2 only",
     "1 and 3 only",
     "1, 2 and 3",
     "2 and 3 only"
    ],
    "answer": 2,
    "expl": "NAM (Belgrade 1961; Nehru, Nasser, Tito, Sukarno, Nkrumah): non-alignment in the Cold War — India remains a member though its salience faded."
   },
   {
    "q": "The 'Treaty of Peace, Friendship and Cooperation' (1971) was signed between India and:",
    "options": [
     "The Soviet Union",
     "Bangladesh",
     "Afghanistan",
     "The USA"
    ],
    "answer": 0,
    "expl": "The Indo-Soviet Treaty (August 1971) preceded the Bangladesh war — Article 9 provided for consultations in case of attack."
   },
   {
    "q": "India's 'Look West' / 'Think West' policy primarily concerns:",
    "options": [
     "Central Asia",
     "Western Europe",
     "West Asia (the Gulf region)",
     "The Americas"
    ],
    "answer": 2,
    "expl": "'Link West' (Modi era): energy, diaspora (9 million Indians) and defence ties with the Gulf — IMEC corridor (2023) extends it."
   },
   {
    "q": "The 'IMEC' (India-Middle East-Europe Economic Corridor) was announced at the:",
    "options": [
     "COP-28, Dubai",
     "BRICS Johannesburg",
     "G20 New Delhi Summit, 2023",
     "G7 Hiroshima"
    ],
    "answer": 2,
    "expl": "IMEC (Sept 2023, G20 Delhi): India–UAE–Saudi–Europe connectivity (ports, rail, green hydrogen) — a counterpoint to BRI."
   },
   {
    "q": "Consider the following statements about the 'Belt and Road Initiative':\n1. It is China's transcontinental infrastructure programme.\n2. The China-Pakistan Economic Corridor passes through PoK.\n3. India has opposed BRI over sovereignty concerns.\nSelect the correct answer.",
    "options": [
     "1 and 2 only",
     "1 and 3 only",
     "1, 2 and 3",
     "2 and 3 only"
    ],
    "answer": 2,
    "expl": "BRI (2013): CPEC traverses Gilgit-Baltistan (PoK); India boycotts BRI forums citing sovereignty and debt-trap concerns."
   },
   {
    "q": "The 'Arctic Council' observer status of India was granted in:",
    "options": [
     "2013",
     "2001",
     "1996",
     "2020"
    ],
    "answer": 0,
    "expl": "India became an Arctic Council observer in 2013 (Kiruna); Himadri station (Ny-Ålesund) supports its polar research; India's Arctic Policy released 2022."
   },
   {
    "q": "Which of the following statements about 'SAARC' is/are correct?\n1. It was founded in 1985 at Dhaka.\n2. It has 8 member states including Afghanistan.\n3. Its secretariat is at Kathmandu.",
    "options": [
     "1 and 3 only",
     "1 and 2 only",
     "1, 2 and 3",
     "2 and 3 only"
    ],
    "answer": 2,
    "expl": "SAARC (1985, Dhaka; 8 members with Afghanistan 2007; Kathmandu secretariat) — moribund since the 2016 summit's cancellation; BIMSTEC is India's alternative focus."
   },
   {
    "q": "The 'BIMSTEC' grouping connects South and Southeast Asia. Its secretariat is at:",
    "options": [
     "Dhaka",
     "Kathmandu",
     "Bangkok",
     "Colombo"
    ],
    "answer": 0,
    "expl": "BIMSTEC (1997, Dhaka secretariat): 7 members (Bangladesh, Bhutan, India, Myanmar, Nepal, Sri Lanka, Thailand) — Bay of Bengal cooperation."
   }
  ]
 },
 {
  "id": "upsc-bank-medieval",
  "title": "Medieval History — Prelims Question Bank (40 MCQs)",
  "subject": "History",
  "tag": "Prelims GS I · Practice bank",
  "blurb": "Sultanate, Vijayanagara, Mughals and Marathas — administration terms and cultural synthesis.",
  "intro": "A 40-question practice bank on medieval history, written for UPSC Prelims 2026–27. Every question carries a full explanation; solve in timed sets, log your errors, and revise the explanations — not just the answers.",
  "sections": [
   {
    "h": "How to use this bank",
    "body": "<p>Attempt questions in sets of 25 under timed conditions, then read every explanation — including for questions you got right. A few explanations flag figures or fast-moving developments as approximate or as-reported; always cross-check those against official sources (Budget documents, PIB, ministry sites) before treating them as final.</p>"
   }
  ],
  "questions": [
   {
    "q": "Consider the following statements about the Delhi Sultanate's administration:\n1. The iqta system assigned revenue of territories to nobles in lieu of salary.\n2. Alauddin Khalji introduced the branding of horses (dagh) and descriptive rolls (chehra).\n3. Muhammad bin Tughlaq shifted the capital from Delhi to Daulatabad.\nSelect the correct answer.",
    "options": [
     "1, 2 and 3",
     "1 and 2 only",
     "1 and 3 only",
     "2 and 3 only"
    ],
    "answer": 0,
    "expl": "Iqta (Iltutmish systematised it), Alauddin's dagh-chehra military reforms, and Tughlaq's Daulatabad transfer (1327) are all established Sultanate features."
   },
   {
    "q": "Match the following Sultanate rulers with their associated measures:\nA. Alauddin Khalji — 1. Token currency\nB. Muhammad bin Tughlaq — 2. Market control regulations\nC. Firoz Shah Tughlaq — 3. Translation of Sanskrit works; founded cities\nD. Iltutmish — 4. Silver tanka and copper jital",
    "options": [
     "A-2, B-4, C-1, D-3",
     "A-3, B-1, C-2, D-4",
     "A-1, B-2, C-4, D-3",
     "A-2, B-1, C-3, D-4"
    ],
    "answer": 3,
    "expl": "Alauddin (market control), Muhammad Tughlaq (token currency), Firoz (translations, cities like Jaunpur/Hisar), Iltutmish (tanka-jital coinage)."
   },
   {
    "q": "The 'Chahalgani' (Corps of Forty) was a group of Turkish nobles created by:",
    "options": [
     "Qutbuddin Aibak",
     "Balban",
     "Razia Sultana",
     "Iltutmish"
    ],
    "answer": 3,
    "expl": "Iltutmish organised the Chahalgani; Balban later destroyed it to assert despotic kingship."
   },
   {
    "q": "Razia Sultana, the only woman ruler of the Delhi Sultanate, belonged to which dynasty?",
    "options": [
     "Tughlaq",
     "Sayyid",
     "Khalji",
     "Mamluk (Slave)"
    ],
    "answer": 3,
    "expl": "Razia (r. 1236–40) was Iltutmish's daughter of the Mamluk/Slave dynasty; the nobles deposed her for favouring the Abyssinian Yakut."
   },
   {
    "q": "Consider the following statements about Bhakti saints:\n1. Ramanuja propounded Vishishtadvaita.\n2. Kabir's verses are included in the Adi Granth.\n3. Chaitanya Mahaprabhu popularised Krishna bhakti in Bengal.\nSelect the correct answer.",
    "options": [
     "2 and 3 only",
     "1 and 3 only",
     "1 and 2 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "Ramanuja (Vishishtadvaita, 11th–12th c.), Kabir (verses in Guru Granth Sahib), and Chaitanya (Gaudiya Vaishnavism, sankirtan) are all correct."
   },
   {
    "q": "Match the following Bhakti philosophers with their doctrines:\nA. Shankaracharya — 1. Dvaita\nB. Ramanuja — 2. Advaita\nC. Madhvacharya — 3. Vishishtadvaita\nD. Vallabhacharya — 4. Shuddhadvaita",
    "options": [
     "A-1, B-2, C-3, D-4",
     "A-4, B-3, C-2, D-1",
     "A-2, B-3, C-1, D-4",
     "A-2, B-1, C-4, D-3"
    ],
    "answer": 2,
    "expl": "Shankara (Advaita/Kevaladvaita), Ramanuja (Vishishtadvaita), Madhva (Dvaita), Vallabha (Shuddhadvaita/Pushtimarga)."
   },
   {
    "q": "The Sufi silsila most associated with the doctrine of Wahdat-al-Wujud (unity of being) in India and with Sheikh Nizamuddin Auliya is the:",
    "options": [
     "Qadiri",
     "Suhrawardi",
     "Naqshbandi",
     "Chishti"
    ],
    "answer": 3,
    "expl": "The Chishti order (Muinuddin Chishti, Nizamuddin Auliya, Nasiruddin Chiragh) emphasised love, tolerance and Wahdat-al-Wujud; it kept distance from the state."
   },
   {
    "q": "Which of the following statements about the Vijayanagara Empire is/are correct?\n1. It was founded by Harihara and Bukka in 1336.\n2. Krishnadevaraya belonged to the Tuluva dynasty.\n3. The Battle of Talikota (1565) led to its decline.",
    "options": [
     "1 and 2 only",
     "1 and 3 only",
     "1, 2 and 3",
     "2 and 3 only"
    ],
    "answer": 2,
    "expl": "Vijayanagara (1336, Sangama brothers), Krishnadevaraya (Tuluva, 1509–29, author of Amuktamalyada), and Talikota (1565, confederacy of Deccan sultanates) are all correct."
   },
   {
    "q": "The famous Hazara Rama temple and the Vittala temple are located at:",
    "options": [
     "Thanjavur",
     "Hampi",
     "Warangal",
     "Kanchipuram"
    ],
    "answer": 1,
    "expl": "Hampi (Vijayanagara capital) hosts the Hazara Rama and Vittala temples; the stone chariot at Vittala is iconic."
   },
   {
    "q": "Consider the following statements about the Bahmani kingdom:\n1. It was founded by Alauddin Bahman Shah in 1347.\n2. Its capital was initially Gulbarga, later Bidar.\n3. Mahmud Gawan was its famous wazir.\nSelect the correct answer.",
    "options": [
     "1, 2 and 3",
     "1 and 2 only",
     "2 and 3 only",
     "1 and 3 only"
    ],
    "answer": 0,
    "expl": "Bahmani kingdom (1347, Alauddin Hasan Bahman Shah), capitals Gulbarga then Bidar (1429), and Mahmud Gawan's reforms (madrasa at Bidar) are all correct."
   },
   {
    "q": "The 'Ashtadiggajas' were the eight celebrated Telugu poets in the court of:",
    "options": [
     "Rajaraja I",
     "Krishnadevaraya",
     "Pulakeshin II",
     "Alauddin Khalji"
    ],
    "answer": 1,
    "expl": "Krishnadevaraya's court hosted the Ashtadiggajas including Allasani Peddana (author of Manucharitram); the king himself wrote Amuktamalyada."
   },
   {
    "q": "Which Mughal emperor built the city of Fatehpur Sikri?",
    "options": [
     "Babur",
     "Humayun",
     "Akbar",
     "Shah Jahan"
    ],
    "answer": 2,
    "expl": "Akbar built Fatehpur Sikri (1571) honouring Sheikh Salim Chishti; the Buland Darwaza commemorates his Gujarat conquest."
   },
   {
    "q": "Match the following Mughal rulers with their tombs' locations:\nA. Babur — 1. Sikandra (Agra)\nB. Humayun — 2. Kabul\nC. Akbar — 3. Delhi\nD. Aurangzeb — 4. Khuldabad (Maharashtra)",
    "options": [
     "A-3, B-2, C-1, D-4",
     "A-2, B-3, C-1, D-4",
     "A-1, B-2, C-3, D-4",
     "A-2, B-1, C-4, D-3"
    ],
    "answer": 1,
    "expl": "Babur (Kabul, Bagh-e Babur), Humayun (Delhi), Akbar (Sikandra), Aurangzeb (Khuldabad, Aurangabad) — unmarked simple grave."
   },
   {
    "q": "Consider the following statements about Akbar's administration:\n1. He introduced the mansabdari system.\n2. Todar Mal's zabti system was a land revenue settlement.\n3. He abolished the jizya in 1564.\nSelect the correct answer.",
    "options": [
     "1 and 2 only",
     "2 and 3 only",
     "1, 2 and 3",
     "1 and 3 only"
    ],
    "answer": 2,
    "expl": "Akbar's mansabdari (1571), Todar Mal's zabti/dahsala revenue system, and jizya abolition (1564; pilgrim tax 1563) are all correct."
   },
   {
    "q": "The 'Din-i Ilahi' promulgated by Akbar was primarily a:",
    "options": [
     "Land revenue manual",
     "Military code for mansabdars",
     "New religion with forced conversions",
     "Syncretic order (Tauhid-i-Ilahi) blending elements of various faiths"
    ],
    "answer": 3,
    "expl": "Din-i Ilahi (1582) was an eclectic spiritual order around Akbar, not a mass religion; it had few adherents (notably Birbal)."
   },
   {
    "q": "Which of the following statements about Shah Jahan's reign is/are correct?\n1. The Peacock Throne was commissioned during his reign.\n2. The Taj Mahal was built as a mausoleum for Mumtaz Mahal.\n3. He shifted the Mughal capital from Agra to Delhi (Shahjahanabad).",
    "options": [
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 3 only",
     "1 and 2 only"
    ],
    "answer": 0,
    "expl": "Shah Jahan: Peacock Throne (1635), Taj Mahal (1632–53), and the new capital Shahjahanabad with Red Fort and Jama Masjid — the peak of Mughal architecture."
   },
   {
    "q": "Aurangzeb reimposed the jizya in the year:",
    "options": [
     "1707",
     "1658",
     "1669",
     "1679"
    ],
    "answer": 3,
    "expl": "Aurangzeb reimposed jizya in 1679 (Akbar had abolished it in 1564); 1669 saw the ban on new temple construction orders."
   },
   {
    "q": "The 'Zabt' system of land revenue under the Mughals was based on:",
    "options": [
     "A fixed share of actual produce each year",
     "Revenue farming to the highest bidder",
     "Measurement of land and assessment on average produce of past ten years",
     "Tribute from vassal chiefs only"
    ],
    "answer": 2,
    "expl": "Zabti (Todar Mal's dahsala): measured land, classified soils, and fixed demand at one-third of the average produce of the last ten years, payable in cash."
   },
   {
    "q": "Consider the following statements about Shivaji:\n1. He was crowned Chhatrapati at Raigad in 1674.\n2. He established the Ashtapradhan council of eight ministers.\n3. His revenue system included chauth and sardeshmukhi levies.\nSelect the correct answer.",
    "options": [
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 3 only",
     "1 and 2 only"
    ],
    "answer": 0,
    "expl": "Shivaji's coronation (1674, Raigad), Ashtapradhan (Peshwa, Amatya etc.), and chauth (1/4) + sardeshmukhi (1/10) levies are all correct."
   },
   {
    "q": "The Third Battle of Panipat (1761) was fought between:",
    "options": [
     "Babur and Ibrahim Lodi",
     "The Mughals and the British",
     "The Marathas and the Nizam",
     "The Marathas and Ahmad Shah Abdali"
    ],
    "answer": 3,
    "expl": "Panipat III (14 January 1761): Ahmad Shah Abdali's Afghan coalition defeated the Marathas under Sadashivrao Bhau — halting Maratha northern expansion."
   },
   {
    "q": "Which of the following Sikh Gurus compiled the Adi Granth?",
    "options": [
     "Guru Tegh Bahadur",
     "Guru Arjan",
     "Guru Gobind Singh",
     "Guru Nanak"
    ],
    "answer": 1,
    "expl": "Guru Arjan compiled the Adi Granth (1604, installed at Harmandir Sahib); Guru Gobind Singh added Guru Tegh Bahadur's hymns, finalising the Guru Granth Sahib."
   },
   {
    "q": "The Khalsa was founded by Guru Gobind Singh in 1699 at:",
    "options": [
     "Patna Sahib",
     "Nanded",
     "Anandpur Sahib",
     "Amritsar"
    ],
    "answer": 2,
    "expl": "The Khalsa was created on Baisakhi 1699 at Anandpur Sahib with the Panj Pyare; the Guru Granth Sahib was declared the eternal Guru at Nanded (1708)."
   },
   {
    "q": "Consider the following statements about the Bhakti movement:\n1. The Alvars were Vaishnavite saints of Tamil Nadu.\n2. The Nayanars were Shaivite saints.\n3. Basavanna led the Virashaiva (Lingayat) movement in Karnataka.\nSelect the correct answer.",
    "options": [
     "1, 2 and 3",
     "1 and 3 only",
     "2 and 3 only",
     "1 and 2 only"
    ],
    "answer": 0,
    "expl": "Alvars (Vaishnava, Divya Prabandham), Nayanars (Shaiva, Tevaram), and Basavanna's 12th-century Virashaiva movement (Anubhava Mantapa) are all correct."
   },
   {
    "q": "The Qutb Minar was begun by Qutbuddin Aibak and completed by:",
    "options": [
     "Iltutmish",
     "Firoz Shah Tughlaq",
     "Alauddin Khalji",
     "Balban"
    ],
    "answer": 0,
    "expl": "Aibak began the Qutb Minar (c. 1199); Iltutmish completed it; Firoz Shah Tughlaq later repaired its damaged storeys."
   },
   {
    "q": "Which Sultan of Delhi is known as the 'Prince of Moneyers' for his extensive coinage reforms?",
    "options": [
     "Muhammad bin Tughlaq",
     "Iltutmish",
     "Sher Shah Suri",
     "Alauddin Khalji"
    ],
    "answer": 0,
    "expl": "Muhammad bin Tughlaq's token (bronze/copper) currency experiment (1329–30) earned him the title 'Prince of Moneyers'; Sher Shah issued the rupiya."
   },
   {
    "q": "Sher Shah Suri's administration is noted for:\n1. The introduction of the rupiya silver coin\n2. The Grand Trunk Road (Sadak-e-Azam)\n3. A systematic land revenue system based on measurement",
    "options": [
     "1 and 3 only",
     "1 and 2 only",
     "1, 2 and 3",
     "2 and 3 only"
    ],
    "answer": 2,
    "expl": "Sher Shah (1540–45): rupiya coin, Grand Trunk Road from Sonargaon to the Indus, and zabt-based revenue (later adapted by Akbar)."
   },
   {
    "q": "The 'Ibadat Khana' built by Akbar at Fatehpur Sikri was meant for:",
    "options": [
     "Religious discussions with scholars of various faiths",
     "Housing the imperial harem",
     "Storing the imperial treasury",
     "Training of war elephants"
    ],
    "answer": 0,
    "expl": "The Ibadat Khana (1575) hosted interfaith debates (ulama, Jesuits, Jains, Parsis, Hindus) that shaped Akbar's sulh-i-kul outlook."
   },
   {
    "q": "Consider the following statements about the Mughal mansabdari system:\n1. 'Zat' indicated personal rank and 'sawar' the cavalry contingent.\n2. Mansabdars were paid in cash or through jagirs.\n3. The system was hereditary.\nSelect the correct answer.",
    "options": [
     "1 and 2 only",
     "2 and 3 only",
     "1 and 3 only",
     "1, 2 and 3"
    ],
    "answer": 0,
    "expl": "Zat (personal status/salary) and sawar (horsemen maintained) defined a mansabdar; payment was cash or jagir (non-hereditary — jagirs were transferable and lapsed at death)."
   },
   {
    "q": "The famous Persian chronicle 'Akbarnama' was written by:",
    "options": [
     "Abul Fazl",
     "Gulbadan Begum",
     "Badauni",
     "Nizamuddin Ahmad"
    ],
    "answer": 0,
    "expl": "Abul Fazl's Akbarnama (with the Ain-i Akbari as its third volume) is the official history of Akbar's reign; Gulbadan wrote Humayunnama."
   },
   {
    "q": "Which of the following monuments was built by the Tughlaqs?",
    "options": [
     "Buland Darwaza",
     "Tughlaqabad Fort",
     "Alai Darwaza",
     "Humayun's Tomb"
    ],
    "answer": 1,
    "expl": "Ghiyasuddin Tughlaq built Tughlaqabad (1321); Alai Darwaza is Khalji, Humayun's Tomb early Mughal, Buland Darwaza Akbar's."
   },
   {
    "q": "The 'Rana Sanga' who fought Babur at the Battle of Khanwa (1527) was the ruler of:",
    "options": [
     "Marwar",
     "Mewar",
     "Gujarat",
     "Amber"
    ],
    "answer": 1,
    "expl": "Rana Sanga of Mewar led the Rajput confederacy at Khanwa (1527); Babur's victory consolidated Mughal rule after Panipat (1526)."
   },
   {
    "q": "Consider the following statements about the Maratha Confederacy in the 18th century:\n1. The Peshwa became the de facto ruler after Shahu.\n2. The Maratha sardars (Scindia, Holkar, Gaekwad, Bhonsle) controlled different regions.\n3. The Marathas collected chauth from Mughal territories.\nSelect the correct answer.",
    "options": [
     "1, 2 and 3",
     "1 and 2 only",
     "1 and 3 only",
     "2 and 3 only"
    ],
    "answer": 0,
    "expl": "Post-Shahu (d. 1749), Peshwa dominance; the confederacy's great sardar houses; and chauth/sardeshmukhi exactions across Mughal lands are all correct."
   },
   {
    "q": "The 'Treaty of Purandar' (1665) was signed between Shivaji and:",
    "options": [
     "The Portuguese",
     "Jai Singh I (on behalf of Aurangzeb)",
     "Aurangzeb directly",
     "Shaista Khan"
    ],
    "answer": 1,
    "expl": "Jai Singh I forced Shivaji to sign Purandar (1665) — ceding 23 forts; Shivaji's 1666 Agra visit and escape followed."
   },
   {
    "q": "Which of the following statements about Amir Khusrau is/are correct?\n1. He was a disciple of Nizamuddin Auliya.\n2. He is credited with the invention of the sitar and tabla.\n3. He wrote the 'Khazain-ul-Futuh' on Alauddin Khalji's conquests.",
    "options": [
     "1 and 3 only",
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 2 only"
    ],
    "answer": 0,
    "expl": "Khusrau (1253–1325), 'Tuti-i-Hind', was Nizamuddin's murid and wrote Khazain-ul-Futuh; the sitar/tabla attribution is traditional but historically debated, so statement 2 is marked uncertain."
   },
   {
    "q": "The Golconda fort and the Charminar are associated with which dynasty?",
    "options": [
     "Adil Shahi",
     "Qutb Shahi",
     "Bahmani",
     "Nizam Shahi"
    ],
    "answer": 1,
    "expl": "The Qutb Shahis of Golconda (1518–1687); Muhammad Quli Qutb Shah built Hyderabad and the Charminar (1591)."
   },
   {
    "q": "Consider the following statements about the Chola temples:\n1. They represent the Dravida style of temple architecture.\n2. The vimana is the towering spire over the sanctum.\n3. Bronze Nataraja images are a Chola hallmark.\nSelect the correct answer.",
    "options": [
     "2 and 3 only",
     "1 and 3 only",
     "1, 2 and 3",
     "1 and 2 only"
    ],
    "answer": 2,
    "expl": "Chola temples are Dravida style (vimana, gopuram, mandapa); the Brihadeshwara's vimana rises 66 m; Chola bronze Natarajas are world-famous."
   },
   {
    "q": "The 'Kitab-ul-Hind' (Tahqiq-i-Hind), an account of India, was written by:",
    "options": [
     "Firdausi",
     "Al-Masudi",
     "Ibn Battuta",
     "Al-Biruni"
    ],
    "answer": 3,
    "expl": "Al-Biruni (accompanied Mahmud of Ghazni) wrote Tahqiq-i-Hind (c. 1030) on Indian religion, philosophy and sciences."
   },
   {
    "q": "Ibn Battuta, the Moroccan traveller, visited India during the reign of:",
    "options": [
     "Akbar",
     "Muhammad bin Tughlaq",
     "Alauddin Khalji",
     "Firoz Shah Tughlaq"
    ],
    "answer": 1,
    "expl": "Ibn Battuta (1333–42) served as qazi under Muhammad bin Tughlaq and left the Rihla account of the Sultanate."
   },
   {
    "q": "Which of the following is a correct chronological order of the Delhi Sultanate dynasties?",
    "options": [
     "Slave – Khalji – Tughlaq – Sayyid – Lodi",
     "Slave – Khalji – Sayyid – Tughlaq – Lodi",
     "Khalji – Slave – Tughlaq – Lodi – Sayyid",
     "Slave – Tughlaq – Khalji – Sayyid – Lodi"
    ],
    "answer": 0,
    "expl": "Mamluk/Slave (1206) → Khalji (1290) → Tughlaq (1320) → Sayyid (1414) → Lodi (1451–1526)."
   },
   {
    "q": "The 'Nur Jahan' junta during Jahangir's reign is significant because:",
    "options": [
     "She issued coins and farmans in her own name, wielding de facto power",
     "She led the Mughal army at Kandahar",
     "She founded the Din-i Ilahi",
     "She abolished the mansabdari system"
    ],
    "answer": 0,
    "expl": "Nur Jahan (married 1611) issued coins jointly with Jahangir and ran the administration with her father Itimad-ud-Daula and brother Asaf Khan during Jahangir's decline."
   }
  ]
 },
 {
  "id": "upsc-bank-modern",
  "title": "Modern History — Prelims Question Bank (49 MCQs)",
  "subject": "History",
  "tag": "Prelims GS I · Practice bank",
  "blurb": "Conquest to Partition: revenue systems, reform movements, 1857, the Congress era and Gandhian movements.",
  "intro": "A 49-question practice bank on modern history, written for UPSC Prelims 2026–27. Every question carries a full explanation; solve in timed sets, log your errors, and revise the explanations — not just the answers.",
  "sections": [
   {
    "h": "How to use this bank",
    "body": "<p>Attempt questions in sets of 25 under timed conditions, then read every explanation — including for questions you got right. A few explanations flag figures or fast-moving developments as approximate or as-reported; always cross-check those against official sources (Budget documents, PIB, ministry sites) before treating them as final.</p>"
   }
  ],
  "questions": [
   {
    "q": "Consider the following statements about the Battle of Plassey (1757):\n1. It was fought between the British East India Company and Siraj-ud-Daulah.\n2. Mir Jafar's defection was decisive for the British victory.\n3. It established British political supremacy in Bengal.\nSelect the correct answer.",
    "options": [
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 2 only",
     "1 and 3 only"
    ],
    "answer": 0,
    "expl": "Plassey (23 June 1757): Clive vs Siraj-ud-Daulah; Mir Jafar, Rai Durlabh and Jagat Seth conspired; it made the Company the kingmaker in Bengal."
   },
   {
    "q": "The Battle of Buxar (1764) was significant because it:",
    "options": [
     "Led to the annexation of Awadh",
     "Ended French power in India",
     "Established British control over Mysore",
     "Gave the Company the Diwani of Bengal, Bihar and Orissa via the Treaty of Allahabad"
    ],
    "answer": 3,
    "expl": "Buxar (1764): Hector Munro defeated the combined forces of Mir Qasim, Shuja-ud-Daula and Shah Alam II; the 1765 Treaty of Allahabad granted the Diwani."
   },
   {
    "q": "Match the following Governor-Generals with their associated events:\nA. Warren Hastings — 1. Abolition of Sati\nB. William Bentinck — 2. First Anglo-Maratha War\nC. Dalhousie — 3. Doctrine of Lapse\nD. Cornwallis — 4. Permanent Settlement",
    "options": [
     "A-4, B-1, C-3, D-2",
     "A-2, B-4, C-1, D-3",
     "A-1, B-2, C-4, D-3",
     "A-2, B-1, C-3, D-4"
    ],
    "answer": 3,
    "expl": "Hastings (First Anglo-Maratha War, 1775–82), Bentinck (Sati abolition 1829), Dalhousie (Doctrine of Lapse, annexations), Cornwallis (Permanent Settlement 1793)."
   },
   {
    "q": "The 'Doctrine of Lapse' was used to annex which of the following states?\n1. Satara\n2. Jhansi\n3. Nagpur\n4. Awadh",
    "options": [
     "1, 2 and 4 only",
     "1, 2 and 3 only",
     "1, 3 and 4 only",
     "2, 3 and 4 only"
    ],
    "answer": 1,
    "expl": "Dalhousie annexed Satara (1848), Jhansi (1854) and Nagpur (1854) under the Doctrine of Lapse; Awadh was annexed (1856) on grounds of misgovernance."
   },
   {
    "q": "Consider the following statements about the Permanent Settlement (1793):\n1. It was introduced by Lord Cornwallis in Bengal, Bihar and Orissa.\n2. Zamindars were recognised as proprietors of land.\n3. The revenue demand was fixed permanently.\nSelect the correct answer.",
    "options": [
     "2 and 3 only",
     "1 and 2 only",
     "1 and 3 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "Cornwallis's 1793 settlement made zamindars landowners with a fixed, permanent revenue demand — creating absentee landlordism and peasant distress."
   },
   {
    "q": "The Ryotwari system of land revenue was pioneered by:",
    "options": [
     "Holt Mackenzie in the North-Western Provinces",
     "Lord Cornwallis in Bengal",
     "Lord Dalhousie in Punjab",
     "Thomas Munro in Madras"
    ],
    "answer": 3,
    "expl": "Munro's Ryotwari (1820s, Madras) settled revenue directly with the ryot; Mackenzie devised the Mahalwari system in the NW Provinces."
   },
   {
    "q": "Which of the following statements about the Revolt of 1857 is/are correct?\n1. It began at Meerut on 10 May 1857.\n2. Bahadur Shah Zafar was proclaimed the symbolic leader.\n3. The revolt failed due to lack of central organisation and modern arms.\nSelect the correct answer.",
    "options": [
     "2 and 3 only",
     "1 and 2 only",
     "1, 2 and 3",
     "1 and 3 only"
    ],
    "answer": 2,
    "expl": "The sepoys mutinied at Meerut (10 May 1857), marched to Delhi, proclaimed the Mughal emperor; disunity, limited spread and British resources doomed it."
   },
   {
    "q": "Match the following leaders of the 1857 Revolt with their centres:\nA. Rani Lakshmibai — 1. Kanpur\nB. Nana Saheb — 2. Jhansi\nC. Kunwar Singh — 3. Lucknow\nD. Begum Hazrat Mahal — 4. Arrah (Bihar)",
    "options": [
     "A-1, B-2, C-3, D-4",
     "A-2, B-1, C-4, D-3",
     "A-4, B-1, C-2, D-3",
     "A-2, B-4, C-1, D-3"
    ],
    "answer": 1,
    "expl": "Jhansi (Lakshmibai), Kanpur (Nana Saheb/Tantia Tope), Arrah (Kunwar Singh, aged 80), Lucknow (Begum Hazrat Mahal)."
   },
   {
    "q": "The British Crown assumed direct control of India through:",
    "options": [
     "Pitt's India Act of 1784",
     "The Regulating Act of 1773",
     "The Indian Councils Act, 1861",
     "The Government of India Act, 1858"
    ],
    "answer": 3,
    "expl": "The 1858 Act ended Company rule after the Revolt, creating the Secretary of State for India and the Viceroy (Canning, the first)."
   },
   {
    "q": "Consider the following statements about the Indian National Congress's founding:\n1. It was founded in 1885 at Bombay.\n2. A.O. Hume played a key role in its formation.\n3. W.C. Bonnerjee was its first president.\nSelect the correct answer.",
    "options": [
     "1 and 2 only",
     "1 and 3 only",
     "1, 2 and 3",
     "2 and 3 only"
    ],
    "answer": 2,
    "expl": "INC founded December 1885 at Gokuldas Tejpal Sanskrit College, Bombay; Hume was the guiding spirit; W.C. Bonnerjee presided (72 delegates)."
   },
   {
    "q": "The 'Safety Valve' theory regarding the formation of the Congress is associated with:",
    "options": [
     "Lala Lajpat Rai",
     "Gopal Krishna Gokhale",
     "A.O. Hume's biographer William Wedderburn",
     "Dadabhai Naoroji"
    ],
    "answer": 2,
    "expl": "The safety-valve thesis (Hume founded Congress to vent Indian discontent) was popularised by Wedderburn's biography of Hume; later historians debate it."
   },
   {
    "q": "Dadabhai Naoroji's 'Drain Theory' was expounded in his book:",
    "options": [
     "India Today",
     "Gokhale's Speeches",
     "Poverty and Un-British Rule in India",
     "The Economic History of India"
    ],
    "answer": 2,
    "expl": "Naoroji's 'Poverty and Un-British Rule in India' (1901) quantified the drain of wealth to Britain."
   },
   {
    "q": "The Partition of Bengal (1905) was annulled in the year:",
    "options": [
     "1916",
     "1909",
     "1919",
     "1911"
    ],
    "answer": 3,
    "expl": "Curzon's 1905 partition was revoked at the 1911 Delhi Durbar (George V), with the capital shifted from Calcutta to Delhi."
   },
   {
    "q": "Consider the following statements about the Swadeshi Movement:\n1. It was launched in response to the Partition of Bengal.\n2. It promoted boycott of foreign goods and national education.\n3. The Surat Split (1907) weakened the movement.\nSelect the correct answer.",
    "options": [
     "2 and 3 only",
     "1 and 3 only",
     "1 and 2 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "Swadeshi (1905): anti-partition agitation, boycott, national schools (e.g., Bengal National College); the 1907 Surat split divided Moderates and Extremists."
   },
   {
    "q": "The Surat Split of 1907 divided the Congress into Moderates and Extremists over the issue of:",
    "options": [
     "The pace and methods of the anti-partition agitation",
     "Support for World War I",
     "Council entry",
     "Separate electorates"
    ],
    "answer": 0,
    "expl": "At Surat (1907), Moderates (Gokhale, Mehta) and Extremists (Tilak, Lajpat Rai, Bipin Pal) split over extending boycott beyond Bengal and the presidency question."
   },
   {
    "q": "The Lucknow Pact (1916) is significant because it:",
    "options": [
     "Created separate electorates for the first time",
     "Brought the Congress and Muslim League together on constitutional reforms",
     "Accepted complete independence as the goal",
     "Ended the Non-Cooperation Movement"
    ],
    "answer": 1,
    "expl": "The 1916 Lucknow Pact united Congress and League (and reunited Moderates–Extremists) with joint reform demands; the League accepted Congress's scheme."
   },
   {
    "q": "The Home Rule Movement was launched by:",
    "options": [
     "Bal Gangadhar Tilak and Annie Besant",
     "Mahatma Gandhi",
     "Motilal Nehru",
     "C.R. Das"
    ],
    "answer": 0,
    "expl": "Tilak (April 1916, Poona) and Besant (September 1916, Madras) ran parallel Home Rule Leagues demanding self-government within the Empire."
   },
   {
    "q": "Consider the following statements about the Jallianwala Bagh massacre:\n1. It occurred on 13 April 1919 at Amritsar.\n2. General Dyer ordered firing on an unarmed gathering.\n3. The Hunter Committee condemned Dyer's action.\nSelect the correct answer.",
    "options": [
     "2 and 3 only",
     "1 and 3 only",
     "1, 2 and 3",
     "1 and 2 only"
    ],
    "answer": 3,
    "expl": "Jallianwala Bagh (Baisakhi, 13 April 1919): Dyer's troops killed hundreds; the Hunter Committee (majority) criticised Dyer but the House of Lords and Morning Post praised him — statement 3 overstates a unanimous condemnation."
   },
   {
    "q": "The Non-Cooperation Movement was withdrawn by Gandhi after:",
    "options": [
     "The arrest of Tilak",
     "The Simon Commission boycott",
     "The Chauri Chaura incident (1922)",
     "The Jallianwala Bagh massacre"
    ],
    "answer": 2,
    "expl": "After Chauri Chaura (5 February 1922), where a mob killed 22 policemen, Gandhi suspended Non-Cooperation — a decision criticised by many Congressmen."
   },
   {
    "q": "The Simon Commission (1927) was boycotted because:",
    "options": [
     "It was headed by a Conservative",
     "It recommended dyarchy",
     "It had no Indian member",
     "It opposed dominion status"
    ],
    "answer": 2,
    "expl": "The all-white Simon Commission (7 British MPs) to review the 1919 Act was boycotted; Lala Lajpat Rai died after a lathi charge during protests."
   },
   {
    "q": "The Nehru Report (1928) demanded:",
    "options": [
     "Partition of India",
     "Complete independence",
     "Dominion status for India",
     "Separate electorates"
    ],
    "answer": 2,
    "expl": "Motilal Nehru's committee report (1928) asked for dominion status with joint electorates; Jinnah's 14 points responded to it."
   },
   {
    "q": "At the Lahore session of the Congress (1929), presided over by Jawaharlal Nehru, the resolution of 'Purna Swaraj' was adopted, and the first Independence Day was observed on:",
    "options": [
     "2 October 1930",
     "26 January 1930",
     "15 August 1930",
     "26 January 1931"
    ],
    "answer": 1,
    "expl": "Lahore (December 1929): Purna Swaraj resolution; 26 January 1930 observed as Independence Day — later chosen as Republic Day."
   },
   {
    "q": "The Dandi March (1930) was undertaken to protest the:",
    "options": [
     "Salt tax",
     "Arms Act",
     "Simon Commission",
     "Rowlatt Act"
    ],
    "answer": 0,
    "expl": "Gandhi's 240-mile march (12 March–6 April 1930) from Sabarmati to Dandi broke the salt law, launching Civil Disobedience."
   },
   {
    "q": "The Gandhi-Irwin Pact (1931) is also known as the:",
    "options": [
     "Lucknow Pact",
     "Poona Pact",
     "Simla Pact",
     "Delhi Pact"
    ],
    "answer": 3,
    "expl": "The Delhi Pact (5 March 1931): Civil Disobedience suspended; Congress to attend the Second Round Table Conference; political prisoners released (not Bhagat Singh)."
   },
   {
    "q": "The Poona Pact (1932) was signed between Gandhi and B.R. Ambedkar on the issue of:",
    "options": [
     "Separate electorates for depressed classes",
     "Land reforms",
     "Temple entry",
     "Labour rights"
    ],
    "answer": 0,
    "expl": "After Gandhi's fast against the Communal Award's separate electorates, the Poona Pact gave reserved seats with joint electorates for depressed classes."
   },
   {
    "q": "Consider the following statements about the Government of India Act, 1935:\n1. It provided for an All-India Federation.\n2. It introduced provincial autonomy.\n3. It abolished dyarchy at the provinces but retained it at the Centre.\nSelect the correct answer.",
    "options": [
     "1 and 3 only",
     "1, 2 and 3",
     "1 and 2 only",
     "2 and 3 only"
    ],
    "answer": 1,
    "expl": "The 1935 Act: proposed federation (never formed — princes stayed out), provincial autonomy (Congress ministries 1937), and dyarchy shifted to the Centre."
   },
   {
    "q": "The 'August Offer' (1940) was made by:",
    "options": [
     "Lord Mountbatten",
     "Lord Linlithgow",
     "Lord Wavell",
     "Stafford Cripps"
    ],
    "answer": 1,
    "expl": "Linlithgow's August Offer (1940): dominion status as the goal, expansion of the Viceroy's council — rejected by Congress and League."
   },
   {
    "q": "The Cripps Mission (1942) proposed:",
    "options": [
     "Partition of India",
     "A constituent assembly with universal franchise",
     "Immediate transfer of power",
     "Dominion status after the war with a constitution-making body"
    ],
    "answer": 3,
    "expl": "Cripps offered post-war dominion status and a constitution-making body; Gandhi called it 'a post-dated cheque on a crashing bank'."
   },
   {
    "q": "The Quit India Movement was launched on:",
    "options": [
     "1 August 1942",
     "15 August 1942",
     "8 August 1942",
     "9 August 1942"
    ],
    "answer": 2,
    "expl": "The AICC adopted the Quit India resolution on 8 August 1942 at Gowalia Tank, Bombay ('Do or Die'); leaders were arrested on 9 August."
   },
   {
    "q": "The Indian National Army (Azad Hind Fauj) was first conceived by:",
    "options": [
     "Captain Lakshmi Sehgal",
     "Mohan Singh",
     "Subhas Chandra Bose",
     "Rash Behari Bose"
    ],
    "answer": 1,
    "expl": "Mohan Singh raised the first INA from POWs in 1942; Rash Behari Bose handed leadership to Subhas Bose in 1943 (Singapore)."
   },
   {
    "q": "The INA trials at the Red Fort (1945–46) involved which three officers?",
    "options": [
     "Shah Nawaz Khan, Prem Sahgal, Gurbaksh Singh Dhillon",
     "Mohan Singh, Lakshmi Sehgal, Shah Nawaz Khan",
     "Prem Sahgal, Dhillon, Rash Behari Bose",
     "Gurbaksh Dhillon, Mohan Singh, Lakshmi Sehgal"
    ],
    "answer": 0,
    "expl": "The famous first INA trial: Major General Shah Nawaz Khan, Colonel Prem Sahgal, Colonel Gurbaksh Singh Dhillon — defended by Bhulabhai Desai."
   },
   {
    "q": "The Cabinet Mission Plan (1946) proposed:",
    "options": [
     "Immediate partition",
     "Direct British withdrawal by 1947",
     "A united India with a weak Centre and provincial grouping",
     "Dominion status without a constituent assembly"
    ],
    "answer": 2,
    "expl": "The Cabinet Mission's May 1946 plan: a three-tier federation with grouping of provinces (A, B, C) — accepted by Congress and League initially, then wrecked over grouping."
   },
   {
    "q": "The Mountbatten Plan (3 June 1947) is also known as:",
    "options": [
     "The August Offer",
     "The Wavell Plan",
     "The Cripps Proposal",
     "The Partition Plan"
    ],
    "answer": 3,
    "expl": "Mountbatten's 3 June Plan provided for partition with referendums/assemblies deciding — enacted as the Indian Independence Act, 1947."
   },
   {
    "q": "India's Constituent Assembly adopted the national flag on:",
    "options": [
     "24 January 1950",
     "22 July 1947",
     "26 January 1950",
     "15 August 1947"
    ],
    "answer": 1,
    "expl": "The tricolour (saffron-white-green with the navy-blue Ashoka Chakra) was adopted 22 July 1947; Jana Gana Mana and Vande Mataram on 24 January 1950."
   },
   {
    "q": "Consider the following statements about the socio-religious reform movements:\n1. Raja Ram Mohan Roy founded the Brahmo Samaj in 1828.\n2. Dayananda Saraswati founded the Arya Samaj in 1875.\n3. Swami Vivekananda founded the Ramakrishna Mission in 1897.\nSelect the correct answer.",
    "options": [
     "1, 2 and 3",
     "1 and 3 only",
     "2 and 3 only",
     "1 and 2 only"
    ],
    "answer": 0,
    "expl": "Brahmo Samaj (1828, Roy), Arya Samaj (1875, Dayananda — 'Back to the Vedas'), Ramakrishna Mission (1897, Vivekananda) are all correct."
   },
   {
    "q": "Jyotiba Phule founded the Satyashodhak Samaj in 1873 for:",
    "options": [
     "The uplift of lower castes and women in Maharashtra",
     "Promotion of English education",
     "Hindu-Muslim unity",
     "Temperance reform"
    ],
    "answer": 0,
    "expl": "Phule's Satyashodhak Samaj fought caste oppression; with Savitribai he opened schools for girls and lower castes (1848)."
   },
   {
    "q": "The Theosophical Society's headquarters in India was established at Adyar (Madras) by:",
    "options": [
     "Annie Besant alone",
     "A.O. Hume",
     "Annie Besant and H.S. Olcott",
     "Madame Blavatsky and H.S. Olcott"
    ],
    "answer": 3,
    "expl": "Blavatsky and Olcott founded the Theosophical Society (New York, 1875) and moved its headquarters to Adyar in 1882; Besant joined later (1889)."
   },
   {
    "q": "Which of the following statements about the Deccan Riots (1875) is/are correct?\n1. They were directed against moneylenders.\n2. They led to the Deccan Agriculturists' Relief Act, 1879.\n3. They began in Supa village of Poona district.",
    "options": [
     "1 and 2 only",
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 3 only"
    ],
    "answer": 1,
    "expl": "The 1875 Deccan uprising targeted Marwari/Gujarati sahukars; it began at Supa (Poona) and prompted the 1879 Relief Act."
   },
   {
    "q": "The Indigo Revolt (1859–60) in Bengal was led by:",
    "options": [
     "Titu Mir",
     "Birsa Munda",
     "Digambar Biswas and Bishnu Biswas",
     "Sidu and Kanhu"
    ],
    "answer": 2,
    "expl": "The Biswas brothers of Nadia led the raiyats' refusal to sow indigo; Harish Chandra Mukherjee's Hindoo Patriot publicised it; Dinabandhu Mitra wrote Nil Darpan."
   },
   {
    "q": "Birsa Munda's Ulgulan (1899–1900) was a tribal uprising in the region of:",
    "options": [
     "Bastar",
     "Chotanagpur",
     "Khandesh",
     "Santal Parganas"
    ],
    "answer": 1,
    "expl": "Birsa's Munda rebellion centred on Chotanagpur (Ranchi); the Santhal Rebellion (1855–56, Sidu-Kanhu) was in the Rajmahal hills."
   },
   {
    "q": "The 'Pabna Agrarian League' (1873) was formed to:",
    "options": [
     "Resist enhanced rents by zamindars in East Bengal",
     "Demand separate electorates",
     "Promote indigo cultivation",
     "Boycott British courts"
    ],
    "answer": 0,
    "expl": "Pabna raiyats organised against zamindari oppression; the movement fed into the Bengal Tenancy Act, 1885."
   },
   {
    "q": "Consider the following statements about the Rowlatt Act (1919):\n1. It allowed detention without trial for up to two years.\n2. Gandhi launched a nationwide satyagraha against it.\n3. It was officially called the Anarchical and Revolutionary Crimes Act.\nSelect the correct answer.",
    "options": [
     "1 and 3 only",
     "1 and 2 only",
     "1, 2 and 3",
     "2 and 3 only"
    ],
    "answer": 2,
    "expl": "The Rowlatt Act (based on the Sedition Committee) permitted detention without trial; Gandhi's April 1919 satyagraha was his first all-India agitation."
   },
   {
    "q": "The 'Khilafat Movement' was launched to protest:",
    "options": [
     "The Partition of Bengal",
     "The Simon Commission",
     "The dismemberment of the Ottoman Caliphate after World War I",
     "The Rowlatt Act"
    ],
    "answer": 2,
    "expl": "Ali brothers' Khilafat movement (1919) defended the Caliph; Gandhi yoked it to Non-Cooperation for Hindu-Muslim unity."
   },
   {
    "q": "Which of the following was the first newspaper published in India?",
    "options": [
     "The Hindu",
     "Samachar Darpan",
     "Amrita Bazar Patrika",
     "Bengal Gazette"
    ],
    "answer": 3,
    "expl": "James Augustus Hicky's Bengal Gazette (1780, Calcutta) was India's first newspaper; Samachar Darpan (1818) was the first Bengali paper."
   },
   {
    "q": "The Vernacular Press Act (1878) was repealed by:",
    "options": [
     "Lord Curzon",
     "Lord Dufferin",
     "Lord Ripon",
     "Lord Lytton"
    ],
    "answer": 2,
    "expl": "Lytton's 1878 'gagging Act' targeted the vernacular press; Ripon repealed it in 1882."
   },
   {
    "q": "Consider the following statements about the Indian Councils Act, 1909 (Morley-Minto Reforms):\n1. It introduced separate electorates for Muslims.\n2. It increased the size of legislative councils.\n3. It introduced dyarchy in the provinces.\nSelect the correct answer.",
    "options": [
     "1 and 3 only",
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 2 only"
    ],
    "answer": 3,
    "expl": "The 1909 Act gave separate electorates and enlarged councils; dyarchy came only with the 1919 Act (Montagu-Chelmsford)."
   },
   {
    "q": "The Montagu-Chelmsford Reforms (1919) introduced:",
    "options": [
     "Provincial autonomy",
     "Dyarchy in the provinces",
     "Separate electorates for Sikhs",
     "A federal court"
    ],
    "answer": 1,
    "expl": "The 1919 Act's dyarchy split provincial subjects into reserved and transferred; separate electorates were extended to Sikhs, Christians, Anglo-Indians."
   },
   {
    "q": "Which of the following statements about the Round Table Conferences is/are correct?\n1. Three sessions were held in London (1930–32).\n2. Gandhi attended only the Second session.\n3. B.R. Ambedkar attended all three sessions.",
    "options": [
     "1 and 2 only",
     "2 and 3 only",
     "1, 2 and 3",
     "1 and 3 only"
    ],
    "answer": 2,
    "expl": "Three RTCs (1930, 1931, 1932); Gandhi attended only the second (1931) after the Gandhi-Irwin Pact; Ambedkar attended all three, clashing with Gandhi over separate electorates."
   },
   {
    "q": "The 'Communal Award' (1932) was announced by:",
    "options": [
     "Lord Irwin",
     "Winston Churchill",
     "Lord Willingdon",
     "Ramsay MacDonald"
    ],
    "answer": 3,
    "expl": "MacDonald's Communal Award (August 1932) extended separate electorates to depressed classes — triggering Gandhi's Yeravada fast and the Poona Pact."
   }
  ]
 },
 {
  "id": "upsc-bank-physgeo",
  "title": "Physical Geography — Prelims Question Bank (44 MCQs)",
  "subject": "Geography",
  "tag": "Prelims GS I · Practice bank",
  "blurb": "Landforms, climate, oceans and map work — the conceptual core of the geography paper.",
  "intro": "A 44-question practice bank on physical geography, written for UPSC Prelims 2026–27. Every question carries a full explanation; solve in timed sets, log your errors, and revise the explanations — not just the answers.",
  "sections": [
   {
    "h": "How to use this bank",
    "body": "<p>Attempt questions in sets of 25 under timed conditions, then read every explanation — including for questions you got right. A few explanations flag figures or fast-moving developments as approximate or as-reported; always cross-check those against official sources (Budget documents, PIB, ministry sites) before treating them as final.</p>"
   }
  ],
  "questions": [
   {
    "q": "Consider the following statements about the Earth's interior:\n1. The Mohorovicic discontinuity separates the crust from the mantle.\n2. The Gutenberg discontinuity separates the mantle from the core.\n3. The inner core is solid while the outer core is liquid.\nSelect the correct answer.",
    "options": [
     "1 and 3 only",
     "2 and 3 only",
     "1 and 2 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "Moho (crust–mantle), Gutenberg (mantle–core at ~2900 km), and a solid inner/liquid outer core are the standard seismic discontinuities."
   },
   {
    "q": "The 'Ring of Fire' is associated with:",
    "options": [
     "The Atlantic mid-ocean ridge",
     "The Indian Ocean",
     "The Mediterranean region",
     "The Pacific Ocean basin"
    ],
    "answer": 3,
    "expl": "The circum-Pacific belt hosts ~75% of the world's active volcanoes and ~90% of earthquakes due to convergent plate margins."
   },
   {
    "q": "Match the following types of volcanoes with their characteristics:\nA. Shield volcano — 1. Explosive, steep-sided\nB. Stratovolcano — 2. Broad, gentle slopes of basaltic lava\nC. Cinder cone — 3. Small, steep piles of volcanic debris",
    "options": [
     "A-2, B-3, C-1",
     "A-1, B-2, C-3",
     "A-3, B-1, C-2",
     "A-2, B-1, C-3"
    ],
    "answer": 3,
    "expl": "Shield (Mauna Loa — fluid basalt), stratovolcano/composite (Fujiyama — alternating layers), cinder cone (small, fragmental)."
   },
   {
    "q": "Which of the following statements about plate tectonics is/are correct?\n1. The Himalayas were formed by the collision of the Indian and Eurasian plates.\n2. The Mid-Atlantic Ridge is a divergent plate boundary.\n3. The San Andreas Fault is a transform boundary.",
    "options": [
     "1 and 3 only",
     "1 and 2 only",
     "2 and 3 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "Himalayas (continent–continent convergence), Mid-Atlantic Ridge (seafloor spreading/divergence), San Andreas (transform/strike-slip) are textbook examples."
   },
   {
    "q": "The deepest known point in the world's oceans, the Challenger Deep, is located in the:",
    "options": [
     "Tonga Trench",
     "Mariana Trench",
     "Java Trench",
     "Puerto Rico Trench"
    ],
    "answer": 1,
    "expl": "Challenger Deep (~10,900 m) in the Mariana Trench (western Pacific) is the ocean's deepest point; Java Trench is the Indian Ocean's deepest."
   },
   {
    "q": "Consider the following statements about ocean currents:\n1. The Gulf Stream is a warm current in the North Atlantic.\n2. The Humboldt (Peru) Current is a cold current along South America's west coast.\n3. The Agulhas Current flows along Africa's southeast coast.\nSelect the correct answer.",
    "options": [
     "1 and 2 only",
     "1, 2 and 3",
     "1 and 3 only",
     "2 and 3 only"
    ],
    "answer": 1,
    "expl": "Gulf Stream (warm, North Atlantic), Humboldt/Peru (cold, upwelling, anchovy fisheries), Agulhas (warm, SE Africa) are all correctly described."
   },
   {
    "q": "El Niño is characterised by:",
    "options": [
     "Warming of the eastern Pacific off Peru, weakening trade winds",
     "Strengthening of the Walker circulation",
     "Increased upwelling off South America",
     "Cooling of the western Pacific near Indonesia"
    ],
    "answer": 0,
    "expl": "El Niño: anomalous warming of the eastern equatorial Pacific, weakened trades and Walker cell — often linked to weak Indian monsoons."
   },
   {
    "q": "Which of the following statements about the layers of the atmosphere is/are correct?\n1. Temperature decreases with height in the troposphere.\n2. The ozone layer is located in the stratosphere.\n3. Meteors burn up in the mesosphere.",
    "options": [
     "1, 2 and 3",
     "1 and 3 only",
     "2 and 3 only",
     "1 and 2 only"
    ],
    "answer": 0,
    "expl": "Troposphere (lapse rate ~6.5°C/km), stratospheric ozone (15–35 km), mesosphere (meteor burn-up, coldest layer) are all correct."
   },
   {
    "q": "The 'jet streams' are:",
    "options": [
     "Winds blowing from the poles to the equator",
     "Ocean currents in the Southern Ocean",
     "Seasonal winds of the Indian Ocean",
     "Fast-flowing narrow air currents in the upper troposphere"
    ],
    "answer": 3,
    "expl": "Jet streams are narrow, high-speed winds (100–400 km/h) near the tropopause; the subtropical jet influences India's winter weather and monsoon onset."
   },
   {
    "q": "Consider the following statements about tropical cyclones:\n1. They form over warm ocean waters above 27°C.\n2. They rotate anticlockwise in the Northern Hemisphere.\n3. The eye is a region of calm at the centre.\nSelect the correct answer.",
    "options": [
     "1 and 3 only",
     "1 and 2 only",
     "1, 2 and 3",
     "2 and 3 only"
    ],
    "answer": 2,
    "expl": "Warm SSTs (>27°C), Coriolis-driven anticlockwise rotation (NH), and a calm eye are the defining features of tropical cyclones."
   },
   {
    "q": "Match the following regional names of tropical cyclones:\nA. Typhoon — 1. North Indian Ocean\nB. Cyclone — 2. Northwest Pacific\nC. Hurricane — 3. North Atlantic and Northeast Pacific",
    "options": [
     "A-2, B-1, C-3",
     "A-2, B-3, C-1",
     "A-3, B-1, C-2",
     "A-1, B-2, C-3"
    ],
    "answer": 0,
    "expl": "Typhoons (NW Pacific), cyclones (North Indian Ocean/South Pacific), hurricanes (Atlantic/NE Pacific) — same phenomenon, different names."
   },
   {
    "q": "The 'Inter-Tropical Convergence Zone' (ITCZ) is:",
    "options": [
     "The boundary between the troposphere and stratosphere",
     "A high-pressure belt at 30° latitudes",
     "A low-pressure belt near the equator where trade winds converge",
     "A cold ocean current"
    ],
    "answer": 2,
    "expl": "The ITCZ (doldrums) is the equatorial low-pressure convergence zone; its northward shift brings the Indian monsoon."
   },
   {
    "q": "Which of the following statements about the Indian monsoon is/are correct?\n1. The southwest monsoon is driven by the differential heating of land and sea.\n2. The Arabian Sea branch strikes the Western Ghats first.\n3. The monsoon trough and Tibetan High influence its strength.",
    "options": [
     "2 and 3 only",
     "1, 2 and 3",
     "1 and 2 only",
     "1 and 3 only"
    ],
    "answer": 1,
    "expl": "The monsoon is a thermal circulation; the Arabian Sea branch hits Kerala/Western Ghats in early June; the monsoon trough and Tibetan anticyclone modulate it."
   },
   {
    "q": "The retreating monsoon in India is associated with:\n1. The southwest monsoon withdrawing from north to south\n2. Heavy rainfall on the Coromandel coast\n3. Cyclonic activity in the Bay of Bengal",
    "options": [
     "1, 2 and 3",
     "1 and 3 only",
     "2 and 3 only",
     "1 and 2 only"
    ],
    "answer": 0,
    "expl": "Retreat (Oct–Dec): withdrawal from NW India, northeast monsoon rains on the Tamil Nadu coast, and Bay cyclones."
   },
   {
    "q": "Consider the following statements about Western Disturbances:\n1. They are extratropical storms originating in the Mediterranean region.\n2. They bring winter rainfall to northwest India.\n3. They are important for rabi crops.\nSelect the correct answer.",
    "options": [
     "2 and 3 only",
     "1 and 3 only",
     "1 and 2 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "Western disturbances ride the subtropical westerly jet from the Mediterranean, giving winter rain/snow to NW India — vital for rabi wheat."
   },
   {
    "q": "The 'loo' experienced in North India during summer is a:",
    "options": [
     "Dust storm with rain",
     "Hot, dry wind",
     "Sea breeze",
     "Cold wave"
    ],
    "answer": 1,
    "expl": "The loo is a hot, dry afternoon wind of the Indo-Gangetic plain in May–June; nor'westers (Kalbaisakhi) are the pre-monsoon thunderstorms of Bengal."
   },
   {
    "q": "Match the following soils of India with their characteristics:\nA. Alluvial — 1. Rich in potash, deposited by rivers\nB. Black (regur) — 2. Rich in iron, formed from basalt\nC. Red — 3. Deficient in nitrogen, formed from crystalline rocks\nD. Laterite — 4. Leached, found in high-rainfall areas",
    "options": [
     "A-2, B-1, C-4, D-3",
     "A-1, B-4, C-2, D-3",
     "A-1, B-2, C-3, D-4",
     "A-4, B-2, C-1, D-3"
    ],
    "answer": 2,
    "expl": "Alluvial (riverine, potash-rich), black/regur (Deccan basalt, cotton soil), red (crystalline rocks, iron oxides), laterite (leached in heavy rainfall)."
   },
   {
    "q": "The Deccan Traps were formed by:",
    "options": [
     "Glacial deposition",
     "Volcanic fissure eruptions at the end of the Cretaceous",
     "Riverine sedimentation",
     "Aeolian deposition"
    ],
    "answer": 1,
    "expl": "The Deccan Traps (~66 million years ago) are flood basalts from fissure eruptions — linked to the Reunion hotspot and the K–Pg extinction debate."
   },
   {
    "q": "Which of the following statements about the Himalayan rivers is/are correct?\n1. The Indus, Ganga and Brahmaputra are antecedent rivers.\n2. They form deep gorges in the Himalayas.\n3. They are perennial, fed by glaciers and rainfall.",
    "options": [
     "2 and 3 only",
     "1 and 2 only",
     "1 and 3 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "The three great Himalayan rivers predate the uplift (antecedent), cut gorges, and flow year-round from snowmelt and rain."
   },
   {
    "q": "The 'dendritic' drainage pattern is characteristic of:",
    "options": [
     "Folded mountains",
     "Regions with uniform rock structure",
     "Volcanic cones",
     "Glaciated valleys"
    ],
    "answer": 1,
    "expl": "Dendritic (tree-like) drainage develops on homogeneous rocks; trellis on folded terrain, radial on domes/volcanoes, rectangular on faulted joints."
   },
   {
    "q": "Which of the following rivers flows through a rift valley?",
    "options": [
     "Godavari",
     "Mahanadi",
     "Narmada",
     "Ganga"
    ],
    "answer": 2,
    "expl": "Narmada (and Tapi) flow west through rift valleys between the Vindhya and Satpura ranges — unusual for peninsular rivers."
   },
   {
    "q": "Consider the following statements about coral reefs:\n1. They require warm, shallow, clear tropical waters.\n2. The Great Barrier Reef is the world's largest coral reef system.\n3. Coral bleaching is caused by expulsion of zooxanthellae due to stress.\nSelect the correct answer.",
    "options": [
     "1 and 3 only",
     "1, 2 and 3",
     "1 and 2 only",
     "2 and 3 only"
    ],
    "answer": 1,
    "expl": "Corals need warm (>20°C), shallow, sunlit waters; the Great Barrier Reef is the largest system; bleaching is the loss of symbiotic zooxanthellae under heat stress."
   },
   {
    "q": "The 'continental shelf' is best described as:",
    "options": [
     "An underwater volcano",
     "The deep ocean floor",
     "The gently sloping submerged edge of a continent",
     "A mid-ocean ridge"
    ],
    "answer": 2,
    "expl": "The shelf (average ~80 km wide, <200 m deep) holds most marine life and resources; beyond it lie the slope, rise and abyssal plain."
   },
   {
    "q": "Which of the following is the correct order of the planets from the Sun?",
    "options": [
     "Mercury, Venus, Mars, Earth, Jupiter, Saturn, Uranus, Neptune",
     "Venus, Mercury, Earth, Mars, Jupiter, Saturn, Neptune, Uranus",
     "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune",
     "Mercury, Earth, Venus, Mars, Saturn, Jupiter, Uranus, Neptune"
    ],
    "answer": 2,
    "expl": "The order is Mercury–Venus–Earth–Mars (terrestrial) then Jupiter–Saturn–Uranus–Neptune (jovian giants)."
   },
   {
    "q": "Consider the following statements about the Moon:\n1. It has no atmosphere.\n2. Its gravitational pull causes tides on Earth.\n3. The same side always faces the Earth.\nSelect the correct answer.",
    "options": [
     "1 and 2 only",
     "1 and 3 only",
     "2 and 3 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "The Moon's negligible atmosphere, tidal influence (with the Sun), and synchronous rotation (tidal locking) are all correct."
   },
   {
    "q": "A solar eclipse occurs when:",
    "options": [
     "Venus transits the Sun",
     "The Earth comes between the Sun and the Moon",
     "The Moon comes between the Sun and the Earth",
     "The Moon is farthest from the Earth"
    ],
    "answer": 2,
    "expl": "Solar eclipse (new moon alignment); lunar eclipse is Earth's shadow on the Moon (full moon)."
   },
   {
    "q": "The 'Goldilocks zone' around a star refers to:",
    "options": [
     "The outer edge of a galaxy",
     "The habitable zone where liquid water can exist",
     "The region of solar flares",
     "The zone of asteroid belts"
    ],
    "answer": 1,
    "expl": "The circumstellar habitable zone — not too hot, not too cold — where liquid water (and potentially life) can exist."
   },
   {
    "q": "Which of the following statements about latitudes and longitudes is/are correct?\n1. The Prime Meridian passes through Greenwich, London.\n2. India Standard Time is based on 82.5°E longitude.\n3. The Tropic of Cancer passes through 8 Indian states.",
    "options": [
     "1 and 2 only",
     "1 and 3 only",
     "1, 2 and 3",
     "2 and 3 only"
    ],
    "answer": 2,
    "expl": "Prime Meridian (0°) at Greenwich; IST = 82.5°E (Mirzapur, UP); Tropic of Cancer crosses Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura, Mizoram — 8 states."
   },
   {
    "q": "The International Date Line is:",
    "options": [
     "An imaginary line at roughly 180° longitude where the calendar date changes",
     "A time zone boundary in Europe",
     "A treaty on maritime boundaries",
     "The equator's official name"
    ],
    "answer": 0,
    "expl": "The IDL (zigzagging around 180° to avoid splitting island nations) separates calendar days; crossing westward you gain a day."
   },
   {
    "q": "Consider the following statements about earthquakes:\n1. The focus is the point of origin below the surface.\n2. The epicentre is the point on the surface above the focus.\n3. P-waves travel faster than S-waves.\nSelect the correct answer.",
    "options": [
     "1, 2 and 3",
     "1 and 2 only",
     "1 and 3 only",
     "2 and 3 only"
    ],
    "answer": 0,
    "expl": "Focus (hypocentre), epicentre, and P-waves (primary, faster, through solids/liquids) vs S-waves (secondary, shear, solids only) are all correct."
   },
   {
    "q": "The Richter scale measures:",
    "options": [
     "The magnitude of an earthquake",
     "The intensity of damage",
     "The speed of seismic waves",
     "The depth of the focus"
    ],
    "answer": 0,
    "expl": "Richter (now moment magnitude) measures energy released (magnitude); the Mercalli scale measures observed intensity/damage."
   },
   {
    "q": "Which of the following landforms is formed by glacial erosion?",
    "options": [
     "Drumlin",
     "Outwash plain",
     "Moraine",
     "Cirque"
    ],
    "answer": 3,
    "expl": "Cirque (armchair-shaped hollow) is erosional; moraines, drumlins and outwash plains are depositional glacial features."
   },
   {
    "q": "The 'Barchan' is a:",
    "options": [
     "Coastal cliff",
     "Crescent-shaped sand dune",
     "Type of glacier",
     "River meander"
    ],
    "answer": 1,
    "expl": "Barchans are crescentic dunes with horns pointing downwind, common in deserts like the Thar."
   },
   {
    "q": "Consider the following statements about the tundra biome:\n1. It has permafrost and a short growing season.\n2. Vegetation is mainly mosses, lichens and dwarf shrubs.\n3. It is found in high latitudes and high altitudes.\nSelect the correct answer.",
    "options": [
     "1 and 3 only",
     "1 and 2 only",
     "2 and 3 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "Tundra (Arctic and alpine): permafrost, treeless, cryptogam-dominated vegetation, brief summers — all correct."
   },
   {
    "q": "The 'Mediterranean climate' is characterised by:",
    "options": [
     "Rainfall throughout the year",
     "Wet summers and dry winters",
     "Dry summers and wet winters",
     "Extreme continental temperatures"
    ],
    "answer": 2,
    "expl": "Mediterranean (westerlies in winter, subtropical high in summer): winter rain, summer drought — ideal for citrus, olives and viticulture."
   },
   {
    "q": "Which of the following statements about the savanna biome is/are correct?\n1. It has tall grasses with scattered trees.\n2. It experiences distinct wet and dry seasons.\n3. The African savanna supports large herbivore herds.",
    "options": [
     "1 and 2 only",
     "2 and 3 only",
     "1, 2 and 3",
     "1 and 3 only"
    ],
    "answer": 2,
    "expl": "Tropical savanna: grassland with scattered trees, seasonal rainfall, and iconic megafauna — all correct."
   },
   {
    "q": "The 'thermocline' in oceans refers to:",
    "options": [
     "The cold deep layer",
     "The warm surface layer",
     "A tidal bore",
     "A layer where temperature decreases rapidly with depth"
    ],
    "answer": 3,
    "expl": "The thermocline separates the warm mixed surface layer from cold deep water; it is pronounced in tropical oceans."
   },
   {
    "q": "Which of the following is a warm ocean current?",
    "options": [
     "Labrador Current",
     "Kuroshio Current",
     "Canary Current",
     "Benguela Current"
    ],
    "answer": 1,
    "expl": "Kuroshio (warm, NW Pacific, Japan's 'Black Stream'); Labrador, Canary and Benguela are cold currents."
   },
   {
    "q": "The salinity of ocean water is highest in:",
    "options": [
     "Equatorial regions with heavy rainfall",
     "Enclosed seas in arid regions like the Red Sea",
     "Polar oceans",
     "River mouths"
    ],
    "answer": 1,
    "expl": "High evaporation + low freshwater input raise salinity (Red Sea ~41 ppt); polar melt and equatorial rain lower it (~35 ppt average)."
   },
   {
    "q": "Consider the following statements about tides:\n1. Spring tides occur at new and full moon.\n2. Neap tides occur at first and third quarter moon.\n3. The Bay of Fundy has the world's highest tidal range.\nSelect the correct answer.",
    "options": [
     "1 and 3 only",
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 2 only"
    ],
    "answer": 1,
    "expl": "Spring (syzygy, sun-moon-earth aligned), neap (quadrature), and Fundy's ~16 m range are all correct."
   },
   {
    "q": "The 'Aleutian Low' and 'Icelandic Low' are examples of:",
    "options": [
     "Ocean gyres",
     "Semi-permanent low-pressure systems",
     "Mountain ranges",
     "High-pressure cells"
    ],
    "answer": 1,
    "expl": "The Aleutian and Icelandic Lows (with the Azores/Bermuda and Pacific Highs) are semi-permanent pressure systems driving mid-latitude weather."
   },
   {
    "q": "Which of the following statements about the ozone hole is/are correct?\n1. It was first observed over Antarctica.\n2. Chlorofluorocarbons are the main cause.\n3. The Montreal Protocol (1987) aims to phase out ozone-depleting substances.",
    "options": [
     "2 and 3 only",
     "1 and 3 only",
     "1 and 2 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "Antarctic ozone hole (Farman et al., 1985), CFC-driven depletion, and the Montreal Protocol — the most successful environmental treaty — are all correct."
   },
   {
    "q": "The 'Köppen' climate classification uses which of the following as primary criteria?",
    "options": [
     "Temperature and precipitation",
     "Altitude and latitude",
     "Wind speed and humidity",
     "Soil type and vegetation"
    ],
    "answer": 0,
    "expl": "Köppen (A–E groups) classifies climates by monthly temperature and precipitation thresholds, with vegetation as the underlying indicator."
   },
   {
    "q": "Which of the following is a correctly matched pair of local winds?\n1. Chinook — Rockies (warm, dry)\n2. Mistral — Rhone valley (cold)\n3. Sirocco — Sahara to Mediterranean (hot, dusty)",
    "options": [
     "1 and 2 only",
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 3 only"
    ],
    "answer": 1,
    "expl": "Chinook (snow-eater, Rockies), Mistral (cold Rhone valley wind), Sirocco (Saharan dust to southern Europe) are all correctly matched."
   }
  ]
 },
 {
  "id": "upsc-bank-polity",
  "title": "Polity — Prelims Question Bank (85 MCQs)",
  "subject": "Polity",
  "tag": "Prelims GS I · Practice bank",
  "blurb": "Constitution, Parliament, federalism, judiciary and local governance — the highest-weightage static block in Prelims.",
  "intro": "A 85-question practice bank on polity, written for UPSC Prelims 2026–27. Every question carries a full explanation; solve in timed sets, log your errors, and revise the explanations — not just the answers.",
  "sections": [
   {
    "h": "How to use this bank",
    "body": "<p>Attempt questions in sets of 25 under timed conditions, then read every explanation — including for questions you got right. A few explanations flag figures or fast-moving developments as approximate or as-reported; always cross-check those against official sources (Budget documents, PIB, ministry sites) before treating them as final.</p>"
   }
  ],
  "questions": [
   {
    "q": "Which of the following statements about the Preamble to the Indian Constitution is/are correct?\n1. It is based on the Objectives Resolution moved by Jawaharlal Nehru.\n2. It has been amended only once, by the 42nd Amendment.\n3. It is enforceable by the courts.",
    "options": [
     "1 and 2 only",
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 3 only"
    ],
    "answer": 0,
    "expl": "The Preamble draws on the Objectives Resolution (1946) and was amended only once in 1976 by the 42nd Amendment, which inserted 'Socialist, Secular, Integrity'. It is non-justiciable, so statement 3 is wrong."
   },
   {
    "q": "With reference to the Constituent Assembly of India, consider the following statements:\n1. It was constituted under the scheme of the Cabinet Mission Plan of 1946.\n2. Members were elected by the provincial assemblies through proportional representation by single transferable vote.\n3. The total membership of the Assembly was reduced to 299 after Partition.",
    "options": [
     "1 and 3 only",
     "1 and 2 only",
     "2 and 3 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "The Assembly was set up under the Cabinet Mission Plan; members were elected indirectly by provincial assemblies via PR-STV; and after Partition its strength fell from 389 to 299."
   },
   {
    "q": "Match the following Lists of the Seventh Schedule with their entries:\nA. Union List — 1. Police\nB. State List — 2. Defence of India\nC. Concurrent List — 3. Bankruptcy and insolvency",
    "options": [
     "A-2, B-1, C-3",
     "A-1, B-2, C-3",
     "A-2, B-3, C-1",
     "A-3, B-1, C-2"
    ],
    "answer": 0,
    "expl": "Defence is a Union subject, police is a State subject, and bankruptcy and insolvency fall under the Concurrent List."
   },
   {
    "q": "Which of the following Articles of the Constitution deal with the Right to Equality?\n1. Article 14\n2. Article 15\n3. Article 19\n4. Article 18",
    "options": [
     "2, 3 and 4 only",
     "1, 2 and 4 only",
     "1, 2 and 3 only",
     "1, 3 and 4 only"
    ],
    "answer": 1,
    "expl": "Articles 14 to 18 form the Right to Equality; Article 19 belongs to the Right to Freedom (Articles 19–22)."
   },
   {
    "q": "Consider the following statements regarding the power of judicial review in India:\n1. It is available to both the Supreme Court and the High Courts.\n2. It extends to constitutional amendments.\n3. It is a part of the basic structure of the Constitution.",
    "options": [
     "2 and 3 only",
     "1 and 2 only",
     "1, 2 and 3",
     "1 and 3 only"
    ],
    "answer": 2,
    "expl": "Judicial review (Articles 13, 32, 226, 136 etc.) is available to the SC and HCs, applies to amendments (Kesavananda/Minerva Mills), and is a basic-structure feature."
   },
   {
    "q": "The doctrine of 'eminent domain' in Indian constitutional law is most closely associated with which of the following?",
    "options": [
     "The power of Parliament to legislate on residuary subjects",
     "The immunity of the President from legal proceedings",
     "The State's power to acquire private property for public purpose",
     "Right to compensation under Article 300A"
    ],
    "answer": 2,
    "expl": "Eminent domain is the State's inherent power to take private property for public use; after the 44th Amendment (1978), property is only a legal right under Article 300A with a duty to pay compensation implied."
   },
   {
    "q": "Which of the following writs can be issued by the Supreme Court only against judicial or quasi-judicial authorities and not against purely administrative authorities?",
    "options": [
     "Habeas Corpus",
     "Mandamus",
     "Prohibition",
     "Quo Warranto"
    ],
    "answer": 2,
    "expl": "Prohibition (like Certiorari) is issued to lower courts/tribunals to stop them exceeding jurisdiction; it cannot be issued against purely administrative or legislative authorities."
   },
   {
    "q": "Consider the following statements about Article 32 of the Constitution:\n1. It is itself a Fundamental Right.\n2. The Supreme Court cannot refuse to entertain a petition under it.\n3. Parliament can suspend it during a national emergency.\nSelect the correct answer using the code below.",
    "options": [
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 3 only",
     "1 and 2 only"
    ],
    "answer": 3,
    "expl": "Article 32 is itself a Fundamental Right (the 'heart and soul'), and the Court cannot decline to hear a genuine Article 32 petition. It is not suspended during emergency — only enforcement of the Article 32 right itself can be suspended under Article 359 for non-Articles 20–21 rights."
   },
   {
    "q": "Under the Indian Constitution, the residuary powers of legislation are vested in:",
    "options": [
     "The State Legislatures",
     "The Supreme Court",
     "Both Union and State legislatures equally",
     "The Union Parliament"
    ],
    "answer": 3,
    "expl": "Article 248 read with Entry 97 of the Union List vests residuary legislative power in Parliament — a departure from the US model."
   },
   {
    "q": "Which Schedule of the Constitution contains the languages officially recognised, and how many languages does it currently contain?",
    "options": [
     "Seventh Schedule; 21 languages",
     "Tenth Schedule; 18 languages",
     "Ninth Schedule; 22 languages",
     "Eighth Schedule; 22 languages"
    ],
    "answer": 3,
    "expl": "The Eighth Schedule lists 22 officially recognised languages; the last additions were Bodo, Dogri, Maithili and Santhali by the 92nd Amendment (2003)."
   },
   {
    "q": "Match the following Constitutional Amendments with their subject matter:\nA. 42nd Amendment — 1. Lowered voting age to 18\nB. 52nd Amendment — 2. Mini-Constitution; added Fundamental Duties\nC. 61st Amendment — 3. Anti-defection law\nD. 73rd Amendment — 4. Panchayati Raj institutions",
    "options": [
     "A-3, B-2, C-1, D-4",
     "A-2, B-1, C-3, D-4",
     "A-1, B-2, C-3, D-4",
     "A-2, B-3, C-1, D-4"
    ],
    "answer": 3,
    "expl": "42nd (1976) added Fundamental Duties; 52nd (1985) inserted the Tenth Schedule (anti-defection); 61st (1988) lowered voting age from 21 to 18; 73rd (1992) constitutionalised Panchayats."
   },
   {
    "q": "The phrase 'procedure established by law' in Article 21 was interpreted by the Supreme Court in which landmark case to mean 'due process of law' in substance?",
    "options": [
     "R.C. Cooper v. Union of India",
     "A.K. Gopalan v. State of Madras",
     "ADM Jabalpur v. Shivkant Shukla",
     "Maneka Gandhi v. Union of India"
    ],
    "answer": 3,
    "expl": "In Maneka Gandhi (1978) the Court read 'procedure established by law' as requiring a procedure that is fair, just and reasonable — effectively importing due process into Article 21."
   },
   {
    "q": "Consider the following statements about the Election Commission of India:\n1. It is a permanent and independent constitutional body under Article 324.\n2. The Chief Election Commissioner can be removed only in the manner prescribed for a Supreme Court judge.\n3. The conditions of service of the Election Commissioners are determined by Parliament.\nSelect the correct answer.",
    "options": [
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 2 only",
     "1 and 3 only"
    ],
    "answer": 0,
    "expl": "Article 324 creates the ECI; the CEC enjoys removal protection identical to an SC judge; and Parliament fixes service conditions (Article 324(5))."
   },
   {
    "q": "Which of the following is NOT a qualification prescribed for election as the President of India?",
    "options": [
     "Qualified for election as a member of the Lok Sabha",
     "Completed 35 years of age",
     "Citizen of India",
     "Must have held a ministerial office"
    ],
    "answer": 3,
    "expl": "Article 58 requires Indian citizenship, age 35+, and eligibility for Lok Sabha membership; no prior office is required."
   },
   {
    "q": "The impeachment of the President of India can be initiated in:",
    "options": [
     "The Rajya Sabha only",
     "A joint sitting of both Houses",
     "The Lok Sabha only",
     "Either House of Parliament"
    ],
    "answer": 3,
    "expl": "Under Article 61, impeachment charges may be preferred by either House; the other House then investigates and must pass the resolution by a two-thirds majority."
   },
   {
    "q": "With reference to the Vice-President of India, consider the following statements:\n1. He is elected by an electoral college consisting of members of both Houses of Parliament.\n2. He can be removed by a resolution of the Rajya Sabha agreed to by the Lok Sabha.\n3. While acting as President, he ceases to perform the duties of Chairman of the Rajya Sabha.\nSelect the correct answer.",
    "options": [
     "1 and 2 only",
     "1, 2 and 3",
     "1 and 3 only",
     "2 and 3 only"
    ],
    "answer": 1,
    "expl": "The VP is elected by MPs of both Houses (no state legislatures), removable by a Rajya Sabha resolution agreed by Lok Sabha, and when acting as President he does not chair the Rajya Sabha."
   },
   {
    "q": "Which Article of the Constitution empowers Parliament to create new states and alter boundaries of existing states?",
    "options": [
     "Article 2",
     "Article 4",
     "Article 3",
     "Article 370"
    ],
    "answer": 2,
    "expl": "Article 3 empowers Parliament to form new states and alter areas, boundaries or names of existing states by simple-majority law."
   },
   {
    "q": "Consider the following statements about the Council of Ministers:\n1. Ministers hold office during the pleasure of the President.\n2. The Council of Ministers is collectively responsible to the Lok Sabha.\n3. A minister must be a member of Parliament within six months of appointment.\nSelect the correct answer.",
    "options": [
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 2 only",
     "1 and 3 only"
    ],
    "answer": 0,
    "expl": "Articles 75(2), 75(3) and 75(5) cover these: pleasure of the President, collective responsibility to the Lok Sabha, and the six-month membership rule."
   },
   {
    "q": "The office of the Attorney General of India is provided under which Article, and what is his term of office?",
    "options": [
     "Article 148; fixed term of 6 years",
     "Article 76; holds office during the pleasure of the President",
     "Article 76; fixed term of 5 years",
     "Article 165; holds office during the pleasure of the Governor"
    ],
    "answer": 1,
    "expl": "Article 76 creates the Attorney General, who holds office during the President's pleasure; Article 165 is the state-level counterpart (Advocate General)."
   },
   {
    "q": "Which of the following committees is/are exclusively composed of Lok Sabha members?\n1. Public Accounts Committee\n2. Estimates Committee\n3. Committee on Public Undertakings",
    "options": [
     "1 and 3 only",
     "3 only",
     "1 only",
     "2 only"
    ],
    "answer": 3,
    "expl": "The Estimates Committee (30 members) is drawn entirely from the Lok Sabha; PAC has 22 members (15 LS + 7 RS) and COPU has 22 (15 LS + 7 RS)."
   },
   {
    "q": "A Money Bill can be introduced in Parliament only on the recommendation of the:",
    "options": [
     "Speaker",
     "President",
     "Finance Minister",
     "Prime Minister"
    ],
    "answer": 1,
    "expl": "Article 109 requires the prior recommendation of the President for introduction of a Money Bill, which can originate only in the Lok Sabha."
   },
   {
    "q": "Consider the following statements regarding a Money Bill:\n1. The Rajya Sabha can only make recommendations, which the Lok Sabha may accept or reject.\n2. If the Lok Sabha rejects the Rajya Sabha's recommendations, the Bill is deemed passed in its original form.\n3. The President cannot return a Money Bill for reconsideration.\nSelect the correct answer.",
    "options": [
     "2 and 3 only",
     "1 and 2 only",
     "1, 2 and 3",
     "1 and 3 only"
    ],
    "answer": 1,
    "expl": "Rajya Sabha has 14 days to recommend amendments; Lok Sabha may accept or reject them; the President may either assent or withhold assent to a Money Bill — he cannot return it (Article 111), making statement 3 wrong."
   },
   {
    "q": "The 'Guillotine' in parliamentary procedure refers to:",
    "options": [
     "A device for recording division votes",
     "Putting budget demands to vote without discussion",
     "A motion to remove the Speaker",
     "The process of electing committee chairmen"
    ],
    "answer": 1,
    "expl": "Guillotine is the closure device by which outstanding demands for grants are put to vote at a fixed time without further discussion."
   },
   {
    "q": "Which of the following motions requires the support of at least 50 members to be admitted in the Lok Sabha?",
    "options": [
     "No-confidence motion",
     "Adjournment motion",
     "Privilege motion",
     "Calling attention motion"
    ],
    "answer": 1,
    "expl": "An adjournment motion needs the support of at least 50 members; a no-confidence motion requires only the Speaker's admission (conventionally 50 members' backing is cited for leave). Note: adjournment motion formally requires 50 members' support."
   },
   {
    "q": "The power of the President to promulgate ordinances under Article 123 is subject to which of the following limitations?\n1. He must be satisfied that circumstances exist rendering immediate action necessary.\n2. The ordinance must be laid before both Houses when they reassemble.\n3. An ordinance ceases to operate six months after it is promulgated.\nSelect the correct answer.",
    "options": [
     "1, 2 and 3",
     "1 and 3 only",
     "1 and 2 only",
     "2 and 3 only"
    ],
    "answer": 2,
    "expl": "Ordinance power requires the President's satisfaction and laying before Parliament; an ordinance lapses six weeks (not six months) after reassembly, so statement 3 is wrong."
   },
   {
    "q": "Match the following Articles with their subject matter:\nA. Article 50 — 1. Uniform civil code\nB. Article 44 — 2. Separation of judiciary from executive\nC. Article 48A — 3. Protection of environment\nD. Article 51A — 4. Fundamental Duties",
    "options": [
     "A-2, B-1, C-3, D-4",
     "A-4, B-1, C-2, D-3",
     "A-1, B-2, C-4, D-3",
     "A-2, B-3, C-1, D-4"
    ],
    "answer": 0,
    "expl": "Article 50 (separation of judiciary), Article 44 (uniform civil code), Article 48A (environment protection, 42nd Amendment), Article 51A (Fundamental Duties)."
   },
   {
    "q": "The Sarkaria Commission (1983) was appointed to examine:",
    "options": [
     "Police reforms",
     "Administrative tribunal reforms",
     "Centre-State relations",
     "Electoral reforms"
    ],
    "answer": 2,
    "expl": "The Sarkaria Commission examined Centre–State relations and recommended, among other things, restraint in the use of Article 356."
   },
   {
    "q": "Under Article 356, President's Rule in a state must be approved by Parliament within ____ and can continue for a maximum of ____ with periodic approvals.",
    "options": [
     "six months; three years",
     "two months; one year",
     "two months; three years",
     "one month; one year"
    ],
    "answer": 2,
    "expl": "Proclamation under Article 356 lapses after two months unless approved; with Parliament's approval every six months it can run up to three years (with Election Commission certification after one year)."
   },
   {
    "q": "Which of the following statements about the Finance Commission is/are correct?\n1. It is constituted by the President every five years under Article 280.\n2. Its recommendations are binding on the government.\n3. It recommends the distribution of the net proceeds of taxes between the Union and the States.",
    "options": [
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 2 only",
     "1 and 3 only"
    ],
    "answer": 3,
    "expl": "Article 280 mandates a Finance Commission every five years to recommend tax-sharing and grants; its recommendations are advisory, not binding."
   },
   {
    "q": "The Comptroller and Auditor-General of India audits the accounts of:\n1. The Union Government\n2. The State Governments\n3. Local bodies, when requested by the President or Governor",
    "options": [
     "1 only",
     "1, 2 and 3 only",
     "2 and 3 only",
     "1 and 2 only"
    ],
    "answer": 1,
    "expl": "Article 149–151: CAG audits Union and state accounts and any other authority on the request of the President/Governor — covering all three."
   },
   {
    "q": "Which Constitutional Amendment inserted the words 'Socialist', 'Secular' and 'Integrity' into the Preamble?",
    "options": [
     "24th Amendment",
     "52nd Amendment",
     "44th Amendment",
     "42nd Amendment"
    ],
    "answer": 3,
    "expl": "The 42nd Amendment Act, 1976 — the 'Mini-Constitution' — inserted Socialist, Secular and Integrity into the Preamble."
   },
   {
    "q": "The basic structure doctrine was propounded by the Supreme Court in:",
    "options": [
     "Minerva Mills v. Union of India",
     "Waman Rao v. Union of India",
     "Golaknath v. State of Punjab",
     "Kesavananda Bharati v. State of Kerala"
    ],
    "answer": 3,
    "expl": "Kesavananda Bharati (1973) held Parliament can amend but not destroy the Constitution's basic structure."
   },
   {
    "q": "Consider the following statements about the Rajya Sabha:\n1. It is a permanent body not subject to dissolution.\n2. One-third of its members retire every two years.\n3. The Vice-President is its ex-officio Chairman.\nSelect the correct answer.",
    "options": [
     "1, 2 and 3",
     "1 and 2 only",
     "1 and 3 only",
     "2 and 3 only"
    ],
    "answer": 0,
    "expl": "Rajya Sabha is the continuing House: one-third retire biennially, it is never dissolved, and the Vice-President chairs it ex-officio."
   },
   {
    "q": "The maximum strength of the Lok Sabha as prescribed by the Constitution is:",
    "options": [
     "550",
     "545",
     "543",
     "552"
    ],
    "answer": 0,
    "expl": "Article 81 caps Lok Sabha at 550 (530 states + 20 UTs); the Anglo-Indian nomination provision (erstwhile 552) was discontinued by the 104th Amendment (2020)."
   },
   {
    "q": "Which of the following is a feature of the Indian federal system that departs from the classical federal model?",
    "options": [
     "Single citizenship",
     "Written Constitution",
     "Independent judiciary",
     "Bicameralism"
    ],
    "answer": 0,
    "expl": "India has single citizenship (unlike the USA's dual citizenship), a strong Centre, and residuary powers with Parliament — quasi-federal features."
   },
   {
    "q": "The procedure for the amendment of the Constitution is laid down in:",
    "options": [
     "Article 368",
     "Article 249",
     "Article 360",
     "Article 356"
    ],
    "answer": 0,
    "expl": "Article 368 in Part XX governs constitutional amendments, requiring special majorities (and state ratification for entrenched provisions)."
   },
   {
    "q": "A constitutional amendment that seeks to change the representation of states in Parliament requires:",
    "options": [
     "Referendum",
     "Special majority of Parliament",
     "Special majority of Parliament plus ratification by half the states",
     "Simple majority of Parliament"
    ],
    "answer": 2,
    "expl": "Changes to state representation in Parliament fall under Article 368's proviso, needing a special majority plus ratification by at least half the state legislatures."
   },
   {
    "q": "Which of the following statements about the Directive Principles of State Policy is/are correct?\n1. They are non-justiciable.\n2. They are fundamental in the governance of the country.\n3. They were borrowed from the Irish Constitution.",
    "options": [
     "1 and 3 only",
     "1 and 2 only",
     "2 and 3 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "Article 37 makes DPSPs non-justiciable yet fundamental in governance; they were inspired by the Irish Constitution."
   },
   {
    "q": "The 'doctrine of pith and substance' is used by courts to:",
    "options": [
     "Determine whether a law encroaches on another legislature's field",
     "Interpret Fundamental Rights expansively",
     "Decide the validity of constitutional amendments",
     "Resolve conflicts between statutes and delegated legislation"
    ],
    "answer": 0,
    "expl": "Pith and substance examines a law's true nature to decide if it falls within the enacting legislature's competence under the Seventh Schedule."
   },
   {
    "q": "Which of the following pairs is correctly matched?\n1. Article 14 — Equality before law\n2. Article 16 — Equality of opportunity in public employment\n3. Article 17 — Abolition of titles\n4. Article 18 — Abolition of untouchability",
    "options": [
     "1 and 2 only",
     "1 and 4 only",
     "1, 2 and 3 only",
     "2 and 3 only"
    ],
    "answer": 0,
    "expl": "Article 17 abolishes untouchability and Article 18 abolishes titles — the pairs 3 and 4 are swapped."
   },
   {
    "q": "The National Human Rights Commission is a:",
    "options": [
     "Statutory body",
     "Quasi-federal body",
     "Executive body",
     "Constitutional body"
    ],
    "answer": 0,
    "expl": "NHRC is a statutory body created by the Protection of Human Rights Act, 1993 — not mentioned in the Constitution."
   },
   {
    "q": "Consider the following statements about Panchayati Raj institutions under the 73rd Amendment:\n1. Reservation of one-third of seats for women is mandatory.\n2. The State Election Commission conducts panchayat elections.\n3. A uniform five-year term is prescribed for all panchayats.\nSelect the correct answer.",
    "options": [
     "1 and 2 only",
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 3 only"
    ],
    "answer": 1,
    "expl": "The 73rd Amendment mandates one-third women's reservation, a five-year term, and elections by the State Election Commission. (Many states have since raised women's reservation to 50%.)"
   },
   {
    "q": "The Eleventh Schedule of the Constitution contains:",
    "options": [
     "12 Fundamental Duties",
     "18 functions for Municipalities",
     "29 subjects for Panchayats",
     "22 official languages"
    ],
    "answer": 2,
    "expl": "The Eleventh Schedule lists 29 subjects (e.g., agriculture, rural housing, poverty alleviation) for Panchayat jurisdiction; the Twelfth Schedule lists 18 for municipalities."
   },
   {
    "q": "Which of the following statements about the Governor is/are correct?\n1. He is appointed by the President and holds office during the President's pleasure.\n2. He must have completed 35 years of age.\n3. The Constitution lays down the grounds for his removal.",
    "options": [
     "1 and 3 only",
     "1 and 2 only",
     "1, 2 and 3",
     "2 and 3 only"
    ],
    "answer": 1,
    "expl": "The Governor is appointed by the President, must be 35+, and holds office during the President's pleasure — the Constitution prescribes no removal grounds or procedure."
   },
   {
    "q": "The 'pleasure doctrine' under Article 310 applies to:",
    "options": [
     "The Chief Election Commissioner",
     "Civil servants holding office under the Union or a State",
     "Judges of the Supreme Court",
     "Members of Parliament"
    ],
    "answer": 1,
    "expl": "Article 310: civil servants hold office during the President's/Governor's pleasure, subject to Article 311's safeguards; judges and CEC enjoy separate tenure protections."
   },
   {
    "q": "Which Article provides for the appointment of acting Chief Justice and ad hoc judges in the Supreme Court?",
    "options": [
     "Article 130",
     "Article 126 and Article 127",
     "Article 124",
     "Article 131"
    ],
    "answer": 1,
    "expl": "Articles 126 (acting CJI) and 127 (ad hoc judges) cover temporary Supreme Court appointments."
   },
   {
    "q": "The Supreme Court's advisory jurisdiction under Article 143 can be invoked by:",
    "options": [
     "Either House of Parliament",
     "The Chief Justice of India",
     "The Prime Minister",
     "The President"
    ],
    "answer": 3,
    "expl": "The President may refer questions of law or fact of public importance to the Supreme Court for its opinion under Article 143."
   },
   {
    "q": "Consider the following statements about the National Emergency under Article 352:\n1. It can be proclaimed on grounds of war, external aggression or armed rebellion.\n2. It requires the written recommendation of the Union Cabinet.\n3. It must be approved by Parliament within one month by special majority.\nSelect the correct answer.",
    "options": [
     "1, 2 and 3",
     "1 and 3 only",
     "1 and 2 only",
     "2 and 3 only"
    ],
    "answer": 0,
    "expl": "Post-44th Amendment: 'armed rebellion' (not internal disturbance), written Cabinet advice, and approval within one month by special majority with periodic re-approval every six months."
   },
   {
    "q": "During a National Emergency, which Fundamental Rights CANNOT be suspended?",
    "options": [
     "Article 32",
     "All Fundamental Rights",
     "Articles 20 and 21",
     "Articles 14 and 19"
    ],
    "answer": 2,
    "expl": "The 44th Amendment bars suspension of Articles 20 and 21 even during emergency; other rights' enforcement may be suspended under Article 359."
   },
   {
    "q": "The concept of 'Public Interest Litigation' in India was pioneered by:",
    "options": [
     "Justice M.N. Venkatachaliah",
     "Justice R.M. Lodha",
     "Justice H.R. Khanna alone",
     "Justice V.R. Krishna Iyer and Justice P.N. Bhagwati"
    ],
    "answer": 3,
    "expl": "Justices Krishna Iyer and Bhagwati relaxed locus standi in the late 1970s–early 1980s (e.g., S.P. Gupta, 1981), birthing PIL."
   },
   {
    "q": "Which of the following is NOT one of the qualifications for appointment as a judge of a High Court?",
    "options": [
     "Citizen of India",
     "Held judicial office in India for 10 years",
     "Completed 45 years of age",
     "Been an advocate of a High Court for 10 years"
    ],
    "answer": 2,
    "expl": "Article 217 requires citizenship plus 10 years as judicial officer or advocate; no minimum age is prescribed."
   },
   {
    "q": "The Inter-State Council is established under:",
    "options": [
     "Article 320",
     "Article 312",
     "Article 263",
     "Article 280"
    ],
    "answer": 2,
    "expl": "Article 263 provides for an Inter-State Council; it was first constituted in 1990 on Sarkaria Commission's recommendation."
   },
   {
    "q": "Which of the following statements about the Anti-Defection Law (Tenth Schedule) is/are correct?\n1. It was inserted by the 52nd Amendment in 1985.\n2. An independent member joining a party after six months of election is disqualified.\n3. The decision of the presiding officer on disqualification is final and not subject to judicial review.",
    "options": [
     "1 and 2 only",
     "1 and 3 only",
     "2 and 3 only",
     "1, 2 and 3"
    ],
    "answer": 0,
    "expl": "52nd Amendment (1985) created the Tenth Schedule; independents joining a party after election are disqualified. Kihoto Hollohan (1992) held the Speaker's decision is subject to judicial review, so statement 3 is wrong."
   },
   {
    "q": "The 'office of profit' disqualification for MPs is laid down in:",
    "options": [
     "Article 103",
     "Article 101",
     "Article 104",
     "Article 102"
    ],
    "answer": 3,
    "expl": "Article 102(1)(a) disqualifies MPs holding an office of profit under the government (other than exempted offices); Article 103 gives the President the decision power on the ECI's opinion."
   },
   {
    "q": "Which of the following bodies is responsible for the delimitation of parliamentary and assembly constituencies?",
    "options": [
     "Delimitation Commission",
     "Election Commission of India",
     "Law Commission",
     "National Statistical Commission"
    ],
    "answer": 0,
    "expl": "A Delimitation Commission (chaired by a retired SC judge, with CEC as ex-officio member) is set up by Parliament; its orders have the force of law and cannot be questioned in court."
   },
   {
    "q": "The last completed delimitation of constituencies in India was based on which Census, and until which year are the current Lok Sabha seat allocations frozen?",
    "options": [
     "2001 Census; frozen till 2031",
     "2001 Census; frozen till 2026",
     "1991 Census; frozen till 2001",
     "2011 Census; frozen till 2031"
    ],
    "answer": 1,
    "expl": "The 2002 Delimitation Commission used 2001 Census data; the 42nd and 84th Amendments froze seat allocation (not boundaries) until 2026."
   },
   {
    "q": "Consider the following statements about the Goods and Services Tax Council:\n1. It is a constitutional body under Article 279A.\n2. Decisions require a three-fourths majority of weighted votes.\n3. The Centre has a one-third weightage in voting.\nSelect the correct answer.",
    "options": [
     "1, 2 and 3",
     "1 and 2 only",
     "2 and 3 only",
     "1 and 3 only"
    ],
    "answer": 0,
    "expl": "Article 279A (101st Amendment, 2016) created the GST Council; decisions need 3/4 weighted majority, with Centre holding one-third weight and states two-thirds collectively."
   },
   {
    "q": "The 101st Constitutional Amendment is associated with:",
    "options": [
     "Goods and Services Tax",
     "Right to Education",
     "Lowering of voting age",
     "Panchayati Raj"
    ],
    "answer": 0,
    "expl": "The 101st Amendment (2016) introduced GST by inserting Articles 246A, 269A and 279A."
   },
   {
    "q": "Which of the following statements about the Right to Information Act, 2005 is/are correct?\n1. It extends to the whole of India.\n2. The Central Information Commission is a statutory body.\n3. Information concerning national security is absolutely exempt from disclosure.",
    "options": [
     "1 and 2 only",
     "1 and 3 only",
     "1, 2 and 3",
     "2 and 3 only"
    ],
    "answer": 0,
    "expl": "RTI covers all of India (the 2019 amendment removed the J&K exception after reorganisation); CIC is statutory; security/intelligence organisations are exempt except in corruption or human-rights cases, so the exemption is not absolute."
   },
   {
    "q": "The Lokpal and Lokayuktas Act was passed in which year, and the first Lokpal of India was:",
    "options": [
     "2013; Justice T.S. Thakur",
     "2013; Justice Pinaki Chandra Ghose",
     "2014; Justice Ranjan Gogoi",
     "2019; Justice N.V. Ramana"
    ],
    "answer": 1,
    "expl": "The Lokpal and Lokayuktas Act, 2013; Justice Pinaki Chandra Ghose became the first Lokpal in March 2019."
   },
   {
    "q": "Match the following Commissions with their subject:\nA. Punchhi Commission — 1. Review of the working of the Constitution\nB. Venkatachaliah Commission — 2. Centre-State relations\nC. Sarkaria Commission — 3. Centre-State relations (earlier)\nD. Second ARC — 4. Administrative reforms",
    "options": [
     "A-2, B-3, C-1, D-4",
     "A-3, B-1, C-2, D-4",
     "A-2, B-1, C-3, D-4",
     "A-1, B-2, C-3, D-4"
    ],
    "answer": 2,
    "expl": "Sarkaria (1983) and Punchhi (2007) both examined Centre–State relations; the Venkatachaliah Commission (2000) reviewed the Constitution's working; the Second ARC (2005) dealt with administrative reforms."
   },
   {
    "q": "The concept of 'equality of opportunity' under Article 16 permits the State to make reservations for:",
    "options": [
     "All citizens equally",
     "Backward classes which are inadequately represented in state services",
     "Socially and educationally backward classes only",
     "Economically weaker sections only"
    ],
    "answer": 1,
    "expl": "Article 16(4) permits reservation for backward classes inadequately represented in services; the 103rd Amendment (2019) added EWS reservation under Article 16(6)."
   },
   {
    "q": "Which of the following statements about Article 21A (Right to Education) is/are correct?\n1. It was inserted by the 86th Amendment in 2002.\n2. It guarantees free and compulsory education to children aged 6 to 14.\n3. It is enforceable only against private unaided schools.",
    "options": [
     "1 and 2 only",
     "1 and 3 only",
     "1, 2 and 3",
     "2 and 3 only"
    ],
    "answer": 0,
    "expl": "Article 21A (86th Amendment, 2002) makes 6–14 education a Fundamental Right enforceable against the State, implemented through the RTE Act, 2009 — not only against private schools."
   },
   {
    "q": "The 'doctrine of basic structure' limits which of the following powers of Parliament?",
    "options": [
     "Constituent (amending) power under Article 368",
     "Power to make treaties",
     "Power to reorganise states",
     "Ordinary legislative power"
    ],
    "answer": 0,
    "expl": "Kesavananda Bharati limits only the amending power under Article 368; ordinary legislation is tested against Fundamental Rights, not basic structure."
   },
   {
    "q": "Which of the following is/are correctly matched?\n1. Article 39A — Free legal aid\n2. Article 43A — Workers' participation in management\n3. Article 48 — Organisation of agriculture and animal husbandry",
    "options": [
     "1 and 3 only",
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 2 only"
    ],
    "answer": 1,
    "expl": "Article 39A (free legal aid, 42nd Amendment), Article 43A (workers' participation, 42nd Amendment) and Article 48 (agriculture, animal husbandry, cow-slaughter prohibition) are all correctly matched."
   },
   {
    "q": "A 'cut motion' in the Lok Sabha can be moved during discussion of:",
    "options": [
     "The President's address",
     "Demands for grants",
     "The Finance Bill at third reading",
     "A constitutional amendment bill"
    ],
    "answer": 1,
    "expl": "Cut motions (policy, economy, token cuts) are moved to reduce demands for grants during budget discussion in the Lok Sabha."
   },
   {
    "q": "The maximum number of ministers, including the Prime Minister, in the Union Council of Ministers cannot exceed:",
    "options": [
     "20% of Lok Sabha strength",
     "15% of Lok Sabha strength",
     "10% of Lok Sabha strength",
     "15% of total Parliament strength"
    ],
    "answer": 1,
    "expl": "The 91st Amendment (2003) capped ministerial strength at 15% of the Lok Sabha's membership (Article 75(1A))."
   },
   {
    "q": "Consider the following statements about the Speaker of the Lok Sabha:\n1. He can be removed by a resolution passed by a majority of all then members of the Lok Sabha.\n2. He does not vote in the first instance but exercises a casting vote in case of a tie.\n3. He decides whether a bill is a Money Bill, and his decision is final.\nSelect the correct answer.",
    "options": [
     "1, 2 and 3",
     "1 and 3 only",
     "2 and 3 only",
     "1 and 2 only"
    ],
    "answer": 0,
    "expl": "The Speaker is removable by an effective-majority resolution, votes only to break ties, and his Money-Bill certification under Article 110 is final."
   },
   {
    "q": "Which Article deals with the appointment of the Chief Justice of India and judges of the Supreme Court?",
    "options": [
     "Article 217",
     "Article 124",
     "Article 320",
     "Article 312"
    ],
    "answer": 1,
    "expl": "Article 124 governs appointment of the CJI and SC judges (through the collegium system evolved in the Judges cases); Article 217 covers High Court judges."
   },
   {
    "q": "The 'collegium system' for judicial appointments in India was established through:",
    "options": [
     "Interpretation by the Supreme Court in the Second and Third Judges cases",
     "An Act of Parliament",
     "A presidential ordinance",
     "A constitutional amendment"
    ],
    "answer": 0,
    "expl": "The collegium emerged from the Second Judges case (1993) and Third Judges case (1998); the NJAC (99th Amendment) that tried to replace it was struck down in 2015."
   },
   {
    "q": "Which of the following statements about High Courts is/are correct?\n1. Parliament can establish a common High Court for two or more states.\n2. The President appoints High Court judges in consultation with the CJI and the Governor.\n3. A High Court's writ jurisdiction is wider than the Supreme Court's.",
    "options": [
     "1 and 2 only",
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 3 only"
    ],
    "answer": 1,
    "expl": "Article 231 allows common High Courts; appointments follow Article 217's consultation process; and High Courts can issue writs for legal rights too (Article 226), wider than Article 32."
   },
   {
    "q": "The power of Parliament to legislate on a State List subject in the national interest is provided in:",
    "options": [
     "Article 249",
     "Article 256",
     "Article 250",
     "Article 252"
    ],
    "answer": 0,
    "expl": "Article 249: Rajya Sabha may by two-thirds resolution authorise Parliament to legislate on a State subject in national interest for one year at a time."
   },
   {
    "q": "Under which Article can the President declare a financial emergency, and has it ever been invoked in India?",
    "options": [
     "Article 352; invoked once in 1975",
     "Article 356; invoked over 100 times",
     "Article 360; never invoked",
     "Article 365; invoked twice"
    ],
    "answer": 2,
    "expl": "Article 360 (financial emergency) has never been proclaimed in India; Article 352 was used in 1975 and Article 356 over a hundred times."
   },
   {
    "q": "The 'Ninth Schedule' of the Constitution is associated with:",
    "options": [
     "Panchayat subjects",
     "Official languages",
     "Laws immune from judicial review (originally)",
     "Anti-defection provisions"
    ],
    "answer": 2,
    "expl": "The Ninth Schedule (1st Amendment, 1951) sheltered land-reform laws from challenge; I.R. Coelho (2007) held post-1973 insertions remain open to basic-structure review."
   },
   {
    "q": "Which of the following Directive Principles was added by the 97th Amendment (2011)?",
    "options": [
     "Free legal aid — Article 39A",
     "Protection of environment — Article 48A",
     "Early childhood care — Article 45",
     "Promotion of cooperative societies — Article 43B"
    ],
    "answer": 3,
    "expl": "The 97th Amendment added Article 43B directing the State to promote voluntary formation and democratic functioning of cooperative societies."
   },
   {
    "q": "Consider the following statements about the Attorney General of India:\n1. He must be qualified to be appointed a Supreme Court judge.\n2. He has the right of audience in all courts in India.\n3. He can be a member of a parliamentary committee.\nSelect the correct answer.",
    "options": [
     "1 and 3 only",
     "1, 2 and 3",
     "1 and 2 only",
     "2 and 3 only"
    ],
    "answer": 2,
    "expl": "Article 76: the AG must be SC-judge-qualified and has audience in all courts; he may attend Parliament but cannot vote, and committee membership is not a right."
   },
   {
    "q": "The first woman to become the Speaker of the Lok Sabha was:",
    "options": [
     "Margaret Alva",
     "Sumitra Mahajan",
     "Najma Heptulla",
     "Meira Kumar"
    ],
    "answer": 3,
    "expl": "Meira Kumar became the first woman Speaker in 2009 (15th Lok Sabha); Sumitra Mahajan was the second (2014)."
   },
   {
    "q": "Which of the following statements about the Public Accounts Committee is/are correct?\n1. Its chairman is appointed by the Speaker from among Lok Sabha members.\n2. By convention, the chairman belongs to the opposition.\n3. A minister cannot be elected as its member.",
    "options": [
     "1 and 3 only",
     "2 and 3 only",
     "1, 2 and 3",
     "1 and 2 only"
    ],
    "answer": 2,
    "expl": "PAC's chairman is appointed by the Speaker (conventionally from the opposition since 1967-68) and ministers are barred from membership."
   },
   {
    "q": "The 'Zero Hour' in Parliament is:",
    "options": [
     "The first hour of sitting devoted to questions",
     "An informal device where members raise matters without prior notice",
     "The time allotted for the budget speech",
     "The hour reserved for private members' bills"
    ],
    "answer": 1,
    "expl": "Zero Hour (12 noon–1 pm) is an Indian innovation with no mention in the Rules of Procedure — members raise urgent matters without prior notice."
   },
   {
    "q": "Which of the following motions is used to censure the Council of Ministers without expressing want of confidence?",
    "options": [
     "Adjournment motion",
     "Privilege motion",
     "Censure motion",
     "No-confidence motion"
    ],
    "answer": 2,
    "expl": "A censure motion criticises policies or an individual minister; unlike no-confidence, its passage does not compel resignation."
   },
   {
    "q": "The term 'Office of Profit' has been interpreted by the Supreme Court with reference to which test?",
    "options": [
     "The test of constitutional morality",
     "The test of electoral victory",
     "The test of seniority",
     "The test of pecuniary gain and government control"
    ],
    "answer": 3,
    "expl": "Courts apply tests of actual/expected pecuniary gain and the degree of government control over the office (e.g., Jaya Bachchan case, 2006)."
   },
   {
    "q": "Which Constitutional Amendment made the advice of the Council of Ministers binding on the President?",
    "options": [
     "44th Amendment",
     "52nd Amendment",
     "42nd Amendment",
     "24th Amendment"
    ],
    "answer": 2,
    "expl": "The 42nd Amendment (1976) made ministerial advice binding (Article 74(1)); the 44th Amendment added that the President may require reconsideration once."
   },
   {
    "q": "Consider the following statements about the Council of States (Rajya Sabha):\n1. Twelve members are nominated by the President for contributions to literature, science, art and social service.\n2. Its members are elected by the elected members of state legislative assemblies.\n3. Union territories without legislatures have no representation in it.\nSelect the correct answer.",
    "options": [
     "1 and 2 only",
     "2 and 3 only",
     "1 and 3 only",
     "1, 2 and 3"
    ],
    "answer": 0,
    "expl": "Twelve nominated members (Article 80), indirect election by state assemblies; UTs like Delhi, Puducherry and J&K do have Rajya Sabha representation, so statement 3 is wrong."
   },
   {
    "q": "The power to grant pardons under Article 72 extends to:",
    "options": [
     "Only death sentences",
     "All cases where punishment is by a Union law, court-martial cases, and death sentences",
     "Death sentences and court-martial cases only",
     "Only cases under state laws"
    ],
    "answer": 1,
    "expl": "Article 72 covers Union-law offences, court-martial sentences and all death sentences; Governors under Article 161 cover state-law offences (but not death sentences)."
   },
   {
    "q": "Which of the following statements about Fundamental Duties is/are correct?\n1. They were added by the 42nd Amendment on the Swaran Singh Committee's recommendation.\n2. They are enforceable by writs.\n3. The 86th Amendment added the duty of parents to provide education to children aged 6–14.",
    "options": [
     "1 and 3 only",
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 2 only"
    ],
    "answer": 0,
    "expl": "Fundamental Duties (1976) came from the Swaran Singh Committee; they are non-justiciable; the 86th Amendment (2002) added Article 51A(k) on children's education."
   }
  ]
 },
 {
  "id": "upsc-bank-scitech",
  "title": "Science & Tech — Prelims Question Bank (50 MCQs)",
  "subject": "Science & Technology",
  "tag": "Prelims GS I · Practice bank",
  "blurb": "Space, defence, health, digital and emerging tech — current-context science for Prelims and Mains.",
  "intro": "A 50-question practice bank on science & tech, written for UPSC Prelims 2026–27. Every question carries a full explanation; solve in timed sets, log your errors, and revise the explanations — not just the answers.",
  "sections": [
   {
    "h": "How to use this bank",
    "body": "<p>Attempt questions in sets of 25 under timed conditions, then read every explanation — including for questions you got right. A few explanations flag figures or fast-moving developments as approximate or as-reported; always cross-check those against official sources (Budget documents, PIB, ministry sites) before treating them as final.</p>"
   }
  ],
  "questions": [
   {
    "q": "Consider the following statements about India's space programme:\n1. ISRO was established in 1969.\n2. The first Indian satellite, Aryabhata, was launched in 1975.\n3. India launched its first lunar mission, Chandrayaan-1, in 2008.\nSelect the correct answer.",
    "options": [
     "2 and 3 only",
     "1 and 3 only",
     "1 and 2 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "ISRO (1969, Vikram Sarabhai); Aryabhata (1975, Soviet launch); Chandrayaan-1 (2008, discovered lunar water signatures) — all correct."
   },
   {
    "q": "Chandrayaan-3 (2023) is significant because India became the:",
    "options": [
     "First Asian country to reach the Moon",
     "First country to soft-land near the Moon's south pole",
     "Second country to orbit the Moon",
     "First country to land on the Moon"
    ],
    "answer": 1,
    "expl": "Chandrayaan-3 (23 Aug 2023): Vikram lander + Pragyan rover at Shiv Shakti point — first soft landing near the lunar south pole; India the fourth to soft-land."
   },
   {
    "q": "The Aditya-L1 mission is India's first:",
    "options": [
     "Solar observatory mission",
     "Human spaceflight mission",
     "Mars orbiter",
     "Space telescope"
    ],
    "answer": 0,
    "expl": "Aditya-L1 (2023, Lagrange point L1): coronagraph and solar-wind instruments studying the Sun's corona and space weather."
   },
   {
    "q": "Match the following ISRO launch vehicles:\nA. PSLV — 1. Heaviest operational (GSLV Mk III class)\nB. GSLV — 2. Workhorse for polar/SSO missions\nC. LVM3 — 3. Geosynchronous missions with cryogenic stage\nD. SSLV — 4. Small satellite launcher",
    "options": [
     "A-2, B-3, C-1, D-4",
     "A-1, B-2, C-3, D-4",
     "A-2, B-4, C-3, D-1",
     "A-3, B-2, C-1, D-4"
    ],
    "answer": 0,
    "expl": "PSLV (polar workhorse), GSLV (cryogenic upper stage), LVM3 (heaviest, human-rated for Gaganyaan), SSLV (on-demand small sats) — correct."
   },
   {
    "q": "The Gaganyaan mission aims to:",
    "options": [
     "Build a space station by 2025",
     "Launch a Venus orbiter",
     "Land an Indian on the Moon",
     "Send Indian astronauts to low-Earth orbit"
    ],
    "answer": 3,
    "expl": "Gaganyaan: India's first crewed mission (3 astronauts, ~400 km LEO) — uncrewed test flights precede it; the Bharatiya Antariksh Station is a 2035 goal."
   },
   {
    "q": "Consider the following statements about 'NavIC':\n1. It is India's regional satellite navigation system.\n2. It provides coverage over India and 1,500 km around it.\n3. It was earlier called IRNSS.\nSelect the correct answer.",
    "options": [
     "2 and 3 only",
     "1, 2 and 3",
     "1 and 3 only",
     "1 and 2 only"
    ],
    "answer": 1,
    "expl": "NavIC (IRNSS, 7 satellites): regional navigation — positioning over India +1,500 km; used in mobiles and strategic applications."
   },
   {
    "q": "Which of the following statements about '5G' technology is/are correct?\n1. It offers higher speed and lower latency than 4G.\n2. India launched 5G services in October 2022.\n3. mmWave spectrum enables very high speeds over short ranges.",
    "options": [
     "1, 2 and 3",
     "1 and 2 only",
     "1 and 3 only",
     "2 and 3 only"
    ],
    "answer": 0,
    "expl": "5G: eMBB/URLLC/mMTC use cases; India launch Oct 2022; mmWave (26 GHz) gives multi-Gbps speeds over short distances."
   },
   {
    "q": "The 'Digital Personal Data Protection Act, 2023' provides for:\n1. A Data Protection Board of India\n2. Consent-based data processing\n3. Penalties up to ₹250 crore per contravention",
    "options": [
     "1 and 3 only",
     "1, 2 and 3",
     "1 and 2 only",
     "2 and 3 only"
    ],
    "answer": 1,
    "expl": "DPDP Act 2023: consent framework, Data Protection Board, graded penalties (up to ₹250 crore), following the Puttaswamy privacy judgment (2017)."
   },
   {
    "q": "Consider the following statements about 'Artificial Intelligence':\n1. Machine learning is a subset of AI.\n2. Deep learning uses neural networks with multiple layers.\n3. The IndiaAI Mission was approved in 2024.\nSelect the correct answer.",
    "options": [
     "1 and 2 only",
     "1 and 3 only",
     "1, 2 and 3",
     "2 and 3 only"
    ],
    "answer": 2,
    "expl": "AI > ML > deep learning hierarchy; IndiaAI Mission (₹10,372 crore, 2024) builds compute, datasets and AI safety capacity."
   },
   {
    "q": "Quantum computing uses 'qubits' which differ from classical bits because they:",
    "options": [
     "Use more electricity",
     "Can exist in superposition of 0 and 1",
     "Are always faster",
     "Cannot be measured"
    ],
    "answer": 1,
    "expl": "Qubits exploit superposition and entanglement; India's National Quantum Mission (2023) targets quantum computing, communication and sensing."
   },
   {
    "q": "The 'National Quantum Mission' was approved in 2023 with the goal of developing:",
    "options": [
     "5G networks",
     "Nuclear weapons",
     "Supercomputers only",
     "Quantum computers, secure communications and sensors"
    ],
    "answer": 3,
    "expl": "NQM (2023–31, ~₹6,000 crore): 50–1000 qubit computers, satellite QKD, quantum sensors — steered by DST."
   },
   {
    "q": "Consider the following statements about 'CRISPR' technology:\n1. It enables precise editing of DNA.\n2. It was adapted from bacterial immune systems.\n3. Its developers won the 2020 Nobel Prize in Chemistry.\nSelect the correct answer.",
    "options": [
     "1 and 3 only",
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 2 only"
    ],
    "answer": 1,
    "expl": "CRISPR-Cas9 (Doudna/Charpentier, Nobel 2020): bacterial-derived gene scissors — used in medicine, agriculture and India's genome-editing guidelines."
   },
   {
    "q": "The 'Human Genome Project' was completed in:",
    "options": [
     "2000",
     "2010",
     "1990",
     "2003"
    ],
    "answer": 3,
    "expl": "HGP (1990–2003): first human genome sequence; India's GenomeIndia project (2024) sequenced 10,000 Indian genomes."
   },
   {
    "q": "Which of the following statements about 'vaccines' is/are correct?\n1. Covishield is a viral-vector vaccine.\n2. Covaxin is an inactivated-virus vaccine.\n3. mRNA vaccines carry synthetic messenger RNA.",
    "options": [
     "1 and 2 only",
     "1 and 3 only",
     "2 and 3 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "Covishield (ChAdOx1 viral vector), Covaxin (inactivated), mRNA vaccines (Pfizer/Moderna) — the three major COVID vaccine platforms."
   },
   {
    "q": "The 'mRNA' vaccine technology was recognised by the Nobel Prize in Physiology/Medicine in 2023 awarded to:",
    "options": [
     "David Julius and Ardem Patapoutian",
     "Katalin Karikó and Drew Weissman",
     "Emmanuelle Charpentier and Jennifer Doudna",
     "Harvey Alter and Charles Rice"
    ],
    "answer": 1,
    "expl": "Karikó and Weissman's nucleoside-base modifications made mRNA vaccines viable — Nobel 2023."
   },
   {
    "q": "Consider the following statements about 'nuclear energy' in India:\n1. India operates Pressurised Heavy Water Reactors using natural uranium.\n2. The three-stage programme was envisaged by Homi Bhabha.\n3. Kudankulam uses Russian VVER reactors.\nSelect the correct answer.",
    "options": [
     "1, 2 and 3",
     "1 and 3 only",
     "1 and 2 only",
     "2 and 3 only"
    ],
    "answer": 0,
    "expl": "PHWRs (natural uranium, heavy-water moderated); Bhabha's 3-stage (uranium → plutonium → thorium); Kudankulam VVER-1000 (Russia) — all correct."
   },
   {
    "q": "India's first nuclear reactor, 'Apsara', was commissioned in:",
    "options": [
     "1956",
     "1948",
     "1969",
     "1974"
    ],
    "answer": 0,
    "expl": "Apsara (1956, Trombay) — Asia's first research reactor; Pokhran-I (Smiling Buddha) was 1974, Pokhran-II 1998."
   },
   {
    "q": "The 'Pokhran-II' nuclear tests (1998) were conducted under the code name:",
    "options": [
     "Operation Shakti",
     "Operation Vijay",
     "Operation Parakram",
     "Operation Smiling Buddha"
    ],
    "answer": 0,
    "expl": "Operation Shakti (11 & 13 May 1998): five devices; Smiling Buddha was Pokhran-I (1974)."
   },
   {
    "q": "Consider the following statements about 'Thorium' in India:\n1. India has among the world's largest thorium reserves (monazite sands).\n2. Thorium is directly fissile.\n3. The third stage of India's nuclear programme is thorium-based.\nSelect the correct answer.",
    "options": [
     "2 and 3 only",
     "1 and 2 only",
     "1, 2 and 3",
     "1 and 3 only"
    ],
    "answer": 3,
    "expl": "India's monazite (Kerala, Odisha coasts) holds vast thorium; Th-232 is fertile (not fissile) — bred to U-233 in stage 3 (AHWR design)."
   },
   {
    "q": "Which of the following statements about 'ITER' is/are correct?\n1. It is an international fusion energy project in France.\n2. India is a member.\n3. It aims to demonstrate net fusion energy gain.",
    "options": [
     "1 and 2 only",
     "1, 2 and 3",
     "1 and 3 only",
     "2 and 3 only"
    ],
    "answer": 1,
    "expl": "ITER (Cadarache, France): 35 nations including India (in-kind contributions via ITER-India); tokamak aiming for Q≥10 fusion gain."
   },
   {
    "q": "The 'Large Hadron Collider' is located at:",
    "options": [
     "Fermilab, USA",
     "Dubna, Russia",
     "KEK, Japan",
     "CERN, on the France-Switzerland border"
    ],
    "answer": 3,
    "expl": "LHC (CERN, 27 km ring): discovered the Higgs boson (2012); India contributes through DAE/DST collaborations."
   },
   {
    "q": "Consider the following statements about 'supercomputers' in India:\n1. The National Supercomputing Mission was launched in 2015.\n2. PARAM Shivay was the first supercomputer under NSM.\n3. AIRAWAT is an AI-focused supercomputer at C-DAC Pune.\nSelect the correct answer.",
    "options": [
     "1 and 3 only",
     "2 and 3 only",
     "1, 2 and 3",
     "1 and 2 only"
    ],
    "answer": 2,
    "expl": "NSM (2015, MeitY+DST): PARAM Shivay (IIT-BHU, 2019) first built; AIRAWAT (C-DAC) ranked among top AI supercomputers."
   },
   {
    "q": "The 'PARAM' series of supercomputers was developed by:",
    "options": [
     "C-DAC",
     "BARC",
     "DRDO",
     "ISRO"
    ],
    "answer": 0,
    "expl": "C-DAC (Pune): PARAM 8000 (1991, Vijay Bhatkar) broke the US denial after Pokhran — PARAM Siddhi-AI followed."
   },
   {
    "q": "Which of the following statements about 'UPI' is/are correct?\n1. It was launched by NPCI in 2016.\n2. It enables instant interbank transfers via mobile.\n3. India processes the highest volume of real-time payments globally.",
    "options": [
     "1 and 2 only",
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 3 only"
    ],
    "answer": 1,
    "expl": "UPI (NPCI, 2016): real-time, interoperable; India leads world real-time payment volumes (ACI Worldwide reports)."
   },
   {
    "q": "The 'Aadhaar' project is implemented by:",
    "options": [
     "NITI Aayog",
     "RBI",
     "UIDAI",
     "Election Commission"
    ],
    "answer": 2,
    "expl": "UIDAI (2009, Aadhaar Act 2016): 12-digit biometric ID — the world's largest biometric identity system."
   },
   {
    "q": "Consider the following statements about 'blockchain' technology:\n1. It is a distributed ledger.\n2. Bitcoin was the first blockchain application.\n3. It is inherently tamper-evident.\nSelect the correct answer.",
    "options": [
     "1 and 3 only",
     "1 and 2 only",
     "1, 2 and 3",
     "2 and 3 only"
    ],
    "answer": 2,
    "expl": "Blockchain (Nakamoto, 2008): decentralised, hash-linked, tamper-evident ledger — RBI's retail CBDC (e₹) pilots use DLT concepts."
   },
   {
    "q": "India's Central Bank Digital Currency is called:",
    "options": [
     "Crypto Rupee",
     "Digital Gold",
     "e₹ (Digital Rupee)",
     "eCoin"
    ],
    "answer": 2,
    "expl": "e₹ (2022 pilots): retail e₹-R and wholesale e₹-W — RBI liability, distinct from private cryptocurrencies."
   },
   {
    "q": "Which of the following statements about 'cryptocurrencies' in India is/are correct?\n1. They are not legal tender.\n2. Gains are taxed at 30% plus surcharge.\n3. The RBI has warned against their risks.\nSelect the correct answer.",
    "options": [
     "2 and 3 only",
     "1 and 3 only",
     "1 and 2 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "Crypto: not legal tender; 30% flat tax + 1% TDS (2022 Budget); RBI advocates a ban while pushing CBDC — all correct."
   },
   {
    "q": "The 'James Webb Space Telescope' primarily observes in which wavelengths?",
    "options": [
     "X-ray",
     "Infrared",
     "Gamma ray",
     "Radio"
    ],
    "answer": 1,
    "expl": "JWST (2021): infrared-optimised (6.5 m gold-coated mirror) — sees the early universe through dust; stationed at Sun–Earth L2."
   },
   {
    "q": "Consider the following statements about 'black holes':\n1. The first image of a black hole was released in 2019.\n2. It showed the supermassive black hole in galaxy M87.\n3. The Event Horizon Telescope is a global array.\nSelect the correct answer.",
    "options": [
     "1 and 2 only",
     "2 and 3 only",
     "1 and 3 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "EHT's 2019 M87* image (and 2022 Sagittarius A*): Earth-sized virtual telescope via VLBI — all correct."
   },
   {
    "q": "The 'Higgs boson' is also called:",
    "options": [
     "The tachyon",
     "The graviton",
     "The God particle",
     "The strange particle"
    ],
    "answer": 2,
    "expl": "Higgs (2012, LHC): gives mass via the Higgs field — popularised as the 'God particle'."
   },
   {
    "q": "Which of the following statements about 'gravitational waves' is/are correct?\n1. First detected by LIGO in 2015.\n2. Predicted by Einstein's general relativity.\n3. India is building LIGO-India in Maharashtra.\nSelect the correct answer.",
    "options": [
     "1 and 3 only",
     "1, 2 and 3",
     "1 and 2 only",
     "2 and 3 only"
    ],
    "answer": 1,
    "expl": "GW150914 (2015, binary black holes); GR prediction (1916); LIGO-India (Hingoli, Maharashtra) approved — all correct."
   },
   {
    "q": "The 'Artemis' programme of NASA aims to:",
    "options": [
     "Build a Venus orbiter",
     "Return humans to the Moon",
     "Send humans to Mars by 2025",
     "Mine asteroids"
    ],
    "answer": 1,
    "expl": "Artemis: lunar return (Artemis II crewed flyby, III landing) and the Lunar Gateway — stepping stone to Mars."
   },
   {
    "q": "Consider the following statements about 'antibiotics':\n1. Penicillin was discovered by Alexander Fleming.\n2. Antimicrobial resistance is a growing global threat.\n3. India's Red Line campaign marks prescription-only antibiotics.\nSelect the correct answer.",
    "options": [
     "1 and 3 only",
     "2 and 3 only",
     "1, 2 and 3",
     "1 and 2 only"
    ],
    "answer": 2,
    "expl": "Fleming (1928); AMR (WHO top-10 threat, India's NAP 2017); Red Line campaign (2016) on antibiotic packs — all correct."
   },
   {
    "q": "The 'DNA' double-helix structure was proposed by Watson and Crick in:",
    "options": [
     "1975",
     "1953",
     "1944",
     "1962"
    ],
    "answer": 1,
    "expl": "Watson–Crick (1953, Nature), building on Franklin's X-ray data; Nobel 1962 (Wilkins shared)."
   },
   {
    "q": "Which of the following statements about 'stem cells' is/are correct?\n1. Embryonic stem cells are pluripotent.\n2. iPSCs are reprogrammed adult cells.\n3. They hold therapeutic potential for degenerative diseases.",
    "options": [
     "1 and 2 only",
     "1 and 3 only",
     "2 and 3 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "ESCs (pluripotent), iPSCs (Yamanaka, Nobel 2012), regenerative-medicine promise — all correct."
   },
   {
    "q": "The 'Polio' eradication in India was certified in:",
    "options": [
     "2014",
     "2009",
     "2011",
     "2016"
    ],
    "answer": 0,
    "expl": "Last wild polio case: Jan 2011 (Howrah); WHO certified India polio-free March 2014 (South-East Asia region)."
   },
   {
    "q": "Consider the following statements about 'tuberculosis' control in India:\n1. The National TB Elimination Programme aims for TB elimination by 2025.\n2. Nikshay portal tracks TB patients.\n3. BCG vaccine protects against severe childhood TB.\nSelect the correct answer.",
    "options": [
     "1 and 2 only",
     "2 and 3 only",
     "1, 2 and 3",
     "1 and 3 only"
    ],
    "answer": 2,
    "expl": "NTEP (2025 elimination goal, ahead of SDG 2030); Nikshay digital surveillance; BCG (childhood severe TB) — all correct."
   },
   {
    "q": "The 'Ayushman Bharat' scheme provides health cover of:",
    "options": [
     "₹5 lakh per family per year",
     "₹1 lakh per family",
     "₹2 lakh per person",
     "₹10 lakh per family"
    ],
    "answer": 0,
    "expl": "PM-JAY (2018): ₹5 lakh/family/year for secondary/tertiary care — the world's largest health assurance scheme."
   },
   {
    "q": "Which of the following statements about 'defence' technology is/are correct?\n1. Agni-V is an intercontinental ballistic missile.\n2. INS Arihant is India's first indigenous nuclear submarine.\n3. Tejas is an indigenous light combat aircraft.",
    "options": [
     "2 and 3 only",
     "1 and 3 only",
     "1, 2 and 3",
     "1 and 2 only"
    ],
    "answer": 2,
    "expl": "Agni-V (5,000+ km ICBM, MIRV-tested 2024 Mission Divyastra); INS Arihant (SSBN, 2016); Tejas LCA (HAL) — all correct."
   },
   {
    "q": "The 'BrahMos' missile is:",
    "options": [
     "A submarine only",
     "A surface-to-air missile",
     "An Indian ICBM",
     "A supersonic cruise missile developed jointly by India and Russia"
    ],
    "answer": 3,
    "expl": "BrahMos (Brahmaputra–Moskva): Mach 2.8+ supersonic cruise missile — land, sea, air and submarine variants."
   },
   {
    "q": "Consider the following statements about 'INS Vikrant':\n1. It is India's first indigenous aircraft carrier.\n2. It was commissioned in 2022.\n3. It was built by Cochin Shipyard.\nSelect the correct answer.",
    "options": [
     "1 and 3 only",
     "1 and 2 only",
     "1, 2 and 3",
     "2 and 3 only"
    ],
    "answer": 2,
    "expl": "INS Vikrant (IAC-1, 45,000 tonnes): Cochin Shipyard-built, commissioned Sept 2022 — India joined the indigenous-carrier club."
   },
   {
    "q": "The 'S-400' air defence system was procured by India from:",
    "options": [
     "Israel",
     "Russia",
     "France",
     "USA"
    ],
    "answer": 1,
    "expl": "S-400 Triumf (Russia, 2018 deal, deliveries from 2021) — long-range SAM; CAATSA-waiver diplomacy surrounded it."
   },
   {
    "q": "Which of the following statements about 'Drones' regulation in India is/are correct?\n1. The Drone Rules, 2021 liberalised operations.\n2. Drones are categorised by weight.\n3. The Digital Sky platform manages permissions.",
    "options": [
     "1 and 2 only",
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 3 only"
    ],
    "answer": 1,
    "expl": "Drone Rules 2021 (amended 2022): 5 weight classes (nano to large), Digital Sky approvals, PLI for drones — all correct."
   },
   {
    "q": "The 'Kavach' system in Indian Railways is:",
    "options": [
     "A ticketing app",
     "A new coach design",
     "An automatic train protection system",
     "A freight corridor"
    ],
    "answer": 2,
    "expl": "Kavach (RDSO): indigenous ATP preventing collisions/SPAD — being deployed on high-density routes."
   },
   {
    "q": "Consider the following statements about 'hydrogen' energy:\n1. Green hydrogen is produced by electrolysis using renewable electricity.\n2. The National Green Hydrogen Mission was launched in 2023.\n3. India targets 5 MMT annual green hydrogen production by 2030.\nSelect the correct answer.",
    "options": [
     "1 and 3 only",
     "1 and 2 only",
     "1, 2 and 3",
     "2 and 3 only"
    ],
    "answer": 2,
    "expl": "Green H2 (renewable electrolysis); NGHM (Jan 2023, ₹19,744 crore); 5 MMT by 2030 target — all correct."
   },
   {
    "q": "The 'International Solar Alliance' was launched by India and France at:",
    "options": [
     "Rio Summit",
     "G20 Delhi",
     "COP-26, Glasgow",
     "COP-21, Paris (2015)"
    ],
    "answer": 3,
    "expl": "ISA (2015, Paris): solar-rich countries between the tropics; HQ Gurugram — India's flagship climate diplomacy."
   },
   {
    "q": "Which of the following statements about 'semiconductors' in India is/are correct?\n1. The Semicon India programme (2021) incentivises fabs.\n2. SCL Mohali is India's existing fab facility.\n3. The Dholera fab proposal involves Tata-PSMC collaboration.",
    "options": [
     "1 and 3 only",
     "1 and 2 only",
     "2 and 3 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "Semicon India (₹76,000 crore): fab incentives; SCL Chandigarh (ISRO's fab); Tata–PSMC Dholera fab approved 2024 — all correct."
   },
   {
    "q": "The 'Chandrayaan-4' mission planned by ISRO is intended to:",
    "options": [
     "Orbit Venus",
     "Land humans on the Moon",
     "Mine asteroids",
     "Bring lunar samples back to Earth"
    ],
    "answer": 3,
    "expl": "Chandrayaan-4 (approved 2024): lunar sample-return — technology precursor for the planned 2040 crewed Moon landing."
   },
   {
    "q": "Consider the following statements about 'LiDAR' technology:\n1. It uses laser pulses to map terrain.\n2. It was used for the Central Vista and SVAMITVA surveys.\n3. It can penetrate forest canopy.\nSelect the correct answer.",
    "options": [
     "1 and 3 only",
     "2 and 3 only",
     "1, 2 and 3",
     "1 and 2 only"
    ],
    "answer": 2,
    "expl": "LiDAR (laser ranging): SVAMITVA drone surveys for rural property cards; canopy-penetrating topographic mapping — all correct."
   }
  ]
 }

);
})();
