/* ==========================================================================
   EPH Topic Library data — UPSC CSE, part 4: Wave 2 expansion question bank.
   Augments window.EPH_TOPIC_DATA (load order: topics-upsc.js ->
   topics-upsc-2.js -> topics-upsc-3.js -> topics-upsc-4.js -> renderer):
     window.EPH_TOPIC_DATA.topics.push( 8 question-bank topic objects );
   Topic contract: { id, title, subject, tag, blurb, intro,
     sections:[{h, body?, table?, svg?, svgCap?}],
     questions:[{q, options[4], answer (0-3), expl}] }
   175 NEW questions (IR 35, CA 2026 25, Sci-Tech 25, Environment 25,
   Indian Society 20, Ethics 15, Governance 15, Disaster Management 15),
   written for the thinnest corners of the bank and deduped against all
   790 existing questions (0 overlap, strict 8-word-shingle screen).
   Explanations keep approximate/as-reported cautions where attached.
   All content is original, written for this site.
   ========================================================================== */
(function () {
if(!window.EPH_TOPIC_DATA) return;

window.EPH_TOPIC_DATA.topics.push(...
[
 {
  "id": "upsc-bank-ir-2026",
  "title": "International Relations — Wave 2 Bank (35 MCQs)",
  "subject": "International Relations",
  "tag": "Prelims GS I · Practice bank",
  "blurb": "Summits, groupings and doctrines — with 2025–26 updates.",
  "intro": "A 35-question bank on international relations, weighted to the thinnest corner of the bank and updated with the 2025–26 summit cycle. Solve in timed sets and read every explanation.",
  "sections": [
   {
    "h": "How to use this bank",
    "body": "<p>Groupings questions turn on three facts — members, mandate, and headquarters. Summits questions turn on three more — host city, year, and outcome document. Attempt in sets of 25 under timed conditions.</p>"
   }
  ],
  "questions": [
   {
    "q": "With reference to the 2026 SCO Summit, consider the following statements:\n1. It was held in Bishkek and marked the 25th anniversary of the Shanghai Cooperation Organisation.\n2. India outlined three priorities at the summit: security, connectivity and opportunity.\n3. The summit adopted the Bishkek Declaration.\nWhich of the statements given above are correct?",
    "options": [
     "1 and 2 only",
     "1, 2 and 3",
     "1 and 3 only",
     "2 and 3 only"
    ],
    "answer": 1,
    "expl": "The 26th SCO Summit was held in Bishkek on 31 August–1 September 2026, marking 25 years of the SCO (founded 2001). Prime Minister Modi highlighted security, connectivity and opportunity as India's priorities, reiterated zero tolerance to terrorism with no double standards, and the summit adopted the Bishkek Declaration."
   },
   {
    "q": "Consider the following statements about India's 2026 BRICS chairship:\n1. India hosted the 18th BRICS Summit in New Delhi in September 2026.\n2. It was India's first BRICS chairship.\nWhich of the statements given above is/are correct?",
    "options": [
     "Both 1 and 2",
     "Neither 1 nor 2",
     "1 only",
     "2 only"
    ],
    "answer": 2,
    "expl": "India hosted the 18th BRICS Summit in New Delhi on 12–13 September 2026 during its 2026 chairship. India had chaired BRICS earlier as well, including the 2021 summit, so it was not the first chairship."
   },
   {
    "q": "The G20 Summit scheduled for December 2026 will be hosted by which country and in which city?",
    "options": [
     "United States — Miami",
     "France — Paris",
     "Japan — Osaka",
     "Brazil — Rio de Janeiro"
    ],
    "answer": 0,
    "expl": "The United States holds the G20 presidency in 2026, and the summit is scheduled in Miami on 14–15 December 2026. India hosted the 18th G20 Summit in New Delhi in 2023."
   },
   {
    "q": "COP31, the UN climate conference scheduled for 9–20 November 2026, will be held in which city?",
    "options": [
     "Dubai, UAE",
     "Antalya, Türkiye",
     "Bonn, Germany",
     "Belém, Brazil"
    ],
    "answer": 1,
    "expl": "COP31 is scheduled in Antalya, Türkiye, from 9 to 20 November 2026. Türkiye's hosting followed the usual regional rotation among UNFCCC parties."
   },
   {
    "q": "With reference to the Shanghai Cooperation Organisation (SCO), consider the following statements:\n1. India became a full member of the SCO at the Astana Summit in 2017.\n2. The SCO's Regional Anti-Terrorist Structure (RATS) is headquartered in Tashkent.\n3. Belarus became a full member of the SCO in 2024.\nWhich of the statements given above are correct?",
    "options": [
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 2 only",
     "1 and 3 only"
    ],
    "answer": 0,
    "expl": "All three statements are correct. India (with Pakistan) joined the SCO as a full member at Astana in 2017, RATS is headquartered at Tashkent in Uzbekistan, and Belarus became the tenth full member in 2024 after Iran joined in 2023."
   },
   {
    "q": "Which of the following countries are full members of the Shanghai Cooperation Organisation as of 2026?\n1. Iran\n2. Belarus\n3. Mongolia\n4. Türkiye",
    "options": [
     "1, 2 and 3",
     "1 and 2 only",
     "2, 3 and 4",
     "1, 2, 3 and 4"
    ],
    "answer": 1,
    "expl": "The SCO has ten full members: China, Russia, India, Pakistan, Iran, Kazakhstan, Kyrgyzstan, Tajikistan, Uzbekistan and Belarus. Mongolia and Türkiye are associated countries (Mongolia is an observer; Türkiye a dialogue partner), not full members."
   },
   {
    "q": "The SCO Plus format used at the 2026 Bishkek summit brought together leaders from associated countries. Which of the following participated in that expanded format?\n1. Türkiye\n2. Azerbaijan\n3. Armenia\n4. Mongolia",
    "options": [
     "1, 2, 3 and 4",
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 4 only"
    ],
    "answer": 0,
    "expl": "The expanded SCO Plus format at Bishkek brought together leaders from more than a dozen associated countries, including Türkiye, Azerbaijan, Armenia and Mongolia, alongside UN Secretary-General António Guterres."
   },
   {
    "q": "India hosted the Quad Foreign Ministers' Meeting in 2026. Where and when was it held?",
    "options": [
     "Sydney — 2 April 2026",
     "Tokyo — 14 March 2026",
     "Honolulu — 9 June 2026",
     "New Delhi — 26 May 2026"
    ],
    "answer": 3,
    "expl": "India hosted the Quad Foreign Ministers' Meeting in New Delhi on 26 May 2026. The Quad comprises India, Australia, Japan and the United States, and its foreign-minister meetings rotate among the members."
   },
   {
    "q": "The 4th India-Africa Forum Summit (IAFS-IV) was held in 2026. Consider the following statements:\n1. It was held in New Delhi on 31 May 2026 in collaboration with the African Union Commission.\n2. The African Union became a permanent member of the G20 at India's initiative during the New Delhi G20 Summit of 2023.\nWhich of the statements given above is/are correct?",
    "options": [
     "Neither 1 nor 2",
     "1 only",
     "2 only",
     "Both 1 and 2"
    ],
    "answer": 3,
    "expl": "IAFS-IV was hosted by India in New Delhi on 31 May 2026 with the African Union Commission. Earlier, at India's initiative, the African Union was admitted as a permanent member of the G20 at the 2023 New Delhi Summit — the first expansion of the grouping's permanent membership."
   },
   {
    "q": "With reference to the ASEAN Summits and East Asia Summit of 2026, consider the following statements:\n1. The main ASEAN Summit is scheduled in the Philippines in November 2026.\n2. India is a full member of ASEAN.\nWhich of the statements given above is/are correct?",
    "options": [
     "Neither 1 nor 2",
     "Both 1 and 2",
     "1 only",
     "2 only"
    ],
    "answer": 2,
    "expl": "The main ASEAN Summit of 2026 is scheduled in the Philippines for 10–12 November 2026, with the East Asia Summit alongside it. India is not a member of ASEAN; it is a dialogue partner and participates in the ASEAN-India Summit and the East Asia Summit."
   },
   {
    "q": "Consider the following statements about BRICS:\n1. Egypt, Ethiopia, Iran and the United Arab Emirates became full BRICS members in 2024.\n2. Indonesia joined BRICS as a full member in 2025.\nWhich of the statements given above is/are correct?",
    "options": [
     "2 only",
     "Both 1 and 2",
     "Neither 1 nor 2",
     "1 only"
    ],
    "answer": 1,
    "expl": "At the 2024 Kazan Summit, BRICS admitted Egypt, Ethiopia, Iran and the UAE as full members following the 2023 Johannesburg invitation. Indonesia joined as a full member in January 2025, taking the grouping's full membership into double digits."
   },
   {
    "q": "The India–UK Free Trade Agreement, concluded in 2025, is notable for which of the following tariff outcomes?",
    "options": [
     "Complete elimination of all tariffs on agricultural goods by both sides",
     "Exclusion of the services sector from the agreement's scope",
     "Reduction of India's tariff on UK whisky and gin from 150% in a phased manner",
     "A uniform 10% tariff on all pharmaceutical products"
    ],
    "answer": 2,
    "expl": "Under the India–UK FTA concluded in May 2025, India agreed to cut its 150% tariff on UK whisky and gin to 75% immediately and then to 40% over ten years, while the UK eliminated tariffs on a wide range of Indian goods. The deal also covers services and was India's most significant trade pact with a developed economy in years."
   },
   {
    "q": "The India–Australia Economic Cooperation and Trade Agreement (ECTA) is significant because it was:",
    "options": [
     "Signed before the India–UAE CEPA",
     "The first agreement to include a digital trade chapter in Asia",
     "Limited to agricultural goods only",
     "India's first trade agreement with a developed country in over a decade"
    ],
    "answer": 3,
    "expl": "The India–Australia ECTA, signed in April 2022 and in force from December 2022, was India's first trade agreement with a developed country in over a decade. It preceded the deeper CECA negotiations and came shortly after the India–UAE CEPA of February 2022."
   },
   {
    "q": "In April 2025, India held the Indus Waters Treaty (1960) in abeyance. What was the immediate trigger for this decision?",
    "options": [
     "Pakistan's withdrawal from the SAARC summit",
     "A ruling of the Permanent Court of Arbitration",
     "The completion of the Kishanganga project",
     "The Pahalgam terror attack of 22 April 2025"
    ],
    "answer": 3,
    "expl": "Following the Pahalgam terror attack of 22 April 2025, India announced that the Indus Waters Treaty would be held in abeyance until Pakistan credibly and irrevocably abjures its support for cross-border terrorism. The treaty, brokered by the World Bank in 1960, had survived three wars before this suspension."
   },
   {
    "q": "The 6th BIMSTEC Summit was held in Bangkok, Thailand, in April 2025. Which of the following is NOT a member of BIMSTEC?",
    "options": [
     "Bhutan",
     "Nepal",
     "Maldives",
     "Myanmar"
    ],
    "answer": 2,
    "expl": "BIMSTEC has seven members: Bangladesh, Bhutan, India, Myanmar, Nepal, Sri Lanka and Thailand. The Maldives is not a member; it belongs to SAARC but has stayed out of the Bay of Bengal grouping."
   },
   {
    "q": "Consider the following statements about the Raisina Dialogue:\n1. It is India's flagship annual conference on geopolitics and geo-economics.\n2. It is jointly organised by the Ministry of External Affairs and the Observer Research Foundation.\nWhich of the statements given above is/are correct?",
    "options": [
     "Both 1 and 2",
     "1 only",
     "2 only",
     "Neither 1 nor 2"
    ],
    "answer": 0,
    "expl": "The Raisina Dialogue, held annually in New Delhi, is India's premier conference on geopolitics and geo-economics, modelled loosely on the Shangri-La Dialogue. It is organised jointly by the Ministry of External Affairs and the Observer Research Foundation."
   },
   {
    "q": "The 'Vaccine Maitri' initiative is associated with which of the following?",
    "options": [
     "The WHO's global immunisation alliance headquartered in Geneva",
     "India's veterinary vaccine diplomacy in Central Asia",
     "A joint India–Africa malaria vaccine research programme",
     "Supply of COVID-19 vaccines by India to partner countries during the pandemic"
    ],
    "answer": 3,
    "expl": "Under Vaccine Maitri, launched in January 2021, India supplied Made-in-India COVID-19 vaccines (Covishield and Covaxin) as grants and commercial exports to nearly 100 countries, making it one of the largest vaccine diplomacy exercises of the pandemic."
   },
   {
    "q": "The G4 grouping, which seeks reform of the UN Security Council, comprises:",
    "options": [
     "India, Indonesia, Mexico and Türkiye",
     "India, Japan, Germany and Brazil",
     "India, South Africa, Nigeria and Egypt",
     "India, Japan, Australia and the USA"
    ],
    "answer": 1,
    "expl": "The G4 — India, Japan, Germany and Brazil — campaigns for permanent seats for itself on a reformed UN Security Council. The grouping supports each other's candidacies and has repeatedly tabled reform proposals, though the P5's veto remains the central obstacle."
   },
   {
    "q": "With reference to India's participation in UN peacekeeping, consider the following statements:\n1. India is among the largest cumulative contributors of troops to UN peacekeeping missions.\n2. India currently has no personnel serving in any UN mission.\nWhich of the statements given above is/are correct?",
    "options": [
     "Both 1 and 2",
     "2 only",
     "Neither 1 nor 2",
     "1 only"
    ],
    "answer": 3,
    "expl": "India is the largest cumulative contributor of troops to UN peacekeeping, with over 2,90,000 personnel having served in more than 50 missions. Indian personnel continue to serve in missions such as UNMISS (South Sudan) and MONUSCO (DR Congo), so the second statement is wrong."
   },
   {
    "q": "The Panchsheel Agreement of 1954, signed between India and China, is significant because it:",
    "options": [
     "Established the Line of Actual Control",
     "First enunciated the Five Principles of Peaceful Coexistence, including mutual respect for sovereignty",
     "Settled the McMahon Line dispute",
     "Created the Shanghai Cooperation Organisation"
    ],
    "answer": 1,
    "expl": "The 1954 Agreement on Trade and Intercourse between the Tibet region of China and India first codified the Five Principles of Peaceful Coexistence (Panchsheel): mutual respect for territorial integrity and sovereignty, mutual non-aggression, mutual non-interference, equality and mutual benefit, and peaceful coexistence."
   },
   {
    "q": "The India–Bangladesh Land Boundary Agreement (2015) was given effect in India through which constitutional amendment?",
    "options": [
     "99th Amendment",
     "101st Amendment",
     "100th Amendment",
     "98th Amendment"
    ],
    "answer": 2,
    "expl": "The 100th Constitutional Amendment Act, 2015 ratified the Land Boundary Agreement with Bangladesh, enabling the historic exchange of 111 Indian enclaves in Bangladesh and 51 Bangladeshi enclaves in India and settling a boundary dispute dating to Partition."
   },
   {
    "q": "The Colombo Security Conclave is a regional security grouping. Which of the following are its members?\n1. India\n2. Sri Lanka\n3. Maldives\n4. Mauritius",
    "options": [
     "1, 2, 3 and 4",
     "1, 3 and 4",
     "1, 2 and 3",
     "1 and 2 only"
    ],
    "answer": 0,
    "expl": "The Colombo Security Conclave has four members — India, Sri Lanka, Maldives and Mauritius — with Bangladesh and Seychelles as observers. It focuses on maritime security, counter-terrorism and humanitarian assistance in the Indian Ocean region."
   },
   {
    "q": "The I2U2 grouping consists of which countries?",
    "options": [
     "India, Italy, Ukraine and USA",
     "India, Israel, UAE and USA",
     "India, Iran, UK and USA",
     "India, Indonesia, UAE and USA"
    ],
    "answer": 1,
    "expl": "I2U2 — the two I's (India, Israel) and two U's (UAE, USA) — is a minilateral focused on joint investments in water, energy, transportation, space, health and food security. Its first virtual summit was held in July 2022."
   },
   {
    "q": "In May 2024, India signed a long-term agreement with Iran concerning the Chabahar port. What is its key feature?",
    "options": [
     "Transfer of ownership of the port to an Indian consortium",
     "Exclusion of Afghanistan from the transit arrangement",
     "A joint India–Iran naval base at Chabahar",
     "A 10-year contract for India to operate the Shahid Beheshti terminal"
    ],
    "answer": 3,
    "expl": "India Ports Global Ltd signed a 10-year contract in May 2024 to equip and operate the Shahid Beheshti terminal at Chabahar — India's first long-term overseas port management agreement. Chabahar gives India an alternative route to Afghanistan and Central Asia bypassing Pakistan."
   },
   {
    "q": "The Indo-Pacific Oceans Initiative (IPOI), launched by India in 2019, was announced at which forum?",
    "options": [
     "G20 Summit in Osaka",
     "East Asia Summit in Bangkok",
     "SCO Summit in Bishkek",
     "BRICS Summit in Brasília"
    ],
    "answer": 1,
    "expl": "Prime Minister Modi announced the Indo-Pacific Oceans Initiative at the 14th East Asia Summit in Bangkok in November 2019. The IPOI rests on seven pillars including maritime security, marine ecology, capacity building and disaster risk reduction."
   },
   {
    "q": "With reference to the Indus Waters Treaty, consider the following statements:\n1. It allocates the three eastern rivers (Ravi, Beas, Sutlej) to India and the three western rivers (Indus, Jhelum, Chenab) to Pakistan.\n2. The treaty was brokered by the World Bank and signed in 1960.\nWhich of the statements given above is/are correct?",
    "options": [
     "Neither 1 nor 2",
     "1 only",
     "Both 1 and 2",
     "2 only"
    ],
    "answer": 2,
    "expl": "Both statements are correct. The World Bank-brokered treaty of 1960 gave India unrestricted use of the eastern rivers and Pakistan the western rivers, with India permitted limited non-consumptive uses (such as run-of-the-river hydroelectricity) on the western rivers."
   },
   {
    "q": "India's G20 Sherpa for the 2023 New Delhi Summit was:",
    "options": [
     "Amitabh Kant",
     "Ajay Seth",
     "Shaktikanta Das",
     "S. Jaishankar"
    ],
    "answer": 0,
    "expl": "Amitabh Kant, former CEO of NITI Aayog, served as India's G20 Sherpa for its 2023 presidency, steering the negotiations that produced the New Delhi Leaders' Declaration with its landmark consensus on the Ukraine conflict paragraph."
   },
   {
    "q": "Consider the following statements about SAARC:\n1. The last SAARC Summit was held in Kathmandu in 2014.\n2. Afghanistan is a member of SAARC.\nWhich of the statements given above is/are correct?",
    "options": [
     "2 only",
     "Neither 1 nor 2",
     "Both 1 and 2",
     "1 only"
    ],
    "answer": 2,
    "expl": "The 18th SAARC Summit in Kathmandu (November 2014) remains the last, after the 2016 Islamabad summit was cancelled following the Uri attack. Afghanistan joined SAARC as its eighth member in 2007."
   },
   {
    "q": "The Shanghai Five mechanism, the precursor of the SCO, was established in 1996 by which set of countries?",
    "options": [
     "China, Russia, Kazakhstan, Kyrgyzstan and Tajikistan",
     "China, Japan, South Korea, Russia and Mongolia",
     "China, India, Pakistan, Iran and Mongolia",
     "Russia, Belarus, Armenia, Kazakhstan and Kyrgyzstan"
    ],
    "answer": 0,
    "expl": "The Shanghai Five — China, Russia, Kazakhstan, Kyrgyzstan and Tajikistan — was formed in 1996 to settle border disputes and build mutual trust. Uzbekistan joined in 2001, converting the mechanism into the Shanghai Cooperation Organisation."
   },
   {
    "q": "With reference to India's UNSC engagements, consider the following statements:\n1. India served its eighth term as a non-permanent member of the UN Security Council during 2021–22.\n2. India has never held the presidency of the Security Council.\nWhich of the statements given above is/are correct?",
    "options": [
     "2 only",
     "Neither 1 nor 2",
     "1 only",
     "Both 1 and 2"
    ],
    "answer": 2,
    "expl": "India served its eighth two-year term on the UNSC in 2021–22, winning 184 of 193 votes. India has held the Council presidency multiple times, including in August 2021 and December 2022 during that term, so the second statement is wrong."
   },
   {
    "q": "The Bishkek Declaration adopted at the 2026 SCO Summit primarily concerns:",
    "options": [
     "The creation of a common SCO currency",
     "A mutual defence pact among SCO members",
     "Dissolution of the Regional Anti-Terrorist Structure",
     "The 25th anniversary of the SCO and shared positions on regional security, development and connectivity"
    ],
    "answer": 3,
    "expl": "The Bishkek Declaration on the 25th Anniversary of the SCO recorded the members' shared positions on regional security, counter-terrorism, development and connectivity. India used the occasion to press for zero tolerance to terrorism without double standards."
   },
   {
    "q": "Which of the following groupings does India NOT belong to?\n1. Quad\n2. AUKUS\n3. I2U2\n4. Colombo Security Conclave",
    "options": [
     "1, 2 and 3",
     "2 only",
     "1 and 3",
     "2 and 4"
    ],
    "answer": 1,
    "expl": "India is a member of the Quad, I2U2 and the Colombo Security Conclave, but not of AUKUS — the trilateral security pact between Australia, the United Kingdom and the United States, which centres on nuclear-powered submarine cooperation."
   },
   {
    "q": "The 2026 SCO Summit was held in an expanded 'SCO Plus' format. The Regional Anti-Terrorist Structure (RATS), a permanent SCO body, deals primarily with:",
    "options": [
     "Setting common external tariffs for SCO trade",
     "Managing joint space exploration programmes",
     "Resolving border disputes between member states",
     "Coordinating counter-terrorism, counter-separatism and counter-extremism cooperation among members"
    ],
    "answer": 3,
    "expl": "RATS, headquartered in Tashkent, is the SCO's permanent organ for coordinating cooperation against terrorism, separatism and extremism — the 'three evils' named in the SCO Charter. India participates actively in RATS exercises and intelligence-sharing."
   },
   {
    "q": "Consider the following statements about India Energy Week 2026:\n1. It was held in Goa from 27–30 January 2026.\n2. It brought together energy ministers and participants from more than 120 countries.\nWhich of the statements given above is/are correct?",
    "options": [
     "2 only",
     "1 only",
     "Both 1 and 2",
     "Neither 1 nor 2"
    ],
    "answer": 2,
    "expl": "India Energy Week 2026 was held in Goa from 27 to 30 January 2026, drawing energy ministers, policymakers and CEOs from more than 120 countries. It has become India's flagship global energy gathering, reflecting the country's growing role in energy markets and transition debates."
   },
   {
    "q": "India's 'Act East' policy, a cornerstone of its Indo-Pacific engagement, was originally launched as 'Look East' by which Prime Minister?",
    "options": [
     "P. V. Narasimha Rao",
     "Manmohan Singh",
     "Atal Bihari Vajpayee",
     "Rajiv Gandhi"
    ],
    "answer": 0,
    "expl": "The Look East Policy was launched by Prime Minister P. V. Narasimha Rao in the early 1990s after the Cold War, aiming to reorient India toward Southeast Asia. It was upgraded to 'Act East' in 2014, signalling a shift from passive observation to active engagement."
   }
  ]
 },
 {
  "id": "upsc-bank-ca-2026",
  "title": "Current Affairs 2026 — Wave 2 Bank (33 MCQs)",
  "subject": "Current Affairs",
  "tag": "Prelims GS I · Practice bank",
  "blurb": "September 2026 developments — monsoon, missions, summits and economic markers.",
  "intro": "A 25-question bank built on verified developments of mid-to-late 2026 — the kind of 'last one year' current affairs that dominates the Prelims paper. Figures are as reported; cross-check fast-moving numbers from official sources.",
  "sections": [
   {
    "h": "How to use this bank",
    "body": "<p>Treat each question as a revision hook: the explanation tells you why the development matters for the syllabus. Attempt in sets of 25 under timed conditions.</p>"
   }
  ],
  "questions": [
   {
    "q": "With reference to the southwest monsoon of 2026, consider the following statements:\n1. Cumulative rainfall was about 15% below the long-period average, making it potentially the weakest monsoon since 2009.\n2. The monsoon began withdrawing from west Rajasthan on 19 September 2026, two days later than normal.\n3. The southern peninsula recorded the sharpest regional deficit, of nearly 28–29%.\nWhich of the statements given above are correct?",
    "options": [
     "1 and 3 only",
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 2 only"
    ],
    "answer": 1,
    "expl": "All three statements are correct. IMD data put the 2026 seasonal deficit at about 15% (706.9 mm against a normal of 832.4 mm up to late September), withdrawal began from west Rajasthan on 19 September against a normal date of 17 September, and the southern peninsula's deficit was around 28.5%, with 14 states recording deficits above 20%."
   },
   {
    "q": "The El Niño conditions of 2026 were in the news for which of the following reasons?",
    "options": [
     "India declared El Niño a national disaster under the DM Act",
     "El Niño collapsed in June 2026, ending the monsoon deficit",
     "The El Niño of 2026 was the first ever recorded in the Pacific",
     "A strengthening El Niño raised farm risks during the 2026 monsoon and was expected by WMO to persist through February 2027"
    ],
    "answer": 3,
    "expl": "The 2026 El Niño strengthened through the monsoon season (the Niño 3.4 index rose to 2.53), suppressing rainfall, and the World Meteorological Organization expected it to persist through February 2027. A positive Indian Ocean Dipole partly offset its impact on Indian rainfall."
   },
   {
    "q": "According to the IIT Gandhinagar India Drought Monitor, what share of the country's area was under dry or drought conditions around mid-September 2026?",
    "options": [
     "About 18%",
     "About 31%",
     "About 52%",
     "About 74%"
    ],
    "answer": 2,
    "expl": "Around 52% of India's area was under dry or drought conditions as of 16 September 2026, up from about 39% a month earlier — a spread that climate scientists at IIT Bombay described as qualitatively worse in persistence and spread than the 2015–16 drought."
   },
   {
    "q": "India's GDP growth in the April–June quarter of FY 2026–27 (Q1) was reported at:",
    "options": [
     "6.5%",
     "7.2%",
     "7.8%",
     "8.4%"
    ],
    "answer": 2,
    "expl": "Real GDP grew 7.8% in the April–June quarter of FY 2026–27, with manufacturing and services supporting the expansion. For the full FY26, GDP growth was reported at 7.7%."
   },
   {
    "q": "In September 2026, India's foreign exchange reserves touched a record high. What was the reported level in the week ended 4 September 2026?",
    "options": [
     "$785.7 billion",
     "$912.4 billion",
     "$701.9 billion",
     "$642.3 billion"
    ],
    "answer": 0,
    "expl": "RBI data showed forex reserves at a record $785.7 billion in the week ended 4 September 2026, rising for the tenth consecutive week. India is the world's fourth-largest holder of foreign exchange reserves."
   },
   {
    "q": "On 26 September 2026, the Union Finance Minister expressed confidence that India could achieve economic growth of more than 10%. Where did she make this remark?",
    "options": [
     "At the RBI's central board meeting in Mumbai",
     "At the World Economic Forum in Davos",
     "At a fireside chat organised by the IIT Madras Alumni Association in Bengaluru",
     "At the G20 Finance Ministers' meeting in Washington"
    ],
    "answer": 2,
    "expl": "Nirmala Sitharaman told a fireside chat organised by the IIT Madras Alumni Association in Bengaluru on 26 September 2026 that 10%+ growth was possible with greater technology adoption and innovation, while stressing it would require 'a lot more effort' from all sides."
   },
   {
    "q": "Between April and July of FY 2026–27, India's merchandise exports grew by 17% despite the West Asia disruption. Which category led export growth in this period?",
    "options": [
     "Iron ore",
     "Gems and jewellery",
     "Petroleum products",
     "Telecom equipment"
    ],
    "answer": 3,
    "expl": "Telecom equipment led India's export growth between April and July FY27 even as petroleum and diamond exports declined. Services exports rose 8.8% in the same period, and the US remained India's top export market."
   },
   {
    "q": "In September 2026, which international credit rating agency upgraded India's sovereign rating to 'A-'?",
    "options": [
     "Moody's",
     "Fitch",
     "Standard & Poor's",
     "Japan Credit Rating Agency (JCR)"
    ],
    "answer": 3,
    "expl": "The Japan Credit Rating Agency upgraded India to 'A-' in September 2026, while Fitch and S&P affirmed their ratings with stable outlooks. The upgrade reflected India's growth resilience and reform momentum."
   },
   {
    "q": "On 16 September 2026, the Union Cabinet approved raising the wage ceiling for mandatory EPFO coverage. What was the change?",
    "options": [
     "From ₹25,000 to ₹40,000 per month",
     "From ₹21,000 to ₹30,000 per month",
     "From ₹10,000 to ₹15,000 per month",
     "From ₹15,000 to ₹25,000 per month"
    ],
    "answer": 3,
    "expl": "The Cabinet raised the mandatory EPFO wage ceiling from ₹15,000 to ₹25,000 a month on 16 September 2026 — the first revision since September 2014. Over 51 lakh additional employees are expected to come under mandatory provident fund, pension and insurance cover."
   },
   {
    "q": "The draft National Electricity Policy (NEP) 2026 was sent to the Union Cabinet in September 2026. Which of the following is correct about it?\n1. The previous NEP was notified in 2005.\n2. India has reached 300 GW of non-fossil installed capacity.\n3. The draft emphasises grid management, transmission and financial viability of the sector.",
    "options": [
     "1 and 2 only",
     "2 and 3 only",
     "1 and 3 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "Power Secretary Pankaj Agarwal said on 24 September 2026 that the draft NEP 2026 had been sent for inter-ministerial consultation. The last NEP dated to 2005; India now has 300 GW of non-fossil capacity, so the new policy's challenges are grid management, transmission and commercial viability rather than access."
   },
   {
    "q": "In September 2026, a Botswana-origin female cheetah was released into the Gandhi Sagar Wildlife Sanctuary. What was she renamed?",
    "options": [
     "Nirva",
     "Radha",
     "Mukti",
     "Asha"
    ],
    "answer": 1,
    "expl": "Chief Minister Mohan Yadav released the three-year-old Botswanan female CCB-2 into Gandhi Sagar Wildlife Sanctuary on 20 September 2026, renaming her Radha on the occasion of Radha Ashtami. She became the sanctuary's fourth cheetah."
   },
   {
    "q": "As of September 2026, India's cheetah population under Project Cheetah stood at 56. Which of the following statements is correct?",
    "options": [
     "All 56 cheetahs were imported from Africa",
     "The project completed two years in September 2026",
     "Cheetahs are now found in the wild in all Indian states",
     "About 36 of the 56 were born in India, and a fresh batch had arrived from Botswana in February 2026"
    ],
    "answer": 3,
    "expl": "Project Cheetah completed four years in September 2026 with 56 cheetahs, of which about 36 were born in India. A fresh batch arrived from Botswana in February 2026, and the animals are concentrated at Kuno National Park and Gandhi Sagar Wildlife Sanctuary in Madhya Pradesh."
   },
   {
    "q": "Which site has received in-principle approval as Madhya Pradesh's third cheetah habitat under Project Cheetah?",
    "options": [
     "Satpura Tiger Reserve, Narmadapuram",
     "Panna Tiger Reserve, Panna",
     "Veerangana Durgavati Tiger Reserve (Nauradehi), Sagar",
     "Bandhavgarh Tiger Reserve, Umaria"
    ],
    "answer": 2,
    "expl": "The state cabinet gave in-principle approval to develop the Veerangana Durgavati Tiger Reserve at Nauradehi in Sagar district as Madhya Pradesh's third cheetah habitat, after Kuno National Park (first, 2022) and Gandhi Sagar Sanctuary (second, 2025)."
   },
   {
    "q": "In September 2026, the Lakhpati Didi target under DAY-NRLM was revised. What was the revision?",
    "options": [
     "From 2 crore to 3 crore women",
     "From 1 crore to 2 crore women",
     "From 5 crore to 10 crore women",
     "From 3 crore to 6 crore women"
    ],
    "answer": 3,
    "expl": "At a review chaired by Union Minister Shivraj Singh Chouhan in early September 2026, the Lakhpati Didi target was doubled from 3 crore to 6 crore women, with about 3.5 crore Lakhpati Didis created so far. A Lakhpati Didi is an SHG woman member whose household earns at least ₹1 lakh annually."
   },
   {
    "q": "The Centre extended the Armed Forces (Special Powers) Act, 1958 in parts of three states for six more months effective 1 October 2026. Which states are covered?",
    "options": [
     "Manipur, Nagaland and Arunachal Pradesh",
     "Assam, Meghalaya and Tripura",
     "Jammu & Kashmir, Punjab and Rajasthan",
     "Chhattisgarh, Odisha and Jharkhand"
    ],
    "answer": 0,
    "expl": "The Ministry of Home Affairs extended AFSPA in specified areas of Manipur, Nagaland and Arunachal Pradesh for six more months from 1 October 2026, continuing the periodic review-based extensions in the Northeast."
   },
   {
    "q": "As of 2 September 2026, the number of beneficiaries under the Pradhan Mantri Jan Dhan Yojana stood at:",
    "options": [
     "72.8 crore",
     "41.2 crore",
     "59.21 crore",
     "33.5 crore"
    ],
    "answer": 2,
    "expl": "Jan Dhan accounts reached 59.21 crore beneficiaries as of 2 September 2026, with deposits totalling ₹3.17 lakh crore and 41.39 crore RuPay debit cards issued. Women held about 32.98 crore of these accounts."
   },
   {
    "q": "With reference to India's Gaganyaan programme as of September 2026, consider the following statements:\n1. ISRO launched the EOS-05 earth observation satellite aboard GSLV-F17 on 4 September 2026.\n2. The first uncrewed Gaganyaan mission (G1) is targeted for launch within calendar year 2026.\n3. ISRO successfully conducted a flight acceptance hot test of the CE20 cryogenic engine on 9 September 2026.\nWhich of the statements given above are correct?",
    "options": [
     "1 and 2 only",
     "2 and 3 only",
     "1, 2 and 3",
     "1 and 3 only"
    ],
    "answer": 2,
    "expl": "All three are correct. GSLV-F17 carried EOS-05 to orbit on 4 September 2026; ISRO Chairman V. Narayanan said vigorous work was on for the first uncrewed Gaganyaan mission in calendar 2026 with over 8,000 tests completed; and the CE20 cryogenic engine's hot test (thrust raised to 22 tonnes) succeeded on 9 September 2026 at Mahendragiri."
   },
   {
    "q": "ISRO Chairman V. Narayanan has indicated that Indian astronauts could fly to space under Gaganyaan by which timeline?",
    "options": [
     "2032",
     "Early 2028",
     "Late 2026",
     "Mid 2030"
    ],
    "answer": 1,
    "expl": "After the successful CE20 cryogenic engine test in September 2026, the ISRO Chairman said humans would be sent into space in early 2028, following three uncrewed missions. The Gaganyaan architecture envisages three Indian astronauts on a three-day mission to a 400 km orbit."
   },
   {
    "q": "The new launch complex at Kulasekarapattinam in Tamil Nadu, being developed by ISRO, is expected to be ready by when, and is primarily meant for which class of launches?",
    "options": [
     "January 2027 — commercial communication satellites",
     "March 2027 — small satellite launches",
     "June 2028 — interplanetary missions",
     "December 2026 — crewed Gaganyaan launches"
    ],
    "answer": 1,
    "expl": "The Kulasekarapattinam spaceport is expected to be ready by March 2027 and is designed primarily for small-satellite launches (SSLV-class), giving ISRO a dedicated east-coast facility that avoids dog-leg manoeuvres over Sri Lanka."
   },
   {
    "q": "India's nominal GDP was estimated at what level in September 2026 reporting?",
    "options": [
     "Around $4.15 trillion",
     "Around $2.9 trillion",
     "Around $5.2 trillion",
     "Around $3.4 trillion"
    ],
    "answer": 0,
    "expl": "India's nominal GDP was estimated at around $4.15 trillion in September 2026 reporting, making it the world's fourth-largest economy in nominal terms, behind the US, China and Germany."
   },
   {
    "q": "The revised Model Bilateral Investment Treaty (BIT) framework was in the news in September 2026 because:",
    "options": [
     "India withdrew from all existing BITs",
     "Parliament had already passed it as an Act",
     "It was sent to the Union Cabinet for approval, with 4–5 investment pacts expected under the new framework",
     "The Supreme Court struck it down"
    ],
    "answer": 2,
    "expl": "The revised Model BIT was sent to the Cabinet Secretariat for approval in September 2026. The review, announced in the 2025–26 Budget to make the framework more investor-friendly, is expected to enable 4–5 bilateral investment treaties to be finalised or advanced."
   },
   {
    "q": "In September 2026, the Chhattisgarh Cabinet approved a startup fund and changed a service rule. Which of the following is correct?",
    "options": [
     "A ₹1,000 crore startup fund over ten years, and the age limit lowered to 40",
     "A ₹2,000 crore fund restricted to the capital region",
     "A ₹500 crore startup fund over five years, and the upper age limit for government jobs raised to 45",
     "A ₹250 crore fund for agritech only, with no change in age limits"
    ],
    "answer": 2,
    "expl": "On 9 September 2026, the Chhattisgarh Cabinet under CM Vishnu Deo Sai approved a ₹500 crore startup fund over five years — with entrepreneurship development centres in all 33 districts and 100 emerging-technology labs — and raised the upper age limit for government jobs to 45."
   },
   {
    "q": "The Delhi Cabinet's September 2026 amendment to the Delhi Solar Energy Policy targets 2.30 lakh rooftops and 500 MW of additional rooftop capacity by March 2027. Which feature is part of the amended policy?",
    "options": [
     "Withdrawal of the Centre's PM Surya Ghar subsidy",
     "Mandatory solar panels on all government buildings only",
     "A complete ban on net metering",
     "Zero upfront cost for up to 3 kW systems for domestic consumers averaging up to 400 units/month"
    ],
    "answer": 3,
    "expl": "The 1 September 2026 amendment gives domestic consumers averaging up to 400 units/month in FY26 rooftop systems up to 3 kW at zero upfront cost, stacking the Centre's ₹78,000 PM Surya Ghar subsidy with an equal state capital subsidy, plus free O&M for five years and a net-metering timeline cut from 75 to 25 days."
   },
   {
    "q": "COP31 is scheduled in Antalya, Türkiye, from 9 to 20 November 2026, and the G20 Summit in Miami on 14–15 December 2026. Which country holds the G20 presidency in 2026?",
    "options": [
     "India",
     "United States",
     "Brazil",
     "South Africa"
    ],
    "answer": 1,
    "expl": "The United States holds the G20 presidency in 2026 and will host the leaders' summit in Miami on 14–15 December 2026. South Africa held the 2025 presidency (Johannesburg summit), and India held it in 2023."
   },
   {
    "q": "Private consumption, which accounts for more than half of India's GDP, grew at what rate in FY26, supported by income-tax relief and GST rationalisation?",
    "options": [
     "7.7%",
     "9.1%",
     "4.9%",
     "6.2%"
    ],
    "answer": 0,
    "expl": "Private consumption grew 7.7% in FY26, aided by the income-tax rebate for earnings up to ₹12 lakh (₹12.75 lakh for the salaried) and GST slab rationalisation and rate cuts. The Finance Minister noted that the next consumption phase would hinge on wage growth and upward mobility."
   },
   {
    "q": "With reference to India's Right of Reply at the 81st session of the UN General Assembly (September 2026), consider the following statements:\n1. It was delivered by First Secretary Petal Gahlot of India's Permanent Mission to the UN.\n2. India rejected Pakistan's remarks on Jammu and Kashmir, reiterating that it is an integral and inalienable part of India.\n3. India warned that continued cross-border terrorism by Pakistan 'will have consequences'.\nWhich of the statements given above are correct?",
    "options": [
     "1 and 2 only",
     "2 and 3 only",
     "1 and 3 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "India's Right of Reply came on 26 September 2026 after Pakistan's Prime Minister raised Kashmir and the 2025 clash at UNGA 81. First Secretary Petal Gahlot rejected Pakistan's characterisation, reiterated that J&K is 'an integral and inalienable part of India', and warned that continued cross-border terrorism would 'have consequences' — noting India's right to defend itself against terrorism."
   },
   {
    "q": "With reference to the UN Security Council reform debate at the 81st UN General Assembly session, consider the following statements:\n1. Russia supports India's candidature for a permanent seat on the UN Security Council.\n2. The Security Council has 15 members — 5 permanent members and 10 elected for two-year terms.\n3. Russia opposed additional permanent seats for Western countries such as Germany and Japan.\nWhich of the statements given above are correct?",
    "options": [
     "1 and 2 only",
     "2 and 3 only",
     "1 and 3 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "Addressing UNGA 81 on 26 September 2026, Lavrov said Russia supports India and Brazil for permanent UNSC seats, arguing for broader representation of Asia, Africa and Latin America, while opposing more Western permanent members, specifically Germany and Japan. The UNSC has 15 members: 5 permanent (China, France, Russia, UK, US) with veto power and 10 elected for two-year terms."
   },
   {
    "q": "With reference to the Supreme Court's September 2026 ruling on pensionary benefits, consider the following statements:\n1. Service rendered on contract, ad-hoc, daily-wage or work-charge basis before regularisation must be counted as qualifying service for retiral and pensionary benefits.\n2. Under central government rules, roughly ten years of qualifying service are generally needed to draw a service pension at all.\nWhich of the statements given above are correct?",
    "options": [
     "1 only",
     "2 only",
     "1 and 2",
     "Neither 1 nor 2"
    ],
    "answer": 3,
    "expl": "The Supreme Court held (reported 8 September 2026) that contract, ad-hoc, daily-wage or work-charge service before regularisation must count as qualifying service for retiral and pensionary benefits as a general rule. Qualifying service is the portion of service pension rules actually count; in central government service, roughly ten years of it are generally needed to draw a service pension at all."
   },
   {
    "q": "With reference to the WWF Global Conservation Conference held in Jaipur in September 2026, consider the following statements:\n1. It was inaugurated by Union Environment Minister Bhupender Yadav, with the theme of conservation through coexistence and local community participation.\n2. The Minister said India's protected areas grew from around 750 to over 1,000 and Ramsar sites from 24 to 101 in the last decade.\n3. India's tiger reserves have grown from 47 to 58 over the same period.\nWhich of the statements given above are correct?",
    "options": [
     "1 and 2 only",
     "2 and 3 only",
     "1 and 3 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "Inaugurated by Environment Minister Bhupender Yadav on 21 September 2026 in Jaipur with delegates from over 100 countries, the conference was told India's protected areas grew from around 750 to over 1,000 in a decade; Ramsar sites rose from 24 to 101; tiger reserves from 47 to 58; and elephant reserves from 30 to 33. However, a July 2026 NTCA roadmap flagged that nearly 60 per cent of tiger reserves lack adequate prey or habitat conditions."
   },
   {
    "q": "Consider the following statements about the Incentive Scheme for Promotion of Domestic PNG Connections:\n1. It came into effect on 1 September 2026.\n2. City gas distribution companies receive an additional 200 Standard Cubic Metres of domestic APM gas for every eligible incremental domestic connection added beyond a minimum target.\n3. India had about 1.74 crore domestic PNG connections as of August 2026, with the CGD network covering 309 geographical areas.\nWhich of the statements given above are correct?",
    "options": [
     "1 and 2 only",
     "2 and 3 only",
     "1 and 3 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "The Incentive Scheme for Promotion of Domestic PNG Connections took effect on 1 September 2026: CGD companies get an extra 200 SCM of cheaper domestic APM gas per eligible incremental domestic connection beyond a minimum target, replacing costlier imported LNG and cutting the payback period on a connection from around 10 years to nearly 3. India had about 1.74 crore domestic PNG connections as of 18 August 2026 across 309 geographical areas (PNGRB)."
   },
   {
    "q": "Consider the following statements about the National Nutrition Month:\n1. The 9th Rashtriya Poshan Maah was launched on 9 September 2026 at Varanasi with the theme 'Hamari Anganwadi Hamari Jimmedari'.\n2. POSHAN Abhiyaan was launched in March 2018 as a multi-ministerial convergence mission on nutrition.\n3. POSHAN Abhiyaan was later integrated under Mission POSHAN 2.0, the unified National Nutrition Mission announced in the Union Budget 2021-22.\nWhich of the statements given above are correct?",
    "options": [
     "1 and 2 only",
     "2 and 3 only",
     "1 and 3 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "The 9th Rashtriya Poshan Maah (National Nutrition Month) was launched on 9 September 2026 at the Rudraksh International Cooperation and Convention Centre, Varanasi, with the theme 'Hamari Anganwadi Hamari Jimmedari'. POSHAN Abhiyaan was launched in March 2018 as a multi-ministerial convergence mission; the Union Budget 2021-22 integrated it under Mission POSHAN 2.0, anchored by the Ministry of Women and Child Development."
   },
   {
    "q": "With reference to the Atal Vayo Abhyudaya Yojana (AVYAY), consider the following statements:\n1. It is a Central Sector scheme of the Ministry of Social Justice and Empowerment for the health, shelter and financial security of senior citizens.\n2. It was revamped and renamed from the National Action Plan for Senior Citizens in April 2021.\n3. Elderline, its senior-citizen helpline, has received over 29 lakh calls including 8.67 lakh interventions.\nWhich of the statements given above are correct?",
    "options": [
     "1 and 2 only",
     "2 and 3 only",
     "1 and 3 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "AVYAY is a Central Sector scheme of the Ministry of Social Justice and Empowerment, revamped and renamed from the National Action Plan for Senior Citizens in April 2021, targeting primarily indigent senior citizens, especially BPL or those with income up to Rs 15,000 per month. Its helpline Elderline has received over 29 lakh calls, including 8.67 lakh interventions for guidance, emotional support and field rescues (reported 27 September 2026)."
   },
   {
    "q": "With reference to the Supreme Court's September 2026 ruling on railway accident compensation claims, following Union of India v Rina Devi (2018), which of the following statements is correct?",
    "options": [
     "The mere absence of a ticket conclusively disproves bona fide travel, so the claim must fail",
     "The mere absence of a ticket does not defeat the compensation claim; the claimant discharges the initial burden by affidavit and the onus then shifts to the Railways",
     "A compensation claim can succeed only if at least two eyewitnesses corroborate the travel",
     "Delayed railway investigation reports automatically take precedence over the Tribunal's findings"
    ],
    "answer": 1,
    "expl": "In its 25 September 2026 judgment the Supreme Court, following Union of India v Rina Devi (2018), held the mere absence of a ticket does not negate a bona fide passenger's compensation claim: the claimant discharges the initial burden by filing an affidavit of relevant facts and the onus shifts to the Railways. The Court disregarded the railway investigation report submitted seven months after the incident and directed disbursal within 30 days."
   }
  ]
 },
 {
  "id": "upsc-bank-scitech-2026",
  "title": "Science & Tech — Wave 2 Bank (25 MCQs)",
  "subject": "Science & Technology",
  "tag": "Prelims GS I · Practice bank",
  "blurb": "Space, digital, biotech and the missions that define them.",
  "intro": "A 25-question bank on science and technology, weighted to space and frontier missions where Prelims repeatedly probes institutional and technical facts. Attempt in sets of 25 under timed conditions.",
  "sections": [
   {
    "h": "How to use this bank",
    "body": "<p>S&T questions reward institutional memory: which agency, which mission, which payload, which launch vehicle. Build a one-page table of missions as you solve.</p>"
   }
  ],
  "questions": [
   {
    "q": "With reference to ISRO's Gaganyaan programme, consider the following statements:\n1. The crew module is designed to carry three Indian astronauts to a 400 km low-earth orbit for a three-day mission.\n2. The launch vehicle is a human-rated LVM3.\n3. Vyommitra is the humanoid robot that will fly on the uncrewed missions.\nWhich of the statements given above are correct?",
    "options": [
     "1, 2 and 3",
     "2 and 3 only",
     "1 and 2 only",
     "1 and 3 only"
    ],
    "answer": 0,
    "expl": "All three statements are correct. Gaganyaan aims to send three astronauts to a 400 km orbit for three days aboard a human-rated LVM3, and the half-humanoid Vyommitra will validate life-support and crew-module systems on the uncrewed G1/G2 flights before the crewed H1 mission."
   },
   {
    "q": "The CE20 cryogenic engine, hot-tested successfully in September 2026, powers which stage of the LVM3 and uses which propellant combination?",
    "options": [
     "The strap-on boosters — hypergolic propellants",
     "The core stage — solid propellant",
     "The upper stage — liquid hydrogen and liquid oxygen",
     "The crew escape system — cold gas thrusters"
    ],
    "answer": 2,
    "expl": "The CE20 is the cryogenic upper-stage engine of the LVM3, burning liquid hydrogen and liquid oxygen. The September 2026 flight-acceptance hot test at Mahendragiri validated an uprated version with thrust increased to 22 tonnes for the Gaganyaan missions."
   },
   {
    "q": "EOS-05, launched aboard GSLV-F17 on 4 September 2026, belongs to which class of satellites?",
    "options": [
     "Space science satellites",
     "Communication satellites",
     "Navigation satellites",
     "Earth observation satellites"
    ],
    "answer": 3,
    "expl": "EOS-05 is an earth observation satellite in ISRO's EOS series (the renamed remote-sensing/cartography line). It was the first successful ISRO launch of the financial year 2026–27, following the unsuccessful PSLV-C62/EOS-N1 mission of January 2026."
   },
   {
    "q": "NVS-03, slated among ISRO's upcoming launches, is part of which system?",
    "options": [
     "GSAT communication fleet",
     "NavIC, India's regional navigation satellite system",
     "RISAT radar imaging constellation",
     "Astrosat-2 space observatory"
    ],
    "answer": 1,
    "expl": "NVS-03 is the third satellite of the NVS series augmenting NavIC (Navigation with Indian Constellation), India's indigenous regional navigation system providing positioning, navigation and timing services over India and a 1,500 km surrounding region."
   },
   {
    "q": "Aditya-L1, India's first solar observatory mission, was placed in a halo orbit around which Lagrange point?",
    "options": [
     "Earth–Moon L1",
     "Sun–Earth L4",
     "Sun–Earth L2",
     "Sun–Earth L1"
    ],
    "answer": 3,
    "expl": "Aditya-L1, launched on 2 September 2023, was inserted into a halo orbit around the Sun–Earth Lagrange point L1, about 1.5 million km from Earth, giving it an uninterrupted view of the Sun. Its payloads include SUIT, PAPA, SoLEXS and HEL1OS."
   },
   {
    "q": "NISAR, launched in July 2025, is notable as:",
    "options": [
     "A joint India–Japan lunar orbiter",
     "The first satellite to use both L-band and S-band synthetic aperture radar, built jointly by NASA and ISRO",
     "The heaviest satellite ever launched by ISRO",
     "India's first privately built communication satellite"
    ],
    "answer": 1,
    "expl": "NISAR (NASA-ISRO Synthetic Aperture Radar), launched by a GSLV on 30 July 2025, is the first satellite to carry dual-frequency L-band (NASA) and S-band (ISRO) SAR payloads, enabling all-weather, day-night imaging for ecosystem, ice-sheet and disaster monitoring."
   },
   {
    "q": "With the successful docking of its SpaDeX satellites in January 2025, India became which country to demonstrate space docking?",
    "options": [
     "Fifth",
     "Second",
     "Third",
     "Fourth"
    ],
    "answer": 3,
    "expl": "SpaDeX (Space Docking Experiment), launched on 30 December 2024, achieved docking of the SDX01 (Chaser) and SDX02 (Target) satellites on 16 January 2025, making India the fourth country after the US, Russia and China to master space docking — a prerequisite for the Bharatiya Antariksh Station."
   },
   {
    "q": "The Bharatiya Antariksh Station (BAS) is planned to be established by which year, and in which orbit?",
    "options": [
     "2028 — geostationary orbit",
     "2035 — low-earth orbit",
     "2030 — lunar orbit",
     "2040 — Sun-synchronous orbit"
    ],
    "answer": 1,
    "expl": "India plans to establish the Bharatiya Antariksh Station in low-earth orbit by 2035, with the first module targeted for 2028. The station will support crewed missions of 15–20 days and serve as a laboratory for microgravity research."
   },
   {
    "q": "Consider the following statements about the Small Satellite Launch Vehicle (SSLV):\n1. It is a three-stage, all-solid launch vehicle designed for on-demand small satellite launches.\n2. Its first fully successful developmental flight (SSLV-D2) was in February 2023.\nWhich of the statements given above is/are correct?",
    "options": [
     "Both 1 and 2",
     "2 only",
     "Neither 1 nor 2",
     "1 only"
    ],
    "answer": 0,
    "expl": "The SSLV is a three-stage, all-solid vehicle (with a liquid velocity-trimming module) built for quick-turnaround launches of up to 500 kg to low-earth orbit. SSLV-D2 succeeded in February 2023 after the partial failure of D1, and the vehicle is being transferred to industry for commercial operations."
   },
   {
    "q": "The National Quantum Mission, approved in 2023, is implemented by which nodal ministry/department, and with what approved outlay?",
    "options": [
     "MeitY — ₹10,372 crore",
     "Department of Space — ₹3,000 crore",
     "Department of Science & Technology — ₹6,003 crore",
     "Department of Atomic Energy — ₹8,500 crore"
    ],
    "answer": 2,
    "expl": "The National Quantum Mission (2023–31) is anchored in the Department of Science & Technology with an approved outlay of ₹6,003 crore. It targets quantum computers (50–1,000 physical qubits), quantum communication over 2,000 km, and quantum sensors and materials."
   },
   {
    "q": "The IndiaAI Mission, approved in March 2024, is spearheaded by which ministry, and what is its approved outlay?",
    "options": [
     "Ministry of Education — ₹12,000 crore",
     "Department of Science & Technology — ₹6,003 crore",
     "NITI Aayog — ₹7,500 crore",
     "MeitY — ₹10,372 crore"
    ],
    "answer": 3,
    "expl": "The IndiaAI Mission, approved in March 2024 with an outlay of ₹10,372 crore over five years, is implemented by the Ministry of Electronics and IT. Its seven pillars include IndiaAI Compute (18,000+ GPUs empanelled), datasets, startups, and safe and trusted AI."
   },
   {
    "q": "The BioE3 (Biotechnology for Economy, Environment and Employment) Policy, approved in 2024, is an initiative of which department?",
    "options": [
     "Department of Science & Technology",
     "Department of Pharmaceuticals",
     "Department of Biotechnology",
     "Ministry of Environment, Forest and Climate Change"
    ],
    "answer": 2,
    "expl": "The BioE3 Policy (2024) of the Department of Biotechnology promotes high-performance biomanufacturing across six themes — including bio-based chemicals, smart proteins, climate-resilient agriculture and marine and space research — to build a bio-economy."
   },
   {
    "q": "The Anusandhan National Research Foundation (ANRF), established by an Act of 2023, replaced which body and is chaired by whom?",
    "options": [
     "It replaced the CSIR and is chaired by the Principal Scientific Adviser",
     "It replaced UGC and is chaired by the Vice-President",
     "It replaced the Science and Engineering Research Board (SERB) and is chaired by the Prime Minister",
     "It replaced the DST and is chaired by the Education Minister"
    ],
    "answer": 2,
    "expl": "The ANRF Act, 2023 subsumed the Science and Engineering Research Board into the Anusandhan National Research Foundation, chaired by the Prime Minister, to provide strategic direction for research across sciences, with a major role for private-sector funding."
   },
   {
    "q": "The Digital Personal Data Protection Act, 2023 is significant as:",
    "options": [
     "A replacement of the Information Technology Act, 2000",
     "A law that applies only to government-held data",
     "A law limited to financial data",
     "India's first comprehensive law on personal data protection, applying to digital personal data"
    ],
    "answer": 3,
    "expl": "The DPDP Act, 2023 is India's first comprehensive data protection law, governing the processing of digital personal data by both government and private entities. It introduces consent-based processing, data principals' rights, and a Data Protection Board of India, and it coexists with — rather than replaces — the IT Act, 2000."
   },
   {
    "q": "The Unified Payments Interface (UPI) was launched in 2016 by which organisation?",
    "options": [
     "Reserve Bank of India",
     "Ministry of Finance",
     "National Payments Corporation of India",
     "State Bank of India"
    ],
    "answer": 2,
    "expl": "UPI was developed and launched by the National Payments Corporation of India in 2016. It has since become the world's largest real-time retail payments system by volume and has been adopted for cross-border linkages with countries including France, Sri Lanka, Mauritius and the UAE."
   },
   {
    "q": "5G services in India were formally launched on 1 October 2022 at which event?",
    "options": [
     "India Energy Week",
     "Bengaluru Tech Summit",
     "Vibrant Gujarat Summit",
     "India Mobile Congress"
    ],
    "answer": 3,
    "expl": "Prime Minister Modi launched 5G services at the India Mobile Congress on 1 October 2022 in New Delhi. India conducted one of the world's fastest 5G rollouts, covering most districts within about two years."
   },
   {
    "q": "The Genome India Project, completed in early 2025, achieved which milestone?",
    "options": [
     "Mapping of the entire Indian Ocean genome",
     "Decoding the genome of the Asiatic lion",
     "Cloning of the first Indian mammal",
     "Sequencing of 10,000 whole genomes from 99 Indian population groups"
    ],
    "answer": 3,
    "expl": "The Genome India Project, led by the Department of Biotechnology, sequenced 10,000 whole genomes representing 99 population groups (announced January 2025), creating a reference dataset for precision medicine attuned to India's genetic diversity. The data is archived at the Indian Biological Data Centre, Faridabad."
   },
   {
    "q": "Chandrayaan-3's Vikram lander touched down on the Moon on 23 August 2023. What made the landing site historically significant?",
    "options": [
     "It was the first landing on the far side of the Moon",
     "It carried the first European rover to the Moon",
     "It landed at the lunar north pole",
     "It was the first soft landing near the lunar south pole by any country"
    ],
    "answer": 3,
    "expl": "Chandrayaan-3 achieved the first-ever soft landing near the lunar south pole (69.37°S, 32.35°E — named Shiv Shakti Point), a region of high scientific interest for water ice. India became the fourth country to soft-land on the Moon."
   },
   {
    "q": "The National Green Hydrogen Mission, approved in January 2023, sets which production target for 2030, and with what total outlay?",
    "options": [
     "25 million metric tonnes per annum — ₹50,000 crore",
     "10 million metric tonnes per annum — ₹35,000 crore",
     "1 million metric tonnes per annum — ₹8,000 crore",
     "5 million metric tonnes per annum — ₹19,744 crore"
    ],
    "answer": 3,
    "expl": "The National Green Hydrogen Mission targets 5 MMT per annum of green hydrogen production by 2030 with a total outlay of ₹19,744 crore, including the SIGHT programme for electrolyser manufacturing and green hydrogen production incentives."
   },
   {
    "q": "India's first commercial semiconductor fabrication plant (fab) has been approved at which location, and by which consortium?",
    "options": [
     "Dholera, Gujarat — Tata-PSMC",
     "Noida, Uttar Pradesh — HCL-Foxconn",
     "Whitefield, Karnataka — Intel-Tata",
     "Sri City, Andhra Pradesh — Vedanta"
    ],
    "answer": 0,
    "expl": "The Tata-PSMC joint venture's fab at Dholera, Gujarat — approved under the India Semiconductor Mission — will be India's first commercial chip fabrication plant (28/50/90 nm nodes). Micron's ATMP unit at Sanand and Tata's OSAT at Morigaon, Assam were also approved under the programme."
   },
   {
    "q": "With reference to PSLV-C62/EOS-N1, consider the following statements:\n1. The mission, launched in January 2026, was unsuccessful.\n2. EOS-05, launched later in 2026, was ISRO's first successful mission of the financial year 2026–27.\nWhich of the statements given above is/are correct?",
    "options": [
     "2 only",
     "1 only",
     "Neither 1 nor 2",
     "Both 1 and 2"
    ],
    "answer": 3,
    "expl": "The PSLV-C62/EOS-N1 mission of January 2026 was unsuccessful — a rare failure for the PSLV. The GSLV-F17/EOS-05 launch of 4 September 2026 was therefore ISRO's first success of the financial year, as the ISRO Chairman himself noted."
   },
   {
    "q": "The LVM3 (formerly GSLV Mk III) is called ISRO's 'Bahubali' for which reason?",
    "options": [
     "It is India's first fully reusable rocket",
     "It was built entirely by private industry",
     "It uses only solid propellant stages",
     "It can lift about 4,000 kg to GTO / 8,000 kg to LEO, making it ISRO's heaviest operational launcher"
    ],
    "answer": 3,
    "expl": "The LVM3 can place about 4,000 kg into geosynchronous transfer orbit and 8,000 kg into low-earth orbit, making it ISRO's heaviest operational launcher. It launched Chandrayaan-2, Chandrayaan-3 and will launch the Gaganyaan missions in its human-rated form."
   },
   {
    "q": "The Integrated Air Drop Tests and parachute qualification tests conducted by ISRO in 2026 for Gaganyaan validated which critical system?",
    "options": [
     "The cryogenic engine's ignition sequence",
     "The launch pad's lightning protection",
     "The satellite's solar panel deployment",
     "The crew module's deceleration, uprighting and splashdown recovery systems"
    ],
    "answer": 3,
    "expl": "In 2026 ISRO conducted Integrated Air Drop Tests with a 5.7-tonne simulated crew module and main-parachute qualification tests, plus a cold-gas-based crew-module uprighting system test — all validating that astronauts can be decelerated, kept upright after splashdown, and recovered safely."
   },
   {
    "q": "The India Semiconductor Mission operates under which broader programme?",
    "options": [
     "Make in India 2.0, launched 2024",
     "Digital India programme, with the Semicon India programme approved in 2021",
     "Startup India, launched 2016",
     "Atal Innovation Mission"
    ],
    "answer": 1,
    "expl": "The India Semiconductor Mission is part of the Semicon India programme approved in December 2021 (₹76,000 crore) under the Digital India umbrella. Semicon 2.0, with an outlay of about ₹1.27 lakh crore, was announced to deepen the ecosystem."
   },
   {
    "q": "Which of the following best describes the purpose of ISRO's proposed NVS series of satellites?",
    "options": [
     "To relay deep-space mission telemetry",
     "To replace the entire INSAT communication fleet",
     "To form a constellation for military surveillance",
     "To provide indigenous regional navigation services as part of NavIC"
    ],
    "answer": 3,
    "expl": "The NVS (Navigation with Indian Constellation follow-on) series — NVS-01 (2023), NVS-02 and the planned NVS-03 — augments NavIC with L1-band signals for better civilian usability, including compatibility with mobile chipsets for location-based services."
   }
  ]
 },
 {
  "id": "upsc-bank-env-2026",
  "title": "Environment & Ecology — Wave 2 Bank (25 MCQs)",
  "subject": "Environment",
  "tag": "Prelims GS I · Practice bank",
  "blurb": "Climate, wildlife and the institutions that protect them — with 2026 updates.",
  "intro": "A 25-question bank on environment and ecology, weighted to a thinly covered corner and updated with 2026 developments from the monsoon to Project Cheetah. Attempt in sets of 25 under timed conditions.",
  "sections": [
   {
    "h": "How to use this bank",
    "body": "<p>Environment questions cluster around protected areas, species status, conventions and data. Keep a running table of national parks, tiger reserves and Ramsar sites as you solve.</p>"
   }
  ],
  "questions": [
   {
    "q": "With reference to the All India Tiger Estimation, consider the following statements:\n1. The 2022 estimation reported a minimum of 3,682 tigers in India.\n2. India is home to about 75% of the world's wild tigers.\n3. The estimation is conducted every four years by the NTCA with the Wildlife Institute of India.\nWhich of the statements given above are correct?",
    "options": [
     "1, 2 and 3",
     "1 and 2 only",
     "1 and 3 only",
     "2 and 3 only"
    ],
    "answer": 0,
    "expl": "All three statements are correct. The 2022 cycle (released July 2023) estimated a minimum of 3,682 tigers, up from 2,967 in 2018; India holds roughly three-fourths of global wild tigers; and the quadrennial estimation is done by the National Tiger Conservation Authority with the Wildlife Institute of India using camera-trap mark-recapture methods."
   },
   {
    "q": "Project Tiger was launched in 1973. Which tiger reserve was the first to be brought under the project?",
    "options": [
     "Jim Corbett (now Ramganga) National Park",
     "Sunderbans National Park",
     "Bandipur National Park",
     "Kanha National Park"
    ],
    "answer": 0,
    "expl": "Project Tiger was launched on 1 April 1973 at Jim Corbett National Park (now named Ramganga National Park) in Uttarakhand, with nine initial reserves. It completed 50 years in 2023, when the International Big Cat Alliance was launched at Mysuru."
   },
   {
    "q": "The International Big Cat Alliance (IBCA), launched in April 2023, aims to conserve how many big cat species, and where is it headquartered?",
    "options": [
     "Five species — headquartered in Nairobi",
     "Seven species — headquartered in India",
     "Three species — headquartered in Geneva",
     "Ten species — headquartered in Bangkok"
    ],
    "answer": 1,
    "expl": "The IBCA, launched by the Prime Minister on 9 April 2023 during the 50th anniversary of Project Tiger at Mysuru, seeks the conservation of seven big cats — tiger, lion, leopard, snow leopard, cheetah, jaguar and puma — and is headquartered in India, with 95 range countries invited to join."
   },
   {
    "q": "Consider the following statements about Project Cheetah:\n1. The first batch of eight cheetahs arrived from Namibia in September 2022 and was released at Kuno National Park.\n2. A second batch of 12 cheetahs arrived from South Africa in February 2023.\n3. Gandhi Sagar Wildlife Sanctuary in Madhya Pradesh became the second cheetah site in 2025.\nWhich of the statements given above are correct?",
    "options": [
     "2 and 3 only",
     "1 and 2 only",
     "1 and 3 only",
     "1, 2 and 3"
    ],
    "answer": 3,
    "expl": "All three are correct. Eight Namibian cheetahs arrived in September 2022 at Kuno, twelve South African cheetahs followed in February 2023, and Gandhi Sagar Sanctuary (Mandsaur–Neemuch, MP) received cheetahs in April 2025 as the second site, with a fourth animal — the Botswanan female Radha — added in September 2026."
   },
   {
    "q": "The Great Indian Bustard is in the news for conservation efforts. Which of the following statements about it is correct?",
    "options": [
     "It is listed as Critically Endangered on the IUCN Red List and is the state bird of Rajasthan",
     "It is a migratory bird that breeds in Siberia",
     "It is protected only under the Wildlife (Protection) Act with no dedicated recovery programme",
     "It is listed as Least Concern and found across peninsular India"
    ],
    "answer": 0,
    "expl": "The Great Indian Bustard — among the heaviest flying birds — is Critically Endangered and the state bird of Rajasthan, surviving mainly in the Desert National Park landscape. A dedicated Bustard Recovery Programme, captive breeding centre and power-line mitigation measures target its recovery."
   },
   {
    "q": "India's first two Ramsar sites, designated in 1981, were:",
    "options": [
     "Sundarbans (West Bengal) and Vembanad (Kerala)",
     "Chilika Lake (Odisha) and Keoladeo National Park (Rajasthan)",
     "Loktak Lake (Manipur) and Wular Lake (J&K)",
     "Kolleru Lake (Andhra Pradesh) and Point Calimere (Tamil Nadu)"
    ],
    "answer": 1,
    "expl": "India acceded to the Ramsar Convention in 1982 with its first two designated wetlands — Chilika Lake and Keoladeo National Park — both designated in 1981. India now has the largest Ramsar network in Asia, with the tally crossing 90 sites."
   },
   {
    "q": "The Western Ghats were inscribed as a UNESCO World Heritage Site in 2012 as:",
    "options": [
     "A biosphere reserve only",
     "A serial site of 39 components across four states",
     "A single contiguous national park",
     "A mixed heritage site"
    ],
    "answer": 1,
    "expl": "The Western Ghats were inscribed in 2012 as a serial natural World Heritage Site comprising 39 components — national parks, wildlife sanctuaries and reserve forests — across Kerala, Karnataka, Tamil Nadu and Maharashtra, recognising their exceptional endemism."
   },
   {
    "q": "The National Green Tribunal was established in 2010 under the NGT Act. Where is its principal bench located, and what is its distinctive feature?",
    "options": [
     "New Delhi — it applies the polluter-pays, precautionary and sustainable development principles",
     "Bhopal — it hears only forest cases",
     "Kolkata — it reports to the state governments",
     "Chennai — it functions as a civil court for all environmental crimes"
    ],
    "answer": 0,
    "expl": "The NGT's principal bench is in New Delhi (with zonal benches at Bhopal, Pune, Kolkata and Chennai). It is a specialised quasi-judicial body mandated to apply the principles of sustainable development, precaution and polluter-pays, and to dispose of cases within six months."
   },
   {
    "q": "The Compensatory Afforestation Fund (CAF) Act, 2016 provides for:",
    "options": [
     "Direct cash transfers to forest dwellers",
     "Utilisation of funds collected as compensatory levies for forest diversion, through national and state authorities",
     "A ban on all forest diversion for mining",
     "Merger of all tiger reserves into one authority"
    ],
    "answer": 1,
    "expl": "The CAF Act, 2016 created the National and State Compensatory Afforestation Fund Management and Planning Authorities to utilise the accumulated levies (NPV, compensatory afforestation charges) collected from user agencies diverting forest land, for afforestation and forest regeneration."
   },
   {
    "q": "The Environmental Impact Assessment (EIA) Notification, 2006 was issued under which parent legislation?",
    "options": [
     "The Environment (Protection) Act, 1986",
     "The Forest (Conservation) Act, 1980",
     "The Wildlife (Protection) Act, 1972",
     "The Water (Prevention and Control of Pollution) Act, 1974"
    ],
    "answer": 0,
    "expl": "The EIA Notification, 2006 — which categorises projects into A and B and mandates prior environmental clearance — was issued under the Environment (Protection) Act, 1986, the umbrella legislation enacted after the Bhopal gas tragedy."
   },
   {
    "q": "India's ban on identified single-use plastic items came into effect on:",
    "options": [
     "1 July 2022",
     "2 October 2019",
     "15 August 2021",
     "1 January 2023"
    ],
    "answer": 0,
    "expl": "From 1 July 2022, India banned the manufacture, import, stocking, distribution, sale and use of 19 identified single-use plastic items (earbuds with plastic sticks, cutlery, straws, cigarette packets' wrapping film, PVC banners under 100 micron, and others) under the Plastic Waste Management Rules."
   },
   {
    "q": "The National Clean Air Programme (NCAP), launched in 2019, set what revised target for particulate matter reduction?",
    "options": [
     "40% reduction in PM10/PM2.5 by 2025–26 over 2017 levels in 131 cities",
     "Complete elimination of PM2.5 by 2030",
     "50% reduction in vehicular emissions only",
     "20% reduction limited to Delhi-NCR"
    ],
    "answer": 0,
    "expl": "NCAP, launched in January 2019, initially targeted 20–30% reduction in PM concentrations by 2024 over 2017 levels in 102 (later 131) non-attainment cities; the target was revised to 40% reduction by 2025–26. It is implemented by MoEFCC with city-specific action plans."
   },
   {
    "q": "The PM Surya Ghar: Muft Bijli Yojana, launched in February 2024, aims to solarise how many households, and what central subsidy does it offer for a 3 kW system?",
    "options": [
     "50 lakh households — ₹30,000 flat",
     "1 crore households — up to ₹78,000 for systems of 3 kW or more",
     "25 lakh households — no subsidy, only loans",
     "2 crore households — ₹1,00,000 for any capacity"
    ],
    "answer": 1,
    "expl": "PM Surya Ghar (February 2024) targets 1 crore households for rooftop solar, offering central financial assistance of ₹30,000 per kW up to 2 kW (₹78,000 for 3 kW and above), plus low-interest loans — the scheme Delhi's 2026 solar policy amendment stacks its own equal subsidy on top of."
   },
   {
    "q": "Mission LiFE (Lifestyle for Environment) was launched in October 2022 by the Prime Minister jointly with whom, and where?",
    "options": [
     "The UNEP Executive Director, at Nairobi",
     "The French President, at New Delhi",
     "The World Bank President, at Mumbai",
     "The UN Secretary-General, at Kevadia, Gujarat"
    ],
    "answer": 3,
    "expl": "Mission LiFE was launched on 20 October 2022 at the Statue of Unity, Kevadia, by PM Modi with UN Secretary-General António Guterres. It promotes mindful consumption and was followed by India's submission of a LiFE resolution context at climate forums."
   },
   {
    "q": "The International Solar Alliance was jointly launched by India and France at which event, and where is its headquarters?",
    "options": [
     "BRICS Summit, Xiamen (2017) — headquartered at Marseille",
     "COP26, Glasgow (2021) — headquartered at New Delhi",
     "G20 Summit, Hamburg (2017) — headquartered at Paris",
     "COP21, Paris (2015) — headquartered at Gurugram, India"
    ],
    "answer": 3,
    "expl": "The ISA was launched by India and France on 30 November 2015 at COP21 in Paris and is headquartered at Gurugram, Haryana — the first treaty-based intergovernmental organisation headquartered in India. It now has over 100 member countries."
   },
   {
    "q": "India ratified the Kigali Amendment to the Montreal Protocol in 2021. What does the amendment target?",
    "options": [
     "Complete ban on all CFC production immediately",
     "Regulation of e-waste exports",
     "Phasedown of hydrofluorocarbons (HFCs), potent greenhouse gases used in refrigeration",
     "Elimination of methane from agriculture"
    ],
    "answer": 2,
    "expl": "The Kigali Amendment (2016) phases down HFCs — powerful greenhouse gases used in air-conditioning and refrigeration that replaced ozone-depleting CFCs. India's ratification in 2021 committed it to a phasedown schedule beginning 2028, with a national strategy for low-GWP alternatives."
   },
   {
    "q": "The Wetlands (Conservation and Management) Rules, 2017 replaced the 2010 rules and:",
    "options": [
     "Applied only to Ramsar sites",
     "Removed all restrictions on wetlands",
     "Centralised all wetland clearances with the MoEFCC",
     "Decentralised wetland management to State/UT Wetland Authorities with a National Wetland Committee for guidance"
    ],
    "answer": 3,
    "expl": "The 2017 rules replaced the centralised 2010 regime with State/UT Wetland Authorities preparing 'wise use' brief documents, overseen by a National Wetland Committee. Activities like encroachment, solid waste dumping and discharge of untreated effluents remain prohibited in notified wetlands."
   },
   {
    "q": "The draft National Electricity Policy 2026 notes that India has reached 300 GW of non-fossil installed capacity. India's updated NDC target for non-fossil electric capacity by 2030 is:",
    "options": [
     "175 GW",
     "450 GW",
     "500 GW",
     "300 GW"
    ],
    "answer": 2,
    "expl": "India's updated NDC (2022) targets 50% of cumulative electric power installed capacity from non-fossil sources by 2030 — operationalised as the 500 GW non-fossil capacity goal. Reaching 300 GW by 2026 puts the country past the halfway mark of that ambition."
   },
   {
    "q": "Consider the following statements about the Indian Ocean Dipole (IOD) during the 2026 monsoon:\n1. The IOD index moved into positive territory (around 0.7), partly offsetting El Niño's negative impact on rainfall.\n2. A positive IOD is typically associated with warmer western Indian Ocean waters and better monsoon rainfall for India.\nWhich of the statements given above is/are correct?",
    "options": [
     "1 only",
     "Neither 1 nor 2",
     "2 only",
     "Both 1 and 2"
    ],
    "answer": 3,
    "expl": "Both are correct. During the 2026 monsoon the IOD turned positive at about 0.7, cushioning some of El Niño's drying effect. A positive IOD — warmer west, cooler east Indian Ocean — is historically associated with above-normal monsoon rainfall over India."
   },
   {
    "q": "The Kuno National Park, the first site of Project Cheetah, is located in which state and district?",
    "options": [
     "Maharashtra — Chandrapur",
     "Rajasthan — Sawai Madhopur",
     "Madhya Pradesh — Sheopur",
     "Gujarat — Junagadh"
    ],
    "answer": 2,
    "expl": "Kuno National Park lies in Sheopur district of Madhya Pradesh. Chosen for its open grassland-woodland mosaic and adequate prey base, it received the first eight Namibian cheetahs on 17 September 2022."
   },
   {
    "q": "With reference to the southwest monsoon withdrawal of 2026, consider the following statements:\n1. Withdrawal began from west Rajasthan on 19 September, against a normal date of 17 September.\n2. Complete withdrawal from the country normally takes place by 15 October.\nWhich of the statements given above is/are correct?",
    "options": [
     "1 only",
     "2 only",
     "Both 1 and 2",
     "Neither 1 nor 2"
    ],
    "answer": 2,
    "expl": "Both are correct. IMD declared the start of withdrawal from west Rajasthan on 19 September 2026 (normal: 17 September), with the withdrawal line passing through Ramgarh–Mohangarh–Phalodi–Khajuwala; the normal date for complete withdrawal from the country is 15 October."
   },
   {
    "q": "The Gulf of Mannar Marine National Park, in the news for coral and dugong conservation, is located in which state?",
    "options": [
     "Odisha",
     "Tamil Nadu",
     "Andhra Pradesh",
     "Kerala"
    ],
    "answer": 1,
    "expl": "The Gulf of Mannar Marine National Park (a core zone of the Gulf of Mannar Biosphere Reserve) lies off the Ramanathapuram–Thoothukudi coast of Tamil Nadu. It protects coral reefs, seagrass beds and dugong habitat, and is one of India's four major coral reef regions with the Gulf of Kachchh, Lakshadweep and the Andamans."
   },
   {
    "q": "India's State of Environment reporting and the 'Desertification and Land Degradation Atlas' are published by which organisation?",
    "options": [
     "ISRO's Space Applications Centre",
     "Zoological Survey of India",
     "Central Pollution Control Board",
     "NITI Aayog"
    ],
    "answer": 0,
    "expl": "ISRO's Space Applications Centre publishes the Desertification and Land Degradation Atlas of India (latest edition 2021), which found about 30% of India's land undergoing degradation — a key input for India's commitment to restore 26 million hectares of degraded land by 2030 under the Bonn Challenge pledge."
   },
   {
    "q": "Which is the largest tiger reserve in India by area?",
    "options": [
     "Jim Corbett Tiger Reserve",
     "Nagarjunasagar Srisailam Tiger Reserve",
     "Manas Tiger Reserve",
     "Sundarbans Tiger Reserve"
    ],
    "answer": 1,
    "expl": "The Nagarjunasagar Srisailam Tiger Reserve (about 3,296 sq km), spread across Andhra Pradesh and Telangana in the Nallamala hills, is India's largest tiger reserve by area. It is also among the largest protected areas in the country."
   },
   {
    "q": "The E-Waste (Management) Rules, 2022 introduced which key regulatory innovation?",
    "options": [
     "A complete ban on all electronic imports",
     "An Extended Producer Responsibility (EPR) framework with tradable EPR certificates on a central portal",
     "Mandatory government takeover of recycling units",
     "State-wise e-waste quotas for consumers"
    ],
    "answer": 1,
    "expl": "The E-Waste (Management) Rules, 2022 (effective 1 April 2023) introduced a formal EPR regime requiring producers to meet collection and recycling targets, with EPR certificates tradable on CPCB's centralised online portal — a market-based approach to formalising e-waste recycling."
   }
  ]
 },
 {
  "id": "upsc-bank-society-2026",
  "title": "Indian Society — Wave 2 Bank (20 MCQs)",
  "subject": "Indian Society",
  "tag": "Prelims GS I · Practice bank",
  "blurb": "Thinkers, data and the institutions of social change.",
  "intro": "A 20-question bank on Indian society — a section with zero dedicated questions in the bank so far. Pair each sociological concept with one data point and one scheme as you solve.",
  "sections": [
   {
    "h": "How to use this bank",
    "body": "<p>Society answers need the <strong>data + thinker + scheme</strong> triple. Note the survey figure, the sociologist's concept and the relevant law or scheme in every explanation.</p>"
   }
  ],
  "questions": [
   {
    "q": "The concept of 'Sanskritisation' — the process by which a lower caste emulates the rituals and practices of upper castes to claim higher status — was propounded by:",
    "options": [
     "André Béteille",
     "Louis Dumont",
     "G. S. Ghurye",
     "M. N. Srinivas"
    ],
    "answer": 3,
    "expl": "M. N. Srinivas introduced 'Sanskritisation' in his study of the Coorgs (1952), describing how lower castes adopt upper-caste customs, rituals and ideology to improve their position in the caste hierarchy. He later paired it with 'westernisation' and the idea of the 'dominant caste'."
   },
   {
    "q": "Louis Dumont's classic work 'Homo Hierarchicus' (1966) argued that the Indian caste system is fundamentally structured around:",
    "options": [
     "The opposition between the pure and the impure",
     "Occupational guild organisation",
     "Colonial administrative categories",
     "Class relations of production"
    ],
    "answer": 0,
    "expl": "Dumont argued that hierarchy in India is organised around the religious opposition of purity and pollution, with the Brahmin embodying purity and the untouchable impurity. The book remains the most influential structural account of caste, though later scholars critiqued its neglect of power and politics."
   },
   {
    "q": "With reference to NFHS-5 (2019–21), consider the following statements:\n1. India's Total Fertility Rate fell to 2.0, below the replacement level of 2.1.\n2. The sex ratio of the population was reported at 1,020 females per 1,000 males.\nWhich of the statements given above is/are correct?",
    "options": [
     "1 only",
     "2 only",
     "Neither 1 nor 2",
     "Both 1 and 2"
    ],
    "answer": 3,
    "expl": "NFHS-5 (released 2021–22) reported TFR at 2.0 — below replacement level of 2.1 for the first time nationally — and a sex ratio of 1,020 females per 1,000 males. Both findings marked demographic turning points, though only 5 states still had TFR above 2.1."
   },
   {
    "q": "According to Census 2011, India's sex ratio and child sex ratio (0–6 years) were:",
    "options": [
     "933 and 927",
     "940 and 914",
     "943 and 919",
     "927 and 945"
    ],
    "answer": 2,
    "expl": "Census 2011 recorded an overall sex ratio of 943 females per 1,000 males (up from 933 in 2001) but a declining child sex ratio of 919 (down from 927) — the paradox of improving adult ratios alongside worsening child ratios that the Beti Bachao Beti Padhao scheme (2015) was launched to address."
   },
   {
    "q": "India's median age is approximately 28 years. This demographic profile is significant for UPSC because it underpins which concept?",
    "options": [
     "The demographic dividend — a large working-age share that can accelerate growth if productively employed",
     "The Malthusian trap — inevitable famine",
     "The Lewis turning point — already crossed in 1991",
     "The dependency trap — an ageing crisis"
    ],
    "answer": 0,
    "expl": "With a median age of about 28 and over 60% of the population in the working ages (15–59), India enjoys a demographic dividend window expected to last until around 2055. Realising it requires jobs, skills and health — the subjects of the Skill India, PLFS and NFHS data debates."
   },
   {
    "q": "The first Periodic Labour Force Survey (PLFS) for 2017–18 reported an unemployment rate of 6.1%, described as:",
    "options": [
     "Unchanged from the previous decade",
     "The highest in 45 years",
     "The lowest since independence",
     "Applicable only to rural areas"
    ],
    "answer": 1,
    "expl": "The 2017–18 PLFS — the first under the new methodology — reported 6.1% unemployment, the highest in 45 years, sparking a major debate on jobs data. Subsequent annual PLFS rounds showed the rate declining to about 3.2% by 2022–23 amid rising self-employment."
   },
   {
    "q": "The Beti Bachao Beti Padhao scheme was launched in 2015 from which place, and what is its primary institutional design?",
    "options": [
     "Lucknow, UP — a cash-transfer scheme",
     "Bhopal, MP — a scholarship scheme",
     "Jaipur, Rajasthan — a policing initiative",
     "Panipat, Haryana — a tri-ministry convergent scheme (WCD, Health, Education)"
    ],
    "answer": 3,
    "expl": "BBBP was launched from Panipat, Haryana, in January 2015 and is jointly implemented by the Ministries of Women & Child Development, Health & Family Welfare, and Education — targeting the declining child sex ratio through enforcement of the PC-PNDT Act, education of the girl child and community mobilisation."
   },
   {
    "q": "The Sukanya Samriddhi Yojana, a small-deposit scheme for the girl child, was launched in 2015 as part of BBPP with which key feature?",
    "options": [
     "It is open to all citizens regardless of age",
     "It matures only after the account holder's marriage",
     "Accounts can be opened for a girl child below 10 years, with tax benefits under Section 80C",
     "Deposits are limited to government employees"
    ],
    "answer": 2,
    "expl": "Sukanya Samriddhi Yojana allows a parent/guardian to open an account for a girl child below age 10 (maximum two accounts per family, with exceptions for twins/triplets), offering one of the highest small-savings interest rates plus EEE tax treatment under Section 80C."
   },
   {
    "q": "The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 drew directly on which Supreme Court guidelines?",
    "options": [
     "The Prakash Singh guidelines of 2006",
     "The Vishaka guidelines of 1997",
     "The D.K. Basu guidelines of 1997",
     "The Puttaswamy guidelines of 2017"
    ],
    "answer": 1,
    "expl": "The POSH Act, 2013 codified the Vishaka v. State of Rajasthan (1997) guidelines, which the Supreme Court had laid down after the Bhanwari Devi case. The Act mandates Internal Committees in establishments with 10+ employees and Local Committees at the district level for smaller workplaces."
   },
   {
    "q": "The Muslim Women (Protection of Rights on Marriage) Act, 2019 criminalised instant triple talaq following which Supreme Court judgment?",
    "options": [
     "Shayara Bano v. Union of India (2017)",
     "Lily Thomas v. Union of India (2013)",
     "Sarla Mudgal v. Union of India (1995)",
     "Shah Bano v. Ahmed Khan (1985)"
    ],
    "answer": 0,
    "expl": "In Shayara Bano (2017), a 3:2 majority held instant triple talaq (talaq-e-biddat) unconstitutional. Parliament then enacted the 2019 Act making its pronouncement a cognizable offence punishable with up to three years' imprisonment, with provision for subsistence allowance and custody of minor children."
   },
   {
    "q": "The Dowry Prohibition Act was enacted in which year?",
    "options": [
     "2005",
     "1961",
     "1983",
     "1976"
    ],
    "answer": 1,
    "expl": "The Dowry Prohibition Act, 1961 criminalises the giving and taking of dowry. Later amendments added Section 304B (dowry death) and Section 498A (cruelty) to the IPC — now carried into the Bharatiya Nyaya Sanhita — and the Supreme Court has repeatedly balanced the law against its misuse."
   },
   {
    "q": "According to Census 2011, the share of Scheduled Castes and Scheduled Tribes in India's population was approximately:",
    "options": [
     "16.6% SC and 8.6% ST",
     "19.5% SC and 10.2% ST",
     "22.1% SC and 11.3% ST",
     "12.4% SC and 6.8% ST"
    ],
    "answer": 0,
    "expl": "Census 2011 recorded SCs at 16.6% (20.14 crore) and STs at 8.6% (10.43 crore) of the population. These proportions anchor reservation policy, delimitation of reserved constituencies and the special protections of the SC/ST (Prevention of Atrocities) Act, 1989."
   },
   {
    "q": "Particularly Vulnerable Tribal Groups (PVTGs), earlier called Primitive Tribal Groups, number how many in India, and who identifies them?",
    "options": [
     "52 — identified by the Registrar General of India",
     "75 — identified by the Ministry of Tribal Affairs on the Dhebar Commission criteria",
     "27 — identified by the National Commission for STs",
     "100 — identified by NITI Aayog"
    ],
    "answer": 1,
    "expl": "There are 75 PVTGs across 18 states/UTs, identified by the Ministry of Tribal Affairs using the Dhebar Commission's criteria — pre-agricultural technology, stagnant or declining population, extremely low literacy and subsistence economy. The PM-JANMAN scheme (2023) targets their saturation-level development."
   },
   {
    "q": "Under the Scheduled Tribes and Other Traditional Forest Dwellers (Recognition of Forest Rights) Act, 2006, individual forest rights are recognised up to what maximum area, and who initiates the claims process?",
    "options": [
     "10 hectares — claims are initiated by the Forest Department",
     "No limit — claims are initiated by the State Government",
     "2 hectares — claims are initiated by the District Collector",
     "4 hectares — claims are initiated by the Gram Sabha"
    ],
    "answer": 3,
    "expl": "The Forest Rights Act, 2006 recognises individual rights up to 4 hectares, with the Gram Sabha as the initiating authority for claims — a deliberate inversion of the colonial forest bureaucracy's top-down control. It also recognises community rights, habitat rights for PVTGs and the right to protect community forest resources."
   },
   {
    "q": "The Prohibition of Employment as Manual Scavengers and their Rehabilitation Act was enacted in which year, replacing the 1993 Act?",
    "options": [
     "2018",
     "2006",
     "2013",
     "2020"
    ],
    "answer": 2,
    "expl": "The 2013 Act prohibits manual scavenging, insanitary latrines and hazardous cleaning of sewers and septic tanks, and mandates rehabilitation of identified manual scavengers. The Supreme Court's 2023–24 directions have since pushed for mechanised cleaning and compensation for sewer deaths."
   },
   {
    "q": "The Maintenance and Welfare of Parents and Senior Citizens Act, 2007 provides that:",
    "options": [
     "Retirement age is fixed at 60 for all employments",
     "The state must provide free housing to all senior citizens",
     "Senior citizens are exempt from all taxes",
     "Children or heirs must maintain parents unable to maintain themselves, with Maintenance Tribunals in every district"
    ],
    "answer": 3,
    "expl": "The 2007 Act makes maintenance of parents by children/heirs a legal obligation enforceable through Maintenance Tribunals, allows senior citizens to void property transfers made under coercion or neglect, and mandates old-age homes in every district — a legislative response to India's ageing transition."
   },
   {
    "q": "André Béteille's contribution to Indian sociology is best associated with the study of:",
    "options": [
     "Urban slum rehabilitation",
     "The jajmani system of village exchange",
     "Tribal insurgency in central India",
     "Caste, class and power as intersecting but distinct systems of stratification"
    ],
    "answer": 3,
    "expl": "Béteille's 'Caste, Class and Power' (1965), based on fieldwork in Sripuram, Thanjavur, showed that caste, class and power — congruent in the traditional order — were becoming increasingly disassociated under modernisation, a framework UPSC expects in answers on social change."
   },
   {
    "q": "The census exercise announced for 2027 is distinctive because it will be:",
    "options": [
     "Conducted only in urban areas",
     "The first census since 1931",
     "India's first digital census and will include caste enumeration",
     "Limited to a 10% sample of households"
    ],
    "answer": 2,
    "expl": "The government announced that the next census will be conducted in 2027 as India's first fully digital census, and — breaking from the post-independence practice of enumerating only SC/ST castes — will include caste enumeration. The last completed census was 2011."
   },
   {
    "q": "Urbanisation in India reached 31.2% at Census 2011. Which of the following best explains why this figure understates actual urbanisation?",
    "options": [
     "The census excluded all metropolitan cities",
     "Many large villages meet urban criteria but remain administratively classified as rural ('census towns')",
     "The definition of urban requires 50,000+ population",
     "Urban areas were counted twice in 2011"
    ],
    "answer": 1,
    "expl": "India recognises 'census towns' — settlements satisfying urban demographic criteria (5,000+ population, 75% male non-agricultural workforce, 400 persons/sq km) but governed as villages. Their rapid growth (from 1,362 in 2001 to 3,894 in 2011) means effective urbanisation is significantly higher than the 31.2% headline figure."
   },
   {
    "q": "The Protection of Children from Sexual Offences (POCSO) Act, 2012 defines a child as a person below 18 years and is notable for:",
    "options": [
     "Applying only to female children",
     "Making reporting of sexual offences against children mandatory, with punishment for failure to report",
     "Placing the burden of proof on the victim",
     "Excluding penetrative assault from its scope"
    ],
    "answer": 1,
    "expl": "POCSO (2012, amended 2019) is gender-neutral, defines a child as under 18, mandates reporting by any person with knowledge of an offence (Section 19/21), and provides for child-friendly trial procedures and special courts. The 2019 amendment introduced the death penalty for aggravated penetrative sexual assault on children below 12."
   }
  ]
 },
 {
  "id": "upsc-bank-ethics-2026",
  "title": "Ethics, Integrity & Aptitude — Wave 2 Bank (15 MCQs)",
  "subject": "Ethics",
  "tag": "Prelims GS I · Practice bank",
  "blurb": "Thinkers, frameworks and the accountability architecture.",
  "intro": "A 15-question bank on ethics — a section with zero dedicated questions in the bank so far. Ethics MCQs test frameworks and thinkers; the explanations connect each to administrative conduct.",
  "sections": [
   {
    "h": "How to use this bank",
    "body": "<p>For each thinker, fix one line: the theory's name, its core claim, and one administrative application. That triple answers most ethics MCQs.</p>"
   }
  ],
  "questions": [
   {
    "q": "The Nolan Principles, formulated by the UK Committee on Standards in Public Life, list seven principles of public life. Which of the following is NOT one of them?",
    "options": [
     "Integrity",
     "Efficiency",
     "Leadership",
     "Selflessness"
    ],
    "answer": 1,
    "expl": "The seven Nolan Principles are selflessness, integrity, objectivity, accountability, openness, honesty and leadership. Efficiency is a managerial value, not a Nolan principle — a classic UPSC trap that tests whether you memorised the actual list."
   },
   {
    "q": "The Second Administrative Reforms Commission's report on 'Ethics in Governance' (2007) recommended, among other things:",
    "options": [
     "Removal of all conduct rules for civil servants",
     "Merging the CAG with the Election Commission",
     "Abolition of the Central Vigilance Commission",
     "A Code of Ethics for ministers, a Code of Conduct for public servants, and protection for whistle-blowers"
    ],
    "answer": 3,
    "expl": "The 4th Report of the Second ARC ('Ethics in Governance', 2007) recommended a Code of Ethics for ministers, a Code of Conduct for civil servants, statutory protection for whistle-blowers, and strengthening of the Lokpal/CVC architecture — forming the doctrinal backbone of GS-IV."
   },
   {
    "q": "India's first Lokpal, appointed in March 2019 under the Lokpal and Lokayuktas Act, 2013, was:",
    "options": [
     "Justice Ranjan Gogoi",
     "Justice Pinaki Chandra Ghose",
     "Justice T. S. Thakur",
     "Justice J. S. Khehar"
    ],
    "answer": 1,
    "expl": "Justice Pinaki Chandra Ghose, former Supreme Court judge, became India's first Lokpal in March 2019 — nearly six years after the Act's passage following the Anna Hazare movement. The Lokpal has jurisdiction over the Prime Minister (with safeguards), ministers, MPs and Group A–D public servants."
   },
   {
    "q": "The Central Vigilance Commission was set up in 1964 on the recommendation of which committee, and given statutory status in which year?",
    "options": [
     "Santhanam Committee — statutory status in 2003",
     "Rajamannar Committee — statutory status in 1978",
     "Shah Commission — statutory status in 1991",
     "Sarkaria Commission — statutory status in 2010"
    ],
    "answer": 0,
    "expl": "The CVC was created in 1964 on the Santhanam Committee's recommendation as the apex vigilance institution, and given statutory status by the CVC Act, 2003 (following the Vineet Narain judgment). It exercises superintendence over the CBI in corruption cases."
   },
   {
    "q": "The 2019 amendments to the RTI Act, 2005 changed which aspect of the Information Commissions?",
    "options": [
     "The tenure, allowances and service conditions of the Chief Information Commissioner and Information Commissioners were made subject to central government prescription",
     "The fee for filing RTI applications was abolished",
     "Private companies were brought under the Act's ambit",
     "The Act was extended to Jammu & Kashmir for the first time"
    ],
    "answer": 0,
    "expl": "The RTI (Amendment) Act, 2019 removed the fixed five-year tenure and salary equivalence with the Election Commission for the CIC and ICs, empowering the central government to prescribe their tenure and service conditions — a change critics said diluted the commissions' independence."
   },
   {
    "q": "The Whistle Blowers Protection Act received presidential assent in 2014. What is its current status?",
    "options": [
     "It was merged with the Lokpal Act",
     "It applies only to the private sector",
     "It was repealed in 2016",
     "It has received assent but has not been brought into force"
    ],
    "answer": 3,
    "expl": "The Whistle Blowers Protection Act, 2014 received assent in May 2014 but has never been brought into force; amendments proposed in 2015 (notably on national security exemptions) lapsed. Whistle-blower protection currently operates through the 2004 Public Interest Disclosure resolution administered by the CVC."
   },
   {
    "q": "The Prevention of Corruption (Amendment) Act, 2018 introduced which significant change?",
    "options": [
     "It abolished the CBI's anti-corruption wing",
     "It decriminalised all corruption by retired officials",
     "It made corruption a bailable offence in all cases",
     "It criminalised bribe-giving and required prior government sanction to investigate serving public servants"
    ],
    "answer": 3,
    "expl": "The 2018 amendment to the 1988 Act made giving a bribe a direct offence, introduced corporate liability for bribing public servants, required prior sanction before investigating serving officers (a shield later debated), and set timelines for trial completion — rebalancing the Act toward the supply side of corruption."
   },
   {
    "q": "Daniel Goleman's framework of emotional intelligence identifies five components. Which of the following is NOT one of them?",
    "options": [
     "Cognitive dissonance",
     "Self-awareness",
     "Self-regulation",
     "Empathy"
    ],
    "answer": 0,
    "expl": "Goleman's five components are self-awareness, self-regulation, motivation, empathy and social skills. Cognitive dissonance is Leon Festinger's concept (the discomfort of holding contradictory beliefs), not a component of emotional intelligence — a favourite cross-topic trap."
   },
   {
    "q": "Lawrence Kohlberg's theory of moral development proposes how many levels and stages?",
    "options": [
     "Three levels and six stages",
     "Five levels and ten stages",
     "Four levels and eight stages",
     "Two levels and four stages"
    ],
    "answer": 0,
    "expl": "Kohlberg proposed three levels — pre-conventional, conventional and post-conventional — each with two stages (six total), from obedience-and-punishment reasoning up to universal ethical principles. Administrators are expected to function at the post-conventional level."
   },
   {
    "q": "'The greatest happiness of the greatest number' is the defining maxim of which ethical theory?",
    "options": [
     "Social contract theory, associated with Hobbes",
     "Virtue ethics, associated with Aristotle",
     "Deontology, associated with Immanuel Kant",
     "Utilitarianism, associated with Jeremy Bentham and J. S. Mill"
    ],
    "answer": 3,
    "expl": "Classical utilitarianism (Bentham's 'greatest happiness principle', refined by Mill) judges actions by their consequences — maximising aggregate welfare. It underpins cost-benefit analysis in policy but is critiqued for potentially sacrificing minority rights, the standard UPSC counterpoint."
   },
   {
    "q": "Immanuel Kant's deontological ethics is centred on which concept?",
    "options": [
     "The veil of ignorance",
     "The greatest happiness principle",
     "The categorical imperative — act only on maxims that can be universal laws",
     "The invisible hand of the market"
    ],
    "answer": 2,
    "expl": "Kant's categorical imperative commands acting only on maxims one could will as universal law, treating humanity always as an end and never merely as a means. It is the philosophical foundation of duty-based, rule-bound administrative conduct — contrasted with consequentialist utilitarianism."
   },
   {
    "q": "In public administration, 'probity' is best defined as:",
    "options": [
     "Uprightness, honesty and incorruptibility in the discharge of public duty",
     "Maximisation of departmental budgets",
     "Speed of file disposal regardless of scrutiny",
     "Strict obedience to political superiors"
    ],
    "answer": 0,
    "expl": "Probity — from the Latin probitas — means integrity, uprightness and honesty in public life. The Second ARC treats probity as the bedrock of governance, operationalised through transparency, accountability, codes of conduct and institutional checks like the CVC, CAG and Lokpal."
   },
   {
    "q": "The Citizen's Charter movement in India began in 1997. What is the Sevottam model associated with it?",
    "options": [
     "A charter for private banks only",
     "A framework for assessing and certifying the quality of public service delivery against charter standards",
     "A training programme for diplomats",
     "A pension scheme for charter signatories"
    ],
    "answer": 1,
    "expl": "Citizen's Charters (since 1997) declare service standards, and the Sevottam model — developed by the Department of Administrative Reforms — provides a quality-management framework to assess implementation, grievance redress and service delivery, with certification for compliant organisations."
   },
   {
    "q": "The distinction between a Code of Conduct and a Code of Ethics is that:",
    "options": [
     "A code of ethics is legally binding while a code of conduct is voluntary",
     "There is no difference between the two",
     "Only the private sector uses codes of conduct",
     "A code of conduct specifies enforceable rules of behaviour, while a code of ethics articulates aspirational values and principles"
    ],
    "answer": 3,
    "expl": "A code of conduct is a set of specific, enforceable rules (do's and don'ts with penalties — like the Central Civil Services Conduct Rules, 1964), whereas a code of ethics states broad values and principles to guide discretionary judgment. The Second ARC recommended both: conduct rules for enforceability, an ethics code for moral compass."
   },
   {
    "q": "The 'ABC model' of attitude in social psychology stands for:",
    "options": [
     "Affective, Behavioural and Cognitive components",
     "Administrative, Bureaucratic and Constitutional components",
     "Aptitude, Behaviour and Character components",
     "Accountability, Beneficence and Compassion components"
    ],
    "answer": 0,
    "expl": "Attitudes comprise three components — affective (feelings), behavioural (action tendencies) and cognitive (beliefs). GS-IV expects administrators to understand this because persuasion and behavioural change (e.g., in Swachh Bharat or Beti Bachao) must target all three, not just information."
   }
  ]
 },
 {
  "id": "upsc-bank-governance-2026",
  "title": "Governance & Social Justice — Wave 2 Bank (15 MCQs)",
  "subject": "Governance",
  "tag": "Prelims GS I · Practice bank",
  "blurb": "Panchayats, welfare architecture and flagship schemes.",
  "intro": "A 15-question bank on governance — from the 73rd Amendment to the newest welfare data. Welfare questions test three things: launch year, ministry, and the benefit's scale.",
  "sections": [
   {
    "h": "How to use this bank",
    "body": "<p>For every scheme, fix the launch year, the implementing ministry and one hard number (beneficiaries, outlay or entitlement). Those three facts answer most scheme questions.</p>"
   }
  ],
  "questions": [
   {
    "q": "The 73rd Constitutional Amendment (1992), which gave constitutional status to Panchayati Raj, came into force on 24 April 1993 and added which schedule listing 29 subjects?",
    "options": [
     "The Ninth Schedule",
     "The Tenth Schedule",
     "The Eleventh Schedule",
     "The Twelfth Schedule"
    ],
    "answer": 2,
    "expl": "The 73rd Amendment added Part IX and the Eleventh Schedule (29 subjects like agriculture, primary health and drinking water) for rural local bodies, while the 74th Amendment added Part IXA and the Twelfth Schedule (18 subjects) for urban local bodies."
   },
   {
    "q": "The Panchayats (Extension to Scheduled Areas) Act, 1996 (PESA) is significant because it:",
    "options": [
     "Applied only to the Sixth Schedule areas of the Northeast",
     "Abolished panchayats in tribal areas",
     "Extended Part IX panchayat provisions to Fifth Schedule areas with special powers to the Gram Sabha over natural resources",
     "Created a separate Election Commission for tribal areas"
    ],
    "answer": 2,
    "expl": "PESA (1996) extends panchayat provisions to Fifth Schedule areas, vesting the Gram Sabha with powers over minor forest produce, land alienation, village markets and prior recommendation for land acquisition — a legislative recognition of tribal self-governance, though implementation remains uneven."
   },
   {
    "q": "Under MGNREGA, which of the following entitlements is/are correct?\n1. 100 days of wage employment per rural household per year.\n2. At least one-third of beneficiaries must be women.\n3. Unemployment allowance is payable if work is not provided within 15 days.",
    "options": [
     "2 and 3 only",
     "1 and 2 only",
     "1, 2 and 3",
     "1 and 3 only"
    ],
    "answer": 2,
    "expl": "All three are correct under the Mahatma Gandhi National Rural Employment Guarantee Act, 2005: 100 days per household on demand, one-third women's participation (a floor often exceeded), and unemployment allowance if employment is not provided within 15 days of application."
   },
   {
    "q": "The Aspirational Districts Programme, launched in January 2018, covers 112 districts and tracks progress across five themes. Which of the following is NOT one of the five themes?",
    "options": [
     "Education",
     "Space technology",
     "Agriculture and water resources",
     "Health and nutrition"
    ],
    "answer": 1,
    "expl": "The ADP's five themes are health and nutrition, education, agriculture and water resources, financial inclusion and skill development, and infrastructure. Districts are ranked monthly on 49 KPIs in a competitive-federalism 'delta ranking' by NITI Aayog."
   },
   {
    "q": "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY) was launched on 23 September 2018 from Ranchi. What is its cover and target population?",
    "options": [
     "₹10 lakh per family for government employees only",
     "₹2 lakh per person for all citizens",
     "₹1 lakh per family for urban households only",
     "₹5 lakh per family per year for about 55 crore beneficiaries (12 crore+ families)"
    ],
    "answer": 3,
    "expl": "PM-JAY, the world's largest health assurance scheme, provides ₹5 lakh annual cover per family for secondary and tertiary hospitalisation to about 55 crore beneficiaries identified by SECC 2011 deprivation criteria, implemented through state health agencies with portability across India."
   },
   {
    "q": "The National Health Mission (NHM) was formed by subsuming which two earlier missions, and in which year?",
    "options": [
     "NRHM (2005) and NUHM (2013) — merged in 2013",
     "AYUSH Mission and NHM — merged in 2014",
     "JSY and JSSK — merged in 2018",
     "ICDS and Mid-Day Meal — merged in 2015"
    ],
    "answer": 0,
    "expl": "The National Rural Health Mission (2005) and National Urban Health Mission (2013) were merged into the National Health Mission in 2013. NHM funds ASHAs, institutional delivery incentives (JSY/JSSK) and health-system strengthening, and anchored India's pandemic response architecture."
   },
   {
    "q": "Samagra Shiksha, launched in 2018, subsumed which three schemes?",
    "options": [
     "ICDS, Beti Bachao and Skill India",
     "Mid-Day Meal, KGBV and NEP implementation",
     "Sarva Shiksha Abhiyan, Rashtriya Madhyamik Shiksha Abhiyan and Teacher Education",
     "Operation Blackboard, DPEP and Mahila Samakhya"
    ],
    "answer": 2,
    "expl": "Samagra Shiksha (2018) integrated SSA (elementary), RMSA (secondary) and Teacher Education into a single scheme for school education from pre-school to Class 12, aligned later with NEP 2020's 5+3+3+4 structure and foundational literacy goals."
   },
   {
    "q": "The Jal Jeevan Mission (2019) aims to provide tap water to every rural household. What is its service-level benchmark per person per day?",
    "options": [
     "70 litres per capita per day",
     "135 litres per capita per day",
     "40 litres per capita per day",
     "55 litres per capita per day"
    ],
    "answer": 3,
    "expl": "Jal Jeevan Mission targets Functional Household Tap Connections for all rural households with a service standard of 55 lpcd of potable water, quality-tested through village water and sanitation committees and sensor-based monitoring."
   },
   {
    "q": "The Swachh Bharat Mission (Grameen) declared rural India open-defecation-free on which date, and what was the mission's launch date?",
    "options": [
     "Launched 15 August 2015 — ODF declared 26 January 2020",
     "Launched 2 October 2014 — ODF declared 2 October 2019",
     "Launched 26 January 2014 — ODF declared 15 August 2019",
     "Launched 2 October 2016 — ODF declared 2 October 2021"
    ],
    "answer": 1,
    "expl": "SBM was launched on 2 October 2014 and rural India was declared ODF on 2 October 2019 (Gandhi's 150th birth anniversary), with over 10 crore toilets built. SBM 2.0 (2021–26) shifted focus to ODF Plus — solid and liquid waste management."
   },
   {
    "q": "PM-KISAN, launched in February 2019, provides income support of what amount, in how many instalments?",
    "options": [
     "₹12,000 per year in two instalments",
     "₹6,000 per year in three instalments of ₹2,000",
     "₹8,000 per year in four instalments",
     "₹5,000 per year in a single instalment"
    ],
    "answer": 1,
    "expl": "PM-KISAN gives ₹6,000 per year to landholding farmer families in three four-monthly instalments of ₹2,000 via DBT, with e-KYC mandatory. It is a central sector scheme fully funded by the Government of India."
   },
   {
    "q": "The Pradhan Mantri Awas Yojana–Gramin (2016) replaced which earlier rural housing scheme, and what was its original target?",
    "options": [
     "Indira Awaas Yojana — 2.95 crore houses by 2022",
     "Rajiv Awaas Yojana — 1 crore houses by 2020",
     "National Rural Housing Mission — 50 lakh houses by 2019",
     "Valmiki Ambedkar Awas Yojana — 5 crore houses by 2025"
    ],
    "answer": 0,
    "expl": "PMAY-G (April 2016) restructured the Indira Awaas Yojana (1985) with a target of 2.95 crore pucca houses by 2022, enhanced unit assistance (₹1.2 lakh plains/₹1.3 lakh hilly), and convergence with toilets (SBM) and LPG (Ujjwala). Additional 2 crore houses were approved in 2024."
   },
   {
    "q": "The Deendayal Antyodaya Yojana–National Rural Livelihoods Mission (DAY-NRLM) was launched in 2011 and renamed in 2015. In September 2026 its Lakhpati Didi target was revised to:",
    "options": [
     "3 crore women, halved from the earlier target",
     "6 crore women, with about 3.5 crore Lakhpati Didis created so far",
     "10 crore women, with 8 crore achieved",
     "1 crore women, the original target unchanged"
    ],
    "answer": 1,
    "expl": "DAY-NRLM (launched as NRLM in 2011, renamed in 2015) had its Lakhpati Didi target doubled from 3 crore to 6 crore women at a September 2026 review, with about 3.5 crore achieved. A Lakhpati Didi is an SHG member whose household earns at least ₹1 lakh annually."
   },
   {
    "q": "Digital India, launched on 1 July 2015, is built on nine pillars. Which of the following is one of them?",
    "options": [
     "Mandatory social media accounts for all citizens",
     "Broadband highways and universal mobile connectivity",
     "Privatisation of all government data centres",
     "A national cryptocurrency"
    ],
    "answer": 1,
    "expl": "Digital India's nine pillars include broadband highways, universal mobile access, public internet access, e-governance, e-Kranti (electronic delivery of services), IT for jobs, electronics manufacturing and early harvest programmes — the architecture behind UPI, DigiLocker, CoWIN and ONDC."
   },
   {
    "q": "The 'One Nation One Election' proposal, examined by the Kovind committee, would require which constitutional step at minimum?",
    "options": [
     "Approval by the Election Commission alone",
     "A referendum under Article 368",
     "Amendments including a new Article 82A and ratification by at least half the states for certain changes",
     "A simple executive order by the President"
    ],
    "answer": 2,
    "expl": "The high-level committee chaired by former President Ram Nath Kovind (report: March 2024) recommended simultaneous Lok Sabha and Assembly polls via constitutional amendments — including a new Article 82A — with ratification by at least half the states for provisions affecting federal features. Two Bills were introduced in December 2024 and sent to a Joint Parliamentary Committee."
   },
   {
    "q": "Consider the following statements about the Waqf (Amendment) Act, 2025:\n1. It renamed the Waqf Act, 1995 as the Unified Waqf Management, Empowerment, Efficiency and Development Act.\n2. It provides for the inclusion of non-Muslim members in Waqf Boards and Tribunals.\nWhich of the statements given above is/are correct?",
    "options": [
     "Neither 1 nor 2",
     "Both 1 and 2",
     "1 only",
     "2 only"
    ],
    "answer": 1,
    "expl": "Both are correct. Passed in April 2025, the Act renamed the 1995 Act as UMEED, mandates inclusion of non-Muslim members in the Central Waqf Council, State Waqf Boards and Tribunals, requires waqf registration on a central portal, and gives the District Collector a role in surveying disputed waqf properties."
   }
  ]
 },
 {
  "id": "upsc-bank-disaster-2026",
  "title": "Disaster Management — Wave 2 Bank (15 MCQs)",
  "subject": "Disaster Management",
  "tag": "Prelims GS I · Practice bank",
  "blurb": "Acts, frameworks and institutions — from Sendai to the NDRF.",
  "intro": "A 15-question bank on disaster management — a section with zero dedicated questions in the bank so far. DM questions test institutional facts: who chairs what, which framework, which year.",
  "sections": [
   {
    "h": "How to use this bank",
    "body": "<p>Fix the institutional map first: NDMA (PM chairs), NDRF (MHA), Sendai (2015–30), CDRI (2019). Most questions are won or lost on these four facts.</p>"
   }
  ],
  "questions": [
   {
    "q": "The Disaster Management Act, 2005 establishes a three-tier institutional structure. Who chairs the National Disaster Management Authority (NDMA)?",
    "options": [
     "The President",
     "The Cabinet Secretary",
     "The Home Minister",
     "The Prime Minister"
    ],
    "answer": 3,
    "expl": "The NDMA is chaired by the Prime Minister, with up to nine members including a Vice-Chairperson. State DM Authorities are chaired by Chief Ministers and District DM Authorities by Collectors/District Magistrates — a structure mirroring the federal division of responsibility."
   },
   {
    "q": "The National Disaster Response Force (NDRF) was raised in 2006 and functions under which ministry? Its battalions are drawn from which forces?",
    "options": [
     "Ministry of Environment — drawn from forest services",
     "Ministry of Home Affairs — battalions drawn from CAPFs (BSF, CRPF, CISF, ITBP, SSB)",
     "NDMA directly — drawn from state police",
     "Ministry of Defence — drawn from the Army"
    ],
    "answer": 1,
    "expl": "The NDRF, raised in 2006 under the DM Act, functions under the Ministry of Home Affairs with battalions drawn from Central Armed Police Forces. It is the world's largest dedicated disaster-response force and deploys for floods, cyclones, building collapses and CBRN emergencies."
   },
   {
    "q": "The Sendai Framework for Disaster Risk Reduction (2015–2030) was adopted in March 2015 at which city, and how many priorities for action does it set?",
    "options": [
     "Geneva, Switzerland — three priorities",
     "Hyogo, Japan — five priorities",
     "Sendai, Japan — four priorities",
     "New York, USA — seven priorities"
    ],
    "answer": 2,
    "expl": "The Sendai Framework (successor to the Hyogo Framework) was adopted at the Third UN World Conference in Sendai, Japan, in March 2015. It sets four priorities — understanding risk, strengthening governance, investing in resilience, and enhancing preparedness — and seven global targets."
   },
   {
    "q": "The Coalition for Disaster Resilient Infrastructure (CDRI) was launched by India in 2019 at which forum, and where is its secretariat?",
    "options": [
     "COP25, Madrid — secretariat in Bonn",
     "UN Climate Action Summit, New York — secretariat in New Delhi",
     "G20 Summit, Osaka — secretariat in Tokyo",
     "World Economic Forum, Davos — secretariat in Geneva"
    ],
    "answer": 1,
    "expl": "PM Modi launched the CDRI at the UN Climate Action Summit in New York in September 2019. Headquartered in New Delhi, it is a global partnership (40+ countries) promoting resilient infrastructure — India's second major global initiative after the International Solar Alliance."
   },
   {
    "q": "India's first National Disaster Management Plan (NDMP) was released in which year, and what is its doctrinal basis?",
    "options": [
     "2016 — aligned with the Sendai Framework and the PM's 10-point agenda on DRR",
     "2005 — based solely on the DM Act",
     "2010 — based on the Hyogo Framework",
     "2020 — based on the Paris Agreement"
    ],
    "answer": 0,
    "expl": "India released its first-ever NDMP in June 2016 (revised 2019), aligned with the Sendai Framework's four priorities and the Prime Minister's 10-point agenda on disaster risk reduction announced at the 2016 Asian Ministerial Conference in New Delhi."
   },
   {
    "q": "The Prime Minister's 10-point agenda on disaster risk reduction was announced at which event?",
    "options": [
     "BRICS Summit, Goa (2016)",
     "Asian Ministerial Conference on DRR, New Delhi (2016)",
     "G20 Summit, Hangzhou (2016)",
     "UN General Assembly, New York (2015)"
    ],
    "answer": 1,
    "expl": "PM Modi announced the 10-point agenda — including leveraging technology, building local capacity, and ensuring wider participation of women — at the Asian Ministerial Conference on Disaster Risk Reduction in New Delhi in November 2016, which India hosted."
   },
   {
    "q": "Ahmedabad's Heat Action Plan (2013) is significant in disaster management because it was:",
    "options": [
     "India's first earthquake retrofitting programme",
     "A plan to relocate the city away from the Sabarmati",
     "A flood insurance scheme for farmers",
     "South Asia's first city-level heat action plan, later scaled into NDMA's national guidelines"
    ],
    "answer": 3,
    "expl": "After the 2010 heatwave killed over 1,300 people in Ahmedabad, the city launched South Asia's first Heat Action Plan in 2013 (with IIPH-Gandhinagar and NRDC) — early warnings, cool roofs, public awareness — which became the template for NDMA's 2016 national guidelines on heatwave management."
   },
   {
    "q": "The Bhopal gas tragedy of December 1984 involved the leakage of which gas, and it directly led to which legislation?",
    "options": [
     "Methyl isocyanate (MIC) — the Environment (Protection) Act, 1986",
     "Chlorine — the Air Act, 1981",
     "Ammonia — the DM Act, 2005",
     "Phosgene — the Factories Act, 1948"
    ],
    "answer": 0,
    "expl": "The leak of methyl isocyanate from the Union Carbide plant on the night of 2–3 December 1984 killed thousands and led directly to the umbrella Environment (Protection) Act, 1986, the creation of MoEFCC's EIA regime, and India's push for absolute-liability jurisprudence (Oleum gas leak case, 1986)."
   },
   {
    "q": "The Indian Tsunami Early Warning Centre, established after the 2004 tsunami, is located at which institution?",
    "options": [
     "INCOIS, Hyderabad",
     "NIOT, Chennai",
     "IITM, Pune",
     "IMD, New Delhi"
    ],
    "answer": 0,
    "expl": "The Indian Tsunami Early Warning System operates from the Indian National Centre for Ocean Information Services (INCOIS), Hyderabad, since 2007 — providing tsunami advisories for the Indian Ocean region within minutes of a tsunamigenic earthquake, under UNESCO's IOC framework."
   },
   {
    "q": "On India's seismic zone map (BIS), Zone V — the highest risk zone — includes which of the following areas?\n1. The entire Northeast\n2. Parts of Jammu & Kashmir, Himachal Pradesh and Uttarakhand\n3. The Rann of Kutch\n4. The Andaman & Nicobar Islands",
    "options": [
     "2 and 3 only",
     "1, 2, 3 and 4",
     "1 and 2 only",
     "1 and 4 only"
    ],
    "answer": 1,
    "expl": "All four are in Zone V, the highest damage-risk zone on the BIS seismic map: the entire Northeast, parts of J&K/Himachal/Uttarakhand, the Rann of Kutch (site of the 2001 Bhuj earthquake), and the Andaman & Nicobar Islands (site of the 2004 rupture)."
   },
   {
    "q": "IMD's cyclone intensity classification: a 'Very Severe Cyclonic Storm' has maximum sustained wind speeds of:",
    "options": [
     "166–221 kmph",
     "62–88 kmph",
     "89–117 kmph",
     "119–165 kmph"
    ],
    "answer": 3,
    "expl": "IMD classifies: Cyclonic Storm (62–88 kmph), Severe Cyclonic Storm (89–117), Very Severe Cyclonic Storm (119–165), and Extremely Severe Cyclonic Storm (166–221). The 119–165 band is the standard Prelims trap between 'severe' and 'extremely severe'."
   },
   {
    "q": "The Civil Defence Act, under which civil defence volunteers function, was enacted in which year, and under which ministry does civil defence operate?",
    "options": [
     "1975 — Ministry of Social Justice",
     "1956 — Ministry of Defence",
     "1968 — Ministry of Home Affairs",
     "2005 — NDMA"
    ],
    "answer": 2,
    "expl": "The Civil Defence Act, 1968 (enacted after the 1962 and 1965 wars) provides for civil defence measures during hostile attack and disasters. Civil defence operates under the Ministry of Home Affairs, with wardens and volunteers forming the community-level response tier."
   },
   {
    "q": "The 'Manual for Drought Management' (2016), which standardises drought declaration and relief, was issued by which ministry?",
    "options": [
     "Ministry of Agriculture & Farmers Welfare",
     "Ministry of Jal Shakti",
     "Ministry of Home Affairs",
     "Ministry of Rural Development"
    ],
    "answer": 0,
    "expl": "The Manual for Drought Management (revised 2016) by the Department of Agriculture lays down the methodology — rainfall deviation, dry spells, remote-sensing indices — for states to declare drought and trigger relief under SDRF/NDRF norms, replacing the earlier 2009 manual."
   },
   {
    "q": "Under the DM Act, 2005, the National Disaster Response Fund (NDRF) is financed primarily through:",
    "options": [
     "State government contributions",
     "A cess on excise and customs duties credited to the fund",
     "World Bank loans",
     "Voluntary public donations only"
    ],
    "answer": 1,
    "expl": "The NDRF (the renamed National Calamity Contingency Fund) is financed through a National Calamity Contingent Duty (a cess on excise/customs) plus budgetary support, and supplements the State Disaster Response Fund when a calamity of severe nature strikes."
   },
   {
    "q": "With reference to the 2026 monsoon drought assessment, the IIT Gandhinagar India Drought Monitor reported that the area under dry or drought conditions expanded from about 39% to 52.5% in roughly a month. Which index family does such operational drought monitoring primarily rely on?",
    "options": [
     "Consumer price indices",
     "Stock market indices",
     "Air quality indices",
     "Standardised Precipitation and soil-moisture-based indices from IMD and satellite data"
    ],
    "answer": 3,
    "expl": "Operational drought monitors like IIT Gandhinagar's blend IMD rainfall data with satellite-derived soil moisture, evapotranspiration and vegetation indices (standardised precipitation indices) to classify meteorological, agricultural and hydrological drought in near-real time."
   }
  ]
 }
]
);
})();

(function () {
if(!window.EPH_TOPIC_DATA) return;
window.EPH_TOPIC_DATA.topics.push(
{
 "blurb": "Eight original questions on the 22–28 September 2026 news cycle: cybercrime treaty, ECI SIR rules, LNG train, orbital computing, RBI Bulletin, Maharashtra drought, AMCA, and UPI MDR.",
 "id": "upsc-refresh-2026-09-28",
 "intro": "A refresh set on the last seven days' developments, written for UPSC Prelims 2026–27. Every item is original and tied to a dated news event — attempt them, then study the explanations, not just the answers.",
 "questions": [
  {
   "answer": 3,
   "expl": "All three are correct. The Convention — full title: 'Strengthening International Cooperation for Combating Certain Crimes Committed by Means of Information and Communications Technology Systems and for the Sharing of Evidence in Electronic Form of Serious Crimes' — was adopted on 24 December 2024, opened for signature on 25 October 2025, and had 95 signatories when India signed on 26 September 2026. Its nine chapters include human-rights safeguards and a 24x7 cooperation network for investigations, mutual legal assistance and extradition; it is also the first global treaty to specifically criminalise ICT-facilitated sexual violence against children.",
   "options": [
    "1 and 2 only",
    "2 and 3 only",
    "1 and 3 only",
    "1, 2 and 3"
   ],
   "q": "With reference to the United Nations Convention against Cybercrime, consider the following statements:\n1. It was adopted by the UN General Assembly on 24 December 2024.\n2. It is the first comprehensive global treaty on cybercrime.\n3. India signed the Convention on 26 September 2026 on the sidelines of the 81st session of the UN General Assembly.\nWhich of the statements given above are correct?"
  },
  {
   "answer": 0,
   "expl": "Statements 1 and 2 are correct; 3 is wrong. The ECI said the Supreme Court upheld the Form 6 declaration for the SIR, and that field officers will have only role-based access to ECINET in line with their statutory powers — not unrestricted access. The expert committee reviewing ECINET's legal compliance follows reports of dissent within the Commission over SIR-related decisions.",
   "options": [
    "1 and 2 only",
    "2 and 3 only",
    "1 and 3 only",
    "1, 2 and 3"
   ],
   "q": "With reference to the Election Commission of India's decisions on the Special Intensive Revision (SIR) of electoral rolls, announced on 26 September 2026, consider the following statements:\n1. The declaration attached to Form 6 will be required only during the SIR exercise; the earlier format will apply otherwise for fresh voter registration.\n2. A committee headed by a senior Deputy Election Commissioner, including an independent IIT/IIIT expert, will review ECINET's compliance with relevant laws and rules.\n3. Field officers will continue to have unrestricted access to the ECINET platform regardless of their statutory powers.\nWhich of the statements given above are correct?"
  },
  {
   "answer": 0,
   "expl": "Statements 1 and 2 are correct; 3 is wrong. After more than 2,000 km of field trials, LNG can replace only up to about 40 per cent of diesel — which is why the dual-fuel design matters, since operations continue even when LNG is unavailable. Each converted DPC carries an LNG tank of about 2,200 litres (950–1,000 kg of usable LNG), and Indian Railways estimates savings of about Rs 11.9 lakh per year per DPC alongside lower CO2, NOx and particulate-matter emissions.",
   "options": [
    "1 and 2 only",
    "2 and 3 only",
    "1 and 3 only",
    "1, 2 and 3"
   ],
   "q": "With reference to India's first LNG-powered train, flagged off from Sabarmati on 27 September 2026, consider the following statements:\n1. It uses a dual-fuel system that allows the same engine to run on both LNG and diesel depending on fuel availability.\n2. Two Driving Power Cars, each of 1,400 HP, were converted to the LNG-diesel system.\n3. LNG is expected to replace up to 100 per cent of the diesel used by the engine.\nWhich of the statements given above are correct?"
  },
  {
   "answer": 2,
   "expl": "Correct: MOI-1A of Bengaluru startup TakeMe2Space is described as India's first orbital computing satellite — a sub-50 kg spacecraft carrying Nvidia Orin NX edge-computing processors. Customers upload containerised AI models to it, and it processes data as it passes over a target area, transmitting only the analysis to Earth rather than the full dataset — a model aimed at agriculture, mining, supply-chain and insurance users. Its 23 signed customers include US-based Little Place Labs; its predecessor MOI-1 was lost to a launch-vehicle third-stage failure.",
   "options": [
    "India's first crewed orbital mission module",
    "A conventional communications satellite meant for rural broadband",
    "An orbital edge-computing satellite that processes data in orbit instead of downlinking raw data to Earth",
    "A space-based solar power demonstrator"
   ],
   "q": "The MOI-1A spacecraft, scheduled to fly aboard SpaceX's Transporter-18 rideshare mission on 1 October 2026, is best described as:"
  },
  {
   "answer": 3,
   "expl": "All three are correct. The Bulletin's 'State of the Economy' noted strong export growth narrowing the merchandise trade deficit, system liquidity surplus surging on FCNR(B) deposit flows, and bank deposits growing at their fastest pace in 15 years in August — while cautioning that re-escalating West Asia tensions had sharply raised crude oil prices, reigniting supply-chain and inflationary pressures.",
   "options": [
    "1 and 2 only",
    "1 and 3 only",
    "2 and 3 only",
    "1, 2 and 3"
   ],
   "q": "According to the Reserve Bank of India's September 2026 Bulletin, consider the following statements:\n1. The Indian economy recorded robust growth of 7.8 per cent in Q1 of 2026-27.\n2. Headline CPI inflation inched up to 4.8 per cent in August 2026, driven by the food and beverages group along with a pickup in fuel and core components.\n3. India's foreign exchange reserves reached an all-time high.\nWhich of the statements given above are correct?"
  },
  {
   "answer": 1,
   "expl": "Correct: the GR was issued on the basis of the Agriculture Commissioner's report after prolonged rainfall deficits caused crop loss. Drought declaration is an executive decision of the state government. The declaration covered major parts of Vidarbha, Marathwada, North Maharashtra and the Pune division; the worst-hit districts were Yavatmal (16 taluks), Jalgaon (15), and Ahilyanagar/Nagpur/Amravati/Nanded (14 each).",
   "options": [
    "The India Drought Monitor report of IIT Gandhinagar",
    "The report of the Agriculture Commissioner, following prolonged rainfall deficits that caused crop loss",
    "A directive of the National Disaster Management Authority",
    "The recommendation of the State Finance Commission"
   ],
   "q": "The Government of Maharashtra issued a government resolution on 26 September 2026 declaring drought in 265 of the State's 358 talukas. This declaration was based on:"
  },
  {
   "answer": 0,
   "expl": "Statements 1 and 2 are correct; 3 is wrong. At the NDTV Defence Summit 2026 (28 September 2026), Defence Secretary R.K. Singh explicitly said the government has not taken any decision on acquiring the Su-57 — though Russia has offered licensed production with deep tech transfer. India plans to bridge the stealth gap (China is believed to operate about 500 J-20/J-35s) by layering AI over the IAF's Integrated Air Command and Control System (IACCS), fused with army and air-defence networks, to improve 4.5-generation fighters like the Tejas until AMCA enters service.",
   "options": [
    "1 and 2 only",
    "2 and 3 only",
    "1 and 3 only",
    "1, 2 and 3"
   ],
   "q": "With reference to India's fifth-generation fighter aircraft programme, consider the following statements:\n1. The Advanced Medium Combat Aircraft (AMCA) is India's indigenous fifth-generation fighter programme.\n2. The first AMCA prototype is expected to roll out in September 2028.\n3. India has decided to acquire the Russian Sukhoi-57 stealth fighter to bridge the stealth gap with China.\nWhich of the statements given above are correct?"
  },
  {
   "answer": 3,
   "expl": "All four are correct. On 28 September 2026 the Supreme Court refused to stay the levy — calling it 'less a legal and more a technical issue' — but issued notice to the Centre, RBI, NPCI and the UPI Steering Committee. Essential thin-margin sectors (railways, telecom, insurance, fuel, agricultural inputs) pay a flat Rs 5 per transaction above Rs 2,000, while payments into mutual funds, securities and stockbrokers attract 0.02 per cent, also capped at Rs 300.",
   "options": [
    "1, 2 and 3 only",
    "2, 3 and 4 only",
    "1, 3 and 4 only",
    "1, 2, 3 and 4"
   ],
   "q": "With reference to the Merchant Discount Rate (MDR) on UPI payments announced in September 2026, consider the following statements:\n1. From 15 October 2026, a 0.4 per cent MDR applies to commercial person-to-merchant UPI transactions above Rs 2,000.\n2. The MDR is capped at Rs 300 for payments of Rs 75,000 and above.\n3. Person-to-person transfers of any size will continue to attract zero charges.\n4. RuPay debit card payments retain their no-charge protection without any monetary ceiling.\nWhich of the statements given above are correct?"
  }
 ],
 "sections": [
  {
   "body": "<p>Attempt all eight in one timed sitting of about 15 minutes, then read every explanation. Note how each question links a fresh news event to a static GS concept — that is the UPSC Prelims pattern you should expect in 2027.</p>",
   "h": "How to use this set"
  }
 ],
 "subject": "Current Affairs",
 "tag": "Prelims GS I · Practice bank",
 "title": "Evening Refresh — 28 Sep 2026 (8 MCQs)"
},
 {
  "id": "upsc-bank-refresh-29sep2026",
  "title": "Morning Refresh — 29 Sep 2026 (8 MCQs)",
  "subject": "Current Affairs",
  "tag": "Prelims GS I · Practice bank",
  "blurb": "Fresh 25–29 September 2026 developments — RBI rate chatter, ESIC coverage, the digital tourism stack, the CHIME dark-energy probe, KAZIND-2026, the Cool Leaders awards and the AFSPA extension.",
  "intro": "Eight questions on the freshest 25–29 September 2026 news — each tied to a static GS concept, exactly the Prelims 2027 pattern.",
  "sections": [
   {
    "body": "<p>Attempt all eight in one timed sitting of about 15 minutes, then read every explanation. Note how each question links a fresh news event to a static GS concept — that is the UPSC Prelims pattern you should expect in 2027.</p>",
    "h": "How to use this set"
   }
  ],
  "questions": [
   {
    "q": "According to an EY report released on 28 September 2026, which of the following best describes its policy call for the RBI's October 2026 review?",
    "options": [
     "A 25-basis-point hike in the repo rate, currently at 5.25%",
     "A 50-basis-point cut to support growth",
     "A pause with a shift to a neutral stance",
     "An off-cycle 100-basis-point hike to defend the rupee"
    ],
    "answer": 0,
    "expl": "EY's 28 September 2026 report makes a case for a 25-bps hike at the October MPC, citing sticky food inflation and strong growth, with the repo at 5.25%. The MPC targets 4% CPI inflation within a ±2% band under the RBI Act, 1934."
   },
   {
    "q": "HSBC Global Investment Research, in a note dated 28 September 2026, expects the RBI to raise the repo rate by a cumulative 50 basis points over FY27. Which of the following is cited as a key driver?",
    "options": [
     "Resurfacing inflation risks including imported inflation via a weaker rupee and firm crude",
     "A collapse in bank credit growth",
     "Deflation in wholesale prices",
     "A statutory requirement to hold rates unchanged"
    ],
    "answer": 0,
    "expl": "HSBC's call rests on resurfacing inflation risks — imported inflation through a weaker rupee and firm crude prices — even as growth stays resilient. Prelims trap: repo changes transmit through the LAF corridor, not through CRR directly."
   },
   {
    "q": "On 28 September 2026, Union Labour and Employment Minister Mansukh Mandaviya said ESIC provides health security to 25 crore people. Under the ESI Act, 1948, which of the following is correct?",
    "options": [
     "ESI applies to factories/establishments with 10+ employees earning up to a notified wage ceiling, with employer-employee contributions",
     "ESI covers only central government employees",
     "ESI is a fully tax-funded universal scheme with no contributions",
     "ESI benefits are limited to maternity relief only"
    ],
    "answer": 0,
    "expl": "The ESI Act, 1948 covers factories and establishments employing 10 or more persons (20 in some states) drawing wages up to the notified ceiling (Rs 21,000/month, Rs 25,000 for persons with disabilities), funded by employer (3.25%) and employee (0.75%) contributions. Benefits include medical, sickness, maternity, disablement and dependants' benefits."
   },
   {
    "q": "Consider the following statements about the National Digital Tourism Stack (NDTS): 1. It was launched on World Tourism Day 2026 by the Tourism Minister at Bharat Mandapam. 2. It is being built with ONDC and ICDIA support. 3. It targets 23,000 tourism experiences and homestays by end-2028. Which are correct?",
    "options": [
     "1, 2 and 3",
     "1 and 2 only",
     "2 and 3 only",
     "1 and 3 only"
    ],
    "answer": 0,
    "expl": "All three are correct. NDTS was launched 27 September 2026 (World Tourism Day) by Gajendra Shekhawat at Bharat Mandapam, developed with ONDC and the International Centre for DPI Innovation and Advancement (ICDIA), targeting 23,000 experiences and homestays by end-2028 with a pilot in January 2027."
   },
   {
    "q": "The Canadian Hydrogen Intensity Mapping Experiment (CHIME), reported on 28 September 2026, maps the 21-cm emission line of neutral hydrogen. This technique is called intensity mapping because it",
    "options": [
     "measures the combined radio glow of many unresolved galaxies instead of cataloguing individual ones",
     "photographs individual hydrogen atoms",
     "uses X-ray intensity to find black holes",
     "maps hydrogen only inside the Milky Way"
    ],
    "answer": 0,
    "expl": "Intensity mapping measures the aggregate 21-cm emission from large cosmic volumes without resolving individual galaxies, tracing large-scale structure and the expansion history shaped by dark energy. The 21-cm line comes from the hyperfine spin-flip transition of neutral hydrogen."
   },
   {
    "q": "Exercise KAZIND-2026, which began on 28 September 2026, is the bilateral military exercise between India and",
    "options": [
     "Kazakhstan",
     "Kyrgyzstan",
     "Uzbekistan",
     "Mongolia"
    ],
    "answer": 0,
    "expl": "KAZIND is the India-Kazakhstan joint exercise; the 2026 edition (28 Sep–11 Oct) is at Oskemen with a 60-member Indian contingent mainly from the Garhwal Rifles. Kyrgyzstan pairs with India in KHANJAR; Uzbekistan in DUSTLIK; Mongolia in NOMADIC ELEPHANT."
   },
   {
    "q": "Which of the following statements about the Global Cooling Pledge Assembly is correct?",
    "options": [
     "It was held in Singapore on 15–18 September 2026, where the first Cool Leaders — Singapore, the UAE and Dong Mingzhu — were named",
     "It was the COP30 climate summit held in Belem",
     "It launched the International Solar Alliance",
     "It adopted a binding treaty phasing out HFCs by 2030"
    ],
    "answer": 0,
    "expl": "The Assembly ran 15–18 September 2026 in Singapore under UNEP's Cool Coalition; on 17 September the inaugural Cool Leaders (Singapore, UAE, Gree Electric's Dong Mingzhu) were named alongside a Heat Resilience Roadmap and Nature for Cooling Challenge. The Global Cooling Pledge itself dates to COP28 (2023); the HFC phase-down is the Kigali Amendment."
   },
   {
    "q": "Consider the following statements: 1. The Home Ministry extended AFSPA for six months from 1 October 2026 in parts of Manipur, Nagaland and Arunachal Pradesh. 2. In Manipur, areas under 13 police stations remain excluded. 3. Section 3 of AFSPA empowers declaration of disturbed areas. Which are correct?",
    "options": [
     "1, 2 and 3",
     "1 and 2 only",
     "2 and 3 only",
     "1 and 3 only"
    ],
    "answer": 0,
    "expl": "All three are correct. The 25 September 2026 notifications extend AFSPA from 1 October 2026 for six months: most of Manipur (excluding 13 police stations in five valley districts), nine Nagaland districts plus 21 police-station areas, and Tirap/Changlang/Longding plus Namsai police-station areas in Arunachal Pradesh. Section 3 allows the Centre/state Governor/UT Administrator to declare disturbed areas."
   }
  ]
},
{
 "blurb": "Fresh 29 September 2026 developments — the Pashudhan Bima Portal, Essar's Iowa steel plan, the US specialty-drug tariff exemption, SEBI's Adani MPS clearance, Tamil Nadu's newborn gold-ring scheme, the bullet train's first steel bridge, exam-reforms consultations and the J&K statehood resolution.",
 "id": "upsc-bank-refresh-29sep2026-evening",
 "intro": "Eight questions on the freshest 29 September 2026 news — each tied to a static GS concept, exactly the Prelims 2027 pattern.",
 "sections": [
  {
   "body": "<p>Attempt all eight in one timed sitting of about 15 minutes, then read every explanation. Note how each question links a fresh news event to a static GS concept — that is the UPSC Prelims pattern you should expect in 2027.</p>",
   "h": "How to use this set"
  }
 ],
 "subject": "Current Affairs",
 "tag": "Prelims GS I · Practice bank",
 "title": "Evening Refresh — 29 Sep 2026 (8 MCQs)",
 "questions": [
  {
   "q": "With reference to the Pashudhan (Livestock) Insurance Portal launched in September 2026, consider the following statements:\n1. It was launched by the Union Minister for Fisheries, Animal Husbandry and Dairying.\n2. It provides a digital platform for policy issuance, claims settlement, monitoring and reporting.\nWhich of the statements given above is/are correct?",
   "options": [
    "1 only",
    "2 only",
    "Both 1 and 2",
    "Neither 1 nor 2"
   ],
   "answer": 2,
   "expl": "Both statements are correct. The Pashudhan (Livestock) Insurance Portal was launched on 28 September 2026 by Union Minister Rajiv Ranjan Singh (Fisheries, Animal Husbandry and Dairying) and digitises policy issuance, claims, monitoring and reporting. Remember: animal husbandry is a State subject under the Seventh Schedule."
  },
  {
   "q": "The Essar Group announced in September 2026 a plan to invest in a steel plant in the US state of Iowa. What is the announced size of this investment?",
   "options": [
    "USD 1.5 billion",
    "USD 5 billion",
    "USD 10 billion",
    "USD 15 billion"
   ],
   "answer": 3,
   "expl": "Essar announced a USD 15-billion investment plan for a steel plant in Iowa, unveiled at the White House by CEO Prashant Ruia. The announcement came amid shifting US tariff and industrial policy — relevant for GS III (industrial policy) and India–US economic ties."
  },
  {
   "q": "In September 2026, the United States exempted India and 19 other countries from a proposed 100% import tariff on:",
   "options": [
    "Steel and aluminium products",
    "Specialty drugs",
    "Electric vehicles",
    "Solar modules"
   ],
   "answer": 1,
   "expl": "The US exempted India and 19 other countries from its proposed 100% import tariff on specialty drugs, sparing Indian pharmaceutical exporters. Specialty drugs are high-cost medicines for complex conditions such as cancer and autoimmune disorders, distinct from generics — and the US is India's largest drug export market."
  },
  {
   "q": "With reference to minimum public shareholding (MPS) norms in India, consider the following statements:\n1. Listed companies must maintain at least 25% public shareholding under SEBI rules.\n2. In September 2026, SEBI found no violations by Adani Group companies in its MPS probe.\nWhich of the statements given above is/are correct?",
   "options": [
    "1 only",
    "2 only",
    "Both 1 and 2",
    "Neither 1 nor 2"
   ],
   "answer": 2,
   "expl": "Both are correct. SEBI's MPS norms require listed companies to keep at least 25% of shareholding with the public, and in September 2026 SEBI closed its probe into alleged Adani MPS breaches with no violations found. SEBI is a statutory body under the SEBI Act, 1992."
  },
  {
   "q": "The National High Speed Rail Corporation launched its first 100-metre steel bridge in September 2026. For which corridor was this bridge launched?",
   "options": [
    "Delhi–Varanasi High Speed Rail",
    "Mumbai–Ahmedabad High Speed Rail",
    "Chennai–Bengaluru–Mysuru High Speed Rail",
    "Delhi–Ahmedabad High Speed Rail"
   ],
   "answer": 1,
   "expl": "The ~1,405-tonne, 100-metre steel bridge was launched for the Mumbai–Ahmedabad High Speed Rail corridor in Maharashtra. Steel bridges are used where the viaduct must cross highways, railways or rivers without intermediate piers. The corridor uses Japanese Shinkansen technology with JICA loan assistance."
  },
  {
   "q": "With reference to examination reforms in India, consider the following statements:\n1. A task force headed by Nandan Nilekani is reviewing the conduct of national-level examinations.\n2. In September 2026, the task force consulted K. Radhakrishnan, who headed the 2024 committee on the NEET-UG paper-leak controversy.\nWhich of the statements given above is/are correct?",
   "options": [
    "1 only",
    "2 only",
    "Both 1 and 2",
    "Neither 1 nor 2"
   ],
   "answer": 2,
   "expl": "Both are correct. Nandan Nilekani's task force on examination reforms is reviewing national-level examinations after the 2024 NEET-UG and UGC-NET irregularities, and it consulted former ISRO chairman K. Radhakrishnan, who headed the 2024 NEET-UG paper-leak committee. The National Testing Agency was set up in 2017 under the Ministry of Education."
  },
  {
   "q": "In September 2026, the Jammu and Kashmir Assembly passed a resolution demanding:",
   "options": [
    "Restoration of Article 370",
    "Restoration of statehood",
    "Delimitation of Assembly constituencies",
    "A separate High Court for Ladakh"
   ],
   "answer": 1,
   "expl": "The J&K Assembly passed a resolution demanding restoration of statehood, with the National Conference-led government pressing the Centre on its post-2019 commitment. The Supreme Court, while upholding the abrogation of Article 370 in December 2023, directed restoration of statehood at the earliest. J&K was reorganised into two UTs under the J&K Reorganisation Act, 2019."
  },
  {
   "q": "Tamil Nadu Chief Minister Vijay announced in September 2026 that the state government would gift what to every newborn child?",
   "options": [
    "A 1-gram gold ring",
    "A fixed deposit of Rs 50,000",
    "A health insurance cover of Rs 5 lakh",
    "A free laptop on admission to Class 1"
   ],
   "answer": 0,
   "expl": "CM Vijay announced a 1-gram gold ring for every newborn child in Tamil Nadu, a welfare measure aimed at new mothers and infants. Health and family welfare schemes are largely in the States' domain — this recalls Tamil Nadu's earlier marriage-assistance schemes involving gold."
  }
 ]
}
);
})();
