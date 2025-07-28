// Language translation data
const translations = {
    en: {
        site_title_home: "Association of Indian Families in Aachen - Home",
        site_title_about: "Association of Indian Families in Aachen - About Us",
        site_title_events: "Association of Indian Families in Aachen - Events",
        site_title_membership: "Association of Indian Families in Aachen - Membership",
        site_title_faq: "Association of Indian Families in Aachen - FAQs", // Ensure this is updated
        site_title_contact: "Association of Indian Families in Aachen - Contact Us",
        site_title_data_protection: "Association of Indian Families in Aachen - Data Protection Policy", // NEW        
        nav_home: "Home",
        nav_about: "About Us",
        nav_events: "Events",
        nav_membership: "Membership",
        nav_faq: "FAQs",
        nav_contact: "Contact",
        nav_event_registration: "Event Registration", // NEW NAV KEY        
        home_main_title: "Association of Indian Families in Aachen",
        home_tagline: "Connecting Indian families in Aachen, fostering community, and celebrating our rich culture.",
        home_explore_events: "Explore Events",
        footer_copyright: "&copy; 2025 Association of Indian Families in Aachen. e.V. registration number VR 6590(Amtsgericht Aachen). All rights reserved.",
        footer_data_protection_policy: "Data Protection Policy", // CHANGED FROM footer_privacy
        footer_terms: "Terms of Service",
        lang_en: "English",
        lang_de: "Deutsch",
        lang_hi: "हिन्दी",
        lang_mr: "मराठी",
        lang_te: "తెలుగు",
        lang_ta: "தமிழ்",
        lang_bn: "বাংলা",
        lang_pa: "ਪੰਜਾਬੀ",
        lang_kn: "ಕನ್ನಡ",
        lang_ml: "മലയാളം",
        lang_or: "ଓଡ଼ିଆ",
        lang_gu: "ગુજરાતી",
        lang_sa: "संस्कृतम्",
        lang_mai: "मैथिली",
        about_title: "About Our Association",
        about_para1: "The Association of Indian Families in Aachen (AIFA e.V.) is a non-profit organization dedicated to bringing together Indian families residing in Aachen, Germany. Our mission is to create a vibrant and supportive community where cultural heritage is celebrated, traditions are preserved, and new friendships are forged.",
        about_para2: "We organize a variety of events throughout the year, ranging from cultural festivals and social gatherings to educational workshops and community service initiatives. Our aim is to provide a home away from home for Indian families, helping them integrate into the local community while staying connected to their roots.",
        about_para3: "Join us to experience the warmth of our community, participate in exciting events, and contribute to building a strong and cohesive Indian diaspora in Aachen.",
        events_title: "Our Events",
        event_diwali_title: "Diwali Celebration 2023",
        event_diwali_date: "October 28, 2023",
        event_diwali_desc: "A grand celebration of the festival of lights with cultural performances, delicious food, and fireworks. Families enjoyed a memorable evening together.",
        event_diwali_status: "Past Event",
        event_summer_title: "Summer Family Picnic",
        event_summer_date: "July 20, 2024",
        event_summer_desc: "Join us for a fun-filled family picnic at Westpark with games, food, and outdoor activities. Don't forget your picnic baskets!",
        event_summer_status: "Current Event",
        event_dandiya_title: "Dandiya celebrations 2025",
        event_dandiya_date: "October 2, 2025",
        event_dandiya_desc: "Get ready to twirl and dance! Join us for a vibrant Dandiya and Garba night, celebrating the festive spirit with traditional music, colorful attire, and energetic dance moves. More details on venue and activities will be announced soon.",
        event_dandiya_status: "Future Event",
        events_view_all: "View All Events",
        events_register_now: "Register for an Event", // NEW BUTTON TEXT        
        membership_title: "Become a Member",
        membership_intro: "Join the Association of Indian Families in Aachen (AIFA e.V.) and become part of our growing community! Your membership helps us organize exciting events and support Indian families in Aachen.",
        membership_individual_title: "Individual Membership",
        membership_individual_price: "€30",
        membership_individual_per_year: "/ year",
        membership_individual_desc: "Perfect for single individuals looking to connect.",
        membership_family_title: "Family Membership",
        membership_family_price: "€50",
        membership_family_per_year: "/ year",
        membership_family_desc: "Covers all members of a single household.",
        membership_form_title: "Membership Application Form",
        membership_type_label: "Membership Type",
        membership_type_select_option: "Select a membership type",
        membership_type_individual_option: "Individual Membership (€30/year)",
        membership_type_family_option: "Family Membership (€50/year)",
        first_name_label: "First Name",
        first_name_placeholder: "John",
        last_name_label: "Last Name",
        last_name_placeholder: "Doe",
        num_family_members_label: "Number of Family Members (including yourself)",
        num_family_members_placeholder: "e.g., 4",
        volunteer_checkbox: "I am available to volunteer for AIFA e.V. events.",
        apply_membership_button: "Apply for Membership",
        membership_success_message: "Thank you for your membership application! We will contact you shortly.",
        faq_title: "Frequently Asked Questions",
        faq_q1: "What is the Association of Indian Families in Aachen (AIFA e.V.)?",
        faq_a1: "AIFA e.V. is a non-profit organization dedicated to fostering a strong community among Indian families living in Aachen, Germany. We organize cultural events, social gatherings, and provide a platform for networking and support.",
        faq_q2: "How can I become a member?",
        faq_a2: "Membership details and application forms will be available soon on our website. Please check back or contact us through the contact form for more information.",
        faq_q3: "Are events open to non-members?",
        faq_a3: "Many of our events are open to everyone, including non-members, to promote cultural exchange and community building. Some exclusive events may require membership. Details will be specified for each event.",
        faq_q4: "How can I volunteer or contribute?",
        faq_a4: "We welcome volunteers! If you're interested in contributing your time or skills, please reach out to us via the contact form, and we'll get in touch with opportunities.",
        faq_portal_title: "Information Portal: FAQs for Indian Families in Germany", // NEW
        faq_search_placeholder: "Search FAQs by keyword...", // NEW
        faq_cat_aifa_title: "AIFA e.V.", // Existing, but good to confirm
        faq_cat_first_entry_title: "First Entry into Germany", // NEW
        faq_first_entry_q1: "What should I do after receiving a job offer in Germany?", // NEW
        faq_first_entry_a1: "After receiving a job offer, you should immediately start the visa application process. Gather all required documents, including your employment contract, academic certificates, and proof of funds. It's advisable to check the specific requirements of the German embassy or consulate in your country.", // NEW
        faq_first_entry_q2: "What is the process for family reunification visa?", // NEW
        faq_first_entry_a2: "The family reunification visa allows your spouse and minor children to join you in Germany. Key requirements often include proof of sufficient living space, financial means, and basic German language skills for your spouse. The application is typically filed at the German embassy in your home country.", // NEW
        faq_first_entry_q3: "How much gold/jewelry can I bring to Germany?", // NEW
        faq_first_entry_a3: "When moving to Germany, personal belongings, including jewelry, are generally exempt from customs duties if they are part of your household effects and have been used by you for at least six months. However, for high-value items, it's advisable to carry proof of ownership and value (e.g., purchase receipts, appraisal certificates) to avoid issues with customs. Always declare items above a certain value as per customs regulations.", // NEW
        faq_cat_first_arrival_aachen_title: "First Arrival in Aachen", // NEW
        faq_first_arrival_aachen_q1: "What are the best ways to reach Aachen from the airport?", // NEW
        faq_first_arrival_aachen_a1: "Aachen is well-connected. From Düsseldorf Airport (DUS) or Cologne Bonn Airport (CGN), you can take a train directly to Aachen Hauptbahnhof (main station). From Maastricht Aachen Airport (MST), buses are available. Taxis and ride-sharing services are also options but are generally more expensive.", // NEW
        faq_first_arrival_aachen_q2: "Where can I find temporary housing in Aachen?", // NEW
        faq_first_arrival_aachen_a2: "For temporary housing, consider serviced apartments, Airbnb, or short-term rentals. Websites like Booking.com, Airbnb, and local classifieds (e.g., WG-Gesucht.de for shared flats, though less common for families) can be helpful. Some hotels also offer extended stay options.", // NEW
        faq_first_arrival_aachen_q3: "What is 'Anmeldung' and how do I do it?", // NEW
        faq_first_arrival_aachen_a3: "Anmeldung' is the mandatory registration of your residential address with the local authorities (Bürgeramt/Einwohnermeldeamt) within two weeks of moving into your permanent residence. You'll need your passport, visa, and a landlord confirmation (Wohnungsgeberbestätigung). It's crucial for getting a tax ID, opening a bank account, and other administrative tasks. Book an appointment online in advance.", // NEW
        faq_first_arrival_aachen_q4: "How do I open a bank account in Germany?", // NEW
        faq_first_arrival_aachen_a4: "You can open a bank account with traditional banks (e.g., Sparkasse, Deutsche Bank) or online banks (e.g., N26, Comdirect). For traditional banks, you'll typically need your passport, visa/residence permit, and proof of address (Anmeldung certificate). Online banks often offer a simpler digital process.", // NEW
        faq_cat_children_title: "Children", // NEW
        faq_children_q1: "How do I find a Kita (kindergarten) or school for my children in Aachen?", // NEW
        faq_children_a1: "For Kita, you typically register through the city's online portal (Kita-Navigator Aachen) or directly with individual Kitas. For schools, contact the Schulamt (School Office) of Aachen or individual schools. Early registration for Kitas is highly recommended due to high demand.", // NEW
        faq_children_q2: "Are there any hobby classes or sports clubs for children in Aachen?", // NEW
        faq_children_a2: "Yes, Aachen offers a wide range of hobby classes and sports clubs for children. You can find information through the city's official website, local community centers (Familienzentren), sports federations (Stadtsportbund Aachen), or by inquiring directly at schools and Kitas. Options include football, swimming, music, art, and dance.", // NEW
        faq_cat_language_learning_title: "Language Learning", // NEW
        faq_language_q1: "Which language schools are available in Aachen?", // NEW
        faq_language_a1: "Aachen has several language schools including Volkshochschule (VHS) Aachen, Goethe-Institut (though not directly in Aachen, close by), and private language schools like Sprachenakademie Aachen. They offer various levels and course formats.", // NEW
        faq_language_q2: "What is an 'Integration Course' and how can I join?", // NEW
        faq_language_a2: "An Integration Course (Integrationskurs) is a German language and orientation course for new immigrants, partially funded by the government. It covers up to B1 German language level and includes a module on German culture, history, and legal system. You can apply through the Bundesamt für Migration und Flüchtlinge (BAMF) or directly with authorized language schools.", // NEW
        faq_language_q3: "How can I learn German while working full-time?", // NEW
        faq_language_a3: "Many language schools offer evening or weekend courses specifically designed for working professionals. Online platforms (e.g., Duolingo, Babbel, Deutsche Welle), language exchange partners, and practicing with German colleagues or friends can also be very effective. Some employers also offer in-house language training.", // NEW
        faq_cat_residence_permit_title: "Residence Permit", // NEW
        faq_residence_q1: "Why is the residence permit important as an identity and visa document?", // NEW
        faq_residence_a1: "Your residence permit (Aufenthaltstitel) is your official proof of legal residency in Germany. It serves as your primary identification document within Germany and dictates your rights (e.g., work, study). It also acts as your visa for re-entry into Germany and other Schengen countries.", // NEW
        faq_residence_q2: "How do I apply for a residence permit for the first time and extend it?", // NEW
        faq_residence_a2: "The initial application is usually done at the Ausländerbehörde (Foreigners' Office) in Aachen after you complete your Anmeldung. You'll need your passport, visa, employment contract, proof of health insurance, and other documents. For extensions, apply well before your current permit expires, providing updated documents. Appointments are usually mandatory.", // NEW
        faq_residence_q3: "How do I apply for a 'Settlement Permit' (Permanent Residence)?", // NEW
        faq_residence_a3: "A Settlement Permit (Niederlassungserlaubnis) grants you permanent residency. Eligibility typically requires 5 years of legal residency (shorter for Blue Card holders), sufficient German language skills (B1), secure livelihood, adequate living space, and contributions to the pension scheme. Apply at the Ausländerbehörde.", // NEW
        faq_cat_house_hunting_title: "House Hunting", // NEW
        faq_house_hunting_q1: "How do I find a long-term apartment in Aachen?", // NEW
        faq_house_hunting_a1: "Popular platforms for apartment hunting include ImmobilienScout24, Immowelt, and eBay Kleinanzeigen. Networking and local real estate agents (Makler) can also be helpful. Be prepared for high demand and competition, especially for family-friendly apartments.", // NEW
        faq_house_hunting_q2: "What should I know about rental contracts (Vertrag) and termination (Kündigung)?", // NEW
        faq_house_hunting_a2: "German rental contracts (Mietvertrag) are comprehensive. Pay attention to clauses regarding rent increases, renovation duties, and notice periods for termination (usually 3 months for tenants). Always read the contract carefully and clarify any doubts. Seek advice from a Mieterverein (tenants' association) if needed.", // NEW
        faq_house_hunting_q3: "What is involved in purchasing a property (Notar, Bauamt, Finanzamt)?", // NEW
        faq_house_hunting_a3: "Property purchase in Germany involves a Notar (public notary) who drafts and certifies the purchase agreement. The Bauamt (Building Authority) handles building permits and regulations. The Finanzamt (Tax Office) is involved for property transfer tax (Grunderwerbsteuer). Legal and financial advice is highly recommended due to the complexity.", // NEW
        faq_cat_social_circle_title: "Social Circle", // NEW
        faq_social_circle_q1: "How can I build a social circle and meet other Indians in Aachen?", // NEW
        faq_social_circle_a1: "Joining AIFA e.V. events is a great start! Also, explore local Indian community groups on social media (Facebook, WhatsApp), attend cultural festivals, and participate in university or company international groups. Language exchange meetups are also good for meeting diverse people.", // NEW
        faq_social_circle_q2: "Are there any Indian associations (Verein) or cultural groups in Aachen?", // NEW
        faq_social_circle_a2: "Yes, apart from AIFA e.V., there might be other smaller Indian cultural groups or student associations (especially around RWTH Aachen University). Searching online for \"Indischer Verein Aachen\" or checking notice boards at Indian grocery stores can provide leads.", // NEW
        faq_social_circle_q3: "How can I pursue hobbies and sports in Aachen?", // NEW
        faq_social_circle_a3: "Aachen has numerous sports clubs (Sportvereine) for various activities like football, tennis, swimming, and hiking. The Hochschulsport (university sports) offers many courses for students and staff. For hobbies, check local community centers (Volkshochschule), private clubs, or online platforms like Meetup.com for interest-based groups.", // NEW
        faq_cat_citizenship_title: "Citizenship", // NEW
        faq_citizenship_q1: "What is the process to acquire German Citizenship?", // NEW
        faq_citizenship_a1: "The standard process for naturalization (Einbürgerung) requires 8 years of legal residency (shorter in some cases, e.g., 7 years with integration course, 6 years for spouses of German citizens), sufficient German language skills (B1/B2), passing a naturalization test, and generally renouncing your previous citizenship (India does not allow dual citizenship for adults).", // NEW
        faq_citizenship_q2: "What is the process for surrendering Indian passport and getting an OCI card?", // NEW
        faq_citizenship_a2: "Upon acquiring German citizenship, you must surrender your Indian passport to the Indian Embassy/Consulate. You will then receive a \"Surrender Certificate.\" Subsequently, you can apply for an Overseas Citizen of India (OCI) card, which grants lifelong visa-free travel to India and other benefits. The application process is online via the Indian government portal.", // NEW        
        contact_title: "Contact Us",
        contact_intro: "Have questions or want to get in touch? Fill out the form below and we'll get back to you as soon as possible.",
        your_name_label: "Your Name",
        your_name_placeholder: "John Doe",
        your_email_label: "Your Email",
        your_email_placeholder: "john.doe@example.com",
        subject_label: "Subject",
        subject_placeholder: "Inquiry about membership",
        message_label: "Message",
        message_placeholder: "Write your message here...",
        send_message_button: "Send Message",
        contact_success_message: "Thank you for your message! We will get back to you soon.",
        event_reg_title: "Event Registration",
        event_reg_intro: "Please fill out the form below to register for our upcoming events.",
        event_reg_select_event_label: "Select Event",
        event_reg_select_event_placeholder: "Choose an event",
        event_reg_summer_picnic_option: "Summer Family Picnic (July 20, 2024)",
        event_reg_dandiya_option: "Dandiya celebrations 2025 (October 2, 2025)",
        event_reg_num_attendees_label: "Number of Attendees",
        event_reg_dietary_notes_label: "Dietary Restrictions / Special Notes (Optional)",
        event_reg_dietary_notes_placeholder: "e.g., Vegetarian, Gluten-free, wheelchair access needed",
        event_reg_submit_button: "Register for Event",
        event_reg_success_message: "Thank you for registering for the event! We look forward to seeing you.",
        event_reg_error_message: "Error registering for the event. Please try again.",
        // ... rest of en translations ...
        data_protection_title: "Data Protection Policy", // NEW
        data_protection_p1: "The association collects, processes and uses personal data of its members to fulfil the purposes and tasks permitted under the constitution of the association.", // NEW
        data_protection_p2: "The association can arrange insurance policies to receive benefits for itself and/or for its members. To implement or terminate the contracts for insurance policies, the association transmits personal data of its members to the responsible insurance company up to the necessary extent.", // NEW
        data_protection_p3: "In connection with public or private events and other activities mentioned in the constitution, the association publishes the names and photos of its members on its homepage and sends names and photos for publication to the print and telemedia as well as electronic media. A member can object to the publication of individual photos of themselves to the board at any time. Once the objection has been received, publication/transmission will be stopped and the association will remove existing photos from its homepage.", // NEW
        data_protection_p4: "Through their membership and the associated recognition of this constitution, members agree to the collection, processing and use of their personal data to the extent and scope stated above. The association is only permitted to use data for purposes other than fulfilling its statutory tasks and purposes if it is legally obliged to do so. Data may not be sold.", // NEW
        data_protection_p5: "Every member undertakes the responsibility to treat the data confidential, which is made available to them as part of the membership list. The same applies to all financial matters of the association.", // NEW
        data_protection_p6: "We are committed to not disclose the personal data of the members to third parties for any commercial or non commercial purposes. For further details on the data usage, kindly refer to our general data protection policy here (www.aifaev.de)" // NEW        
    },
    de: {
        site_title_home: "Verband Indischer Familien in Aachen - Startseite",
        site_title_about: "Verband Indischer Familien in Aachen - Über Uns",
        site_title_events: "Verband Indischer Familien in Aachen - Veranstaltungen",
        site_title_membership: "Verband Indischer Familien in Aachen - Mitgliedschaft",
        site_title_faq: "Verband Indischer Familien in Aachen - FAQs", // Ensure this is updated
        site_title_contact: "Verband Indischer Familien in Aachen - Kontakt",
        site_title_data_protection: "Verband Indischer Familien in Aachen - Datenschutzrichtlinie", // NEW        
        nav_home: "Startseite",
        nav_about: "Über Uns",
        nav_events: "Veranstaltungen",
        nav_membership: "Mitgliedschaft",
        nav_faq: "FAQs",
        nav_contact: "Kontakt",
        nav_event_registration: "Veranstaltungsanmeldung", // NEW NAV KEY        
        home_main_title: "Verband Indischer Familien in Aachen",
        home_tagline: "Indische Familien in Aachen verbinden, Gemeinschaft fördern und unsere reiche Kultur feiern.",
        home_explore_events: "Veranstaltungen entdecken",
        footer_copyright: "&copy; 2025 Verband Indischer Familien in Aachen. e.V. Registrierungsnummer VR 6590(Amtsgericht Aachen). Alle Rechte vorbehalten.",
        footer_data_protection_policy: "Datenschutzrichtlinie", // CHANGED FROM footer_privacy
        footer_terms: "Nutzungsbedingungen",
        lang_en: "English",
        lang_de: "Deutsch",
        lang_hi: "हिन्दी",
        lang_mr: "मराठी",
        lang_te: "తెలుగు",
        lang_ta: "தமிழ்",
        lang_bn: "বাংলা",
        lang_pa: "ਪੰਜਾਬੀ",
        lang_kn: "ಕನ್ನಡ",
        lang_ml: "മലയാളം",
        lang_or: "ଓଡ଼ିଆ",
        lang_gu: "ગુજરાતી",
        lang_sa: "संस्कृतम्",
        lang_mai: "मैथिली",
        about_title: "Über unseren Verein",
        about_para1: "Der Verband Indischer Familien in Aachen (AIFA e.V.) ist eine gemeinnützige Organisation, die indische Familien in Aachen, Deutschland, zusammenbringt. Unsere Mission ist es, eine lebendige und unterstützende Gemeinschaft zu schaffen, in der kulturelles Erbe gefeiert, Traditionen bewahrt und neue Freundschaften geschlossen werden.",
        about_para2: "Wir organisieren das ganze Jahr über eine Vielzahl von Veranstaltungen, von Kulturfesten und geselligen Zusammenkünften bis hin zu Bildungsworkshops und gemeinnützigen Initiativen. Unser Ziel ist es, indischen Familien ein Zuhause fernab der Heimat zu bieten und ihnen dabei zu helfen, sich in die lokale Gemeinschaft zu integrieren, während sie mit ihren Wurzeln verbunden bleiben.",
        about_para3: "Werden Sie Teil unserer Gemeinschaft, nehmen Sie an spannenden Veranstaltungen teil und tragen Sie zum Aufbau einer starken und kohärenten indischen Diaspora in Aachen bei.",
        events_title: "Unsere Veranstaltungen",
        event_diwali_title: "Diwali Feier 2023",
        event_diwali_date: "28. Oktober 2023",
        event_diwali_desc: "Eine großartige Feier des Lichterfestes mit kulturellen Darbietungen, köstlichem Essen und Feuerwerk. Familien genossen einen unvergesslichen Abend zusammen.",
        event_diwali_status: "Vergangene Veranstaltung",
        event_summer_title: "Sommer-Familienpicknick",
        event_summer_date: "20. Juli 2024",
        event_summer_desc: "Begleiten Sie uns zu einem lustigen Familienpicknick im Westpark mit Spielen, Essen und Outdoor-Aktivitäten. Vergessen Sie Ihre Picknickkörbe nicht!",
        event_summer_status: "Aktuelle Veranstaltung",
        event_dandiya_title: "Dandiya-Feierlichkeiten 2025",
        event_dandiya_date: "2. Oktober 2025",
        event_dandiya_desc: "Machen Sie sich bereit zum Wirbeln und Tanzen! Begleiten Sie uns zu einer lebhaften Dandiya- und Garba-Nacht, die den festlichen Geist mit traditioneller Musik, farbenfroher Kleidung und energiegeladenen Tanzbewegungen feiert. Weitere Details zu Veranstaltungsort und Aktivitäten werden in Kürze bekannt gegeben.",
        event_dandiya_status: "Zukünftige Veranstaltung",
        events_view_all: "Alle Veranstaltungen ansehen",
        events_register_now: "Für eine Veranstaltung anmelden", // NEW BUTTON TEXT        
        membership_title: "Mitglied werden",
        membership_intro: "Treten Sie dem Verband Indischer Familien in Aachen (AIFA e.V.) bei und werden Sie Teil unserer wachsenden Gemeinschaft! Ihre Mitgliedschaft hilft uns, spannende Veranstaltungen zu organisieren und indische Familien in Aachen zu unterstützen.",
        membership_individual_title: "Einzelmitgliedschaft",
        membership_individual_price: "€30",
        membership_individual_per_year: "/ Jahr",
        membership_individual_desc: "Perfekt für Einzelpersonen, die sich vernetzen möchten.",
        membership_family_title: "Familienmitgliedschaft",
        membership_family_price: "€50",
        membership_family_per_year: "/ Jahr",
        membership_family_desc: "Umfasst alle Mitglieder eines einzelnen Haushalts.",
        membership_form_title: "Mitgliedsantragsformular",
        membership_type_label: "Mitgliedschaftsart",
        membership_type_select_option: "Wählen Sie eine Mitgliedschaftsart",
        membership_type_individual_option: "Einzelmitgliedschaft (€30/Jahr)",
        membership_type_family_option: "Familienmitgliedschaft (€50/Jahr)",
        first_name_label: "Vorname",
        first_name_placeholder: "Max",
        last_name_label: "Nachname",
        last_name_placeholder: "Mustermann",
        num_family_members_label: "Anzahl der Familienmitglieder (einschließlich Ihrer Person)",
        num_family_members_placeholder: "z.B. 4",
        volunteer_checkbox: "Ich stehe als Freiwilliger für AIFA e.V. Veranstaltungen zur Verfügung.",
        apply_membership_button: "Mitgliedschaft beantragen",
        membership_success_message: "Vielen Dank für Ihren Mitgliedsantrag! Wir werden uns in Kürze mit Ihnen in Verbindung setzen.",
        faq_title: "Häufig gestellte Fragen",
        faq_q1: "Was ist der Verband Indischer Familien in Aachen (AIFA e.V.)?",
        faq_a1: "AIFA e.V. ist eine gemeinnützige Organisation, die indische Familien in Aachen, Deutschland, zusammenbringt. Wir organisieren kulturelle Veranstaltungen, gesellige Zusammenkünfte und bieten eine Plattform für Networking und Unterstützung.",
        faq_q2: "Wie kann ich Mitglied werden?",
        faq_a2: "Details zur Mitgliedschaft und Antragsformulare werden in Kürze auf unserer Website verfügbar sein. Bitte schauen Sie wieder vorbei oder kontaktieren Sie uns über das Kontaktformular für weitere Informationen.",
        faq_q3: "Sind Veranstaltungen auch für Nicht-Mitglieder zugänglich?",
        faq_a3: "Viele unserer Veranstaltungen sind für alle offen, auch für Nicht-Mitglieder, um den kulturellen Austausch und den Aufbau von Gemeinschaften zu fördern. Einige exklusive Veranstaltungen erfordern möglicherweise eine Mitgliedschaft. Details werden für jede Veranstaltung gesondert angegeben.",
        faq_q4: "Wie kann ich mich ehrenamtlich engagieren oder einen Beitrag leisten?",
        faq_a4: "Wir freuen uns über Freiwillige! Wenn Sie daran interessiert sind, Ihre Zeit oder Fähigkeiten einzubringen, kontaktieren Sie uns bitte über das Kontaktformular, und wir werden uns mit Möglichkeiten bei Ihnen melden.",
// ... existing Deutsch translations ...
        faq_portal_title: "Informationsportal: FAQs für indische Familien in Deutschland", // NEW
        faq_search_placeholder: "FAQs nach Stichwort suchen...", // NEW
        faq_cat_aifa_title: "AIFA e.V.", // Existing
        faq_cat_first_entry_title: "Erste Einreise nach Deutschland", // NEW
        faq_first_entry_q1: "Was sollte ich tun, nachdem ich ein Stellenangebot in Deutschland erhalten habe?", // NEW
        faq_first_entry_a1: "Nach Erhalt eines Stellenangebots sollten Sie sofort den Visumantragsprozess beginnen. Sammeln Sie alle erforderlichen Dokumente, einschließlich Ihres Arbeitsvertrags, akademischer Zeugnisse und Nachweise über finanzielle Mittel. Es ist ratsam, die spezifischen Anforderungen der deutschen Botschaft oder des Konsulats in Ihrem Land zu prüfen.", // NEW
        faq_first_entry_q2: "Wie ist der Prozess für ein Familienzusammenführungsvisum?", // NEW
        faq_first_entry_a2: "Das Familienzusammenführungsvisum ermöglicht es Ihrem Ehepartner und minderjährigen Kindern, Ihnen in Deutschland beizutreten. Wesentliche Voraussetzungen sind oft der Nachweis ausreichenden Wohnraums, finanzieller Mittel und grundlegender Deutschkenntnisse für Ihren Ehepartner. Der Antrag wird in der Regel bei der deutschen Botschaft in Ihrem Heimatland gestellt.", // NEW
        faq_first_entry_q3: "Wie viel Gold/Schmuck darf ich nach Deutschland mitbringen?", // NEW
        faq_first_entry_a3: "Beim Umzug nach Deutschland sind persönliche Gegenstände, einschließlich Schmuck, in der Regel zollfrei, wenn sie Teil Ihres Hausrats sind und Sie diese mindestens sechs Monate lang benutzt haben. Bei hochwertigen Gegenständen ist es jedoch ratsam, Eigentums- und Wertnachweise (z.B. Kaufbelege, Gutachten) mitzuführen, um Probleme mit dem Zoll zu vermeiden. Melden Sie Gegenstände über einem bestimmten Wert immer gemäß den Zollvorschriften an.", // NEW
        faq_cat_first_arrival_aachen_title: "Erste Ankunft in Aachen", // NEW
        faq_first_arrival_aachen_q1: "Wie komme ich am besten vom Flughafen nach Aachen?", // NEW
        faq_first_arrival_aachen_a1: "Aachen ist gut angebunden. Vom Flughafen Düsseldorf (DUS) oder Köln/Bonn (CGN) können Sie einen Zug direkt zum Aachener Hauptbahnhof nehmen. Vom Flughafen Maastricht Aachen (MST) sind Busse verfügbar. Taxis und Fahrdienste sind ebenfalls Optionen, aber in der Regel teurer.", // NEW
        faq_first_arrival_aachen_q2: "Wo finde ich eine temporäre Unterkunft in Aachen?", // NEW
        faq_first_arrival_aachen_a2: "Für temporäre Unterkünfte kommen Serviced Apartments, Airbnb oder Kurzzeitmieten in Frage. Websites wie Booking.com, Airbnb und lokale Kleinanzeigen (z.B. WG-Gesucht.de für Wohngemeinschaften, weniger üblich für Familien) können hilfreich sein. Einige Hotels bieten auch längere Aufenthalte an.", // NEW
        faq_first_arrival_aachen_q3: "Was ist 'Anmeldung' und wie mache ich das?", // NEW
        faq_first_arrival_aachen_a3: "'Anmeldung' ist die obligatorische Registrierung Ihrer Wohnadresse bei den örtlichen Behörden (Bürgeramt/Einwohnermeldeamt) innerhalb von zwei Wochen nach dem Einzug in Ihren dauerhaften Wohnsitz. Sie benötigen Ihren Reisepass, Ihr Visum und eine Wohnungsgeberbestätigung. Dies ist entscheidend, um eine Steuer-ID zu erhalten, ein Bankkonto zu eröffnen und andere administrative Aufgaben zu erledigen. Vereinbaren Sie einen Termin online im Voraus.", // NEW
        faq_first_arrival_aachen_q4: "Wie eröffne ich ein Bankkonto in Deutschland?", // NEW
        faq_first_arrival_aachen_a4: "Sie können ein Bankkonto bei traditionellen Banken (z.B. Sparkasse, Deutsche Bank) oder Online-Banken (z.B. N26, Comdirect) eröffnen. Bei traditionellen Banken benötigen Sie in der Regel Ihren Reisepass, Visum/Aufenthaltstitel und einen Adressnachweis (Anmeldebescheinigung). Online-Banken bieten oft einen einfacheren digitalen Prozess an.", // NEW
        faq_cat_children_title: "Kinder", // NEW
        faq_children_q1: "Wie finde ich eine Kita (Kindergarten) oder Schule für meine Kinder in Aachen?", // NEW
        faq_children_a1: "Für Kitas melden Sie sich in der Regel über das Online-Portal der Stadt (Kita-Navigator Aachen) oder direkt bei einzelnen Kitas an. Für Schulen kontaktieren Sie das Schulamt der Stadt Aachen oder einzelne Schulen. Eine frühzeitige Anmeldung für Kitas wird aufgrund der hohen Nachfrage dringend empfohlen.", // NEW
        faq_children_q2: "Gibt es Hobbykurse oder Sportvereine für Kinder in Aachen?", // NEW
        faq_children_a2: "Ja, Aachen bietet eine breite Palette an Hobbykursen und Sportvereinen für Kinder. Informationen finden Sie auf der offiziellen Website der Stadt, in lokalen Familienzentren, bei Sportverbänden (Stadtsportbund Aachen) oder durch direkte Anfragen bei Schulen und Kitas. Optionen umfassen Fußball, Schwimmen, Musik, Kunst und Tanz.", // NEW
        faq_cat_language_learning_title: "Sprachenlernen", // NEW
        faq_language_q1: "Welche Sprachschulen gibt es in Aachen?", // NEW
        faq_language_a1: "Aachen hat mehrere Sprachschulen, darunter die Volkshochschule (VHS) Aachen, das Goethe-Institut (nicht direkt in Aachen, aber in der Nähe) und private Sprachschulen wie die Sprachenakademie Aachen. Sie bieten verschiedene Niveaus und Kursformate an.", // NEW
        faq_language_q2: "Was ist ein 'Integrationskurs' und wie kann ich daran teilnehmen?", // NEW
        faq_language_a2: "Ein Integrationskurs ist ein Deutsch- und Orientierungskurs für neue Einwanderer, der teilweise von der Regierung finanziert wird. Er deckt Deutschkenntnisse bis zum B1-Niveau ab und beinhaltet ein Modul über deutsche Kultur, Geschichte und Rechtssystem. Sie können sich über das Bundesamt für Migration und Flüchtlinge (BAMF) oder direkt bei autorisierten Sprachschulen anmelden.", // NEW
        faq_language_q3: "Wie kann ich Deutsch lernen, während ich Vollzeit arbeite?", // NEW
        faq_language_a3: "Viele Sprachschulen bieten Abend- oder Wochenendkurse an, die speziell für Berufstätige konzipiert sind. Online-Plattformen (z.B. Duolingo, Babbel, Deutsche Welle), Sprachaustauschpartner und das Üben mit deutschen Kollegen oder Freunden können ebenfalls sehr effektiv sein. Einige Arbeitgeber bieten auch interne Sprachkurse an.", // NEW
        faq_cat_residence_permit_title: "Aufenthaltserlaubnis", // NEW
        faq_residence_q1: "Warum ist die Aufenthaltserlaubnis als Identitäts- und Visadokument wichtig?", // NEW
        faq_residence_a1: "Ihre Aufenthaltserlaubnis (Aufenthaltstitel) ist Ihr offizieller Nachweis des legalen Aufenthalts in Deutschland. Sie dient als Ihr primäres Ausweisdokument innerhalb Deutschlands und bestimmt Ihre Rechte (z.B. Arbeit, Studium). Sie fungiert auch als Ihr Visum für die Wiedereinreise nach Deutschland und in andere Schengen-Länder.", // NEW
        faq_residence_q2: "Wie beantrage ich eine Aufenthaltserlaubnis zum ersten Mal und wie verlängere ich sie?", // NEW
        faq_residence_a2: "Der Erstantrag wird in der Regel bei der Ausländerbehörde in Aachen gestellt, nachdem Sie Ihre Anmeldung abgeschlossen haben. Sie benötigen Ihren Reisepass, Ihr Visum, Ihren Arbeitsvertrag, einen Nachweis über die Krankenversicherung und weitere Dokumente. Für Verlängerungen beantragen Sie diese rechtzeitig vor Ablauf Ihrer aktuellen Erlaubnis und legen aktualisierte Dokumente vor. Termine sind in der Regel obligatorisch.", // NEW
        faq_residence_q3: "Wie beantrage ich eine 'Niederlassungserlaubnis' (Daueraufenthalt)?", // NEW
        faq_residence_a3: "Eine Niederlassungserlaubnis gewährt Ihnen einen unbefristeten Aufenthalt. Die Voraussetzungen umfassen in der Regel 5 Jahre legalen Aufenthalts (kürzer für Blue Card-Inhaber), ausreichende Deutschkenntnisse (B1/B2), einen gesicherten Lebensunterhalt, ausreichenden Wohnraum und Beiträge zur Rentenversicherung. Beantragen Sie diese bei der Ausländerbehörde.", // NEW
        faq_cat_house_hunting_title: "Haussuche", // NEW
        faq_house_hunting_q1: "Wie finde ich eine langfristige Wohnung in Aachen?", // NEW
        faq_house_hunting_a1: "Beliebte Plattformen für die Wohnungssuche sind ImmobilienScout24, Immowelt und eBay Kleinanzeigen. Netzwerken und lokale Immobilienmakler können ebenfalls hilfreich sein. Seien Sie auf eine hohe Nachfrage und Konkurrenz vorbereitet, insbesondere bei familienfreundlichen Wohnungen.", // NEW
        faq_house_hunting_q2: "Was sollte ich über Mietverträge und Kündigungen wissen?", // NEW
        faq_house_hunting_a2: "Deutsche Mietverträge sind umfassend. Achten Sie auf Klauseln zu Mieterhöhungen, Renovierungspflichten und Kündigungsfristen (in der Regel 3 Monate für Mieter). Lesen Sie den Vertrag immer sorgfältig durch und klären Sie alle Zweifel. Suchen Sie bei Bedarf Rat bei einem Mieterverein.", // NEW
        faq_house_hunting_q3: "Was gehört zum Kauf einer Immobilie (Notar, Bauamt, Finanzamt)?", // NEW
        faq_house_hunting_a3: "Der Immobilienkauf in Deutschland beinhaltet einen Notar, der den Kaufvertrag entwirft und beglaubigt. Das Bauamt ist für Baugenehmigungen und Vorschriften zuständig. Das Finanzamt ist für die Grunderwerbsteuer zuständig. Aufgrund der Komplexität ist rechtliche und finanzielle Beratung dringend empfohlen.", // NEW
        faq_cat_social_circle_title: "Sozialer Kreis", // NEW
        faq_social_circle_q1: "Wie kann ich einen sozialen Kreis aufbauen und andere Inder in Aachen treffen?", // NEW
        faq_social_circle_a1: "Die Teilnahme an AIFA e.V. Veranstaltungen ist ein guter Anfang! Erkunden Sie auch lokale indische Gemeinschaftsgruppen in sozialen Medien (Facebook, WhatsApp), besuchen Sie kulturelle Feste und nehmen Sie an internationalen Gruppen von Universitäten oder Unternehmen teil. Sprachaustausch-Treffen sind ebenfalls gut, um verschiedene Menschen kennenzulernen.", // NEW
        faq_social_circle_q2: "Gibt es indische Vereine oder Kulturgruppen in Aachen?", // NEW
        faq_social_circle_a2: "Ja, abgesehen von AIFA e.V. gibt es möglicherweise andere kleinere indische Kulturgruppen oder Studentenvereinigungen (insbesondere an der RWTH Aachen). Online nach \"Indischer Verein Aachen\" zu suchen oder Aushänge in indischen Lebensmittelgeschäften zu prüfen, kann Hinweise geben.", // NEW
        faq_social_circle_q3: "Wie kann ich Hobbys und Sport in Aachen nachgehen?", // NEW
        faq_social_circle_a3: "Aachen hat zahlreiche Sportvereine für verschiedene Aktivitäten wie Fußball, Tennis, Schwimmen und Wandern. Der Hochschulsport bietet viele Kurse für Studenten und Mitarbeiter an. Für Hobbys schauen Sie in lokalen Gemeindezentren (Volkshochschule), privaten Clubs oder auf Online-Plattformen wie Meetup.com nach interessenbasierten Gruppen.", // NEW
        faq_cat_citizenship_title: "Staatsbürgerschaft", // NEW
        faq_citizenship_q1: "Wie ist der Prozess zur Erlangung der deutschen Staatsbürgerschaft?", // NEW
        faq_citizenship_a1: "Der Standardprozess für die Einbürgerung erfordert 8 Jahre legalen Aufenthalts (in einigen Fällen kürzer, z.B. 7 Jahre mit Integrationskurs, 6 Jahre für Ehepartner deutscher Staatsbürger), ausreichende Deutschkenntnisse (B1/B2), das Bestehen eines Einbürgerungstests und in der Regel den Verzicht auf Ihre vorherige Staatsbürgerschaft (Indien erlaubt Erwachsenen keine doppelte Staatsbürgerschaft).", // NEW
        faq_citizenship_q2: "Wie ist der Prozess zur Abgabe des indischen Reisepasses und zur Beantragung einer OCI-Karte?", // NEW
        faq_citizenship_a2: "Nach Erwerb der deutschen Staatsbürgerschaft müssen Sie Ihren indischen Reisepass bei der indischen Botschaft/Konsulat abgeben. Sie erhalten dann ein \"Surrender Certificate\". Anschließend können Sie eine Overseas Citizen of India (OCI)-Karte beantragen, die lebenslanges visumfreies Reisen nach Indien und andere Vorteile gewährt. Der Antragsprozess erfolgt online über das indische Regierungsportal.", // NEW        
        contact_title: "Kontaktieren Sie uns",
        contact_intro: "Haben Sie Fragen oder möchten Sie Kontakt aufnehmen? Füllen Sie das untenstehende Formular aus und wir werden uns so schnell wie möglich bei Ihnen melden.",
        your_name_label: "Ihr Name",
        your_name_placeholder: "Max Mustermann",
        your_email_label: "Ihre E-Mail",
        your_email_placeholder: "max.mustermann@example.com",
        subject_label: "Betreff",
        subject_placeholder: "Anfrage zur Mitgliedschaft",
        message_label: "Nachricht",
        message_placeholder: "Schreiben Sie hier Ihre Nachricht...",
        send_message_button: "Nachricht senden",
        contact_success_message: "Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden.",
        event_reg_title: "Veranstaltungsanmeldung",
        event_reg_intro: "Bitte füllen Sie das untenstehende Formular aus, um sich für unsere bevorstehenden Veranstaltungen anzumelden.",
        event_reg_select_event_label: "Veranstaltung auswählen",
        event_reg_select_event_placeholder: "Eine Veranstaltung auswählen",
        event_reg_summer_picnic_option: "Sommer-Familienpicknick (20. Juli 2024)",
        event_reg_dandiya_option: "Dandiya-Feierlichkeiten 2025 (2. Oktober 2025)",
        event_reg_num_attendees_label: "Anzahl der Teilnehmer",
        event_reg_dietary_notes_label: "Ernährungseinschränkungen / Besondere Hinweise (Optional)",
        event_reg_dietary_notes_placeholder: "z.B. Vegetarisch, Glutenfrei, Rollstuhlgerechtigkeit benötigt",
        event_reg_submit_button: "Für Veranstaltung anmelden",
        event_reg_success_message: "Vielen Dank für Ihre Veranstaltungsanmeldung! Wir freuen uns auf Sie.",
        event_reg_error_message: "Fehler bei der Veranstaltungsanmeldung. Bitte versuchen Sie es erneut.",
        // ... rest of de translations ...
        data_protection_title: "Datenschutzrichtlinie", // NEW
        data_protection_p1: "Der Verein erhebt, verarbeitet und nutzt personenbezogene Daten seiner Mitglieder zur Erfüllung der in der Vereinssatzung zulässigen Zwecke und Aufgaben.", // NEW
        data_protection_p2: "Der Verein kann Versicherungen abschließen, um Leistungen für sich und/oder seine Mitglieder zu erhalten. Zur Durchführung oder Beendigung der Verträge für Versicherungen übermittelt der Verein personenbezogene Daten seiner Mitglieder im notwendigen Umfang an das zuständige Versicherungsunternehmen.", // NEW
        data_protection_p3: "Im Zusammenhang mit öffentlichen oder privaten Veranstaltungen und anderen in der Satzung genannten Aktivitäten veröffentlicht der Verein Namen und Fotos seiner Mitglieder auf seiner Homepage und sendet Namen und Fotos zur Veröffentlichung an Print- und Telemedien sowie elektronische Medien. Ein Mitglied kann der Veröffentlichung einzelner Fotos von sich jederzeit gegenüber dem Vorstand widersprechen. Nach Eingang des Widerspruchs wird die Veröffentlichung/Übermittlung eingestellt und der Verein wird bestehende Fotos von seiner Homepage entfernen.", // NEW
        data_protection_p4: "Durch ihre Mitgliedschaft und die damit verbundene Anerkennung dieser Satzung erklären sich die Mitglieder mit der Erhebung, Verarbeitung und Nutzung ihrer personenbezogenen Daten in dem oben genannten Umfang und Umfang einverstanden. Der Verein darf Daten nur zu anderen Zwecken als der Erfüllung seiner satzungsgemäßen Aufgaben und Zwecke verwenden, wenn er gesetzlich dazu verpflichtet ist. Daten dürfen nicht verkauft werden.", // NEW
        data_protection_p5: "Jedes Mitglied verpflichtet sich, die ihm im Rahmen der Mitgliederliste zur Verfügung gestellten Daten vertraulich zu behandeln. Gleiches gilt für alle finanziellen Angelegenheiten des Vereins.", // NEW
        data_protection_p6: "Wir verpflichten uns, die personenbezogenen Daten der Mitglieder zu kommerziellen oder nichtkommerziellen Zwecken nicht an Dritte weiterzugeben. Weitere Details zur Datennutzung entnehmen Sie bitte unserer allgemeinen Datenschutzrichtlinie hier (<a href=\"https://www.aifaev.de\" class=\"text-blue-600 hover:underline\" target=\"_blank\">www.aifaev.de</a>)" // NEW        
    },
    hi: {
        site_title_home: "आकेन में भारतीय परिवारों का संघ - होम",
        site_title_about: "आकेन में भारतीय परिवारों का संघ - हमारे बारे में",
        site_title_events: "आकेन में भारतीय परिवारों का संघ - आयोजन",
        site_title_membership: "आकेन में भारतीय परिवारों का संघ - सदस्यता",
        site_title_faq: "आकेन में भारतीय परिवारों का संघ - अक्सर पूछे जाने वाले प्रश्न", // Ensure this is updated",
        site_title_contact: "आकेन में भारतीय परिवारों का संघ - संपर्क करें",
        site_title_data_protection: "आकेन में भारतीय परिवारों का संघ - डेटा संरक्षण नीति", // NEW        
        nav_home: "होम",
        nav_about: "हमारे बारे में",
        nav_events: "आयोजन",
        nav_membership: "सदस्यता",
        nav_faq: "अक्सर पूछे जाने वाले प्रश्न",
        nav_contact: "संपर्क करें",
        nav_event_registration: "आयोजन पंजीकरण", // NEW NAV KEY        
        home_main_title: "आकेन में भारतीय परिवारों का संघ",
        home_tagline: "आकेन में भारतीय परिवारों को जोड़ना, समुदाय को बढ़ावा देना और हमारी समृद्ध संस्कृति का जश्न मनाना।",
        home_explore_events: "आयोजन देखें",
        footer_copyright: "&copy; 2025 आकेन में भारतीय परिवारों का संघ। e.V. पंजीकरण संख्या VR 6590(Amtsgericht Aachen). सर्वाधिकार सुरक्षित।",
        footer_data_protection_policy: "डेटा संरक्षण नीति", // CHANGED FROM footer_privacy
        footer_terms: "सेवा की शर्तें",
        lang_en: "English",
        lang_de: "Deutsch",
        lang_hi: "हिन्दी",
        lang_mr: "मराठी",
        lang_te: "తెలుగు",
        lang_ta: "தமிழ்",
        lang_bn: "বাংলা",
        lang_pa: "ਪੰਜਾਬੀ",
        lang_kn: "ಕನ್ನಡ",
        lang_ml: "മലയാളം",
        lang_or: "ଓଡ଼ିଆ",
        lang_gu: "ગુજરાતી",
        lang_sa: "संस्कृतम्",
        lang_mai: "मैथिली",
        about_title: "हमारे संघ के बारे में",
        about_para1: "आकेन में भारतीय परिवारों का संघ (AIFA e.V.) एक गैर-लाभकारी संगठन है जो जर्मनी के आकेन में रहने वाले भारतीय परिवारों को एक साथ लाने के लिए समर्पित है। हमारा मिशन एक जीवंत और सहायक समुदाय बनाना है जहां सांस्कृतिक विरासत का जश्न मनाया जाता है, परंपराओं को संरक्षित किया जाता है, और नई दोस्ती बनाई जाती है।",
        about_para2: "हम पूरे साल विभिन्न प्रकार के आयोजनों का आयोजन करते हैं, जिनमें सांस्कृतिक उत्सव और सामाजिक समारोह से लेकर शैक्षिक कार्यशालाएं और सामुदायिक सेवा पहल शामिल हैं। हमारा लक्ष्य भारतीय परिवारों के लिए घर से दूर एक घर प्रदान करना है, जिससे उन्हें स्थानीय समुदाय में एकीकृत होने में मदद मिल सके और वे अपनी जड़ों से जुड़े रहें।",
        about_para3: "हमारे समुदाय की गर्मजोशी का अनुभव करने, रोमांचक आयोजनों में भाग लेने और आकेन में एक मजबूत और एकजुट भारतीय प्रवासी बनाने में योगदान करने के लिए हमसे जुड़ें।",
        events_title: "हमारे आयोजन",
        event_diwali_title: "दीपावली उत्सव 2023",
        event_diwali_date: "28 अक्टूबर 2023",
        event_diwali_desc: "सांस्कृतिक प्रदर्शन, स्वादिष्ट भोजन और आतिशबाजी के साथ रोशनी के त्योहार का एक भव्य उत्सव। परिवारों ने एक साथ एक यादगार शाम का आनंद लिया।",
        event_diwali_status: "पिछला आयोजन",
        event_summer_title: "ग्रीष्मकालीन पारिवारिक पिकनिक",
        event_summer_date: "20 जुलाई 2024",
        event_summer_desc: "गेम, भोजन और बाहरी गतिविधियों के साथ वेस्टपार्क में एक मजेदार पारिवारिक पिकनिक के लिए हमसे जुड़ें। अपनी पिकनिक बास्केट लाना न भूलें!",
        event_summer_status: "वर्तमान आयोजन",
        event_dandiya_title: "डांडिया उत्सव 2025",
        event_dandiya_date: "2 अक्टूबर 2025",
        event_dandiya_desc: "घूमने और नाचने के लिए तैयार हो जाइए! पारंपरिक संगीत, रंगीन पोशाक और ऊर्जावान नृत्य चालों के साथ उत्सव की भावना का जश्न मनाते हुए एक जीवंत डांडिया और गरबा रात के लिए हमसे जुड़ें। स्थान और गतिविधियों के बारे में अधिक जानकारी जल्द ही घोषित की जाएगी।",
        event_dandiya_status: "भविष्य का आयोजन",
        events_view_all: "सभी आयोजन देखें",
        events_register_now: "आयोजन के लिए पंजीकरण करें", // NEW BUTTON TEXT        
        membership_title: "सदस्य बनें",
        membership_intro: "आकेन में भारतीय परिवारों के संघ (AIFA e.V.) में शामिल हों और हमारे बढ़ते समुदाय का हिस्सा बनें! आपकी सदस्यता हमें रोमांचक आयोजनों को व्यवस्थित करने और आकेन में भारतीय परिवारों का समर्थन करने में मदद करती है।",
        membership_individual_title: "व्यक्तिगत सदस्यता",
        membership_individual_price: "€30",
        membership_individual_per_year: "/ वर्ष",
        membership_individual_desc: "जुड़ने के इच्छुक एकल व्यक्तियों के लिए बिल्कुल सही।",
        membership_family_title: "पारिवारिक सदस्यता",
        membership_family_price: "€50",
        membership_family_per_year: "/ वर्ष",
        membership_family_desc: "एकल परिवार के सभी सदस्यों को कवर करता है।",
        membership_form_title: "सदस्यता आवेदन पत्र",
        membership_type_label: "सदस्यता प्रकार",
        membership_type_select_option: "एक सदस्यता प्रकार चुनें",
        membership_type_individual_option: "व्यक्तिगत सदस्यता (€30/वर्ष)",
        membership_type_family_option: "पारिवारिक सदस्यता (€50/वर्ष)",
        first_name_label: "पहला नाम",
        first_name_placeholder: "जॉन",
        last_name_label: "अंतिम नाम",
        last_name_placeholder: "डो",
        num_family_members_label: "परिवार के सदस्यों की संख्या (अपने आप सहित)",
        num_family_members_placeholder: "उदाहरण के लिए, 4",
        volunteer_checkbox: "मैं AIFA e.V. आयोजनों के लिए स्वयंसेवक के रूप में उपलब्ध हूँ।",
        apply_membership_button: "सदस्यता के लिए आवेदन करें",
        membership_success_message: "आपके सदस्यता आवेदन के लिए धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे।",
        faq_title: "अक्सर पूछे जाने वाले प्रश्न",
        faq_q1: "आकेन में भारतीय परिवारों का संघ (AIFA e.V.) क्या है?",
        faq_a1: "AIFA e.V. जर्मनी के आकेन में रहने वाले भारतीय परिवारों के बीच एक मजबूत समुदाय को बढ़ावा देने के लिए समर्पित एक गैर-लाभकारी संगठन है। हम सांस्कृतिक आयोजनों, सामाजिक समारोहों का आयोजन करते हैं और नेटवर्किंग और समर्थन के लिए एक मंच प्रदान करते हैं।",
        faq_q2: "मैं सदस्य कैसे बन सकता हूँ?",
        faq_a2: "सदस्यता विवरण और आवेदन पत्र जल्द ही हमारी वेबसाइट पर उपलब्ध होंगे। कृपया वापस देखें या अधिक जानकारी के लिए संपर्क फ़ॉर्म के माध्यम से हमसे संपर्क करें।",
        faq_q3: "क्या आयोजन गैर-सदस्यों के लिए खुले हैं?",
        faq_a3: "सांस्कृतिक आदान-प्रदान और समुदाय निर्माण को बढ़ावा देने के लिए हमारे कई आयोजन सभी के लिए खुले हैं, जिनमें गैर-सदस्य भी शामिल हैं। कुछ विशेष आयोजनों के लिए सदस्यता की आवश्यकता हो सकती है। प्रत्येक आयोजन के लिए विवरण निर्दिष्ट किए जाएंगे।",
        faq_q4: "मैं स्वयंसेवक कैसे बन सकता हूँ या योगदान कैसे कर सकता हूँ?",
        faq_a4: "हम स्वयंसेवकों का स्वागत करते हैं! यदि आप अपना समय या कौशल का योगदान करने में रुचि रखते हैं, तो कृपया संपर्क फ़ॉर्म के माध्यम से हमसे संपर्क करें, और हम अवसरों के साथ आपसे संपर्क करेंगे।",
// ... existing Hindi translations ...
        faq_portal_title: "सूचना पोर्टल: जर्मनी में भारतीय परिवारों के लिए अक्सर पूछे जाने वाले प्रश्न", // NEW
        faq_search_placeholder: "कीवर्ड द्वारा अक्सर पूछे जाने वाले प्रश्न खोजें...", // NEW
        faq_cat_aifa_title: "AIFA e.V.", // Existing
        faq_cat_first_entry_title: "जर्मनी में पहली प्रविष्टि", // NEW
        faq_first_entry_q1: "जर्मनी में नौकरी का प्रस्ताव मिलने के बाद मुझे क्या करना चाहिए?", // NEW
        faq_first_entry_a1: "नौकरी का प्रस्ताव मिलने के बाद, आपको तुरंत वीजा आवेदन प्रक्रिया शुरू कर देनी चाहिए। अपने रोजगार अनुबंध, शैक्षणिक प्रमाण पत्र और धन के प्रमाण सहित सभी आवश्यक दस्तावेज इकट्ठा करें। अपने देश में जर्मन दूतावास या वाणिज्य दूतावास की विशिष्ट आवश्यकताओं की जांच करना उचित है।", // NEW
        faq_first_entry_q2: "परिवार के पुनर्मिलन वीजा के लिए क्या प्रक्रिया है?", // NEW
        faq_first_entry_a2: "परिवार के पुनर्मिलन वीजा से आपके पति या पत्नी और नाबालिग बच्चों को जर्मनी में आपके साथ रहने की अनुमति मिलती है। मुख्य आवश्यकताओं में अक्सर पर्याप्त रहने की जगह, वित्तीय साधन और आपके पति या पत्नी के लिए बुनियादी जर्मन भाषा कौशल का प्रमाण शामिल होता है। आवेदन आमतौर पर आपके गृह देश में जर्मन दूतावास में दायर किया जाता है।", // NEW
        faq_first_entry_q3: "मैं जर्मनी में कितना सोना/आभूषण ला सकता हूँ?", // NEW
        faq_first_entry_a3: "जर्मनी में स्थानांतरित होते समय, गहनों सहित व्यक्तिगत सामान, आमतौर पर सीमा शुल्क से मुक्त होते हैं यदि वे आपके घरेलू सामान का हिस्सा हैं और आपके द्वारा कम से कम छह महीने तक उपयोग किए गए हैं। हालांकि, उच्च मूल्य वाली वस्तुओं के लिए, सीमा शुल्क के साथ समस्याओं से बचने के लिए स्वामित्व और मूल्य का प्रमाण (उदाहरण के लिए, खरीद रसीदें, मूल्यांकन प्रमाण पत्र) ले जाने की सलाह दी जाती है। सीमा शुल्क नियमों के अनुसार हमेशा एक निश्चित मूल्य से ऊपर की वस्तुओं की घोषणा करें।", // NEW
        faq_cat_first_arrival_aachen_title: "आकेन में पहली बार आगमन", // NEW
        faq_first_arrival_aachen_q1: "हवाई अड्डे से आकेन पहुंचने के सबसे अच्छे तरीके क्या हैं?", // NEW
        faq_first_arrival_aachen_a1: "आकेन अच्छी तरह से जुड़ा हुआ है। डसेलडोर्फ हवाई अड्डे (DUS) या कोलोन बॉन हवाई अड्डे (CGN) से, आप सीधे आकेन हाउपत्बानहोफ (मुख्य स्टेशन) के लिए ट्रेन ले सकते हैं। मास्ट्रिच आकेन हवाई अड्डे (MST) से बसें उपलब्ध हैं। टैक्सी और राइड-शेयरिंग सेवाएं भी विकल्प हैं लेकिन आमतौर पर अधिक महंगी होती हैं।", // NEW
        faq_first_arrival_aachen_q2: "मुझे आकेन में अस्थायी आवास कहाँ मिल सकता है?", // NEW
        faq_first_arrival_aachen_a2: "अस्थायी आवास के लिए, सर्विस अपार्टमेंट, एयरबीएनबी, या अल्पकालिक किराए पर विचार करें। Booking.com, Airbnb, और स्थानीय वर्गीकृत (उदाहरण के लिए, WG-Gesucht.de साझा फ्लैटों के लिए, हालांकि परिवारों के लिए कम आम) जैसी वेबसाइटें सहायक हो सकती हैं। कुछ होटल विस्तारित प्रवास विकल्प भी प्रदान करते हैं।", // NEW
        faq_first_arrival_aachen_q3: "'अनमेल्डुंग' क्या है और मैं इसे कैसे करूँ?", // NEW
        faq_first_arrival_aachen_a3: "'अनमेल्डुंग' स्थानीय अधिकारियों (बर्गरम्ट/आइन्वोहनेरमेल्डेम्ट) के साथ आपके स्थायी निवास में जाने के दो सप्ताह के भीतर आपके आवासीय पते का अनिवार्य पंजीकरण है। आपको अपने पासपोर्ट, वीजा और मकान मालिक की पुष्टि (वोह्नुंग्स्गेबरबेस्टाटिगुंग) की आवश्यकता होगी। यह एक टैक्स आईडी प्राप्त करने, बैंक खाता खोलने और अन्य प्रशासनिक कार्यों के लिए महत्वपूर्ण है। पहले से ऑनलाइन अपॉइंटमेंट बुक करें।", // NEW
        faq_first_arrival_aachen_q4: "मैं जर्मनी में बैंक खाता कैसे खोलूँ?", // NEW
        faq_first_arrival_aachen_a4: "आप पारंपरिक बैंकों (उदाहरण के लिए, स्पार्कसे, ड्यूश बैंक) या ऑनलाइन बैंकों (उदाहरण के लिए, N26, कॉमडायरेक्ट) के साथ बैंक खाता खोल सकते हैं। पारंपरिक बैंकों के लिए, आपको आमतौर पर अपने पासपोर्ट, वीजा/निवास परमिट, और पते के प्रमाण (अनमेल्डुंग प्रमाण पत्र) की आवश्यकता होगी। ऑनलाइन बैंक अक्सर एक सरल डिजिटल प्रक्रिया प्रदान करते हैं।", // NEW
        faq_cat_children_title: "बच्चे", // NEW
        faq_children_q1: "मैं अपने बच्चों के लिए आकेन में किता (किंडरगार्टन) या स्कूल कैसे ढूंढूँ?", // NEW
        faq_children_a1: "किता के लिए, आप आमतौर पर शहर के ऑनलाइन पोर्टल (किता-नाविगेटर आकेन) के माध्यम से या सीधे व्यक्तिगत किता के साथ पंजीकरण करते हैं। स्कूलों के लिए, आकेन के शुलम्ट (स्कूल कार्यालय) या व्यक्तिगत स्कूलों से संपर्क करें। उच्च मांग के कारण किता के लिए जल्दी पंजीकरण की अत्यधिक अनुशंसा की जाती है।", // NEW
        faq_children_q2: "क्या आकेन में बच्चों के लिए कोई हॉबी क्लास या स्पोर्ट्स क्लब हैं?", // NEW
        faq_children_a2: "हाँ, आकेन बच्चों के लिए हॉबी क्लासेस और स्पोर्ट्स क्लबों की एक विस्तृत श्रृंखला प्रदान करता है। आप शहर की आधिकारिक वेबसाइट, स्थानीय सामुदायिक केंद्रों (फ़ैमिलिएनज़ेंट्रेन), स्पोर्ट्स फेडरेशन (स्टाड्टस्पोर्टबुंड आकेन) के माध्यम से या सीधे स्कूलों और किता में पूछताछ करके जानकारी प्राप्त कर सकते हैं। विकल्पों में फुटबॉल, तैराकी, संगीत, कला और नृत्य शामिल हैं।", // NEW
        faq_cat_language_learning_title: "भाषा सीखना", // NEW
        faq_language_q1: "आकेन में कौन से भाषा स्कूल उपलब्ध हैं?", // NEW
        faq_language_a1: "आकेन में कई भाषा स्कूल हैं जिनमें वोल्क्सहोचशूल (वीएचएस) आकेन, गोएथे-इंस्टीट्यूट (हालांकि सीधे आकेन में नहीं, पास में), और स्प्राचेनकेडेमी आकेन जैसे निजी भाषा स्कूल शामिल हैं। वे विभिन्न स्तरों और पाठ्यक्रम प्रारूपों की पेशकश करते हैं।", // NEW
        faq_language_q2: "'इंटीग्रेशन कोर्स' क्या है और मैं इसमें कैसे शामिल हो सकता हूँ?", // NEW
        faq_language_a2: "एक इंटीग्रेशन कोर्स (इंटीग्रेशन्सकुर्स) नए प्रवासियों के लिए एक जर्मन भाषा और ओरिएंटेशन कोर्स है, जो आंशिक रूप से सरकार द्वारा वित्त पोषित है। इसमें बी1 जर्मन भाषा स्तर तक शामिल है और इसमें जर्मन संस्कृति, इतिहास और कानूनी प्रणाली पर एक मॉड्यूल शामिल है। आप बुंडेसएम्ट फर माइग्रेशन अंड फ्लुच्त्लिंगे (बीएएमएफ) के माध्यम से या सीधे अधिकृत भाषा स्कूलों के साथ आवेदन कर सकते हैं।", // NEW
        faq_language_q3: "मैं पूर्णकालिक काम करते हुए जर्मन कैसे सीख सकता हूँ?", // NEW
        faq_language_a3: "कई भाषा स्कूल विशेष रूप से कामकाजी पेशेवरों के लिए डिज़ाइन किए गए शाम या सप्ताहांत पाठ्यक्रम प्रदान करते हैं। ऑनलाइन प्लेटफॉर्म (उदाहरण के लिए, डुओलिंगो, बैबेल, ड्यूश वेले), भाषा विनिमय भागीदार, और जर्मन सहयोगियों या दोस्तों के साथ अभ्यास करना भी बहुत प्रभावी हो सकता है। कुछ नियोक्ता इन-हाउस भाषा प्रशिक्षण भी प्रदान करते हैं।", // NEW
        faq_cat_residence_permit_title: "निवास परमिट", // NEW
        faq_residence_q1: "पहचान और वीजा दस्तावेज के रूप में निवास परमिट क्यों महत्वपूर्ण है?", // NEW
        faq_residence_a1: "आपका निवास परमिट (औफेंथल्त्स्टिटेल) जर्मनी में कानूनी निवास का आपका आधिकारिक प्रमाण है। यह जर्मनी के भीतर आपके प्राथमिक पहचान दस्तावेज के रूप में कार्य करता है और आपके अधिकारों (उदाहरण के लिए, काम, अध्ययन) को निर्धारित करता है। यह जर्मनी और अन्य शेंगेन देशों में फिर से प्रवेश के लिए आपके वीजा के रूप में भी कार्य करता है।", // NEW
        faq_residence_q2: "मैं पहली बार निवास परमिट के लिए कैसे आवेदन करूँ और इसे कैसे बढ़ाऊँ?", // NEW
        faq_residence_a2: "प्रारंभिक आवेदन आमतौर पर आकेन में औस्लैंडरबेहॉर्डे (विदेशी कार्यालय) में आपके अनमेल्डुंग पूरा करने के बाद किया जाता है। आपको अपने पासपोर्ट, वीजा, रोजगार अनुबंध, स्वास्थ्य बीमा के प्रमाण और अन्य दस्तावेजों की आवश्यकता होगी। विस्तार के लिए, अपनी वर्तमान परमिट की समय सीमा समाप्त होने से पहले अच्छी तरह से आवेदन करें, अद्यतन दस्तावेज प्रदान करें। अपॉइंटमेंट आमतौर पर अनिवार्य होते हैं।", // NEW
        faq_residence_q3: "मैं 'सेटलमेंट परमिट' (स्थायी निवास) के लिए कैसे आवेदन करूँ?", // NEW
        faq_residence_a3: "एक सेटलमेंट परमिट (नीडरलासुंग्सएरलाउबनिस) आपको स्थायी निवास प्रदान करता है। पात्रता के लिए आमतौर पर 5 साल का कानूनी निवास (ब्लू कार्ड धारकों के लिए कम), पर्याप्त जर्मन भाषा कौशल (बी1), सुरक्षित आजीविका, पर्याप्त रहने की जगह, और पेंशन योजना में योगदान की आवश्यकता होती है। औस्लैंडरबेहॉर्डे में आवेदन करें।", // NEW
        faq_cat_house_hunting_title: "घर की तलाश", // NEW
        faq_house_hunting_q1: "मैं आकेन में दीर्घकालिक अपार्टमेंट कैसे ढूंढूँ?", // NEW
        faq_house_hunting_a1: "अपार्टमेंट की तलाश के लिए लोकप्रिय प्लेटफॉर्म में इमोबिलियनस्काउट24, इमोवेल्ट, और ईबे क्लेनएन्ज़ाइगेन शामिल हैं। नेटवर्किंग और स्थानीय रियल एस्टेट एजेंट (माकलर) भी सहायक हो सकते हैं। विशेष रूप से परिवार के अनुकूल अपार्टमेंट के लिए उच्च मांग और प्रतिस्पर्धा के लिए तैयार रहें।", // NEW
        faq_house_hunting_q2: "मुझे किराये के अनुबंध (वर्ट्राग) और समाप्ति (कुंडिगुंग) के बारे में क्या पता होना चाहिए?", // NEW
        faq_house_hunting_a2: "जर्मन किराये के अनुबंध (मीटवर्ट्राग) व्यापक होते हैं। किराए में वृद्धि, नवीनीकरण कर्तव्यों, और समाप्ति के लिए नोटिस अवधि (आमतौर पर किरायेदारों के लिए 3 महीने) से संबंधित खंडों पर ध्यान दें। हमेशा अनुबंध को ध्यान से पढ़ें और किसी भी संदेह को स्पष्ट करें। यदि आवश्यक हो तो मीटवेरिन (किरायेदारों के संघ) से सलाह लें।", // NEW
        faq_house_hunting_q3: "संपत्ति खरीदने (नोटार, बाऊएम्ट, फ़िनांज़ाम्ट) में क्या शामिल है?", // NEW
        faq_house_hunting_a3: "जर्मनी में संपत्ति खरीदने में एक नोटार (सार्वजनिक नोटरी) शामिल होता है जो खरीद समझौते का मसौदा तैयार करता है और प्रमाणित करता है। बाऊएम्ट (भवन प्राधिकरण) भवन परमिट और नियमों को संभालता है। फ़िनांज़ाम्ट (कर कार्यालय) संपत्ति हस्तांतरण कर (ग्रुंडेरवेर्बस्ट्यूअर) के लिए शामिल होता है। जटिलता के कारण कानूनी और वित्तीय सलाह की अत्यधिक अनुशंसा की जाती है।", // NEW
        faq_cat_social_circle_title: "सामाजिक दायरा", // NEW
        faq_social_circle_q1: "मैं आकेन में एक सामाजिक दायरा कैसे बना सकता हूँ और अन्य भारतीयों से कैसे मिल सकता हूँ?", // NEW
        faq_social_circle_a1: "AIFA e.V. आयोजनों में शामिल होना एक शानदार शुरुआत है! इसके अलावा, सोशल मीडिया (फेसबुक, व्हाट्सएप) पर स्थानीय भारतीय सामुदायिक समूहों का अन्वेषण करें, सांस्कृतिक उत्सवों में भाग लें, और विश्वविद्यालय या कंपनी के अंतरराष्ट्रीय समूहों में भाग लें। भाषा विनिमय मीटअप भी विभिन्न लोगों से मिलने के लिए अच्छे हैं।", // NEW
        faq_social_circle_q2: "क्या आकेन में कोई भारतीय संघ (वेरिन) या सांस्कृतिक समूह हैं?", // NEW
        faq_social_circle_a2: "हाँ, AIFA e.V. के अलावा, अन्य छोटे भारतीय सांस्कृतिक समूह या छात्र संघ (विशेष रूप से RWTH आकेन विश्वविद्यालय के आसपास) हो सकते हैं। \"इंडिशर वेरिन आकेन\" के लिए ऑनलाइन खोज करना या भारतीय किराने की दुकानों पर नोटिस बोर्ड की जांच करना सुराग प्रदान कर सकता है।", // NEW
        faq_social_circle_q3: "मैं आकेन में शौक और खेल कैसे कर सकता हूँ?", // NEW
        faq_social_circle_a3: "आकेन में फुटबॉल, टेनिस, तैराकी और लंबी पैदल यात्रा जैसी विभिन्न गतिविधियों के लिए कई स्पोर्ट्स क्लब (स्पोर्ट्सवेरिन) हैं। होचशुलस्पोर्ट (विश्वविद्यालय खेल) छात्रों और कर्मचारियों के लिए कई पाठ्यक्रम प्रदान करता है। शौक के लिए, स्थानीय सामुदायिक केंद्रों (वोल्क्सहोचशूल), निजी क्लबों, या मीटअप.कॉम जैसे ऑनलाइन प्लेटफॉर्म पर रुचि-आधारित समूहों की जांच करें।", // NEW
        faq_cat_citizenship_title: "नागरिकता", // NEW
        faq_citizenship_q1: "जर्मन नागरिकता प्राप्त करने की प्रक्रिया क्या है?", // NEW
        faq_citizenship_a1: "प्राकृतिककरण (आइन्बुर्गेरुंग) के लिए मानक प्रक्रिया में 8 साल का कानूनी निवास (कुछ मामलों में कम, उदाहरण के लिए, एकीकरण पाठ्यक्रम के साथ 7 साल, जर्मन नागरिकों के जीवनसाथी के लिए 6 साल), पर्याप्त जर्मन भाषा कौशल (बी1/बी2), एक प्राकृतिककरण परीक्षा उत्तीर्ण करना, और आमतौर पर अपनी पिछली नागरिकता का त्याग करना शामिल है (भारत वयस्कों के लिए दोहरी नागरिकता की अनुमति नहीं देता है)।", // NEW
        faq_citizenship_q2: "भारतीय पासपोर्ट सरेंडर करने और ओसीआई कार्ड प्राप्त करने की प्रक्रिया क्या है?", // NEW
        faq_citizenship_a2: "जर्मन नागरिकता प्राप्त करने पर, आपको अपना भारतीय पासपोर्ट भारतीय दूतावास/वाणिज्य दूतावास को सरेंडर करना होगा। आपको तब एक \"सरेंडर सर्टिफिकेट\" प्राप्त होगा। बाद में, आप एक ओवरसीज सिटीजन ऑफ इंडिया (ओसीआई) कार्ड के लिए आवेदन कर सकते हैं, जो भारत में आजीवन वीजा-मुक्त यात्रा और अन्य लाभ प्रदान करता है। आवेदन प्रक्रिया भारतीय सरकार के पोर्टल के माध्यम से ऑनलाइन है।", // NEW        
        contact_title: "हमसे संपर्क करें",
        contact_intro: "प्रश्न हैं या संपर्क करना चाहते हैं? नीचे दिया गया फ़ॉर्म भरें और हम जल्द से जल्द आपसे संपर्क करेंगे।",
        your_name_label: "आपका नाम",
        your_name_placeholder: "जॉन डो",
        your_email_label: "आपकी ईमेल",
        your_email_placeholder: "john.doe@example.com",
        subject_label: "विषय",
        subject_placeholder: "सदस्यता के बारे में पूछताछ",
        message_label: "संदेश",
        message_placeholder: "यहां अपना संदेश लिखें...",
        send_message_button: "संदेश भेजें",
        contact_success_message: "आपके संदेश के लिए धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे।",
        event_reg_title: "आयोजन पंजीकरण",
        event_reg_intro: "हमारे आगामी आयोजनों के लिए पंजीकरण करने के लिए कृपया नीचे दिया गया फ़ॉर्म भरें।",
        event_reg_select_event_label: "आयोजन चुनें",
        event_reg_select_event_placeholder: "एक आयोजन चुनें",
        event_reg_summer_picnic_option: "ग्रीष्मकालीन पारिवारिक पिकनिक (20 जुलाई, 2024)",
        event_reg_dandiya_option: "डांडिया उत्सव 2025 (2 अक्टूबर, 2025)",
        event_reg_num_attendees_label: "उपस्थित लोगों की संख्या",
        event_reg_dietary_notes_label: "आहार प्रतिबंध / विशेष नोट्स (वैकल्पिक)",
        event_reg_dietary_notes_placeholder: "उदाहरण के लिए, शाकाहारी, ग्लूटेन-मुक्त, व्हीलचेयर पहुंच की आवश्यकता है",
        event_reg_submit_button: "आयोजन के लिए पंजीकरण करें",
        event_reg_success_message: "आयोजन के लिए पंजीकरण करने के लिए धन्यवाद! हम आपको देखने के लिए उत्सुक हैं।",
        event_reg_error_message: "आयोजन के लिए पंजीकरण करते समय त्रुटि हुई। कृपया पुनः प्रयास करें।",
        // ... rest of hi translations ...
        data_protection_title: "डेटा संरक्षण नीति", // NEW
        data_protection_p1: "संघ अपने सदस्यों के व्यक्तिगत डेटा को संघ के संविधान के तहत अनुमत उद्देश्यों और कार्यों को पूरा करने के लिए एकत्र, संसाधित और उपयोग करता है।", // NEW
        data_protection_p2: "संघ अपने और/या अपने सदस्यों के लिए लाभ प्राप्त करने के लिए बीमा पॉलिसियों की व्यवस्था कर सकता है। बीमा पॉलिसियों के लिए अनुबंधों को लागू करने या समाप्त करने के लिए, संघ अपने सदस्यों के व्यक्तिगत डेटा को आवश्यक सीमा तक जिम्मेदार बीमा कंपनी को प्रसारित करता है।", // NEW
        data_protection_p3: "संविधान में उल्लिखित सार्वजनिक या निजी आयोजनों और अन्य गतिविधियों के संबंध में, संघ अपनी वेबसाइट पर अपने सदस्यों के नाम और तस्वीरें प्रकाशित करता है और प्रकाशन के लिए प्रिंट और टेलीमीडिया के साथ-साथ इलेक्ट्रॉनिक मीडिया को नाम और तस्वीरें भेजता है। एक सदस्य किसी भी समय बोर्ड को अपनी व्यक्तिगत तस्वीरों के प्रकाशन पर आपत्ति कर सकता है। आपत्ति प्राप्त होने के बाद, प्रकाशन/प्रसारण बंद कर दिया जाएगा और संघ अपनी वेबसाइट से मौजूदा तस्वीरों को हटा देगा।", // NEW
        data_protection_p4: "अपनी सदस्यता और इस संविधान की संबंधित मान्यता के माध्यम से, सदस्य अपनी व्यक्तिगत डेटा के संग्रह, प्रसंस्करण और उपयोग के लिए ऊपर बताई गई सीमा और दायरे तक सहमत हैं। संघ को अपने वैधानिक कार्यों और उद्देश्यों को पूरा करने के अलावा अन्य उद्देश्यों के लिए डेटा का उपयोग करने की अनुमति केवल तभी है जब वह कानूनी रूप से ऐसा करने के लिए बाध्य हो। डेटा बेचा नहीं जा सकता है।", // NEW
        data_protection_p5: "प्रत्येक सदस्य सदस्यता सूची के हिस्से के रूप में उन्हें उपलब्ध कराए गए डेटा को गोपनीय रखने की जिम्मेदारी लेता है। यही बात संघ के सभी वित्तीय मामलों पर भी लागू होती है।", // NEW
        data_protection_p6: "हम सदस्यों के व्यक्तिगत डेटा को किसी भी वाणिज्यिक या गैर-वाणिज्यिक उद्देश्यों के लिए तीसरे पक्ष को प्रकट न करने के लिए प्रतिबद्ध हैं। डेटा उपयोग पर अधिक जानकारी के लिए, कृपया हमारी सामान्य डेटा संरक्षण नीति यहां देखें (<a href=\"https://www.aifaev.de\" class=\"text-blue-600 hover:underline\" target=\"_blank\">www.aifaev.de</a>)" // NEW        
    },
    mr: { // Marathi
        site_title_home: "आकेनमध्ये भारतीय कुटुंबांचे असोसिएशन - मुख्यपृष्ठ",
        site_title_about: "आकेनमध्ये भारतीय कुटुंबांचे असोसिएशन - आमच्याबद्दल",
        site_title_events: "आकेनमध्ये भारतीय कुटुंबांचे असोसिएशन - कार्यक्रम",
        site_title_membership: "आकेनमध्ये भारतीय कुटुंबांचे असोसिएशन - सदस्यत्व",
        site_title_faq: "आकेन मधील भारतीय कुटुंबांची संघटना - वारंवार विचारले जाणारे प्रश्न",
        site_title_contact: "आकेनमध्ये भारतीय कुटुंबांचे असोसिएशन - संपर्क साधा",
        site_title_data_protection: "आकेन मधील भारतीय कुटुंबांची संघटना - डेटा संरक्षण धोरण", // NEW        
        nav_home: "मुख्यपृष्ठ",
        nav_about: "आमच्याबद्दल",
        nav_events: "कार्यक्रम",
        nav_membership: "सदस्यत्व",
        nav_faq: "वारंवार विचारले जाणारे प्रश्न",
        nav_contact: "संपर्क साधा",
        nav_event_registration: "कार्यक्रम नोंदणी", // NEW NAV KEY        
        home_main_title: "आकेनमध्ये भारतीय कुटुंबांचे असोसिएशन",
        home_tagline: "आकेनमध्ये भारतीय कुटुंबांना जोडणे, समुदायाला प्रोत्साहन देणे आणि आपली समृद्ध संस्कृती साजरी करणे.",
        home_explore_events: "कार्यक्रम एक्सप्लोर करा",
        footer_copyright: "&copy; 2025 आकेन मधील भारतीय कुटुंबांची संघटना. e.V. नोंदणी क्रमांक VR 6590(Amtsgericht Aachen). सर्व हक्क राखीव.",
        footer_data_protection_policy: "डेटा संरक्षण धोरण", // CHANGED FROM footer_privacyण",
        footer_terms: "सेवा अटी",
        lang_en: "English",
        lang_de: "Deutsch",
        lang_hi: "हिन्दी",
        lang_mr: "मराठी",
        lang_te: "తెలుగు",
        lang_ta: "தமிழ்",
        lang_bn: "বাংলা",
        lang_pa: "ਪੰਜਾਬੀ",
        lang_kn: "ಕನ್ನಡ",
        lang_ml: "മലയാളം",
        lang_or: "ଓଡ଼ିଆ",
        lang_gu: "ગુજરાતી",
        lang_sa: "संस्कृतम्",
        lang_mai: "मैथिली",
        about_title: "आमच्या असोसिएशनबद्दल",
        about_para1: "आकेनमध्ये भारतीय कुटुंबांचे असोसिएशन (AIFA e.V.) ही एक ना-नफा संस्था आहे जी जर्मनीतील आकेनमध्ये राहणाऱ्या भारतीय कुटुंबांना एकत्र आणण्यासाठी समर्पित आहे. सांस्कृतिक वारसा साजरा करणे, परंपरा जपणे आणि नवीन मैत्री निर्माण करणे हा आमचा उद्देश आहे.",
        about_para2: "आम्ही वर्षभरात विविध कार्यक्रमांचे आयोजन करतो, ज्यात सांस्कृतिक उत्सव आणि सामाजिक मेळावे, तसेच शैक्षणिक कार्यशाळा आणि सामुदायिक सेवा उपक्रम यांचा समावेश आहे. भारतीय कुटुंबांना घरापासून दूर एक घर उपलब्ध करून देणे, त्यांना स्थानिक समाजात एकरूप होण्यास मदत करणे आणि त्यांच्या मुळांशी जोडलेले ठेवणे हे आमचे उद्दिष्ट आहे.",
        about_para3: "आमच्या समुदायाच्या उबदारपणाचा अनुभव घेण्यासाठी, रोमांचक कार्यक्रमांमध्ये सहभागी होण्यासाठी आणि आकेनमध्ये एक मजबूत आणि एकसंध भारतीय डायस्पोरा तयार करण्यासाठी आमच्यात सामील व्हा.",
        events_title: "आमचे कार्यक्रम",
        event_diwali_title: "दिवाळी उत्सव 2023",
        event_diwali_date: "28 ऑक्टोबर 2023",
        event_diwali_desc: "सांस्कृतिक कार्यक्रम, स्वादिष्ट भोजन आणि फटाक्यांसह दिव्यांच्या सणाचा भव्य उत्सव. कुटुंबांनी एकत्र अविस्मरणीय संध्याकाळचा आनंद घेतला.",
        event_diwali_status: "मागील कार्यक्रम",
        event_summer_title: "उन्हाळी कौटुंबिक पिकनिक",
        event_summer_date: "20 जुलै 2024",
        event_summer_desc: "खेळ, भोजन आणि बाहेरील क्रियाकलापांसह वेस्टपार्कमध्ये मजेदार कौटुंबिक पिकनिकसाठी आमच्यात सामील व्हा. तुमची पिकनिक बास्केट आणायला विसरू नका!",
        event_summer_status: "सध्याचा कार्यक्रम",
        event_dandiya_title: "दांडिया उत्सव 2025",
        event_dandiya_date: "2 ऑक्टोबर 2025",
        event_dandiya_desc: "गरबा आणि दांडियासाठी तयार व्हा! पारंपरिक संगीत, रंगीबेरंगी पोशाख आणि उत्साही नृत्य प्रकारांसह उत्सवाचा आनंद साजरा करण्यासाठी आमच्यात सामील व्हा. स्थळ आणि क्रियाकलापांबद्दल अधिक माहिती लवकरच जाहीर केली जाईल.",
        event_dandiya_status: "भविष्यातील कार्यक्रम",
        events_view_all: "सर्व कार्यक्रम पहा",
        events_register_now: "कार्यक्रमासाठी नोंदणी करा", // NEW BUTTON TEXT        
        membership_title: "सदस्य व्हा",
        membership_intro: "आकेनमध्ये भारतीय कुटुंबांचे असोसिएशन (AIFA e.V.) मध्ये सामील व्हा आणि आमच्या वाढत्या समुदायाचा भाग बना! तुमची सदस्यत्व आम्हाला रोमांचक कार्यक्रम आयोजित करण्यास आणि आकेनमधील भारतीय कुटुंबांना मदत करण्यास मदत करते.",
        membership_individual_title: "वैयक्तिक सदस्यत्व",
        membership_individual_price: "€30",
        membership_individual_per_year: "/ वर्ष",
        membership_individual_desc: "जोडणी करू इच्छिणाऱ्या एकल व्यक्तींसाठी योग्य.",
        membership_family_title: "कौटुंबिक सदस्यत्व",
        membership_family_price: "€50",
        membership_family_per_year: "/ वर्ष",
        membership_family_desc: "एकाच कुटुंबातील सर्व सदस्यांना कव्हर करते.",
        membership_form_title: "सदस्यत्व अर्ज फॉर्म",
        membership_type_label: "सदस्यत्व प्रकार",
        membership_type_select_option: "सदस्यत्व प्रकार निवडा",
        membership_type_individual_option: "वैयक्तिक सदस्यत्व (€30/वर्ष)",
        membership_type_family_option: "कौटुंबिक सदस्यत्व (€50/वर्ष)",
        first_name_label: "पहिले नाव",
        first_name_placeholder: "जॉन",
        last_name_label: "अंतिम नाव",
        last_name_placeholder: "डो",
        num_family_members_label: "कुटुंबातील सदस्यांची संख्या (आपल्यासह)",
        num_family_members_placeholder: "उदा. 4",
        volunteer_checkbox: "मी AIFA e.V. कार्यक्रमांसाठी स्वयंसेवक म्हणून उपलब्ध आहे.",
        apply_membership_button: "सदस्यत्वासाठी अर्ज करा",
        membership_success_message: "तुमच्या सदस्यत्व अर्जासाठी धन्यवाद! आम्ही लवकरच तुमच्याशी संपर्क साधू.",
        faq_title: "वारंवार विचारले जाणारे प्रश्न",
        faq_q1: "आकेनमध्ये भारतीय कुटुंबांचे असोसिएशन (AIFA e.V.) काय आहे?",
        faq_a1: "AIFA e.V. ही एक ना-नफा संस्था आहे जी जर्मनीतील आकेनमध्ये राहणाऱ्या भारतीय कुटुंबांना एकत्र आणण्यासाठी समर्पित आहे. आम्ही सांस्कृतिक कार्यक्रम, सामाजिक मेळावे आयोजित करतो आणि नेटवर्किंग आणि समर्थनासाठी एक व्यासपीठ प्रदान करतो.",
        faq_q2: "मी सदस्य कसा होऊ शकतो?",
        faq_a2: "सदस्यत्वाचे तपशील आणि अर्ज लवकरच आमच्या वेबसाइटवर उपलब्ध होतील. कृपया पुन्हा तपासा किंवा अधिक माहितीसाठी संपर्क फॉर्मद्वारे आमच्याशी संपर्क साधा.",
        faq_q3: "कार्यक्रम गैर-सदस्यांसाठी खुले आहेत का?",
        faq_a3: "आमचे अनेक कार्यक्रम सर्वांसाठी खुले आहेत, ज्यात गैर-सदस्य देखील समाविष्ट आहेत, जेणेकरून सांस्कृतिक देवाणघेवाण आणि समुदाय निर्मितीला प्रोत्साहन मिळेल. काही विशेष कार्यक्रमांसाठी सदस्यत्व आवश्यक असू शकते. प्रत्येक कार्यक्रमासाठी तपशील निर्दिष्ट केले जातील.",
        faq_q4: "मी स्वयंसेवक म्हणून कसे योगदान देऊ शकतो?",
        faq_a4: "आम्ही स्वयंसेवकांचे स्वागत करतो! जर तुम्हाला तुमचा वेळ किंवा कौशल्ये योगदान देण्यास स्वारस्य असेल, तर कृपया संपर्क फॉर्मद्वारे आमच्याशी संपर्क साधा आणि आम्ही तुम्हाला संधींबद्दल कळवू.",
        faq_portal_title: "माहिती पोर्टल: जर्मनीतील भारतीय कुटुंबांसाठी वारंवार विचारले जाणारे प्रश्न",
        faq_search_placeholder: "कीवर्डनुसार प्रश्न शोधा...",
        faq_cat_aifa_title: "AIFA e.V.",
        faq_first_entry_q1: "जर्मनीमध्ये नोकरीची ऑफर मिळाल्यानंतर मी काय करावे?",
        faq_first_entry_a1: "नोकरीची ऑफर मिळाल्यानंतर, तुम्ही लगेच व्हिसा अर्ज प्रक्रिया सुरू करावी. तुमचा रोजगार करार, शैक्षणिक प्रमाणपत्रे आणि निधीचा पुरावा यासह सर्व आवश्यक कागदपत्रे गोळा करा. तुमच्या देशातील जर्मन दूतावास किंवा वाणिज्य दूतावासाच्या विशिष्ट आवश्यकता तपासण्याचा सल्ला दिला जातो.",
        faq_first_entry_q2: "कुटुंब पुनर्मिलन व्हिसासाठी प्रक्रिया काय आहे?",
        faq_first_entry_a2: "कुटुंब पुनर्मिलन व्हिसा तुमच्या जोडीदाराला आणि अल्पवयीन मुलांना जर्मनीमध्ये तुमच्यासोबत सामील होण्याची परवानगी देतो. मुख्य आवश्यकतांमध्ये अनेकदा पुरेशी राहण्याची जागा, आर्थिक साधने आणि तुमच्या जोडीदारासाठी मूलभूत जर्मन भाषा कौशल्याचा पुरावा समाविष्ट असतो. अर्ज सामान्यतः तुमच्या मूळ देशातील जर्मन दूतावासात दाखल केला जातो.",
        faq_first_entry_q3: "मी जर्मनीमध्ये किती सोने/दागिने आणू शकेन?",
        faq_first_entry_a3: "जर्मनीमध्ये स्थलांतर करताना, दागिन्यांसह वैयक्तिक वस्तू, सामान्यतः कस्टम शुल्कातून मुक्त असतात जर त्या तुमच्या घरगुती वस्तूंचा भाग असतील आणि तुम्ही त्यांचा किमान सहा महिने वापर केला असेल. तथापि, उच्च-मूल्याच्या वस्तूंसाठी, कस्टम्समध्ये समस्या टाळण्यासाठी मालकी आणि मूल्याचा पुरावा (उदा. खरेदी पावत्या, मूल्यांकन प्रमाणपत्रे) सोबत ठेवण्याचा सल्ला दिला जातो. कस्टम नियमांनुसार विशिष्ट मूल्यापेक्षा जास्त असलेल्या वस्तू नेहमी घोषित करा.",
        faq_cat_first_arrival_aachen_title: "आकेनमध्ये पहिले आगमन",
        faq_first_arrival_aachen_q1: "विमानतळावरून आकेनला पोहोचण्याचे सर्वोत्तम मार्ग कोणते आहेत?",
        faq_first_arrival_aachen_a1: "आकेन चांगले जोडलेले आहे. डसेलडोर्फ विमानतळ (DUS) किंवा कोलोन बॉन विमानतळ (CGN) वरून, तुम्ही थेट आकेन हाउपत्बॅनहोफ (मुख्य स्टेशन) पर्यंत ट्रेन घेऊ शकता. मास्ट्रिच आकेन विमानतळ (MST) वरून बस उपलब्ध आहेत. टॅक्सी आणि राइड-शेअरिंग सेवा देखील पर्याय आहेत परंतु सामान्यतः अधिक महाग आहेत.",
        faq_first_arrival_aachen_q2: "मला आकेनमध्ये तात्पुरते निवासस्थान कुठे मिळेल?",
        faq_first_arrival_aachen_a2: "तात्पुरत्या निवासस्थानासाठी, सर्व्हिस अपार्टमेंट्स, एअरबीएनबी, किंवा अल्पकालीन भाड्याने घेतलेल्या घरांचा विचार करा. Booking.com, Airbnb, आणि स्थानिक वर्गीकृत (उदा. WG-Gesucht.de शेअर केलेल्या फ्लॅट्ससाठी, जरी कुटुंबांसाठी कमी सामान्य) सारख्या वेबसाइट्स उपयुक्त ठरू शकतात. काही हॉटेल्स देखील विस्तारित मुक्कामाचे पर्याय देतात.",
        faq_first_arrival_aachen_q3: "'अनमेल्डुंग' काय आहे आणि मी ते कसे करू?",
        faq_first_arrival_aachen_a3: "'अनमेल्डुंग' म्हणजे तुमच्या कायमस्वरूपी निवासस्थानी गेल्यानंतर दोन आठवड्यांच्या आत स्थानिक अधिकाऱ्यांकडे (बर्गरम्ट/आइन्व्होनरमेल्डेम्ट) तुमच्या निवासी पत्त्याची अनिवार्य नोंदणी. तुम्हाला तुमचा पासपोर्ट, व्हिसा आणि घरमालकाची पुष्टी (वोह्नुंग्सगेबरबेस्टाटिगुंग) लागेल. टॅक्स आयडी मिळवण्यासाठी, बँक खाते उघडण्यासाठी आणि इतर प्रशासकीय कामांसाठी हे महत्त्वाचे आहे. आगाऊ ऑनलाइन अपॉइंटमेंट बुक करा.",
        faq_first_arrival_aachen_q4: "मी जर्मनीमध्ये बँक खाते कसे उघडू?",
        faq_first_arrival_aachen_a4: "तुम्ही पारंपरिक बँकांमध्ये (उदा. स्पार्कसे, ड्यूश बँक) किंवा ऑनलाइन बँकांमध्ये (उदा. N26, कॉमडायरेक्ट) बँक खाते उघडू शकता. पारंपरिक बँकांसाठी, तुम्हाला सामान्यतः तुमचा पासपोर्ट, व्हिसा/निवास परवाना आणि पत्त्याचा पुरावा (अनमेल्डुंग प्रमाणपत्र) लागेल. ऑनलाइन बँका अनेकदा सोपी डिजिटल प्रक्रिया देतात.",
        faq_cat_children_title: "मुले",
        faq_children_q1: "आकेनमध्ये माझ्या मुलांसाठी किटा (बालवाडी) किंवा शाळा कशी शोधू?",
        faq_children_a1: "किटासाठी, तुम्ही सामान्यतः शहराच्या ऑनलाइन पोर्टल (किटा-नेव्हिगेटर आकेन) द्वारे किंवा थेट वैयक्तिक किटांशी नोंदणी करता. शाळांसाठी, आकेनच्या शुलामत (शाळा कार्यालय) किंवा वैयक्तिक शाळांशी संपर्क साधा. जास्त मागणीमुळे किटासाठी लवकर नोंदणी करण्याची शिफारस केली जाते.",
        faq_children_q2: "आकेनमध्ये मुलांसाठी कोणतेही छंद वर्ग किंवा क्रीडा क्लब आहेत का?",
        faq_children_a2: "होय, आकेन मुलांसाठी विविध प्रकारचे छंद वर्ग आणि क्रीडा क्लब प्रदान करते. तुम्ही शहराच्या अधिकृत वेबसाइट, स्थानिक समुदाय केंद्रे (फॅमिलीएनझेंट्रेन), क्रीडा महासंघ (स्टाड्टस्पोर्ट्सबुंड आकेन) द्वारे किंवा थेट शाळा आणि किटांमध्ये चौकशी करून माहिती मिळवू शकता. पर्यायांमध्ये फुटबॉल, जलतरण, संगीत, कला आणि नृत्य यांचा समावेश आहे.",
        faq_cat_language_learning_title: "भाषा शिक्षण",
        faq_language_q1: "आकेनमध्ये कोणत्या भाषा शाळा उपलब्ध आहेत?",
        faq_language_a1: "आकेनमध्ये अनेक भाषा शाळा आहेत ज्यात फोल्कशोचशूले (VHS) आकेन, गोएथे-इन्स्टिट्यूट (जरी थेट आकेनमध्ये नसले तरी, जवळ आहे), आणि स्प्रचेनाकाडेमी आकेन सारख्या खाजगी भाषा शाळांचा समावेश आहे. त्या विविध स्तर आणि अभ्यासक्रम स्वरूप देतात.",
        faq_language_q2: "'इंटिग्रेशन कोर्स' काय आहे आणि मी त्यात कसे सामील होऊ शकेन?",
        faq_language_a2: "एक इंटिग्रेशन कोर्स (इंटिग्रेशन्सकुर्स) नवीन स्थलांतरितांसाठी एक जर्मन भाषा आणि ओरिएंटेशन कोर्स आहे, जो अंशतः सरकारद्वारे निधी दिला जातो. यात B1 जर्मन भाषा स्तरापर्यंतचा समावेश आहे आणि यात जर्मन संस्कृती, इतिहास आणि कायदेशीर प्रणालीवर एक मॉड्यूल समाविष्ट आहे. तुम्ही बुंडेसअम्ट फर मायग्रेशन उंड फ्लुच्त्लिंगे (BAMF) द्वारे किंवा थेट अधिकृत भाषा शाळांशी संपर्क साधून अर्ज करू शकता.",
        faq_language_q3: "पूर्णवेळ काम करताना मी जर्मन कसे शिकू शकेन?",
        faq_language_a3: "अनेक भाषा शाळा विशेषतः कार्यरत व्यावसायिकांसाठी डिझाइन केलेले संध्याकाळचे किंवा शनिवार व रविवारचे अभ्यासक्रम देतात. ऑनलाइन प्लॅटफॉर्म (उदा. ड्युओलिंगो, बॅबेल, ड्यूश वेले), भाषा विनिमय भागीदार आणि जर्मन सहकाऱ्यांशी किंवा मित्रांशी सराव करणे देखील खूप प्रभावी असू शकते. काही नियोक्ता इन-हाउस भाषा प्रशिक्षण देखील देतात.",
        faq_cat_residence_permit_title: "निवास परवाना",
        faq_residence_q1: "ओळख आणि व्हिसा दस्तऐवज म्हणून निवास परवाना महत्त्वाचा का आहे?",
        faq_residence_a1: "तुमचा निवास परवाना (औफेंथल्ट्सटिटेल) जर्मनीमध्ये कायदेशीर निवासाचा तुमचा अधिकृत पुरावा आहे. तो जर्मनीमध्ये तुमचा प्राथमिक ओळख दस्तऐवज म्हणून काम करतो आणि तुमचे अधिकार (उदा. काम, अभ्यास) ठरवतो. तो जर्मनी आणि इतर शेंजेन देशांमध्ये पुन्हा प्रवेशासाठी तुमचा व्हिसा म्हणूनही काम करतो.",
        faq_residence_q2: "मी पहिल्यांदा निवास परवान्यासाठी कसा अर्ज करू आणि तो कसा वाढवू?",
        faq_residence_a2: "पहिला अर्ज सहसा आकेनमधील ऑस्लँडरबेहॉर्डे (परदेशी कार्यालय) मध्ये तुम्ही तुमची अनमेल्डुंग पूर्ण केल्यानंतर केला जातो. तुम्हाला तुमचा पासपोर्ट, व्हिसा, रोजगार करार, आरोग्य विम्याचा पुरावा आणि इतर कागदपत्रे लागतील. मुदतवाढीसाठी, तुमच्या सध्याच्या परवान्याची मुदत संपण्यापूर्वीच अर्ज करा आणि अद्ययावत कागदपत्रे सादर करा. भेटी सहसा अनिवार्य असतात.",
        faq_residence_q3: "मी 'सेटलमेंट परवान्यासाठी' (कायमस्वरूपी निवास) कसा अर्ज करू?",
        faq_residence_a3: "सेटलमेंट परवाना (नीडरलासुंग्सएर्लॉबनिस) तुम्हाला कायमस्वरूपी निवास देतो. पात्रतेसाठी सामान्यतः 5 वर्षांचा कायदेशीर निवास (ब्लू कार्ड धारकांसाठी कमी), पुरेसे जर्मन भाषा कौशल्य (B1), सुरक्षित उपजीविका, पुरेसे निवासस्थान आणि पेन्शन योजनेत योगदान आवश्यक आहे. ऑस्लँडरबेहॉर्डेमध्ये अर्ज करा.",
        faq_cat_house_hunting_title: "घर शोधणे",
        faq_house_hunting_q1: "मी आकेनमध्ये दीर्घकालीन अपार्टमेंट कसे शोधू?",
        faq_house_hunting_a1: "अपार्टमेंट शोधण्यासाठी लोकप्रिय प्लॅटफॉर्ममध्ये ImmobilienScout24, Immowelt, आणि eBay Kleinanzeigen यांचा समावेश आहे. नेटवर्किंग आणि स्थानिक रिअल इस्टेट एजंट (माकलर) देखील उपयुक्त ठरू शकतात. विशेषतः कुटुंब-अनुकूल अपार्टमेंटसाठी जास्त मागणी आणि स्पर्धेसाठी तयार रहा.",
        faq_house_hunting_q2: "मला भाडे करार (वर्ट्राग) आणि समाप्ती (क्युंडिगुंग) बद्दल काय माहित असावे?",
        faq_house_hunting_a2: "जर्मन भाडे करार (मीटवर्ट्राग) सर्वसमावेशक असतात. भाडेवाढ, नूतनीकरणाची कर्तव्ये आणि समाप्तीसाठी सूचना कालावधी (सामान्यतः भाडेकरूंसाठी 3 महिने) यासंबंधीच्या कलमांकडे लक्ष द्या. नेहमी करार काळजीपूर्वक वाचा आणि कोणतीही शंका स्पष्ट करा. गरज भासल्यास मीटेरवेरिन (भाडेकरू संघटना) कडून सल्ला घ्या.",
        faq_house_hunting_q3: "मालमत्ता खरेदीमध्ये (नोतार, बाऊअम्ट, फिनान्झाम्ट) काय समाविष्ट आहे?",
        faq_house_hunting_a3: "जर्मनीमध्ये मालमत्ता खरेदीमध्ये एक नोतार (सार्वजनिक नोटरी) समाविष्ट असतो जो खरेदी कराराचा मसुदा तयार करतो आणि प्रमाणित करतो. बाऊअम्ट (बांधकाम प्राधिकरण) बांधकाम परवाने आणि नियम हाताळतो. फिनान्झाम्ट (कर कार्यालय) मालमत्ता हस्तांतरण करासाठी (ग्रुंडरवेर्बस्ट्युअर) समाविष्ट आहे. जटिलतेमुळे कायदेशीर आणि आर्थिक सल्ला अत्यंत शिफारसीय आहे.",
        faq_cat_social_circle_title: "सामाजिक वर्तुळ",
        faq_social_circle_q1: "मी आकेनमध्ये सामाजिक वर्तुळ कसे तयार करू आणि इतर भारतीयांना कसे भेटू?",
        faq_social_circle_a1: "AIFA e.V. कार्यक्रमांमध्ये सामील होणे एक उत्तम सुरुवात आहे! तसेच, सोशल मीडियावर (फेसबुक, व्हॉट्सॲप) स्थानिक भारतीय समुदाय गट शोधा, सांस्कृतिक उत्सवांना उपस्थित रहा आणि विद्यापीठाच्या किंवा कंपनीच्या आंतरराष्ट्रीय गटांमध्ये सहभागी व्हा. भाषा विनिमय भेटी देखील विविध लोकांना भेटण्यासाठी चांगल्या आहेत.",
        faq_social_circle_q2: "आकेनमध्ये कोणतीही भारतीय संघटना (वेरिन) किंवा सांस्कृतिक गट आहेत का?",
        faq_social_circle_a2: "होय, AIFA e.V. व्यतिरिक्त, इतर लहान भारतीय सांस्कृतिक गट किंवा विद्यार्थी संघटना (विशेषतः RWTH आकेन विद्यापीठाभोवती) असू शकतात. 'इंडिशर वेरिन आकेन' ऑनलाइन शोधणे किंवा भारतीय किराणा दुकानांमधील सूचना फलक तपासणे उपयुक्त ठरू शकते.",
        faq_social_circle_q3: "मी आकेनमध्ये छंद आणि खेळ कसे करू शकेन?",
        faq_social_circle_a3: "आकेनमध्ये फुटबॉल, टेनिस, जलतरण आणि हायकिंग यांसारख्या विविध क्रियाकलापांसाठी अनेक क्रीडा क्लब (स्पोर्ट्सवेरिन) आहेत. होचशूल्सपोर्ट (विद्यापीठ खेळ) विद्यार्थी आणि कर्मचाऱ्यांसाठी अनेक अभ्यासक्रम देतात. छंदांसाठी, स्थानिक समुदाय केंद्रे (फोल्कशोचशूले), खाजगी क्लब, किंवा Meetup.com सारख्या ऑनलाइन प्लॅटफॉर्मवर स्वारस्य-आधारित गट तपासा.",
        faq_cat_citizenship_title: "नागरिकत्व",
        faq_citizenship_q1: "जर्मन नागरिकत्व मिळवण्याची प्रक्रिया काय आहे?",
        faq_citizenship_a1: "नैसर्गिककरणासाठी (आइन्बुर्गेरुंग) मानक प्रक्रियेमध्ये 8 वर्षांचा कायदेशीर निवास (काही प्रकरणांमध्ये कमी, उदा. एकीकरण कोर्ससह 7 वर्षे, जर्मन नागरिकांच्या जोडीदारांसाठी 6 वर्षे), पुरेसे जर्मन भाषा कौशल्य (B1/B2), नैसर्गिकीकरण चाचणी उत्तीर्ण करणे, आणि सामान्यतः तुमच्या मागील नागरिकत्वाचा त्याग करणे समाविष्ट आहे (भारत प्रौढांसाठी दुहेरी नागरिकत्वाला परवानगी देत नाही).",
        faq_citizenship_q2: "भारतीय पासपोर्ट सरेंडर करण्याची आणि OCI कार्ड मिळवण्याची प्रक्रिया काय आहे?",
        faq_citizenship_a2: "जर्मन नागरिकत्व मिळाल्यावर, तुम्हाला तुमचा भारतीय पासपोर्ट भारतीय दूतावास/वाणिज्य दूतावासात जमा करावा लागेल. त्यानंतर तुम्हाला 'सरेंडर सर्टिफिकेट' मिळेल. त्यानंतर, तुम्ही ओव्हरसीज सिटिझन ऑफ इंडिया (OCI) कार्डसाठी अर्ज करू शकता, जे भारतात आजीवन व्हिसा-मुक्त प्रवास आणि इतर फायदे देते. अर्ज प्रक्रिया भारतीय सरकारच्या पोर्टलद्वारे ऑनलाइन आहे.",        
        contact_title: "आमच्याशी संपर्क साधा",
        contact_intro: "प्रश्न आहेत किंवा संपर्क साधायचा आहे? खालील फॉर्म भरा आणि आम्ही लवकरच तुमच्याशी संपर्क साधू.",
        your_name_label: "तुमचे नाव",
        your_name_placeholder: "जॉन डो",
        your_email_label: "तुमचा ईमेल",
        your_email_placeholder: "john.doe@example.com",
        subject_label: "विषय",
        subject_placeholder: "सदस्यत्वाविषयी चौकशी",
        message_label: "संदेश",
        message_placeholder: "येथे तुमचा संदेश लिहा...",
        send_message_button: "संदेश पाठवा",
        contact_success_message: "तुमच्या संदेशासाठी धन्यवाद! आम्ही लवकरच तुमच्याशी संपर्क साधू.",
        site_title_event_registration: "आकेन मधील भारतीय कुटुंबांची संघटना - कार्यक्रम नोंदणी", // NEW
        event_reg_title: "कार्यक्रम नोंदणी", // NEW
        event_reg_intro: "आमच्या आगामी कार्यक्रमांसाठी नोंदणी करण्यासाठी कृपया खालील फॉर्म भरा.", // NEW
        event_reg_select_event_label: "कार्यक्रम निवडा", // NEW
        event_reg_select_event_placeholder: "एक कार्यक्रम निवडा", // NEW
        event_reg_summer_picnic_option: "उन्हाळी कौटुंबिक पिकनिक (20 जुलै 2024)", // NEW
        event_reg_dandiya_option: "दांडिया उत्सव 2025 (2 ऑक्टोबर 2025)", // NEW
        event_reg_num_attendees_label: "उपस्थितांची संख्या", // NEW
        event_reg_dietary_notes_label: "आहारातील निर्बंध / विशेष नोट्स (ऐच्छिक)", // NEW
        event_reg_dietary_notes_placeholder: "उदा. शाकाहारी, ग्लूटेन-मुक्त, व्हीलचेअर प्रवेश आवश्यक", // NEW
        event_reg_submit_button: "कार्यक्रमासाठी नोंदणी करा", // NEW
        event_reg_success_message: "कार्यक्रमासाठी नोंदणी केल्याबद्दल धन्यवाद! आम्ही तुम्हाला भेटण्यास उत्सुक आहोत.", // NEW
        event_reg_error_message: "कार्यक्रमासाठी नोंदणी करताना त्रुटी आली. कृपया पुन्हा प्रयत्न करा.",
        // ... rest of mr translations ...
        data_protection_title: "डेटा संरक्षण धोरण", // NEW
        data_protection_p1: "संघ आपल्या सदस्यांच्या वैयक्तिक डेटाचा वापर, प्रक्रिया आणि उपयोग संघाच्या घटनेनुसार परवानगी असलेल्या उद्देश्यांची आणि कार्यांची पूर्तता करण्यासाठी करतो.", // NEW
        data_protection_p2: "संघ स्वतःसाठी आणि/किंवा आपल्या सदस्यांसाठी लाभ मिळवण्यासाठी विमा पॉलिसींची व्यवस्था करू शकतो. विमा पॉलिसींच्या करारांची अंमलबजावणी किंवा समाप्ती करण्यासाठी, संघ आपल्या सदस्यांचा वैयक्तिक डेटा आवश्यक मर्यादेपर्यंत संबंधित विमा कंपनीला प्रसारित करतो.", // NEW
        data_protection_p3: "सार्वजनिक किंवा खाजगी कार्यक्रम आणि घटनेत नमूद केलेल्या इतर क्रियाकलापांच्या संदर्भात, संघ आपल्या होमपेजवर आपल्या सदस्यांची नावे आणि फोटो प्रकाशित करतो आणि प्रकाशनसाठी प्रिंट आणि टेलीमीडिया तसेच इलेक्ट्रॉनिक माध्यमांना नावे आणि फोटो पाठवतो. कोणताही सदस्य कोणत्याही वेळी स्वतःच्या वैयक्तिक फोटोंच्या प्रकाशनावर मंडळाकडे आक्षेप घेऊ शकतो. आक्षेप प्राप्त झाल्यानंतर, प्रकाशन/प्रसारण थांबवले जाईल आणि संघ आपल्या होमपेजवरून विद्यमान फोटो काढून टाकेल.", // NEW
        data_protection_p4: "त्यांच्या सदस्यत्वामुळे आणि या घटनेच्या संबंधित मान्यतेमुळे, सदस्य त्यांच्या वैयक्तिक डेटाच्या संकलनासाठी, प्रक्रियेसाठी आणि वापरासाठी वर नमूद केलेल्या मर्यादेपर्यंत आणि व्याप्तीपर्यंत सहमत आहेत. संघास केवळ त्याच्या वैधानिक कर्तव्ये आणि उद्देश्यांची पूर्तता करण्याव्यतिरिक्त इतर उद्देश्यांसाठी डेटा वापरण्याची परवानगी आहे, जर तो कायदेशीररित्या तसे करण्यास बांधील असेल. डेटा विकला जाऊ शकत नाही.", // NEW
        data_protection_p5: "प्रत्येक सदस्य सदस्यता सूचीचा भाग म्हणून त्यांना उपलब्ध करून दिलेल्या डेटाला गोपनीय ठेवण्याची जबाबदारी घेतो. हेच संघाच्या सर्व आर्थिक बाबींना लागू होते.", // NEW
        data_protection_p6: "आम्ही सदस्यांचा वैयक्तिक डेटा कोणत्याही व्यावसायिक किंवा गैर-व्यावसायिक उद्देशांसाठी तृतीय पक्षांना उघड न करण्यास वचनबद्ध आहोत. डेटा वापराच्या पुढील तपशीलांसाठी, कृपया आमचे सामान्य डेटा संरक्षण धोरण येथे पहा (<a href=\"https://www.aifaev.de\" class=\"text-blue-600 hover:underline\" target=\"_blank\">www.aifaev.de</a>)" // NEW        
    },
    te: { // Telugu
        site_title_home: "ఆకెన్‌లో భారతీయ కుటుంబాల సంఘం - హోమ్",
        site_title_about: "ఆకెన్‌లో భారతీయ కుటుంబాల సంఘం - మా గురించి",
        site_title_events: "ఆకెన్‌లో భారతీయ కుటుంబాల సంఘం - ఈవెంట్‌లు",
        site_title_membership: "ఆకెన్‌లో భారతీయ కుటుంబాల సంఘం - సభ్యత్వం",
        site_title_faq: "ఆకెన్ లోని భారతీయ కుటుంబాల సంఘం - తరచుగా అడిగే ప్రశ్నలు",
        site_title_contact: "ఆకెన్‌లో భారతీయ కుటుంబాల సంఘం - సంప్రదించండి",
        site_title_data_protection: "ఆకెన్ లోని భారతీయ కుటుంబాల సంఘం - డేటా రక్షణ విధానం",        
        nav_home: "హోమ్",
        nav_about: "మా గురించి",
        nav_events: "ఈవెంట్‌లు",
        nav_membership: "సభ్యత్వం",
        nav_faq: "తరచుగా అడిగే ప్రశ్నలు",
        nav_contact: "సంప్రదించండి",
        nav_event_registration: "ఈవెంట్ నమోదు", // NEW NAV KEY        
        home_main_title: "ఆకెన్‌లో భారతీయ కుటుంబాల సంఘం",
        home_tagline: "ఆకెన్‌లో భారతీయ కుటుంబాలను కనెక్ట్ చేయడం, సమాజాన్ని పెంపొందించడం మరియు మన గొప్ప సంస్కృతిని జరుపుకోవడం.",
        home_explore_events: "ఈవెంట్‌లను అన్వేషించండి",
        footer_copyright: "&copy; 2025 ఆకెన్ లోని భారతీయ కుటుంబాల సంఘం. e.V. నమోదు సంఖ్య VR 6590(Amtsgericht Aachen). అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.",
        footer_data_protection_policy: "డేటా రక్షణ విధానం",
        footer_terms: "సేవా నిబంధనలు",
        lang_en: "English",
        lang_de: "Deutsch",
        lang_hi: "हिन्दी",
        lang_mr: "मराठी",
        lang_te: "తెలుగు",
        lang_ta: "தமிழ்",
        lang_bn: "বাংলা",
        lang_pa: "ਪੰਜਾਬੀ",
        lang_kn: "ಕನ್ನಡ",
        lang_ml: "മലയാളം",
        lang_or: "ଓଡ଼ିଆ",
        lang_gu: "ગુજરાતી",
        lang_sa: "संस्कृतम्",
        lang_mai: "मैथिली",
        about_title: "మా సంఘం గురించి",
        about_para1: "ఆకెన్‌లో భారతీయ కుటుంబాల సంఘం (AIFA e.V.) అనేది జర్మనీలోని ఆకెన్‌లో నివసిస్తున్న భారతీయ కుటుంబాలను ఒకచోట చేర్చడానికి అంకితం చేయబడిన ఒక లాభాపేక్షలేని సంస్థ. సాంస్కృతిక వారసత్వాన్ని జరుపుకునే, సంప్రదాయాలను పరిరక్షించే మరియు కొత్త స్నేహాలను ఏర్పరచుకునే శక్తివంతమైన మరియు సహాయక సంఘాన్ని సృష్టించడం మా లక్ష్యం.",
        about_para2: "మేము సాంస్కృతిక ఉత్సవాలు మరియు సామాజిక సమావేశాల నుండి విద్యా వర్క్‌షాప్‌లు మరియు సామాజిక సేవా కార్యక్రమాల వరకు ఏడాది పొడవునా అనేక రకాల ఈవెంట్‌లను నిర్వహిస్తాము. భారతీయ కుటుంబాలకు ఇంటికి దూరంగా ఒక ఇంటిని అందించడం, స్థానిక సమాజంలో కలిసిపోవడానికి సహాయం చేయడం మరియు వారి మూలాలకు కనెక్ట్ అయి ఉండటం మా లక్ష్యం.",
        about_para3: "మా సంఘం యొక్క వెచ్చదనాన్ని అనుభవించడానికి, ఉత్తేజకరమైన ఈవెంట్‌లలో పాల్గొనడానికి మరియు ఆకెన్‌లో బలమైన మరియు సమన్వయ భారతీయ ప్రవాసులను నిర్మించడానికి మాతో చేరండి.",
        events_title: "మా ఈవెంట్‌లు",
        event_diwali_title: "దీపావళి వేడుక 2023",
        event_diwali_date: "అక్టోబర్ 28, 2023",
        event_diwali_desc: "సాంస్కృతిక ప్రదర్శనలు, రుచికరమైన ఆహారం మరియు బాణసంచాతో దీపాల పండుగ యొక్క గొప్ప వేడుక. కుటుంబాలు కలిసి ఒక మరపురాని సాయంత్రం ఆనందించాయి.",
        event_diwali_status: "గత ఈవెంట్",
        event_summer_title: "వేసవి కుటుంబ పిక్నిక్",
        event_summer_date: "జూలై 20, 2024",
        event_summer_desc: "గేమ్స్, ఆహారం మరియు బహిరంగ కార్యకలాపాలతో వెస్ట్‌పార్క్ వద్ద సరదాగా నిండిన కుటుంబ పిక్నిక్ కోసం మాతో చేరండి. మీ పిక్నిక్ బాస్కెట్‌లను మర్చిపోవద్దు!",
        event_summer_status: "ప్రస్తుత ఈవెంట్",
        event_dandiya_title: "దాండియా వేడుకలు 2025",
        event_dandiya_date: "అక్టోబర్ 2, 2025",
        event_dandiya_desc: "తిరగడానికి మరియు నృత్యం చేయడానికి సిద్ధంగా ఉండండి! సాంప్రదాయ సంగీతం, రంగుల దుస్తులు మరియు శక్తివంతమైన నృత్య కదలికలతో పండుగ స్ఫూర్తిని జరుపుకుంటూ ఒక శక్తివంతమైన దాండియా మరియు గర్బా రాత్రి కోసం మాతో చేరండి. వేదిక మరియు కార్యకలాపాల గురించి మరిన్ని వివరాలు త్వరలో ప్రకటించబడతాయి.",
        event_dandiya_status: "భవిష్యత్ ఈవెంట్",
        events_view_all: "అన్ని ఈవెంట్‌లను వీక్షించండి",
        events_register_now: "ఈవెంట్ కోసం నమోదు చేసుకోండి", // NEW BUTTON TEXT        
        membership_title: "సభ్యత్వం పొందండి",
        membership_intro: "ఆకెన్‌లో భారతీయ కుటుంబాల సంఘం (AIFA e.V.)లో చేరండి మరియు మా పెరుగుతున్న సంఘంలో భాగం అవ్వండి! మీ సభ్యత్వం ఉత్తేజకరమైన ఈవెంట్‌లను నిర్వహించడానికి మరియు ఆకెన్‌లోని భారతీయ కుటుంబాలకు మద్దతు ఇవ్వడానికి మాకు సహాయపడుతుంది.",
        membership_individual_title: "వ్యక్తిగత సభ్యత్వం",
        membership_individual_price: "€30",
        membership_individual_per_year: "/ సంవత్సరం",
        membership_individual_desc: "కనెక్ట్ అవ్వాలనుకునే వ్యక్తులకు పర్ఫెక్ట్.",
        membership_family_title: "కుటుంబ సభ్యత్వం",
        membership_family_price: "€50",
        membership_family_per_year: "/ సంవత్సరం",
        membership_family_desc: "ఒకే కుటుంబంలోని సభ్యులందరినీ కవర్ చేస్తుంది.",
        membership_form_title: "సభ్యత్వ దరఖాస్తు ఫారం",
        membership_type_label: "సభ్యత్వ రకం",
        membership_type_select_option: "సభ్యత్వ రకాన్ని ఎంచుకోండి",
        membership_type_individual_option: "వ్యక్తిగత సభ్యత్వం (€30/సంవత్సరం)",
        membership_type_family_option: "కుటుంబ సభ్యత్వం (€50/సంవత్సరం)",
        first_name_label: "మొదటి పేరు",
        first_name_placeholder: "జాన్",
        last_name_label: "చివరి పేరు",
        last_name_placeholder: "డో",
        num_family_members_label: "కుటుంబ సభ్యుల సంఖ్య (మీతో సహా)",
        num_family_members_placeholder: "ఉదా. 4",
        volunteer_checkbox: "నేను AIFA e.V. ఈవెంట్‌లకు స్వచ్ఛందంగా అందుబాటులో ఉన్నాను.",
        apply_membership_button: "సభ్యత్వం కోసం దరఖాస్తు చేయండి",
        membership_success_message: "మీ సభ్యత్వ దరఖాస్తుకు ధన్యవాదాలు! మేము త్వరలో మిమ్మల్ని సంప్రదిస్తాము.",
        faq_title: "తరచుగా అడిగే ప్రశ్నలు",
        faq_q1: "ఆకెన్‌లో భారతీయ కుటుంబాల సంఘం (AIFA e.V.) అంటే ఏమిటి?",
        faq_a1: "AIFA e.V. అనేది జర్మనీలోని ఆకెన్‌లో నివసిస్తున్న భారతీయ కుటుంబాల మధ్య బలమైన సంఘాన్ని పెంపొందించడానికి అంకితం చేయబడిన ఒక లాభాపేక్షలేని సంస్థ. మేము సాంస్కృతిక ఈవెంట్‌లు, సామాజిక సమావేశాలు నిర్వహిస్తాము మరియు నెట్‌వర్కింగ్ మరియు మద్దతు కోసం ఒక వేదికను అందిస్తాము.",
        faq_q2: "నేను సభ్యత్వం ఎలా పొందగలను?",
        faq_a2: "సభ్యత్వ వివరాలు మరియు దరఖాస్తు ఫారాలు త్వరలో మా వెబ్‌సైట్‌లో అందుబాటులో ఉంటాయి. దయచేసి తిరిగి తనిఖీ చేయండి లేదా మరింత సమాచారం కోసం సంప్రదింపు ఫారం ద్వారా మమ్మల్ని సంప్రదించండి.",
        faq_q3: "ఈవెంట్‌లు సభ్యులు కాని వారికి కూడా అందుబాటులో ఉన్నాయా?",
        faq_a3: "సాంస్కృతిక మార్పిడి మరియు సమాజ నిర్మాణాన్ని ప్రోత్సహించడానికి మా ఈవెంట్‌లలో చాలా వరకు సభ్యులు కాని వారికి కూడా అందుబాటులో ఉంటాయి. కొన్ని ప్రత్యేక ఈవెంట్‌లకు సభ్యత్వం అవసరం కావచ్చు. ప్రతి ఈవెంట్ కోసం వివరాలు పేర్కొనబడతాయి.",
        faq_q4: "నేను స్వచ్ఛందంగా ఎలా సహాయం చేయగలను లేదా సహకరించగలను?",
        faq_a4: "మేము స్వచ్ఛంద సేవకులను స్వాగతిస్తున్నాము! మీరు మీ సమయాన్ని లేదా నైపుణ్యాలను అందించడానికి ఆసక్తి కలిగి ఉంటే, దయచేసి సంప్రదింపు ఫారం ద్వారా మమ్మల్ని సంప్రదించండి, మరియు మేము మీకు అవకాశాలతో సంప్రదిస్తాము.",
        faq_portal_title: "సమాచార పోర్టల్: జర్మనీలోని భారతీయ కుటుంబాల కోసం తరచుగా అడిగే ప్రశ్నలు",
        faq_search_placeholder: "కీవర్డ్ ద్వారా తరచుగా అడిగే ప్రశ్నలను శోధించండి...",
        faq_cat_aifa_title: "AIFA e.V.",
        faq_first_entry_q1: "జర్మనీలో ఉద్యోగ ఆఫర్ వచ్చిన తర్వాత నేను ఏమి చేయాలి?",
        faq_first_entry_a1: "ఉద్యోగ ఆఫర్ వచ్చిన తర్వాత, మీరు వెంటనే వీసా దరఖాస్తు ప్రక్రియను ప్రారంభించాలి. మీ ఉపాధి ఒప్పందం, విద్యా ధృవపత్రాలు మరియు నిధుల రుజువుతో సహా అవసరమైన అన్ని పత్రాలను సేకరించండి. మీ దేశంలోని జర్మన్ రాయబార కార్యాలయం లేదా కాన్సులేట్ యొక్క నిర్దిష్ట అవసరాలను తనిఖీ చేయడం మంచిది.",
        faq_first_entry_q2: "కుటుంబ పునరేకీకరణ వీసా కోసం ప్రక్రియ ఏమిటి?",
        faq_first_entry_a2: "కుటుంబ పునరేకీకరణ వీసా మీ జీవిత భాగస్వామి మరియు మైనర్ పిల్లలు జర్మనీలో మీతో చేరడానికి అనుమతిస్తుంది. కీలక అవసరాలలో తరచుగా తగిన నివాస స్థలం, ఆర్థిక మార్గాలు మరియు మీ జీవిత భాగస్వామికి ప్రాథమిక జర్మన్ భాషా నైపుణ్యాలు ఉంటాయి. దరఖాస్తు సాధారణంగా మీ స్వదేశంలోని జర్మన్ రాయబార కార్యాలయంలో దాఖలు చేయబడుతుంది.",
        faq_first_entry_q3: "నేను జర్మనీకి ఎంత బంగారం/నగలు తీసుకురాగలను?",
        faq_first_entry_a3: "జర్మనీకి వెళ్లేటప్పుడు, ఆభరణాలతో సహా వ్యక్తిగత వస్తువులు సాధారణంగా కస్టమ్స్ సుంకాల నుండి మినహాయించబడతాయి, అవి మీ గృహోపకరణాలలో భాగమైతే మరియు మీరు వాటిని కనీసం ఆరు నెలలు ఉపయోగించినట్లయితే. అయితే, అధిక-విలువైన వస్తువుల కోసం, కస్టమ్స్‌తో సమస్యలను నివారించడానికి యాజమాన్యం మరియు విలువకు సంబంధించిన రుజువు (ఉదా. కొనుగోలు రసీదులు, మూల్యాంకన ధృవపత్రాలు) తీసుకెళ్లడం మంచిది. కస్టమ్స్ నిబంధనల ప్రకారం నిర్దిష్ట విలువకు మించిన వస్తువులను ఎల్లప్పుడూ ప్రకటించండి.",
        faq_cat_first_arrival_aachen_title: "ఆకెన్‌లో మొదటి రాక",
        faq_first_arrival_aachen_q1: "విమానాశ్రయం నుండి ఆకెన్‌కు చేరుకోవడానికి ఉత్తమ మార్గాలు ఏమిటి?",
        faq_first_arrival_aachen_a1: "ఆకెన్ బాగా అనుసంధానించబడింది. డ్యూసెల్డార్ఫ్ విమానాశ్రయం (DUS) లేదా కొలోన్ బాన్ విమానాశ్రయం (CGN) నుండి, మీరు నేరుగా ఆకెన్ హౌప్ట్‌బాన్‌హాఫ్‌కు (ప్రధాన స్టేషన్) రైలు తీసుకోవచ్చు. మాస్ట్రిక్ట్ ఆకెన్ విమానాశ్రయం (MST) నుండి బస్సులు అందుబాటులో ఉన్నాయి. టాక్సీలు మరియు రైడ్-షేరింగ్ సేవలు కూడా ఎంపికలు కానీ సాధారణంగా ఖరీదైనవి.",
        faq_first_arrival_aachen_q2: "ఆకెన్‌లో నేను తాత్కాలిక వసతిని ఎక్కడ కనుగొనగలను?",
        faq_first_arrival_aachen_a2: "తాత్కాలిక వసతి కోసం, సర్వీస్డ్ అపార్ట్‌మెంట్లు, ఎయిర్‌బిఎన్‌బి లేదా స్వల్పకాలిక అద్దెలను పరిగణించండి. Booking.com, Airbnb మరియు స్థానిక క్లాసిఫైడ్‌లు (ఉదా. WG-Gesucht.de భాగస్వామ్య ఫ్లాట్ల కోసం, అయితే కుటుంబాలకు తక్కువ సాధారణం) వంటి వెబ్‌సైట్‌లు సహాయపడతాయి. కొన్ని హోటళ్లు కూడా పొడిగించిన బస ఎంపికలను అందిస్తాయి.",
        faq_first_arrival_aachen_q3: "'అన్మెల్డుంగ్' అంటే ఏమిటి మరియు నేను దానిని ఎలా చేయాలి?",
        faq_first_arrival_aachen_a3: "'అన్మెల్డుంగ్' అనేది మీ శాశ్వత నివాసంలోకి మారిన రెండు వారాలలోపు స్థానిక అధికారులతో (Bürgeramt/Einwohnermeldeamt) మీ నివాస చిరునామాను తప్పనిసరిగా నమోదు చేయడం. మీకు మీ పాస్‌పోర్ట్, వీసా మరియు భూస్వామి ధృవీకరణ (Wohnungsgeberbestätigung) అవసరం. పన్ను ID పొందడం, బ్యాంక్ ఖాతా తెరవడం మరియు ఇతర పరిపాలనా పనులకు ఇది చాలా ముఖ్యం. ముందుగానే ఆన్‌లైన్‌లో అపాయింట్‌మెంట్ బుక్ చేసుకోండి.",
        faq_first_arrival_aachen_q4: "జర్మనీలో నేను బ్యాంక్ ఖాతాను ఎలా తెరవాలి?",
        faq_first_arrival_aachen_a4: "మీరు సాంప్రదాయ బ్యాంకులు (ఉదా. స్పార్కాస్సే, డ్యుయిష్ బ్యాంక్) లేదా ఆన్‌లైన్ బ్యాంకులు (ఉదా. N26, కామ్‌డైరెక్ట్) తో బ్యాంక్ ఖాతాను తెరవవచ్చు. సాంప్రదాయ బ్యాంకుల కోసం, మీకు సాధారణంగా మీ పాస్‌పోర్ట్, వీసా/నివాస అనుమతి మరియు చిరునామా రుజువు (అన్మెల్డుంగ్ సర్టిఫికేట్) అవసరం. ఆన్‌లైన్ బ్యాంకులు తరచుగా సరళమైన డిజిటల్ ప్రక్రియను అందిస్తాయి.",
        faq_cat_children_title: "పిల్లలు",
        faq_children_q1: "ఆకెన్‌లో నా పిల్లల కోసం కిటా (కిండర్‌గార్టెన్) లేదా పాఠశాలను ఎలా కనుగొనగలను?",
        faq_children_a1: "కిటా కోసం, మీరు సాధారణంగా నగరం యొక్క ఆన్‌లైన్ పోర్టల్ (కిటా-నావిగేటర్ ఆకెన్) ద్వారా లేదా వ్యక్తిగత కిటాలతో నేరుగా నమోదు చేస్తారు. పాఠశాలల కోసం, ఆకెన్ యొక్క షులామ్ట్ (పాఠశాల కార్యాలయం) లేదా వ్యక్తిగత పాఠశాలలను సంప్రదించండి. అధిక డిమాండ్ కారణంగా కిటాల కోసం ముందస్తు నమోదు చాలా సిఫార్సు చేయబడింది.",
        faq_children_q2: "ఆకెన్‌లో పిల్లల కోసం ఏవైనా హాబీ క్లాసులు లేదా స్పోర్ట్స్ క్లబ్‌లు ఉన్నాయా?",
        faq_children_a2: "అవును, ఆకెన్ పిల్లల కోసం విస్తృత శ్రేణి హాబీ క్లాసులు మరియు స్పోర్ట్స్ క్లబ్‌లను అందిస్తుంది. మీరు నగరం యొక్క అధికారిక వెబ్‌సైట్, స్థానిక కమ్యూనిటీ సెంటర్‌లు (ఫ్యామిలియెన్‌జెంట్‌రెన్), స్పోర్ట్స్ ఫెడరేషన్‌లు (స్టాడ్‌స్పోర్ట్స్‌బండ్ ఆకెన్) ద్వారా లేదా నేరుగా పాఠశాలలు మరియు కిటాలలో విచారించడం ద్వారా సమాచారాన్ని కనుగొనవచ్చు. ఎంపికలలో ఫుట్‌బాల్, స్విమ్మింగ్, సంగీతం, కళ మరియు నృత్యం ఉన్నాయి.",
        faq_cat_language_learning_title: "భాషా అభ్యాసం",
        faq_language_q1: "ఆకెన్‌లో ఏ భాషా పాఠశాలలు అందుబాటులో ఉన్నాయి?",
        faq_language_a1: "ఆకెన్‌లో వోల్క్‌షోచ్‌షూలే (VHS) ఆకెన్, గోథే-ఇన్‌స్టిట్యూట్ (ఆకెన్‌లో నేరుగా కానప్పటికీ, సమీపంలో ఉంది), మరియు స్ప్రచెనాకాడెమీ ఆకెన్ వంటి ప్రైవేట్ భాషా పాఠశాలలతో సహా అనేక భాషా పాఠశాలలు ఉన్నాయి. అవి వివిధ స్థాయిలు మరియు కోర్సు ఫార్మాట్‌లను అందిస్తాయి.",
        faq_language_q2: "'ఇంటిగ్రేషన్ కోర్సు' అంటే ఏమిటి మరియు నేను ఎలా చేరాలి?",
        faq_language_a2: "ఒక ఇంటిగ్రేషన్ కోర్సు (ఇంటిగ్రేషన్స్‌కుర్స్) కొత్త వలసదారుల కోసం జర్మన్ భాషా మరియు ఓరియంటేషన్ కోర్సు, ఇది పాక్షికంగా ప్రభుత్వం ద్వారా నిధులు పొందుతుంది. ఇది B1 జర్మన్ భాషా స్థాయిని కవర్ చేస్తుంది మరియు జర్మన్ సంస్కృతి, చరిత్ర మరియు న్యాయ వ్యవస్థపై ఒక మాడ్యూల్‌ను కలిగి ఉంటుంది. మీరు బుండెస్అమ్ట్ ఫర్ మైగ్రేషన్ ఉండ్ ఫ్లచ్ట్‌లింగే (BAMF) ద్వారా లేదా నేరుగా అధీకృత భాషా పాఠశాలలతో దరఖాస్తు చేసుకోవచ్చు.",
        faq_language_q3: "పూర్తి సమయం పని చేస్తూ నేను జర్మన్ ఎలా నేర్చుకోవాలి?",
        faq_language_a3: "అనేక భాషా పాఠశాలలు ప్రత్యేకంగా పని చేసే నిపుణుల కోసం రూపొందించిన సాయంత్రం లేదా వారాంతపు కోర్సులను అందిస్తాయి. ఆన్‌లైన్ ప్లాట్‌ఫారమ్‌లు (ఉదా. డ్యుయోలింగో, బాబెల్, డ్యుయిష్ వెల్), భాషా మార్పిడి భాగస్వాములు మరియు జర్మన్ సహోద్యోగులు లేదా స్నేహితులతో అభ్యాసం కూడా చాలా ప్రభావవంతంగా ఉంటుంది. కొన్ని యజమానులు అంతర్గత భాషా శిక్షణను కూడా అందిస్తారు.",
        faq_cat_residence_permit_title: "నివాస అనుమతి",
        faq_residence_q1: "గుర్తింపు మరియు వీసా పత్రంగా నివాస అనుమతి ఎందుకు ముఖ్యం?",
        faq_residence_a1: "మీ నివాస అనుమతి (ఆఫ్‌ఎన్‌థాల్ట్‌స్టిటెల్) జర్మనీలో చట్టబద్ధమైన నివాసానికి మీ అధికారిక రుజువు. ఇది జర్మనీలో మీ ప్రాథమిక గుర్తింపు పత్రంగా పనిచేస్తుంది మరియు మీ హక్కులను (ఉదా. పని, అధ్యయనం) నిర్దేశిస్తుంది. ఇది జర్మనీ మరియు ఇతర షెంగెన్ దేశాలకు తిరిగి ప్రవేశించడానికి మీ వీసాగా కూడా పనిచేస్తుంది.",
        faq_residence_q2: "నేను మొదటిసారి నివాస అనుమతి కోసం ఎలా దరఖాస్తు చేయాలి మరియు దానిని ఎలా పొడిగించాలి?",
        faq_residence_a2: "మీరు మీ అన్మెల్డుంగ్ పూర్తి చేసిన తర్వాత ఆకెన్‌లోని ఆస్లాండర్‌బెహోర్డే (విదేశీ కార్యాలయం) వద్ద సాధారణంగా ప్రారంభ దరఖాస్తు చేయబడుతుంది. మీకు మీ పాస్‌పోర్ట్, వీసా, ఉపాధి ఒప్పందం, ఆరోగ్య బీమా రుజువు మరియు ఇతర పత్రాలు అవసరం. పొడిగింపుల కోసం, మీ ప్రస్తుత అనుమతి గడువు ముగియడానికి చాలా ముందుగానే దరఖాస్తు చేసుకోండి, నవీకరించబడిన పత్రాలను అందించండి. అపాయింట్‌మెంట్‌లు సాధారణంగా తప్పనిసరి.",
        faq_residence_q3: "'సెటిల్‌మెంట్ పర్మిట్' (శాశ్వత నివాసం) కోసం నేను ఎలా దరఖాస్తు చేయాలి?",
        faq_residence_a3: "ఒక సెటిల్‌మెంట్ పర్మిట్ (నీడర్‌లాసుంగ్స్‌ఎర్లౌబ్నిస్) మీకు శాశ్వత నివాసాన్ని మంజూరు చేస్తుంది. అర్హతకు సాధారణంగా 5 సంవత్సరాల చట్టబద్ధమైన నివాసం (బ్లూ కార్డ్ హోల్డర్‌లకు తక్కువ), తగిన జర్మన్ భాషా నైపుణ్యాలు (B1), సురక్షితమైన జీవనోపాధి, తగిన నివాస స్థలం మరియు పెన్షన్ పథకానికి సహకారం అవసరం. ఆస్లాండర్‌బెహోర్డేలో దరఖాస్తు చేసుకోండి.",
        faq_cat_house_hunting_title: "ఇల్లు వెతకడం",
        faq_house_hunting_q1: "ఆకెన్‌లో నేను దీర్ఘకాలిక అపార్ట్‌మెంట్‌ను ఎలా కనుగొనగలను?",
        faq_house_hunting_a1: "అపార్ట్‌మెంట్ వేట కోసం ప్రసిద్ధ ప్లాట్‌ఫారమ్‌లలో ఇమ్మోబిలియెన్‌స్కౌట్24, ఇమ్మోవెల్ట్ మరియు ఇబే క్లైన్‌అన్‌జైగెన్ ఉన్నాయి. నెట్‌వర్కింగ్ మరియు స్థానిక రియల్ ఎస్టేట్ ఏజెంట్లు (మాక్లర్) కూడా సహాయపడతాయి. ముఖ్యంగా కుటుంబ-స్నేహపూర్వక అపార్ట్‌మెంట్‌లకు అధిక డిమాండ్ మరియు పోటీకి సిద్ధంగా ఉండండి.",
        faq_house_hunting_q2: "అద్దె ఒప్పందాలు (వెర్ట్రాగ్) మరియు రద్దు (కుండిగుంగ్) గురించి నేను ఏమి తెలుసుకోవాలి?",
        faq_house_hunting_a2: "జర్మన్ అద్దె ఒప్పందాలు (మీట్‌వెర్ట్రాగ్) సమగ్రంగా ఉంటాయి. అద్దె పెరుగుదలలు, పునరుద్ధరణ విధులు మరియు రద్దు నోటీసు కాలాలు (సాధారణంగా అద్దెదారులకు 3 నెలలు) గురించిన నిబంధనలపై శ్రద్ధ వహించండి. ఎల్లప్పుడూ ఒప్పందాన్ని జాగ్రత్తగా చదవండి మరియు ఏవైనా సందేహాలను స్పష్టం చేయండి. అవసరమైతే మీటర్‌వెరిన్ (అద్దెదారుల సంఘం) నుండి సలహా తీసుకోండి.",
        faq_house_hunting_q3: "ఆస్తి కొనుగోలులో (నోతార్, బౌఅమ్ట్, ఫైనాన్స్‌అమ్ట్) ఏమి ఉంటుంది?",
        faq_house_hunting_a3: "జర్మనీలో ఆస్తి కొనుగోలులో నోతార్ (పబ్లిక్ నోటరీ) ఉంటారు, వారు కొనుగోలు ఒప్పందాన్ని రూపొందించి ధృవీకరిస్తారు. బౌఅమ్ట్ (భవన అథారిటీ) నిర్మాణ అనుమతులు మరియు నిబంధనలను నిర్వహిస్తుంది. ఫైనాన్స్‌అమ్ట్ (పన్ను కార్యాలయం) ఆస్తి బదిలీ పన్నుకు (గ్రౌండ్‌ఎర్‌వెర్బ్‌స్టూయెర్) సంబంధించినది. సంక్లిష్టత కారణంగా చట్టపరమైన మరియు ఆర్థిక సలహా చాలా సిఫార్సు చేయబడుతుంది.",
        faq_cat_social_circle_title: "సామాజిక వలయం",
        faq_social_circle_q1: "ఆకెన్‌లో నేను సామాజిక వలయాన్ని ఎలా నిర్మించుకోవాలి మరియు ఇతర భారతీయులను ఎలా కలవాలి?",
        faq_social_circle_a1: "AIFA e.V. ఈవెంట్‌లలో చేరడం గొప్ప ప్రారంభం! అలాగే, సోషల్ మీడియాలో (ఫేస్‌బుక్, వాట్సాప్) స్థానిక భారతీయ కమ్యూనిటీ గ్రూప్‌లను అన్వేషించండి, సాంస్కృతిక ఉత్సవాలకు హాజరుకాండి మరియు విశ్వవిద్యాలయం లేదా కంపెనీ అంతర్జాతీయ గ్రూప్‌లలో పాల్గొనండి. భాషా మార్పిడి మీటప్‌లు కూడా విభిన్న వ్యక్తులను కలవడానికి మంచివి.",
        faq_social_circle_q2: "ఆకెన్‌లో ఏవైనా భారతీయ సంఘాలు (వెరైన్) లేదా సాంస్కృతిక గ్రూప్‌లు ఉన్నాయా?",
        faq_social_circle_a2: "అవును, AIFA e.V. కాకుండా, ఇతర చిన్న భారతీయ సాంస్కృతిక గ్రూప్‌లు లేదా విద్యార్థి సంఘాలు (ముఖ్యంగా RWTH ఆకెన్ విశ్వవిద్యాలయం చుట్టూ) ఉండవచ్చు. 'ఇండిషెర్ వెరైన్ ఆకెన్' కోసం ఆన్‌లైన్‌లో శోధించడం లేదా భారతీయ కిరాణా దుకాణాలలో నోటీసు బోర్డులను తనిఖీ చేయడం ఆధారాలను అందించగలదు.",
        faq_social_circle_q3: "ఆకెన్‌లో నేను హాబీలు మరియు క్రీడలను ఎలా కొనసాగించాలి?",
        faq_social_circle_a3: "ఆకెన్‌లో ఫుట్‌బాల్, టెన్నిస్, స్విమ్మింగ్ మరియు హైకింగ్ వంటి వివిధ కార్యకలాపాల కోసం అనేక స్పోర్ట్స్ క్లబ్‌లు (స్పోర్ట్స్‌వెరైన్) ఉన్నాయి. హోచ్‌షూల్‌స్పోర్ట్ (విశ్వవిద్యాలయ క్రీడలు) విద్యార్థులు మరియు సిబ్బందికి అనేక కోర్సులను అందిస్తుంది. హాబీల కోసం, స్థానిక కమ్యూనిటీ సెంటర్‌లు (వోల్క్‌షోచ్‌షూలే), ప్రైవేట్ క్లబ్‌లు లేదా Meetup.com వంటి ఆన్‌లైన్ ప్లాట్‌ఫారమ్‌లలో ఆసక్తి-ఆధారిత గ్రూప్‌లను తనిఖీ చేయండి.",
        faq_cat_citizenship_title: "పౌరసత్వం",
        faq_citizenship_q1: "జర్మన్ పౌరసత్వాన్ని పొందడానికి ప్రక్రియ ఏమిటి?",
        faq_citizenship_a1: "సహజీకరణ (ఐన్‌బర్‌గెరుంగ్) కోసం ప్రామాణిక ప్రక్రియకు 8 సంవత్సరాల చట్టబద్ధమైన నివాసం (కొన్ని సందర్భాల్లో తక్కువ, ఉదా. ఇంటిగ్రేషన్ కోర్సుతో 7 సంవత్సరాలు, జర్మన్ పౌరుల జీవిత భాగస్వాములకు 6 సంవత్సరాలు), తగిన జర్మన్ భాషా నైపుణ్యాలు (B1/B2), సహజీకరణ పరీక్షలో ఉత్తీర్ణత మరియు సాధారణంగా మీ మునుపటి పౌరసత్వాన్ని వదులుకోవడం అవసరం (భారతదేశం పెద్దలకు ద్వంద్వ పౌరసత్వాన్ని అనుమతించదు).",
        faq_citizenship_q2: "భారతీయ పాస్‌పోర్ట్‌ను సరెండర్ చేయడానికి మరియు OCI కార్డును పొందడానికి ప్రక్రియ ఏమిటి?",
        faq_citizenship_a2: "జర్మన్ పౌరసత్వం పొందిన తర్వాత, మీరు మీ భారతీయ పాస్‌పోర్ట్‌ను భారత రాయబార కార్యాలయం/కాన్సులేట్‌కు సరెండర్ చేయాలి. అప్పుడు మీకు 'సరెండర్ సర్టిఫికేట్' లభిస్తుంది. ఆ తర్వాత, మీరు ఓవర్సీస్ సిటిజన్ ఆఫ్ ఇండియా (OCI) కార్డు కోసం దరఖాస్తు చేసుకోవచ్చు, ఇది భారతదేశానికి జీవితకాల వీసా-రహిత ప్రయాణాన్ని మరియు ఇతర ప్రయోజనాలను మంజూరు చేస్తుంది. దరఖాస్తు ప్రక్రియ భారత ప్రభుత్వ పోర్టల్ ద్వారా ఆన్‌లైన్‌లో ఉంటుంది.",        
        contact_title: "మమ్మల్ని సంప్రదించండి",
        contact_intro: "ప్రశ్నలు ఉన్నాయా లేదా సంప్రదించాలనుకుంటున్నారా? దిగువ ఫారం నింపండి మరియు మేము వీలైనంత త్వరగా మిమ్మల్ని సంప్రదిస్తాము.",
        your_name_label: "మీ పేరు",
        your_name_placeholder: "జాన్ డో",
        your_email_label: "మీ ఇమెయిల్",
        your_email_placeholder: "john.doe@example.com",
        subject_label: "విషయం",
        subject_placeholder: "సభ్యత్వం గురించి విచారణ",
        message_label: "సందేశం",
        message_placeholder: "ఇక్కడ మీ సందేశాన్ని వ్రాయండి...",
        send_message_button: "సందేశం పంపండి",
        contact_success_message: "మీ సందేశానికి ధన్యవాదాలు! మేము త్వరలో మిమ్మల్ని సంప్రదిస్తాము.",
        site_title_event_registration: "ఆకెన్ లోని భారతీయ కుటుంబాల సంఘం - ఈవెంట్ నమోదు",
        event_reg_title: "ఈవెంట్ నమోదు",
        event_reg_intro: "మా రాబోయే ఈవెంట్‌ల కోసం నమోదు చేసుకోవడానికి దయచేసి క్రింది ఫారమ్‌ను పూరించండి.",
        event_reg_select_event_label: "ఈవెంట్‌ను ఎంచుకోండి",
        event_reg_select_event_placeholder: "ఒక ఈవెంట్‌ను ఎంచుకోండి",
        event_reg_summer_picnic_option: "వేసవి కుటుంబ పిక్నిక్ (జూలై 20, 2024)",
        event_reg_dandiya_option: "దాండియా వేడుకలు 2025 (అక్టోబర్ 2, 2025)",
        event_reg_num_attendees_label: "హాజరయ్యే వారి సంఖ్య",
        event_reg_dietary_notes_label: "ఆహార పరిమితులు / ప్రత్యేక గమనికలు (ఐచ్ఛికం)",
        event_reg_dietary_notes_placeholder: "ఉదా. శాఖాహారం, గ్లూటెన్-రహితం, వీల్‌చైర్ యాక్సెస్ అవసరం",
        event_reg_submit_button: "ఈవెంట్ కోసం నమోదు చేసుకోండి",
        event_reg_success_message: "ఈవెంట్ కోసం నమోదు చేసుకున్నందుకు ధన్యవాదాలు! మిమ్మల్ని చూడటానికి మేము ఎదురుచూస్తున్నాము.",
        event_reg_error_message: "ఈవెంట్ కోసం నమోదు చేసుకునేటప్పుడు లోపం. దయచేసి మళ్లీ ప్రయత్నించండి.",
        data_protection_title: "డేటా రక్షణ విధానం",
        data_protection_p1: "సంఘం తన సభ్యుల వ్యక్తిగత డేటాను సంఘం యొక్క రాజ్యాంగం ప్రకారం అనుమతించబడిన ప్రయోజనాలు మరియు పనులను నెరవేర్చడానికి సేకరిస్తుంది, ప్రాసెస్ చేస్తుంది మరియు ఉపయోగిస్తుంది.",
        data_protection_p2: "సంఘం తన కోసం మరియు/లేదా తన సభ్యుల కోసం ప్రయోజనాలను పొందడానికి బీమా పాలసీలను ఏర్పాటు చేయవచ్చు. బీమా పాలసీల కోసం ఒప్పందాలను అమలు చేయడానికి లేదా రద్దు చేయడానికి, సంఘం తన సభ్యుల వ్యక్తిగత డేటాను అవసరమైన మేరకు బాధ్యత వహించే బీమా కంపెనీకి ప్రసారం చేస్తుంది.",
        data_protection_p3: "రాజ్యాంగంలో పేర్కొన్న పబ్లిక్ లేదా ప్రైవేట్ ఈవెంట్‌లు మరియు ఇతర కార్యకలాపాలకు సంబంధించి, సంఘం తన హోమ్‌పేజీలో తన సభ్యుల పేర్లు మరియు ఫోటోలను ప్రచురిస్తుంది మరియు ముద్రణ మరియు టెలిమీడియా అలాగే ఎలక్ట్రానిక్ మీడియాకు ప్రచురణ కోసం పేర్లు మరియు ఫోటోలను పంపుతుంది. ఒక సభ్యుడు తమ వ్యక్తిగత ఫోటోల ప్రచురణకు బోర్డుకు ఎప్పుడైనా అభ్యంతరం చెప్పవచ్చు. అభ్యంతరం అందిన తర్వాత, ప్రచురణ/ప్రసారం నిలిపివేయబడుతుంది మరియు సంఘం తన హోమ్‌పేజీ నుండి ఇప్పటికే ఉన్న ఫోటోలను తొలగిస్తుంది.",
        data_protection_p4: "వారి సభ్యత్వం మరియు ఈ రాజ్యాంగం యొక్క సంబంధిత గుర్తింపు ద్వారా, సభ్యులు పైన పేర్కొన్న మేరకు మరియు పరిధిలో వారి వ్యక్తిగత డేటా సేకరణ, ప్రాసెసింగ్ మరియు ఉపయోగించడానికి అంగీకరిస్తారు. సంఘం తన చట్టబద్ధమైన పనులు మరియు ప్రయోజనాలను నెరవేర్చడం కాకుండా ఇతర ప్రయోజనాల కోసం డేటాను ఉపయోగించడానికి చట్టబద్ధంగా బాధ్యత వహించినట్లయితే మాత్రమే అనుమతించబడుతుంది. డేటాను విక్రయించకూడదు.",
        data_protection_p5: "ప్రతి సభ్యుడు సభ్యత్వ జాబితాలో భాగంగా వారికి అందుబాటులో ఉంచబడిన డేటాను గోప్యంగా ఉంచడానికి బాధ్యత వహిస్తాడు. సంఘం యొక్క అన్ని ఆర్థిక విషయాలకు కూడా ఇది వర్తిస్తుంది.",
        data_protection_p6: "సభ్యుల వ్యక్తిగత డేటాను ఏ వాణిజ్య లేదా వాణిజ్యేతర ప్రయోజనాల కోసం మూడవ పక్షాలకు బహిర్గతం చేయకూడదని మేము కట్టుబడి ఉన్నాము. డేటా వినియోగంపై మరింత వివరాల కోసం, దయచేసి మా సాధారణ డేటా రక్షణ విధానాన్ని ఇక్కడ చూడండి (<a href=\"https://www.aifaev.de\" class=\"text-blue-600 hover:underline\" target=\"_blank\">www.aifaev.de</a>)"        
    },
    ta: { // Tamil
        site_title_home: "ஆக்கனில் இந்திய குடும்பங்களின் சங்கம் - முகப்பு",
        site_title_about: "ஆக்கனில் இந்திய குடும்பங்களின் சங்கம் - எங்களை பற்றி",
        site_title_events: "ஆக்கனில் இந்திய குடும்பங்களின் சங்கம் - நிகழ்வுகள்",
        site_title_membership: "ஆக்கனில் இந்திய குடும்பங்களின் சங்கம் - உறுப்பினர்",
        site_title_faq: "ஆக்கெனில் உள்ள இந்திய குடும்பங்களின் சங்கம் - அடிக்கடி கேட்கப்படும் கேள்விகள்",
        site_title_contact: "ஆக்கனில் இந்திய குடும்பங்களின் சங்கம் - தொடர்புக்கு",
        site_title_data_protection: "ஆக்கெனில் உள்ள இந்திய குடும்பங்களின் சங்கம் - தரவுப் பாதுகாப்பு கொள்கை",        
        nav_home: "முகப்பு",
        nav_about: "எங்களை பற்றி",
        nav_events: "நிகழ்வுகள்",
        nav_membership: "உறுப்பினர்",
        nav_faq: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
        nav_contact: "தொடர்புக்கு",
        nav_event_registration: "நிகழ்வு பதிவு", // NEW NAV KEY        
        home_main_title: "ஆக்கனில் இந்திய குடும்பங்களின் சங்கம்",
        home_tagline: "ஆக்கனில் இந்திய குடும்பங்களை இணைத்தல், சமூகத்தை வளர்த்தல், மற்றும் நமது வளமான கலாச்சாரத்தை கொண்டாடுதல்.",
        home_explore_events: "நிகழ்வுகளை ஆராயுங்கள்",
        footer_copyright: "&copy; 2025 ஆக்கெனில் உள்ள இந்திய குடும்பங்களின் சங்கம். e.V. பதிவு எண் VR 6590(Amtsgericht Aachen). அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
        footer_data_protection_policy: "தரவுப் பாதுகாப்பு கொள்கை",
        footer_terms: "சேவை விதிமுறைகள்",
        lang_en: "English",
        lang_de: "Deutsch",
        lang_hi: "हिन्दी",
        lang_mr: "मराठी",
        lang_te: "తెలుగు",
        lang_ta: "தமிழ்",
        lang_bn: "বাংলা",
        lang_pa: "ਪੰਜਾਬੀ",
        lang_kn: "ಕನ್ನಡ",
        lang_ml: "മലയാളം",
        lang_or: "ଓଡ଼ିଆ",
        lang_gu: "ગુજરાતી",
        lang_sa: "संस्कृतम्",
        lang_mai: "मैथिली",
        about_title: "எங்கள் சங்கத்தைப் பற்றி",
        about_para1: "ஆக்கனில் இந்திய குடும்பங்களின் சங்கம் (AIFA e.V.) என்பது ஜெர்மனியின் ஆக்கனில் வசிக்கும் இந்திய குடும்பங்களை ஒன்றிணைக்க அர்ப்பணிக்கப்பட்ட ஒரு இலாப நோக்கற்ற அமைப்பாகும். கலாச்சார பாரம்பரியம் கொண்டாடப்படும், மரபுகள் பாதுகாக்கப்படும், மற்றும் புதிய நட்புகள் உருவாகும் ஒரு துடிப்பான மற்றும் ஆதரவான சமூகத்தை உருவாக்குவதே எங்கள் நோக்கம்.",
        about_para2: "கலாச்சார விழாக்கள் மற்றும் சமூக ஒன்றுகூடல்கள் முதல் கல்விப் பட்டறைகள் மற்றும் சமூக சேவை முயற்சிகள் வரை ஆண்டு முழுவதும் பல்வேறு நிகழ்வுகளை நாங்கள் ஏற்பாடு செய்கிறோம். இந்திய குடும்பங்களுக்கு வீட்டிலிருந்து விலகி ஒரு வீட்டை வழங்குவதும், உள்ளூர் சமூகத்தில் ஒருங்கிணைக்க உதவுவதும், அவர்களின் வேர்களுடன் இணைந்திருக்க உதவுவதும் எங்கள் நோக்கம்.",
        about_para3: "எங்கள் சமூகத்தின் அரவணைப்பை அனுபவிக்கவும், உற்சாகமான நிகழ்வுகளில் பங்கேற்கவும், மற்றும் ஆக்கனில் ஒரு வலுவான மற்றும் ஒத்திசைவான இந்திய புலம்பெயர்ந்தோரை உருவாக்க பங்களிக்கவும் எங்களுடன் சேருங்கள்.",
        events_title: "எங்கள் நிகழ்வுகள்",
        event_diwali_title: "தீபாவளி கொண்டாட்டம் 2023",
        event_diwali_date: "அக்டோபர் 28, 2023",
        event_diwali_desc: "கலாச்சார நிகழ்ச்சிகள், சுவையான உணவு மற்றும் பட்டாசுகளுடன் ஒளித் திருவிழாவின் ஒரு பெரிய கொண்டாட்டம். குடும்பங்கள் ஒரு மறக்க முடியாத மாலைப்பொழுதை ஒன்றாக அனுபவித்தன.",
        event_diwali_status: "கடந்த நிகழ்வு",
        event_summer_title: "கோடைக்கால குடும்ப பிக்னிக்",
        event_summer_date: "ஜூலை 20, 2024",
        event_summer_desc: "விளையாட்டுகள், உணவு மற்றும் வெளிப்புற நடவடிக்கைகளுடன் வெஸ்ட்பார்க்கில் ஒரு வேடிக்கை நிறைந்த குடும்ப பிக்னிக்கிற்கு எங்களுடன் சேருங்கள். உங்கள் பிக்னிக் கூடைகளை மறக்காதீர்கள்!",
        event_summer_status: "தற்போதைய நிகழ்வு",
        event_dandiya_title: "தாண்டியா கொண்டாட்டங்கள் 2025",
        event_dandiya_date: "அக்டோபர் 2, 2025",
        event_dandiya_desc: "சுழன்று ஆட தயாராகுங்கள்! பாரம்பரிய இசை, வண்ணமயமான ஆடைகள் மற்றும் ஆற்றல்மிக்க நடன அசைவுகளுடன் பண்டிகை உணர்வை கொண்டாடும் ஒரு துடிப்பான தாண்டியா மற்றும் கர்பா இரவுக்காக எங்களுடன் சேருங்கள். இடம் மற்றும் நடவடிக்கைகள் பற்றிய கூடுதல் விவரங்கள் விரைவில் அறிவிக்கப்படும்.",
        event_dandiya_status: "எதிர்கால நிகழ்வு",
        events_view_all: "அனைத்து நிகழ்வுகளையும் காண்க",
        events_register_now: "நிகழ்வுக்குப் பதிவு செய்யவும்", // NEW BUTTON TEXT        
        membership_title: "உறுப்பினர் ஆகுங்கள்",
        membership_intro: "ஆக்கனில் இந்திய குடும்பங்களின் சங்கம் (AIFA e.V.) இல் சேர்ந்து எங்கள் வளர்ந்து வரும் சமூகத்தின் ஒரு பகுதியாகுங்கள்! உங்கள் உறுப்பினர் எங்கள் அற்புதமான நிகழ்வுகளை ஏற்பாடு செய்ய மற்றும் ஆக்கனில் உள்ள இந்திய குடும்பங்களுக்கு ஆதரவளிக்க உதவுகிறது.",
        membership_individual_title: "தனிநபர் உறுப்பினர்",
        membership_individual_price: "€30",
        membership_individual_per_year: "/ ஆண்டு",
        membership_individual_desc: "இணைக்க விரும்பும் தனிநபர்களுக்கு ஏற்றது.",
        membership_family_title: "குடும்ப உறுப்பினர்",
        membership_family_price: "€50",
        membership_family_per_year: "/ ஆண்டு",
        membership_family_desc: "ஒரே குடும்பத்தின் அனைத்து உறுப்பினர்களையும் உள்ளடக்கியது.",
        membership_form_title: "உறுப்பினர் விண்ணப்பப் படிவம்",
        membership_type_label: "உறுப்பினர் வகை",
        membership_type_select_option: "ஒரு உறுப்பினர் வகையைத் தேர்ந்தெடுக்கவும்",
        membership_type_individual_option: "தனிநபர் உறுப்பினர் (€30/ஆண்டு)",
        membership_type_family_option: "குடும்ப உறுப்பினர் (€50/ஆண்டு)",
        first_name_label: "முதல் பெயர்",
        first_name_placeholder: "ஜான்",
        last_name_label: "கடைசி பெயர்",
        last_name_placeholder: "டோ",
        num_family_members_label: "குடும்ப உறுப்பினர்களின் எண்ணிக்கை (உங்களை சேர்த்து)",
        num_family_members_placeholder: "எ.கா. 4",
        volunteer_checkbox: "AIFA e.V. நிகழ்வுகளுக்கு நான் தன்னார்வலராக இருக்கிறேன்.",
        apply_membership_button: "உறுப்பினர் விண்ணப்பிக்கவும்",
        membership_success_message: "உங்கள் உறுப்பினர் விண்ணப்பத்திற்கு நன்றி! நாங்கள் விரைவில் உங்களைத் தொடர்புகொள்வோம்.",
        faq_title: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
        faq_q1: "ஆக்கனில் இந்திய குடும்பங்களின் சங்கம் (AIFA e.V.) என்றால் என்ன?",
        faq_a1: "AIFA e.V. என்பது ஜெர்மனியின் ஆக்கனில் வசிக்கும் இந்திய குடும்பங்களுக்கு இடையே ஒரு வலுவான சமூகத்தை வளர்ப்பதற்கு அர்ப்பணிக்கப்பட்ட ஒரு இலாப நோக்கற்ற அமைப்பாகும். நாங்கள் கலாச்சார நிகழ்வுகள், சமூக ஒன்றுகூடல்கள் மற்றும் நெட்வொர்க்கிங் மற்றும் ஆதரவிற்கான ஒரு தளத்தை ஏற்பாடு செய்கிறோம்.",
        faq_q2: "நான் எப்படி உறுப்பினர் ஆக முடியும்?",
        faq_a2: "உறுப்பினர் விவரங்கள் மற்றும் விண்ணப்பப் படிவங்கள் விரைவில் எங்கள் இணையதளத்தில் கிடைக்கும். மேலும் தகவலுக்கு மீண்டும் சரிபார்க்கவும் அல்லது தொடர்பு படிவம் மூலம் எங்களைத் தொடர்பு கொள்ளவும்.",
        faq_q3: "நிகழ்வுகள் உறுப்பினர்கள் அல்லாதவர்களுக்கும் திறந்திருக்கிறதா?",
        faq_a3: "கலாச்சார பரிமாற்றம் மற்றும் சமூக கட்டமைப்பை ஊக்குவிக்க எங்கள் நிகழ்வுகளில் பல உறுப்பினர்கள் அல்லாதவர்களுக்கும் திறந்திருக்கும். சில பிரத்யேக நிகழ்வுகளுக்கு உறுப்பினர் தேவைப்படலாம். ஒவ்வொரு நிகழ்விற்கும் விவரங்கள் குறிப்பிடப்படும்.",
        faq_q4: "நான் எப்படி தன்னார்வத் தொண்டு செய்யலாம் அல்லது பங்களிக்கலாம்?",
        faq_a4: "நாங்கள் தன்னார்வலர்களை வரவேற்கிறோம்! உங்கள் நேரம் அல்லது திறன்களை பங்களிக்க நீங்கள் ஆர்வமாக இருந்தால், தயவுசெய்து தொடர்பு படிவம் மூலம் எங்களைத் தொடர்பு கொள்ளவும், மேலும் நாங்கள் வாய்ப்புகளுடன் உங்களைத் தொடர்புகொள்வோம்.",
        faq_portal_title: "தகவல் போர்டல்: ஜெர்மனியில் உள்ள இந்திய குடும்பங்களுக்கான அடிக்கடி கேட்கப்படும் கேள்விகள்",
        faq_search_placeholder: "முக்கிய வார்த்தை மூலம் அடிக்கடி கேட்கப்படும் கேள்விகளைத் தேடவும்...",
        faq_cat_aifa_title: "AIFA e.V.",
        faq_first_entry_q1: "ஜெர்மனியில் வேலை வாய்ப்பு கிடைத்த பிறகு நான் என்ன செய்ய வேண்டும்?",
        faq_first_entry_a1: "வேலை வாய்ப்பு கிடைத்த பிறகு, நீங்கள் உடனடியாக விசா விண்ணப்ப செயல்முறையைத் தொடங்க வேண்டும். உங்கள் வேலை ஒப்பந்தம், கல்விச் சான்றிதழ்கள் மற்றும் நிதி ஆதாரங்கள் உள்ளிட்ட அனைத்து தேவையான ஆவணங்களையும் சேகரிக்கவும். உங்கள் நாட்டில் உள்ள ஜெர்மன் தூதரகம் அல்லது துணைத் தூதரகத்தின் குறிப்பிட்ட தேவைகளை சரிபார்க்க அறிவுறுத்தப்படுகிறது.",
        faq_first_entry_q2: "குடும்ப மறு இணைப்பு விசாவுக்கான செயல்முறை என்ன?",
        faq_first_entry_a2: "குடும்ப மறு இணைப்பு விசா உங்கள் துணை மற்றும் சிறு குழந்தைகளுக்கு ஜெர்மனியில் உங்களுடன் சேர அனுமதிக்கிறது. முக்கிய தேவைகளில் பெரும்பாலும் போதுமான வாழ்க்கை இடம், நிதி ஆதாரங்கள் மற்றும் உங்கள் துணைக்கு அடிப்படை ஜெர்மன் மொழி திறன்கள் ஆகியவை அடங்கும். விண்ணப்பம் பொதுவாக உங்கள் சொந்த நாட்டில் உள்ள ஜெர்மன் தூதரகத்தில் தாக்கல் செய்யப்படுகிறது.",
        faq_first_entry_q3: "ஜெர்மனிக்கு நான் எவ்வளவு தங்கம்/நகைகள் கொண்டு வர முடியும்?",
        faq_first_entry_a3: "ஜெர்மனிக்கு செல்லும்போது, நகைகள் உட்பட தனிப்பட்ட பொருட்கள் பொதுவாக சுங்க வரிகளில் இருந்து விலக்கு அளிக்கப்படுகின்றன, அவை உங்கள் வீட்டுப் பொருட்களின் ஒரு பகுதியாக இருந்தால் மற்றும் நீங்கள் அவற்றை குறைந்தபட்சம் ஆறு மாதங்களுக்குப் பயன்படுத்தியிருந்தால். இருப்பினும், அதிக மதிப்புள்ள பொருட்களுக்கு, சுங்கத்தில் சிக்கல்களைத் தவிர்க்க உரிமை மற்றும் மதிப்புக்கான ஆதாரம் (எ.கா. கொள்முதல் ரசீதுகள், மதிப்பீட்டுச் சான்றிதழ்கள்) எடுத்துச் செல்ல அறிவுறுத்தப்படுகிறது. சுங்க விதிமுறைகளின்படி ஒரு குறிப்பிட்ட மதிப்புக்கு மேல் உள்ள பொருட்களை எப்போதும் அறிவிக்கவும்.",
        faq_cat_first_arrival_aachen_title: "ஆக்கெனில் முதல் வருகை",
        faq_first_arrival_aachen_q1: "விமான நிலையத்திலிருந்து ஆக்கெனை அடைய சிறந்த வழிகள் யாவை?",
        faq_first_arrival_aachen_a1: "ஆக்கென் நன்கு இணைக்கப்பட்டுள்ளது. டசெல்டார்ஃப் விமான நிலையம் (DUS) அல்லது கோலோன் பான் விமான நிலையம் (CGN) இலிருந்து, நீங்கள் நேரடியாக ஆக்கென் ஹவுப்ட் பான்ஹோஃப் (முக்கிய நிலையம்) க்கு ரயில் எடுக்கலாம். மாஸ்ட்ரிச்ட் ஆக்கென் விமான நிலையம் (MST) இலிருந்து பேருந்துகள் கிடைக்கின்றன. டாக்சிகள் மற்றும் சவாரி பகிர்வு சேவைகளும் விருப்பங்கள் ஆனால் பொதுவாக அதிக விலை கொண்டவை.",
        faq_first_arrival_aachen_q2: "ஆக்கெனில் தற்காலிக தங்குமிடத்தை நான் எங்கே காணலாம்?",
        faq_first_arrival_aachen_a2: "தற்காலிக தங்குமிடத்திற்கு, சேவை செய்யப்பட்ட அடுக்குமாடி குடியிருப்புகள், Airbnb, அல்லது குறுகிய கால வாடகைகளை கருத்தில் கொள்ளுங்கள். Booking.com, Airbnb, மற்றும் உள்ளூர் வகைப்படுத்தப்பட்ட விளம்பரங்கள் (எ.கா. WG-Gesucht.de பகிரப்பட்ட குடியிருப்புகளுக்கு, குடும்பங்களுக்கு குறைவாகவே பொதுவானது) போன்ற இணையதளங்கள் உதவியாக இருக்கும். சில ஹோட்டல்களும் நீட்டிக்கப்பட்ட தங்குமிட விருப்பங்களை வழங்குகின்றன.",
        faq_first_arrival_aachen_q3: "'அன்மெல்டுங்' என்றால் என்ன, நான் அதை எப்படி செய்வது?",
        faq_first_arrival_aachen_a3: "'அன்மெல்டுங்' என்பது உங்கள் நிரந்தர வசிப்பிடத்திற்குச் சென்ற இரண்டு வாரங்களுக்குள் உள்ளூர் அதிகாரிகளிடம் (Bürgeramt/Einwohnermeldeamt) உங்கள் வசிப்பிட முகவரியைப் பதிவுசெய்வது கட்டாயமாகும். உங்களுக்கு உங்கள் பாஸ்போர்ட், விசா மற்றும் நில உரிமையாளர் உறுதிப்படுத்தல் (Wohnungsgeberbestätigung) தேவைப்படும். வரி அடையாள அட்டை பெறுவதற்கும், வங்கிக் கணக்கைத் திறப்பதற்கும், பிற நிர்வாகப் பணிகளுக்கும் இது முக்கியமானது. முன்கூட்டியே ஆன்லைனில் சந்திப்பை முன்பதிவு செய்யவும்.",
        faq_first_arrival_aachen_q4: "ஜெர்மனியில் வங்கிக் கணக்கை நான் எப்படி திறப்பது?",
        faq_first_arrival_aachen_a4: "நீங்கள் பாரம்பரிய வங்கிகள் (எ.கா., ஸ்பார்காஸ், டாய்ச் வங்கி) அல்லது ஆன்லைன் வங்கிகள் (எ.கா., N26, காம்டைரக்ட்) மூலம் வங்கிக் கணக்கைத் திறக்கலாம். பாரம்பரிய வங்கிகளுக்கு, உங்களுக்கு பொதுவாக உங்கள் பாஸ்போர்ட், விசா/குடியிருப்பு அனுமதி மற்றும் முகவரிச் சான்று (அன்மெல்டுங் சான்றிதழ்) தேவைப்படும். ஆன்லைன் வங்கிகள் பெரும்பாலும் எளிமையான டிஜிட்டல் செயல்முறையை வழங்குகின்றன.",
        faq_cat_children_title: "குழந்தைகள்",
        faq_children_q1: "ஆக்கெனில் என் குழந்தைகளுக்கு கிடா (மழலையர் பள்ளி) அல்லது பள்ளியை நான் எப்படி கண்டுபிடிப்பது?",
        faq_children_a1: "கிடாவுக்கு, நீங்கள் பொதுவாக நகரத்தின் ஆன்லைன் போர்டல் (கிடா-நேவிகேட்டர் ஆக்கென்) வழியாக அல்லது தனிப்பட்ட கிடாக்களுடன் நேரடியாகப் பதிவு செய்யலாம். பள்ளிகளுக்கு, ஆக்கென் ஷுல்ஆம்ட் (பள்ளி அலுவலகம்) அல்லது தனிப்பட்ட பள்ளிகளைத் தொடர்பு கொள்ளவும். அதிக தேவை காரணமாக கிடாக்களுக்கு முன்கூட்டியே பதிவு செய்வது மிகவும் பரிந்துரைக்கப்படுகிறது.",
        faq_children_q2: "ஆக்கெனில் குழந்தைகளுக்கான பொழுதுபோக்கு வகுப்புகள் அல்லது விளையாட்டு கிளப்புகள் உள்ளனவா?",
        faq_children_a2: "ஆம், ஆக்கென் குழந்தைகளுக்கான பரந்த அளவிலான பொழுதுபோக்கு வகுப்புகள் மற்றும் விளையாட்டு கிளப்புகளை வழங்குகிறது. நகரத்தின் அதிகாரப்பூர்வ இணையதளம், உள்ளூர் சமூக மையங்கள் (Familienzentren), விளையாட்டு கூட்டமைப்புகள் (Stadtsportbund Aachen) வழியாக அல்லது பள்ளிகள் மற்றும் கிடாக்களில் நேரடியாக விசாரிப்பதன் மூலம் தகவல்களைக் காணலாம். விருப்பங்களில் கால்பந்து, நீச்சல், இசை, கலை மற்றும் நடனம் ஆகியவை அடங்கும்.",
        faq_cat_language_learning_title: "மொழி கற்றல்",
        faq_language_q1: "ஆக்கெனில் எந்த மொழிப் பள்ளிகள் உள்ளன?",
        faq_language_a1: "ஆக்கெனில் வோல்க்ஷோச்ஷூலே (VHS) ஆக்கென், கோதே-இன்ஸ்டிடியூட் (ஆக்கெனில் நேரடியாக இல்லை, ஆனால் அருகில் உள்ளது), மற்றும் ஸ்ப்ராச்செனகாடெமி ஆக்கென் போன்ற தனியார் மொழிப் பள்ளிகள் உட்பட பல மொழிப் பள்ளிகள் உள்ளன. அவை பல்வேறு நிலைகள் மற்றும் பாடநெறி வடிவங்களை வழங்குகின்றன.",
        faq_language_q2: "'ஒருங்கிணைப்புப் படிப்பு' என்றால் என்ன, நான் எப்படி அதில் சேர முடியும்?",
        faq_language_a2: "ஒருங்கிணைப்புப் படிப்பு (Integrationskurs) என்பது புதிய புலம்பெயர்ந்தோருக்கான ஒரு ஜெர்மன் மொழி மற்றும் நோக்குநிலைப் படிப்பு ஆகும், இது அரசு நிதியுதவி அளிக்கிறது. இது B1 ஜெர்மன் மொழி நிலை வரை உள்ளடக்கியது மற்றும் ஜெர்மன் கலாச்சாரம், வரலாறு மற்றும் சட்ட அமைப்பு பற்றிய ஒரு தொகுதியையும் உள்ளடக்கியது. நீங்கள் Bundesamt für Migration und Flüchtlinge (BAMF) மூலமாகவோ அல்லது அங்கீகரிக்கப்பட்ட மொழிப் பள்ளிகளுடன் நேரடியாகவோ விண்ணப்பிக்கலாம்.",
        faq_language_q3: "முழுநேர வேலை செய்யும் போது நான் எப்படி ஜெர்மன் கற்க முடியும்?",
        faq_language_a3: "பல மொழிப் பள்ளிகள் பணிபுரியும் நிபுணர்களுக்காக சிறப்பாக வடிவமைக்கப்பட்ட மாலை அல்லது வார இறுதிப் படிப்புகளை வழங்குகின்றன. ஆன்லைன் தளங்கள் (எ.கா. Duolingo, Babbel, Deutsche Welle), மொழி பரிமாற்றப் பங்காளிகள் மற்றும் ஜெர்மன் சக ஊழியர்கள் அல்லது நண்பர்களுடன் பயிற்சி செய்வதும் மிகவும் பயனுள்ளதாக இருக்கும். சில முதலாளிகள் உள் மொழிப் பயிற்சியையும் வழங்குகிறார்கள்.",
        faq_cat_residence_permit_title: "குடியிருப்பு அனுமதி",
        faq_residence_q1: "அடையாளம் மற்றும் விசா ஆவணமாக குடியிருப்பு அனுமதி ஏன் முக்கியமானது?",
        faq_residence_a1: "உங்கள் குடியிருப்பு அனுமதி (Aufenthaltstitel) ஜெர்மனியில் சட்டப்பூர்வ வசிப்பிடத்திற்கான உங்கள் அதிகாரப்பூர்வ சான்றாகும். இது ஜெர்மனிக்குள் உங்கள் முதன்மை அடையாள ஆவணமாக செயல்படுகிறது மற்றும் உங்கள் உரிமைகளை (எ.கா., வேலை, படிப்பு) தீர்மானிக்கிறது. இது ஜெர்மனி மற்றும் பிற ஷெங்கன் நாடுகளுக்கு மீண்டும் நுழைவதற்கான உங்கள் விசாவாகவும் செயல்படுகிறது.",
        faq_residence_q2: "முதல் முறையாக குடியிருப்பு அனுமதிக்கு நான் எப்படி விண்ணப்பிப்பது மற்றும் அதை எப்படி நீட்டிப்பது?",
        faq_residence_a2: "ஆரம்ப விண்ணப்பம் பொதுவாக உங்கள் அன்மெல்டுங் முடிந்த பிறகு ஆக்கெனில் உள்ள ஆஸ்லெண்டர்பெஹோர்டே (வெளிநாட்டவர் அலுவலகம்) இல் செய்யப்படுகிறது. உங்களுக்கு உங்கள் பாஸ்போர்ட், விசா, வேலை ஒப்பந்தம், சுகாதார காப்பீட்டு ஆதாரம் மற்றும் பிற ஆவணங்கள் தேவைப்படும். நீட்டிப்புகளுக்கு, உங்கள் தற்போதைய அனுமதி காலாவதியாகும் முன் நன்கு விண்ணப்பிக்கவும், புதுப்பிக்கப்பட்ட ஆவணங்களை வழங்கவும். சந்திப்புகள் பொதுவாக கட்டாயமாகும்.",
        faq_residence_q3: "'குடியேற்ற அனுமதி' (நிரந்தர குடியிருப்பு) க்கு நான் எப்படி விண்ணப்பிப்பது?",
        faq_residence_a3: "குடியேற்ற அனுமதி (Niederlassungserlaubnis) உங்களுக்கு நிரந்தர குடியிருப்பு வழங்குகிறது. தகுதிக்கு பொதுவாக 5 வருட சட்டப்பூர்வ வசிப்பிடம் (ப்ளூ கார்டு வைத்திருப்பவர்களுக்கு குறைவானது), போதுமான ஜெர்மன் மொழித் திறன்கள் (B1), பாதுகாப்பான வாழ்வாதாரம், போதுமான வாழ்க்கை இடம் மற்றும் ஓய்வூதியத் திட்டத்திற்கு பங்களிப்பு ஆகியவை தேவை. ஆஸ்லெண்டர்பெஹோர்டேவில் விண்ணப்பிக்கவும்.",
        faq_cat_house_hunting_title: "வீடு தேடுதல்",
        faq_house_hunting_q1: "ஆக்கெனில் நீண்ட கால குடியிருப்பை நான் எப்படி கண்டுபிடிப்பது?",
        faq_house_hunting_a1: "குடியிருப்பு வேட்டைக்கான பிரபலமான தளங்களில் ImmobilienScout24, Immowelt, மற்றும் eBay Kleinanzeigen ஆகியவை அடங்கும். நெட்வொர்க்கிங் மற்றும் உள்ளூர் ரியல் எஸ்டேட் முகவர்கள் (Makler) கூட உதவியாக இருக்கும். குறிப்பாக குடும்ப நட்பு குடியிருப்புகளுக்கு அதிக தேவை மற்றும் போட்டிக்கு தயாராக இருங்கள்.",
        faq_house_hunting_q2: "வாடகை ஒப்பந்தங்கள் (Vertrag) மற்றும் ரத்து செய்தல் (Kündigung) பற்றி நான் என்ன தெரிந்து கொள்ள வேண்டும்?",
        faq_house_hunting_a2: "ஜெர்மன் வாடகை ஒப்பந்தங்கள் (Mietvertrag) விரிவானவை. வாடகை உயர்வு, புதுப்பித்தல் கடமைகள் மற்றும் ரத்து செய்வதற்கான அறிவிப்பு காலங்கள் (பொதுவாக குத்தகைதாரர்களுக்கு 3 மாதங்கள்) தொடர்பான விதிமுறைகளில் கவனம் செலுத்துங்கள். எப்போதும் ஒப்பந்தத்தை கவனமாகப் படித்து எந்த சந்தேகங்களையும் தெளிவுபடுத்துங்கள். தேவைப்பட்டால் Mieterverein (குத்தகைதாரர்கள் சங்கம்) இடமிருந்து ஆலோசனை பெறவும்.",
        faq_house_hunting_q3: "ஒரு சொத்தை வாங்குவதில் (நோட்டார், பௌஆம்ட், ஃபினான்ஸாம்ட்) என்னென்ன அம்சங்கள் உள்ளன?",
        faq_house_hunting_a3: "ஜெர்மனியில் சொத்து வாங்குவதில் ஒரு நோட்டார் (பொது நோட்டரி) ஈடுபடுகிறார், அவர் கொள்முதல் ஒப்பந்தத்தை வரைந்து சான்றளிக்கிறார். பௌஆம்ட் (கட்டிட ஆணையம்) கட்டிட அனுமதிகள் மற்றும் விதிமுறைகளை கையாள்கிறது. ஃபினான்ஸாம்ட் (வரி அலுவலகம்) சொத்து பரிமாற்ற வரிக்கு (Grunderwerbsteuer) சம்பந்தப்பட்டுள்ளது. சிக்கலான தன்மை காரணமாக சட்ட மற்றும் நிதி ஆலோசனை மிகவும் பரிந்துரைக்கப்படுகிறது.",
        faq_cat_social_circle_title: "சமூக வட்டம்",
        faq_social_circle_q1: "ஆக்கெனில் நான் எப்படி ஒரு சமூக வட்டத்தை உருவாக்கி மற்ற இந்தியர்களைச் சந்திக்க முடியும்?",
        faq_social_circle_a1: "AIFA e.V. நிகழ்வுகளில் சேர்வது ஒரு சிறந்த தொடக்கம்! மேலும், சமூக ஊடகங்களில் (Facebook, WhatsApp) உள்ளூர் இந்திய சமூகக் குழுக்களை ஆராயுங்கள், கலாச்சார விழாக்களில் கலந்து கொள்ளுங்கள், மற்றும் பல்கலைக்கழகம் அல்லது நிறுவனத்தின் சர்வதேச குழுக்களில் பங்கேற்கவும். மொழி பரிமாற்ற சந்திப்புகளும் பல்வேறு மக்களைச் சந்திக்க நல்லது.",
        faq_social_circle_q2: "ஆக்கெனில் இந்திய சங்கங்கள் (Verein) அல்லது கலாச்சார குழுக்கள் உள்ளனவா?",
        faq_social_circle_a2: "ஆம், AIFA e.V. தவிர, மற்ற சிறிய இந்திய கலாச்சார குழுக்கள் அல்லது மாணவர் சங்கங்கள் (குறிப்பாக RWTH ஆக்கென் பல்கலைக்கழகத்தைச் சுற்றி) இருக்கலாம். 'இந்திஷர் வெரைன் ஆக்கென்' என்று ஆன்லைனில் தேடுவது அல்லது இந்திய மளிகைக் கடைகளில் அறிவிப்புப் பலகைகளைச் சரிபார்ப்பது தகவல்களை வழங்கலாம்.",
        faq_social_circle_q3: "ஆக்கெனில் நான் எப்படி பொழுதுபோக்கு மற்றும் விளையாட்டுகளைத் தொடர முடியும்?",
        faq_social_circle_a3: "ஆக்கெனில் கால்பந்து, டென்னிஸ், நீச்சல் மற்றும் நடைபயணம் போன்ற பல்வேறு நடவடிக்கைகளுக்கான ஏராளமான விளையாட்டு கிளப்புகள் (Sportvereine) உள்ளன. Hochschulsport (பல்கலைக்கழக விளையாட்டு) மாணவர்கள் மற்றும் ஊழியர்களுக்கு பல படிப்புகளை வழங்குகிறது. பொழுதுபோக்குகளுக்கு, உள்ளூர் சமூக மையங்கள் (Volkshochschule), தனியார் கிளப்புகள் அல்லது Meetup.com போன்ற ஆன்லைன் தளங்களில் ஆர்வம் சார்ந்த குழுக்களைத் தேடுங்கள்.",
        faq_cat_citizenship_title: "குடியுரிமை",
        faq_citizenship_q1: "ஜெர்மன் குடியுரிமையைப் பெறுவதற்கான செயல்முறை என்ன?",
        faq_citizenship_a1: "இயற்கைமயமாக்கலுக்கான (Einbürgerung) நிலையான செயல்முறைக்கு 8 வருட சட்டப்பூர்வ வசிப்பிடம் (சில சமயங்களில் குறைவானது, எ.கா., ஒருங்கிணைப்புப் படிப்புடன் 7 வருடங்கள், ஜெர்மன் குடிமக்களின் வாழ்க்கைத் துணைவர்களுக்கு 6 வருடங்கள்), போதுமான ஜெர்மன் மொழித் திறன்கள் (B1/B2), இயற்கைமயமாக்கல் தேர்வில் தேர்ச்சி பெறுதல், மற்றும் பொதுவாக உங்கள் முந்தைய குடியுரிமையைத் துறப்பது ஆகியவை தேவை (இந்தியா பெரியவர்களுக்கு இரட்டைக் குடியுரிமையை அனுமதிப்பதில்லை).",
        faq_citizenship_q2: "இந்திய பாஸ்போர்ட்டை ஒப்படைத்து OCI கார்டைப் பெறுவதற்கான செயல்முறை என்ன?",
        faq_citizenship_a2: "ஜெர்மன் குடியுரிமையைப் பெற்றவுடன், உங்கள் இந்திய பாஸ்போர்ட்டை இந்திய தூதரகம்/துணைத் தூதரகத்தில் ஒப்படைக்க வேண்டும். பின்னர் உங்களுக்கு 'ஒப்படைப்புச் சான்றிதழ்' கிடைக்கும். அதன்பிறகு, நீங்கள் வெளிநாட்டு இந்தியக் குடிமகன் (OCI) அட்டைக்கு விண்ணப்பிக்கலாம், இது இந்தியாவிற்கு வாழ்நாள் முழுவதும் விசா இல்லாத பயணத்தையும் பிற நன்மைகளையும் வழங்குகிறது. விண்ணப்ப செயல்முறை இந்திய அரசு போர்டல் வழியாக ஆன்லைனில் உள்ளது.",        
        contact_title: "தொடர்புக்கு",
        contact_intro: "கேள்விகள் உள்ளதா அல்லது தொடர்புகொள்ள விரும்புகிறீர்களா? கீழே உள்ள படிவத்தை நிரப்பவும், நாங்கள் விரைவில் உங்களைத் தொடர்புகொள்வோம்.",
        your_name_label: "உங்கள் பெயர்",
        your_name_placeholder: "ஜான் டோ",
        your_email_label: "உங்கள் மின்னஞ்சல்",
        your_email_placeholder: "john.doe@example.com",
        subject_label: "தலைப்பு",
        subject_placeholder: "உறுப்பினர் பற்றிய விசாரணை",
        message_label: "செய்தி",
        message_placeholder: "உங்கள் செய்தியை இங்கே எழுதவும்...",
        send_message_button: "செய்தி அனுப்பவும்",
        contact_success_message: "உங்கள் செய்திக்கு நன்றி! நாங்கள் விரைவில் உங்களைத் தொடர்புகொள்வோம்.",
        site_title_event_registration: "ஆக்கெனில் உள்ள இந்திய குடும்பங்களின் சங்கம் - நிகழ்வு பதிவு",
        event_reg_title: "நிகழ்வு பதிவு",
        event_reg_intro: "எங்கள் வரவிருக்கும் நிகழ்வுகளுக்குப் பதிவு செய்ய, கீழே உள்ள படிவத்தை நிரப்பவும்.",
        event_reg_select_event_label: "நிகழ்வைத் தேர்ந்தெடுக்கவும்",
        event_reg_select_event_placeholder: "ஒரு நிகழ்வைத் தேர்ந்தெடுக்கவும்",
        event_reg_summer_picnic_option: "கோடைக்கால குடும்ப சுற்றுலா (ஜூலை 20, 2024)",
        event_reg_dandiya_option: "தாண்டியா கொண்டாட்டங்கள் 2025 (அக்டோபர் 2, 2025)",
        event_reg_num_attendees_label: "பங்கேற்பாளர்களின் எண்ணிக்கை",
        event_reg_dietary_notes_label: "உணவுக் கட்டுப்பாடுகள் / சிறப்பு குறிப்புகள் (விரும்பினால்)",
        event_reg_dietary_notes_placeholder: "எ.கா. சைவ உணவு, பசையம் இல்லாதது, சக்கர நாற்காலி அணுகல் தேவை",
        event_reg_submit_button: "நிகழ்வுக்குப் பதிவு செய்யவும்",
        event_reg_success_message: "நிகழ்வுக்குப் பதிவு செய்ததற்கு நன்றி! உங்களைச் சந்திக்க ஆவலுடன் காத்திருக்கிறோம்.",
        event_reg_error_message: "நிகழ்வுக்குப் பதிவு செய்யும் போது பிழை ஏற்பட்டது. மீண்டும் முயற்சிக்கவும்.",
        data_protection_title: "தரவுப் பாதுகாப்பு கொள்கை",
        data_protection_p1: "சங்கம் அதன் உறுப்பினர்களின் தனிப்பட்ட தரவுகளை சங்கத்தின் அரசியலமைப்பின் கீழ் அனுமதிக்கப்பட்ட நோக்கங்களையும் பணிகளையும் நிறைவேற்றுவதற்காக சேகரிக்கிறது, செயலாக்குகிறது மற்றும் பயன்படுத்துகிறது.",
        data_protection_p2: "சங்கம் தனக்கும்/அல்லது அதன் உறுப்பினர்களுக்கும் பலன்களைப் பெறுவதற்காக காப்பீட்டு பாலிசிகளை ஏற்பாடு செய்யலாம். காப்பீட்டு பாலிசிகளுக்கான ஒப்பந்தங்களைச் செயல்படுத்த அல்லது முடிவுக்குக் கொண்டுவர, சங்கம் அதன் உறுப்பினர்களின் தனிப்பட்ட தரவுகளை தேவையான அளவிற்கு பொறுப்பான காப்பீட்டு நிறுவனத்திற்கு அனுப்புகிறது.",
        data_protection_p3: "அரசியலமைப்பில் குறிப்பிடப்பட்டுள்ள பொது அல்லது தனியார் நிகழ்வுகள் மற்றும் பிற நடவடிக்கைகளுடன் தொடர்புடையதாக, சங்கம் அதன் உறுப்பினர்களின் பெயர்கள் மற்றும் புகைப்படங்களை அதன் முகப்புப் பக்கத்தில் வெளியிடுகிறது மற்றும் அச்சு மற்றும் தொலைத்தொடர்பு ஊடகங்களுக்கும், மின்னணு ஊடகங்களுக்கும் வெளியீட்டிற்காக பெயர்கள் மற்றும் புகைப்படங்களை அனுப்புகிறது. ஒரு உறுப்பினர் தங்களின் தனிப்பட்ட புகைப்படங்களை வெளியிடுவதற்கு எந்த நேரத்திலும் நிர்வாகக் குழுவிடம் ஆட்சேபிக்கலாம். ஆட்சேபனை பெறப்பட்டவுடன், வெளியீடு/அனுப்புதல் நிறுத்தப்படும் மற்றும் சங்கம் அதன் முகப்புப் பக்கத்திலிருந்து ஏற்கனவே உள்ள புகைப்படங்களை அகற்றும்.",
        data_protection_p4: "அவர்களின் உறுப்பினர் மற்றும் இந்த அரசியலமைப்பின் தொடர்புடைய அங்கீகாரத்தின் மூலம், உறுப்பினர்கள் தங்கள் தனிப்பட்ட தரவுகளை மேலே குறிப்பிடப்பட்ட அளவு மற்றும் நோக்கத்தில் சேகரித்தல், செயலாக்குதல் மற்றும் பயன்படுத்துவதற்கு ஒப்புக்கொள்கிறார்கள். சங்கம் அதன் சட்டப்பூர்வ கடமைகள் மற்றும் நோக்கங்களை நிறைவேற்றுவதைத் தவிர வேறு நோக்கங்களுக்காக தரவுகளைப் பயன்படுத்த சட்டப்பூர்வமாக கடமைப்பட்டிருந்தால் மட்டுமே அனுமதிக்கப்படுகிறது. தரவுகளை விற்க முடியாது.",
        data_protection_p5: "ஒவ்வொரு உறுப்பினரும் உறுப்பினர் பட்டியலில் ஒரு பகுதியாக அவர்களுக்குக் கிடைக்கும் தரவுகளை ரகசியமாக வைத்திருக்க பொறுப்பேற்கிறார். சங்கத்தின் அனைத்து நிதி விஷயங்களுக்கும் இது பொருந்தும்.",
        data_protection_p6: "உறுப்பினர்களின் தனிப்பட்ட தரவுகளை எந்த வணிக அல்லது வணிகம் அல்லாத நோக்கங்களுக்காகவும் மூன்றாம் தரப்பினருக்கு வெளியிட மாட்டோம் என்று நாங்கள் உறுதியளிக்கிறோம். தரவு பயன்பாடு குறித்த மேலும் விவரங்களுக்கு, எங்கள் பொது தரவுப் பாதுகாப்பு கொள்கையை இங்கே பார்க்கவும் (<a href=\"https://www.aifaev.de\" class=\"text-blue-600 hover:underline\" target=\"_blank\">www.aifaev.de</a>)"        
    },
    bn: { // Bangla
        site_title_home: "আকেন-এ ভারতীয় পরিবার সমিতি - হোম",
        site_title_about: "আকেন-এ ভারতীয় পরিবার সমিতি - আমাদের সম্পর্কে",
        site_title_events: "আকেন-এ ভারতীয় পরিবার সমিতি - ইভেন্ট",
        site_title_membership: "আকেন-এ ভারতীয় পরিবার সমিতি - সদস্যপদ",
        site_title_faq: "আকেন-এ ভারতীয় পরিবার সমিতি - সাধারণ জিজ্ঞাসা",
        site_title_contact: "আকেন-এ ভারতীয় পরিবার সমিতি - যোগাযোগ",
        site_title_data_protection: "আকেন-এ ভারতীয় পরিবার সমিতি - ডেটা সুরক্ষা নীতি",        
        nav_home: "হোম",
        nav_about: "আমাদের সম্পর্কে",
        nav_events: "ইভেন্ট",
        nav_membership: "সদস্যপদ",
        nav_faq: "সাধারণ জিজ্ঞাসা",
        nav_contact: "যোগাযোগ",
        nav_event_registration: "ইভেন্ট নিবন্ধন", // NEW NAV KEY        
        home_main_title: "আকেন-এ ভারতীয় পরিবার সমিতি",
        home_tagline: "আকেন-এ ভারতীয় পরিবারদের সংযুক্ত করা, সম্প্রদায়কে লালন করা এবং আমাদের সমৃদ্ধ সংস্কৃতি উদযাপন করা।",
        home_explore_events: "ইভেন্টগুলি অন্বেষণ করুন",
        footer_copyright: "&copy; 2025 আকেন-এ ভারতীয় পরিবার সমিতি। e.V. নিবন্ধন নম্বর VR 6590(Amtsgericht Aachen). সর্বস্বত্ব সংরক্ষিত।",
        footer_data_protection_policy: "ডেটা সুরক্ষা নীতি",
        footer_terms: "পরিষেবার শর্তাবলী",
        lang_en: "English",
        lang_de: "Deutsch",
        lang_hi: "हिन्दी",
        lang_mr: "मराठी",
        lang_te: "తెలుగు",
        lang_ta: "தமிழ்",
        lang_bn: "বাংলা",
        lang_pa: "ਪੰਜਾਬੀ",
        lang_kn: "ಕನ್ನಡ",
        lang_ml: "മലയാളം",
        lang_or: "ଓଡ଼ିଆ",
        lang_gu: "ગુજરાતી",
        lang_sa: "संस्कृतम्",
        lang_mai: "मैथिली",
        about_title: "আমাদের সমিতি সম্পর্কে",
        about_para1: "আকেন-এ ভারতীয় পরিবার সমিতি (AIFA e.V.) হল একটি অলাভজনক সংস্থা যা জার্মানির আকেন-এ বসবাসকারী ভারতীয় পরিবারগুলিকে একত্রিত করার জন্য নিবেদিত। আমাদের লক্ষ্য হল একটি প্রাণবন্ত এবং সহায়ক সম্প্রদায় তৈরি করা যেখানে সাংস্কৃতিক ঐতিহ্য উদযাপন করা হয়, ঐতিহ্য সংরক্ষণ করা হয় এবং নতুন বন্ধুত্ব গড়ে তোলা হয়।",
        about_para2: "আমরা সারা বছর ধরে বিভিন্ন অনুষ্ঠানের আয়োজন করি, যার মধ্যে সাংস্কৃতিক উৎসব এবং সামাজিক সমাবেশ থেকে শুরু করে শিক্ষামূলক কর্মশালা এবং সম্প্রদায় পরিষেবা উদ্যোগ রয়েছে। আমাদের লক্ষ্য হল ভারতীয় পরিবারগুলির জন্য বাড়ি থেকে দূরে একটি বাড়ি সরবরাহ করা, তাদের স্থানীয় সম্প্রদায়ে একত্রিত হতে সাহায্য করা এবং তাদের শিকড়ের সাথে সংযুক্ত রাখা।",
        about_para3: "আমাদের সম্প্রদায়ের উষ্ণতা অনুভব করতে, উত্তেজনাপূর্ণ ইভেন্টগুলিতে অংশগ্রহণ করতে এবং আকেন-এ একটি শক্তিশালী এবং সুসংহত ভারতীয় প্রবাস তৈরি করতে আমাদের সাথে যোগ দিন।",
        events_title: "আমাদের ইভেন্ট",
        event_diwali_title: "দীপাবলি উদযাপন 2023",
        event_diwali_date: "অক্টোবর 28, 2023",
        event_diwali_desc: "সাংস্কৃতিক পরিবেশনা, সুস্বাদু খাবার এবং আতশবাজি সহ আলোর উৎসবের একটি গ্র্যান্ড উদযাপন। পরিবারগুলি একসাথে একটি স্মরণীয় সন্ধ্যা উপভোগ করেছে।",
        event_diwali_status: "পূর্ববর্তী ইভেন্ট",
        event_summer_title: "গ্রীষ্মকালীন পারিবারিক পিকনিক",
        event_summer_date: "জুলাই 20, 2024",
        event_summer_desc: "খেলাধুলা, খাবার এবং বাইরের কার্যকলাপ সহ ওয়েস্টপার্কে একটি মজাদার পারিবারিক পিকনিকের জন্য আমাদের সাথে যোগ দিন। আপনার পিকনিক ঝুড়ি ভুলবেন না!",
        event_summer_status: "বর্তমান ইভেন্ট",
        event_dandiya_title: "দাওয়াতী উদযাপন 2025",
        event_dandiya_date: "অক্টোবর 2, 2025",
        event_dandiya_desc: "ঘুরতে এবং নাচতে প্রস্তুত হন! ঐতিহ্যবাহী সঙ্গীত, রঙিন পোশাক এবং শক্তিশালী নাচের চাল সহ উৎসবের চেতনা উদযাপন করে একটি প্রাণবন্ত দাওয়াতী এবং গরবা রাতের জন্য আমাদের সাথে যোগ দিন। স্থান এবং কার্যকলাপ সম্পর্কে আরও বিস্তারিত শীঘ্রই ঘোষণা করা হবে।",
        event_dandiya_status: "ভবিষ্যত ইভেন্ট",
        events_view_all: "সমস্ত ইভেন্ট দেখুন",
        events_register_now: "ইভেন্টের জন্য নিবন্ধন করুন", // NEW BUTTON TEXT        
        membership_title: "সদস্য হন",
        membership_intro: "আকেন-এ ভারতীয় পরিবার সমিতি (AIFA e.V.)-এ যোগ দিন এবং আমাদের ক্রমবর্ধমান সম্প্রদায়ের অংশ হন! আপনার সদস্যপদ আমাদের উত্তেজনাপূর্ণ ইভেন্টগুলি আয়োজন করতে এবং আকেন-এর ভারতীয় পরিবারগুলিকে সমর্থন করতে সহায়তা করে।",
        membership_individual_title: "একক সদস্যপদ",
        membership_individual_price: "€30",
        membership_individual_per_year: "/ বছর",
        membership_individual_desc: "সংযোগ করতে ইচ্ছুক একক ব্যক্তিদের জন্য উপযুক্ত।",
        membership_family_title: "পারিবারিক সদস্যপদ",
        membership_family_price: "€50",
        membership_family_per_year: "/ বছর",
        membership_family_desc: "একক পরিবারের সকল সদস্যকে কভার করে।",
        membership_form_title: "সদস্যপদ আবেদন ফর্ম",
        membership_type_label: "সদস্যপদ প্রকার",
        membership_type_select_option: "একটি সদস্যপদ প্রকার নির্বাচন করুন",
        membership_type_individual_option: "একক সদস্যপদ (€30/বছর)",
        membership_type_family_option: "পারিবারিক সদস্যপদ (€50/বছর)",
        first_name_label: "প্রথম নাম",
        first_name_placeholder: "জন",
        last_name_label: "শেষ নাম",
        last_name_placeholder: "ডো",
        num_family_members_label: "পরিবারের সদস্য সংখ্যা (নিজেকে সহ)",
        num_family_members_placeholder: "যেমন, 4",
        volunteer_checkbox: "আমি AIFA e.V. ইভেন্টগুলির জন্য স্বেচ্ছাসেবক হিসাবে উপলব্ধ।",
        apply_membership_button: "সদস্যপদ আবেদন করুন",
        membership_success_message: "আপনার সদস্যপদ আবেদনের জন্য ধন্যবাদ! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।",
        faq_title: "সাধারণ জিজ্ঞাসা",
        faq_q1: "আকেন-এ ভারতীয় পরিবার সমিতি (AIFA e.V.) কি?",
        faq_a1: "AIFA e.V. হল একটি অলাভজনক সংস্থা যা জার্মানির আকেন-এ বসবাসকারী ভারতীয় পরিবারগুলির মধ্যে একটি শক্তিশালী সম্প্রদায় গড়ে তোলার জন্য নিবেদিত। আমরা সাংস্কৃতিক অনুষ্ঠান, সামাজিক সমাবেশ এবং নেটওয়ার্কিং ও সমর্থনের জন্য একটি প্ল্যাটফর্মের আয়োজন করি।",
        faq_q2: "আমি কিভাবে সদস্য হতে পারি?",
        faq_a2: "সদস্যপদ বিবরণ এবং আবেদন ফর্ম শীঘ্রই আমাদের ওয়েবসাইটে উপলব্ধ হবে। আরও তথ্যের জন্য অনুগ্রহ করে আবার দেখুন অথবা যোগাযোগ ফর্মের মাধ্যমে আমাদের সাথে যোগাযোগ করুন।",
        faq_q3: "ইভেন্টগুলি অ-সদস্যদের জন্য খোলা আছে কি?",
        faq_a3: "সাংস্কৃতিক আদান-প্রদান এবং সম্প্রদায় গঠনের প্রচারের জন্য আমাদের বেশিরভাগ ইভেন্ট অ-সদস্যদের জন্য উন্মুক্ত। কিছু বিশেষ ইভেন্টের জন্য সদস্যপদ প্রয়োজন হতে পারে। প্রতিটি ইভেন্টের জন্য বিস্তারিত উল্লেখ করা হবে।",
        faq_q4: "আমি কিভাবে স্বেচ্ছাসেবক বা অবদান রাখতে পারি?",
        faq_a4: "আমরা স্বেচ্ছাসেবকদের স্বাগত জানাই! আপনি যদি আপনার সময় বা দক্ষতা অবদান রাখতে আগ্রহী হন, তাহলে অনুগ্রহ করে যোগাযোগ ফর্মের মাধ্যমে আমাদের সাথে যোগাযোগ করুন, এবং আমরা সুযোগগুলি নিয়ে আপনার সাথে যোগাযোগ করব।",
        faq_portal_title: "তথ্য পোর্টাল: জার্মানিতে ভারতীয় পরিবারগুলির জন্য প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী",
        faq_search_placeholder: "কীওয়ার্ড দ্বারা প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী অনুসন্ধান করুন...",
        faq_cat_aifa_title: "AIFA e.V.",
        faq_first_entry_q1: "জার্মানিতে চাকরির প্রস্তাব পাওয়ার পর আমার কী করা উচিত?",
        faq_first_entry_a1: "চাকরির প্রস্তাব পাওয়ার পর, আপনার অবিলম্বে ভিসা আবেদন প্রক্রিয়া শুরু করা উচিত। আপনার কর্মসংস্থান চুক্তি, একাডেমিক সার্টিফিকেট এবং তহবিলের প্রমাণ সহ সমস্ত প্রয়োজনীয় নথি সংগ্রহ করুন। আপনার দেশে জার্মান দূতাবাস বা কনস্যুলেটের নির্দিষ্ট প্রয়োজনীয়তা পরীক্ষা করা বাঞ্ছনীয়।",
        faq_first_entry_q2: "পরিবার পুনর্মিলন ভিসার প্রক্রিয়া কী?",
        faq_first_entry_a2: "পরিবার পুনর্মিলন ভিসা আপনার স্বামী/স্ত্রী এবং নাবালক শিশুদের জার্মানিতে আপনার সাথে যোগদানের অনুমতি দেয়। মূল প্রয়োজনীয়তাগুলির মধ্যে প্রায়শই পর্যাপ্ত জীবনযাত্রার স্থান, আর্থিক সংস্থান এবং আপনার স্বামী/স্ত্রীর জন্য মৌলিক জার্মান ভাষা দক্ষতার প্রমাণ অন্তর্ভুক্ত থাকে। আবেদন সাধারণত আপনার নিজ দেশের জার্মান দূতাবাসে দাখিল করা হয়।",
        faq_first_entry_q3: "আমি জার্মানিতে কত সোনা/গহনা আনতে পারি?",
        faq_first_entry_a3: "জার্মানিতে স্থানান্তরিত হওয়ার সময়, গহনা সহ ব্যক্তিগত জিনিসপত্র সাধারণত শুল্কমুক্ত থাকে যদি সেগুলি আপনার গৃহস্থালীর জিনিসপত্রের অংশ হয় এবং আপনি সেগুলি কমপক্ষে ছয় মাস ধরে ব্যবহার করে থাকেন। তবে, উচ্চ-মূল্যের জিনিসপত্রের জন্য, শুল্কের সাথে সমস্যা এড়াতে মালিকানা এবং মূল্যের প্রমাণ (যেমন, ক্রয়ের রসিদ, মূল্যায়ন শংসাপত্র) বহন করার পরামর্শ দেওয়া হয়। শুল্ক বিধিমালা অনুযায়ী একটি নির্দিষ্ট মূল্যের উপরে থাকা জিনিসপত্র সর্বদা ঘোষণা করুন।",
        faq_cat_first_arrival_aachen_title: "আকেন-এ প্রথম আগমন",
        faq_first_arrival_aachen_q1: "বিমানবন্দর থেকে আকেন পৌঁছানোর সেরা উপায়গুলি কী কী?",
        faq_first_arrival_aachen_a1: "আকেন সুসংযুক্ত। ডুসেলডর্ফ বিমানবন্দর (DUS) বা কোলোন বন বিমানবন্দর (CGN) থেকে, আপনি সরাসরি আকেন হাউপৎবানহফ (প্রধান স্টেশন) পর্যন্ত ট্রেন নিতে পারেন। মাস্ত্রিচ আকেন বিমানবন্দর (MST) থেকে বাস পাওয়া যায়। ট্যাক্সি এবং রাইড-শেয়ারিং পরিষেবাগুলিও বিকল্প তবে সাধারণত বেশি ব্যয়বহুল।",
        faq_first_arrival_aachen_q2: "আকেন-এ আমি কোথায় অস্থায়ী আবাসন খুঁজে পেতে পারি?",
        faq_first_arrival_aachen_a2: "অস্থায়ী আবাসনের জন্য, সার্ভিসড অ্যাপার্টমেন্ট, এয়ারবিএনবি, বা স্বল্পমেয়াদী ভাড়ার কথা বিবেচনা করুন। Booking.com, Airbnb, এবং স্থানীয় শ্রেণীবদ্ধ বিজ্ঞাপন (যেমন, WG-Gesucht.de শেয়ার্ড ফ্ল্যাটের জন্য, যদিও পরিবারের জন্য কম সাধারণ) এর মতো ওয়েবসাইটগুলি সহায়ক হতে পারে। কিছু হোটেলও বর্ধিত থাকার বিকল্প সরবরাহ করে।",
        faq_first_arrival_aachen_q3: "'আনমেডুং' কী এবং আমি এটি কীভাবে করব?",
        faq_first_arrival_aachen_a3: "'আনমেডুং' হল আপনার স্থায়ী বাসস্থানে যাওয়ার দুই সপ্তাহের মধ্যে স্থানীয় কর্তৃপক্ষের (Bürgeramt/Einwohnermeldeamt) কাছে আপনার আবাসিক ঠিকানা বাধ্যতামূলকভাবে নিবন্ধন করা। আপনার পাসপোর্ট, ভিসা এবং বাড়িওয়ালার নিশ্চিতকরণ (Wohnungsgeberbestätigung) প্রয়োজন হবে। ট্যাক্স আইডি পেতে, ব্যাংক অ্যাকাউন্ট খুলতে এবং অন্যান্য প্রশাসনিক কাজের জন্য এটি অত্যন্ত গুরুত্বপূর্ণ। আগে থেকে অনলাইনে অ্যাপয়েন্টমেন্ট বুক করুন।",
        faq_first_arrival_aachen_q4: "আমি জার্মানিতে কীভাবে একটি ব্যাংক অ্যাকাউন্ট খুলব?",
        faq_first_arrival_aachen_a4: "আপনি ঐতিহ্যবাহী ব্যাংকগুলিতে (যেমন, স্পার্কাস, ডয়েচে ব্যাংক) বা অনলাইন ব্যাংকগুলিতে (যেমন, N26, কমডাইরেক্ট) একটি ব্যাংক অ্যাকাউন্ট খুলতে পারেন। ঐতিহ্যবাহী ব্যাংকগুলির জন্য, আপনার সাধারণত আপনার পাসপোর্ট, ভিসা/রেসিডেন্স পারমিট এবং ঠিকানার প্রমাণ (আনমেডুং সার্টিফিকেট) প্রয়োজন হবে। অনলাইন ব্যাংকগুলি প্রায়শই একটি সহজ ডিজিটাল প্রক্রিয়া সরবরাহ করে।",
        faq_cat_children_title: "শিশু",
        faq_children_q1: "আকেন-এ আমার বাচ্চাদের জন্য কিটা (কিন্ডারগার্টেন) বা স্কুল কীভাবে খুঁজে পাব?",
        faq_children_a1: "কিটার জন্য, আপনি সাধারণত শহরের অনলাইন পোর্টাল (কিটা-নেভিগেটর আকেন) এর মাধ্যমে বা সরাসরি পৃথক কিটার সাথে নিবন্ধন করেন। স্কুলগুলির জন্য, আকেন-এর শুলামট (স্কুল অফিস) বা পৃথক স্কুলগুলির সাথে যোগাযোগ করুন। উচ্চ চাহিদার কারণে কিটাগুলির জন্য তাড়াতাড়ি নিবন্ধন করার জন্য অত্যন্ত সুপারিশ করা হয়।",
        faq_children_q2: "আকেন-এ শিশুদের জন্য কোনো শখের ক্লাস বা স্পোর্টস ক্লাব আছে কি?",
        faq_children_a2: "হ্যাঁ, আকেন শিশুদের জন্য বিভিন্ন ধরণের শখের ক্লাস এবং স্পোর্টস ক্লাব সরবরাহ করে। আপনি শহরের অফিসিয়াল ওয়েবসাইট, স্থানীয় কমিউনিটি সেন্টার (ফ্যামিলিয়েনজেনট্রেন), স্পোর্টস ফেডারেশন (স্টাড্টস্পোর্টসবুন্ড আকেন) এর মাধ্যমে বা সরাসরি স্কুল এবং কিটাতে জিজ্ঞাসা করে তথ্য পেতে পারেন। বিকল্পগুলির মধ্যে ফুটবল, সাঁতার, সঙ্গীত, শিল্প এবং নৃত্য অন্তর্ভুক্ত।",
        faq_cat_language_learning_title: "ভাষা শিক্ষা",
        faq_language_q1: "আকেন-এ কোন ভাষা স্কুলগুলি উপলব্ধ?",
        faq_language_a1: "আকেন-এ বেশ কয়েকটি ভাষা স্কুল রয়েছে যার মধ্যে ভল্কশোসশুলে (VHS) আকেন, গোয়েথে-ইনস্টিটিউট (যদিও সরাসরি আকেন-এ নয়, কাছাকাছি), এবং স্প্রাচ্ছেনাকাডেমি আকেন-এর মতো ব্যক্তিগত ভাষা স্কুলগুলি অন্তর্ভুক্ত। তারা বিভিন্ন স্তর এবং কোর্সের বিন্যাস অফার করে।",
        faq_language_q2: "'ইন্টিগ্রেশন কোর্স' কী এবং আমি কীভাবে এতে যোগ দিতে পারি?",
        faq_language_a2: "একটি ইন্টিগ্রেশন কোর্স (ইন্টিগ্রেশনস্কুর্স) হল নতুন অভিবাসীদের জন্য একটি জার্মান ভাষা এবং ওরিয়েন্টেশন কোর্স, যা আংশিকভাবে সরকার দ্বারা অর্থায়ন করা হয়। এটি B1 জার্মান ভাষা স্তর পর্যন্ত কভার করে এবং জার্মান সংস্কৃতি, ইতিহাস এবং আইনি ব্যবস্থা সম্পর্কে একটি মডিউল অন্তর্ভুক্ত করে। আপনি বুন্ডেসামট ফুর মাইগ্রেশন উনড ফ্লুচটলিংগে (BAMF) এর মাধ্যমে বা সরাসরি অনুমোদিত ভাষা স্কুলগুলির সাথে আবেদন করতে পারেন।",
        faq_language_q3: "পূর্ণকালীন কাজ করার সময় আমি কীভাবে জার্মান শিখতে পারি?",
        faq_language_a3: "অনেক ভাষা স্কুল বিশেষত কর্মরত পেশাদারদের জন্য ডিজাইন করা সন্ধ্যা বা সাপ্তাহিক ছুটির দিনের কোর্স সরবরাহ করে। অনলাইন প্ল্যাটফর্ম (যেমন, ডুওলিঙ্গো, বাবেল, ডয়েচে ভেলে), ভাষা বিনিময় অংশীদার এবং জার্মান সহকর্মী বা বন্ধুদের সাথে অনুশীলন করাও খুব কার্যকর হতে পারে। কিছু নিয়োগকর্তা ইন-হাউস ভাষা প্রশিক্ষণও সরবরাহ করে।",
        faq_cat_residence_permit_title: "রেসিডেন্স পারমিট",
        faq_residence_q1: "পরিচয় এবং ভিসা নথি হিসাবে রেসিডেন্স পারমিট কেন গুরুত্বপূর্ণ?",
        faq_residence_a1: "আপনার রেসিডেন্স পারমিট (আউফেনথাল্টস্টিটেল) জার্মানিতে আপনার আইনি বসবাসের অফিসিয়াল প্রমাণ। এটি জার্মানিতে আপনার প্রাথমিক পরিচয় নথি হিসাবে কাজ করে এবং আপনার অধিকার (যেমন, কাজ, অধ্যয়ন) নির্ধারণ করে। এটি জার্মানি এবং অন্যান্য শেনজেন দেশগুলিতে পুনরায় প্রবেশের জন্য আপনার ভিসা হিসাবেও কাজ করে।",
        faq_residence_q2: "আমি প্রথমবার রেসিডেন্স পারমিটের জন্য কীভাবে আবেদন করব এবং এটি কীভাবে বাড়াব?",
        faq_residence_a2: "প্রাথমিক আবেদন সাধারণত আপনার আনমেডুং সম্পন্ন করার পর আকেন-এর আউস্ল্যান্ডারবেহর্ডে (বিদেশী অফিস) এ করা হয়। আপনার পাসপোর্ট, ভিসা, কর্মসংস্থান চুক্তি, স্বাস্থ্য বীমার প্রমাণ এবং অন্যান্য নথি প্রয়োজন হবে। এক্সটেনশনের জন্য, আপনার বর্তমান পারমিটের মেয়াদ শেষ হওয়ার অনেক আগে আবেদন করুন, আপডেটেড নথি সরবরাহ করুন। অ্যাপয়েন্টমেন্ট সাধারণত বাধ্যতামূলক।",
        faq_residence_q3: "আমি কীভাবে 'সেটেলমেন্ট পারমিট' (স্থায়ী রেসিডেন্স) এর জন্য আবেদন করব?",
        faq_residence_a3: "একটি সেটেলমেন্ট পারমিট (নিডারলাসুংসেরলাউবনইস) আপনাকে স্থায়ী রেসিডেন্স প্রদান করে। যোগ্যতার জন্য সাধারণত 5 বছরের আইনি রেসিডেন্স (ব্লু কার্ড ধারকদের জন্য কম), পর্যাপ্ত জার্মান ভাষা দক্ষতা (B1), নিরাপদ জীবিকা, পর্যাপ্ত জীবনযাত্রার স্থান এবং পেনশন স্কিমে অবদান প্রয়োজন। আউস্ল্যান্ডারবেহর্ডেতে আবেদন করুন।",
        faq_cat_house_hunting_title: "ঘর খোঁজা",
        faq_house_hunting_q1: "আকেন-এ আমি কীভাবে একটি দীর্ঘমেয়াদী অ্যাপার্টমেন্ট খুঁজে পাব?",
        faq_house_hunting_a1: "অ্যাপার্টমেন্ট খোঁজার জনপ্রিয় প্ল্যাটফর্মগুলির মধ্যে রয়েছে ImmobilienScout24, Immowelt, এবং eBay Kleinanzeigen। নেটওয়ার্কিং এবং স্থানীয় রিয়েল এস্টেট এজেন্ট (Makler) ও সহায়ক হতে পারে। বিশেষ করে পরিবার-বান্ধব অ্যাপার্টমেন্টের জন্য উচ্চ চাহিদা এবং প্রতিযোগিতার জন্য প্রস্তুত থাকুন।",
        faq_house_hunting_q2: "ভাড়ার চুক্তি (Vertrag) এবং সমাপ্তি (Kündigung) সম্পর্কে আমার কী জানা উচিত?",
        faq_house_hunting_a2: "জার্মান ভাড়ার চুক্তি (Mietvertrag) ব্যাপক হয়। ভাড়া বৃদ্ধি, সংস্কারের কর্তব্য এবং সমাপ্তির জন্য নোটিশ পিরিয়ড (সাধারণত ভাড়াটেদের জন্য 3 মাস) সম্পর্কিত ধারাগুলিতে মনোযোগ দিন। সর্বদা চুক্তিটি সাবধানে পড়ুন এবং যেকোনো সন্দেহ স্পষ্ট করুন। প্রয়োজনে Mieterverein (ভাড়াটেদের সমিতি) থেকে পরামর্শ নিন।",
        faq_house_hunting_q3: "একটি সম্পত্তি কেনার (নোটার, বাউআমট, ফিনানজামট) সাথে কী জড়িত?",
        faq_house_hunting_a3: "জার্মানিতে সম্পত্তি কেনার সাথে একজন নোটার (পাবলিক নোটারি) জড়িত থাকেন যিনি ক্রয় চুক্তিটি খসড়া তৈরি করেন এবং প্রত্যয়ন করেন। বাউআমট (বিল্ডিং অথরিটি) বিল্ডিং পারমিট এবং নিয়মাবলী পরিচালনা করে। ফিনানজামট (ট্যাক্স অফিস) সম্পত্তি স্থানান্তর করের (Grunderwerbsteuer) জন্য জড়িত। জটিলতার কারণে আইনি এবং আর্থিক পরামর্শ অত্যন্ত সুপারিশ করা হয়।",
        faq_cat_social_circle_title: "সামাজিক বৃত্ত",
        faq_social_circle_q1: "আকেন-এ আমি কীভাবে একটি সামাজিক বৃত্ত তৈরি করতে এবং অন্যান্য ভারতীয়দের সাথে দেখা করতে পারি?",
        faq_social_circle_a1: "AIFA e.V. ইভেন্টগুলিতে যোগদান একটি দুর্দান্ত শুরু! এছাড়াও, সোশ্যাল মিডিয়ায় (ফেসবুক, হোয়াটসঅ্যাপ) স্থানীয় ভারতীয় কমিউনিটি গ্রুপগুলি অন্বেষণ করুন, সাংস্কৃতিক উত্সবগুলিতে অংশ নিন এবং বিশ্ববিদ্যালয় বা কোম্পানির আন্তর্জাতিক গ্রুপগুলিতে অংশগ্রহণ করুন। ভাষা বিনিময় মিটআপগুলিও বিভিন্ন লোকের সাথে দেখা করার জন্য ভাল।",
        faq_social_circle_q2: "আকেন-এ কোনো ভারতীয় সমিতি (Verein) বা সাংস্কৃতিক গোষ্ঠী আছে কি?",
        faq_social_circle_a2: "হ্যাঁ, AIFA e.V. ছাড়াও, অন্যান্য ছোট ভারতীয় সাংস্কৃতিক গোষ্ঠী বা ছাত্র সমিতি (বিশেষ করে RWTH আকেন বিশ্ববিদ্যালয়ের আশেপাশে) থাকতে পারে। 'ইন্ডিষের ভেরাইন আকেন' অনলাইনে অনুসন্ধান করা বা ভারতীয় মুদি দোকানে নোটিশ বোর্ড পরীক্ষা করা তথ্য সরবরাহ করতে পারে।",
        faq_social_circle_q3: "আকেন-এ আমি কীভাবে শখ এবং খেলাধুলা করতে পারি?",
        faq_social_circle_a3: "আকেন-এ ফুটবল, টেনিস, সাঁতার এবং হাইকিংয়ের মতো বিভিন্ন কার্যকলাপের জন্য অসংখ্য স্পোর্টস ক্লাব (Sportvereine) রয়েছে। Hochshulsport (বিশ্ববিদ্যালয় খেলাধুলা) ছাত্র এবং কর্মীদের জন্য অনেক কোর্স অফার করে। শখের জন্য, স্থানীয় কমিউনিটি সেন্টার (Volkshochschule), ব্যক্তিগত ক্লাব, বা Meetup.com এর মতো অনলাইন প্ল্যাটফর্মে আগ্রহ-ভিত্তিক গ্রুপগুলি পরীক্ষা করুন।",
        faq_cat_citizenship_title: "নাগরিকত্ব",
        faq_citizenship_q1: "জার্মান নাগরিকত্ব অর্জনের প্রক্রিয়া কী?",
        faq_citizenship_a1: "প্রাকৃতিকীকরণের (Einbürgerung) জন্য স্ট্যান্ডার্ড প্রক্রিয়ায় 8 বছরের আইনি রেসিডেন্সি (কিছু ক্ষেত্রে কম, যেমন, ইন্টিগ্রেশন কোর্স সহ 7 বছর, জার্মান নাগরিকদের স্বামী/স্ত্রীর জন্য 6 বছর), পর্যাপ্ত জার্মান ভাষা দক্ষতা (B1/B2), একটি প্রাকৃতিকীকরণ পরীক্ষায় উত্তীর্ণ হওয়া, এবং সাধারণত আপনার পূর্ববর্তী নাগরিকত্ব ত্যাগ করা অন্তর্ভুক্ত (ভারত প্রাপ্তবয়স্কদের জন্য দ্বৈত নাগরিকত্ব অনুমোদন করে না)।",
        faq_citizenship_q2: "ভারতীয় পাসপোর্ট সমর্পণ এবং OCI কার্ড পাওয়ার প্রক্রিয়া কী?",
        faq_citizenship_a2: "জার্মান নাগরিকত্ব অর্জনের পর, আপনাকে আপনার ভারতীয় পাসপোর্ট ভারতীয় দূতাবাস/কনস্যুলেটে সমর্পণ করতে হবে। তারপর আপনি একটি 'সমর্পণ সার্টিফিকেট' পাবেন। পরবর্তীতে, আপনি ওভারসিজ সিটিজেন অফ ইন্ডিয়া (OCI) কার্ডের জন্য আবেদন করতে পারেন, যা ভারতে আজীবন ভিসা-মুক্ত ভ্রমণ এবং অন্যান্য সুবিধা প্রদান করে। আবেদন প্রক্রিয়া ভারতীয় সরকারের পোর্টাল এর মাধ্যমে অনলাইনে হয়।",        
        contact_title: "যোগাযোগ করুন",
        contact_intro: "প্রশ্ন আছে বা যোগাযোগ করতে চান? নিচের ফর্মটি পূরণ করুন এবং আমরা যত তাড়াতাড়ি সম্ভব আপনার সাথে যোগাযোগ করব।",
        your_name_label: "আপনার নাম",
        your_name_placeholder: "জন ডো",
        your_email_label: "আপনার ইমেল",
        your_email_placeholder: "john.doe@example.com",
        subject_label: "বিষয়",
        subject_placeholder: "সদস্যপদ সম্পর্কে জিজ্ঞাসা",
        message_label: "বার্তা",
        message_placeholder: "আপনার বার্তা এখানে লিখুন...",
        send_message_button: "বার্তা পাঠান",
        contact_success_message: "আপনার বার্তার জন্য ধন্যবাদ! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।",
        site_title_event_registration: "আকেন-এ ভারতীয় পরিবার সমিতি - ইভেন্ট নিবন্ধন",
        event_reg_title: "ইভেন্ট নিবন্ধন",
        event_reg_intro: "আমাদের আসন্ন ইভেন্টগুলির জন্য নিবন্ধন করতে, অনুগ্রহ করে নিচের ফর্মটি পূরণ করুন।",
        event_reg_select_event_label: "ইভেন্ট নির্বাচন করুন",
        event_reg_select_event_placeholder: "একটি ইভেন্ট নির্বাচন করুন",
        event_reg_summer_picnic_option: "গ্রীষ্মকালীন পারিবারিক পিকনিক (জুলাই 20, 2024)",
        event_reg_dandiya_option: "ডান্ডিয়া উদযাপন 2025 (অক্টোবর 2, 2025)",
        event_reg_num_attendees_label: "উপস্থিতির সংখ্যা",
        event_reg_dietary_notes_label: "খাদ্যতালিকাগত সীমাবদ্ধতা / বিশেষ নোট (ঐচ্ছিক)",
        event_reg_dietary_notes_placeholder: "যেমন, নিরামিষ, গ্লুটেন-মুক্ত, হুইলচেয়ার অ্যাক্সেস প্রয়োজন",
        event_reg_submit_button: "ইভেন্টের জন্য নিবন্ধন করুন",
        event_reg_success_message: "ইভেন্টের জন্য নিবন্ধন করার জন্য ধন্যবাদ! আমরা আপনাকে দেখার জন্য উন্মুখ।",
        event_reg_error_message: "ইভেন্টের জন্য নিবন্ধন করার সময় ত্রুটি। অনুগ্রহ করে আবার চেষ্টা করুন।"        ,
        data_protection_title: "ডেটা সুরক্ষা নীতি",
        data_protection_p1: "সমিতি তার সদস্যদের ব্যক্তিগত ডেটা সংগ্রহ, প্রক্রিয়া এবং ব্যবহার করে সমিতির সংবিধানের অধীনে অনুমোদিত উদ্দেশ্য এবং কাজগুলি পূরণ করার জন্য।",
        data_protection_p2: "সমিতি নিজের এবং/অথবা তার সদস্যদের জন্য সুবিধা পাওয়ার জন্য বীমা পলিসি ব্যবস্থা করতে পারে। বীমা পলিসিগুলির জন্য চুক্তিগুলি বাস্তবায়ন বা বাতিল করার জন্য, সমিতি তার সদস্যদের ব্যক্তিগত ডেটা প্রয়োজনীয় পরিমাণে দায়ী বীমা সংস্থাকে প্রেরণ করে।",
        data_protection_p3: "সংবিধানে উল্লিখিত পাবলিক বা ব্যক্তিগত ইভেন্ট এবং অন্যান্য কার্যকলাপের সাথে সম্পর্কিত, সমিতি তার হোমপেজে তার সদস্যদের নাম এবং ছবি প্রকাশ করে এবং মুদ্রণ ও টেলিমিডিয়া এবং ইলেকট্রনিক মিডিয়াতে প্রকাশের জন্য নাম এবং ছবি পাঠায়। একজন সদস্য যেকোনো সময় বোর্ডের কাছে তাদের ব্যক্তিগত ছবি প্রকাশের বিষয়ে আপত্তি জানাতে পারেন। আপত্তি পাওয়ার পর, প্রকাশনা/প্রেরণ বন্ধ করা হবে এবং সমিতি তার হোমপেজ থেকে বিদ্যমান ছবিগুলি সরিয়ে দেবে।",
        data_protection_p4: "তাদের সদস্যপদ এবং এই সংবিধানের সংশ্লিষ্ট স্বীকৃতির মাধ্যমে, সদস্যরা উপরে উল্লিখিত সীমা এবং পরিসরে তাদের ব্যক্তিগত ডেটা সংগ্রহ, প্রক্রিয়া এবং ব্যবহারের জন্য সম্মত। সমিতি শুধুমাত্র তার সংবিধিবদ্ধ কাজ এবং উদ্দেশ্যগুলি পূরণ করা ছাড়া অন্য উদ্দেশ্যে ডেটা ব্যবহার করার অনুমতিপ্রাপ্ত হয় যদি এটি আইনত বাধ্য থাকে। ডেটা বিক্রি করা যাবে না।",
        data_protection_p5: "প্রত্যেক সদস্য সদস্যপদ তালিকার অংশ হিসাবে তাদের কাছে উপলব্ধ ডেটা গোপনীয় রাখতে দায়বদ্ধ। সমিতির সমস্ত আর্থিক বিষয়েও একই প্রযোজ্য।",
        data_protection_p6: "আমরা সদস্যদের ব্যক্তিগত ডেটা কোনো বাণিজ্যিক বা অ-বাণিজ্যিক উদ্দেশ্যে তৃতীয় পক্ষের কাছে প্রকাশ না করার জন্য প্রতিশ্রুতিবদ্ধ। ডেটা ব্যবহার সম্পর্কে আরও বিস্তারিত জানার জন্য, অনুগ্রহ করে আমাদের সাধারণ ডেটা সুরক্ষা নীতি এখানে দেখুন (<a href=\"https://www.aifaev.de\" class=\"text-blue-600 hover:underline\" target=\"_blank\">www.aifaev.de</a>)"        
    },
    pa: { // Punjabi
        site_title_home: "ਆਕੇਨ ਵਿੱਚ ਭਾਰਤੀ ਪਰਿਵਾਰਾਂ ਦੀ ਐਸੋਸੀਏਸ਼ਨ - ਮੁੱਖ ਪੰਨਾ",
        site_title_about: "ਆਕੇਨ ਵਿੱਚ ਭਾਰਤੀ ਪਰਿਵਾਰਾਂ ਦੀ ਐਸੋਸੀਏਸ਼ਨ - ਸਾਡੇ ਬਾਰੇ",
        site_title_events: "ਆਕੇਨ ਵਿੱਚ ਭਾਰਤੀ ਪਰਿਵਾਰਾਂ ਦੀ ਐਸੋਸੀਏਸ਼ਨ - ਸਮਾਗਮ",
        site_title_membership: "ਆਕੇਨ ਵਿੱਚ ਭਾਰਤੀ ਪਰਿਵਾਰਾਂ ਦੀ ਐਸੋਸੀਏਸ਼ਨ - ਮੈਂਬਰਸ਼ਿਪ",
        site_title_faq: "ਆਕੇਨ ਵਿੱਚ ਭਾਰਤੀ ਪਰਿਵਾਰਾਂ ਦੀ ਐਸੋਸੀਏਸ਼ਨ - ਅਕਸਰ ਪੁੱਛੇ ਜਾਂਦੇ ਸਵਾਲ",
        site_title_contact: "ਆਕੇਨ ਵਿੱਚ ਭਾਰਤੀ ਪਰਿਵਾਰਾਂ ਦੀ ਐਸੋਸੀਏਸ਼ਨ - ਸੰਪਰਕ ਕਰੋ",
        site_title_data_protection: "ਆਕੇਨ ਵਿੱਚ ਭਾਰਤੀ ਪਰਿਵਾਰਾਂ ਦੀ ਐਸੋਸੀਏਸ਼ਨ - ਡਾਟਾ ਸੁਰੱਖਿਆ ਨੀਤੀ",        
        nav_home: "ਘਰ",
        nav_about: "ਸਾਡੇ ਬਾਰੇ",
        nav_events: "ਸਮਾਗਮ",
        nav_membership: "ਮੈਂਬਰਸ਼ਿਪ",
        nav_faq: "ਅਕਸਰ ਪੁੱਛੇ ਜਾਂਦੇ ਸਵਾਲ",
        nav_contact: "ਸੰਪਰਕ ਕਰੋ",
        nav_event_registration: "ਸਮਾਗਮ ਰਜਿਸਟ੍ਰੇਸ਼ਨ", // NEW NAV KEY        
        home_main_title: "ਆਕੇਨ ਵਿੱਚ ਭਾਰਤੀ ਪਰਿਵਾਰਾਂ ਦੀ ਐਸੋਸੀਏਸ਼ਨ",
        home_tagline: "ਆਕੇਨ ਵਿੱਚ ਭਾਰਤੀ ਪਰਿਵਾਰਾਂ ਨੂੰ ਜੋੜਨਾ, ਭਾਈਚਾਰੇ ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕਰਨਾ, ਅਤੇ ਸਾਡੀ ਅਮੀਰ ਸੱਭਿਆਚਾਰ ਦਾ ਜਸ਼ਨ ਮਨਾਉਣਾ।",
        home_explore_events: "ਸਮਾਗਮਾਂ ਦੀ ਪੜਚੋਲ ਕਰੋ",
        footer_copyright: "&copy; 2025 ਆਕੇਨ ਵਿੱਚ ਭਾਰਤੀ ਪਰਿਵਾਰਾਂ ਦੀ ਐਸੋਸੀਏਸ਼ਨ। e.V. ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਨੰਬਰ VR 6590(Amtsgericht Aachen). ਸਾਰੇ ਅਧਿਕਾਰ ਰਾਖਵੇਂ ਹਨ।",
        footer_data_protection_policy: "ਡਾਟਾ ਸੁਰੱਖਿਆ ਨੀਤੀ",
        footer_terms: "ਸੇਵਾ ਦੀਆਂ ਸ਼ਰਤਾਂ",
        lang_en: "English",
        lang_de: "Deutsch",
        lang_hi: "हिन्दी",
        lang_mr: "मराठी",
        lang_te: "తెలుగు",
        lang_ta: "தமிழ்",
        lang_bn: "বাংলা",
        lang_pa: "ਪੰਜਾਬੀ",
        lang_kn: "ಕನ್ನಡ",
        lang_ml: "മലയാളം",
        lang_or: "ଓଡ଼ିଆ",
        lang_gu: "ગુજરાતી",
        lang_sa: "संस्कृतम्",
        lang_mai: "मैथिली",
        about_title: "ਸਾਡੀ ਐਸੋਸੀਏਸ਼ਨ ਬਾਰੇ",
        about_para1: "ਆਕੇਨ ਵਿੱਚ ਭਾਰਤੀ ਪਰਿਵਾਰਾਂ ਦੀ ਐਸੋਸੀਏਸ਼ਨ (AIFA e.V.) ਇੱਕ ਗੈਰ-ਲਾਭਕਾਰੀ ਸੰਸਥਾ ਹੈ ਜੋ ਜਰਮਨੀ ਦੇ ਆਕੇਨ ਵਿੱਚ ਰਹਿੰਦੇ ਭਾਰਤੀ ਪਰਿਵਾਰਾਂ ਨੂੰ ਇਕੱਠੇ ਲਿਆਉਣ ਲਈ ਸਮਰਪਿਤ ਹੈ। ਸਾਡਾ ਮਿਸ਼ਨ ਇੱਕ ਜੀਵੰਤ ਅਤੇ ਸਹਾਇਕ ਭਾਈਚਾਰਾ ਬਣਾਉਣਾ ਹੈ ਜਿੱਥੇ ਸੱਭਿਆਚਾਰਕ ਵਿਰਾਸਤ ਦਾ ਜਸ਼ਨ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ, ਪਰੰਪਰਾਵਾਂ ਨੂੰ ਸੁਰੱਖਿਅਤ ਰੱਖਿਆ ਜਾਂਦਾ ਹੈ, ਅਤੇ ਨਵੀਆਂ ਦੋਸਤੀਆਂ ਬਣਾਈਆਂ ਜਾਂਦੀਆਂ ਹਨ।",
        about_para2: "ਅਸੀਂ ਸਾਲ ਭਰ ਕਈ ਤਰ੍ਹਾਂ ਦੇ ਸਮਾਗਮਾਂ ਦਾ ਆਯੋਜਨ ਕਰਦੇ ਹਾਂ, ਜਿਨ੍ਹਾਂ ਵਿੱਚ ਸੱਭਿਆਚਾਰਕ ਤਿਉਹਾਰਾਂ ਅਤੇ ਸਮਾਜਿਕ ਇਕੱਠਾਂ ਤੋਂ ਲੈ ਕੇ ਵਿਦਿਅਕ ਵਰਕਸ਼ਾਪਾਂ ਅਤੇ ਭਾਈਚਾਰਕ ਸੇਵਾ ਪਹਿਲਕਦਮੀਆਂ ਸ਼ਾਮਲ ਹਨ। ਸਾਡਾ ਉਦੇਸ਼ ਭਾਰਤੀ ਪਰਿਵਾਰਾਂ ਲਈ ਘਰ ਤੋਂ ਦੂਰ ਇੱਕ ਘਰ ਪ੍ਰਦਾਨ ਕਰਨਾ ਹੈ, ਉਹਨਾਂ ਨੂੰ ਸਥਾਨਕ ਭਾਈਚਾਰੇ ਵਿੱਚ ਰਲਣ ਵਿੱਚ ਮਦਦ ਕਰਨਾ ਅਤੇ ਉਹਨਾਂ ਨੂੰ ਉਹਨਾਂ ਦੀਆਂ ਜੜ੍ਹਾਂ ਨਾਲ ਜੁੜੇ ਰੱਖਣਾ ਹੈ।",
        about_para3: "ਸਾਡੇ ਭਾਈਚਾਰੇ ਦੀ ਨਿੱਘ ਦਾ ਅਨੁਭਵ ਕਰਨ, ਦਿਲਚਸਪ ਸਮਾਗਮਾਂ ਵਿੱਚ ਹਿੱਸਾ ਲੈਣ, ਅਤੇ ਆਕੇਨ ਵਿੱਚ ਇੱਕ ਮਜ਼ਬੂਤ ​​ਅਤੇ ਇਕਜੁੱਟ ਭਾਰਤੀ ਪ੍ਰਵਾਸੀ ਬਣਾਉਣ ਵਿੱਚ ਯੋਗਦਾਨ ਪਾਉਣ ਲਈ ਸਾਡੇ ਨਾਲ ਜੁੜੋ।",
        events_title: "ਸਾਡੇ ਸਮਾਗਮ",
        event_diwali_title: "ਦੀਵਾਲੀ ਦਾ ਜਸ਼ਨ 2023",
        event_diwali_date: "28 ਅਕਤੂਬਰ, 2023",
        event_diwali_desc: "ਸੱਭਿਆਚਾਰਕ ਪੇਸ਼ਕਾਰੀਆਂ, ਸੁਆਦੀ ਭੋਜਨ ਅਤੇ ਆਤਿਸ਼ਬਾਜ਼ੀ ਨਾਲ ਰੋਸ਼ਨੀ ਦੇ ਤਿਉਹਾਰ ਦਾ ਇੱਕ ਸ਼ਾਨਦਾਰ ਜਸ਼ਨ। ਪਰਿਵਾਰਾਂ ਨੇ ਇਕੱਠੇ ਇੱਕ ਯਾਦਗਾਰ ਸ਼ਾਮ ਦਾ ਆਨੰਦ ਮਾਣਿਆ।",
        event_diwali_status: "ਬੀਤਿਆ ਸਮਾਗਮ",
        event_summer_title: "ਗਰਮੀਆਂ ਦੀ ਪਰਿਵਾਰਕ ਪਿਕਨਿਕ",
        event_summer_date: "20 ਜੁਲਾਈ, 2024",
        event_summer_desc: "ਖੇਡਾਂ, ਭੋਜਨ ਅਤੇ ਬਾਹਰੀ ਗਤੀਵਿਧੀਆਂ ਨਾਲ ਵੈਸਟਪਾਰਕ ਵਿੱਚ ਇੱਕ ਮਜ਼ੇਦਾਰ ਪਰਿਵਾਰਕ ਪਿਕਨਿਕ ਲਈ ਸਾਡੇ ਨਾਲ ਜੁੜੋ। ਆਪਣੀਆਂ ਪਿਕਨਿਕ ਟੋਕਰੀਆਂ ਨਾ ਭੁੱਲੋ!",
        event_summer_status: "ਮੌਜੂਦਾ ਸਮਾਗਮ",
        event_dandiya_title: "ਡਾਂਡੀਆ ਜਸ਼ਨ 2025",
        event_dandiya_date: "2 ਅਕਤੂਬਰ, 2025",
        event_dandiya_desc: "ਘੁੰਮਣ ਅਤੇ ਨੱਚਣ ਲਈ ਤਿਆਰ ਹੋ ਜਾਓ! ਰਵਾਇਤੀ ਸੰਗੀਤ, ਰੰਗੀਨ ਪਹਿਰਾਵੇ ਅਤੇ ਊਰਜਾਵਾਨ ਨਾਚ ਦੀਆਂ ਚਾਲਾਂ ਨਾਲ ਤਿਉਹਾਰੀ ਭਾਵਨਾ ਦਾ ਜਸ਼ਨ ਮਨਾਉਂਦੇ ਹੋਏ ਇੱਕ ਜੀਵੰਤ ਡਾਂਡੀਆ ਅਤੇ ਗਰਬਾ ਰਾਤ ਲਈ ਸਾਡੇ ਨਾਲ ਜੁੜੋ। ਸਥਾਨ ਅਤੇ ਗਤੀਵਿਧੀਆਂ ਬਾਰੇ ਹੋਰ ਵੇਰਵੇ ਜਲਦੀ ਹੀ ਐਲਾਨ ਕੀਤੇ ਜਾਣਗੇ।",
        event_dandiya_status: "ਭਵਿੱਖ ਦਾ ਸਮਾਗਮ",
        events_view_all: "ਸਾਰੇ ਸਮਾਗਮ ਵੇਖੋ",
        events_register_now: "ਸਮਾਗਮ ਲਈ ਰਜਿਸਟਰ ਕਰੋ", // NEW BUTTON TEXT        
        membership_title: "ਮੈਂਬਰ ਬਣੋ",
        membership_intro: "ਆਕੇਨ ਵਿੱਚ ਭਾਰਤੀ ਪਰਿਵਾਰਾਂ ਦੀ ਐਸੋਸੀਏਸ਼ਨ (AIFA e.V.) ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਵੋ ਅਤੇ ਸਾਡੇ ਵਧ ਰਹੇ ਭਾਈਚਾਰੇ ਦਾ ਹਿੱਸਾ ਬਣੋ! ਤੁਹਾਡੀ ਮੈਂਬਰਸ਼ਿਪ ਸਾਨੂੰ ਦਿਲਚਸਪ ਸਮਾਗਮਾਂ ਦਾ ਆਯੋਜਨ ਕਰਨ ਅਤੇ ਆਕੇਨ ਵਿੱਚ ਭਾਰਤੀ ਪਰਿਵਾਰਾਂ ਦਾ ਸਮਰਥਨ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦੀ ਹੈ।",
        membership_individual_title: "ਵਿਅਕਤੀਗਤ ਮੈਂਬਰਸ਼ਿਪ",
        membership_individual_price: "€30",
        membership_individual_per_year: "/ ਸਾਲ",
        membership_individual_desc: "ਜੁੜਨ ਦੀ ਇੱਛਾ ਰੱਖਣ ਵਾਲੇ ਇਕੱਲੇ ਵਿਅਕਤੀਆਂ ਲਈ ਸੰਪੂਰਨ।",
        membership_family_title: "ਪਰਿਵਾਰਕ ਮੈਂਬਰਸ਼ਿਪ",
        membership_family_price: "€50",
        membership_family_per_year: "/ ਸਾਲ",
        membership_family_desc: "ਇੱਕੋ ਪਰਿਵਾਰ ਦੇ ਸਾਰੇ ਮੈਂਬਰਾਂ ਨੂੰ ਕਵਰ ਕਰਦਾ ਹੈ।",
        membership_form_title: "ਮੈਂਬਰਸ਼ਿਪ ਅਰਜ਼ੀ ਫਾਰਮ",
        membership_type_label: "ਮੈਂਬਰਸ਼ਿਪ ਦੀ ਕਿਸਮ",
        membership_type_select_option: "ਇੱਕ ਮੈਂਬਰਸ਼ਿਪ ਦੀ ਕਿਸਮ ਚੁਣੋ",
        membership_type_individual_option: "ਵਿਅਕਤੀਗਤ ਮੈਂਬਰਸ਼ਿਪ (€30/ਸਾਲ)",
        membership_type_family_option: "ਪਰਿਵਾਰਕ ਮੈਂਬਰਸ਼ਿਪ (€50/ਸਾਲ)",
        first_name_label: "ਪਹਿਲਾ ਨਾਮ",
        first_name_placeholder: "ਜੌਨ",
        last_name_label: "ਆਖਰੀ ਨਾਮ",
        last_name_placeholder: "ਡੋ",
        num_family_members_label: "ਪਰਿਵਾਰਕ ਮੈਂਬਰਾਂ ਦੀ ਗਿਣਤੀ (ਆਪਣੇ ਸਮੇਤ)",
        num_family_members_placeholder: "ਉਦਾਹਰਨ ਲਈ, 4",
        volunteer_checkbox: "ਮੈਂ AIFA e.V. ਸਮਾਗਮਾਂ ਲਈ ਵਲੰਟੀਅਰ ਵਜੋਂ ਉਪਲਬਧ ਹਾਂ।",
        apply_membership_button: "ਮੈਂਬਰਸ਼ਿਪ ਲਈ ਅਰਜ਼ੀ ਦਿਓ",
        membership_success_message: "ਤੁਹਾਡੀ ਮੈਂਬਰਸ਼ਿਪ ਅਰਜ਼ੀ ਲਈ ਧੰਨਵਾਦ! ਅਸੀਂ ਜਲਦੀ ਹੀ ਤੁਹਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰਾਂਗੇ।",
        faq_title: "ਅਕਸਰ ਪੁੱਛੇ ਜਾਂਦੇ ਸਵਾਲ",
        faq_q1: "ਆਕੇਨ ਵਿੱਚ ਭਾਰਤੀ ਪਰਿਵਾਰਾਂ ਦੀ ਐਸੋਸੀਏਸ਼ਨ (AIFA e.V.) ਕੀ ਹੈ?",
        faq_a1: "AIFA e.V. ਇੱਕ ਗੈਰ-ਲਾਭਕਾਰੀ ਸੰਸਥਾ ਹੈ ਜੋ ਜਰਮਨੀ ਦੇ ਆਕੇਨ ਵਿੱਚ ਰਹਿੰਦੇ ਭਾਰਤੀ ਪਰਿਵਾਰਾਂ ਵਿੱਚ ਇੱਕ ਮਜ਼ਬੂਤ ​​ਭਾਈਚਾਰੇ ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕਰਨ ਲਈ ਸਮਰਪਿਤ ਹੈ। ਅਸੀਂ ਸੱਭਿਆਚਾਰਕ ਸਮਾਗਮਾਂ, ਸਮਾਜਿਕ ਇਕੱਠਾਂ ਦਾ ਆਯੋਜਨ ਕਰਦੇ ਹਾਂ, ਅਤੇ ਨੈੱਟਵਰਕਿੰਗ ਅਤੇ ਸਹਾਇਤਾ ਲਈ ਇੱਕ ਪਲੇਟਫਾਰਮ ਪ੍ਰਦਾਨ ਕਰਦੇ ਹਾਂ।",
        faq_q2: "ਮੈਂ ਮੈਂਬਰ ਕਿਵੇਂ ਬਣ ਸਕਦਾ ਹਾਂ?",
        faq_a2: "ਮੈਂਬਰਸ਼ਿਪ ਵੇਰਵੇ ਅਤੇ ਅਰਜ਼ੀ ਫਾਰਮ ਜਲਦੀ ਹੀ ਸਾਡੀ ਵੈੱਬਸਾਈਟ 'ਤੇ ਉਪਲਬਧ ਹੋਣਗੇ। ਕਿਰਪਾ ਕਰਕੇ ਦੁਬਾਰਾ ਜਾਂਚ ਕਰੋ ਜਾਂ ਹੋਰ ਜਾਣਕਾਰੀ ਲਈ ਸੰਪਰਕ ਫਾਰਮ ਰਾਹੀਂ ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ।",
        faq_q3: "ਕੀ ਸਮਾਗਮ ਗੈਰ-ਮੈਂਬਰਾਂ ਲਈ ਖੁੱਲ੍ਹੇ ਹਨ?",
        faq_a3: "ਸੱਭਿਆਚਾਰਕ ਆਦਾਨ-ਪ੍ਰਦਾਨ ਅਤੇ ਭਾਈਚਾਰਕ ਨਿਰਮਾਣ ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕਰਨ ਲਈ ਸਾਡੇ ਬਹੁਤ ਸਾਰੇ ਸਮਾਗਮ ਗੈਰ-ਮੈਂਬਰਾਂ ਸਮੇਤ ਸਾਰਿਆਂ ਲਈ ਖੁੱਲ੍ਹੇ ਹਨ। ਕੁਝ ਖਾਸ ਸਮਾਗਮਾਂ ਲਈ ਮੈਂਬਰਸ਼ਿਪ ਦੀ ਲੋੜ ਹੋ ਸਕਦੀ ਹੈ। ਹਰੇਕ ਸਮਾਗਮ ਲਈ ਵੇਰਵੇ ਨਿਰਧਾਰਤ ਕੀਤੇ ਜਾਣਗੇ।",
        faq_q4: "ਮੈਂ ਵਲੰਟੀਅਰ ਕਿਵੇਂ ਕਰ ਸਕਦਾ ਹਾਂ ਜਾਂ ਯੋਗਦਾਨ ਕਿਵੇਂ ਪਾ ਸਕਦਾ ਹਾਂ?",
        faq_a4: "ਅਸੀਂ ਵਲੰਟੀਅਰਾਂ ਦਾ ਸੁਆਗਤ ਕਰਦੇ ਹਾਂ! ਜੇ ਤੁਸੀਂ ਆਪਣਾ ਸਮਾਂ ਜਾਂ ਹੁਨਰ ਯੋਗਦਾਨ ਪਾਉਣ ਵਿੱਚ ਦਿਲਚਸਪੀ ਰੱਖਦੇ ਹੋ, ਤਾਂ ਕਿਰਪਾ ਕਰਕੇ ਸੰਪਰਕ ਫਾਰਮ ਰਾਹੀਂ ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ, ਅਤੇ ਅਸੀਂ ਤੁਹਾਨੂੰ ਮੌਕਿਆਂ ਬਾਰੇ ਦੱਸਾਂਗੇ।",
        faq_portal_title: "ਜਾਣਕਾਰੀ ਪੋਰਟਲ: ਜਰਮਨੀ ਵਿੱਚ ਭਾਰਤੀ ਪਰਿਵਾਰਾਂ ਲਈ ਅਕਸਰ ਪੁੱਛੇ ਜਾਂਦੇ ਸਵਾਲ",
        faq_search_placeholder: "ਕੀਵਰਡ ਦੁਆਰਾ ਅਕਸਰ ਪੁੱਛੇ ਜਾਂਦੇ ਸਵਾਲਾਂ ਦੀ ਖੋਜ ਕਰੋ...",
        faq_cat_aifa_title: "AIFA e.V.",
        faq_first_entry_q1: "ਜਰਮਨੀ ਵਿੱਚ ਨੌਕਰੀ ਦੀ ਪੇਸ਼ਕਸ਼ ਪ੍ਰਾਪਤ ਕਰਨ ਤੋਂ ਬਾਅਦ ਮੈਨੂੰ ਕੀ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ?",
        faq_first_entry_a1: "ਨੌਕਰੀ ਦੀ ਪੇਸ਼ਕਸ਼ ਪ੍ਰਾਪਤ ਕਰਨ ਤੋਂ ਬਾਅਦ, ਤੁਹਾਨੂੰ ਤੁਰੰਤ ਵੀਜ਼ਾ ਅਰਜ਼ੀ ਪ੍ਰਕਿਰਿਆ ਸ਼ੁਰੂ ਕਰਨੀ ਚਾਹੀਦੀ ਹੈ। ਆਪਣੇ ਰੁਜ਼ਗਾਰ ਇਕਰਾਰਨਾਮੇ, ਅਕਾਦਮਿਕ ਸਰਟੀਫਿਕੇਟਾਂ, ਅਤੇ ਫੰਡਾਂ ਦੇ ਸਬੂਤ ਸਮੇਤ ਸਾਰੇ ਲੋੜੀਂਦੇ ਦਸਤਾਵੇਜ਼ ਇਕੱਠੇ ਕਰੋ। ਤੁਹਾਡੇ ਦੇਸ਼ ਵਿੱਚ ਜਰਮਨ ਦੂਤਾਵਾਸ ਜਾਂ ਕੌਂਸਲੇਟ ਦੀਆਂ ਖਾਸ ਲੋੜਾਂ ਦੀ ਜਾਂਚ ਕਰਨ ਦੀ ਸਲਾਹ ਦਿੱਤੀ ਜਾਂਦੀ ਹੈ।",
        faq_first_entry_q2: "ਪਰਿਵਾਰਕ ਪੁਨਰ-ਮਿਲਨ ਵੀਜ਼ਾ ਲਈ ਪ੍ਰਕਿਰਿਆ ਕੀ ਹੈ?",
        faq_first_entry_a2: "ਪਰਿਵਾਰਕ ਪੁਨਰ-ਮਿਲਨ ਵੀਜ਼ਾ ਤੁਹਾਡੇ ਜੀਵਨ ਸਾਥੀ ਅਤੇ ਨਾਬਾਲਗ ਬੱਚਿਆਂ ਨੂੰ ਜਰਮਨੀ ਵਿੱਚ ਤੁਹਾਡੇ ਨਾਲ ਸ਼ਾਮਲ ਹੋਣ ਦੀ ਇਜਾਜ਼ਤ ਦਿੰਦਾ ਹੈ। ਮੁੱਖ ਲੋੜਾਂ ਵਿੱਚ ਅਕਸਰ ਲੋੜੀਂਦੀ ਰਹਿਣ ਵਾਲੀ ਥਾਂ, ਵਿੱਤੀ ਸਾਧਨ, ਅਤੇ ਤੁਹਾਡੇ ਜੀਵਨ ਸਾਥੀ ਲਈ ਬੁਨਿਆਦੀ ਜਰਮਨ ਭਾਸ਼ਾ ਦੇ ਹੁਨਰ ਦਾ ਸਬੂਤ ਸ਼ਾਮਲ ਹੁੰਦਾ ਹੈ। ਅਰਜ਼ੀ ਆਮ ਤੌਰ 'ਤੇ ਤੁਹਾਡੇ ਦੇਸ਼ ਵਿੱਚ ਜਰਮਨ ਦੂਤਾਵਾਸ ਵਿੱਚ ਦਾਇਰ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।",
        faq_first_entry_q3: "ਮੈਂ ਜਰਮਨੀ ਵਿੱਚ ਕਿੰਨਾ ਸੋਨਾ/ਗਹਿਣੇ ਲਿਆ ਸਕਦਾ ਹਾਂ?",
        faq_first_entry_a3: "ਜਰਮਨੀ ਵਿੱਚ ਜਾਣ ਵੇਲੇ, ਨਿੱਜੀ ਸਮਾਨ, ਗਹਿਣਿਆਂ ਸਮੇਤ, ਆਮ ਤੌਰ 'ਤੇ ਕਸਟਮ ਡਿਊਟੀ ਤੋਂ ਮੁਕਤ ਹੁੰਦੇ ਹਨ ਜੇਕਰ ਉਹ ਤੁਹਾਡੇ ਘਰੇਲੂ ਸਮਾਨ ਦਾ ਹਿੱਸਾ ਹਨ ਅਤੇ ਤੁਹਾਡੇ ਦੁਆਰਾ ਘੱਟੋ-ਘੱਟ ਛੇ ਮਹੀਨਿਆਂ ਤੋਂ ਵਰਤੇ ਗਏ ਹਨ। ਹਾਲਾਂਕਿ, ਉੱਚ-ਮੁੱਲ ਵਾਲੀਆਂ ਚੀਜ਼ਾਂ ਲਈ, ਕਸਟਮਜ਼ ਨਾਲ ਸਮੱਸਿਆਵਾਂ ਤੋਂ ਬਚਣ ਲਈ ਮਾਲਕੀ ਅਤੇ ਮੁੱਲ ਦਾ ਸਬੂਤ (ਜਿਵੇਂ ਕਿ ਖਰੀਦ ਰਸੀਦਾਂ, ਮੁਲਾਂਕਣ ਸਰਟੀਫਿਕੇਟ) ਲੈ ਕੇ ਜਾਣ ਦੀ ਸਲਾਹ ਦਿੱਤੀ ਜਾਂਦੀ ਹੈ। ਕਸਟਮ ਨਿਯਮਾਂ ਅਨੁਸਾਰ ਇੱਕ ਨਿਸ਼ਚਿਤ ਮੁੱਲ ਤੋਂ ਉੱਪਰ ਦੀਆਂ ਚੀਜ਼ਾਂ ਨੂੰ ਹਮੇਸ਼ਾ ਘੋਸ਼ਿਤ ਕਰੋ।",
        faq_cat_first_arrival_aachen_title: "ਆਕੇਨ ਵਿੱਚ ਪਹਿਲੀ ਆਮਦ",
        faq_first_arrival_aachen_q1: "ਏਅਰਪੋਰਟ ਤੋਂ ਆਕੇਨ ਪਹੁੰਚਣ ਦੇ ਸਭ ਤੋਂ ਵਧੀਆ ਤਰੀਕੇ ਕਿਹੜੇ ਹਨ?",
        faq_first_arrival_aachen_a1: "ਆਕੇਨ ਚੰਗੀ ਤਰ੍ਹਾਂ ਜੁੜਿਆ ਹੋਇਆ ਹੈ। ਡਸਲਡੋਰਫ ਏਅਰਪੋਰਟ (DUS) ਜਾਂ ਕੋਲੋਨ ਬੋਨ ਏਅਰਪੋਰਟ (CGN) ਤੋਂ, ਤੁਸੀਂ ਸਿੱਧੇ ਆਕੇਨ ਹਾਉਪਤਬਾਨਹੋਫ (ਮੁੱਖ ਸਟੇਸ਼ਨ) ਤੱਕ ਟ੍ਰੇਨ ਲੈ ਸਕਦੇ ਹੋ। ਮਾਸਟ੍ਰਿਚ ਆਕੇਨ ਏਅਰਪੋਰਟ (MST) ਤੋਂ ਬੱਸਾਂ ਉਪਲਬਧ ਹਨ। ਟੈਕਸੀਆਂ ਅਤੇ ਰਾਈਡ-ਸ਼ੇਅਰਿੰਗ ਸੇਵਾਵਾਂ ਵੀ ਵਿਕਲਪ ਹਨ ਪਰ ਆਮ ਤੌਰ 'ਤੇ ਵਧੇਰੇ ਮਹਿੰਗੀਆਂ ਹਨ।",
        faq_first_arrival_aachen_q2: "ਮੈਨੂੰ ਆਕੇਨ ਵਿੱਚ ਅਸਥਾਈ ਰਿਹਾਇਸ਼ ਕਿੱਥੇ ਮਿਲ ਸਕਦੀ ਹੈ?",
        faq_first_arrival_aachen_a2: "ਅਸਥਾਈ ਰਿਹਾਇਸ਼ ਲਈ, ਸਰਵਿਸਡ ਅਪਾਰਟਮੈਂਟਸ, ਏਅਰਬੀਐਨਬੀ, ਜਾਂ ਛੋਟੀ ਮਿਆਦ ਦੇ ਕਿਰਾਏ 'ਤੇ ਵਿਚਾਰ ਕਰੋ। Booking.com, Airbnb, ਅਤੇ ਸਥਾਨਕ ਵਰਗੀਕ੍ਰਿਤ (ਜਿਵੇਂ, WG-Gesucht.de ਸਾਂਝੇ ਫਲੈਟਾਂ ਲਈ, ਹਾਲਾਂਕਿ ਪਰਿਵਾਰਾਂ ਲਈ ਘੱਟ ਆਮ) ਵਰਗੀਆਂ ਵੈੱਬਸਾਈਟਾਂ ਮਦਦਗਾਰ ਹੋ ਸਕਦੀਆਂ ਹਨ। ਕੁਝ ਹੋਟਲ ਵੀ ਵਧੇ ਹੋਏ ਠਹਿਰਨ ਦੇ ਵਿਕਲਪ ਪੇਸ਼ ਕਰਦੇ ਹਨ।",
        faq_first_arrival_aachen_q3: "'ਅਨਮੇਲਡੁੰਗ' ਕੀ ਹੈ ਅਤੇ ਮੈਂ ਇਸਨੂੰ ਕਿਵੇਂ ਕਰਾਂ?",
        faq_first_arrival_aachen_a3: "'ਅਨਮੇਲਡੁੰਗ' ਤੁਹਾਡੇ ਸਥਾਈ ਨਿਵਾਸ ਵਿੱਚ ਜਾਣ ਤੋਂ ਦੋ ਹਫ਼ਤਿਆਂ ਦੇ ਅੰਦਰ ਸਥਾਨਕ ਅਧਿਕਾਰੀਆਂ (ਬੁਰਗਰਮਟ/ਆਇਨਵੋਹਨਰਮੇਲਡੇਮਟ) ਨਾਲ ਤੁਹਾਡੇ ਰਿਹਾਇਸ਼ੀ ਪਤੇ ਦੀ ਲਾਜ਼ਮੀ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਹੈ। ਤੁਹਾਨੂੰ ਤੁਹਾਡਾ ਪਾਸਪੋਰਟ, ਵੀਜ਼ਾ, ਅਤੇ ਮਕਾਨ ਮਾਲਕ ਦੀ ਪੁਸ਼ਟੀ (ਵੋਹਨੂੰਗਸਗੇਬਰਬੇਸਟਾਟਿਗੁੰਗ) ਦੀ ਲੋੜ ਪਵੇਗੀ। ਟੈਕਸ ਆਈਡੀ ਪ੍ਰਾਪਤ ਕਰਨ, ਬੈਂਕ ਖਾਤਾ ਖੋਲ੍ਹਣ, ਅਤੇ ਹੋਰ ਪ੍ਰਬੰਧਕੀ ਕਾਰਜਾਂ ਲਈ ਇਹ ਬਹੁਤ ਮਹੱਤਵਪੂਰਨ ਹੈ। ਪਹਿਲਾਂ ਤੋਂ ਔਨਲਾਈਨ ਮੁਲਾਕਾਤ ਬੁੱਕ ਕਰੋ।",
        faq_first_arrival_aachen_q4: "ਮੈਂ ਜਰਮਨੀ ਵਿੱਚ ਬੈਂਕ ਖਾਤਾ ਕਿਵੇਂ ਖੋਲ੍ਹਾਂ?",
        faq_first_arrival_aachen_a4: "ਤੁਸੀਂ ਰਵਾਇਤੀ ਬੈਂਕਾਂ (ਜਿਵੇਂ, ਸਪਾਰਕਾਸੇ, ਡਿਊਸ਼ ਬੈਂਕ) ਜਾਂ ਔਨਲਾਈਨ ਬੈਂਕਾਂ (ਜਿਵੇਂ, N26, ਕੌਮਡਾਇਰੈਕਟ) ਨਾਲ ਬੈਂਕ ਖਾਤਾ ਖੋਲ੍ਹ ਸਕਦੇ ਹੋ। ਰਵਾਇਤੀ ਬੈਂਕਾਂ ਲਈ, ਤੁਹਾਨੂੰ ਆਮ ਤੌਰ 'ਤੇ ਤੁਹਾਡਾ ਪਾਸਪੋਰਟ, ਵੀਜ਼ਾ/ਰਿਹਾਇਸ਼ੀ ਪਰਮਿਟ, ਅਤੇ ਪਤੇ ਦਾ ਸਬੂਤ (ਅਨਮੇਲਡੁੰਗ ਸਰਟੀਫਿਕੇਟ) ਦੀ ਲੋੜ ਪਵੇਗੀ। ਔਨਲਾਈਨ ਬੈਂਕ ਅਕਸਰ ਇੱਕ ਸਰਲ ਡਿਜੀਟਲ ਪ੍ਰਕਿਰਿਆ ਦੀ ਪੇਸ਼ਕਸ਼ ਕਰਦੇ ਹਨ।",
        faq_cat_children_title: "ਬੱਚੇ",
        faq_children_q1: "ਮੈਂ ਆਕੇਨ ਵਿੱਚ ਆਪਣੇ ਬੱਚਿਆਂ ਲਈ ਕਿਤਾ (ਕਿੰਡਰਗਾਰਟਨ) ਜਾਂ ਸਕੂਲ ਕਿਵੇਂ ਲੱਭਾਂ?",
        faq_children_a1: "ਕਿਤਾ ਲਈ, ਤੁਸੀਂ ਆਮ ਤੌਰ 'ਤੇ ਸ਼ਹਿਰ ਦੇ ਔਨਲਾਈਨ ਪੋਰਟਲ (ਕਿਤਾ-ਨੈਵੀਗੇਟਰ ਆਕੇਨ) ਰਾਹੀਂ ਜਾਂ ਸਿੱਧੇ ਵਿਅਕਤੀਗਤ ਕਿਤਾਵਾਂ ਨਾਲ ਰਜਿਸਟਰ ਕਰਦੇ ਹੋ। ਸਕੂਲਾਂ ਲਈ, ਆਕੇਨ ਦੇ ਸ਼ੁਲਅਮਟ (ਸਕੂਲ ਦਫ਼ਤਰ) ਜਾਂ ਵਿਅਕਤੀਗਤ ਸਕੂਲਾਂ ਨਾਲ ਸੰਪਰਕ ਕਰੋ। ਉੱਚ ਮੰਗ ਦੇ ਕਾਰਨ ਕਿਤਾਵਾਂ ਲਈ ਜਲਦੀ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਦੀ ਬਹੁਤ ਸਿਫਾਰਸ਼ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।",
        faq_children_q2: "ਕੀ ਆਕੇਨ ਵਿੱਚ ਬੱਚਿਆਂ ਲਈ ਕੋਈ ਸ਼ੌਕ ਕਲਾਸਾਂ ਜਾਂ ਸਪੋਰਟਸ ਕਲੱਬ ਹਨ?",
        faq_children_a2: "ਹਾਂ, ਆਕੇਨ ਬੱਚਿਆਂ ਲਈ ਸ਼ੌਕ ਕਲਾਸਾਂ ਅਤੇ ਸਪੋਰਟਸ ਕਲੱਬਾਂ ਦੀ ਇੱਕ ਵਿਸ਼ਾਲ ਸ਼੍ਰੇਣੀ ਦੀ ਪੇਸ਼ਕਸ਼ ਕਰਦਾ ਹੈ। ਤੁਸੀਂ ਸ਼ਹਿਰ ਦੀ ਅਧਿਕਾਰਤ ਵੈੱਬਸਾਈਟ, ਸਥਾਨਕ ਕਮਿਊਨਿਟੀ ਸੈਂਟਰਾਂ (ਫੈਮਿਲੀਏਨਜ਼ੈਂਟਰੇਨ), ਸਪੋਰਟਸ ਫੈਡਰੇਸ਼ਨਾਂ (ਸਟੈਡਟਸਪੋਰਟਸਬੰਡ ਆਕੇਨ) ਰਾਹੀਂ ਜਾਂ ਸਿੱਧੇ ਸਕੂਲਾਂ ਅਤੇ ਕਿਤਾਵਾਂ ਵਿੱਚ ਪੁੱਛਗਿੱਛ ਕਰਕੇ ਜਾਣਕਾਰੀ ਪ੍ਰਾਪਤ ਕਰ ਸਕਦੇ ਹੋ। ਵਿਕਲਪਾਂ ਵਿੱਚ ਫੁੱਟਬਾਲ, ਤੈਰਾਕੀ, ਸੰਗੀਤ, ਕਲਾ ਅਤੇ ਡਾਂਸ ਸ਼ਾਮਲ ਹਨ।",
        faq_cat_language_learning_title: "ਭਾਸ਼ਾ ਸਿੱਖਣਾ",
        faq_language_q1: "ਆਕੇਨ ਵਿੱਚ ਕਿਹੜੇ ਭਾਸ਼ਾਈ ਸਕੂਲ ਉਪਲਬਧ ਹਨ?",
        faq_language_a1: "ਆਕੇਨ ਵਿੱਚ ਕਈ ਭਾਸ਼ਾਈ ਸਕੂਲ ਹਨ ਜਿਨ੍ਹਾਂ ਵਿੱਚ ਵੋਲਕਸ਼ੋਚਸ਼ੂਲੇ (VHS) ਆਕੇਨ, ਗੋਏਥੇ-ਇੰਸਟੀਚਿਊਟ (ਹਾਲਾਂਕਿ ਸਿੱਧੇ ਆਕੇਨ ਵਿੱਚ ਨਹੀਂ, ਨੇੜੇ ਹੈ), ਅਤੇ ਸਪ੍ਰਾਚੇਨਾਕਾਡੇਮੀ ਆਕੇਨ ਵਰਗੇ ਨਿੱਜੀ ਭਾਸ਼ਾਈ ਸਕੂਲ ਸ਼ਾਮਲ ਹਨ। ਉਹ ਵੱਖ-ਵੱਖ ਪੱਧਰਾਂ ਅਤੇ ਕੋਰਸ ਫਾਰਮੈਟਾਂ ਦੀ ਪੇਸ਼ਕਸ਼ ਕਰਦੇ ਹਨ।",
        faq_language_q2: "'ਇੰਟੈਗਰੇਸ਼ਨ ਕੋਰਸ' ਕੀ ਹੈ ਅਤੇ ਮੈਂ ਇਸ ਵਿੱਚ ਕਿਵੇਂ ਸ਼ਾਮਲ ਹੋ ਸਕਦਾ ਹਾਂ?",
        faq_language_a2: "ਇੱਕ ਇੰਟੈਗਰੇਸ਼ਨ ਕੋਰਸ (ਇੰਟੈਗਰੇਸ਼ਨਸਕੁਰਸ) ਨਵੇਂ ਪ੍ਰਵਾਸੀਆਂ ਲਈ ਇੱਕ ਜਰਮਨ ਭਾਸ਼ਾ ਅਤੇ ਓਰੀਐਂਟੇਸ਼ਨ ਕੋਰਸ ਹੈ, ਜੋ ਅੰਸ਼ਕ ਤੌਰ 'ਤੇ ਸਰਕਾਰ ਦੁਆਰਾ ਫੰਡ ਕੀਤਾ ਜਾਂਦਾ ਹੈ। ਇਹ B1 ਜਰਮਨ ਭਾਸ਼ਾ ਪੱਧਰ ਤੱਕ ਕਵਰ ਕਰਦਾ ਹੈ ਅਤੇ ਜਰਮਨ ਸੱਭਿਆਚਾਰ, ਇਤਿਹਾਸ, ਅਤੇ ਕਾਨੂੰਨੀ ਪ੍ਰਣਾਲੀ 'ਤੇ ਇੱਕ ਮੋਡਿਊਲ ਸ਼ਾਮਲ ਕਰਦਾ ਹੈ। ਤੁਸੀਂ ਬੁੰਡੇਸਅਮਟ ਫੁਰ ਮਾਈਗ੍ਰੇਸ਼ਨ ਉਂਡ ਫਲੁਚਟਲਿੰਗੇ (BAMF) ਰਾਹੀਂ ਜਾਂ ਸਿੱਧੇ ਅਧਿਕਾਰਤ ਭਾਸ਼ਾ ਸਕੂਲਾਂ ਨਾਲ ਅਰਜ਼ੀ ਦੇ ਸਕਦੇ ਹੋ।",
        faq_language_q3: "ਮੈਂ ਪੂਰਾ ਸਮਾਂ ਕੰਮ ਕਰਦੇ ਹੋਏ ਜਰਮਨ ਕਿਵੇਂ ਸਿੱਖ ਸਕਦਾ ਹਾਂ?",
        faq_language_a3: "ਕਈ ਭਾਸ਼ਾਈ ਸਕੂਲ ਖਾਸ ਤੌਰ 'ਤੇ ਕੰਮ ਕਰਨ ਵਾਲੇ ਪੇਸ਼ੇਵਰਾਂ ਲਈ ਡਿਜ਼ਾਈਨ ਕੀਤੇ ਸ਼ਾਮ ਜਾਂ ਵੀਕੈਂਡ ਕੋਰਸ ਪੇਸ਼ ਕਰਦੇ ਹਨ। ਔਨਲਾਈਨ ਪਲੇਟਫਾਰਮ (ਜਿਵੇਂ, ਡੂਓਲਿੰਗੋ, ਬਾਬਲ, ਡਿਊਸ਼ ਵੇਲੇ), ਭਾਸ਼ਾਈ ਵਟਾਂਦਰਾ ਭਾਗੀਦਾਰ, ਅਤੇ ਜਰਮਨ ਸਹਿਕਰਮੀਆਂ ਜਾਂ ਦੋਸਤਾਂ ਨਾਲ ਅਭਿਆਸ ਕਰਨਾ ਵੀ ਬਹੁਤ ਪ੍ਰਭਾਵਸ਼ਾਲੀ ਹੋ ਸਕਦਾ ਹੈ। ਕੁਝ ਮਾਲਕ ਇਨ-ਹਾਊਸ ਭਾਸ਼ਾਈ ਸਿਖਲਾਈ ਵੀ ਪੇਸ਼ ਕਰਦੇ ਹਨ।",
        faq_cat_residence_permit_title: "ਰਿਹਾਇਸ਼ੀ ਪਰਮਿਟ",
        faq_residence_q1: "ਪਛਾਣ ਅਤੇ ਵੀਜ਼ਾ ਦਸਤਾਵੇਜ਼ ਵਜੋਂ ਰਿਹਾਇਸ਼ੀ ਪਰਮਿਟ ਕਿਉਂ ਮਹੱਤਵਪੂਰਨ ਹੈ?",
        faq_residence_a1: "ਤੁਹਾਡਾ ਰਿਹਾਇਸ਼ੀ ਪਰਮਿਟ (ਆਉਫੇਨਥਾਲਟਸਟਾਈਟਲ) ਜਰਮਨੀ ਵਿੱਚ ਕਾਨੂੰਨੀ ਰਿਹਾਇਸ਼ ਦਾ ਤੁਹਾਡਾ ਅਧਿਕਾਰਤ ਸਬੂਤ ਹੈ। ਇਹ ਜਰਮਨੀ ਦੇ ਅੰਦਰ ਤੁਹਾਡੇ ਪ੍ਰਾਇਮਰੀ ਪਛਾਣ ਦਸਤਾਵੇਜ਼ ਵਜੋਂ ਕੰਮ ਕਰਦਾ ਹੈ ਅਤੇ ਤੁਹਾਡੇ ਅਧਿਕਾਰਾਂ (ਜਿਵੇਂ, ਕੰਮ, ਅਧਿਐਨ) ਨੂੰ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ। ਇਹ ਜਰਮਨੀ ਅਤੇ ਹੋਰ ਸ਼ੈਂਗੇਨ ਦੇਸ਼ਾਂ ਵਿੱਚ ਮੁੜ-ਦਾਖਲੇ ਲਈ ਤੁਹਾਡੇ ਵੀਜ਼ਾ ਵਜੋਂ ਵੀ ਕੰਮ ਕਰਦਾ ਹੈ।",
        faq_residence_q2: "ਮੈਂ ਪਹਿਲੀ ਵਾਰ ਰਿਹਾਇਸ਼ੀ ਪਰਮਿਟ ਲਈ ਕਿਵੇਂ ਅਰਜ਼ੀ ਦੇਵਾਂ ਅਤੇ ਇਸਨੂੰ ਕਿਵੇਂ ਵਧਾਵਾਂ?",
        faq_residence_a2: "ਸ਼ੁਰੂਆਤੀ ਅਰਜ਼ੀ ਆਮ ਤੌਰ 'ਤੇ ਆਕੇਨ ਵਿੱਚ ਆਊਸਲੈਂਡਰਬੇਹੋਰਡੇ (ਵਿਦੇਸ਼ੀ ਦਫ਼ਤਰ) ਵਿੱਚ ਤੁਹਾਡੀ ਅਨਮੇਲਡੁੰਗ ਪੂਰੀ ਕਰਨ ਤੋਂ ਬਾਅਦ ਕੀਤੀ ਜਾਂਦੀ ਹੈ। ਤੁਹਾਨੂੰ ਤੁਹਾਡਾ ਪਾਸਪੋਰਟ, ਵੀਜ਼ਾ, ਰੁਜ਼ਗਾਰ ਇਕਰਾਰਨਾਮਾ, ਸਿਹਤ ਬੀਮੇ ਦਾ ਸਬੂਤ, ਅਤੇ ਹੋਰ ਦਸਤਾਵੇਜ਼ਾਂ ਦੀ ਲੋੜ ਪਵੇਗੀ। ਵਾਧੇ ਲਈ, ਤੁਹਾਡੇ ਮੌਜੂਦਾ ਪਰਮਿਟ ਦੀ ਮਿਆਦ ਪੁੱਗਣ ਤੋਂ ਪਹਿਲਾਂ ਚੰਗੀ ਤਰ੍ਹਾਂ ਅਰਜ਼ੀ ਦਿਓ, ਅੱਪਡੇਟ ਕੀਤੇ ਦਸਤਾਵੇਜ਼ ਪ੍ਰਦਾਨ ਕਰੋ। ਮੁਲਾਕਾਤਾਂ ਆਮ ਤੌਰ 'ਤੇ ਲਾਜ਼ਮੀ ਹੁੰਦੀਆਂ ਹਨ।",
        faq_residence_q3: "ਮੈਂ 'ਸੈਟਲਮੈਂਟ ਪਰਮਿਟ' (ਸਥਾਈ ਨਿਵਾਸ) ਲਈ ਕਿਵੇਂ ਅਰਜ਼ੀ ਦੇਵਾਂ?",
        faq_residence_a3: "ਇੱਕ ਸੈਟਲਮੈਂਟ ਪਰਮਿਟ (ਨੀਡਰਲਾਸੁੰਗਸੇਰਲਾਉਬਨਿਸ) ਤੁਹਾਨੂੰ ਸਥਾਈ ਨਿਵਾਸ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ। ਯੋਗਤਾ ਲਈ ਆਮ ਤੌਰ 'ਤੇ 5 ਸਾਲਾਂ ਦੀ ਕਾਨੂੰਨੀ ਰਿਹਾਇਸ਼ (ਬਲੂ ਕਾਰਡ ਧਾਰਕਾਂ ਲਈ ਛੋਟਾ), ਲੋੜੀਂਦੇ ਜਰਮਨ ਭਾਸ਼ਾ ਦੇ ਹੁਨਰ (B1), ਸੁਰੱਖਿਅਤ ਰੋਜ਼ੀ-ਰੋਟੀ, ਢੁਕਵੀਂ ਰਹਿਣ ਵਾਲੀ ਥਾਂ, ਅਤੇ ਪੈਨਸ਼ਨ ਸਕੀਮ ਵਿੱਚ ਯੋਗਦਾਨ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ। ਆਊਸਲੈਂਡਰਬੇਹੋਰਡੇ ਵਿੱਚ ਅਰਜ਼ੀ ਦਿਓ।",
        faq_cat_house_hunting_title: "ਘਰ ਦੀ ਭਾਲ",
        faq_house_hunting_q1: "ਮੈਂ ਆਕੇਨ ਵਿੱਚ ਇੱਕ ਲੰਬੀ ਮਿਆਦ ਦਾ ਅਪਾਰਟਮੈਂਟ ਕਿਵੇਂ ਲੱਭਾਂ?",
        faq_house_hunting_a1: "ਅਪਾਰਟਮੈਂਟ ਦੀ ਭਾਲ ਲਈ ਪ੍ਰਸਿੱਧ ਪਲੇਟਫਾਰਮਾਂ ਵਿੱਚ ImmobilienScout24, Immowelt, ਅਤੇ eBay Kleinanzeigen ਸ਼ਾਮਲ ਹਨ। ਨੈੱਟਵਰਕਿੰਗ ਅਤੇ ਸਥਾਨਕ ਰੀਅਲ ਅਸਟੇਟ ਏਜੰਟ (Makler) ਵੀ ਮਦਦਗਾਰ ਹੋ ਸਕਦੇ ਹਨ। ਖਾਸ ਤੌਰ 'ਤੇ ਪਰਿਵਾਰ-ਅਨੁਕੂਲ ਅਪਾਰਟਮੈਂਟਾਂ ਲਈ ਉੱਚ ਮੰਗ ਅਤੇ ਮੁਕਾਬਲੇ ਲਈ ਤਿਆਰ ਰਹੋ।",
        faq_house_hunting_q2: "ਮੈਨੂੰ ਕਿਰਾਏ ਦੇ ਇਕਰਾਰਨਾਮੇ (ਵਰਟਰਾਗ) ਅਤੇ ਸਮਾਪਤੀ (ਕੁੰਡੀਗੁੰਗ) ਬਾਰੇ ਕੀ ਪਤਾ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ?",
        faq_house_hunting_a2: "ਜਰਮਨ ਕਿਰਾਏ ਦੇ ਇਕਰਾਰਨਾਮੇ (ਮੀਟਵਰਟਰਾਗ) ਵਿਆਪਕ ਹੁੰਦੇ ਹਨ। ਕਿਰਾਏ ਵਿੱਚ ਵਾਧੇ, ਨਵੀਨੀਕਰਨ ਦੇ ਫਰਜ਼ਾਂ, ਅਤੇ ਸਮਾਪਤੀ ਲਈ ਨੋਟਿਸ ਪੀਰੀਅਡ (ਆਮ ਤੌਰ 'ਤੇ ਕਿਰਾਏਦਾਰਾਂ ਲਈ 3 ਮਹੀਨੇ) ਬਾਰੇ ਧਾਰਾਵਾਂ 'ਤੇ ਧਿਆਨ ਦਿਓ। ਹਮੇਸ਼ਾ ਇਕਰਾਰਨਾਮੇ ਨੂੰ ਧਿਆਨ ਨਾਲ ਪੜ੍ਹੋ ਅਤੇ ਕਿਸੇ ਵੀ ਸ਼ੱਕ ਨੂੰ ਸਪੱਸ਼ਟ ਕਰੋ। ਜੇ ਲੋੜ ਹੋਵੇ ਤਾਂ ਮੀਟਰਵੇਰਿਨ (ਕਿਰਾਏਦਾਰਾਂ ਦੀ ਐਸੋਸੀਏਸ਼ਨ) ਤੋਂ ਸਲਾਹ ਲਓ।",
        faq_house_hunting_q3: "ਜਾਇਦਾਦ ਖਰੀਦਣ (ਨੋਟਾਰ, ਬਾਉਅਮਟ, ਫਿਨਾਨਜ਼ਾਮਟ) ਵਿੱਚ ਕੀ ਸ਼ਾਮਲ ਹੈ?",
        faq_house_hunting_a3: "ਜਰਮਨੀ ਵਿੱਚ ਜਾਇਦਾਦ ਖਰੀਦਣ ਵਿੱਚ ਇੱਕ ਨੋਟਾਰ (ਜਨਤਕ ਨੋਟਰੀ) ਸ਼ਾਮਲ ਹੁੰਦਾ ਹੈ ਜੋ ਖਰੀਦ ਸਮਝੌਤੇ ਦਾ ਖਰੜਾ ਤਿਆਰ ਕਰਦਾ ਹੈ ਅਤੇ ਪ੍ਰਮਾਣਿਤ ਕਰਦਾ ਹੈ। ਬਾਉਅਮਟ (ਬਿਲਡਿੰਗ ਅਥਾਰਟੀ) ਬਿਲਡਿੰਗ ਪਰਮਿਟ ਅਤੇ ਨਿਯਮਾਂ ਨੂੰ ਸੰਭਾਲਦਾ ਹੈ। ਫਿਨਾਨਜ਼ਾਮਟ (ਟੈਕਸ ਦਫ਼ਤਰ) ਜਾਇਦਾਦ ਟ੍ਰਾਂਸਫਰ ਟੈਕਸ (ਗ੍ਰੁੰਡੇਰਵੇਰਬਸਟੂਅਰ) ਲਈ ਸ਼ਾਮਲ ਹੁੰਦਾ ਹੈ। ਗੁੰਝਲਦਾਰਤਾ ਦੇ ਕਾਰਨ ਕਾਨੂੰਨੀ ਅਤੇ ਵਿੱਤੀ ਸਲਾਹ ਦੀ ਬਹੁਤ ਜ਼ਿਆਦਾ ਸਿਫਾਰਸ਼ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।",
        faq_cat_social_circle_title: "ਸਮਾਜਿਕ ਘੇਰਾ",
        faq_social_circle_q1: "ਮੈਂ ਆਕੇਨ ਵਿੱਚ ਇੱਕ ਸਮਾਜਿਕ ਘੇਰਾ ਕਿਵੇਂ ਬਣਾ ਸਕਦਾ ਹਾਂ ਅਤੇ ਹੋਰ ਭਾਰਤੀਆਂ ਨੂੰ ਕਿਵੇਂ ਮਿਲ ਸਕਦਾ ਹਾਂ?",
        faq_social_circle_a1: "AIFA e.V. ਸਮਾਗਮਾਂ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਣਾ ਇੱਕ ਵਧੀਆ ਸ਼ੁਰੂਆਤ ਹੈ! ਨਾਲ ਹੀ, ਸੋਸ਼ਲ ਮੀਡੀਆ (ਫੇਸਬੁੱਕ, ਵਟਸਐਪ) 'ਤੇ ਸਥਾਨਕ ਭਾਰਤੀ ਭਾਈਚਾਰਕ ਸਮੂਹਾਂ ਦੀ ਪੜਚੋਲ ਕਰੋ, ਸੱਭਿਆਚਾਰਕ ਤਿਉਹਾਰਾਂ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਵੋ, ਅਤੇ ਯੂਨੀਵਰਸਿਟੀ ਜਾਂ ਕੰਪਨੀ ਦੇ ਅੰਤਰਰਾਸ਼ਟਰੀ ਸਮੂਹਾਂ ਵਿੱਚ ਹਿੱਸਾ ਲਓ। ਭਾਸ਼ਾ ਵਟਾਂਦਰਾ ਮੀਟਅੱਪ ਵੀ ਵੱਖ-ਵੱਖ ਲੋਕਾਂ ਨੂੰ ਮਿਲਣ ਲਈ ਚੰਗੇ ਹਨ।",
        faq_social_circle_q2: "ਕੀ ਆਕੇਨ ਵਿੱਚ ਕੋਈ ਭਾਰਤੀ ਐਸੋਸੀਏਸ਼ਨ (ਵੇਰਿਨ) ਜਾਂ ਸੱਭਿਆਚਾਰਕ ਸਮੂਹ ਹਨ?",
        faq_social_circle_a2: "ਹਾਂ, AIFA e.V. ਤੋਂ ਇਲਾਵਾ, ਹੋਰ ਛੋਟੇ ਭਾਰਤੀ ਸੱਭਿਆਚਾਰਕ ਸਮੂਹ ਜਾਂ ਵਿਦਿਆਰਥੀ ਐਸੋਸੀਏਸ਼ਨਾਂ (ਖਾਸ ਕਰਕੇ RWTH ਆਕੇਨ ਯੂਨੀਵਰਸਿਟੀ ਦੇ ਆਲੇ ਦੁਆਲੇ) ਹੋ ਸਕਦੀਆਂ ਹਨ। 'ਇੰਡੀਸ਼ਰ ਵੇਰਿਨ ਆਕੇਨ' ਲਈ ਔਨਲਾਈਨ ਖੋਜ ਕਰਨਾ ਜਾਂ ਭਾਰਤੀ ਕਰਿਆਨੇ ਦੀਆਂ ਦੁਕਾਨਾਂ 'ਤੇ ਨੋਟਿਸ ਬੋਰਡਾਂ ਦੀ ਜਾਂਚ ਕਰਨਾ ਸੁਰਾਗ ਪ੍ਰਦਾਨ ਕਰ ਸਕਦਾ ਹੈ।",
        faq_social_circle_q3: "ਮੈਂ ਆਕੇਨ ਵਿੱਚ ਸ਼ੌਕ ਅਤੇ ਖੇਡਾਂ ਕਿਵੇਂ ਕਰ ਸਕਦਾ ਹਾਂ?",
        faq_social_circle_a3: "ਆਕੇਨ ਵਿੱਚ ਫੁੱਟਬਾਲ, ਟੈਨਿਸ, ਤੈਰਾਕੀ ਅਤੇ ਹਾਈਕਿੰਗ ਵਰਗੀਆਂ ਵੱਖ-ਵੱਖ ਗਤੀਵਿਧੀਆਂ ਲਈ ਬਹੁਤ ਸਾਰੇ ਸਪੋਰਟਸ ਕਲੱਬ (ਸਪੋਰਟਸਵੇਰਿਨ) ਹਨ। ਹੋਚਸ਼ੂਲਸਪੋਰਟ (ਯੂਨੀਵਰਸਿਟੀ ਸਪੋਰਟਸ) ਵਿਦਿਆਰਥੀਆਂ ਅਤੇ ਕਰਮਚਾਰੀਆਂ ਲਈ ਬਹੁਤ ਸਾਰੇ ਕੋਰਸ ਪੇਸ਼ ਕਰਦਾ ਹੈ। ਸ਼ੌਕ ਲਈ, ਸਥਾਨਕ ਕਮਿਊਨਿਟੀ ਸੈਂਟਰਾਂ (ਵੋਲਕਸ਼ੋਚਸ਼ੂਲੇ), ਪ੍ਰਾਈਵੇਟ ਕਲੱਬਾਂ, ਜਾਂ Meetup.com ਵਰਗੇ ਔਨਲਾਈਨ ਪਲੇਟਫਾਰਮਾਂ 'ਤੇ ਦਿਲਚਸਪੀ-ਆਧਾਰਿਤ ਸਮੂਹਾਂ ਦੀ ਜਾਂਚ ਕਰੋ।",
        faq_cat_citizenship_title: "ਨਾਗਰਿਕਤਾ",
        faq_citizenship_q1: "ਜਰਮਨ ਨਾਗਰਿਕਤਾ ਪ੍ਰਾਪਤ ਕਰਨ ਦੀ ਪ੍ਰਕਿਰਿਆ ਕੀ ਹੈ?",
        faq_citizenship_a1: "ਕੁਦਰਤੀਕਰਨ (ਆਇਨਬੁਰਗਰੁੰਗ) ਲਈ ਮਿਆਰੀ ਪ੍ਰਕਿਰਿਆ ਲਈ 8 ਸਾਲਾਂ ਦੀ ਕਾਨੂੰਨੀ ਰਿਹਾਇਸ਼ (ਕੁਝ ਮਾਮਲਿਆਂ ਵਿੱਚ ਘੱਟ, ਜਿਵੇਂ ਕਿ ਏਕੀਕਰਨ ਕੋਰਸ ਦੇ ਨਾਲ 7 ਸਾਲ, ਜਰਮਨ ਨਾਗਰਿਕਾਂ ਦੇ ਜੀਵਨ ਸਾਥੀਆਂ ਲਈ 6 ਸਾਲ), ਲੋੜੀਂਦੇ ਜਰਮਨ ਭਾਸ਼ਾ ਦੇ ਹੁਨਰ (B1/B2), ਇੱਕ ਕੁਦਰਤੀਕਰਨ ਟੈਸਟ ਪਾਸ ਕਰਨਾ, ਅਤੇ ਆਮ ਤੌਰ 'ਤੇ ਤੁਹਾਡੀ ਪਿਛਲੀ ਨਾਗਰਿਕਤਾ ਦਾ ਤਿਆਗ ਕਰਨਾ ਸ਼ਾਮਲ ਹੈ (ਭਾਰਤ ਬਾਲਗਾਂ ਲਈ ਦੋਹਰੀ ਨਾਗਰਿਕਤਾ ਦੀ ਇਜਾਜ਼ਤ ਨਹੀਂ ਦਿੰਦਾ)।",
        faq_citizenship_q2: "ਭਾਰਤੀ ਪਾਸਪੋਰਟ ਸਮਰਪਣ ਕਰਨ ਅਤੇ OCI ਕਾਰਡ ਪ੍ਰਾਪਤ ਕਰਨ ਦੀ ਪ੍ਰਕਿਰਿਆ ਕੀ ਹੈ?",
        faq_citizenship_a2: "ਜਰਮਨ ਨਾਗਰਿਕਤਾ ਪ੍ਰਾਪਤ ਕਰਨ 'ਤੇ, ਤੁਹਾਨੂੰ ਆਪਣਾ ਭਾਰਤੀ ਪਾਸਪੋਰਟ ਭਾਰਤੀ ਦੂਤਾਵਾਸ/ਕੌਂਸਲੇਟ ਨੂੰ ਸਮਰਪਣ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ। ਤੁਹਾਨੂੰ ਫਿਰ ਇੱਕ 'ਸਮਰਪਣ ਸਰਟੀਫਿਕੇਟ' ਪ੍ਰਾਪਤ ਹੋਵੇਗਾ। ਬਾਅਦ ਵਿੱਚ, ਤੁਸੀਂ ਓਵਰਸੀਜ਼ ਸਿਟੀਜ਼ਨ ਆਫ਼ ਇੰਡੀਆ (OCI) ਕਾਰਡ ਲਈ ਅਰਜ਼ੀ ਦੇ ਸਕਦੇ ਹੋ, ਜੋ ਭਾਰਤ ਅਤੇ ਹੋਰ ਲਾਭਾਂ ਲਈ ਜੀਵਨ ਭਰ ਵੀਜ਼ਾ-ਮੁਕਤ ਯਾਤਰਾ ਦੀ ਇਜਾਜ਼ਤ ਦਿੰਦਾ ਹੈ। ਅਰਜ਼ੀ ਪ੍ਰਕਿਰਿਆ ਭਾਰਤੀ ਸਰਕਾਰ ਦੇ ਪੋਰਟਲ ਰਾਹੀਂ ਔਨਲਾਈਨ ਹੈ।",        
        contact_title: "ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
        contact_intro: "ਸਵਾਲ ਹਨ ਜਾਂ ਸੰਪਰਕ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ? ਹੇਠਾਂ ਦਿੱਤਾ ਫਾਰਮ ਭਰੋ ਅਤੇ ਅਸੀਂ ਜਲਦੀ ਤੋਂ ਜਲਦੀ ਤੁਹਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰਾਂਗੇ।",
        your_name_label: "ਤੁਹਾਡਾ ਨਾਮ",
        your_name_placeholder: "ਜੌਨ ਡੋ",
        your_email_label: "ਤੁਹਾਡੀ ਈਮੇਲ",
        your_email_placeholder: "john.doe@example.com",
        subject_label: "ਵਿਸ਼ਾ",
        subject_placeholder: "ਮੈਂਬਰਸ਼ਿਪ ਬਾਰੇ ਪੁੱਛਗਿੱਛ",
        message_label: "ਸੁਨੇਹਾ",
        message_placeholder: "ਆਪਣਾ ਸੁਨੇਹਾ ਇੱਥੇ ਲਿਖੋ...",
        send_message_button: "ਸੁਨੇਹਾ ਭੇਜੋ",
        contact_success_message: "ਤੁਹਾਡੇ ਸੁਨੇਹੇ ਲਈ ਧੰਨਵਾਦ! ਅਸੀਂ ਜਲਦੀ ਹੀ ਤੁਹਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰਾਂਗੇ।",
        site_title_event_registration: "ਆਕੇਨ ਵਿੱਚ ਭਾਰਤੀ ਪਰਿਵਾਰਾਂ ਦੀ ਐਸੋਸੀਏਸ਼ਨ - ਸਮਾਗਮ ਰਜਿਸਟ੍ਰੇਸ਼ਨ",
        event_reg_title: "ਸਮਾਗਮ ਰਜਿਸਟ੍ਰੇਸ਼ਨ",
        event_reg_intro: "ਸਾਡੇ ਆਉਣ ਵਾਲੇ ਸਮਾਗਮਾਂ ਲਈ ਰਜਿਸਟਰ ਕਰਨ ਲਈ ਕਿਰਪਾ ਕਰਕੇ ਹੇਠਾਂ ਦਿੱਤਾ ਫਾਰਮ ਭਰੋ।",
        event_reg_select_event_label: "ਸਮਾਗਮ ਚੁਣੋ",
        event_reg_select_event_placeholder: "ਇੱਕ ਸਮਾਗਮ ਚੁਣੋ",
        event_reg_summer_picnic_option: "ਗਰਮੀਆਂ ਦੀ ਪਰਿਵਾਰਕ ਪਿਕਨਿਕ (20 ਜੁਲਾਈ, 2024)",
        event_reg_dandiya_option: "ਡਾਂਡੀਆ ਦੇ ਜਸ਼ਨ 2025 (2 ਅਕਤੂਬਰ, 2025)",
        event_reg_num_attendees_label: "ਹਾਜ਼ਰੀਨ ਦੀ ਗਿਣਤੀ",
        event_reg_dietary_notes_label: "ਖੁਰਾਕੀ ਪਾਬੰਦੀਆਂ / ਵਿਸ਼ੇਸ਼ ਨੋਟਸ (ਵਿਕਲਪਿਕ)",
        event_reg_dietary_notes_placeholder: "ਜਿਵੇਂ, ਸ਼ਾਕਾਹਾਰੀ, ਗਲੂਟਨ-ਮੁਕਤ, ਵ੍ਹੀਲਚੇਅਰ ਪਹੁੰਚ ਦੀ ਲੋੜ ਹੈ",
        event_reg_submit_button: "ਸਮਾਗਮ ਲਈ ਰਜਿਸਟਰ ਕਰੋ",
        event_reg_success_message: "ਸਮਾਗਮ ਲਈ ਰਜਿਸਟਰ ਕਰਨ ਲਈ ਧੰਨਵਾਦ! ਅਸੀਂ ਤੁਹਾਨੂੰ ਮਿਲਣ ਦੀ ਉਮੀਦ ਕਰਦੇ ਹਾਂ।",
        event_reg_error_message: "ਸਮਾਗਮ ਲਈ ਰਜਿਸਟਰ ਕਰਨ ਵਿੱਚ ਗਲਤੀ। ਕਿਰਪਾ ਕਰਕੇ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।"        ,
        data_protection_title: "ਡਾਟਾ ਸੁਰੱਖਿਆ ਨੀਤੀ",
        data_protection_p1: "ਐਸੋਸੀਏਸ਼ਨ ਆਪਣੇ ਮੈਂਬਰਾਂ ਦੇ ਨਿੱਜੀ ਡਾਟੇ ਨੂੰ ਐਸੋਸੀਏਸ਼ਨ ਦੇ ਸੰਵਿਧਾਨ ਅਧੀਨ ਮਨਜ਼ੂਰਸ਼ੁਦਾ ਉਦੇਸ਼ਾਂ ਅਤੇ ਕਾਰਜਾਂ ਨੂੰ ਪੂਰਾ ਕਰਨ ਲਈ ਇਕੱਤਰ ਕਰਦੀ ਹੈ, ਪ੍ਰੋਸੈਸ ਕਰਦੀ ਹੈ ਅਤੇ ਵਰਤਦੀ ਹੈ।",
        data_protection_p2: "ਐਸੋਸੀਏਸ਼ਨ ਆਪਣੇ ਲਈ ਅਤੇ/ਜਾਂ ਆਪਣੇ ਮੈਂਬਰਾਂ ਲਈ ਲਾਭ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਬੀਮਾ ਪਾਲਿਸੀਆਂ ਦਾ ਪ੍ਰਬੰਧ ਕਰ ਸਕਦੀ ਹੈ। ਬੀਮਾ ਪਾਲਿਸੀਆਂ ਲਈ ਇਕਰਾਰਨਾਮਿਆਂ ਨੂੰ ਲਾਗੂ ਕਰਨ ਜਾਂ ਖਤਮ ਕਰਨ ਲਈ, ਐਸੋਸੀਏਸ਼ਨ ਆਪਣੇ ਮੈਂਬਰਾਂ ਦੇ ਨਿੱਜੀ ਡਾਟੇ ਨੂੰ ਲੋੜੀਂਦੇ ਹੱਦ ਤੱਕ ਜ਼ਿੰਮੇਵਾਰ ਬੀਮਾ ਕੰਪਨੀ ਨੂੰ ਭੇਜਦੀ ਹੈ।",
        data_protection_p3: "ਸੰਵਿਧਾਨ ਵਿੱਚ ਦੱਸੇ ਗਏ ਜਨਤਕ ਜਾਂ ਨਿੱਜੀ ਸਮਾਗਮਾਂ ਅਤੇ ਹੋਰ ਗਤੀਵਿਧੀਆਂ ਦੇ ਸਬੰਧ ਵਿੱਚ, ਐਸੋਸੀਏਸ਼ਨ ਆਪਣੀ ਵੈਬਸਾਈਟ 'ਤੇ ਆਪਣੇ ਮੈਂਬਰਾਂ ਦੇ ਨਾਮ ਅਤੇ ਫੋਟੋਆਂ ਪ੍ਰਕਾਸ਼ਿਤ ਕਰਦੀ ਹੈ ਅਤੇ ਪ੍ਰਕਾਸ਼ਨ ਲਈ ਪ੍ਰਿੰਟ ਅਤੇ ਟੈਲੀਮੀਡੀਆ ਦੇ ਨਾਲ-ਨਾਲ ਇਲੈਕਟ੍ਰਾਨਿਕ ਮੀਡੀਆ ਨੂੰ ਨਾਮ ਅਤੇ ਫੋਟੋਆਂ ਭੇਜਦੀ ਹੈ। ਇੱਕ ਮੈਂਬਰ ਕਿਸੇ ਵੀ ਸਮੇਂ ਬੋਰਡ ਨੂੰ ਆਪਣੀਆਂ ਨਿੱਜੀ ਫੋਟੋਆਂ ਦੇ ਪ੍ਰਕਾਸ਼ਨ 'ਤੇ ਇਤਰਾਜ਼ ਕਰ ਸਕਦਾ ਹੈ। ਇਤਰਾਜ਼ ਪ੍ਰਾਪਤ ਹੋਣ ਤੋਂ ਬਾਅਦ, ਪ੍ਰਕਾਸ਼ਨ/ਪ੍ਰਸਾਰਣ ਬੰਦ ਕਰ ਦਿੱਤਾ ਜਾਵੇਗਾ ਅਤੇ ਐਸੋਸੀਏਸ਼ਨ ਆਪਣੀ ਵੈਬਸਾਈਟ ਤੋਂ ਮੌਜੂਦਾ ਫੋਟੋਆਂ ਨੂੰ ਹਟਾ ਦੇਵੇਗੀ।",
        data_protection_p4: "ਆਪਣੀ ਮੈਂਬਰਸ਼ਿਪ ਅਤੇ ਇਸ ਸੰਵਿਧਾਨ ਦੀ ਸੰਬੰਧਿਤ ਮਾਨਤਾ ਦੁਆਰਾ, ਮੈਂਬਰ ਉੱਪਰ ਦੱਸੀ ਗਈ ਹੱਦ ਅਤੇ ਦਾਇਰੇ ਤੱਕ ਆਪਣੇ ਨਿੱਜੀ ਡਾਟੇ ਦੇ ਸੰਗ੍ਰਹਿ, ਪ੍ਰੋਸੈਸਿੰਗ ਅਤੇ ਵਰਤੋਂ ਲਈ ਸਹਿਮਤ ਹਨ। ਐਸੋਸੀਏਸ਼ਨ ਨੂੰ ਆਪਣੇ ਕਾਨੂੰਨੀ ਕਾਰਜਾਂ ਅਤੇ ਉਦੇਸ਼ਾਂ ਨੂੰ ਪੂਰਾ ਕਰਨ ਤੋਂ ਇਲਾਵਾ ਹੋਰ ਉਦੇਸ਼ਾਂ ਲਈ ਡਾਟੇ ਦੀ ਵਰਤੋਂ ਕਰਨ ਦੀ ਇਜਾਜ਼ਤ ਸਿਰਫ ਤਾਂ ਹੀ ਹੈ ਜੇਕਰ ਉਹ ਕਾਨੂੰਨੀ ਤੌਰ 'ਤੇ ਅਜਿਹਾ ਕਰਨ ਲਈ ਪਾਬੰਦ ਹੈ। ਡਾਟਾ ਵੇਚਿਆ ਨਹੀਂ ਜਾ ਸਕਦਾ।",
        data_protection_p5: "ਹਰੇਕ ਮੈਂਬਰ ਡਾਟੇ ਨੂੰ ਗੁਪਤ ਰੱਖਣ ਦੀ ਜ਼ਿੰਮੇਵਾਰੀ ਲੈਂਦਾ ਹੈ, ਜੋ ਉਹਨਾਂ ਨੂੰ ਮੈਂਬਰਸ਼ਿਪ ਸੂਚੀ ਦੇ ਹਿੱਸੇ ਵਜੋਂ ਉਪਲਬਧ ਕਰਵਾਇਆ ਜਾਂਦਾ ਹੈ। ਇਹੀ ਗੱਲ ਐਸੋਸੀਏਸ਼ਨ ਦੇ ਸਾਰੇ ਵਿੱਤੀ ਮਾਮਲਿਆਂ 'ਤੇ ਵੀ ਲਾਗੂ ਹੁੰਦੀ ਹੈ।",
        data_protection_p6: "ਅਸੀਂ ਮੈਂਬਰਾਂ ਦੇ ਨਿੱਜੀ ਡਾਟੇ ਨੂੰ ਕਿਸੇ ਵੀ ਵਪਾਰਕ ਜਾਂ ਗੈਰ-ਵਪਾਰਕ ਉਦੇਸ਼ਾਂ ਲਈ ਤੀਜੀ ਧਿਰਾਂ ਨੂੰ ਪ੍ਰਗਟ ਨਾ ਕਰਨ ਲਈ ਵਚਨਬੱਧ ਹਾਂ। ਡਾਟਾ ਵਰਤੋਂ ਬਾਰੇ ਹੋਰ ਵੇਰਵਿਆਂ ਲਈ, ਕਿਰਪਾ ਕਰਕੇ ਸਾਡੀ ਆਮ ਡਾਟਾ ਸੁਰੱਖਿਆ ਨੀਤੀ ਇੱਥੇ ਵੇਖੋ (<a href=\"https://www.aifaev.de\" class=\"text-blue-600 hover:underline\" target=\"_blank\">www.aifaev.de</a>)"        
    },
    kn: { // Kannada
        site_title_home: "ಆಕೆನ್‌ನಲ್ಲಿರುವ ಭಾರತೀಯ ಕುಟುಂಬಗಳ ಸಂಘ - ಮುಖಪುಟ",
        site_title_about: "ಆಕೆನ್‌ನಲ್ಲಿರುವ ಭಾರತೀಯ ಕುಟುಂಬಗಳ ಸಂಘ - ನಮ್ಮ ಬಗ್ಗೆ",
        site_title_events: "ಆಕೆನ್‌ನಲ್ಲಿರುವ ಭಾರತೀಯ ಕುಟುಂಬಗಳ ಸಂಘ - ಕಾರ್ಯಕ್ರಮಗಳು",
        site_title_membership: "ಆಕೆನ್‌ನಲ್ಲಿರುವ ಭಾರತೀಯ ಕುಟುಂಬಗಳ ಸಂಘ - ಸದಸ್ಯತ್ವ",
        site_title_faq: "ಆಕೆನ್‌ನಲ್ಲಿರುವ ಭಾರತೀಯ ಕುಟುಂಬಗಳ ಸಂಘ - ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು",
        site_title_contact: "ಆಕೆನ್‌ನಲ್ಲಿರುವ ಭಾರತೀಯ ಕುಟುಂಬಗಳ ಸಂಘ - ಸಂಪರ್ಕಿಸಿ",
        site_title_data_protection: "ಆಕೆನ್‌ನಲ್ಲಿರುವ ಭಾರತೀಯ ಕುಟುಂಬಗಳ ಸಂಘ - ದತ್ತಾಂಶ ಸಂರಕ್ಷಣಾ ನೀತಿ",        
        nav_home: "ಮುಖಪುಟ",
        nav_about: "ನಮ್ಮ ಬಗ್ಗೆ",
        nav_events: "ಕಾರ್ಯಕ್ರಮಗಳು",
        nav_membership: "ಸದಸ್ಯತ್ವ",
        nav_faq: "ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು",
        nav_contact: "ಸಂಪರ್ಕಿಸಿ",
        nav_event_registration: "ಕಾರ್ಯಕ್ರಮ ನೋಂದಣಿ", // NEW NAV KEY        
        home_main_title: "ಆಕೆನ್‌ನಲ್ಲಿರುವ ಭಾರತೀಯ ಕುಟುಂಬಗಳ ಸಂಘ",
        home_tagline: "ಆಕೆನ್‌ನಲ್ಲಿರುವ ಭಾರತೀಯ ಕುಟುಂಬಗಳನ್ನು ಸಂಪರ್ಕಿಸುವುದು, ಸಮುದಾಯವನ್ನು ಪೋಷಿಸುವುದು ಮತ್ತು ನಮ್ಮ ಶ್ರೀಮಂತ ಸಂಸ್ಕೃತಿಯನ್ನು ಆಚರಿಸುವುದು.",
        home_explore_events: "ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
        footer_copyright: "&copy; 2025 ಆಕೆನ್‌ನಲ್ಲಿರುವ ಭಾರತೀಯ ಕುಟುಂಬಗಳ ಸಂಘ. e.V. ನೋಂದಣಿ ಸಂಖ್ಯೆ VR 6590(Amtsgericht Aachen). ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
        footer_data_protection_policy: "ದತ್ತಾಂಶ ಸಂರಕ್ಷಣಾ ನೀತಿ",
        footer_terms: "ಸೇವಾ ನಿಯಮಗಳು",
        lang_en: "English",
        lang_de: "Deutsch",
        lang_hi: "हिन्दी",
        lang_mr: "मराठी",
        lang_te: "తెలుగు",
        lang_ta: "தமிழ்",
        lang_bn: "বাংলা",
        lang_pa: "ਪੰਜਾਬੀ",
        lang_kn: "ಕನ್ನಡ",
        lang_ml: "മലയാളം",
        lang_or: "ଓଡ଼ିଆ",
        lang_gu: "ગુજરાતી",
        lang_sa: "संस्कृतम्",
        lang_mai: "मैथिली",
        about_title: "ನಮ್ಮ ಸಂಘದ ಬಗ್ಗೆ",
        about_para1: "ಆಕೆನ್‌ನಲ್ಲಿರುವ ಭಾರತೀಯ ಕುಟುಂಬಗಳ ಸಂಘ (AIFA e.V.) ಜರ್ಮನಿಯ ಆಕೆನ್‌ನಲ್ಲಿ ವಾಸಿಸುವ ಭಾರತೀಯ ಕುಟುಂಬಗಳನ್ನು ಒಟ್ಟುಗೂಡಿಸಲು ಮೀಸಲಾಗಿರುವ ಒಂದು ಲಾಭರಹಿತ ಸಂಸ್ಥೆಯಾಗಿದೆ. ಸಾಂಸ್ಕೃತಿಕ ಪರಂಪರೆಯನ್ನು ಆಚರಿಸುವ, ಸಂಪ್ರದಾಯಗಳನ್ನು ಸಂರಕ್ಷಿಸುವ ಮತ್ತು ಹೊಸ ಸ್ನೇಹವನ್ನು ಬೆಳೆಸುವ ರೋಮಾಂಚಕ ಮತ್ತು ಬೆಂಬಲಿತ ಸಮುದಾಯವನ್ನು ರಚಿಸುವುದು ನಮ್ಮ ಉದ್ದೇಶವಾಗಿದೆ.",
        about_para2: "ನಾವು ವರ್ಷವಿಡೀ ವಿವಿಧ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ಆಯೋಜಿಸುತ್ತೇವೆ, ಸಾಂಸ್ಕೃತಿಕ ಉತ್ಸವಗಳು ಮತ್ತು ಸಾಮಾಜಿಕ ಕೂಟಗಳಿಂದ ಹಿಡಿದು ಶೈಕ್ಷಣಿಕ ಕಾರ್ಯಾಗಾರಗಳು ಮತ್ತು ಸಮುದಾಯ ಸೇವಾ ಉಪಕ್ರಮಗಳವರೆಗೆ. ಭಾರತೀಯ ಕುಟುಂಬಗಳಿಗೆ ಮನೆಯಿಂದ ದೂರವಿರುವ ಮನೆಯನ್ನು ಒದಗಿಸುವುದು, ಸ್ಥಳೀಯ ಸಮುದಾಯದಲ್ಲಿ ಸಂಯೋಜನೆಗೊಳ್ಳಲು ಸಹಾಯ ಮಾಡುವುದು ಮತ್ತು ಅವರ ಬೇರುಗಳಿಗೆ ಸಂಪರ್ಕದಲ್ಲಿರಲು ಸಹಾಯ ಮಾಡುವುದು ನಮ್ಮ ಗುರಿಯಾಗಿದೆ.",
        about_para3: "ನಮ್ಮ ಸಮುದಾಯದ ಆತ್ಮೀಯತೆಯನ್ನು ಅನುಭವಿಸಲು, ರೋಮಾಂಚಕ ಕಾರ್ಯಕ್ರಮಗಳಲ್ಲಿ ಭಾಗವಹಿಸಲು ಮತ್ತು ಆಕೆನ್‌ನಲ್ಲಿ ಬಲವಾದ ಮತ್ತು ಸುಸಂಬದ್ಧ ಭಾರತೀಯ ವಲಸಿಗರನ್ನು ನಿರ್ಮಿಸಲು ನಮ್ಮೊಂದಿಗೆ ಸೇರಿಕೊಳ್ಳಿ.",
        events_title: "ನಮ್ಮ ಕಾರ್ಯಕ್ರಮಗಳು",
        event_diwali_title: "ದೀಪಾವಳಿ ಆಚರಣೆ 2023",
        event_diwali_date: "ಅಕ್ಟೋಬರ್ 28, 2023",
        event_diwali_desc: "ಸಾಂಸ್ಕೃತಿಕ ಪ್ರದರ್ಶನಗಳು, ರುಚಿಕರವಾದ ಆಹಾರ ಮತ್ತು ಪಟಾಕಿಗಳೊಂದಿಗೆ ದೀಪಗಳ ಹಬ್ಬದ ಭವ್ಯ ಆಚರಣೆ. ಕುಟುಂಬಗಳು ಒಟ್ಟಾಗಿ ಸ್ಮರಣೀಯ ಸಂಜೆಯನ್ನು ಆನಂದಿಸಿದವು.",
        event_diwali_status: "ಹಿಂದಿನ ಕಾರ್ಯಕ್ರಮ",
        event_summer_title: "ಬೇಸಿಗೆ ಕುಟುಂಬ ಪಿಕ್ನಿಕ್",
        event_summer_date: "ಜುಲೈ 20, 2024",
        event_summer_desc: "ಆಟಗಳು, ಆಹಾರ ಮತ್ತು ಹೊರಾಂಗಣ ಚಟುವಟಿಕೆಗಳೊಂದಿಗೆ ವೆಸ್ಟ್‌ಪಾರ್ಕ್‌ನಲ್ಲಿ ಮೋಜಿನ ಕುಟುಂಬ ಪಿಕ್ನಿಕ್‌ಗಾಗಿ ನಮ್ಮೊಂದಿಗೆ ಸೇರಿಕೊಳ್ಳಿ. ನಿಮ್ಮ ಪಿಕ್ನಿಕ್ ಬುಟ್ಟಿಗಳನ್ನು ಮರೆಯಬೇಡಿ!",
        event_summer_status: "ಪ್ರಸ್ತುತ ಕಾರ್ಯಕ್ರಮ",
        event_dandiya_title: "ದಾಂಡಿಯಾ ಆಚರಣೆಗಳು 2025",
        event_dandiya_date: "ಅಕ್ಟೋಬರ್ 2, 2025",
        event_dandiya_desc: "ತಿರುಗಲು ಮತ್ತು ನೃತ್ಯ ಮಾಡಲು ಸಿದ್ಧರಾಗಿ! ಸಾಂಪ್ರದಾಯಿಕ ಸಂಗೀತ, ವರ್ಣರಂಜಿತ ಉಡುಪು ಮತ್ತು ಶಕ್ತಿಶಾಲಿ ನೃತ್ಯ ಚಲನೆಗಳೊಂದಿಗೆ ಹಬ್ಬದ ಉತ್ಸಾಹವನ್ನು ಆಚರಿಸುವ ರೋಮಾಂಚಕ ದಾಂಡಿಯಾ ಮತ್ತು ಗರ್ಭಾ ರಾತ್ರಿಗಾಗಿ ನಮ್ಮೊಂದಿಗೆ ಸೇರಿಕೊಳ್ಳಿ. ಸ್ಥಳ ಮತ್ತು ಚಟುವಟಿಕೆಗಳ ಕುರಿತು ಹೆಚ್ಚಿನ ವಿವರಗಳನ್ನು ಶೀಘ್ರದಲ್ಲೇ ಪ್ರಕಟಿಸಲಾಗುವುದು.",
        event_dandiya_status: "ಭವಿಷ್ಯದ ಕಾರ್ಯಕ್ರಮ",
        events_view_all: "ಎಲ್ಲಾ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
        events_register_now: "ಕಾರ್ಯಕ್ರಮಕ್ಕಾಗಿ ನೋಂದಾಯಿಸಿ", // NEW BUTTON TEXT        
        membership_title: "ಸದಸ್ಯರಾಗಿ",
        membership_intro: "ಆಕೆನ್‌ನಲ್ಲಿರುವ ಭಾರತೀಯ ಕುಟುಂಬಗಳ ಸಂಘ (AIFA e.V.) ಕ್ಕೆ ಸೇರಿಕೊಳ್ಳಿ ಮತ್ತು ನಮ್ಮ ಬೆಳೆಯುತ್ತಿರುವ ಸಮುದಾಯದ ಭಾಗವಾಗಿರಿ! ನಿಮ್ಮ ಸದಸ್ಯತ್ವವು ಉತ್ತೇಜಕ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ಆಯೋಜಿಸಲು ಮತ್ತು ಆಕೆನ್‌ನಲ್ಲಿರುವ ಭಾರತೀಯ ಕುಟುಂಬಗಳನ್ನು ಬೆಂಬಲಿಸಲು ನಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
        membership_individual_title: "ವೈಯಕ್ತಿಕ ಸದಸ್ಯತ್ವ",
        membership_individual_price: "€30",
        membership_individual_per_year: "/ ವರ್ಷ",
        membership_individual_desc: "ಸಂಪರ್ಕಿಸಲು ಬಯಸುವ ಏಕ ವ್ಯಕ್ತಿಗಳಿಗೆ ಸೂಕ್ತವಾಗಿದೆ.",
        membership_family_title: "ಕುಟುಂಬ ಸದಸ್ಯತ್ವ",
        membership_family_price: "€50",
        membership_family_per_year: "/ ವರ್ಷ",
        membership_family_desc: "ಒಂದೇ ಮನೆಯ ಎಲ್ಲಾ ಸದಸ್ಯರನ್ನು ಒಳಗೊಂಡಿದೆ.",
        membership_form_title: "ಸದಸ್ಯತ್ವ ಅರ್ಜಿ ನಮೂನೆ",
        membership_type_label: "ಸದಸ್ಯತ್ವ ಪ್ರಕಾರ",
        membership_type_select_option: "ಸದಸ್ಯತ್ವ ಪ್ರಕಾರವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
        membership_type_individual_option: "ವೈಯಕ್ತಿಕ ಸದಸ್ಯತ್ವ (€30/ವರ್ಷ)",
        membership_type_family_option: "ಕುಟುಂಬ ಸದಸ್ಯತ್ವ (€50/ವರ್ಷ)",
        first_name_label: "ಮೊದಲ ಹೆಸರು",
        first_name_placeholder: "ಜಾನ್",
        last_name_label: "ಕೊನೆಯ ಹೆಸರು",
        last_name_placeholder: "ಡೋ",
        num_family_members_label: "ಕುಟುಂಬ ಸದಸ್ಯರ ಸಂಖ್ಯೆ (ನಿಮ್ಮನ್ನು ಒಳಗೊಂಡಂತೆ)",
        num_family_members_placeholder: "ಉದಾ. 4",
        volunteer_checkbox: "ನಾನು AIFA e.V. ಕಾರ್ಯಕ್ರಮಗಳಿಗೆ ಸ್ವಯಂಸೇವಕನಾಗಿ ಲಭ್ಯವಿದ್ದೇನೆ.",
        apply_membership_button: "ಸದಸ್ಯತ್ವಕ್ಕಾಗಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ",
        membership_success_message: "ನಿಮ್ಮ ಸದಸ್ಯತ್ವ ಅರ್ಜಿಗೆ ಧನ್ಯವಾದಗಳು! ನಾವು ಶೀಘ್ರದಲ್ಲೇ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತೇವೆ.",
        faq_title: "ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು",
        faq_q1: "ಆಕೆನ್‌ನಲ್ಲಿರುವ ಭಾರತೀಯ ಕುಟುಂಬಗಳ ಸಂಘ (AIFA e.V.) ಎಂದರೇನು?",
        faq_a1: "AIFA e.V. ಜರ್ಮನಿಯ ಆಕೆನ್‌ನಲ್ಲಿ ವಾಸಿಸುವ ಭಾರತೀಯ ಕುಟುಂಬಗಳ ನಡುವೆ ಬಲವಾದ ಸಮುದಾಯವನ್ನು ಬೆಳೆಸಲು ಮೀಸಲಾಗಿರುವ ಒಂದು ಲಾಭರಹಿತ ಸಂಸ್ಥೆಯಾಗಿದೆ. ನಾವು ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳು, ಸಾಮಾಜಿಕ ಕೂಟಗಳು ಮತ್ತು ನೆಟ್‌ವರ್ಕಿಂಗ್ ಮತ್ತು ಬೆಂಬಲಕ್ಕಾಗಿ ವೇದಿಕೆಯನ್ನು ಆಯೋಜಿಸುತ್ತೇವೆ.",
        faq_q2: "ನಾನು ಹೇಗೆ ಸದಸ್ಯನಾಗಬಹುದು?",
        faq_a2: "ಸದಸ್ಯತ್ವ ವಿವರಗಳು ಮತ್ತು ಅರ್ಜಿ ನಮೂನೆಗಳು ಶೀಘ್ರದಲ್ಲೇ ನಮ್ಮ ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ಲಭ್ಯವಿರುತ್ತವೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪರಿಶೀಲಿಸಿ ಅಥವಾ ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ಸಂಪರ್ಕ ಫಾರ್ಮ್ ಮೂಲಕ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ.",
        faq_q3: "ಕಾರ್ಯಕ್ರಮಗಳು ಸದಸ್ಯರಲ್ಲದವರಿಗೂ ತೆರೆದಿವೆಯೇ?",
        faq_a3: "ಸಾಂಸ್ಕೃತಿಕ ವಿನಿಮಯ ಮತ್ತು ಸಮುದಾಯ ನಿರ್ಮಾಣವನ್ನು ಉತ್ತೇಜಿಸಲು ನಮ್ಮ ಅನೇಕ ಕಾರ್ಯಕ್ರಮಗಳು ಸದಸ್ಯರಲ್ಲದವರಿಗೂ ಸೇರಿದಂತೆ ಎಲ್ಲರಿಗೂ ತೆರೆದಿರುತ್ತವೆ. ಕೆಲವು ವಿಶೇಷ ಕಾರ್ಯಕ್ರಮಗಳಿಗೆ ಸದಸ್ಯತ್ವದ ಅಗತ್ಯವಿರಬಹುದು. ಪ್ರತಿ ಕಾರ್ಯಕ್ರಮಕ್ಕೆ ವಿವರಗಳನ್ನು ನಿರ್ದಿಷ್ಟಪಡಿಸಲಾಗುತ್ತದೆ.",
        faq_q4: "ನಾನು ಹೇಗೆ ಸ್ವಯಂಸೇವಕನಾಗಿ ಅಥವಾ ಕೊಡುಗೆ ನೀಡಬಹುದು?",
        faq_a4: "ನಾವು ಸ್ವಯಂಸೇವಕರನ್ನು ಸ್ವಾಗತಿಸುತ್ತೇವೆ! ನಿಮ್ಮ ಸಮಯ ಅಥವಾ ಕೌಶಲ್ಯಗಳನ್ನು ಕೊಡುಗೆ ನೀಡಲು ನೀವು ಆಸಕ್ತಿ ಹೊಂದಿದ್ದರೆ, ದಯವಿಟ್ಟು ಸಂಪರ್ಕ ಫಾರ್ಮ್ ಮೂಲಕ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ, ಮತ್ತು ನಾವು ಅವಕಾಶಗಳೊಂದಿಗೆ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತೇವೆ.",
        faq_portal_title: "ಮಾಹಿತಿ ಪೋರ್ಟಲ್: ಜರ್ಮನಿಯಲ್ಲಿರುವ ಭಾರತೀಯ ಕುಟುಂಬಗಳಿಗಾಗಿ ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು",
        faq_search_placeholder: "ಕೀವರ್ಡ್ ಮೂಲಕ FAQ ಗಳನ್ನು ಹುಡುಕಿ...",
        faq_cat_aifa_title: "AIFA e.V.",
        faq_first_entry_q1: "ಜರ್ಮನಿಯಲ್ಲಿ ಉದ್ಯೋಗ ಪ್ರಸ್ತಾಪವನ್ನು ಸ್ವೀಕರಿಸಿದ ನಂತರ ನಾನು ಏನು ಮಾಡಬೇಕು?",
        faq_first_entry_a1: "ಉದ್ಯೋಗ ಪ್ರಸ್ತಾಪವನ್ನು ಸ್ವೀಕರಿಸಿದ ನಂತರ, ನೀವು ತಕ್ಷಣ ವೀಸಾ ಅರ್ಜಿ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಪ್ರಾರಂಭಿಸಬೇಕು. ನಿಮ್ಮ ಉದ್ಯೋಗ ಒಪ್ಪಂದ, ಶೈಕ್ಷಣಿಕ ಪ್ರಮಾಣಪತ್ರಗಳು ಮತ್ತು ನಿಧಿಗಳ ಪುರಾವೆ ಸೇರಿದಂತೆ ಎಲ್ಲಾ ಅಗತ್ಯ ದಾಖಲೆಗಳನ್ನು ಸಂಗ್ರಹಿಸಿ. ನಿಮ್ಮ ದೇಶದಲ್ಲಿರುವ ಜರ್ಮನ್ ರಾಯಭಾರ ಕಚೇರಿ ಅಥವಾ ದೂತಾವಾಸದ ನಿರ್ದಿಷ್ಟ ಅವಶ್ಯಕತೆಗಳನ್ನು ಪರಿಶೀಲಿಸುವುದು ಸೂಕ್ತವಾಗಿದೆ.",
        faq_first_entry_q2: "ಕುಟುಂಬ ಪುನರೇಕೀಕರಣ ವೀಸಾಕ್ಕೆ ಪ್ರಕ್ರಿಯೆ ಏನು?",
        faq_first_entry_a2: "ಕುಟುಂಬ ಪುನರೇಕೀಕರಣ ವೀಸಾ ನಿಮ್ಮ ಸಂಗಾತಿ ಮತ್ತು ಅಪ್ರಾಪ್ತ ಮಕ್ಕಳು ಜರ್ಮನಿಯಲ್ಲಿ ನಿಮ್ಮೊಂದಿಗೆ ಸೇರಿಕೊಳ್ಳಲು ಅನುಮತಿಸುತ್ತದೆ. ಪ್ರಮುಖ ಅವಶ್ಯಕತೆಗಳಲ್ಲಿ ಸಾಮಾನ್ಯವಾಗಿ ಸಾಕಷ್ಟು ವಾಸಸ್ಥಳ, ಆರ್ಥಿಕ ಸಾಧನಗಳು ಮತ್ತು ನಿಮ್ಮ ಸಂಗಾತಿಗೆ ಮೂಲಭೂತ ಜರ್ಮನ್ ಭಾಷಾ ಕೌಶಲ್ಯಗಳ ಪುರಾವೆ ಸೇರಿವೆ. ಅರ್ಜಿಯನ್ನು ಸಾಮಾನ್ಯವಾಗಿ ನಿಮ್ಮ ತಾಯ್ನಾಡಿನ ಜರ್ಮನ್ ರಾಯಭಾರ ಕಚೇರಿಯಲ್ಲಿ ಸಲ್ಲಿಸಲಾಗುತ್ತದೆ.",
        faq_first_entry_q3: "ನಾನು ಜರ್ಮನಿಗೆ ಎಷ್ಟು ಚಿನ್ನ/ಆಭರಣಗಳನ್ನು ತರಬಹುದು?",
        faq_first_entry_a3: "ಜರ್ಮನಿಗೆ ಸ್ಥಳಾಂತರಗೊಳ್ಳುವಾಗ, ಆಭರಣಗಳು ಸೇರಿದಂತೆ ವೈಯಕ್ತಿಕ ವಸ್ತುಗಳು ಸಾಮಾನ್ಯವಾಗಿ ಕಸ್ಟಮ್ಸ್ ಸುಂಕಗಳಿಂದ ವಿನಾಯಿತಿ ಪಡೆದಿರುತ್ತವೆ, ಅವು ನಿಮ್ಮ ಮನೆಯ ಸಾಮಾನುಗಳ ಭಾಗವಾಗಿದ್ದರೆ ಮತ್ತು ನೀವು ಅವುಗಳನ್ನು ಕನಿಷ್ಠ ಆರು ತಿಂಗಳವರೆಗೆ ಬಳಸಿದ್ದರೆ. ಆದಾಗ್ಯೂ, ಹೆಚ್ಚಿನ ಮೌಲ್ಯದ ವಸ್ತುಗಳಿಗೆ, ಕಸ್ಟಮ್ಸ್‌ನೊಂದಿಗೆ ಸಮಸ್ಯೆಗಳನ್ನು ತಪ್ಪಿಸಲು ಮಾಲೀಕತ್ವ ಮತ್ತು ಮೌಲ್ಯದ ಪುರಾವೆ (ಉದಾ. ಖರೀದಿ ರಸೀದಿಗಳು, ಮೌಲ್ಯಮಾಪನ ಪ್ರಮಾಣಪತ್ರಗಳು) ಒಯ್ಯುವುದು ಸೂಕ್ತವಾಗಿದೆ. ಕಸ್ಟಮ್ಸ್ ನಿಯಮಗಳ ಪ್ರಕಾರ ಒಂದು ನಿರ್ದಿಷ್ಟ ಮೌಲ್ಯಕ್ಕಿಂತ ಹೆಚ್ಚಿನ ವಸ್ತುಗಳನ್ನು ಯಾವಾಗಲೂ ಘೋಷಿಸಿ.",
        faq_cat_first_arrival_aachen_title: "ಆಕೆನ್‌ಗೆ ಮೊದಲ ಆಗಮನ",
        faq_first_arrival_aachen_q1: "ವಿಮಾನ ನಿಲ್ದಾಣದಿಂದ ಆಕೆನ್‌ಗೆ ತಲುಪಲು ಉತ್ತಮ ಮಾರ್ಗಗಳು ಯಾವುವು?",
        faq_first_arrival_aachen_a1: "ಆಕೆನ್ ಉತ್ತಮ ಸಂಪರ್ಕ ಹೊಂದಿದೆ. ಡಸೆಲ್ಡಾರ್ಫ್ ವಿಮಾನ ನಿಲ್ದಾಣ (DUS) ಅಥವಾ ಕಲೋನ್ ಬಾನ್ ವಿಮಾನ ನಿಲ್ದಾಣ (CGN) ನಿಂದ, ನೀವು ನೇರವಾಗಿ ಆಕೆನ್ ಹೌಪ್ಟ್‌ಬಾನ್‌ಹೋಫ್ (ಮುಖ್ಯ ನಿಲ್ದಾಣ) ಗೆ ರೈಲು ತೆಗೆದುಕೊಳ್ಳಬಹುದು. ಮಾಸ್ಟ್ರಿಚ್ ಆಕೆನ್ ವಿಮಾನ ನಿಲ್ದಾಣ (MST) ನಿಂದ ಬಸ್‌ಗಳು ಲಭ್ಯವಿದೆ. ಟ್ಯಾಕ್ಸಿಗಳು ಮತ್ತು ರೈಡ್-ಶೇರಿಂಗ್ ಸೇವೆಗಳು ಸಹ ಆಯ್ಕೆಗಳಾಗಿವೆ ಆದರೆ ಸಾಮಾನ್ಯವಾಗಿ ಹೆಚ್ಚು ದುಬಾರಿಯಾಗಿದೆ.",
        faq_first_arrival_aachen_q2: "ಆಕೆನ್‌ನಲ್ಲಿ ನಾನು ತಾತ್ಕಾಲಿಕ ವಸತಿಯನ್ನು ಎಲ್ಲಿ ಕಂಡುಹಿಡಿಯಬಹುದು?",
        faq_first_arrival_aachen_a2: "ತಾತ್ಕಾಲಿಕ ವಸತಿಗಾಗಿ, ಸೇವೆ ಸಲ್ಲಿಸಿದ ಅಪಾರ್ಟ್‌ಮೆಂಟ್‌ಗಳು, ಏರ್‌ಬಿಎನ್‌ಬಿ, ಅಥವಾ ಅಲ್ಪಾವಧಿಯ ಬಾಡಿಗೆಗಳನ್ನು ಪರಿಗಣಿಸಿ. Booking.com, Airbnb, ಮತ್ತು ಸ್ಥಳೀಯ ಜಾಹೀರಾತುಗಳು (ಉದಾ. WG-Gesucht.de ಹಂಚಿದ ಫ್ಲಾಟ್‌ಗಳಿಗಾಗಿ, ಆದರೂ ಕುಟುಂಬಗಳಿಗೆ ಕಡಿಮೆ ಸಾಮಾನ್ಯ) ನಂತಹ ವೆಬ್‌ಸೈಟ್‌ಗಳು ಸಹಾಯಕವಾಗಬಹುದು. ಕೆಲವು ಹೋಟೆಲ್‌ಗಳು ಸಹ ವಿಸ್ತೃತ ವಾಸ್ತವ್ಯದ ಆಯ್ಕೆಗಳನ್ನು ನೀಡುತ್ತವೆ.",
        faq_first_arrival_aachen_q3: "'ಅನ್ಮೆಲ್ಡುಂಗ್' ಎಂದರೇನು ಮತ್ತು ನಾನು ಅದನ್ನು ಹೇಗೆ ಮಾಡುವುದು?",
        faq_first_arrival_aachen_a3: "'ಅನ್ಮೆಲ್ಡುಂಗ್' ಎಂದರೆ ನಿಮ್ಮ ಶಾಶ್ವತ ನಿವಾಸಕ್ಕೆ ಸ್ಥಳಾಂತರಗೊಂಡ ಎರಡು ವಾರಗಳಲ್ಲಿ ಸ್ಥಳೀಯ ಅಧಿಕಾರಿಗಳೊಂದಿಗೆ (Bürgeramt/Einwohnermeldeamt) ನಿಮ್ಮ ವಸತಿ ವಿಳಾಸವನ್ನು ಕಡ್ಡಾಯವಾಗಿ ನೋಂದಾಯಿಸುವುದು. ನಿಮಗೆ ನಿಮ್ಮ ಪಾಸ್‌ಪೋರ್ಟ್, ವೀಸಾ ಮತ್ತು ಭೂಮಾಲೀಕರ ದೃಢೀಕರಣ (Wohnungsgeberbestätigung) ಅಗತ್ಯವಿರುತ್ತದೆ. ತೆರಿಗೆ ಐಡಿ ಪಡೆಯಲು, ಬ್ಯಾಂಕ್ ಖಾತೆ ತೆರೆಯಲು ಮತ್ತು ಇತರ ಆಡಳಿತಾತ್ಮಕ ಕಾರ್ಯಗಳಿಗೆ ಇದು ನಿರ್ಣಾಯಕವಾಗಿದೆ. ಮುಂಚಿತವಾಗಿ ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಕಾಯ್ದಿರಿಸಿ.",
        faq_first_arrival_aachen_q4: "ಜರ್ಮನಿಯಲ್ಲಿ ನಾನು ಬ್ಯಾಂಕ್ ಖಾತೆಯನ್ನು ಹೇಗೆ ತೆರೆಯುವುದು?",
        faq_first_arrival_aachen_a4: "ನೀವು ಸಾಂಪ್ರದಾಯಿಕ ಬ್ಯಾಂಕುಗಳೊಂದಿಗೆ (ಉದಾ. ಸ್ಪಾರ್ಕಸ್ಸೆ, ಡಾಯ್ಚ ಬ್ಯಾಂಕ್) ಅಥವಾ ಆನ್‌ಲೈನ್ ಬ್ಯಾಂಕುಗಳೊಂದಿಗೆ (ಉದಾ. N26, ಕಾಮ್‌ಡೈರೆಕ್ಟ್) ಬ್ಯಾಂಕ್ ಖಾತೆಯನ್ನು ತೆರೆಯಬಹುದು. ಸಾಂಪ್ರದಾಯಿಕ ಬ್ಯಾಂಕುಗಳಿಗೆ, ನಿಮಗೆ ಸಾಮಾನ್ಯವಾಗಿ ನಿಮ್ಮ ಪಾಸ್‌ಪೋರ್ಟ್, ವೀಸಾ/ನಿವಾಸ ಪರವಾನಗಿ ಮತ್ತು ವಿಳಾಸದ ಪುರಾವೆ (ಅನ್ಮೆಲ್ಡುಂಗ್ ಪ್ರಮಾಣಪತ್ರ) ಅಗತ್ಯವಿರುತ್ತದೆ. ಆನ್‌ಲೈನ್ ಬ್ಯಾಂಕುಗಳು ಹೆಚ್ಚಾಗಿ ಸರಳ ಡಿಜಿಟಲ್ ಪ್ರಕ್ರಿಯೆಯನ್ನು ನೀಡುತ್ತವೆ.",
        faq_cat_children_title: "ಮಕ್ಕಳು",
        faq_children_q1: "ಆಕೆನ್‌ನಲ್ಲಿ ನನ್ನ ಮಕ್ಕಳಿಗೆ ಕಿಟಾ (ಶಿಶುವಿಹಾರ) ಅಥವಾ ಶಾಲೆಯನ್ನು ನಾನು ಹೇಗೆ ಕಂಡುಹಿಡಿಯುವುದು?",
        faq_children_a1: "ಕಿಟಾಗಾಗಿ, ನೀವು ಸಾಮಾನ್ಯವಾಗಿ ನಗರದ ಆನ್‌ಲೈನ್ ಪೋರ್ಟಲ್ (ಕಿಟಾ-ನ್ಯಾವಿಗೇಟರ್ ಆಕೆನ್) ಮೂಲಕ ಅಥವಾ ಪ್ರತ್ಯೇಕ ಕಿಟಾಗಳೊಂದಿಗೆ ನೇರವಾಗಿ ನೋಂದಾಯಿಸಿಕೊಳ್ಳುತ್ತೀರಿ. ಶಾಲೆಗಳಿಗಾಗಿ, ಆಕೆನ್‌ನ ಶುಲಾಮ್ತ್ (ಶಾಲಾ ಕಚೇರಿ) ಅಥವಾ ವೈಯಕ್ತಿಕ ಶಾಲೆಗಳನ್ನು ಸಂಪರ್ಕಿಸಿ. ಹೆಚ್ಚಿನ ಬೇಡಿಕೆಯಿಂದಾಗಿ ಕಿಟಾಗಳಿಗೆ ಮುಂಚಿತವಾಗಿ ನೋಂದಾಯಿಸಿಕೊಳ್ಳಲು ಹೆಚ್ಚು ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ.",
        faq_children_q2: "ಆಕೆನ್‌ನಲ್ಲಿ ಮಕ್ಕಳಿಗಾಗಿ ಯಾವುದೇ ಹವ್ಯಾಸ ತರಗತಿಗಳು ಅಥವಾ ಕ್ರೀಡಾ ಕ್ಲಬ್‌ಗಳು ಇವೆಯೇ?",
        faq_children_a2: "ಹೌದು, ಆಕೆನ್ ಮಕ್ಕಳಿಗಾಗಿ ವ್ಯಾಪಕ ಶ್ರೇಣಿಯ ಹವ್ಯಾಸ ತರಗತಿಗಳು ಮತ್ತು ಕ್ರೀಡಾ ಕ್ಲಬ್‌ಗಳನ್ನು ನೀಡುತ್ತದೆ. ನೀವು ನಗರದ ಅಧಿಕೃತ ವೆಬ್‌ಸೈಟ್, ಸ್ಥಳೀಯ ಸಮುದಾಯ ಕೇಂದ್ರಗಳು (ಫ್ಯಾಮಿಲಿಯೆನ್‌ಜೆಂಟ್ರೆನ್), ಕ್ರೀಡಾ ಒಕ್ಕೂಟಗಳು (ಸ್ಟಾಡ್ಸ್‌ಪೋರ್ಟ್ಸ್‌ಬಂಡ್ ಆಕೆನ್) ಮೂಲಕ ಅಥವಾ ನೇರವಾಗಿ ಶಾಲೆಗಳು ಮತ್ತು ಕಿಟಾಗಳಲ್ಲಿ ವಿಚಾರಿಸುವ ಮೂಲಕ ಮಾಹಿತಿಯನ್ನು ಕಂಡುಹಿಡಿಯಬಹುದು. ಆಯ್ಕೆಗಳಲ್ಲಿ ಫುಟ್‌ಬಾಲ್, ಈಜು, ಸಂಗೀತ, ಕಲೆ ಮತ್ತು ನೃತ್ಯ ಸೇರಿವೆ.",
        faq_cat_language_learning_title: "ಭಾಷಾ ಕಲಿಕೆ",
        faq_language_q1: "ಆಕೆನ್‌ನಲ್ಲಿ ಯಾವ ಭಾಷಾ ಶಾಲೆಗಳು ಲಭ್ಯವಿದೆ?",
        faq_language_a1: "ಆಕೆನ್‌ನಲ್ಲಿ ವೋಲ್ಕ್‌ಶೋಚ್‌ಶೂಲೆ (VHS) ಆಕೆನ್, ಗೋಥೆ-ಇನ್‌ಸ್ಟಿಟ್ಯೂಟ್ (ಆಕೆನ್‌ನಲ್ಲಿ ನೇರವಾಗಿ ಇಲ್ಲದಿದ್ದರೂ, ಹತ್ತಿರದಲ್ಲಿದೆ), ಮತ್ತು ಸ್ಪ್ರಚೆನಾಕಾಡೆಮಿ ಆಕೆನ್‌ನಂತಹ ಖಾಸಗಿ ಭಾಷಾ ಶಾಲೆಗಳು ಸೇರಿದಂತೆ ಹಲವಾರು ಭಾಷಾ ಶಾಲೆಗಳಿವೆ. ಅವು ವಿವಿಧ ಹಂತಗಳು ಮತ್ತು ಕೋರ್ಸ್ ಸ್ವರೂಪಗಳನ್ನು ನೀಡುತ್ತವೆ.",
        faq_language_q2: "'ಇಂಟಿಗ್ರೇಷನ್ ಕೋರ್ಸ್' ಎಂದರೇನು ಮತ್ತು ನಾನು ಹೇಗೆ ಸೇರಿಕೊಳ್ಳಬಹುದು?",
        faq_language_a2: "ಒಂದು ಇಂಟಿಗ್ರೇಷನ್ ಕೋರ್ಸ್ (ಇಂಟಿಗ್ರೇಷನ್ಸ್‌ಕುರ್ಸ್) ಹೊಸ ವಲಸಿಗರಿಗೆ ಜರ್ಮನ್ ಭಾಷೆ ಮತ್ತು ಓರಿಯಂಟೇಶನ್ ಕೋರ್ಸ್ ಆಗಿದೆ, ಇದು ಭಾಗಶಃ ಸರ್ಕಾರದಿಂದ ಧನಸಹಾಯ ಪಡೆಯುತ್ತದೆ. ಇದು B1 ಜರ್ಮನ್ ಭಾಷಾ ಮಟ್ಟವನ್ನು ಒಳಗೊಂಡಿದೆ ಮತ್ತು ಜರ್ಮನ್ ಸಂಸ್ಕೃತಿ, ಇತಿಹಾಸ ಮತ್ತು ಕಾನೂನು ವ್ಯವಸ್ಥೆಯ ಕುರಿತು ಒಂದು ಮಾಡ್ಯೂಲ್ ಅನ್ನು ಒಳಗೊಂಡಿದೆ. ನೀವು ಬುಂಡೆಸ್‌ಅಮ್ತ್ ಫರ್ ಮೈಗ್ರೇಷನ್ ಉಂಡ್ ಫ್ಲುಚ್ಟ್ಲಿಂಗ್ (BAMF) ಮೂಲಕ ಅಥವಾ ನೇರವಾಗಿ ಅಧಿಕೃತ ಭಾಷಾ ಶಾಲೆಗಳೊಂದಿಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಬಹುದು.",
        faq_language_q3: "ಪೂರ್ಣ ಸಮಯ ಕೆಲಸ ಮಾಡುವಾಗ ನಾನು ಜರ್ಮನ್ ಅನ್ನು ಹೇಗೆ ಕಲಿಯಬಹುದು?",
        faq_language_a3: "ಅನೇಕ ಭಾಷಾ ಶಾಲೆಗಳು ವಿಶೇಷವಾಗಿ ಕೆಲಸ ಮಾಡುವ ವೃತ್ತಿಪರರಿಗಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಸಂಜೆ ಅಥವಾ ವಾರಾಂತ್ಯದ ಕೋರ್ಸ್‌ಗಳನ್ನು ನೀಡುತ್ತವೆ. ಆನ್‌ಲೈನ್ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ಗಳು (ಉದಾ. ಡ್ಯುಯೊಲಿಂಗೋ, ಬ್ಯಾಬೆಲ್, ಡಾಯ್ಚೆ ವೆಲ್ಲೆ), ಭಾಷಾ ವಿನಿಮಯ ಪಾಲುದಾರರು, ಮತ್ತು ಜರ್ಮನ್ ಸಹೋದ್ಯೋಗಿಗಳು ಅಥವಾ ಸ್ನೇಹಿತರೊಂದಿಗೆ ಅಭ್ಯಾಸ ಮಾಡುವುದು ಸಹ ಬಹಳ ಪರಿಣಾಮಕಾರಿಯಾಗಿದೆ. ಕೆಲವು ಉದ್ಯೋಗದಾತರು ಆಂತರಿಕ ಭಾಷಾ ತರಬೇತಿಯನ್ನು ಸಹ ನೀಡುತ್ತಾರೆ.",
        faq_cat_residence_permit_title: "ನಿವಾಸ ಪರವಾನಗಿ",
        faq_residence_q1: "ಗುರುತು ಮತ್ತು ವೀಸಾ ದಾಖಲೆಯಾಗಿ ನಿವಾಸ ಪರವಾನಗಿ ಏಕೆ ಮುಖ್ಯ?",
        faq_residence_a1: "ನಿಮ್ಮ ನಿವಾಸ ಪರವಾನಗಿ (Aufenthaltstitel) ಜರ್ಮನಿಯಲ್ಲಿ ನಿಮ್ಮ ಕಾನೂನುಬದ್ಧ ನಿವಾಸದ ಅಧಿಕೃತ ಪುರಾವೆಯಾಗಿದೆ. ಇದು ಜರ್ಮನಿಯೊಳಗೆ ನಿಮ್ಮ ಪ್ರಾಥಮಿಕ ಗುರುತಿನ ದಾಖಲೆಯಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ ಮತ್ತು ನಿಮ್ಮ ಹಕ್ಕುಗಳನ್ನು (ಉದಾ. ಕೆಲಸ, ಅಧ್ಯಯನ) ನಿರ್ಧರಿಸುತ್ತದೆ. ಇದು ಜರ್ಮನಿ ಮತ್ತು ಇತರ ಷೆಂಗೆನ್ ದೇಶಗಳಿಗೆ ಮರು-ಪ್ರವೇಶಕ್ಕಾಗಿ ನಿಮ್ಮ ವೀಸಾವಾಗಿಯೂ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.",
        faq_residence_q2: "ನಾನು ಮೊದಲ ಬಾರಿಗೆ ನಿವಾಸ ಪರವಾನಗಿಗಾಗಿ ಹೇಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಬೇಕು ಮತ್ತು ಅದನ್ನು ಹೇಗೆ ವಿಸ್ತರಿಸಬೇಕು?",
        faq_residence_a2: "ಆರಂಭಿಕ ಅರ್ಜಿಯನ್ನು ಸಾಮಾನ್ಯವಾಗಿ ನಿಮ್ಮ ಅನ್ಮೆಲ್ಡುಂಗ್ ಪೂರ್ಣಗೊಳಿಸಿದ ನಂತರ ಆಕೆನ್‌ನಲ್ಲಿರುವ ಆಸ್ಲಾಂಡರ್‌ಬೆಹೋರ್ಡೆ (ವಿದೇಶಿಯರ ಕಚೇರಿ) ನಲ್ಲಿ ಮಾಡಲಾಗುತ್ತದೆ. ನಿಮಗೆ ನಿಮ್ಮ ಪಾಸ್‌ಪೋರ್ಟ್, ವೀಸಾ, ಉದ್ಯೋಗ ಒಪ್ಪಂದ, ಆರೋಗ್ಯ ವಿಮೆಯ ಪುರಾವೆ ಮತ್ತು ಇತರ ದಾಖಲೆಗಳು ಬೇಕಾಗುತ್ತವೆ. ವಿಸ್ತರಣೆಗಳಿಗಾಗಿ, ನಿಮ್ಮ ಪ್ರಸ್ತುತ ಪರವಾನಗಿ ಅವಧಿ ಮುಗಿಯುವ ಮೊದಲು ಚೆನ್ನಾಗಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ, ನವೀಕರಿಸಿದ ದಾಖಲೆಗಳನ್ನು ಒದಗಿಸಿ. ನೇಮಕಾತಿಗಳು ಸಾಮಾನ್ಯವಾಗಿ ಕಡ್ಡಾಯವಾಗಿರುತ್ತವೆ.",
        faq_residence_q3: "'ಸೆಟಲ್‌ಮೆಂಟ್ ಪರ್ಮಿಟ್' (ಶಾಶ್ವತ ನಿವಾಸ) ಗಾಗಿ ನಾನು ಹೇಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಬೇಕು?",
        faq_residence_a3: "ಸೆಟಲ್‌ಮೆಂಟ್ ಪರ್ಮಿಟ್ (Niederlassungserlaubnis) ನಿಮಗೆ ಶಾಶ್ವತ ನಿವಾಸವನ್ನು ನೀಡುತ್ತದೆ. ಅರ್ಹತೆಗೆ ಸಾಮಾನ್ಯವಾಗಿ 5 ವರ್ಷಗಳ ಕಾನೂನುಬದ್ಧ ನಿವಾಸ (ಬ್ಲೂ ಕಾರ್ಡ್ ಹೊಂದಿರುವವರಿಗೆ ಕಡಿಮೆ), ಸಾಕಷ್ಟು ಜರ್ಮನ್ ಭಾಷಾ ಕೌಶಲ್ಯಗಳು (B1), ಸುರಕ್ಷಿತ ಜೀವನೋಪಾಯ, ಸಾಕಷ್ಟು ವಾಸಸ್ಥಳ, ಮತ್ತು ಪಿಂಚಣಿ ಯೋಜನೆಗೆ ಕೊಡುಗೆ ಅಗತ್ಯವಿದೆ. ಆಸ್ಲಾಂಡರ್‌ಬೆಹೋರ್ಡೆಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.",
        faq_cat_house_hunting_title: "ಮನೆ ಹುಡುಕಾಟ",
        faq_house_hunting_q1: "ಆಕೆನ್‌ನಲ್ಲಿ ದೀರ್ಘಾವಧಿಯ ಅಪಾರ್ಟ್‌ಮೆಂಟ್ ಅನ್ನು ನಾನು ಹೇಗೆ ಕಂಡುಹಿಡಿಯುವುದು?",
        faq_house_hunting_a1: "ಅಪಾರ್ಟ್‌ಮೆಂಟ್ ಹುಡುಕಾಟಕ್ಕಾಗಿ ಜನಪ್ರಿಯ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ಗಳಲ್ಲಿ ಇಮ್ಮೋಬಿಲಿಯೆನ್‌ಸ್ಕೌಟ್24, ಇಮ್ಮೋವೆಲ್ಟ್, ಮತ್ತು ಇಬೇ ಕ್ಲೈನ್‌ಅನ್‌ಜೈಗನ್ ಸೇರಿವೆ. ನೆಟ್‌ವರ್ಕಿಂಗ್ ಮತ್ತು ಸ್ಥಳೀಯ ರಿಯಲ್ ಎಸ್ಟೇಟ್ ಏಜೆಂಟ್‌ಗಳು (Makler) ಸಹ ಸಹಾಯಕವಾಗಬಹುದು. ವಿಶೇಷವಾಗಿ ಕುಟುಂಬ ಸ್ನೇಹಿ ಅಪಾರ್ಟ್‌ಮೆಂಟ್‌ಗಳಿಗೆ ಹೆಚ್ಚಿನ ಬೇಡಿಕೆ ಮತ್ತು ಸ್ಪರ್ಧೆಗೆ ಸಿದ್ಧರಾಗಿರಿ.",
        faq_house_hunting_q2: "ಬಾಡಿಗೆ ಒಪ್ಪಂದಗಳು (Vertrag) ಮತ್ತು ಮುಕ್ತಾಯ (Kündigung) ಬಗ್ಗೆ ನಾನು ಏನು ತಿಳಿದುಕೊಳ್ಳಬೇಕು?",
        faq_house_hunting_a2: "ಜರ್ಮನ್ ಬಾಡಿಗೆ ಒಪ್ಪಂದಗಳು (Mietvertrag) ಸಮಗ್ರವಾಗಿವೆ. ಬಾಡಿಗೆ ಹೆಚ್ಚಳ, ನವೀಕರಣ ಕರ್ತವ್ಯಗಳು, ಮತ್ತು ಮುಕ್ತಾಯಕ್ಕೆ ಸೂಚನೆ ಅವಧಿಗಳು (ಸಾಮಾನ್ಯವಾಗಿ ಬಾಡಿಗೆದಾರರಿಗೆ 3 ತಿಂಗಳು) ಕುರಿತ ಷರತ್ತುಗಳಿಗೆ ಗಮನ ಕೊಡಿ. ಯಾವಾಗಲೂ ಒಪ್ಪಂದವನ್ನು ಎಚ್ಚರಿಕೆಯಿಂದ ಓದಿ ಮತ್ತು ಯಾವುದೇ ಸಂದೇಹಗಳನ್ನು ಸ್ಪಷ್ಟಪಡಿಸಿ. ಅಗತ್ಯವಿದ್ದರೆ Mieterverein (ಬಾಡಿಗೆದಾರರ ಸಂಘ) ನಿಂದ ಸಲಹೆ ಪಡೆಯಿರಿ.",
        faq_house_hunting_q3: "ಆಸ್ತಿಯನ್ನು ಖರೀದಿಸುವಲ್ಲಿ (ನೋಟಾರ್, ಬೌಅಮ್ತ್, ಫಿನಾನ್ಸ್‌ಅಮ್ತ್) ಏನು ಒಳಗೊಂಡಿದೆ?",
        faq_house_hunting_a3: "ಜರ್ಮನಿಯಲ್ಲಿ ಆಸ್ತಿ ಖರೀದಿಯಲ್ಲಿ ನೋಟಾರ್ (ಸಾರ್ವಜನಿಕ ನೋಟರಿ) ಭಾಗಿಯಾಗುತ್ತಾರೆ, ಅವರು ಖರೀದಿ ಒಪ್ಪಂದವನ್ನು ರಚಿಸುತ್ತಾರೆ ಮತ್ತು ಪ್ರಮಾಣೀಕರಿಸುತ್ತಾರೆ. ಬೌಅಮ್ತ್ (ಕಟ್ಟಡ ಪ್ರಾಧಿಕಾರ) ಕಟ್ಟಡ ಪರವಾನಗಿಗಳು ಮತ್ತು ನಿಯಮಗಳನ್ನು ನಿರ್ವಹಿಸುತ್ತದೆ. ಫಿನಾನ್ಸ್‌ಅಮ್ತ್ (ತೆರಿಗೆ ಕಚೇರಿ) ಆಸ್ತಿ ವರ್ಗಾವಣೆ ತೆರಿಗೆಗೆ (Grunderwerbsteuer) ಸಂಬಂಧಿಸಿದೆ. ಸಂಕೀರ್ಣತೆಯಿಂದಾಗಿ ಕಾನೂನು ಮತ್ತು ಆರ್ಥಿಕ ಸಲಹೆ ಹೆಚ್ಚು ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ.",
        faq_cat_social_circle_title: "ಸಾಮಾಜಿಕ ವಲಯ",
        faq_social_circle_q1: "ಆಕೆನ್‌ನಲ್ಲಿ ನಾನು ಸಾಮಾಜಿಕ ವಲಯವನ್ನು ಹೇಗೆ ನಿರ್ಮಿಸಬಹುದು ಮತ್ತು ಇತರ ಭಾರತೀಯರನ್ನು ಹೇಗೆ ಭೇಟಿಯಾಗಬಹುದು?",
        faq_social_circle_a1: "AIFA e.V. ಕಾರ್ಯಕ್ರಮಗಳಲ್ಲಿ ಸೇರುವುದು ಉತ್ತಮ ಆರಂಭ! ಅಲ್ಲದೆ, ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮದಲ್ಲಿ (Facebook, WhatsApp) ಸ್ಥಳೀಯ ಭಾರತೀಯ ಸಮುದಾಯ ಗುಂಪುಗಳನ್ನು ಅನ್ವೇಷಿಸಿ, ಸಾಂಸ್ಕೃತಿಕ ಉತ್ಸವಗಳಲ್ಲಿ ಭಾಗವಹಿಸಿ, ಮತ್ತು ವಿಶ್ವವಿದ್ಯಾಲಯ ಅಥವಾ ಕಂಪನಿಯ ಅಂತರರಾಷ್ಟ್ರೀಯ ಗುಂಪುಗಳಲ್ಲಿ ಭಾಗವಹಿಸಿ. ಭಾಷಾ ವಿನಿಮಯ ಭೇಟಿಗಳು ಸಹ ವಿಭಿನ್ನ ಜನರನ್ನು ಭೇಟಿಯಾಗಲು ಉತ್ತಮವಾಗಿವೆ.",
        faq_social_circle_q2: "ಆಕೆನ್‌ನಲ್ಲಿ ಯಾವುದೇ ಭಾರತೀಯ ಸಂಘಗಳು (Verein) ಅಥವಾ ಸಾಂಸ್ಕೃತಿಕ ಗುಂಪುಗಳು ಇವೆಯೇ?",
        faq_social_circle_a2: "ಹೌದು, AIFA e.V. ಹೊರತುಪಡಿಸಿ, ಇತರ ಸಣ್ಣ ಭಾರತೀಯ ಸಾಂಸ್ಕೃತಿಕ ಗುಂಪುಗಳು ಅಥವಾ ವಿದ್ಯಾರ್ಥಿ ಸಂಘಗಳು (ವಿಶೇಷವಾಗಿ RWTH ಆಕೆನ್ ವಿಶ್ವವಿದ್ಯಾಲಯದ ಸುತ್ತಲೂ) ಇರಬಹುದು. 'ಇಂಡಿಶರ್ ವೆರೈನ್ ಆಕೆನ್' ಎಂದು ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಹುಡುಕುವುದು ಅಥವಾ ಭಾರತೀಯ ದಿನಸಿ ಅಂಗಡಿಗಳಲ್ಲಿನ ಸೂಚನಾ ಫಲಕಗಳನ್ನು ಪರಿಶೀಲಿಸುವುದು ಸುಳಿವುಗಳನ್ನು ನೀಡಬಹುದು.",
        faq_social_circle_q3: "ಆಕೆನ್‌ನಲ್ಲಿ ನಾನು ಹವ್ಯಾಸಗಳು ಮತ್ತು ಕ್ರೀಡೆಗಳನ್ನು ಹೇಗೆ ಮುಂದುವರಿಸಬಹುದು?",
        faq_social_circle_a3: "ಆಕೆನ್‌ನಲ್ಲಿ ಫುಟ್‌ಬಾಲ್, ಟೆನ್ನಿಸ್, ಈಜು ಮತ್ತು ಹೈಕಿಂಗ್‌ನಂತಹ ವಿವಿಧ ಚಟುವಟಿಕೆಗಳಿಗಾಗಿ ಹಲವಾರು ಕ್ರೀಡಾ ಕ್ಲಬ್‌ಗಳು (Sportvereine) ಇವೆ. ಹೊಚ್‌ಶೂಲ್‌ಸ್ಪೋರ್ಟ್ (ವಿಶ್ವವಿದ್ಯಾಲಯ ಕ್ರೀಡೆಗಳು) ವಿದ್ಯಾರ್ಥಿಗಳು ಮತ್ತು ಸಿಬ್ಬಂದಿಗೆ ಅನೇಕ ಕೋರ್ಸ್‌ಗಳನ್ನು ನೀಡುತ್ತದೆ. ಹವ್ಯಾಸಗಳಿಗಾಗಿ, ಸ್ಥಳೀಯ ಸಮುದಾಯ ಕೇಂದ್ರಗಳು (Volkshochschule), ಖಾಸಗಿ ಕ್ಲಬ್‌ಗಳು, ಅಥವಾ Meetup.com ನಂತಹ ಆನ್‌ಲೈನ್ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ಗಳಲ್ಲಿ ಆಸಕ್ತಿ-ಆಧಾರಿತ ಗುಂಪುಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.",
        faq_cat_citizenship_title: "ಪೌರತ್ವ",
        faq_citizenship_q1: "ಜರ್ಮನ್ ಪೌರತ್ವವನ್ನು ಪಡೆಯುವ ಪ್ರಕ್ರಿಯೆ ಏನು?",
        faq_citizenship_a1: "ನೈಸರ್ಗೀಕರಣಕ್ಕಾಗಿ (Einbürgerung) ಪ್ರಮಾಣಿತ ಪ್ರಕ್ರಿಯೆಗೆ 8 ವರ್ಷಗಳ ಕಾನೂನುಬದ್ಧ ನಿವಾಸ (ಕೆಲವು ಸಂದರ್ಭಗಳಲ್ಲಿ ಕಡಿಮೆ, ಉದಾ. ಏಕೀಕರಣ ಕೋರ್ಸ್‌ನೊಂದಿಗೆ 7 ವರ್ಷಗಳು, ಜರ್ಮನ್ ನಾಗರಿಕರ ಸಂಗಾತಿಗಳಿಗೆ 6 ವರ್ಷಗಳು), ಸಾಕಷ್ಟು ಜರ್ಮನ್ ಭಾಷಾ ಕೌಶಲ್ಯಗಳು (B1/B2), ನೈಸರ್ಗೀಕರಣ ಪರೀಕ್ಷೆಯಲ್ಲಿ ಉತ್ತೀರ್ಣರಾಗುವುದು, ಮತ್ತು ಸಾಮಾನ್ಯವಾಗಿ ನಿಮ್ಮ ಹಿಂದಿನ ಪೌರತ್ವವನ್ನು ತ್ಯಜಿಸುವುದು ಅಗತ್ಯವಿದೆ (ಭಾರತವು ವಯಸ್ಕರಿಗೆ ದ್ವಿ ಪೌರತ್ವವನ್ನು ಅನುಮತಿಸುವುದಿಲ್ಲ).",
        faq_citizenship_q2: "ಭಾರತೀಯ ಪಾಸ್‌ಪೋರ್ಟ್ ಅನ್ನು ಒಪ್ಪಿಸಲು ಮತ್ತು OCI ಕಾರ್ಡ್ ಪಡೆಯಲು ಪ್ರಕ್ರಿಯೆ ಏನು?",
        faq_citizenship_a2: "ಜರ್ಮನ್ ಪೌರತ್ವವನ್ನು ಪಡೆದ ನಂತರ, ನೀವು ನಿಮ್ಮ ಭಾರತೀಯ ಪಾಸ್‌ಪೋರ್ಟ್ ಅನ್ನು ಭಾರತೀಯ ರಾಯಭಾರ ಕಚೇರಿ/ದೂತಾವಾಸಕ್ಕೆ ಒಪ್ಪಿಸಬೇಕು. ನಂತರ ನಿಮಗೆ \"ಸರೆಂಡರ್ ಸರ್ಟಿಫಿಕೇಟ್\" ಸಿಗುತ್ತದೆ. ನಂತರ, ನೀವು ಓವರ್‌ಸೀಸ್ ಸಿಟಿಜನ್ ಆಫ್ ಇಂಡಿಯಾ (OCI) ಕಾರ್ಡ್‌ಗಾಗಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಬಹುದು, ಇದು ಭಾರತಕ್ಕೆ ಜೀವಿತಾವಧಿಯ ವೀಸಾ-ಮುಕ್ತ ಪ್ರಯಾಣ ಮತ್ತು ಇತರ ಪ್ರಯೋಜನಗಳನ್ನು ನೀಡುತ್ತದೆ. ಅರ್ಜಿ ಪ್ರಕ್ರಿಯೆಯು ಭಾರತೀಯ ಸರ್ಕಾರದ ಪೋರ್ಟಲ್ ಮೂಲಕ ಆನ್‌ಲೈನ್ ಆಗಿದೆ.",        
        contact_title: "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
        contact_intro: "ಪ್ರಶ್ನೆಗಳಿವೆಯೇ ಅಥವಾ ಸಂಪರ್ಕಿಸಲು ಬಯಸುವಿರಾ? ಕೆಳಗಿನ ನಮೂನೆಯನ್ನು ಭರ್ತಿ ಮಾಡಿ ಮತ್ತು ನಾವು ಶೀಘ್ರದಲ್ಲೇ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತೇವೆ.",
        your_name_label: "ನಿಮ್ಮ ಹೆಸರು",
        your_name_placeholder: "ಜಾನ್ ಡೋ",
        your_email_label: "ನಿಮ್ಮ ಇಮೇಲ್",
        your_email_placeholder: "john.doe@example.com",
        subject_label: "ವಿಷಯ",
        subject_placeholder: "ಸದಸ್ಯತ್ವದ ಬಗ್ಗೆ ವಿಚಾರಣೆ",
        message_label: "ಸಂದೇಶ",
        message_placeholder: "ನಿಮ್ಮ ಸಂದೇಶವನ್ನು ಇಲ್ಲಿ ಬರೆಯಿರಿ...",
        send_message_button: "ಸಂದೇಶ ಕಳುಹಿಸಿ",
        contact_success_message: "ನಿಮ್ಮ ಸಂದೇಶಕ್ಕೆ ಧನ್ಯವಾದಗಳು! ನಾವು ಶೀಘ್ರದಲ್ಲೇ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತೇವೆ.",
        site_title_event_registration: "ಆಕೆನ್‌ನಲ್ಲಿರುವ ಭಾರತೀಯ ಕುಟುಂಬಗಳ ಸಂಘ - ಕಾರ್ಯಕ್ರಮ ನೋಂದಣಿ",
        event_reg_title: "ಕಾರ್ಯಕ್ರಮ ನೋಂದಣಿ",
        event_reg_intro: "ನಮ್ಮ ಮುಂಬರುವ ಕಾರ್ಯಕ್ರಮಗಳಿಗೆ ನೋಂದಾಯಿಸಲು ದಯವಿಟ್ಟು ಕೆಳಗಿನ ನಮೂನೆಯನ್ನು ಭರ್ತಿ ಮಾಡಿ.",
        event_reg_select_event_label: "ಕಾರ್ಯಕ್ರಮವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
        event_reg_select_event_placeholder: "ಒಂದು ಕಾರ್ಯಕ್ರಮವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
        event_reg_summer_picnic_option: "ಬೇಸಿಗೆ ಕುಟುಂಬ ಪಿಕ್ನಿಕ್ (ಜುಲೈ 20, 2024)",
        event_reg_dandiya_option: "ದಾಂಡಿಯಾ ಆಚರಣೆಗಳು 2025 (ಅಕ್ಟೋಬರ್ 2, 2025)",
        event_reg_num_attendees_label: "ಹಾಜರಾಗುವವರ ಸಂಖ್ಯೆ",
        event_reg_dietary_notes_label: "ಆಹಾರ ನಿರ್ಬಂಧಗಳು / ವಿಶೇಷ ಟಿಪ್ಪಣಿಗಳು (ಐಚ್ಛಿಕ)",
        event_reg_dietary_notes_placeholder: "ಉದಾ. ಸಸ್ಯಾಹಾರಿ, ಗ್ಲುಟೆನ್-ಮುಕ್ತ, ವೀಲ್‌ಚೇರ್ ಪ್ರವೇಶ ಅಗತ್ಯವಿದೆ",
        event_reg_submit_button: "ಕಾರ್ಯಕ್ರಮಕ್ಕಾಗಿ ನೋಂದಾಯಿಸಿ",
        event_reg_success_message: "ಕಾರ್ಯಕ್ರಮಕ್ಕಾಗಿ ನೋಂದಾಯಿಸಿದ್ದಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು! ನಾವು ನಿಮ್ಮನ್ನು ನೋಡಲು ಎದುರು ನೋಡುತ್ತಿದ್ದೇವೆ.",
        event_reg_error_message: "ಕಾರ್ಯಕ್ರಮಕ್ಕಾಗಿ ನೋಂದಾಯಿಸುವಾಗ ದೋಷ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ."        ,
        data_protection_title: "ದತ್ತಾಂಶ ಸಂರಕ್ಷಣಾ ನೀತಿ",
        data_protection_p1: "ಸಂಘವು ತನ್ನ ಸದಸ್ಯರ ವೈಯಕ್ತಿಕ ಡೇಟಾವನ್ನು ಸಂಘದ ಸಂವಿಧಾನದ ಅಡಿಯಲ್ಲಿ ಅನುಮತಿಸಲಾದ ಉದ್ದೇಶಗಳು ಮತ್ತು ಕಾರ್ಯಗಳನ್ನು ಪೂರೈಸಲು ಸಂಗ್ರಹಿಸುತ್ತದೆ, ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುತ್ತದೆ ಮತ್ತು ಬಳಸುತ್ತದೆ.",
        data_protection_p2: "ಸಂಘವು ತನ್ನ ಮತ್ತು/ಅಥವಾ ತನ್ನ ಸದಸ್ಯರಿಗೆ ಪ್ರಯೋಜನಗಳನ್ನು ಪಡೆಯಲು ವಿಮಾ ಪಾಲಿಸಿಗಳನ್ನು ವ್ಯವಸ್ಥೆಗೊಳಿಸಬಹುದು. ವಿಮಾ ಪಾಲಿಸಿಗಳಿಗಾಗಿ ಒಪ್ಪಂದಗಳನ್ನು ಕಾರ್ಯಗತಗೊಳಿಸಲು ಅಥವಾ ಕೊನೆಗೊಳಿಸಲು, ಸಂಘವು ತನ್ನ ಸದಸ್ಯರ ವೈಯಕ್ತಿಕ ಡೇಟಾವನ್ನು ಅಗತ್ಯವಿರುವ ಮಟ್ಟಿಗೆ ಜವಾಬ್ದಾರಿಯುತ ವಿಮಾ ಕಂಪನಿಗೆ ರವಾನಿಸುತ್ತದೆ.",
        data_protection_p3: "ಸಂವಿಧಾನದಲ್ಲಿ ಉಲ್ಲೇಖಿಸಲಾದ ಸಾರ್ವಜನಿಕ ಅಥವಾ ಖಾಸಗಿ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಇತರ ಚಟುವಟಿಕೆಗಳಿಗೆ ಸಂಬಂಧಿಸಿದಂತೆ, ಸಂಘವು ತನ್ನ ಮುಖಪುಟದಲ್ಲಿ ತನ್ನ ಸದಸ್ಯರ ಹೆಸರುಗಳು ಮತ್ತು ಫೋಟೋಗಳನ್ನು ಪ್ರಕಟಿಸುತ್ತದೆ ಮತ್ತು ಮುದ್ರಣ ಮತ್ತು ಟೆಲಿಮೀಡಿಯಾ ಹಾಗೂ ಎಲೆಕ್ಟ್ರಾನಿಕ್ ಮಾಧ್ಯಮಗಳಿಗೆ ಪ್ರಕಟಣೆಗಾಗಿ ಹೆಸರುಗಳು ಮತ್ತು ಫೋಟೋಗಳನ್ನು ಕಳುಹಿಸುತ್ತದೆ. ಒಬ್ಬ ಸದಸ್ಯರು ಯಾವುದೇ ಸಮಯದಲ್ಲಿ ತಮ್ಮ ವೈಯಕ್ತಿಕ ಫೋಟೋಗಳ ಪ್ರಕಟಣೆಗೆ ಮಂಡಳಿಗೆ ಆಕ್ಷೇಪಿಸಬಹುದು. ಆಕ್ಷೇಪಣೆ ಸ್ವೀಕರಿಸಿದ ನಂತರ, ಪ್ರಕಟಣೆ/ಪ್ರಸರಣವನ್ನು ನಿಲ್ಲಿಸಲಾಗುತ್ತದೆ ಮತ್ತು ಸಂಘವು ತನ್ನ ಮುಖಪುಟದಿಂದ ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ ಫೋಟೋಗಳನ್ನು ತೆಗೆದುಹಾಕುತ್ತದೆ.",
        data_protection_p4: "ತಮ್ಮ ಸದಸ್ಯತ್ವ ಮತ್ತು ಈ ಸಂವಿಧಾನದ ಸಂಬಂಧಿತ ಗುರುತಿಸುವಿಕೆಯ ಮೂಲಕ, ಸದಸ್ಯರು ತಮ್ಮ ವೈಯಕ್ತಿಕ ಡೇಟಾವನ್ನು ಮೇಲೆ ತಿಳಿಸಿದ ವ್ಯಾಪ್ತಿ ಮತ್ತು ಪ್ರಮಾಣದಲ್ಲಿ ಸಂಗ್ರಹಿಸಲು, ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲು ಮತ್ತು ಬಳಸಲು ಒಪ್ಪುತ್ತಾರೆ. ಸಂಘವು ತನ್ನ ಶಾಸನಬದ್ಧ ಕಾರ್ಯಗಳು ಮತ್ತು ಉದ್ದೇಶಗಳನ್ನು ಪೂರೈಸುವುದನ್ನು ಹೊರತುಪಡಿಸಿ ಇತರ ಉದ್ದೇಶಗಳಿಗಾಗಿ ಡೇಟಾವನ್ನು ಬಳಸಲು ಕಾನೂನುಬದ್ಧವಾಗಿ ಬಾಧ್ಯತೆ ಹೊಂದಿದ್ದರೆ ಮಾತ್ರ ಅನುಮತಿಸಲಾಗುತ್ತದೆ. ಡೇಟಾವನ್ನು ಮಾರಾಟ ಮಾಡಲಾಗುವುದಿಲ್ಲ.",
        data_protection_p5: "ಪ್ರತಿ ಸದಸ್ಯರು ಸದಸ್ಯತ್ವ ಪಟ್ಟಿಯ ಭಾಗವಾಗಿ ಅವರಿಗೆ ಲಭ್ಯವಾಗುವ ಡೇಟಾವನ್ನು ಗೌಪ್ಯವಾಗಿ ಇರಿಸುವ ಜವಾಬ್ದಾರಿಯನ್ನು ವಹಿಸಿಕೊಳ್ಳುತ್ತಾರೆ. ಸಂಘದ ಎಲ್ಲಾ ಹಣಕಾಸಿನ ವಿಷಯಗಳಿಗೂ ಇದು ಅನ್ವಯಿಸುತ್ತದೆ.",
        data_protection_p6: "ಸದಸ್ಯರ ವೈಯಕ್ತಿಕ ಡೇಟಾವನ್ನು ಯಾವುದೇ ವಾಣಿಜ್ಯ ಅಥವಾ ವಾಣಿಜ್ಯೇತರ ಉದ್ದೇಶಗಳಿಗಾಗಿ ಮೂರನೇ ವ್ಯಕ್ತಿಗಳಿಗೆ ಬಹಿರಂಗಪಡಿಸದಿರಲು ನಾವು ಬದ್ಧರಾಗಿದ್ದೇವೆ. ಡೇಟಾ ಬಳಕೆಯ ಕುರಿತು ಹೆಚ್ಚಿನ ವಿವರಗಳಿಗಾಗಿ, ದಯವಿಟ್ಟು ನಮ್ಮ ಸಾಮಾನ್ಯ ದತ್ತಾಂಶ ಸಂರಕ್ಷಣಾ ನೀತಿಯನ್ನು ಇಲ್ಲಿ ನೋಡಿ (<a href=\"https://www.aifaev.de\" class=\"text-blue-600 hover:underline\" target=\"_blank\">www.aifaev.de</a>)"        
    },
    ml: { // Malayalam
        site_title_home: "ആകെനിലെ ഇന്ത്യൻ കുടുംബങ്ങളുടെ അസോസിയേഷൻ - ഹോം",
        site_title_about: "ആകെനിലെ ഇന്ത്യൻ കുടുംബങ്ങളുടെ അസോസിയേഷൻ - ഞങ്ങളെക്കുറിച്ച്",
        site_title_events: "ആകെനിലെ ഇന്ത്യൻ കുടുംബങ്ങളുടെ അസോസിയേഷൻ - പരിപാടികൾ",
        site_title_membership: "ആകെനിലെ ഇന്ത്യൻ കുടുംബങ്ങളുടെ അസോസിയേഷൻ - അംഗത്വം",
        site_title_faq: "ആകെനിലെ ഇന്ത്യൻ കുടുംബങ്ങളുടെ അസോസിയേഷൻ - പതിവുചോദ്യങ്ങൾ", // Ensure this is updated
        site_title_contact: "ആകെനിലെ ഇന്ത്യൻ കുടുംബങ്ങളുടെ അസോസിയേഷൻ - ബന്ധപ്പെടുക",
        site_title_data_protection: "ആകെനിലെ ഇന്ത്യൻ കുടുംബങ്ങളുടെ അസോസിയേഷൻ - ഡാറ്റാ സംരക്ഷണ നയം",        
        nav_home: "ഹോം",
        nav_about: "ഞങ്ങളെക്കുറിച്ച്",
        nav_events: "പരിപാടികൾ",
        nav_membership: "അംഗത്വം",
        nav_faq: "പതിവുചോദ്യങ്ങൾ",
        nav_contact: "ബന്ധപ്പെടുക",
        nav_event_registration: "ഇവന്റ് രജിസ്ട്രേഷൻ", // NEW NAV KEY        
        home_main_title: "ആകെനിലെ ഇന്ത്യൻ കുടുംബങ്ങളുടെ അസോസിയേഷൻ",
        home_tagline: "ആകെനിലെ ഇന്ത്യൻ കുടുംബങ്ങളെ ബന്ധിപ്പിക്കുന്നു, കമ്മ്യൂണിറ്റിയെ വളർത്തുന്നു, നമ്മുടെ സമ്പന്നമായ സംസ്കാരം ആഘോഷിക്കുന്നു.",
        home_explore_events: "പരിപാടികൾ പര്യവേക്ഷണം ചെയ്യുക",
        footer_copyright: "&copy; 2025 ആകെനിലെ ഇന്ത്യൻ കുടുംബങ്ങളുടെ അസോസിയേഷൻ. e.V. രജിസ്ട്രേഷൻ നമ്പർ VR 6590(Amtsgericht Aachen). എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.",
        footer_data_protection_policy: "ഡാറ്റാ സംരക്ഷണ നയം",
        footer_terms: "സേവന നിബന്ധനകൾ",
        lang_en: "English",
        lang_de: "Deutsch",
        lang_hi: "हिन्दी",
        lang_mr: "मराठी",
        lang_te: "తెలుగు",
        lang_ta: "தமிழ்",
        lang_bn: "বাংলা",
        lang_pa: "ਪੰਜਾਬੀ",
        lang_kn: "ಕನ್ನಡ",
        lang_ml: "മലയാളം",
        lang_or: "ଓଡ଼ିଆ",
        lang_gu: "ગુજરાતી",
        lang_sa: "संस्कृतम्",
        lang_mai: "मैथिली",
        about_title: "ഞങ്ങളുടെ അസോസിയേഷനെക്കുറിച്ച്",
        about_para1: "ആകെനിലെ ഇന്ത്യൻ കുടുംബങ്ങളുടെ അസോസിയേഷൻ (AIFA e.V.) ജർമ്മനിയിലെ ആകെനിൽ താമസിക്കുന്ന ഇന്ത്യൻ കുടുംബങ്ങളെ ഒരുമിച്ച് കൊണ്ടുവരാൻ സമർപ്പിച്ചിരിക്കുന്ന ഒരു ലാഭരഹിത സ്ഥാപനമാണ്. സാംസ്കാരിക പൈതൃകം ആഘോഷിക്കപ്പെടുന്ന, പാരമ്പര്യങ്ങൾ സംരക്ഷിക്കപ്പെടുന്ന, പുതിയ സൗഹൃദങ്ങൾ രൂപപ്പെടുന്ന ഒരു ഊർജ്ജസ്വലവും പിന്തുണ നൽകുന്നതുമായ ഒരു സമൂഹം കെട്ടിപ്പടുക്കുക എന്നതാണ് ഞങ്ങളുടെ ദൗത്യം.",
        about_para2: "സാംസ്കാരിക ഉത്സവങ്ങളും സാമൂഹിക ഒത്തുചേരലുകളും മുതൽ വിദ്യാഭ്യാസ വർക്ക്‌ഷോപ്പുകളും കമ്മ്യൂണിറ്റി സേവന സംരംഭങ്ങളും വരെ വർഷം മുഴുവൻ ഞങ്ങൾ വിവിധ പരിപാടികൾ സംഘടിപ്പിക്കുന്നു. ഇന്ത്യൻ കുടുംബങ്ങൾക്ക് വീടിന് പുറത്ത് ഒരു വീട് നൽകുക, പ്രാദേശിക സമൂഹവുമായി ഇടപഴകാൻ അവരെ സഹായിക്കുക, അവരുടെ വേരുകളുമായി ബന്ധം നിലനിർത്താൻ സഹായിക്കുക എന്നിവയാണ് ഞങ്ങളുടെ ലക്ഷ്യം.",
        about_para3: "ഞങ്ങളുടെ സമൂഹത്തിന്റെ ഊഷ്മളത അനുഭവിക്കാനും, ആവേശകരമായ പരിപാടികളിൽ പങ്കെടുക്കാനും, ആകെനിൽ ശക്തവും യോജിച്ചതുമായ ഒരു ഇന്ത്യൻ പ്രവാസിയെ കെട്ടിപ്പടുക്കുന്നതിന് സംഭാവന നൽകാനും ഞങ്ങളോടൊപ്പം ചേരുക.",
        events_title: "ഞങ്ങളുടെ പരിപാടികൾ",
        event_diwali_title: "ദീപാവലി ആഘോഷം 2023",
        event_diwali_date: "ഒക്ടോബർ 28, 2023",
        event_diwali_desc: "സാംസ്കാരിക പരിപാടികൾ, രുചികരമായ ഭക്ഷണം, പടക്കങ്ങൾ എന്നിവയോടെയുള്ള ദീപാവലി ആഘോഷം. കുടുംബങ്ങൾ ഒരുമിച്ച് അവിസ്മരണീയമായ സായാഹ്നം ആസ്വദിച്ചു.",
        event_diwali_status: "കഴിഞ്ഞ പരിപാടി",
        event_summer_title: "വേനൽക്കാല കുടുംബ പിക്നിക്",
        event_summer_date: "ജൂലൈ 20, 2024",
        event_summer_desc: "കളികളും ഭക്ഷണവും ഔട്ട്‌ഡോർ പ്രവർത്തനങ്ങളുമുള്ള വെസ്റ്റ്പാർക്കിലെ രസകരമായ ഒരു കുടുംബ പിക്നിക്കിനായി ഞങ്ങളോടൊപ്പം ചേരുക. നിങ്ങളുടെ പിക്നിക് കൊട്ടകൾ മറക്കരുത്!",
        event_summer_status: "നിലവിലെ പരിപാടി",
        event_dandiya_title: "ദാണ്ടിയ ആഘോഷങ്ങൾ 2025",
        event_dandiya_date: "ഒക്ടോബർ 2, 2025",
        event_dandiya_desc: "തിരിയാനും നൃത്തം ചെയ്യാനും തയ്യാറാകൂ! പരമ്പരാഗത സംഗീതം, വർണ്ണാഭമായ വസ്ത്രങ്ങൾ, ഊർജ്ജസ്വലമായ നൃത്തച്ചുവടുകൾ എന്നിവയോടെയുള്ള ഒരു ദാണ്ടിയ, ഗർബ രാത്രിക്ക് ഞങ്ങളോടൊപ്പം ചേരുക. വേദിയെയും പ്രവർത്തനങ്ങളെയും കുറിച്ചുള്ള കൂടുതൽ വിവരങ്ങൾ ഉടൻ പ്രഖ്യാപിക്കും.",
        event_dandiya_status: "ഭാവി പരിപാടി",
        events_view_all: "എല്ലാ പരിപാടികളും കാണുക",
        events_register_now: "ഇവന്റിനായി രജിസ്റ്റർ ചെയ്യുക", // NEW BUTTON TEXT        
        membership_title: "അംഗമാകുക",
        membership_intro: "ആകെനിലെ ഇന്ത്യൻ കുടുംബങ്ങളുടെ അസോസിയേഷൻ (AIFA e.V.)-ൽ ചേരുക, ഞങ്ങളുടെ വളരുന്ന സമൂഹത്തിന്റെ ഭാഗമാകുക! നിങ്ങളുടെ അംഗത്വം ആവേശകരമായ പരിപാടികൾ സംഘടിപ്പിക്കാനും ആകെനിലെ ഇന്ത്യൻ കുടുംബങ്ങളെ പിന്തുണയ്ക്കാനും ഞങ്ങളെ സഹായിക്കുന്നു.",
        membership_individual_title: "വ്യക്തിഗത അംഗത്വം",
        membership_individual_price: "€30",
        membership_individual_per_year: "/ വർഷം",
        membership_individual_desc: "ബന്ധപ്പെടാൻ ആഗ്രഹിക്കുന്ന വ്യക്തികൾക്ക് അനുയോജ്യം.",
        membership_family_title: "കുടുംബ അംഗത്വം",
        membership_family_price: "€50",
        membership_family_per_year: "/ വർഷം",
        membership_family_desc: "ഒരൊറ്റ കുടുംബത്തിലെ എല്ലാ അംഗങ്ങളെയും ഉൾക്കൊള്ളുന്നു.",
        membership_form_title: "അംഗത്വ അപേക്ഷാ ഫോം",
        membership_type_label: "അംഗത്വ തരം",
        membership_type_select_option: "ഒരു അംഗത്വ തരം തിരഞ്ഞെടുക്കുക",
        membership_type_individual_option: "വ്യക്തിഗത അംഗത്വം (€30/വർഷം)",
        membership_type_family_option: "കുടുംബ അംഗത്വം (€50/വർഷം)",
        first_name_label: "ആദ്യ പേര്",
        first_name_placeholder: "ജോൺ",
        last_name_label: "അവസാന പേര്",
        last_name_placeholder: "ഡോ",
        num_family_members_label: "കുടുംബാംഗങ്ങളുടെ എണ്ണം (നിങ്ങൾ ഉൾപ്പെടെ)",
        num_family_members_placeholder: "ഉദാ. 4",
        volunteer_checkbox: "AIFA e.V. പരിപാടികൾക്ക് ഞാൻ സന്നദ്ധനാണ്.",
        apply_membership_button: "അംഗത്വത്തിനായി അപേക്ഷിക്കുക",
        membership_success_message: "നിങ്ങളുടെ അംഗത്വ അപേക്ഷയ്ക്ക് നന്ദി! ഞങ്ങൾ ഉടൻ നിങ്ങളെ ബന്ധപ്പെടും.",
        faq_title: "പതിവുചോദ്യങ്ങൾ",
        faq_q1: "ആകെനിലെ ഇന്ത്യൻ കുടുംബങ്ങളുടെ അസോസിയേഷൻ (AIFA e.V.) എന്നാൽ എന്താണ്?",
        faq_a1: "AIFA e.V. ജർമ്മനിയിലെ ആകെനിൽ താമസിക്കുന്ന ഇന്ത്യൻ കുടുംബങ്ങൾക്കിടയിൽ ശക്തമായ ഒരു സമൂഹം വളർത്തുന്നതിന് സമർപ്പിച്ചിരിക്കുന്ന ഒരു ലാഭരഹിത സ്ഥാപനമാണ്. ഞങ്ങൾ സാംസ്കാരിക പരിപാടികൾ, സാമൂഹിക ഒത്തുചേരലുകൾ എന്നിവ സംഘടിപ്പിക്കുകയും നെറ്റ്‌വർക്കിംഗിനും പിന്തുണയ്ക്കും ഒരു വേദി നൽകുകയും ചെയ്യുന്നു.",
        faq_q2: "എനിക്ക് എങ്ങനെ അംഗമാകാം?",
        faq_a2: "അംഗത്വ വിശദാംശങ്ങളും അപേക്ഷാ ഫോമുകളും ഉടൻ ഞങ്ങളുടെ വെബ്സൈറ്റിൽ ലഭ്യമാകും. കൂടുതൽ വിവരങ്ങൾക്കായി ദയവായി വീണ്ടും പരിശോധിക്കുക അല്ലെങ്കിൽ കോൺടാക്റ്റ് ഫോം വഴി ഞങ്ങളെ ബന്ധപ്പെടുക.",
        faq_q3: "പരിപാടികൾ അംഗങ്ങളല്ലാത്തവർക്കും ലഭ്യമാണോ?",
        faq_a3: "സാംസ്കാരിക വിനിമയവും സമൂഹ നിർമ്മാണവും പ്രോത്സാഹിപ്പിക്കുന്നതിനായി ഞങ്ങളുടെ പല പരിപാടികളും അംഗങ്ങളല്ലാത്തവർക്കും ലഭ്യമാണ്. ചില പ്രത്യേക പരിപാടികൾക്ക് അംഗത്വം ആവശ്യമായി വന്നേക്കാം. ഓരോ പരിപാടിക്കും വിശദാംശങ്ങൾ വ്യക്തമാക്കും.",
        faq_q4: "എനിക്ക് എങ്ങനെ സന്നദ്ധസേവനം ചെയ്യാം അല്ലെങ്കിൽ സംഭാവന നൽകാം?",
        faq_a4: "ഞങ്ങൾ സന്നദ്ധപ്രവർത്തകരെ സ്വാഗതം ചെയ്യുന്നു! നിങ്ങളുടെ സമയമോ കഴിവുകളോ സംഭാവന ചെയ്യാൻ നിങ്ങൾക്ക് താൽപ്പര്യമുണ്ടെങ്കിൽ, കോൺടാക്റ്റ് ഫോം വഴി ഞങ്ങളെ ബന്ധപ്പെടുക, ഞങ്ങൾ അവസരങ്ങളുമായി നിങ്ങളെ ബന്ധപ്പെടും.",
        faq_portal_title: "വിവര പോർട്ടൽ: ജർമ്മനിയിലെ ഇന്ത്യൻ കുടുംബങ്ങൾക്കുള്ള പതിവുചോദ്യങ്ങൾ",
        faq_search_placeholder: "കീവേഡ് ഉപയോഗിച്ച് പതിവുചോദ്യങ്ങൾ തിരയുക...",
        faq_cat_aifa_title: "AIFA e.V.",
        faq_cat_first_entry_title: "ജർമ്മനിയിലേക്കുള്ള ആദ്യ പ്രവേശനം",
        faq_first_entry_q1: "ജർമ്മനിയിൽ ഒരു ജോലി വാഗ്ദാനം ലഭിച്ച ശേഷം ഞാൻ എന്തുചെയ്യണം?",
        faq_first_entry_a1: "ഒരു ജോലി വാഗ്ദാനം ലഭിച്ച ശേഷം, നിങ്ങൾ ഉടൻ വിസ അപേക്ഷാ പ്രക്രിയ ആരംഭിക്കണം. നിങ്ങളുടെ തൊഴിൽ കരാർ, അക്കാദമിക് സർട്ടിഫിക്കറ്റുകൾ, ഫണ്ടുകളുടെ തെളിവ് എന്നിവയുൾപ്പെടെ ആവശ്യമായ എല്ലാ രേഖകളും ശേഖരിക്കുക. നിങ്ങളുടെ രാജ്യത്തിലെ ജർമ്മൻ എംബസിയുടെയോ കോൺസുലേറ്റിന്റെയോ പ്രത്യേക ആവശ്യകതകൾ പരിശോധിക്കുന്നത് അഭികാമ്യമാണ്.",
        faq_first_entry_q2: "കുടുംബ പുനഃസംയോജന വിസയ്ക്കുള്ള നടപടിക്രമം എന്താണ്?",
        faq_first_entry_a2: "കുടുംബ പുനഃസംയോജന വിസ നിങ്ങളുടെ പങ്കാളിക്കും പ്രായപൂർത്തിയാകാത്ത കുട്ടികൾക്കും ജർമ്മനിയിൽ നിങ്ങളോടൊപ്പം ചേരാൻ അനുവദിക്കുന്നു. മതിയായ താമസസ്ഥലം, സാമ്പത്തിക മാർഗ്ഗങ്ങൾ, നിങ്ങളുടെ പങ്കാളിക്ക് അടിസ്ഥാന ജർമ്മൻ ഭാഷാ വൈദഗ്ദ്ധ്യം എന്നിവയുടെ തെളിവ് പ്രധാന ആവശ്യകതകളിൽ ഉൾപ്പെടുന്നു. അപേക്ഷ സാധാരണയായി നിങ്ങളുടെ മാതൃരാജ്യത്തിലെ ജർമ്മൻ എംബസിയിൽ ഫയൽ ചെയ്യുന്നു.",
        faq_first_entry_q3: "എനിക്ക് എത്ര സ്വർണ്ണം/ആഭരണങ്ങൾ ജർമ്മനിയിലേക്ക് കൊണ്ടുവരാൻ കഴിയും?",
        faq_first_entry_a3: "ജർമ്മനിയിലേക്ക് മാറുമ്പോൾ, ആഭരണങ്ങൾ ഉൾപ്പെടെയുള്ള വ്യക്തിഗത സാധനങ്ങൾക്ക് സാധാരണയായി കസ്റ്റംസ് തീരുവയിൽ നിന്ന് ഒഴിവാക്കൽ ലഭിക്കും, അവ നിങ്ങളുടെ ഗാർഹിക സാധനങ്ങളുടെ ഭാഗമാണെങ്കിൽ കുറഞ്ഞത് ആറുമാസത്തേക്ക് നിങ്ങൾ ഉപയോഗിച്ചിട്ടുണ്ടെങ്കിൽ. എന്നിരുന്നാലും, ഉയർന്ന മൂല്യമുള്ള സാധനങ്ങൾക്ക്, കസ്റ്റംസുമായി പ്രശ്നങ്ങൾ ഒഴിവാക്കാൻ ഉടമസ്ഥാവകാശത്തിന്റെയും മൂല്യത്തിന്റെയും തെളിവ് (ഉദാ. വാങ്ങൽ രസീതുകൾ, മൂല്യനിർണ്ണയ സർട്ടിഫിക്കറ്റുകൾ) കൊണ്ടുപോകുന്നത് അഭികാമ്യമാണ്. കസ്റ്റംസ് നിയമങ്ങൾ അനുസരിച്ച് ഒരു നിശ്ചിത മൂല്യത്തിന് മുകളിലുള്ള സാധനങ്ങൾ എപ്പോഴും പ്രഖ്യാപിക്കുക.",
        faq_cat_first_arrival_aachen_title: "ആകെനിലെ ആദ്യ വരവ്",
        faq_first_arrival_aachen_q1: "വിമാനത്താവളത്തിൽ നിന്ന് ആകെനിലേക്ക് എത്താനുള്ള മികച്ച വഴികൾ ഏതാണ്?",
        faq_first_arrival_aachen_a1: "ആകെൻ നന്നായി ബന്ധിപ്പിച്ചിരിക്കുന്നു. ഡസൽഡോർഫ് വിമാനത്താവളത്തിൽ (DUS) നിന്നോ കൊളോൺ ബോൺ വിമാനത്താവളത്തിൽ (CGN) നിന്നോ നിങ്ങൾക്ക് നേരിട്ട് ആകെൻ ഹൗപ്ത്ബാൻഹോഫിലേക്ക് (പ്രധാന സ്റ്റേഷൻ) ട്രെയിൻ എടുക്കാം. മാസ്ട്രിക്റ്റ് ആകെൻ വിമാനത്താവളത്തിൽ (MST) നിന്ന് ബസുകൾ ലഭ്യമാണ്. ടാക്സികളും റൈഡ്-ഷെയറിംഗ് സേവനങ്ങളും ഓപ്ഷനുകളാണ്, പക്ഷേ സാധാരണയായി കൂടുതൽ ചെലവേറിയതാണ്.",
        faq_first_arrival_aachen_q2: "ആകെനിൽ എനിക്ക് താൽക്കാലിക താമസ സൗകര്യം എവിടെ കണ്ടെത്താനാകും?",
        faq_first_arrival_aachen_a2: "താൽക്കാലിക താമസത്തിനായി, സർവീസ്ഡ് അപ്പാർട്ട്‌മെന്റുകൾ, എയർബിഎൻബി, അല്ലെങ്കിൽ ഹ്രസ്വകാല വാടകകൾ പരിഗണിക്കുക. Booking.com, Airbnb, പ്രാദേശിക ക്ലാസിഫൈഡുകൾ (ഉദാ. WG-Gesucht.de പങ്കിട്ട ഫ്ലാറ്റുകൾക്കായി, കുടുംബങ്ങൾക്ക് സാധാരണയായി കുറവാണ്) പോലുള്ള വെബ്സൈറ്റുകൾ സഹായകമാകും. ചില ഹോട്ടലുകളും ദീർഘകാല താമസ സൗകര്യങ്ങൾ വാഗ്ദാനം ചെയ്യുന്നു.",
        faq_first_arrival_aachen_q3: "'അൻമെൽഡുങ്' എന്താണ്, ഞാൻ അത് എങ്ങനെ ചെയ്യും?",
        faq_first_arrival_aachen_a3: "'അൻമെൽഡുങ്' എന്നത് നിങ്ങളുടെ സ്ഥിരമായ താമസസ്ഥലത്തേക്ക് മാറിയതിന് ശേഷം രണ്ടാഴ്ചയ്ക്കുള്ളിൽ പ്രാദേശിക അധികാരികളുമായി (Bürgeramt/Einwohnermeldeamt) നിങ്ങളുടെ താമസ വിലാസം നിർബന്ധമായും രജിസ്റ്റർ ചെയ്യുന്നതാണ്. നിങ്ങൾക്ക് പാസ്‌പോർട്ട്, വിസ, ഭൂവുടമയുടെ സ്ഥിരീകരണം (Wohnungsgeberbestätigung) എന്നിവ ആവശ്യമാണ്. ഒരു ടാക്സ് ഐഡി ലഭിക്കുന്നതിനും, ബാങ്ക് അക്കൗണ്ട് തുറക്കുന്നതിനും, മറ്റ് ഭരണപരമായ കാര്യങ്ങൾക്കും ഇത് നിർണായകമാണ്. മുൻകൂട്ടി ഓൺലൈനിൽ ഒരു അപ്പോയിന്റ്‌മെന്റ് ബുക്ക് ചെയ്യുക.",
        faq_first_arrival_aachen_q4: "ജർമ്മനിയിൽ ഞാൻ എങ്ങനെ ഒരു ബാങ്ക് അക്കൗണ്ട് തുറക്കും?",
        faq_first_arrival_aachen_a4: "നിങ്ങൾക്ക് പരമ്പരാഗത ബാങ്കുകളിലോ (ഉദാ. സ്പാർകാസെ, ഡച്ച് ബാങ്ക്) ഓൺലൈൻ ബാങ്കുകളിലോ (ഉദാ. N26, കൊംഡയറക്റ്റ്) ഒരു ബാങ്ക് അക്കൗണ്ട് തുറക്കാൻ കഴിയും. പരമ്പരാഗത ബാങ്കുകൾക്ക്, നിങ്ങൾക്ക് സാധാരണയായി പാസ്‌പോർട്ട്, വിസ/റെസിഡൻസ് പെർമിറ്റ്, വിലാസത്തിന്റെ തെളിവ് (അൻമെൽഡുങ് സർട്ടിഫിക്കറ്റ്) എന്നിവ ആവശ്യമാണ്. ഓൺലൈൻ ബാങ്കുകൾ പലപ്പോഴും ലളിതമായ ഡിജിറ്റൽ പ്രോസസ്സ് വാഗ്ദാനം ചെയ്യുന്നു.",
        faq_cat_children_title: "കുട്ടികൾ",
        faq_children_q1: "ആകെനിൽ എന്റെ കുട്ടികൾക്ക് കിറ്റ (കിൻഡർഗാർട്ടൻ) അല്ലെങ്കിൽ സ്കൂൾ എങ്ങനെ കണ്ടെത്താം?",
        faq_children_a1: "കിറ്റയ്ക്കായി, നിങ്ങൾ സാധാരണയായി നഗരത്തിന്റെ ഓൺലൈൻ പോർട്ടൽ (കിറ്റ-നാവിഗേറ്റർ ആകെൻ) വഴിയോ അല്ലെങ്കിൽ വ്യക്തിഗത കിറ്റകളുമായി നേരിട്ടോ രജിസ്റ്റർ ചെയ്യുക. സ്കൂളുകൾക്കായി, ആകെൻ ഷുൽഅംതുമായി (സ്കൂൾ ഓഫീസ്) അല്ലെങ്കിൽ വ്യക്തിഗത സ്കൂളുകളുമായി ബന്ധപ്പെടുക. ഉയർന്ന ആവശ്യം കാരണം കിറ്റകൾക്ക് നേരത്തെയുള്ള രജിസ്ട്രേഷൻ വളരെ ശുപാർശ ചെയ്യുന്നു.",
        faq_children_q2: "ആകെനിൽ കുട്ടികൾക്കായി എന്തെങ്കിലും ഹോബി ക്ലാസുകളോ സ്പോർട്സ് ക്ലബ്ബുകളോ ഉണ്ടോ?",
        faq_children_a2: "അതെ, ആകെൻ കുട്ടികൾക്കായി ഹോബി ക്ലാസുകളും സ്പോർട്സ് ക്ലബ്ബുകളും വാഗ്ദാനം ചെയ്യുന്നു. നഗരത്തിന്റെ ഔദ്യോഗിക വെബ്സൈറ്റ്, പ്രാദേശിക കമ്മ്യൂണിറ്റി സെന്ററുകൾ (ഫാമിലിയെൻസെൻട്രൻ), സ്പോർട്സ് ഫെഡറേഷനുകൾ (സ്റ്റാഡ്സ്പോർട്സ്ബണ്ട് ആകെൻ) വഴിയോ അല്ലെങ്കിൽ സ്കൂളുകളിലും കിറ്റകളിലും നേരിട്ട് അന്വേഷിച്ചോ നിങ്ങൾക്ക് വിവരങ്ങൾ കണ്ടെത്താനാകും. ഫുട്ബോൾ, നീന്തൽ, സംഗീതം, കല, നൃത്തം എന്നിവ ഓപ്ഷനുകളിൽ ഉൾപ്പെടുന്നു.",
        faq_cat_language_learning_title: "ഭാഷാ പഠനം",
        faq_language_q1: "ആകെനിൽ ഏതൊക്കെ ഭാഷാ സ്കൂളുകൾ ലഭ്യമാണ്?",
        faq_language_a1: "ആകെനിൽ വോൾക്ക്ഷോഷൂലെ (VHS) ആകെൻ, ഗോഥെ-ഇൻസ്റ്റിറ്റ്യൂട്ട് (ആകെനിൽ നേരിട്ടല്ലെങ്കിലും, അടുത്തുണ്ട്), സ്പ്രാച്ചെനാകാഡെമി ആകെൻ പോലുള്ള സ്വകാര്യ ഭാഷാ സ്കൂളുകൾ എന്നിവയുൾപ്പെടെ നിരവധി ഭാഷാ സ്കൂളുകൾ ഉണ്ട്. അവ വിവിധ തലങ്ങളും കോഴ്‌സ് ഫോർമാറ്റുകളും വാഗ്ദാനം ചെയ്യുന്നു.",
        faq_language_q2: "'ഇന്റഗ്രേഷൻ കോഴ്‌സ്' എന്താണ്, എനിക്ക് എങ്ങനെ ചേരാം?",
        faq_language_a2: "ഒരു ഇന്റഗ്രേഷൻ കോഴ്‌സ് (ഇന്റഗ്രേഷൻസ്‌കോഴ്സ്) പുതിയ കുടിയേറ്റക്കാർക്കുള്ള ഒരു ജർമ്മൻ ഭാഷാ, ഓറിയന്റേഷൻ കോഴ്‌സാണ്, ഇത് സർക്കാർ ഭാഗികമായി ധനസഹായം നൽകുന്നു. ഇത് B1 ജർമ്മൻ ഭാഷാ നിലവാരം വരെ ഉൾക്കൊള്ളുന്നു, കൂടാതെ ജർമ്മൻ സംസ്കാരം, ചരിത്രം, നിയമവ്യവസ്ഥ എന്നിവയെക്കുറിച്ചുള്ള ഒരു മൊഡ്യൂളും ഇതിൽ ഉൾപ്പെടുന്നു. ബുണ്ടെസാംറ്റ് ഫ്യൂർ മൈഗ്രേഷൻ അൻഡ് ഫ്ലുച്റ്റ്ലിംഗെ (BAMF) വഴിയോ അല്ലെങ്കിൽ അംഗീകൃത ഭാഷാ സ്കൂളുകളുമായി നേരിട്ടോ നിങ്ങൾക്ക് അപേക്ഷിക്കാം.",
        faq_language_q3: "മുഴുവൻ സമയവും ജോലി ചെയ്യുമ്പോൾ എനിക്ക് എങ്ങനെ ജർമ്മൻ പഠിക്കാൻ കഴിയും?",
        faq_language_a3: "പല ഭാഷാ സ്കൂളുകളും ജോലി ചെയ്യുന്ന പ്രൊഫഷണലുകൾക്കായി പ്രത്യേകം രൂപകൽപ്പന ചെയ്ത സായാഹ്ന അല്ലെങ്കിൽ വാരാന്ത്യ കോഴ്സുകൾ വാഗ്ദാനം ചെയ്യുന്നു. ഓൺലൈൻ പ്ലാറ്റ്‌ഫോമുകൾ (ഉദാ. ഡുവോലിംഗോ, ബാബൽ, ഡച്ച് വെല്ലെ), ഭാഷാ കൈമാറ്റ പങ്കാളികൾ, ജർമ്മൻ സഹപ്രവർത്തകരുമായോ സുഹൃത്തുക്കളുമായോ പരിശീലനം എന്നിവയും വളരെ ഫലപ്രദമാണ്. ചില തൊഴിലുടമകളും ഇൻ-ഹൗസ് ഭാഷാ പരിശീലനം വാഗ്ദാനം ചെയ്യുന്നു.",
        faq_cat_residence_permit_title: "റെസിഡൻസ് പെർമിറ്റ്",
        faq_residence_q1: "ഒരു തിരിച്ചറിയൽ, വിസ രേഖയായി റെസിഡൻസ് പെർമിറ്റ് പ്രധാനമായിരിക്കുന്നത് എന്തുകൊണ്ട്?",
        faq_residence_a1: "നിങ്ങളുടെ റെസിഡൻസ് പെർമിറ്റ് (ഔഫെൻതൽട്സ്റ്റിറ്റൽ) ജർമ്മനിയിലെ നിങ്ങളുടെ നിയമപരമായ താമസത്തിന്റെ ഔദ്യോഗിക തെളിവാണ്. ഇത് ജർമ്മനിക്കുള്ളിൽ നിങ്ങളുടെ പ്രാഥമിക തിരിച്ചറിയൽ രേഖയായി വർത്തിക്കുന്നു, കൂടാതെ നിങ്ങളുടെ അവകാശങ്ങൾ (ഉദാ. ജോലി, പഠനം) നിർണ്ണയിക്കുകയും ചെയ്യുന്നു. ജർമ്മനിയിലേക്കും മറ്റ് ഷെഞ്ചൻ രാജ്യങ്ങളിലേക്കും വീണ്ടും പ്രവേശിക്കുന്നതിനുള്ള നിങ്ങളുടെ വിസയായും ഇത് പ്രവർത്തിക്കുന്നു.",
        faq_residence_q2: "ആദ്യമായി റെസിഡൻസ് പെർമിറ്റിനായി എങ്ങനെ അപേക്ഷിക്കാം, അത് എങ്ങനെ നീട്ടാം?",
        faq_residence_a2: "നിങ്ങളുടെ അൻമെൽഡുങ് പൂർത്തിയാക്കിയ ശേഷം ആകെനിലെ ഔസ്‌ലാൻഡർബെഹോർഡെയിൽ (വിദേശകാര്യ ഓഫീസ്) ആണ് സാധാരണയായി ആദ്യ അപേക്ഷ സമർപ്പിക്കുന്നത്. നിങ്ങൾക്ക് പാസ്‌പോർട്ട്, വിസ, തൊഴിൽ കരാർ, ആരോഗ്യ ഇൻഷുറൻസിന്റെ തെളിവ്, മറ്റ് രേഖകൾ എന്നിവ ആവശ്യമാണ്. വിസ നീട്ടുന്നതിന്, നിങ്ങളുടെ നിലവിലെ പെർമിറ്റ് കാലഹരണപ്പെടുന്നതിന് മുമ്പ് തന്നെ അപേക്ഷിക്കുക, അപ്‌ഡേറ്റ് ചെയ്ത രേഖകൾ നൽകുക. അപ്പോയിന്റ്‌മെന്റുകൾ സാധാരണയായി നിർബന്ധമാണ്.",
        faq_residence_q3: "'സെറ്റിൽമെന്റ് പെർമിറ്റിനായി' (സ്ഥിര താമസം) ഞാൻ എങ്ങനെ അപേക്ഷിക്കും?",
        faq_residence_a3: "ഒരു സെറ്റിൽമെന്റ് പെർമിറ്റ് (നീഡർലാസുങ്‌സെർലൗബ്നിസ്) നിങ്ങൾക്ക് സ്ഥിരമായ താമസം അനുവദിക്കുന്നു. ഇതിന് സാധാരണയായി 5 വർഷത്തെ നിയമപരമായ താമസം (ബ്ലൂ കാർഡ് ഉടമകൾക്ക് കുറവ്), മതിയായ ജർമ്മൻ ഭാഷാ വൈദഗ്ദ്ധ്യം (B1), സുരക്ഷിതമായ ഉപജീവനമാർഗ്ഗം, മതിയായ താമസസ്ഥലം, പെൻഷൻ പദ്ധതിയിലേക്കുള്ള സംഭാവനകൾ എന്നിവ ആവശ്യമാണ്. ഔസ്‌ലാൻഡർബെഹോർഡെയിൽ അപേക്ഷിക്കുക.",
        faq_cat_house_hunting_title: "വീട് തിരയൽ",
        faq_house_hunting_q1: "ആകെനിൽ ഒരു ദീർഘകാല അപ്പാർട്ട്മെന്റ് എങ്ങനെ കണ്ടെത്താം?",
        faq_house_hunting_a1: "അപ്പാർട്ട്മെന്റ് തിരയുന്നതിനുള്ള ജനപ്രിയ പ്ലാറ്റ്‌ഫോമുകളിൽ ഇമ്മോബിലിയെൻസ്‌കൗട്ട്24, ഇമ്മോവെൽറ്റ്, ഇബേ ക്ലൈൻഅൻസൈഗൻ എന്നിവ ഉൾപ്പെടുന്നു. നെറ്റ്‌വർക്കിംഗും പ്രാദേശിക റിയൽ എസ്റ്റേറ്റ് ഏജന്റുമാരും (മാക്ലർ) സഹായകമാകും. ഉയർന്ന ഡിമാൻഡും മത്സരവും പ്രതീക്ഷിക്കുക, പ്രത്യേകിച്ച് കുടുംബ സൗഹൃദ അപ്പാർട്ട്മെന്റുകൾക്ക്.",
        faq_house_hunting_q2: "വാടക കരാറുകളെക്കുറിച്ചും (വെർട്രാഗ്) റദ്ദാക്കലിനെക്കുറിച്ചും (കുൻഡിഗുങ്) ഞാൻ എന്താണ് അറിയേണ്ടത്?",
        faq_house_hunting_a2: "ജർമ്മൻ വാടക കരാറുകൾ (മീറ്റ്വെർട്രാഗ്) സമഗ്രമാണ്. വാടക വർദ്ധനവ്, നവീകരണ ചുമതലകൾ, റദ്ദാക്കൽ അറിയിപ്പ് കാലയളവുകൾ (സാധാരണയായി വാടകക്കാർക്ക് 3 മാസം) എന്നിവയെക്കുറിച്ചുള്ള വ്യവസ്ഥകളിൽ ശ്രദ്ധിക്കുക. കരാർ ശ്രദ്ധാപൂർവ്വം വായിക്കുകയും എന്തെങ്കിലും സംശയങ്ങൾ വ്യക്തമാക്കുകയും ചെയ്യുക. ആവശ്യമെങ്കിൽ ഒരു മീറ്റെർവെറൈനിൽ (വാടകക്കാരുടെ അസോസിയേഷൻ) നിന്ന് ഉപദേശം തേടുക.",
        faq_house_hunting_q3: "ഒരു പ്രോപ്പർട്ടി വാങ്ങുന്നതിൽ (നോട്ടാർ, ബൗഅംറ്റ്, ഫിനാൻസാംറ്റ്) എന്താണ് ഉൾപ്പെട്ടിരിക്കുന്നത്?",
        faq_house_hunting_a3: "ജർമ്മനിയിൽ പ്രോപ്പർട്ടി വാങ്ങുന്നതിൽ ഒരു നോട്ടാർ (പൊതു നോട്ടറി) ഉൾപ്പെടുന്നു, അദ്ദേഹം വാങ്ങൽ കരാർ തയ്യാറാക്കുകയും സാക്ഷ്യപ്പെടുത്തുകയും ചെയ്യുന്നു. ബൗഅംറ്റ് (ബിൽഡിംഗ് അതോറിറ്റി) നിർമ്മാണ അനുമതികളും നിയമങ്ങളും കൈകാര്യം ചെയ്യുന്നു. ഫിനാൻസാംറ്റ് (ടാക്സ് ഓഫീസ്) പ്രോപ്പർട്ടി ട്രാൻസ്ഫർ ടാക്സുമായി (ഗ്രുണ്ടെർവെർബ്സ്റ്റ്യൂയർ) ബന്ധപ്പെട്ടിരിക്കുന്നു. സങ്കീർണ്ണത കാരണം നിയമപരവും സാമ്പത്തികവുമായ ഉപദേശം വളരെ ശുപാർശ ചെയ്യുന്നു.",
        faq_cat_social_circle_title: "സാമൂഹിക വൃത്തം",
        faq_social_circle_q1: "ആകെനിൽ എനിക്ക് എങ്ങനെ ഒരു സാമൂഹിക വൃത്തം ഉണ്ടാക്കാനും മറ്റ് ഇന്ത്യക്കാരെ കാണാനും കഴിയും?",
        faq_social_circle_a1: "AIFA e.V. ഇവന്റുകളിൽ ചേരുന്നത് ഒരു മികച്ച തുടക്കമാണ്! കൂടാതെ, സോഷ്യൽ മീഡിയയിലെ (ഫേസ്ബുക്ക്, വാട്ട്‌സ്ആപ്പ്) പ്രാദേശിക ഇന്ത്യൻ കമ്മ്യൂണിറ്റി ഗ്രൂപ്പുകൾ കണ്ടെത്തുക, സാംസ്കാരിക ഉത്സവങ്ങളിൽ പങ്കെടുക്കുക, യൂണിവേഴ്സിറ്റി അല്ലെങ്കിൽ കമ്പനി അന്താരാഷ്ട്ര ഗ്രൂപ്പുകളിൽ ചേരുക. ഭാഷാ കൈമാറ്റ മീറ്റപ്പുകളും വിവിധ ആളുകളെ കണ്ടുമുട്ടാൻ നല്ലതാണ്.",
        faq_social_circle_q2: "ആകെനിൽ ഏതെങ്കിലും ഇന്ത്യൻ അസോസിയേഷനുകളോ (വെറൈൻ) സാംസ്കാരിക ഗ്രൂപ്പുകളോ ഉണ്ടോ?",
        faq_social_circle_a2: "അതെ, AIFA e.V. കൂടാതെ, മറ്റ് ചെറിയ ഇന്ത്യൻ സാംസ്കാരിക ഗ്രൂപ്പുകളോ വിദ്യാർത്ഥി അസോസിയേഷനുകളോ (പ്രത്യേകിച്ച് RWTH ആകെൻ യൂണിവേഴ്സിറ്റിക്ക് ചുറ്റും) ഉണ്ടാകാം. \"ഇൻഡിഷെർ വെറൈൻ ആകെൻ\" എന്ന് ഓൺലൈനിൽ തിരയുകയോ ഇന്ത്യൻ പലചരക്ക് കടകളിലെ നോട്ടീസ് ബോർഡുകൾ പരിശോധിക്കുകയോ ചെയ്യുന്നത് വിവരങ്ങൾ നൽകും.",
        faq_social_circle_q3: "ആകെനിൽ എനിക്ക് എങ്ങനെ ഹോബികളും സ്പോർട്സും പിന്തുടരാൻ കഴിയും?",
        faq_social_circle_a3: "ഫുട്ബോൾ, ടെന്നീസ്, നീന്തൽ, ഹൈക്കിംഗ് തുടങ്ങിയ വിവിധ പ്രവർത്തനങ്ങൾക്കായി ആകെനിൽ നിരവധി സ്പോർട്സ് ക്ലബ്ബുകൾ (സ്പോർട്സ് വെറൈൻ) ഉണ്ട്. ഹോച്ചൂൾസ്പോർട്ട് (യൂണിവേഴ്സിറ്റി സ്പോർട്സ്) വിദ്യാർത്ഥികൾക്കും സ്റ്റാഫിനും നിരവധി കോഴ്സുകൾ വാഗ്ദാനം ചെയ്യുന്നു. ഹോബികൾക്കായി, പ്രാദേശിക കമ്മ്യൂണിറ്റി സെന്ററുകൾ (വോൾക്ക്ഷോഷൂലെ), സ്വകാര്യ ക്ലബ്ബുകൾ, അല്ലെങ്കിൽ Meetup.com പോലുള്ള ഓൺലൈൻ പ്ലാറ്റ്‌ഫോമുകളിൽ താൽപ്പര്യമുള്ള ഗ്രൂപ്പുകൾക്കായി പരിശോധിക്കുക.",
        faq_cat_citizenship_title: "പൗരത്വം",
        faq_citizenship_q1: "ജർമ്മൻ പൗരത്വം നേടുന്നതിനുള്ള നടപടിക്രമം എന്താണ്?",
        faq_citizenship_a1: "നാച്ചുറലൈസേഷനുള്ള (ഐൻബുർഗെറുങ്) സാധാരണ നടപടിക്രമത്തിന് 8 വർഷത്തെ നിയമപരമായ താമസം (ചില സന്ദർഭങ്ങളിൽ കുറവ്, ഉദാ. ഇന്റഗ്രേഷൻ കോഴ്‌സുള്ള 7 വർഷം, ജർമ്മൻ പൗരന്മാരുടെ പങ്കാളികൾക്ക് 6 വർഷം), മതിയായ ജർമ്മൻ ഭാഷാ വൈദഗ്ദ്ധ്യം (B1/B2), ഒരു നാച്ചുറലൈസേഷൻ ടെസ്റ്റ് പാസാകൽ, സാധാരണയായി നിങ്ങളുടെ മുൻ പൗരത്വം ഉപേക്ഷിക്കൽ എന്നിവ ആവശ്യമാണ് (ഇന്ത്യ മുതിർന്നവർക്ക് ഇരട്ട പൗരത്വം അനുവദിക്കുന്നില്ല).",
        faq_citizenship_q2: "ഇന്ത്യൻ പാസ്‌പോർട്ട് സറണ്ടർ ചെയ്യുന്നതിനും OCI കാർഡ് നേടുന്നതിനുമുള്ള നടപടിക്രമം എന്താണ്?",
        faq_citizenship_a2: "ജർമ്മൻ പൗരത്വം നേടിയ ശേഷം, നിങ്ങളുടെ ഇന്ത്യൻ പാസ്‌പോർട്ട് ഇന്ത്യൻ എംബസി/കോൺസുലേറ്റിൽ സറണ്ടർ ചെയ്യണം. നിങ്ങൾക്ക് ഒരു \"സറണ്ടർ സർട്ടിഫിക്കറ്റ്\" ലഭിക്കും. തുടർന്ന്, നിങ്ങൾക്ക് ഒരു ഓവർസീസ് സിറ്റിസൺ ഓഫ് ഇന്ത്യ (OCI) കാർഡിനായി അപേക്ഷിക്കാം, ഇത് ഇന്ത്യയിലേക്കും മറ്റ് ആനുകൂല്യങ്ങളിലേക്കും ആജീവനാന്ത വിസ രഹിത യാത്ര അനുവദിക്കുന്നു. അപേക്ഷാ പ്രക്രിയ ഇന്ത്യൻ സർക്കാർ പോർട്ടൽ വഴി ഓൺലൈനാണ്.",        
        contact_title: "ഞങ്ങളെ ബന്ധപ്പെടുക",
        contact_intro: "ചോദ്യങ്ങളുണ്ടോ അല്ലെങ്കിൽ ബന്ധപ്പെടാൻ ആഗ്രഹിക്കുന്നുണ്ടോ? താഴെയുള്ള ഫോം പൂരിപ്പിക്കുക, ഞങ്ങൾ എത്രയും പെട്ടെന്ന് നിങ്ങളെ ബന്ധപ്പെടും.",
        your_name_label: "നിങ്ങളുടെ പേര്",
        your_name_placeholder: "ജോൺ ഡോ",
        your_email_label: "നിങ്ങളുടെ ഇമെയിൽ",
        your_email_placeholder: "john.doe@example.com",
        subject_label: "വിഷയം",
        subject_placeholder: "അംഗത്വത്തെക്കുറിച്ചുള്ള അന്വേഷണം",
        message_label: "സന്ദേശം",
        message_placeholder: "നിങ്ങളുടെ സന്ദേശം ഇവിടെ എഴുതുക...",
        send_message_button: "സന്ദേശം അയയ്ക്കുക",
        contact_success_message: "നിങ്ങളുടെ സന്ദേശത്തിന് നന്ദി! ഞങ്ങൾ ഉടൻ നിങ്ങളെ ബന്ധപ്പെടും.",
        site_title_event_registration: "ആകെനിലെ ഇന്ത്യൻ കുടുംബങ്ങളുടെ അസോസിയേഷൻ - ഇവന്റ് രജിസ്ട്രേഷൻ",
        event_reg_title: "ഇവന്റ് രജിസ്ട്രേഷൻ",
        event_reg_intro: "ഞങ്ങളുടെ വരാനിരിക്കുന്ന ഇവന്റുകൾക്കായി രജിസ്റ്റർ ചെയ്യാൻ ദയവായി താഴെയുള്ള ഫോം പൂരിപ്പിക്കുക.",
        event_reg_select_event_label: "ഇവന്റ് തിരഞ്ഞെടുക്കുക",
        event_reg_select_event_placeholder: "ഒരു ഇവന്റ് തിരഞ്ഞെടുക്കുക",
        event_reg_summer_picnic_option: "വേനൽക്കാല കുടുംബ പിക്നിക് (ജൂലൈ 20, 2024)",
        event_reg_dandiya_option: "ദാണ്ടിയ ആഘോഷങ്ങൾ 2025 (ഒക്ടോബർ 2, 2025)",
        event_reg_num_attendees_label: "പങ്കെടുക്കുന്നവരുടെ എണ്ണം",
        event_reg_dietary_notes_label: "ഭക്ഷണ നിയന്ത്രണങ്ങൾ / പ്രത്യേക കുറിപ്പുകൾ (ഓപ്ഷണൽ)",
        event_reg_dietary_notes_placeholder: "ഉദാ. വെജിറ്റേറിയൻ, ഗ്ലൂട്ടൻ-ഫ്രീ, വീൽചെയർ പ്രവേശനം ആവശ്യമാണ്",
        event_reg_submit_button: "ഇവന്റിനായി രജിസ്റ്റർ ചെയ്യുക",
        event_reg_success_message: "ഇവന്റിനായി രജിസ്റ്റർ ചെയ്തതിന് നന്ദി! നിങ്ങളെ കാണാൻ ഞങ്ങൾ ആഗ്രഹിക്കുന്നു.",
        event_reg_error_message: "ഇവന്റിനായി രജിസ്റ്റർ ചെയ്യുമ്പോൾ പിശക് സംഭവിച്ചു. ദയവായി വീണ്ടും ശ്രമിക്കുക.",
        data_protection_title: "ഡാറ്റാ സംരക്ഷണ നയം",
        data_protection_p1: "അസോസിയേഷൻ അതിന്റെ അംഗങ്ങളുടെ വ്യക്തിഗത ഡാറ്റാ, അസോസിയേഷൻ ഭരണഘടന പ്രകാരം അനുവദനീയമായ ഉദ്ദേശ്യങ്ങളും ചുമതലകളും നിറവേറ്റുന്നതിനായി ശേഖരിക്കുകയും പ്രോസസ്സ് ചെയ്യുകയും ഉപയോഗിക്കുകയും ചെയ്യുന്നു.",
        data_protection_p2: "അസോസിയേഷന് തനിക്കോ കൂടാതെ/അല്ലെങ്കിൽ അതിന്റെ അംഗങ്ങൾക്കോ ​​ആനുകൂല്യങ്ങൾ ലഭിക്കുന്നതിനായി ഇൻഷുറൻസ് പോളിസികൾ ക്രമീകരിക്കാൻ കഴിയും. ഇൻഷുറൻസ് പോളിസികൾക്കായുള്ള കരാറുകൾ നടപ്പിലാക്കുന്നതിനോ അവസാനിപ്പിക്കുന്നതിനോ വേണ്ടി, അസോസിയേഷൻ അതിന്റെ അംഗങ്ങളുടെ വ്യക്തിഗത ഡാറ്റാ ആവശ്യമായ അളവിൽ ഉത്തരവാദിത്തപ്പെട്ട ഇൻഷുറൻസ് കമ്പനിക്ക് കൈമാറുന്നു.",
        data_protection_p3: "പൊതുവായ അല്ലെങ്കിൽ സ്വകാര്യ ഇവന്റുകളുമായും ഭരണഘടനയിൽ പരാമർശിച്ചിട്ടുള്ള മറ്റ് പ്രവർത്തനങ്ങളുമായും ബന്ധപ്പെട്ട്, അസോസിയേഷൻ അതിന്റെ അംഗങ്ങളുടെ പേരുകളും ഫോട്ടോകളും അതിന്റെ ഹോംപേജിൽ പ്രസിദ്ധീകരിക്കുകയും പ്രസിദ്ധീകരണത്തിനായി പ്രിന്റ്, ടെലിമീഡിയ, ഇലക്ട്രോണിക് മീഡിയ എന്നിവയിലേക്ക് പേരുകളും ഫോട്ടോകളും അയയ്ക്കുകയും ചെയ്യുന്നു. ഒരു അംഗത്തിന് അവരുടെ വ്യക്തിഗത ഫോട്ടോകൾ പ്രസിദ്ധീകരിക്കുന്നതിനെതിരെ ബോർഡിന് എപ്പോൾ വേണമെങ്കിലും എതിർപ്പ് ഉന്നയിക്കാം. എതിർപ്പ് ലഭിച്ചുകഴിഞ്ഞാൽ, പ്രസിദ്ധീകരണം/കൈമാറ്റം നിർത്തലാക്കുകയും അസോസിയേഷൻ അതിന്റെ ഹോംപേജിൽ നിന്ന് നിലവിലുള്ള ഫോട്ടോകൾ നീക്കം ചെയ്യുകയും ചെയ്യും.",
        data_protection_p4: "അംഗത്വത്തിലൂടെയും ഈ ഭരണഘടനയുടെ അനുബന്ധ അംഗീകാരത്തിലൂടെയും, അംഗങ്ങൾ അവരുടെ വ്യക്തിഗത ഡാറ്റാ മുകളിൽ പറഞ്ഞിട്ടുള്ള അളവിലും വ്യാപ്തിയിലും ശേഖരിക്കുന്നതിനും, പ്രോസസ്സ് ചെയ്യുന്നതിനും, ഉപയോഗിക്കുന്നതിനും സമ്മതിക്കുന്നു. അതിന്റെ നിയമപരമായ ചുമതലകളും ഉദ്ദേശ്യങ്ങളും നിറവേറ്റുന്നതല്ലാതെ മറ്റ് ആവശ്യങ്ങൾക്കായി ഡാറ്റാ ഉപയോഗിക്കാൻ അസോസിയേഷന് നിയമപരമായി ബാധ്യതയുണ്ടെങ്കിൽ മാത്രമേ അനുവാദമുള്ളൂ. ഡാറ്റാ വിൽക്കാൻ പാടില്ല.",
        data_protection_p5: "ഓരോ അംഗവും അംഗത്വ ലിസ്റ്റിന്റെ ഭാഗമായി അവർക്ക് ലഭ്യമാക്കുന്ന ഡാറ്റാ രഹസ്യമായി സൂക്ഷിക്കാൻ ഉത്തരവാദിത്തം ഏറ്റെടുക്കുന്നു. അസോസിയേഷന്റെ എല്ലാ സാമ്പത്തിക കാര്യങ്ങൾക്കും ഇത് ബാധകമാണ്.",
        data_protection_p6: "അംഗങ്ങളുടെ വ്യക്തിഗത ഡാറ്റാ ഏതെങ്കിലും വാണിജ്യപരമായ അല്ലെങ്കിൽ വാണിജ്യേതരപരമായ ആവശ്യങ്ങൾക്കായി മൂന്നാം കക്ഷികൾക്ക് വെളിപ്പെടുത്താതിരിക്കാൻ ഞങ്ങൾ പ്രതിജ്ഞാബദ്ധരാണ്. ഡാറ്റാ ഉപയോഗത്തെക്കുറിച്ചുള്ള കൂടുതൽ വിവരങ്ങൾക്കായി, ദയവായി ഞങ്ങളുടെ പൊതുവായ ഡാറ്റാ സംരക്ഷണ നയം ഇവിടെ കാണുക (<a href=\"https://www.aifaev.de\" class=\"text-blue-600 hover:underline\" target=\"_blank\">www.aifaev.de</a>)"        
    },
    or: { // Odia
        site_title_home: "ଆକେନରେ ଭାରତୀୟ ପରିବାର ସଂଘ - ମୁଖ୍ୟ ପୃଷ୍ଠା",
        site_title_about: "ଆକେନରେ ଭାରତୀୟ ପରିବାର ସଂଘ - ଆମ ବିଷୟରେ",
        site_title_events: "ଆକେନରେ ଭାରତୀୟ ପରିବାର ସଂଘ - ଘଟଣାବଳୀ",
        site_title_membership: "ଆକେନରେ ଭାରତୀୟ ପରିବାର ସଂଘ - ସଦସ୍ୟତା",
        site_title_faq: "ଆକେନ୍ ରେ ଭାରତୀୟ ପରିବାର ସଂଘ - ସାଧାରଣ ପ୍ରଶ୍ନ", // Ensure this is updated
        site_title_contact: "ଆକେନରେ ଭାରତୀୟ ପରିବାର ସଂଘ - ଯୋଗାଯୋଗ",
        site_title_data_protection: "ଆକେନ୍ ରେ ଭାରତୀୟ ପରିବାର ସଂଘ - ଡାଟା ସୁରକ୍ଷା ନୀତି",        
        nav_home: "ମୁଖ୍ୟ ପୃଷ୍ଠା",
        nav_about: "ଆମ ବିଷୟରେ",
        nav_events: "ଘଟଣାବଳୀ",
        nav_membership: "ସଦସ୍ୟତା",
        nav_faq: "ସାଧାରଣ ପ୍ରଶ୍ନ",
        nav_contact: "ଯୋଗାଯୋଗ",
        nav_event_registration: "ଘଟଣା ପଞ୍ଜୀକରଣ", // NEW NAV KEY        
        home_main_title: "ଆକେନରେ ଭାରତୀୟ ପରିବାର ସଂଘ",
        home_tagline: "ଆକେନରେ ଭାରତୀୟ ପରିବାରଗୁଡ଼ିକୁ ସଂଯୋଗ କରିବା, ସମ୍ପ୍ରଦାୟକୁ ପ୍ରୋତ୍ସାହିତ କରିବା ଏବଂ ଆମର ସମୃଦ୍ଧ ସଂସ୍କୃତିକୁ ପାଳନ କରିବା।",
        home_explore_events: "ଘଟଣାବଳୀ ଅନୁସନ୍ଧାନ କରନ୍ତୁ",
        footer_copyright: "&copy; 2025 ଆକେନ୍ ରେ ଭାରତୀୟ ପରିବାର ସଂଘ. e.V. ପଞ୍ଜୀକରଣ ନମ୍ବର VR 6590(Amtsgericht Aachen). ସମସ୍ତ ଅଧିକାର ସଂରକ୍ଷିତ।",
        footer_data_protection_policy: "ଡାଟା ସୁରକ୍ଷା ନୀତି",
        footer_terms: "ସେବା ସର୍ତ୍ତାବଳୀ",
        lang_en: "English",
        lang_de: "Deutsch",
        lang_hi: "हिन्दी",
        lang_mr: "मराठी",
        lang_te: "తెలుగు",
        lang_ta: "தமிழ்",
        lang_bn: "বাংলা",
        lang_pa: "ਪੰਜਾਬੀ",
        lang_kn: "ಕನ್ನಡ",
        lang_ml: "മലയാളം",
        lang_or: "ଓଡ଼ିଆ",
        lang_gu: "ગુજરાતી",
        lang_sa: "संस्कृतम्",
        lang_mai: "मैथिली",
        about_title: "ଆମ ସଂଘ ବିଷୟରେ",
        about_para1: "ଆକେନରେ ଭାରତୀୟ ପରିବାର ସଂଘ (AIFA e.V.) ଜର୍ମାନୀର ଆକେନରେ ରହୁଥିବା ଭାରତୀୟ ପରିବାରଗୁଡ଼ିକୁ ଏକାଠି କରିବା ପାଇଁ ଉତ୍ସର୍ଗୀକୃତ ଏକ ଅଣ-ଲାଭକାରୀ ସଂଗଠନ। ଆମର ଲକ୍ଷ୍ୟ ହେଉଛି ଏକ ଜୀବନ୍ତ ଏବଂ ସହାୟକ ସମ୍ପ୍ରଦାୟ ସୃଷ୍ଟି କରିବା ଯେଉଁଠାରେ ସାଂସ୍କୃତିକ ଐତିହ୍ୟ ପାଳନ କରାଯାଏ, ପରମ୍ପରାଗୁଡ଼ିକ ସଂରକ୍ଷିତ ହୁଏ ଏବଂ ନୂତନ ବନ୍ଧୁତା ଗଠିତ ହୁଏ।",
        about_para2: "ଆମେ ବର୍ଷସାରା ବିଭିନ୍ନ ପ୍ରକାରର କାର୍ଯ୍ୟକ୍ରମ ଆୟୋଜନ କରୁ, ଯେଉଁଥିରେ ସାଂସ୍କୃତିକ ପର୍ବ ଏବଂ ସାମାଜିକ ସମାବେଶରୁ ଆରମ୍ଭ କରି ଶିକ୍ଷାଗତ କର୍ମଶାଳା ଏବଂ ସମ୍ପ୍ରଦାୟ ସେବା ପଦକ୍ଷେପଗୁଡ଼ିକ ଅନ୍ତର୍ଭୁକ୍ତ। ଆମର ଲକ୍ଷ୍ୟ ହେଉଛି ଭାରତୀୟ ପରିବାରଗୁଡ଼ିକୁ ଘରଠାରୁ ଦୂରରେ ଏକ ଘର ଯୋଗାଇବା, ସ୍ଥାନୀୟ ସମ୍ପ୍ରଦାୟରେ ଏକୀଭୂତ ହେବାକୁ ସାହାଯ୍ୟ କରିବା ଏବଂ ସେମାନଙ୍କ ମୂଳ ସହିତ ସଂଯୁକ୍ତ ରହିବା।",
        about_para3: "ଆମ ସମ୍ପ୍ରଦାୟର ଉଷ୍ମତା ଅନୁଭବ କରିବାକୁ, ରୋମାଞ୍ଚକର କାର୍ଯ୍ୟକ୍ରମରେ ଅଂଶଗ୍ରହଣ କରିବାକୁ ଏବଂ ଆକେନରେ ଏକ ଶକ୍ତିଶାଳୀ ଏବଂ ସୁସଂଗଠିତ ଭାରତୀୟ ପ୍ରବାସୀ ଗଠନରେ ଯୋଗଦାନ କରିବାକୁ ଆମ ସହିତ ଯୋଗ ଦିଅନ୍ତୁ।",
        events_title: "ଆମର ଘଟଣାବଳୀ",
        event_diwali_title: "ଦୀପାବଳି ପାଳନ 2023",
        event_diwali_date: "ଅକ୍ଟୋବର 28, 2023",
        event_diwali_desc: "ସାଂସ୍କୃତିକ ପ୍ରଦର୍ଶନ, ସୁସ୍ୱାଦୁ ଖାଦ୍ୟ ଏବଂ ଆତସବାଜି ସହିତ ଆଲୋକର ପର୍ବର ଏକ ବିରାଟ ପାଳନ। ପରିବାରଗୁଡ଼ିକ ଏକାଠି ଏକ ସ୍ମରଣୀୟ ସନ୍ଧ୍ୟା ଉପଭୋଗ କଲେ।",
        event_diwali_status: "ଅତୀତର ଘଟଣା",
        event_summer_title: "ଗ୍ରୀଷ୍ମକାଳୀନ ପାରିବାରିକ ପିକନିକ୍",
        event_summer_date: "ଜୁଲାଇ 20, 2024",
        event_summer_desc: "ଖେଳ, ଖାଦ୍ୟ ଏବଂ ବାହ୍ୟ କାର୍ଯ୍ୟକଳାପ ସହିତ ୱେଷ୍ଟପାର୍କରେ ଏକ ମଜାଦାର ପାରିବାରିକ ପିକନିକ୍ ପାଇଁ ଆମ ସହିତ ଯୋଗ ଦିଅନ୍ତୁ। ଆପଣଙ୍କ ପିକନିକ୍ ଝୁଡ଼ି ଭୁଲନ୍ତୁ ନାହିଁ!",
        event_summer_status: "ବର୍ତ୍ତମାନର ଘଟଣା",
        event_dandiya_title: "ଦାଣ୍ଡିଆ ପାଳନ 2025",
        event_dandiya_date: "ଅକ୍ଟୋବର 2, 2025",
        event_dandiya_desc: "ଘୂରି ବୁଲିବା ଏବଂ ନାଚିବାକୁ ପ୍ରସ୍ତୁତ ହୁଅନ୍ତୁ! ପାରମ୍ପରିକ ସଙ୍ଗୀତ, ରଙ୍ଗୀନ ପୋଷାକ ଏବଂ ଶକ୍ତିଶାଳୀ ନୃତ୍ୟ ଚାଲି ସହିତ ଉତ୍ସବର ଭାବନା ପାଳନ କରି ଏକ ଜୀବନ୍ତ ଦାଣ୍ଡିଆ ଏବଂ ଗର୍ବା ରାତି ପାଇଁ ଆମ ସହିତ ଯୋଗ ଦିଅନ୍ତୁ। ସ୍ଥାନ ଏବଂ କାର୍ଯ୍ୟକଳାପ ଉପରେ ଅଧିକ ବିବରଣୀ ଶୀଘ୍ର ଘୋଷଣା କରାଯିବ।",
        event_dandiya_status: "ଭବିଷ୍ୟତର ଘଟଣା",
        events_view_all: "ସମସ୍ତ ଘଟଣାବଳୀ ଦେଖନ୍ତୁ",
        events_register_now: "ଘଟଣା ପାଇଁ ପଞ୍ଜୀକରଣ କରନ୍ତୁ", // NEW BUTTON TEXT        
        membership_title: "ସଦସ୍ୟ ହୁଅନ୍ତୁ",
        membership_intro: "ଆକେନରେ ଭାରତୀୟ ପରିବାର ସଂଘ (AIFA e.V.) ରେ ଯୋଗ ଦିଅନ୍ତୁ ଏବଂ ଆମର ବଢୁଥିବା ସମ୍ପ୍ରଦାୟର ଅଂଶ ହୁଅନ୍ତୁ! ଆପଣଙ୍କ ସଦସ୍ୟତା ଆମକୁ ରୋମାଞ୍ଚକର କାର୍ଯ୍ୟକ୍ରମ ଆୟୋଜନ କରିବାକୁ ଏବଂ ଆକେନରେ ଥିବା ଭାରତୀୟ ପରିବାରଗୁଡ଼ିକୁ ସମର୍ଥନ କରିବାକୁ ସାହାଯ୍ୟ କରେ।",
        membership_individual_title: "ବ୍ୟକ୍ତିଗତ ସଦସ୍ୟତା",
        membership_individual_price: "€30",
        membership_individual_per_year: "/ ବର୍ଷ",
        membership_individual_desc: "ସଂଯୋଗ କରିବାକୁ ଚାହୁଁଥିବା ବ୍ୟକ୍ତିବିଶେଷଙ୍କ ପାଇଁ ଉପଯୁକ୍ତ।",
        membership_family_title: "ପାରିବାରିକ ସଦସ୍ୟତା",
        membership_family_price: "€50",
        membership_family_per_year: "/ ବର୍ଷ",
        membership_family_desc: "ଏକକ ପରିବାରର ସମସ୍ତ ସଦସ୍ୟଙ୍କୁ ଅନ୍ତର୍ଭୁକ୍ତ କରେ।",
        membership_form_title: "ସଦସ୍ୟତା ଆବେଦନ ଫର୍ମ",
        membership_type_label: "ସଦସ୍ୟତା ପ୍ରକାର",
        membership_type_select_option: "ଏକ ସଦସ୍ୟତା ପ୍ରକାର ବାଛନ୍ତୁ",
        membership_type_individual_option: "ବ୍ୟକ୍ତିଗତ ସଦସ୍ୟତା (€30/ବର୍ଷ)",
        membership_type_family_option: "ପାରିବାରିକ ସଦସ୍ୟତା (€50/ବର୍ଷ)",
        first_name_label: "ପ୍ରଥମ ନାମ",
        first_name_placeholder: "ଜନ୍",
        last_name_label: "ଶେଷ ନାମ",
        last_name_placeholder: "ଡୋ",
        num_family_members_label: "ପରିବାର ସଦସ୍ୟଙ୍କ ସଂଖ୍ୟା (ଆପଣଙ୍କ ସମେତ)",
        num_family_members_placeholder: "ଉଦାହରଣ: 4",
        volunteer_checkbox: "ମୁଁ AIFA e.V. କାର୍ଯ୍ୟକ୍ରମ ପାଇଁ ସ୍ୱେଚ୍ଛାସେବୀ ଭାବରେ ଉପଲବ୍ଧ ଅଛି।",
        apply_membership_button: "ସଦସ୍ୟତା ପାଇଁ ଆବେଦନ କରନ୍ତୁ",
        membership_success_message: "ଆପଣଙ୍କ ସଦସ୍ୟତା ଆବେଦନ ପାଇଁ ଧନ୍ୟବାଦ! ଆମେ ଶୀଘ୍ର ଆପଣଙ୍କ ସହିତ ଯୋଗାଯୋଗ କରିବୁ।",
        faq_title: "ସାଧାରଣ ପ୍ରଶ୍ନ",
        faq_q1: "ଆକେନରେ ଭାରତୀୟ ପରିବାର ସଂଘ (AIFA e.V.) କ’ଣ?",
        faq_a1: "AIFA e.V. ଜର୍ମାନୀର ଆକେନରେ ରହୁଥିବା ଭାରତୀୟ ପରିବାରଗୁଡ଼ିକ ମଧ୍ୟରେ ଏକ ଶକ୍ତିଶାଳୀ ସମ୍ପ୍ରଦାୟ ଗଠନ କରିବା ପାଇଁ ଉତ୍ସର୍ଗୀକୃତ ଏକ ଅଣ-ଲାଭକାରୀ ସଂଗଠନ। ଆମେ ସାଂସ୍କୃତିକ କାର୍ଯ୍ୟକ୍ରମ, ସାମାଜିକ ସମାବେଶ ଆୟୋଜନ କରୁ ଏବଂ ନେଟୱାର୍କିଂ ଏବଂ ସମର୍ଥନ ପାଇଁ ଏକ ପ୍ଲାଟଫର୍ମ ପ୍ରଦାନ କରୁ।",
        faq_q2: "ମୁଁ କିପରି ସଦସ୍ୟ ହୋଇପାରିବି?",
        faq_a2: "ସଦସ୍ୟତା ବିବରଣୀ ଏବଂ ଆବେଦନ ଫର୍ମ ଶୀଘ୍ର ଆମ ୱେବସାଇଟରେ ଉପଲବ୍ଧ ହେବ। ଅଧିକ ସୂଚନା ପାଇଁ ଦୟାକରି ପୁନର୍ବାର ଯାଞ୍ଚ କରନ୍ତୁ କିମ୍ବା ଯୋଗାଯୋଗ ଫର୍ମ ମାଧ୍ୟମରେ ଆମ ସହିତ ଯୋଗାଯୋଗ କରନ୍ତୁ।",
        faq_q3: "ଘଟଣାଗୁଡ଼ିକ ଅଣ-ସଦସ୍ୟମାନଙ୍କ ପାଇଁ ଖୋଲା ଅଛି କି?",
        faq_a3: "ସାଂସ୍କୃତିକ ଆଦାନପ୍ରଦାନ ଏବଂ ସମ୍ପ୍ରଦାୟ ଗଠନକୁ ପ୍ରୋତ୍ସାହିତ କରିବା ପାଇଁ ଆମର ଅନେକ ଘଟଣା ଅଣ-ସଦସ୍ୟମାନଙ୍କ ସମେତ ସମସ୍ତଙ୍କ ପାଇଁ ଖୋଲା ଅଛି। କିଛି ବିଶେଷ ଘଟଣା ପାଇଁ ସଦସ୍ୟତା ଆବଶ୍ୟକ ହୋଇପାରେ। ପ୍ରତ୍ୟେକ ଘଟଣା ପାଇଁ ବିବରଣୀ ନିର୍ଦ୍ଦିଷ୍ଟ କରାଯିବ।",
        faq_q4: "ମୁଁ କିପରି ସ୍ୱେଚ୍ଛାସେବୀ ହୋଇପାରିବି କିମ୍ବା ଯୋଗଦାନ କରିପାରିବି?",
        faq_a4: "ଆମେ ସ୍ୱେଚ୍ଛାସେବୀମାନଙ୍କୁ ସ୍ୱାଗତ କରୁ! ଯଦି ଆପଣ ନିଜ ସମୟ କିମ୍ବା ଦକ୍ଷତା ଯୋଗଦାନ କରିବାକୁ ଆଗ୍ରହୀ, ତେବେ ଦୟାକରି ଯୋଗାଯୋଗ ଫର୍ମ ମାଧ୍ୟମରେ ଆମ ସହିତ ଯୋଗାଯୋଗ କରନ୍ତୁ, ଏବଂ ଆମେ ସୁଯୋଗ ସହିତ ଆପଣଙ୍କ ସହିତ ଯୋଗାଯୋଗ କରିବୁ।",
        faq_portal_title: "ସୂଚନା ପୋର୍ଟାଲ୍: ଜର୍ମାନୀରେ ଭାରତୀୟ ପରିବାରମାନଙ୍କ ପାଇଁ ସାଧାରଣ ପ୍ରଶ୍ନ",
        faq_search_placeholder: "କୀୱାର୍ଡ ଦ୍ୱାରା ସାଧାରଣ ପ୍ରଶ୍ନ ଖୋଜନ୍ତୁ...",
        faq_cat_aifa_title: "AIFA e.V.",
        faq_cat_first_entry_title: "ଜର୍ମାନୀକୁ ପ୍ରଥମ ପ୍ରବେଶ",
        faq_first_entry_q1: "ଜର୍ମାନୀରେ ଚାକିରି ପ୍ରସ୍ତାବ ପାଇବା ପରେ ମୁଁ କ’ଣ କରିବା ଉଚିତ୍?",
        faq_first_entry_a1: "ଚାକିରି ପ୍ରସ୍ତାବ ପାଇବା ପରେ, ଆପଣ ତୁରନ୍ତ ଭିସା ଆବେଦନ ପ୍ରକ୍ରିୟା ଆରମ୍ଭ କରିବା ଉଚିତ୍। ଆପଣଙ୍କର ନିଯୁକ୍ତି ଚୁକ୍ତି, ଶିକ୍ଷାଗତ ପ୍ରମାଣପତ୍ର ଏବଂ ପାଣ୍ଠିର ପ୍ରମାଣ ସହିତ ସମସ୍ତ ଆବଶ୍ୟକୀୟ ଦଲିଲ ସଂଗ୍ରହ କରନ୍ତୁ। ଆପଣଙ୍କ ଦେଶରେ ଥିବା ଜର୍ମାନ ଦୂତାବାସ କିମ୍ବା ବାଣିଜ୍ୟ ଦୂତାବାସର ନିର୍ଦ୍ଦିଷ୍ଟ ଆବଶ୍ୟକତା ଯାଞ୍ଚ କରିବା ଉଚିତ୍।",
        faq_first_entry_q2: "ପରିବାର ପୁନର୍ଗଠନ ଭିସା ପାଇଁ ପ୍ରକ୍ରିୟା କ’ଣ?",
        faq_first_entry_a2: "ପରିବାର ପୁନର୍ଗଠନ ଭିସା ଆପଣଙ୍କ ଜୀବନସାଥୀ ଏବଂ ନାବାଳକ ପିଲାମାନଙ୍କୁ ଜର୍ମାନୀରେ ଆପଣଙ୍କ ସହିତ ଯୋଗଦେବାକୁ ଅନୁମତି ଦିଏ। ମୁଖ୍ୟ ଆବଶ୍ୟକତାଗୁଡ଼ିକରେ ପ୍ରାୟତଃ ପର୍ଯ୍ୟାପ୍ତ ବାସସ୍ଥାନ, ଆର୍ଥିକ ସମ୍ବଳ ଏବଂ ଆପଣଙ୍କ ଜୀବନସାଥୀ ପାଇଁ ମୌଳିକ ଜର୍ମାନ ଭାଷା ଦକ୍ଷତାର ପ୍ରମାଣ ଅନ୍ତର୍ଭୁକ୍ତ। ଆବେଦନ ସାଧାରଣତଃ ଆପଣଙ୍କ ସ୍ୱଦେଶରେ ଥିବା ଜର୍ମାନ ଦୂତାବାସରେ ଦାଖଲ କରାଯାଏ।",
        faq_first_entry_q3: "ମୁଁ ଜର୍ମାନୀକୁ କେତେ ସୁନା/ଗହଣା ଆଣିପାରିବି?",
        faq_first_entry_a3: "ଜର୍ମାନୀକୁ ସ୍ଥାନାନ୍ତର କରିବା ସମୟରେ, ଗହଣା ସମେତ ବ୍ୟକ୍ତିଗତ ସାମଗ୍ରୀ ସାଧାରଣତଃ ଶୁଳ୍କରୁ ମୁକ୍ତ ଥାଏ ଯଦି ସେଗୁଡ଼ିକ ଆପଣଙ୍କ ଘରର ଜିନିଷପତ୍ରର ଅଂଶ ଅଟେ ଏବଂ ଆପଣଙ୍କ ଦ୍ୱାରା ଅତି କମରେ ଛଅ ମାସ ପାଇଁ ବ୍ୟବହୃତ ହୋଇଛି। ତେବେ, ଉଚ୍ଚ ମୂଲ୍ୟର ସାମଗ୍ରୀ ପାଇଁ, ଶୁଳ୍କ ସହିତ ସମସ୍ୟା ଏଡ଼ାଇବା ପାଇଁ ମାଲିକାନା ଏବଂ ମୂଲ୍ୟର ପ୍ରମାଣ (ଯଥା, କ୍ରୟ ରସିଦ, ମୂଲ୍ୟାଙ୍କନ ପ୍ରମାଣପତ୍ର) ବହନ କରିବା ଉଚିତ୍। ଶୁଳ୍କ ନିୟମ ଅନୁଯାୟୀ ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ମୂଲ୍ୟରୁ ଅଧିକ ସାମଗ୍ରୀ ସର୍ବଦା ଘୋଷଣା କରନ୍ତୁ।",
        faq_cat_first_arrival_aachen_title: "ଆକେନ୍ ରେ ପ୍ରଥମ ଆଗମନ",
        faq_first_arrival_aachen_q1: "ବିମାନବନ୍ଦରରୁ ଆକେନ୍ ପହଞ୍ଚିବାର ସର୍ବୋତ୍ତମ ଉପାୟ କ’ଣ?",
        faq_first_arrival_aachen_a1: "ଆକେନ୍ ଭଲ ଭାବରେ ସଂଯୁକ୍ତ। ଡୁସେଲଡର୍ଫ ବିମାନବନ୍ଦର (DUS) କିମ୍ବା କୋଲୋନ୍ ବନ୍ ବିମାନବନ୍ଦର (CGN) ରୁ, ଆପଣ ସିଧାସଳଖ ଆକେନ୍ ହାଉପ୍ଟବାନହୋଫ (ମୁଖ୍ୟ ଷ୍ଟେସନ) କୁ ଟ୍ରେନ୍ ଯୋଗେ ଯାଇପାରିବେ। ମାଷ୍ଟ୍ରିଚ୍ ଆକେନ୍ ବିମାନବନ୍ଦର (MST) ରୁ ବସ୍ ଉପଲବ୍ଧ। ଟ୍ୟାକ୍ସି ଏବଂ ରାଇଡ୍-ସେୟାରିଂ ସେବାଗୁଡ଼ିକ ମଧ୍ୟ ବିକଳ୍ପ ଅଟେ କିନ୍ତୁ ସାଧାରଣତଃ ଅଧିକ ମହଙ୍ଗା।",
        faq_first_arrival_aachen_q2: "ଆକେନ୍ ରେ ମୁଁ ଅସ୍ଥାୟୀ ଆବାସ କେଉଁଠାରେ ପାଇପାରିବି?",
        faq_first_arrival_aachen_a2: "ଅସ୍ଥାୟୀ ଆବାସ ପାଇଁ, ସର୍ଭିସଡ୍ ଆପାର୍ଟମେଣ୍ଟ, ଏୟାରବିଏନବି, କିମ୍ବା ସ୍ୱଳ୍ପକାଳୀନ ଭଡା ବିଷୟରେ ବିଚାର କରନ୍ତୁ। Booking.com, Airbnb, ଏବଂ ସ୍ଥାନୀୟ ବିଜ୍ଞାପନ (ଯଥା, WG-Gesucht.de ସେୟାର୍ଡ ଫ୍ଲାଟ୍ ପାଇଁ, ଯଦିଓ ପରିବାର ପାଇଁ କମ୍ ସାଧାରଣ) ସହାୟକ ହୋଇପାରେ। କିଛି ହୋଟେଲ ମଧ୍ୟ ବିସ୍ତାରିତ ରହଣି ବିକଳ୍ପ ପ୍ରଦାନ କରନ୍ତି।",
        faq_first_arrival_aachen_q3: "'ଆନମେଲଡୁଙ୍ଗ' କ’ଣ ଏବଂ ମୁଁ ଏହାକୁ କିପରି କରିବି?",
        faq_first_arrival_aachen_a3: "'ଆନମେଲଡୁଙ୍ଗ' ହେଉଛି ଆପଣଙ୍କ ସ୍ଥାୟୀ ବାସସ୍ଥାନକୁ ଯିବାର ଦୁଇ ସପ୍ତାହ ମଧ୍ୟରେ ସ୍ଥାନୀୟ କର୍ତ୍ତୃପକ୍ଷ (ବୁର୍ଗେରାମଟ୍/ଆଇନୱୋହନେରମେଲଡେଆମଟ୍) ରେ ଆପଣଙ୍କ ଆବାସିକ ଠିକଣାର ବାଧ୍ୟତାମୂଳକ ପଞ୍ଜୀକରଣ। ଆପଣଙ୍କୁ ଆପଣଙ୍କ ପାସପୋର୍ଟ, ଭିସା ଏବଂ ଜଣେ ଜମି ମାଲିକଙ୍କ ପ୍ରମାଣପତ୍ର (ୱୋହନୁଙ୍ଗସଗେବେରବେଷ୍ଟାଟିଗୁଙ୍ଗ) ଆବଶ୍ୟକ। ଟ୍ୟାକ୍ସ ଆଇଡି ପାଇବା, ବ୍ୟାଙ୍କ ଆକାଉଣ୍ଟ ଖୋଲିବା ଏବଂ ଅନ୍ୟାନ୍ୟ ପ୍ରଶାସନିକ କାର୍ଯ୍ୟ ପାଇଁ ଏହା ଅତ୍ୟନ୍ତ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ। ଅଗ୍ରୀମରେ ଅନଲାଇନରେ ଏକ ନିଯୁକ୍ତି ବୁକ୍ କରନ୍ତୁ।",
        faq_first_arrival_aachen_q4: "ମୁଁ ଜର୍ମାନୀରେ ଏକ ବ୍ୟାଙ୍କ ଆକାଉଣ୍ଟ କିପରି ଖୋଲିବି?",
        faq_first_arrival_aachen_a4: "ଆପଣ ପାରମ୍ପରିକ ବ୍ୟାଙ୍କଗୁଡ଼ିକରେ (ଯଥା, ସ୍ପାରକାସେ, ଡଏଚେ ବ୍ୟାଙ୍କ) କିମ୍ବା ଅନଲାଇନ୍ ବ୍ୟାଙ୍କଗୁଡ଼ିକରେ (ଯଥା, N26, କମଡାଇରେକ୍ଟ) ଏକ ବ୍ୟାଙ୍କ ଆକାଉଣ୍ଟ ଖୋଲିପାରିବେ। ପାରମ୍ପରିକ ବ୍ୟାଙ୍କଗୁଡ଼ିକ ପାଇଁ, ଆପଣଙ୍କୁ ସାଧାରଣତଃ ଆପଣଙ୍କ ପାସପୋର୍ଟ, ଭିସା/ରେସିଡେନ୍ସ ପରମିଟ୍, ଏବଂ ଠିକଣା ପ୍ରମାଣ (ଆନମେଲଡୁଙ୍ଗ ପ୍ରମାଣପତ୍ର) ଆବଶ୍ୟକ। ଅନଲାଇନ୍ ବ୍ୟାଙ୍କଗୁଡ଼ିକ ପ୍ରାୟତଃ ଏକ ସରଳ ଡିଜିଟାଲ୍ ପ୍ରକ୍ରିୟା ପ୍ରଦାନ କରନ୍ତି।",
        faq_cat_children_title: "ପିଲାମାନେ",
        faq_children_q1: "ମୁଁ ଆକେନ୍ ରେ ମୋ ପିଲାମାନଙ୍କ ପାଇଁ ଏକ କିଟା (କିଣ୍ଡରଗାର୍ଟେନ) କିମ୍ବା ବିଦ୍ୟାଳୟ କିପରି ଖୋଜିବି?",
        faq_children_a1: "କିଟା ପାଇଁ, ଆପଣ ସାଧାରଣତଃ ସହରର ଅନଲାଇନ୍ ପୋର୍ଟାଲ୍ (କିଟା-ନାଭିଗେଟର୍ ଆକେନ୍) ମାଧ୍ୟମରେ କିମ୍ବା ସିଧାସଳଖ ବ୍ୟକ୍ତିଗତ କିଟା ସହିତ ପଞ୍ଜୀକରଣ କରନ୍ତି। ବିଦ୍ୟାଳୟଗୁଡ଼ିକ ପାଇଁ, ଆକେନ୍ ର ଶୁଲଆମଟ୍ (ବିଦ୍ୟାଳୟ କାର୍ଯ୍ୟାଳୟ) କିମ୍ବା ବ୍ୟକ୍ତିଗତ ବିଦ୍ୟାଳୟଗୁଡ଼ିକୁ ଯୋଗାଯୋଗ କରନ୍ତୁ। ଅଧିକ ଚାହିଦା ହେତୁ କିଟା ପାଇଁ ଶୀଘ୍ର ପଞ୍ଜୀକରଣ ଅତ୍ୟନ୍ତ ସୁପାରିଶ କରାଯାଏ।",
        faq_children_q2: "ଆକେନ୍ ରେ ପିଲାମାନଙ୍କ ପାଇଁ କୌଣସି ହବି କ୍ଲାସ୍ କିମ୍ବା କ୍ରୀଡା କ୍ଲବ୍ ଅଛି କି?",
        faq_children_a2: "ହଁ, ଆକେନ୍ ପିଲାମାନଙ୍କ ପାଇଁ ବିଭିନ୍ନ ପ୍ରକାରର ହବି କ୍ଲାସ୍ ଏବଂ କ୍ରୀଡା କ୍ଲବ୍ ପ୍ରଦାନ କରେ। ଆପଣ ସହରର ଅଫିସିଆଲ୍ ୱେବସାଇଟ୍, ସ୍ଥାନୀୟ ସମ୍ପ୍ରଦାୟ କେନ୍ଦ୍ର (ଫାମିଲିଏନଜେଣ୍ଟ୍ରେନ୍), କ୍ରୀଡା ଫେଡେରେସନ୍ (ଷ୍ଟାଡ୍ଟସ୍ପୋର୍ଟସ୍ବୁଣ୍ଡ ଆକେନ୍) ମାଧ୍ୟମରେ କିମ୍ବା ବିଦ୍ୟାଳୟ ଏବଂ କିଟାଗୁଡ଼ିକରେ ସିଧାସଳଖ ପଚାରି ସୂଚନା ପାଇପାରିବେ। ବିକଳ୍ପଗୁଡ଼ିକରେ ଫୁଟବଲ୍, ସନ୍ତରଣ, ସଙ୍ଗୀତ, କଳା ଏବଂ ନୃତ୍ୟ ଅନ୍ତର୍ଭୁକ୍ତ।",
        faq_cat_language_learning_title: "ଭାଷା ଶିକ୍ଷା",
        faq_language_q1: "ଆକେନ୍ ରେ କେଉଁ ଭାଷା ବିଦ୍ୟାଳୟଗୁଡ଼ିକ ଉପଲବ୍ଧ?",
        faq_language_a1: "ଆକେନ୍ ରେ ଅନେକ ଭାଷା ବିଦ୍ୟାଳୟ ଅଛି ଯେଉଁଥିରେ ଭୋଲ୍କଶୋଚୁଲେ (VHS) ଆକେନ୍, ଗୋଏଥେ-ଇନଷ୍ଟିଟ୍ୟୁଟ୍ (ଯଦିଓ ସିଧାସଳଖ ଆକେନ୍ ରେ ନୁହେଁ, ନିକଟରେ ଅଛି), ଏବଂ ସ୍ପ୍ରାଚେନାକାଡେମି ଆକେନ୍ ପରି ଘରୋଇ ଭାଷା ବିଦ୍ୟାଳୟ ଅନ୍ତର୍ଭୁକ୍ତ। ସେମାନେ ବିଭିନ୍ନ ସ୍ତର ଏବଂ ପାଠ୍ୟକ୍ରମ ଫର୍ମାଟ୍ ପ୍ରଦାନ କରନ୍ତି।",
        faq_language_q2: "'ଇଣ୍ଟିଗ୍ରେସନ କୋର୍ସ' କ’ଣ ଏବଂ ମୁଁ ଏଥିରେ କିପରି ଯୋଗ ଦେଇପାରିବି?",
        faq_language_a2: "ଏକ ଇଣ୍ଟିଗ୍ରେସନ କୋର୍ସ (ଇଣ୍ଟିଗ୍ରେସନସ୍କୁର୍ସ) ହେଉଛି ନୂତନ ପ୍ରବାସୀମାନଙ୍କ ପାଇଁ ଏକ ଜର୍ମାନ ଭାଷା ଏବଂ ଅଭିମୁଖୀକରଣ କୋର୍ସ, ଯାହା ସରକାରଙ୍କ ଦ୍ୱାରା ଆଂଶିକ ଭାବରେ ପାଣ୍ଠି ଯୋଗାଇ ଦିଆଯାଏ। ଏହା B1 ଜର୍ମାନ ଭାଷା ସ୍ତର ପର୍ଯ୍ୟନ୍ତ କଭର୍ କରେ ଏବଂ ଜର୍ମାନ ସଂସ୍କୃତି, ଇତିହାସ ଏବଂ ଆଇନ ବ୍ୟବସ୍ଥା ଉପରେ ଏକ ମଡ୍ୟୁଲ୍ ଅନ୍ତର୍ଭୁକ୍ତ କରେ। ଆପଣ ବୁଣ୍ଡେସଆମଟ୍ ଫୁର୍ ମାଇଗ୍ରେସନ ଉଣ୍ଡ ଫ୍ଲୁଚ୍ଟଲିଙ୍ଗେ (BAMF) ମାଧ୍ୟମରେ କିମ୍ବା ସିଧାସଳଖ ଅନୁମୋଦିତ ଭାଷା ବିଦ୍ୟାଳୟଗୁଡ଼ିକ ସହିତ ଆବେଦନ କରିପାରିବେ।",
        faq_language_q3: "ପୂର୍ଣ୍ଣକାଳୀନ କାର୍ଯ୍ୟ କରୁଥିବାବେଳେ ମୁଁ କିପରି ଜର୍ମାନ ଶିଖିପାରିବି?",
        faq_language_a3: "ଅନେକ ଭାଷା ବିଦ୍ୟାଳୟ ବିଶେଷ ଭାବରେ କାର୍ଯ୍ୟରତ ବୃତ୍ତିଧାରୀମାନଙ୍କ ପାଇଁ ଡିଜାଇନ୍ ହୋଇଥିବା ସନ୍ଧ୍ୟା କିମ୍ବା ସପ୍ତାହାନ୍ତ ପାଠ୍ୟକ୍ରମ ପ୍ରଦାନ କରନ୍ତି। ଅନଲାଇନ୍ ପ୍ଲାଟଫର୍ମ (ଯଥା, ଡୁଓଲିଙ୍ଗୋ, ବାବେଲ୍, ଡଏଚେ ୱେଲେ), ଭାଷା ବିନିମୟ ସହଭାଗୀ, ଏବଂ ଜର୍ମାନ ସହକର୍ମୀ କିମ୍ବା ବନ୍ଧୁମାନଙ୍କ ସହିତ ଅଭ୍ୟାସ ମଧ୍ୟ ଅତ୍ୟନ୍ତ ପ୍ରଭାବଶାଳୀ ହୋଇପାରେ। କିଛି ନିଯୁକ୍ତିଦାତା ଆଭ୍ୟନ୍ତରୀଣ ଭାଷା ତାଲିମ ମଧ୍ୟ ପ୍ରଦାନ କରନ୍ତି।",
        faq_cat_residence_permit_title: "ରେସିଡେନ୍ସ ପରମିଟ୍",
        faq_residence_q1: "ପରିଚୟ ଏବଂ ଭିସା ଦଲିଲ ଭାବରେ ରେସିଡେନ୍ସ ପରମିଟ୍ କାହିଁକି ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ?",
        faq_residence_a1: "ଆପଣଙ୍କ ରେସିଡେନ୍ସ ପରମିଟ୍ (ଆଉଫେନଥାଲ୍ଟସଟିଟେଲ୍) ଜର୍ମାନୀରେ ଆପଣଙ୍କ ବୈଧ ବାସସ୍ଥାନର ଅଧିକାରିକ ପ୍ରମାଣ ଅଟେ। ଏହା ଜର୍ମାନୀ ମଧ୍ୟରେ ଆପଣଙ୍କ ପ୍ରାଥମିକ ପରିଚୟ ଦଲିଲ ଭାବରେ କାର୍ଯ୍ୟ କରେ ଏବଂ ଆପଣଙ୍କ ଅଧିକାର (ଯଥା, କାର୍ଯ୍ୟ, ଅଧ୍ୟୟନ) ନିର୍ଦ୍ଧାରଣ କରେ। ଏହା ଜର୍ମାନୀ ଏବଂ ଅନ୍ୟାନ୍ୟ ସ୍କେଞ୍ଜେନ୍ ଦେଶକୁ ପୁନଃପ୍ରବେଶ ପାଇଁ ଆପଣଙ୍କ ଭିସା ଭାବରେ ମଧ୍ୟ କାର୍ଯ୍ୟ କରେ।",
        faq_residence_q2: "ମୁଁ ପ୍ରଥମ ଥର ପାଇଁ ରେସିଡେନ୍ସ ପରମିଟ୍ ପାଇଁ କିପରି ଆବେଦନ କରିବି ଏବଂ ଏହାକୁ କିପରି ବୃଦ୍ଧି କରିବି?",
        faq_residence_a2: "ପ୍ରାରମ୍ଭିକ ଆବେଦନ ସାଧାରଣତଃ ଆକେନ୍ ରେ ଆଉସ୍ଲାଣ୍ଡେରବେହୋରଡେ (ବିଦେଶୀ କାର୍ଯ୍ୟାଳୟ) ରେ ଆପଣଙ୍କ ଆନମେଲଡୁଙ୍ଗ୍ ସମାପ୍ତ କରିବା ପରେ କରାଯାଏ। ଆପଣଙ୍କୁ ଆପଣଙ୍କ ପାସପୋର୍ଟ, ଭିସା, ନିଯୁକ୍ତି ଚୁକ୍ତି, ସ୍ୱାସ୍ଥ୍ୟ ବୀମାର ପ୍ରମାଣ ଏବଂ ଅନ୍ୟାନ୍ୟ ଦଲିଲ ଆବଶ୍ୟକ। ବୃଦ୍ଧି ପାଇଁ, ଆପଣଙ୍କ ବର୍ତ୍ତମାନର ପରମିଟ୍ ର ମିଆଦ ଶେଷ ହେବା ପୂର୍ବରୁ ଆବେଦନ କରନ୍ତୁ, ଅଦ୍ୟତନ ଦଲିଲ ପ୍ରଦାନ କରନ୍ତୁ। ନିଯୁକ୍ତି ସାଧାରଣତଃ ବାଧ୍ୟତାମୂଳକ ଅଟେ।",
        faq_residence_q3: "'ସେଟେଲମେଣ୍ଟ ପରମିଟ୍' (ସ୍ଥାୟୀ ବାସସ୍ଥାନ) ପାଇଁ ମୁଁ କିପରି ଆବେଦନ କରିବି?",
        faq_residence_a3: "ଏକ ସେଟେଲମେଣ୍ଟ ପରମିଟ୍ (ନିଡେରଲାସୁଙ୍ଗସେରଲାଉବନିସ୍) ଆପଣଙ୍କୁ ସ୍ଥାୟୀ ବାସସ୍ଥାନ ପ୍ରଦାନ କରେ। ଯୋଗ୍ୟତା ପାଇଁ ସାଧାରଣତଃ 5 ବର୍ଷର ବୈଧ ବାସସ୍ଥାନ (ବ୍ଲୁ କାର୍ଡ ଧାରକମାନଙ୍କ ପାଇଁ କମ୍), ପର୍ଯ୍ୟାପ୍ତ ଜର୍ମାନ ଭାଷା ଦକ୍ଷତା (B1), ସୁରକ୍ଷିତ ଜୀବିକା, ପର୍ଯ୍ୟାପ୍ତ ବାସସ୍ଥାନ, ଏବଂ ପେନସନ୍ ଯୋଜନାରେ ଯୋଗଦାନ ଆବଶ୍ୟକ। ଆଉସ୍ଲାଣ୍ଡେରବେହୋରଡେ ରେ ଆବେଦନ କରନ୍ତୁ।",
        faq_cat_house_hunting_title: "ଘର ଖୋଜିବା",
        faq_house_hunting_q1: "ମୁଁ ଆକେନ୍ ରେ ଏକ ଦୀର୍ଘକାଳୀନ ଆପାର୍ଟମେଣ୍ଟ କିପରି ଖୋଜିବି?",
        faq_house_hunting_a1: "ଆପାର୍ଟମେଣ୍ଟ ଖୋଜିବା ପାଇଁ ଲୋକପ୍ରିୟ ପ୍ଲାଟଫର୍ମଗୁଡ଼ିକରେ ଇମୋବିଲିଏନସ୍କାଉଟ୍24, ଇମୋୱେଲ୍ଟ, ଏବଂ ଇବେ କ୍ଲାଇନେନଜାଇଗେନ୍ ଅନ୍ତର୍ଭୁକ୍ତ। ନେଟୱାର୍କିଂ ଏବଂ ସ୍ଥାନୀୟ ରିଅଲ୍ ଇଷ୍ଟେଟ୍ ଏଜେଣ୍ଟ୍ (ମାକଲେର୍) ମଧ୍ୟ ସହାୟକ ହୋଇପାରନ୍ତି। ବିଶେଷକରି ପରିବାର-ଅନୁକୂଳ ଆପାର୍ଟମେଣ୍ଟଗୁଡ଼ିକ ପାଇଁ ଅଧିକ ଚାହିଦା ଏବଂ ପ୍ରତିଯୋଗିତା ପାଇଁ ପ୍ରସ୍ତୁତ ରୁହନ୍ତୁ।",
        faq_house_hunting_q2: "ଭଡା ଚୁକ୍ତି (ଭେର୍ଟ୍ରାଗ୍) ଏବଂ ସମାପ୍ତି (କୁଣ୍ଡିଗୁଙ୍ଗ୍) ବିଷୟରେ ମୁଁ କ’ଣ ଜାଣିବା ଉଚିତ୍?",
        faq_house_hunting_a2: "ଜର୍ମାନ ଭଡା ଚୁକ୍ତି (ମିଏଟ୍ଭେର୍ଟ୍ରାଗ୍) ବ୍ୟାପକ ଅଟେ। ଭଡା ବୃଦ୍ଧି, ନବୀକରଣ କର୍ତ୍ତବ୍ୟ, ଏବଂ ସମାପ୍ତି ପାଇଁ ନୋଟିସ ଅବଧି (ସାଧାରଣତଃ ଭଡାଟିଆମାନଙ୍କ ପାଇଁ 3 ମାସ) ସମ୍ବନ୍ଧୀୟ ଧାରାଗୁଡ଼ିକ ଉପରେ ଧ୍ୟାନ ଦିଅନ୍ତୁ। ସର୍ବଦା ଚୁକ୍ତିକୁ ଯତ୍ନର ସହିତ ପଢନ୍ତୁ ଏବଂ କୌଣସି ସନ୍ଦେହକୁ ସ୍ପଷ୍ଟ କରନ୍ତୁ। ଆବଶ୍ୟକ ହେଲେ ମିଏଟେରଭେରାଇନ (ଭଡାଟିଆମାନଙ୍କ ସଂଘ) ରୁ ପରାମର୍ଶ ନିଅନ୍ତୁ।",
        faq_house_hunting_q3: "ଏକ ସମ୍ପତ୍ତି କିଣିବାରେ (ନୋଟାର୍, ବାଉଆମଟ୍, ଫିନାନ୍ସଆମଟ୍) କ’ଣ ଅନ୍ତର୍ଭୁକ୍ତ?",
        faq_house_hunting_a3: "ଜର୍ମାନୀରେ ସମ୍ପତ୍ତି କିଣିବାରେ ଜଣେ ନୋଟାର୍ (ସରକାରୀ ନୋଟାରୀ) ଅନ୍ତର୍ଭୁକ୍ତ, ଯିଏ କ୍ରୟ ଚୁକ୍ତିର ଡ୍ରାଫ୍ଟ ପ୍ରସ୍ତୁତ କରନ୍ତି ଏବଂ ପ୍ରମାଣିତ କରନ୍ତି। ବାଉଆମଟ୍ (ନିର୍ମାଣ ପ୍ରାଧିକରଣ) ନିର୍ମାଣ ଅନୁମତି ଏବଂ ନିୟମଗୁଡ଼ିକୁ ପରିଚାଳନା କରେ। ଫିନାନ୍ସଆମଟ୍ (ଟ୍ୟାକ୍ସ କାର୍ଯ୍ୟାଳୟ) ସମ୍ପତ୍ତି ହସ୍ତାନ୍ତର ଟ୍ୟାକ୍ସ (ଗ୍ରୁଣ୍ଡେରୱେର୍ବଷ୍ଟୁଏର୍) ପାଇଁ ଜଡିତ। ଜଟିଳତା ହେତୁ ଆଇନଗତ ଏବଂ ଆର୍ଥିକ ପରାମର୍ଶ ଅତ୍ୟନ୍ତ ସୁପାରିଶ କରାଯାଏ।",
        faq_cat_social_circle_title: "ସାମାଜିକ ବୃତ୍ତ",
        faq_social_circle_q1: "ମୁଁ ଆକେନ୍ ରେ ଏକ ସାମାଜିକ ବୃତ୍ତ କିପରି ଗଢିବି ଏବଂ ଅନ୍ୟ ଭାରତୀୟମାନଙ୍କୁ କିପରି ଭେଟିବି?",
        faq_social_circle_a1: "AIFA e.V. ଘଟଣାବଳୀରେ ଯୋଗଦାନ ଏକ ମହାନ ଆରମ୍ଭ! ଏହା ବ୍ୟତୀତ, ସୋସିଆଲ୍ ମିଡିଆ (ଫେସବୁକ୍, ହ୍ୱାଟ୍ସଆପ୍) ରେ ସ୍ଥାନୀୟ ଭାରତୀୟ ସମ୍ପ୍ରଦାୟ ଗୋଷ୍ଠୀଗୁଡ଼ିକୁ ଅନୁସନ୍ଧାନ କରନ୍ତୁ, ସାଂସ୍କୃତିକ ପର୍ବରେ ଯୋଗ ଦିଅନ୍ତୁ, ଏବଂ ବିଶ୍ୱବିଦ୍ୟାଳୟ କିମ୍ବା କମ୍ପାନୀର ଆନ୍ତର୍ଜାତୀୟ ଗୋଷ୍ଠୀଗୁଡ଼ିକରେ ଅଂଶଗ୍ରହଣ କରନ୍ତୁ। ଭାଷା ବିନିମୟ ଭେଟଘାଟ ମଧ୍ୟ ବିଭିନ୍ନ ଲୋକଙ୍କୁ ଭେଟିବା ପାଇଁ ଭଲ।",
        faq_social_circle_q2: "ଆକେନ୍ ରେ କୌଣସି ଭାରତୀୟ ସଂଘ (ଭେରାଇନ୍) କିମ୍ବା ସାଂସ୍କୃତିକ ଗୋଷ୍ଠୀ ଅଛି କି?",
        faq_social_circle_a2: "ହଁ, AIFA e.V. ବ୍ୟତୀତ, ଅନ୍ୟ ଛୋଟ ଭାରତୀୟ ସାଂସ୍କୃତିକ ଗୋଷ୍ଠୀ କିମ୍ବା ଛାତ୍ର ସଂଘ (ବିଶେଷକରି RWTH ଆକେନ୍ ବିଶ୍ୱବିଦ୍ୟାଳୟ ନିକଟରେ) ଥାଇପାରେ। \"ଇଣ୍ଡିସେର୍ ଭେରାଇନ୍ ଆକେନ୍\" ପାଇଁ ଅନଲାଇନରେ ଖୋଜିବା କିମ୍ବା ଭାରତୀୟ ଖାଦ୍ୟ ଦୋକାନରେ ନୋଟିସ ବୋର୍ଡ ଯାଞ୍ଚ କରିବା ସୂଚନା ପ୍ରଦାନ କରିପାରେ।",
        faq_social_circle_q3: "ମୁଁ ଆକେନ୍ ରେ କିପରି ହବି ଏବଂ କ୍ରୀଡା ଅନୁସରଣ କରିପାରିବି?",
        faq_social_circle_a3: "ଆକେନ୍ ରେ ଫୁଟବଲ୍, ଟେନିସ୍, ସନ୍ତରଣ, ଏବଂ ହାଇକିଙ୍ଗ୍ ପରି ବିଭିନ୍ନ କାର୍ଯ୍ୟକଳାପ ପାଇଁ ଅନେକ କ୍ରୀଡା କ୍ଲବ୍ (ସ୍ପୋର୍ଟସ୍ଭେରାଇନ୍) ଅଛି। ହୋଚଶୁଲସ୍ପୋର୍ଟ (ବିଶ୍ୱବିଦ୍ୟାଳୟ କ୍ରୀଡା) ଛାତ୍ର ଏବଂ କର୍ମଚାରୀମାନଙ୍କ ପାଇଁ ଅନେକ ପାଠ୍ୟକ୍ରମ ପ୍ରଦାନ କରେ। ହବି ପାଇଁ, ସ୍ଥାନୀୟ ସମ୍ପ୍ରଦାୟ କେନ୍ଦ୍ର (ଭୋଲ୍କଶୋଚୁଲେ), ଘରୋଇ କ୍ଲବ୍, କିମ୍ବା Meetup.com ପରି ଅନଲାଇନ୍ ପ୍ଲାଟଫର୍ମରେ ଆଗ୍ରହ-ଆଧାରିତ ଗୋଷ୍ଠୀଗୁଡ଼ିକୁ ଯାଞ୍ଚ କରନ୍ତୁ।",
        faq_cat_citizenship_title: "ନାଗରିକତା",
        faq_citizenship_q1: "ଜର୍ମାନ ନାଗରିକତା ହାସଲ କରିବାର ପ୍ରକ୍ରିୟା କ’ଣ?",
        faq_citizenship_a1: "ସ୍ୱାଭାବିକକରଣ (ଆଇନବୁର୍ଗେରୁଙ୍ଗ୍) ପାଇଁ ମାନକ ପ୍ରକ୍ରିୟାରେ 8 ବର୍ଷର ବୈଧ ବାସସ୍ଥାନ (କିଛି କ୍ଷେତ୍ରରେ କମ୍, ଯଥା, ଏକୀକରଣ କୋର୍ସ ସହିତ 7 ବର୍ଷ, ଜର୍ମାନ ନାଗରିକମାନଙ୍କ ଜୀବନସାଥୀ ପାଇଁ 6 ବର୍ଷ), ପର୍ଯ୍ୟାପ୍ତ ଜର୍ମାନ ଭାଷା ଦକ୍ଷତା (B1/B2), ଏକ ସ୍ୱାଭାବିକକରଣ ପରୀକ୍ଷା ଉତ୍ତୀର୍ଣ୍ଣ କରିବା, ଏବଂ ସାଧାରଣତଃ ଆପଣଙ୍କ ପୂର୍ବ ନାଗରିକତା ତ୍ୟାଗ କରିବା ଅନ୍ତର୍ଭୁକ୍ତ (ଭାରତ ବୟସ୍କମାନଙ୍କ ପାଇଁ ଦ୍ୱୈତ ନାଗରିକତାକୁ ଅନୁମତି ଦିଏ ନାହିଁ)।",
        faq_citizenship_q2: "ଭାରତୀୟ ପାସପୋର୍ଟ ସମର୍ପଣ କରିବା ଏବଂ ଏକ OCI କାର୍ଡ ପାଇବାର ପ୍ରକ୍ରିୟା କ’ଣ?",
        faq_citizenship_a2: "ଜର୍ମାନ ନାଗରିକତା ହାସଲ କରିବା ପରେ, ଆପଣଙ୍କୁ ଆପଣଙ୍କ ଭାରତୀୟ ପାସପୋର୍ଟ ଭାରତୀୟ ଦୂତାବାସ/ବାଣିଜ୍ୟ ଦୂତାବାସରେ ସମର୍ପଣ କରିବାକୁ ପଡିବ। ତା’ପରେ ଆପଣ ଏକ \"ସମର୍ପଣ ପ୍ରମାଣପତ୍ର\" ପାଇବେ। ପରବର୍ତ୍ତୀ ସମୟରେ, ଆପଣ ଓଭରସିଜ୍ ସିଟିଜେନ୍ ଅଫ୍ ଇଣ୍ଡିଆ (OCI) କାର୍ଡ ପାଇଁ ଆବେଦନ କରିପାରିବେ, ଯାହା ଭାରତକୁ ଜୀବନବ୍ୟାପୀ ଭିସା-ମୁକ୍ତ ଯାତ୍ରା ଏବଂ ଅନ୍ୟାନ୍ୟ ସୁବିଧା ପ୍ରଦାନ କରେ। ଆବେଦନ ପ୍ରକ୍ରିୟା ଭାରତୀୟ ସରକାରୀ ପୋର୍ଟାଲ୍ ମାଧ୍ୟମରେ ଅନଲାଇନ୍ ଅଟେ।",        
        contact_title: "ଆମ ସହିତ ଯୋଗାଯୋଗ କରନ୍ତୁ",
        contact_intro: "ପ୍ରଶ୍ନ ଅଛି କିମ୍ବା ଯୋଗାଯୋଗ କରିବାକୁ ଚାହୁଁଛନ୍ତି? ତଳେ ଥିବା ଫର୍ମ ପୂରଣ କରନ୍ତୁ ଏବଂ ଆମେ ଶୀଘ୍ର ଆପଣଙ୍କ ସହିତ ଯୋଗାଯୋଗ କରିବୁ।",
        your_name_label: "ଆପଣଙ୍କ ନାମ",
        your_name_placeholder: "ଜନ୍ ଡୋ",
        your_email_label: "ଆପଣଙ୍କ ଇମେଲ",
        your_email_placeholder: "john.doe@example.com",
        subject_label: "ବିଷୟ",
        subject_placeholder: "ସଦସ୍ୟତା ବିଷୟରେ ଅନୁସନ୍ଧାନ",
        message_label: "ସନ୍ଦେଶ",
        message_placeholder: "ଆପଣଙ୍କ ସନ୍ଦେଶ ଏଠାରେ ଲେଖନ୍ତୁ...",
        send_message_button: "ସନ୍ଦେଶ ପଠାନ୍ତୁ",
        contact_success_message: "ଆପଣଙ୍କ ସନ୍ଦେଶ ପାଇଁ ଧନ୍ୟବାଦ! ଆମେ ଶୀଘ୍ର ଆପଣଙ୍କ ସହିତ ଯୋଗାଯୋଗ କରିବୁ।",
        site_title_event_registration: "ଆକେନ୍ ରେ ଭାରତୀୟ ପରିବାର ସଂଘ - ଘଟଣା ପଞ୍ଜୀକରଣ",
        event_reg_title: "ଘଟଣା ପଞ୍ଜୀକରଣ",
        event_reg_intro: "ଆମର ଆଗାମୀ ଘଟଣାବଳୀ ପାଇଁ ପଞ୍ଜୀକରଣ କରିବାକୁ ଦୟାକରି ନିମ୍ନଲିଖିତ ଫର୍ମ ପୂରଣ କରନ୍ତୁ।",
        event_reg_select_event_label: "ଘଟଣା ବାଛନ୍ତୁ",
        event_reg_select_event_placeholder: "ଏକ ଘଟଣା ବାଛନ୍ତୁ",
        event_reg_summer_picnic_option: "ଗ୍ରୀଷ୍ମକାଳୀନ ପାରିବାରିକ ପିକ୍ନିକ୍ (ଜୁଲାଇ 20, 2024)",
        event_reg_dandiya_option: "ଦାଣ୍ଡିଆ ପାଳନ 2025 (ଅକ୍ଟୋବର 2, 2025)",
        event_reg_num_attendees_label: "ଉପସ୍ଥିତ ସଂଖ୍ୟା",
        event_reg_dietary_notes_label: "ଆହାର ପ୍ରତିବନ୍ଧକ / ବିଶେଷ ଟିପ୍ପଣୀ (ବୈକଳ୍ପିକ)",
        event_reg_dietary_notes_placeholder: "ଉଦାହରଣ ସ୍ୱରୂପ, ଶାକାହାରୀ, ଗ୍ଲୁଟେନ-ମୁକ୍ତ, ହ୍ୱିଲଚେୟାର ପ୍ରବେଶ ଆବଶ୍ୟକ",
        event_reg_submit_button: "ଘଟଣା ପାଇଁ ପଞ୍ଜୀକରଣ କରନ୍ତୁ",
        event_reg_success_message: "ଘଟଣା ପାଇଁ ପଞ୍ଜୀକରଣ କରିଥିବାରୁ ଧନ୍ୟବାଦ! ଆମେ ଆପଣଙ୍କୁ ଦେଖିବାକୁ ଅପେକ୍ଷା କରିଛୁ।",
        event_reg_error_message: "ଘଟଣା ପାଇଁ ପଞ୍ଜୀକରଣ କରିବାରେ ତ୍ରୁଟି। ଦୟାକରି ପୁନର୍ବାର ଚେଷ୍ଟା କରନ୍ତୁ।"        ,
        data_protection_title: "ଡାଟା ସୁରକ୍ଷା ନୀତି",
        data_protection_p1: "ସଂଘ ନିଜ ସଦସ୍ୟମାନଙ୍କର ବ୍ୟକ୍ତିଗତ ଡାଟା ସଂଗ୍ରହ, ପ୍ରକ୍ରିୟାକରଣ ଏବଂ ବ୍ୟବହାର କରେ, ଯାହା ସଂଘର ସମ୍ବିଧାନ ଅନୁଯାୟୀ ଅନୁମତିପ୍ରାପ୍ତ ଉଦ୍ଦେଶ୍ୟ ଏବଂ କାର୍ଯ୍ୟଗୁଡ଼ିକୁ ପୂରଣ କରିବା ପାଇଁ।",
        data_protection_p2: "ସଂଘ ନିଜ ପାଇଁ ଏବଂ/କିମ୍ବା ନିଜ ସଦସ୍ୟମାନଙ୍କ ପାଇଁ ଲାଭ ପାଇବାକୁ ବୀମା ପଲିସିଗୁଡ଼ିକର ବ୍ୟବସ୍ଥା କରିପାରେ। ବୀମା ପଲିସିଗୁଡ଼ିକ ପାଇଁ ଚୁକ୍ତିଗୁଡ଼ିକୁ କାର୍ଯ୍ୟକାରୀ କରିବା କିମ୍ବା ସମାପ୍ତ କରିବା ପାଇଁ, ସଂଘ ନିଜ ସଦସ୍ୟମାନଙ୍କର ବ୍ୟକ୍ତିଗତ ଡାଟା ଆବଶ୍ୟକୀୟ ପରିମାଣରେ ଦାୟିତ୍ୱପ୍ରାପ୍ତ ବୀମା କମ୍ପାନୀକୁ ପ୍ରସାରଣ କରେ।",
        data_protection_p3: "ସାଧାରଣ କିମ୍ବା ବ୍ୟକ୍ତିଗତ ଘଟଣାବଳୀ ଏବଂ ସମ୍ବିଧାନରେ ଉଲ୍ଲେଖିତ ଅନ୍ୟାନ୍ୟ କାର୍ଯ୍ୟକଳାପ ସହିତ, ସଂଘ ନିଜ ହୋମପେଜରେ ନିଜ ସଦସ୍ୟମାନଙ୍କର ନାମ ଏବଂ ଫଟୋ ପ୍ରକାଶ କରେ ଏବଂ ପ୍ରକାଶନ ପାଇଁ ପ୍ରିଣ୍ଟ ଏବଂ ଟେଲିମିଡିଆ ସହିତ ଇଲେକ୍ଟ୍ରୋନିକ୍ ମିଡିଆକୁ ନାମ ଏବଂ ଫଟୋ ପଠାଏ। ଜଣେ ସଦସ୍ୟ ନିଜର ବ୍ୟକ୍ତିଗତ ଫଟୋର ପ୍ରକାଶନ ଉପରେ ଯେକୌଣସି ସମୟରେ ବୋର୍ଡକୁ ଆପତ୍ତି କରିପାରିବେ। ଆପତ୍ତି ଗ୍ରହଣ କରାଯିବା ପରେ, ପ୍ରକାଶନ/ପ୍ରସାରଣ ବନ୍ଦ ହୋଇଯିବ ଏବଂ ସଂଘ ନିଜ ହୋମପେଜରୁ ବିଦ୍ୟମାନ ଫଟୋଗୁଡ଼ିକୁ ଅପସାରଣ କରିବ।",
        data_protection_p4: "ନିଜ ସଦସ୍ୟତା ଏବଂ ଏହି ସମ୍ବିଧାନର ସମ୍ବନ୍ଧିତ ସ୍ୱୀକୃତି ମାଧ୍ୟମରେ, ସଦସ୍ୟମାନେ ଉପରୋକ୍ତ ପରିମାଣ ଏବଂ ପରିସରରେ ନିଜର ବ୍ୟକ୍ତିଗତ ଡାଟା ସଂଗ୍ରହ, ପ୍ରକ୍ରିୟାକରଣ ଏବଂ ବ୍ୟବହାର ପାଇଁ ସହମତ ଅଟନ୍ତି। ସଂଘକୁ କେବଳ ତାହାର ବୈଧାନିକ କାର୍ଯ୍ୟ ଏବଂ ଉଦ୍ଦେଶ୍ୟଗୁଡ଼ିକୁ ପୂରଣ କରିବା ବ୍ୟତୀତ ଅନ୍ୟ ଉଦ୍ଦେଶ୍ୟରେ ଡାଟା ବ୍ୟବହାର କରିବାକୁ ଅନୁମତି ଦିଆଯାଏ ଯଦି ଏହା ଆଇନଗତ ଭାବରେ ବାଧ୍ୟତାମୂଳକ। ଡାଟା ବିକ୍ରି କରାଯାଇପାରିବ ନାହିଁ।",
        data_protection_p5: "ପ୍ରତ୍ୟେକ ସଦସ୍ୟ ସଦସ୍ୟତା ତାଲିକାର ଅଂଶ ଭାବରେ ସେମାନଙ୍କୁ ଉପଲବ୍ଧ କରାଯାଇଥିବା ଡାଟାକୁ ଗୋପନୀୟ ରଖିବାକୁ ଦାୟିତ୍ୱ ଗ୍ରହଣ କରନ୍ତି। ସଂଘର ସମସ୍ତ ଆର୍ଥିକ ବିଷୟରେ ମଧ୍ୟ ଏହା ଲାଗୁ ହୁଏ।",
        data_protection_p6: "ଆମେ ସଦସ୍ୟମାନଙ୍କର ବ୍ୟକ୍ତିଗତ ଡାଟାକୁ କୌଣସି ବ୍ୟବସାୟିକ କିମ୍ବା ଅଣ-ବ୍ୟବସାୟିକ ଉଦ୍ଦେଶ୍ୟରେ ତୃତୀୟ ପକ୍ଷଙ୍କୁ ପ୍ରକାଶ ନ କରିବାକୁ ପ୍ରତିବଦ୍ଧ। ଡାଟା ବ୍ୟବହାର ଉପରେ ଅଧିକ ବିବରଣୀ ପାଇଁ, ଦୟାକରି ଆମର ସାଧାରଣ ଡାଟା ସୁରକ୍ଷା ନୀତି ଏଠାରେ ଦେଖନ୍ତୁ (<a href=\"https://www.aifaev.de\" class=\"text-blue-600 hover:underline\" target=\"_blank\">www.aifaev.de</a>)"        
    },
    gu: { // Gujarati
        site_title_home: "આકેનમાં ભારતીય પરિવારોનું સંગઠન - હોમ",
        site_title_about: "આકેનમાં ભારતીય પરિવારોનું સંગઠન - અમારા વિશે",
        site_title_events: "આકેનમાં ભારતીય પરિવારોનું સંગઠન - ઇવેન્ટ્સ",
        site_title_membership: "આકેનમાં ભારતીય પરિવારોનું સંગઠન - સભ્યપદ",
        site_title_faq: "આકેન માં ભારતીય પરિવારોનું સંગઠન - વારંવાર પૂછાતા પ્રશ્નો", // Ensure this is updated
        site_title_contact: "આકેનમાં ભારતીય પરિવારોનું સંગઠન - સંપર્ક કરો",
        site_title_data_protection: "આકેન માં ભારતીય પરિવારોનું સંગઠન - ડેટા સુરક્ષા નીતિ",        
        nav_home: "હોમ",
        nav_about: "અમારા વિશે",
        nav_events: "ઇવેન્ટ્સ",
        nav_membership: "સભ્યપદ",
        nav_faq: "વારંવાર પૂછાતા પ્રશ્નો",
        nav_contact: "સંપર્ક કરો",
        nav_event_registration: "ઇવેન્ટ નોંધણી", // NEW NAV KEY        
        home_main_title: "આકેનમાં ભારતીય પરિવારોનું સંગઠન",
        home_tagline: "આકેનમાં ભારતીય પરિવારોને જોડવું, સમુદાયને પ્રોત્સાહન આપવું અને આપણી સમૃદ્ધ સંસ્કૃતિની ઉજવણી કરવી.",
        home_explore_events: "ઇવેન્ટ્સનું અન્વેષણ કરો",
        footer_copyright: "&copy; 2025 આકેન માં ભારતીય પરિવારોનું સંગઠન. e.V. નોંધણી નંબર VR 6590(Amtsgericht Aachen). સર્વહક સ્વાધીન.",
        footer_data_protection_policy: "ડેટા સુરક્ષા નીતિ",
        footer_terms: "સેવા શરતો",
        lang_en: "English",
        lang_de: "Deutsch",
        lang_hi: "हिन्दी",
        lang_mr: "मराठी",
        lang_te: "తెలుగు",
        lang_ta: "தமிழ்",
        lang_bn: "বাংলা",
        lang_pa: "ਪੰਜਾਬੀ",
        lang_kn: "ಕನ್ನಡ",
        lang_ml: "മലയാളം",
        lang_or: "ଓଡ଼ିଆ",
        lang_gu: "ગુજરાતી",
        lang_sa: "संस्कृतम्",
        lang_mai: "मैथिली",
        about_title: "અમારા સંગઠન વિશે",
        about_para1: "આકેનમાં ભારતીય પરિવારોનું સંગઠન (AIFA e.V.) એ જર્મનીના આકેનમાં રહેતા ભારતીય પરિવારોને એકસાથે લાવવા માટે સમર્પિત એક બિન-લાભકારી સંસ્થા છે. સાંસ્કૃતિક વારસાની ઉજવણી કરવામાં આવે, પરંપરાઓનું જતન થાય અને નવી મિત્રતા સ્થાપિત થાય તેવા જીવંત અને સહાયક સમુદાયનું નિર્માણ કરવાનું અમારું ધ્યેય છે.",
        about_para2: "અમે વર્ષભર વિવિધ કાર્યક્રમોનું આયોજન કરીએ છીએ, જેમાં સાંસ્કૃતિક ઉત્સવો અને સામાજિક મેળાવડાઓથી લઈને શૈક્ષણિક વર્કશોપ અને સામુદાયિક સેવા પહેલનો સમાવેશ થાય છે. અમારો ઉદ્દેશ્ય ભારતીય પરિવારોને ઘરથી દૂર ઘર પૂરું પાડવાનો, તેમને સ્થાનિક સમુદાયમાં ભળી જવા અને તેમના મૂળ સાથે જોડાયેલા રહેવામાં મદદ કરવાનો છે.",
        about_para3: "અમારા સમુદાયની હૂંફનો અનુભવ કરવા, રોમાંચક કાર્યક્રમોમાં ભાગ લેવા અને આકેનમાં મજબૂત અને સુસંગત ભારતીય ડાયસ્પોરા બનાવવામાં યોગદાન આપવા અમારી સાથે જોડાઓ.",
        events_title: "અમારા ઇવેન્ટ્સ",
        event_diwali_title: "દિવાળીની ઉજવણી 2023",
        event_diwali_date: "ઑક્ટોબર 28, 2023",
        event_diwali_desc: "સાંસ્કૃતિક પ્રદર્શનો, સ્વાદિષ્ટ ભોજન અને ફટાકડા સાથે દીવાળીના તહેવારની ભવ્ય ઉજવણી. પરિવારોએ સાથે મળીને એક યાદગાર સાંજનો આનંદ માણ્યો.",
        event_diwali_status: "ભૂતકાળનો ઇવેન્ટ",
        event_summer_title: "ઉનાળુ કૌટુંબિક પિકનિક",
        event_summer_date: "જુલાઈ 20, 2024",
        event_summer_desc: "રમતો, ભોજન અને આઉટડોર પ્રવૃત્તિઓ સાથે વેસ્ટપાર્કમાં આનંદથી ભરપૂર કૌટુંબિક પિકનિક માટે અમારી સાથે જોડાઓ. તમારી પિકનિક બાસ્કેટ ભૂલશો નહીં!",
        event_summer_status: "વર્તમાન ઇવેન્ટ",
        event_dandiya_title: "દાંડિયા ઉજવણી 2025",
        event_dandiya_date: "ઑક્ટોબર 2, 2025",
        event_dandiya_desc: "ઘૂમવા અને નૃત્ય કરવા તૈયાર થાઓ! પરંપરાગત સંગીત, રંગીન પોશાક અને ઊર્જાસભર નૃત્યની ચાલ સાથે ઉત્સવની ભાવનાની ઉજવણી કરતા જીવંત દાંડિયા અને ગરબા રાત્રિ માટે અમારી સાથે જોડાઓ. સ્થળ અને પ્રવૃત્તિઓ વિશે વધુ વિગતો ટૂંક સમયમાં જાહેર કરવામાં આવશે.",
        event_dandiya_status: "ભવિષ્યનો ઇવેન્ટ",
        events_view_all: "બધા ઇવેન્ટ્સ જુઓ",
        events_register_now: "ઇવેન્ટ માટે નોંધણી કરો", // NEW BUTTON TEXT        
        membership_title: "સભ્ય બનો",
        membership_intro: "આકેનમાં ભારતીય પરિવારોનું સંગઠન (AIFA e.V.) માં જોડાઓ અને અમારા વિકસતા સમુદાયનો ભાગ બનો! તમારી સભ્યપદ અમને આકર્ષક કાર્યક્રમોનું આયોજન કરવામાં અને આકેનમાં ભારતીય પરિવારોને ટેકો આપવામાં મદદ કરે છે.",
        membership_individual_title: "વ્યક્તિગત સભ્યપદ",
        membership_individual_price: "€30",
        membership_individual_per_year: "/ વર્ષ",
        membership_individual_desc: "જોડાવા માંગતા એકલ વ્યક્તિઓ માટે યોગ્ય.",
        membership_family_title: "કૌટુંબિક સભ્યપદ",
        membership_family_price: "€50",
        membership_family_per_year: "/ વર્ષ",
        membership_family_desc: "એક જ ઘરના તમામ સભ્યોને આવરી લે છે.",
        membership_form_title: "સભ્યપદ અરજી ફોર્મ",
        membership_type_label: "સભ્યપદનો પ્રકાર",
        membership_type_select_option: "સભ્યપદનો પ્રકાર પસંદ કરો",
        membership_type_individual_option: "વ્યક્તિગત સભ્યપદ (€30/વર્ષ)",
        membership_type_family_option: "કૌટુંબિક સભ્યપદ (€50/વર્ષ)",
        first_name_label: "પ્રથમ નામ",
        first_name_placeholder: "જ્હોન",
        last_name_label: "છેલ્લું નામ",
        last_name_placeholder: "ડો",
        num_family_members_label: "પરિવારના સભ્યોની સંખ્યા (તમારા સહિત)",
        num_family_members_placeholder: "દા.ત. 4",
        volunteer_checkbox: "હું AIFA e.V. ઇવેન્ટ્સ માટે સ્વયંસેવક તરીકે ઉપલબ્ધ છું.",
        apply_membership_button: "સભ્યપદ માટે અરજી કરો",
        membership_success_message: "તમારી સભ્યપદ અરજી માટે આભાર! અમે ટૂંક સમયમાં તમારો સંપર્ક કરીશું.",
        faq_title: "વારંવાર પૂછાતા પ્રશ્નો",
        faq_q1: "આકેનમાં ભારતીય પરિવારોનું સંગઠન (AIFA e.V.) શું છે?",
        faq_a1: "AIFA e.V. એ જર્મનીના આકેનમાં રહેતા ભારતીય પરિવારો વચ્ચે એક મજબૂત સમુદાયને પ્રોત્સાહન આપવા માટે સમર્પિત એક બિન-લાભકારી સંસ્થા છે. અમે સાંસ્કૃતિક કાર્યક્રમો, સામાજિક મેળાવડાઓનું આયોજન કરીએ છીએ અને નેટવર્કિંગ અને સમર્થન માટે એક પ્લેટફોર્મ પ્રદાન કરીએ છીએ.",
        faq_q2: "હું કેવી રીતે સભ્ય બની શકું?",
        faq_a2: "સભ્યપદની વિગતો અને અરજી ફોર્મ ટૂંક સમયમાં અમારી વેબસાઇટ પર ઉપલબ્ધ થશે. કૃપા કરીને ફરીથી તપાસો અથવા વધુ માહિતી માટે સંપર્ક ફોર્મ દ્વારા અમારો સંપર્ક કરો.",
        faq_q3: "શું ઇવેન્ટ્સ બિન-સભ્યો માટે ખુલ્લી છે?",
        faq_a3: "સાંસ્કૃતિક આદાનપ્રદાન અને સમુદાય નિર્માણને પ્રોત્સાહન આપવા માટે અમારા ઘણા ઇવેન્ટ્સ બિન-સભ્યો સહિત દરેક માટે ખુલ્લા છે. કેટલાક વિશિષ્ટ ઇવેન્ટ્સ માટે સભ્યપદની જરૂર પડી શકે છે. દરેક ઇવેન્ટ માટે વિગતો સ્પષ્ટ કરવામાં આવશે.",
        faq_q4: "હું કેવી રીતે સ્વયંસેવક બની શકું અથવા યોગદાન આપી શકું?",
        faq_a4: "અમે સ્વયંસેવકોનું સ્વાગત કરીએ છીએ! જો તમે તમારો સમય અથવા કુશળતાનું યોગદાન આપવા માંગતા હો, તો કૃપા કરીને સંપર્ક ફોર્મ દ્વારા અમારો સંપર્ક કરો, અને અમે તમને તકો સાથે સંપર્ક કરીશું.",
        faq_portal_title: "માહિતી પોર્ટલ: જર્મનીમાં ભારતીય પરિવારો માટે વારંવાર પૂછાતા પ્રશ્નો",
        faq_search_placeholder: "કીવર્ડ દ્વારા વારંવાર પૂછાતા પ્રશ્નો શોધો...",
        faq_cat_aifa_title: "AIFA e.V.",
        faq_cat_first_entry_title: "જર્મનીમાં પ્રથમ પ્રવેશ",
        faq_first_entry_q1: "જર્મનીમાં નોકરીની ઓફર મળ્યા પછી મારે શું કરવું જોઈએ?",
        faq_first_entry_a1: "નોકરીની ઓફર મળ્યા પછી, તમારે તરત જ વિઝા અરજી પ્રક્રિયા શરૂ કરવી જોઈએ. તમારા રોજગાર કરાર, શૈક્ષણિક પ્રમાણપત્રો અને ભંડોળના પુરાવા સહિતના તમામ જરૂરી દસ્તાવેજો એકત્રિત કરો. તમારા દેશમાં જર્મન દૂતાવાસ અથવા વાણિજ્ય દૂતાવાસની વિશિષ્ટ આવશ્યકતાઓ તપાસવાની સલાહ આપવામાં આવે છે.",
        faq_first_entry_q2: "પરિવાર પુનઃમિલન વિઝા માટેની પ્રક્રિયા શું છે?",
        faq_first_entry_a2: "પરિવાર પુનઃમિલન વિઝા તમારા જીવનસાથી અને સગીર બાળકોને જર્મનીમાં તમારી સાથે જોડાવાની મંજૂરી આપે છે. મુખ્ય આવશ્યકતાઓમાં ઘણીવાર પૂરતી રહેવાની જગ્યા, નાણાકીય સાધનો અને તમારા જીવનસાથી માટે મૂળભૂત જર્મન ભાષા કૌશલ્યનો પુરાવો શામેલ હોય છે. અરજી સામાન્ય રીતે તમારા વતનમાં જર્મન દૂતાવાસમાં દાખલ કરવામાં આવે છે.",
        faq_first_entry_q3: "હું જર્મનીમાં કેટલું સોનું/દાગીના લાવી શકું?",
        faq_first_entry_a3: "જર્મનીમાં સ્થળાંતર કરતી વખતે, દાગીના સહિતની વ્યક્તિગત ચીજો સામાન્ય રીતે કસ્ટમ ડ્યુટીમાંથી મુક્ત હોય છે જો તે તમારા ઘરના સામાનનો ભાગ હોય અને તમારા દ્વારા ઓછામાં ઓછા છ મહિના સુધી ઉપયોગમાં લેવાઈ હોય. જોકે, ઉચ્ચ-મૂલ્યની વસ્તુઓ માટે, કસ્ટમ્સ સાથેની સમસ્યાઓ ટાળવા માટે માલિકી અને મૂલ્યનો પુરાવો (દા.ત., ખરીદીની રસીદો, મૂલ્યાંકન પ્રમાણપત્રો) સાથે રાખવાની સલાહ આપવામાં આવે છે. કસ્ટમ્સ નિયમો અનુસાર ચોક્કસ મૂલ્યથી ઉપરની વસ્તુઓની હંમેશા ઘોષણા કરો.",
        faq_cat_first_arrival_aachen_title: "આકેન માં પ્રથમ આગમન",
        faq_first_arrival_aachen_q1: "એરપોર્ટથી આકેન પહોંચવાના શ્રેષ્ઠ માર્ગો કયા છે?",
        faq_first_arrival_aachen_a1: "આકેન સારી રીતે જોડાયેલું છે. ડસેલડોર્ફ એરપોર્ટ (DUS) અથવા કોલોન બોન એરપોર્ટ (CGN) થી, તમે સીધા આકેન હૌપત્બાનહોફ (મુખ્ય સ્ટેશન) પર ટ્રેન લઈ શકો છો. માસ્ટ્રિક્ટ આકેન એરપોર્ટ (MST) થી બસો ઉપલબ્ધ છે. ટેક્સીઓ અને રાઇડ-શેરિંગ સેવાઓ પણ વિકલ્પો છે પરંતુ સામાન્ય રીતે વધુ મોંઘા હોય છે.",
        faq_first_arrival_aachen_q2: "મને આકેન માં અસ્થાયી આવાસ ક્યાં મળી શકે?",
        faq_first_arrival_aachen_a2: "અસ્થાયી આવાસ માટે, સર્વિસડ એપાર્ટમેન્ટ્સ, એરબીએનબી, અથવા ટૂંકા ગાળાના ભાડાને ધ્યાનમાં લો. Booking.com, Airbnb, અને સ્થાનિક વર્ગીકૃત (દા.ત., WG-Gesucht.de શેર કરેલા ફ્લેટ્સ માટે, જોકે પરિવારો માટે ઓછા સામાન્ય) જેવી વેબસાઇટ્સ મદદરૂપ થઈ શકે છે. કેટલાક હોટેલ્સ વિસ્તૃત રોકાણના વિકલ્પો પણ પ્રદાન કરે છે.",
        faq_first_arrival_aachen_q3: "'અનમેલ્ડુંગ' શું છે અને હું તે કેવી રીતે કરું?",
        faq_first_arrival_aachen_a3: "'અનમેલ્ડુંગ' એ તમારા કાયમી નિવાસસ્થાનમાં સ્થળાંતર કર્યાના બે અઠવાડિયાની અંદર સ્થાનિક સત્તાવાળાઓ (બર્ગેરામટ/આઇનવોહનેરમેલ્ડેમટ) સાથે તમારા રહેણાંક સરનામાની ફરજિયાત નોંધણી છે. તમને તમારા પાસપોર્ટ, વિઝા અને મકાનમાલિકની પુષ્ટિ (વોહ્નુંગ્સગેબરબેસ્ટાટીગુંગ) ની જરૂર પડશે. ટેક્સ આઈડી મેળવવા, બેંક ખાતું ખોલવા અને અન્ય વહીવટી કાર્યો માટે તે મહત્વપૂર્ણ છે. અગાઉથી ઑનલાઇન એપોઇન્ટમેન્ટ બુક કરો.",
        faq_first_arrival_aachen_q4: "હું જર્મનીમાં બેંક ખાતું કેવી રીતે ખોલું?",
        faq_first_arrival_aachen_a4: "તમે પરંપરાગત બેંકો (દા.ત., સ્પાર્કસે, ડ્યુશ બેંક) અથવા ઑનલાઇન બેંકો (દા.ત., N26, કોમડાયરેક્ટ) સાથે બેંક ખાતું ખોલી શકો છો. પરંપરાગત બેંકો માટે, તમને સામાન્ય રીતે તમારા પાસપોર્ટ, વિઝા/નિવાસ પરમિટ અને સરનામાના પુરાવા (અનમેલ્ડુંગ પ્રમાણપત્ર) ની જરૂર પડશે. ઑનલાઇન બેંકો ઘણીવાર સરળ ડિજિટલ પ્રક્રિયા પ્રદાન કરે છે.",
        faq_cat_children_title: "બાળકો",
        faq_children_q1: "હું મારા બાળકો માટે આકેન માં કિતા (કિન્ડરગાર્ટન) અથવા શાળા કેવી રીતે શોધું?",
        faq_children_a1: "કિતા માટે, તમે સામાન્ય રીતે શહેરના ઑનલાઇન પોર્ટલ (કિતા-નેવિગેટર આકેન) દ્વારા અથવા સીધા વ્યક્તિગત કિતા સાથે નોંધણી કરાવો છો. શાળાઓ માટે, આકેન ના શુલામટ (શાળા કાર્યાલય) અથવા વ્યક્તિગત શાળાઓનો સંપર્ક કરો. ઉચ્ચ માંગને કારણે કિતા માટે વહેલી નોંધણીની ખૂબ ભલામણ કરવામાં આવે છે.",
        faq_children_q2: "શું આકેન માં બાળકો માટે કોઈ શોખના વર્ગો અથવા સ્પોર્ટ્સ ક્લબ છે?",
        faq_children_a2: "હા, આકેન બાળકો માટે શોખના વર્ગો અને સ્પોર્ટ્સ ક્લબની વિશાળ શ્રેણી પ્રદાન કરે છે. તમે શહેરની સત્તાવાર વેબસાઇટ, સ્થાનિક સમુદાય કેન્દ્રો (ફેમિલીએનઝેન્ટ્રેન), સ્પોર્ટ્સ ફેડરેશન્સ (સ્ટાડ્ટસ્પોર્ટબુંડ આકેન) દ્વારા અથવા સીધા શાળાઓ અને કિતામાં પૂછપરછ કરીને માહિતી મેળવી શકો છો. વિકલ્પોમાં ફૂટબોલ, સ્વિમિંગ, સંગીત, કલા અને નૃત્ય શામેલ છે.",
        faq_cat_language_learning_title: "ભાષા શીખવી",
        faq_language_q1: "આકેન માં કઈ ભાષા શાળાઓ ઉપલબ્ધ છે?",
        faq_language_a1: "આકેન માં ઘણી ભાષા શાળાઓ છે જેમાં વોલ્ક્સહોચશુલે (VHS) આકેન, ગોથે-ઇન્સ્ટિટ્યુટ (જોકે સીધા આકેન માં નથી, નજીકમાં છે), અને સ્પ્રેચેનાકેડેમી આકેન જેવી ખાનગી ભાષા શાળાઓ શામેલ છે. તેઓ વિવિધ સ્તરો અને અભ્યાસક્રમ ફોર્મેટ્સ પ્રદાન કરે છે.",
        faq_language_q2: "'ઇન્ટિગ્રેશન કોર્સ' શું છે અને હું તેમાં કેવી રીતે જોડાઈ શકું?",
        faq_language_a2: "એક ઇન્ટિગ્રેશન કોર્સ (ઇન્ટિગ્રેશન્સકુર્સ) નવા ઇમિગ્રન્ટ્સ માટે જર્મન ભાષા અને ઓરિએન્ટેશન કોર્સ છે, જે આંશિક રીતે સરકાર દ્વારા ભંડોળ પૂરું પાડવામાં આવે છે. તેમાં B1 જર્મન ભાષા સ્તર સુધીનો સમાવેશ થાય છે અને તેમાં જર્મન સંસ્કૃતિ, ઇતિહાસ અને કાનૂની પ્રણાલી પર એક મોડ્યુલ શામેલ છે. તમે બુંડેસએમટ ફર માઇગ્રેશન ઉન્ડ ફ્લુચ્ટલિંગે (BAMF) દ્વારા અથવા સીધા અધિકૃત ભાષા શાળાઓ સાથે અરજી કરી શકો છો.",
        faq_language_q3: "હું પૂર્ણ-સમય કામ કરતી વખતે જર્મન કેવી રીતે શીખી શકું?",
        faq_language_a3: "ઘણી ભાષા શાળાઓ ખાસ કરીને કાર્યકારી વ્યાવસાયિકો માટે રચાયેલ સાંજ અથવા સપ્તાહના અંતના અભ્યાસક્રમો પ્રદાન કરે છે. ઑનલાઇન પ્લેટફોર્મ (દા.ત., ડ્યુઓલિંગો, બેબલ, ડ્યુશ વેલે), ભાષા વિનિમય ભાગીદારો, અને જર્મન સહકર્મીઓ અથવા મિત્રો સાથે અભ્યાસ કરવો પણ ખૂબ અસરકારક હોઈ શકે છે. કેટલાક નોકરીદાતાઓ ઇન-હાઉસ ભાષા તાલીમ પણ પ્રદાન કરે છે.",
        faq_cat_residence_permit_title: "નિવાસ પરમિટ",
        faq_residence_q1: "ઓળખ અને વિઝા દસ્તાવેજ તરીકે નિવાસ પરમિટ શા માટે મહત્વપૂર્ણ છે?",
        faq_residence_a1: "તમારું નિવાસ પરમિટ (આઉફેન્થાલટસ્ટિટલ) જર્મનીમાં કાયદેસરના નિવાસનો તમારો સત્તાવાર પુરાવો છે. તે જર્મનીમાં તમારા પ્રાથમિક ઓળખ દસ્તાવેજ તરીકે સેવા આપે છે અને તમારા અધિકારો (દા.ત., કામ, અભ્યાસ) નક્કી કરે છે. તે જર્મની અને અન્ય શેંગેન દેશોમાં ફરીથી પ્રવેશ માટે તમારા વિઝા તરીકે પણ કાર્ય કરે છે.",
        faq_residence_q2: "હું પ્રથમ વખત નિવાસ પરમિટ માટે કેવી રીતે અરજી કરું અને તેને કેવી રીતે લંબાવું?",
        faq_residence_a2: "પ્રારંભિક અરજી સામાન્ય રીતે આકેન માં આઉસ્લેન્ડરબેહોર્ડે (વિદેશી કાર્યાલય) માં તમારી અનમેલ્ડુંગ પૂર્ણ કર્યા પછી કરવામાં આવે છે. તમને તમારા પાસપોર્ટ, વિઝા, રોજગાર કરાર, આરોગ્ય વીમાનો પુરાવો અને અન્ય દસ્તાવેજોની જરૂર પડશે. વિસ્તરણ માટે, તમારા વર્તમાન પરમિટની સમયસીમા સમાપ્ત થાય તે પહેલાં સારી રીતે અરજી કરો, અપડેટ કરેલા દસ્તાવેજો પ્રદાન કરો. એપોઇન્ટમેન્ટ સામાન્ય રીતે ફરજિયાત હોય છે.",
        faq_residence_q3: "હું 'સેટલમેન્ટ પરમિટ' (કાયમી નિવાસ) માટે કેવી રીતે અરજી કરું?",
        faq_residence_a3: "એક સેટલમેન્ટ પરમિટ (નીડરલાસુંગ્સએરલાઉબનિસ) તમને કાયમી નિવાસ પ્રદાન કરે છે. પાત્રતા માટે સામાન્ય રીતે 5 વર્ષનો કાયદેસરનો નિવાસ (બ્લુ કાર્ડ ધારકો માટે ટૂંકો), પૂરતા જર્મન ભાષા કૌશલ્ય (B1), સુરક્ષિત આજીવિકા, પર્યાપ્ત રહેવાની જગ્યા, અને પેન્શન યોજનામાં યોગદાનની જરૂર પડે છે. આઉસ્લેન્ડરબેહોર્ડેમાં અરજી કરો.",
        faq_cat_house_hunting_title: "ઘરની શોધ",
        faq_house_hunting_q1: "હું આકેન માં લાંબા ગાળાનું એપાર્ટમેન્ટ કેવી રીતે શોધું?",
        faq_house_hunting_a1: "એપાર્ટમેન્ટ શિકાર માટે લોકપ્રિય પ્લેટફોર્મ્સમાં ઇમોબિલિયનસ્કાઉટ24, ઇમોવેલ્ટ, અને ઇબે ક્લાઇનએન્ઝાઇજેન શામેલ છે. નેટવર્કિંગ અને સ્થાનિક રિયલ એસ્ટેટ એજન્ટો (મેકલર) પણ મદદરૂપ થઈ શકે છે. ખાસ કરીને પરિવાર-મૈત્રીપૂર્ણ એપાર્ટમેન્ટ્સ માટે ઉચ્ચ માંગ અને સ્પર્ધા માટે તૈયાર રહો.",
        faq_house_hunting_q2: "મારે ભાડા કરાર (વર્ત્રાગ) અને સમાપ્તિ (કુંડિગુંગ) વિશે શું જાણવું જોઈએ?",
        faq_house_hunting_a2: "જર્મન ભાડા કરાર (મીટવર્ત્રાગ) વ્યાપક હોય છે. ભાડા વધારા, નવીનીકરણ ફરજો, અને સમાપ્તિ માટે નોટિસ અવધિ (સામાન્ય રીતે ભાડૂતો માટે 3 મહિના) સંબંધિત કલમો પર ધ્યાન આપો. હંમેશા કરારને કાળજીપૂર્વક વાંચો અને કોઈપણ શંકાઓને સ્પષ્ટ કરો. જો જરૂર હોય તો મીટરવેરિન (ભાડૂતોની એસોસિએશન) પાસેથી સલાહ લો.",
        faq_house_hunting_q3: "સંપત્તિ ખરીદવામાં (નોટાર, બાઉએમટ, ફિનાન્ઝામટ) શું શામેલ છે?",
        faq_house_hunting_a3: "જર્મનીમાં સંપત્તિ ખરીદવામાં એક નોટાર (જાહેર નોટરી) શામેલ હોય છે જે ખરીદ કરારનો મુસદ્દો તૈયાર કરે છે અને પ્રમાણિત કરે છે. બાઉએમટ (બિલ્ડિંગ ઓથોરિટી) બિલ્ડિંગ પરમિટ અને નિયમોનું સંચાલન કરે છે. ફિનાન્ઝામટ (ટેક્સ ઓફિસ) સંપત્તિ ટ્રાન્સફર ટેક્સ (ગ્રુંડેરવેર્બસ્ટ્યુઅર) માટે શામેલ હોય છે. જટિલતાને કારણે કાનૂની અને નાણાકીય સલાહની ખૂબ ભલામણ કરવામાં આવે છે.",
        faq_cat_social_circle_title: "સામાજિક વર્તુળ",
        faq_social_circle_q1: "હું આકેન માં સામાજિક વર્તુળ કેવી રીતે બનાવી શકું અને અન્ય ભારતીયોને કેવી રીતે મળી શકું?",
        faq_social_circle_a1: "AIFA e.V. ઇવેન્ટ્સમાં જોડાવું એ એક ઉત્તમ શરૂઆત છે! ઉપરાંત, સોશિયલ મીડિયા (ફેસબુક, વોટ્સએપ) પર સ્થાનિક ભારતીય સમુદાય જૂથોનું અન્વેષણ કરો, સાંસ્કૃતિક ઉત્સવોમાં ભાગ લો, અને યુનિવર્સિટી અથવા કંપનીના આંતરરાષ્ટ્રીય જૂથોમાં ભાગ લો. ભાષા વિનિમય મીટઅપ્સ પણ વિવિધ લોકોને મળવા માટે સારા છે.",
        faq_social_circle_q2: "શું આકેન માં કોઈ ભારતીય સંગઠનો (વેરિન) અથવા સાંસ્કૃતિક જૂથો છે?",
        faq_social_circle_a2: "હા, AIFA e.V. ઉપરાંત, અન્ય નાના ભારતીય સાંસ્કૃતિક જૂથો અથવા વિદ્યાર્થી સંગઠનો (ખાસ કરીને RWTH આકેન યુનિવર્સિટીની આસપાસ) હોઈ શકે છે. \"ઇન્ડિશર વેરિન આકેન\" માટે ઑનલાઇન શોધ કરવી અથવા ભારતીય કરિયાણાની દુકાનો પર નોટિસ બોર્ડ તપાસવું લીડ્સ પ્રદાન કરી શકે છે.",
        faq_social_circle_q3: "હું આકેન માં શોખ અને રમતગમત કેવી રીતે કરી શકું?",
        faq_social_circle_a3: "આકેન માં ફૂટબોલ, ટેનિસ, સ્વિમિંગ અને હાઇકિંગ જેવી વિવિધ પ્રવૃત્તિઓ માટે અસંખ્ય સ્પોર્ટ્સ ક્લબ (સ્પોર્ટ્સવેરિન) છે. હોચશુલ્સપોર્ટ (યુનિવર્સિટી સ્પોર્ટ્સ) વિદ્યાર્થીઓ અને સ્ટાફ માટે ઘણા અભ્યાસક્રમો પ્રદાન કરે છે. શોખ માટે, સ્થાનિક સમુદાય કેન્દ્રો (વોલ્ક્સહોચશુલે), ખાનગી ક્લબ, અથવા Meetup.com જેવા ઑનલાઇન પ્લેટફોર્મ પર રુચિ-આધારિત જૂથોની તપાસ કરો.",
        faq_cat_citizenship_title: "નાગરિકતા",
        faq_citizenship_q1: "જર્મન નાગરિકતા મેળવવાની પ્રક્રિયા શું છે?",
        faq_citizenship_a1: "કુદરતીકરણ (આઇનબર્ગેરૂંગ) માટેની પ્રમાણભૂત પ્રક્રિયામાં 8 વર્ષનો કાયદેસરનો નિવાસ (કેટલાક કિસ્સાઓમાં ટૂંકો, દા.ત., એકીકરણ કોર્સ સાથે 7 વર્ષ, જર્મન નાગરિકોના જીવનસાથીઓ માટે 6 વર્ષ), પૂરતા જર્મન ભાષા કૌશલ્ય (B1/B2), કુદરતીકરણ પરીક્ષા પાસ કરવી, અને સામાન્ય રીતે તમારી અગાઉની નાગરિકતાનો ત્યાગ કરવો શામેલ છે (ભારત પુખ્ત વયના લોકો માટે બેવડી નાગરિકતાની મંજૂરી આપતું નથી).",
        faq_citizenship_q2: "ભારતીય પાસપોર્ટ સરેન્ડર કરવાની અને OCI કાર્ડ મેળવવાની પ્રક્રિયા શું છે?",
        faq_a2: "જર્મન નાગરિકતા પ્રાપ્ત કર્યા પછી, તમારે તમારો ભારતીય પાસપોર્ટ ભારતીય દૂતાવાસ/વાણિજ્ય દૂતાવાસને સરેન્ડર કરવો આવશ્યક છે. તમને પછી \"સરેન્ડર પ્રમાણપત્ર\" પ્રાપ્ત થશે. ત્યારબાદ, તમે ઓવરસીઝ સિટીઝન ઓફ ઇન્ડિયા (OCI) કાર્ડ માટે અરજી કરી શકો છો, જે ભારત અને અન્ય લાભો માટે આજીવન વિઝા-મુક્ત મુસાફરીની મંજૂરી આપે છે. અરજી પ્રક્રિયા ભારતીય સરકારના પોર્ટલ દ્વારા ઑનલાઇન છે.",        
        contact_title: "અમારો સંપર્ક કરો",
        contact_intro: "પ્રશ્નો છે અથવા સંપર્ક કરવા માંગો છો? નીચે આપેલ ફોર્મ ભરો અને અમે શક્ય તેટલી વહેલી તકે તમારો સંપર્ક કરીશું.",
        your_name_label: "તમારું નામ",
        your_name_placeholder: "જ્હોન ડો",
        your_email_label: "તમારી ઇમેઇલ",
        your_email_placeholder: "john.doe@example.com",
        subject_label: "વિષય",
        subject_placeholder: "સભ્યપદ વિશે પૂછપરછ",
        message_label: "સંદેશ",
        message_placeholder: "અહીં તમારો સંદેશ લખો...",
        send_message_button: "સંદેશ મોકલો",
        contact_success_message: "તમારા સંદેશ માટે આભાર! અમે ટૂંક સમયમાં તમારો સંપર્ક કરીશું.",
        site_title_event_registration: "આકેન માં ભારતીય પરિવારોનું સંગઠન - ઇવેન્ટ નોંધણી",
        event_reg_title: "ઇવેન્ટ નોંધણી",
        event_reg_intro: "અમારા આગામી ઇવેન્ટ્સ માટે નોંધણી કરવા કૃપા કરીને નીચેનું ફોર્મ ભરો.",
        event_reg_select_event_label: "ઇવેન્ટ પસંદ કરો",
        event_reg_select_event_placeholder: "એક ઇવેન્ટ પસંદ કરો",
        event_reg_summer_picnic_option: "ઉનાળુ કૌટુંબિક પિકનિક (જુલાઈ 20, 2024)",
        event_reg_dandiya_option: "દાંડિયા ઉજવણી 2025 (ઑક્ટોબર 2, 2025)",
        event_reg_num_attendees_label: "હાજર રહેલા લોકોની સંખ્યા",
        event_reg_dietary_notes_label: "આહાર પ્રતિબંધો / વિશેષ નોંધો (વૈકલ્પિક)",
        event_reg_dietary_notes_placeholder: "દા.ત. શાકાહારી, ગ્લુટેન-મુક્ત, વ્હીલચેર ઍક્સેસની જરૂર છે",
        event_reg_submit_button: "ઇવેન્ટ માટે નોંધણી કરો",
        event_reg_success_message: "ઇવેન્ટ માટે નોંધણી કરવા બદલ આભાર! અમે તમને મળવા આતુર છીએ.",
        event_reg_error_message: "ઇવેન્ટ માટે નોંધણી કરવામાં ભૂલ. કૃપા કરીને ફરી પ્રયાસ કરો."        ,
        data_protection_title: "ડેટા સુરક્ષા નીતિ",
        data_protection_p1: "સંગઠન તેના સભ્યોના વ્યક્તિગત ડેટાને સંગઠનના બંધારણ હેઠળ અનુમતિ પ્રાપ્ત હેતુઓ અને કાર્યોને પૂર્ણ કરવા માટે એકત્રિત કરે છે, પ્રક્રિયા કરે છે અને ઉપયોગ કરે છે.",
        data_protection_p2: "સંગઠન પોતાના અને/અથવા તેના સભ્યો માટે લાભ મેળવવા માટે વીમા પૉલિસીઓની વ્યવસ્થા કરી શકે છે. વીમા પૉલિસીઓ માટેના કરારોને લાગુ કરવા અથવા સમાપ્ત કરવા માટે, સંગઠન તેના સભ્યોના વ્યક્તિગત ડેટાને જરૂરી હદ સુધી જવાબદાર વીમા કંપનીને પ્રસારિત કરે છે.",
        data_protection_p3: "બંધારણમાં ઉલ્લેખિત જાહેર અથવા ખાનગી ઇવેન્ટ્સ અને અન્ય પ્રવૃત્તિઓના સંબંધમાં, સંગઠન તેની વેબસાઇટ પર તેના સભ્યોના નામ અને ફોટા પ્રકાશિત કરે છે અને પ્રકાશન માટે પ્રિન્ટ અને ટેલિમીડિયા તેમજ ઇલેક્ટ્રોનિક મીડિયાને નામ અને ફોટા મોકલે છે. એક સભ્ય કોઈપણ સમયે બોર્ડને પોતાના વ્યક્તિગત ફોટાના પ્રકાશન સામે વાંધો ઉઠાવી શકે છે. વાંધો મળ્યા પછી, પ્રકાશન/પ્રસારણ બંધ કરવામાં આવશે અને સંગઠન તેની વેબસાઇટ પરથી હાલના ફોટા દૂર કરશે.",
        data_protection_p4: "તેમની સભ્યપદ અને આ બંધારણની સંબંધિત માન્યતા દ્વારા, સભ્યો ઉપર જણાવેલ હદ અને વ્યાપમાં તેમના વ્યક્તિગત ડેટાના સંગ્રહ, પ્રક્રિયા અને ઉપયોગ માટે સંમત છે. સંગઠનને તેના કાનૂની કાર્યો અને હેતુઓને પૂર્ણ કરવા સિવાયના હેતુઓ માટે ડેટાનો ઉપયોગ કરવાની પરવાનગી ફક્ત ત્યારે જ છે જો તે કાયદેસર રીતે તેમ કરવા માટે બંધાયેલ હોય. ડેટા વેચી શકાતો નથી.",
        data_protection_p5: "દરેક સભ્ય સભ્યપદ સૂચિના ભાગ રૂપે તેમને ઉપલબ્ધ કરાયેલા ડેટાને ગોપનીય રાખવાની જવાબદારી લે છે. સંગઠનના તમામ નાણાકીય બાબતોને પણ આ જ લાગુ પડે છે.",
        data_protection_p6: "અમે સભ્યોના વ્યક્તિગત ડેટાને કોઈપણ વ્યાપારી અથવા બિન-વ્યાપારી હેતુઓ માટે ત્રીજા પક્ષકારોને જાહેર ન કરવા માટે પ્રતિબદ્ધ છીએ. ડેટા ઉપયોગ પર વધુ વિગતો માટે, કૃપા કરીને અમારી સામાન્ય ડેટા સુરક્ષા નીતિ અહીં જુઓ (<a href=\"https://www.aifaev.de\" class=\"text-blue-600 hover:underline\" target=\"_blank\">www.aifaev.de</a>)"        
    },
    sa: { // Sanskrit
        site_title_home: "आकेनस्थभारतीयपरिवारसङ्घः - गृहम्",
        site_title_about: "आकेनस्थभारतीयपरिवारसङ्घः - अस्माकं विषये",
        site_title_events: "आकेनस्थभारतीयपरिवारसङ्घः - कार्यक्रमाः",
        site_title_membership: "आकेनस्थभारतीयपरिवारसङ्घः - सदस्यता",
        site_title_faq: "आकेनस्थभारतीयपरिवारसङ्घः - प्रायशः पृष्टाः प्रश्नाः", // Ensure this is updated
        site_title_contact: "आकेनस्थभारतीयपरिवारसङ्घः - सम्पर्कः",
        site_title_data_protection: "आकेनस्थभारतीयपरिवारसङ्घः - दत्तःसंरक्षणनीतिः",        
        nav_home: "गृहम्",
        nav_about: "अस्माकं विषये",
        nav_events: "कार्यक्रमाः",
        nav_membership: "सदस्यता",
        nav_faq: "प्रायशः पृष्टाः प्रश्नाः",
        nav_contact: "सम्पर्कः",
        nav_event_registration: "कार्यक्रमपञ्जीकरणम्", // NEW NAV KEY        
        home_main_title: "आकेनस्थभारतीयपरिवारसङ्घः",
        home_tagline: "आकेननगरस्थभारतीयपरिवाराणां संयोजनं, समुदायस्य पोषणं, अस्माकं समृद्धसंस्कृतेः उत्सवश्च।",
        home_explore_events: "कार्यक्रमाणां अन्वेषणं कुर्वन्तु",
        footer_copyright: "&copy; 2025 आकेनस्थभारतीयपरिवारसङ्घः। e.V. पञ्जीकरणसंख्या VR 6590(Amtsgericht Aachen). सर्वाधिकारः सुरक्षितः।",
        footer_data_protection_policy: "दत्तःसंरक्षणनीतिः",
        footer_terms: "सेवाशर्तः",
        lang_en: "English",
        lang_de: "Deutsch",
        lang_hi: "हिन्दी",
        lang_mr: "मराठी",
        lang_te: "తెలుగు",
        lang_ta: "தமிழ்",
        lang_bn: "বাংলা",
        lang_pa: "ਪੰਜਾਬੀ",
        lang_kn: "ಕನ್ನಡ",
        lang_ml: "മലയാളം",
        lang_or: "ଓଡ଼ିଆ",
        lang_gu: "ગુજરાતી",
        lang_sa: "संस्कृतम्",
        lang_mai: "मैथिली",
        about_title: "अस्माकं सङ्घस्य विषये",
        about_para1: "आकेनस्थभारतीयपरिवारसङ्घः (AIFA e.V.) इति जर्मनीदेशस्य आकेननगरस्थभारतीयपरिवाराणां संयोजनार्थं समर्पितः एकः अलाभकारी सङ्घः अस्ति। सांस्कृतिकपरम्परायाः उत्सवं, परम्पराणां संरक्षणं, नूतनसम्बन्धानां निर्माणं च यत्र भवति तादृशं जीवन्तं सहायकं च समुदायं निर्मातुं अस्माकं लक्ष्यम् अस्ति।",
        about_para2: "वयं वर्षभरं विविधानां कार्यक्रमाणां आयोजनं कुर्मः, येषु सांस्कृतिकपर्वतः सामाजिकसम्मेलनं यावत्, शैक्षिककार्यशालातः सामुदायिकसेवोपक्रमः यावत् च अन्तर्भवति। भारतीयपरिवारेभ्यः गृहात् दूरं गृहं प्रदातुं, तेषां स्थानीयसमुदाये एकीकरणे सहायतां कर्तुं, स्वमूलैः सह सम्बद्धान् स्थापयितुं च अस्माकं लक्ष्यम् अस्ति।",
        about_para3: "अस्माकं समुदायस्य उष्णतां अनुभवितुं, उत्तेजककार्यक्रमेषु भागं ग्रहीतुं, आकेननगरस्य सुदृढं सुसम्बद्धं च भारतीयप्रवासिनं निर्मातुं च अस्माभिः सह योजयन्तु।",
        events_title: "अस्माकं कार्यक्रमाः",
        event_diwali_title: "दीपावली उत्सवः २०२३",
        event_diwali_date: "अक्टोबर् २८, २०२३",
        event_diwali_desc: "सांस्कृतिकप्रदर्शनैः, स्वादिष्टभोजनैः, आतिशबाजीभिः च सह दीपपर्वस्य भव्योत्सवः। परिवाराः सहैव अविस्मरणीयं सन्ध्याकालम् आनन्दितवन्तः।",
        event_diwali_status: "गतकार्यक्रमः",
        event_summer_title: "ग्रीष्मकालीनपारिवारिकवनभोजनम्",
        event_summer_date: "जुलै २०, २०२४",
        event_summer_desc: "क्रीडाभिः, भोजनैः, बाह्यक्रियाकलापैः च सह वेस्टपार्क-मध्ये मनोरञ्जनपूर्णाय पारिवारिकवनभोजनाय अस्माभिः सह योजयन्तु। स्ववनभोजनपेटिकां मा विस्मरन्तु!",
        event_summer_status: "वर्तमानकार्यक्रमः",
        event_dandiya_title: "दाण्डिया उत्सवः २०२५",
        event_dandiya_date: "अक्टोबर् २, २०२५",
        event_dandiya_desc: "घूर्णनाय नर्तनाय च सज्जाः भवन्तु! पारम्परिकसङ्गीतेन, रङ्गिणवस्त्रैः, ऊर्जापूर्णनृत्यगतिभिः च सह उत्सवस्य भावनां पालयन्तः दाण्डिया-गरबा-रात्रौ अस्माभिः सह योजयन्तु। स्थानस्य क्रियाकलापानां च अधिकविवरणानि शीघ्रमेव घोषयिष्यन्ते।",
        event_dandiya_status: "भविष्यत्कार्यक्रमः",
        events_view_all: "सर्वान् कार्यक्रमां पश्यन्तु",
        events_register_now: "कार्यक्रमाय पञ्जीकरणं कुरुत", // NEW BUTTON TEXT        
        membership_title: "सदस्यः भवतु",
        membership_intro: "आकेनस्थभारतीयपरिवारसङ्घं (AIFA e.V.) योजयन्तु, अस्माकं वर्धमानसमुदायस्य भागः भवन्तु च! भवतः सदस्यता अस्मान् उत्तेजककार्यक्रमाणां आयोजने आकेनस्थभारतीयपरिवाराणां समर्थने च साहाय्यं करोति।",
        membership_individual_title: "व्यक्तिगतसदस्यता",
        membership_individual_price: "€30",
        membership_individual_per_year: "/ वर्षम्",
        membership_individual_desc: "सम्पर्कं कर्तुम् इच्छुकानां एकव्यक्तिनां कृते उत्तमम्।",
        membership_family_title: "पारिवारिकसदस्यता",
        membership_family_price: "€50",
        membership_family_per_year: "/ वर्षम्",
        membership_family_desc: "एकस्य गृहस्य सर्वे सदस्याः अन्तर्भवन्ति।",
        membership_form_title: "सदस्यता आवेदनपत्रम्",
        membership_type_label: "सदस्यताप्रकारः",
        membership_type_select_option: "एकं सदस्यताप्रकारं चिनोतु",
        membership_type_individual_option: "व्यक्तिगतसदस्यता (€30/वर्षम्)",
        membership_type_family_option: "पारिवारिकसदस्यता (€50/वर्षम्)",
        first_name_label: "प्रथमं नाम",
        first_name_placeholder: "जॉन",
        last_name_label: "अन्तिमं नाम",
        last_name_placeholder: "डो",
        num_family_members_label: "परिवारसदस्यानां सङ्ख्या (भवन्तं सहित्वा)",
        num_family_members_placeholder: "उदा. ४",
        volunteer_checkbox: "अहं AIFA e.V. कार्यक्रमाणां कृते स्वयंसेवकत्वेन उपलब्धः अस्मि।",
        apply_membership_button: "सदस्यतायै आवेदनं कुर्वन्तु",
        membership_success_message: "भवतः सदस्यतावेदनाय धन्यवादः! वयं शीघ्रमेव भवन्तं सम्पर्कयिष्यामः।",
        faq_title: "प्रायशः पृष्टाः प्रश्नाः",
        faq_q1: "आकेनस्थभारतीयपरिवारसङ्घः (AIFA e.V.) कः अस्ति?",
        faq_a1: "AIFA e.V. जर्मनीदेशस्य आकेननगरस्थभारतीयपरिवाराणां मध्ये सुदृढं समुदायं पोषयितुं समर्पितः एकः अलाभकारी सङ्घः अस्ति। वयं सांस्कृतिककार्यक्रमाणां, सामाजिकसम्मेलनानां च आयोजनं कुर्मः, तथा च नेटवर्किङ्ग-समर्थनार्थं च एकं मञ्चं प्रदास्यामः।",
        faq_q2: "अहं कथं सदस्यः भवितुं शक्नोमि?",
        faq_a2: "सदस्यतायाः विवरणानि आवेदनपत्राणि च अस्माकं जालपुटे शीघ्रमेव उपलभ्यन्ते। कृपया पुनः पश्यन्तु अथवा अधिकसूचनाय सम्पर्कपत्रेण अस्मान् सम्पर्कयन्तु।",
        faq_q3: "कार्यक्रमाः अ-सदस्यानां कृते अपि सन्ति वा?",
        faq_a3: "सांस्कृतिकविनिमयं समुदायनिर्माणं च प्रोत्साहयितुं अस्माकं बहवः कार्यक्रमाः अ-सदस्यानां सहितं सर्वेषां कृते सन्ति। केचन विशिष्टाः कार्यक्रमाः सदस्यतां अपेक्षन्ते। प्रत्येकं कार्यक्रमस्य विवरणानि निर्दिष्टानि भविष्यन्ति।",
        faq_q4: "अहं कथं स्वयंसेवकत्वेन योगदानं कर्तुं शक्नोमि?",
        faq_a4: "वयं स्वयंसेवकान् स्वागतं कुर्मः! यदि भवान् स्वसमयस्य कौशलस्य च योगदानं कर्तुम् इच्छति, तर्हि कृपया सम्पर्कपत्रेण अस्मान् सम्पर्कयन्तु, वयं च अवसरैः सह भवन्तं सम्पर्कयिष्यामः।",
        faq_portal_title: "सूचनाद्वारम्: जर्मनीदेशे भारतीयपरिवारेभ्यः प्रायशः पृष्टाः प्रश्नाः",
        faq_search_placeholder: "मुख्यपदेन प्रश्नान् अन्वेषयतु...",
        faq_cat_aifa_title: "AIFA e.V.",
        faq_cat_first_entry_title: "जर्मनीदेशे प्रथमप्रवेशः",
        faq_first_entry_q1: "जर्मनीदेशे कार्यप्रस्तावं प्राप्य किं करणीयम्?",
        faq_first_entry_a1: "कार्यप्रस्तावं प्राप्य सद्यः एव वीसा-आवेदनप्रक्रियाम् आरभेत। स्वस्य नियोजनपत्रं, शैक्षणिकप्रमाणपत्राणि, धनप्रमाणं च सहितं सर्वाणि आवश्यकानि दस्तवेजानि सङ्गृह्णीयात्। स्वदेशे जर्मनदूतावासस्य वा वाणिज्यदूतावासस्य वा विशिष्टावश्यकताः परीक्षितुं श्रेयस्करम्।",
        faq_first_entry_q2: "परिवारपुनर्मिलनवीसा-प्रक्रिया का?",
        faq_first_entry_a2: "परिवारपुनर्मिलनवीसा भवत्याः वा भवतः वा पत्न्याः वा पत्युः वा अल्पवयस्कबालकानां वा जर्मनीदेशे भवता सह आगमनाय अनुमतिं ददाति। मुख्यावश्यकतासु प्रायः पर्याप्तं निवासस्थानं, वित्तसाधनानि, भवत्याः वा भवतः वा पत्न्याः वा पत्युः वा कृते मूलभूतजर्मनभाषाज्ञानं च अन्तर्भवति। आवेदनं प्रायः स्वदेशे जर्मनदूतावासे क्रियते।",
        faq_first_entry_q3: "जर्मनीदेशे कियत् सुवर्णं/आभूषणं आनेतुं शक्यते?",
        faq_first_entry_a3: "जर्मनीदेशं प्रति गच्छन्तः व्यक्तिगतवस्तूनि, आभूषणानि च, सामान्यतः शुल्कात् मुक्तानि भवन्ति यदि तानि भवत्याः वा भवतः वा गृहवस्तूनां भागानि सन्ति तथा च भवता वा भवत्या वा न्यूनतः षण्मासान् यावत् उपयुक्तानि सन्ति। तथापि, उच्चमूल्यवस्तूनां कृते, शुल्केन सह समस्याः परिहर्तुं स्वामित्वस्य मूल्यस्य च प्रमाणं (यथा, क्रयपत्राणि, मूल्याङ्कनप्रमाणपत्राणि) वहनं श्रेयस्करम्। सीमाशुल्कनियमानुसारं निश्चितमूल्यादधिकवस्तूनि सर्वदा घोषयेत्।",
        faq_cat_first_arrival_aachen_title: "आकेन-नगरे प्रथम आगमनम्",
        faq_first_arrival_aachen_q1: "विमानपत्तनात् आकेन-नगरं प्राप्तुं उत्तमाः मार्गाः के सन्ति?",
        faq_first_arrival_aachen_a1: "आकेन-नगरं सुसम्बद्धम् अस्ति। ड्युसेलडोर्फ-विमानपत्तनात् (DUS) वा कोलोन-बोन-विमानपत्तनात् (CGN) वा, भवन्तः साक्षात् आकेन-मुख्यरेलस्थानकं प्रति रेलयानेन गन्तुं शक्नुवन्ति। मास्ट्रिख्ट-आकेन-विमानपत्तनात् (MST) बस्-यानानि उपलभ्यन्ते। ट्याक्सी-यानानि तथा सह-यानानि अपि विकल्पाः सन्ति, किन्तु सामान्यतः अधिकमूल्यानि भवन्ति।",
        faq_first_arrival_aachen_q2: "आकेन-नगरे अस्थायीनिवासं कुत्र लभ्यते?",
        faq_first_arrival_aachen_a2: "अस्थायीनिवासार्थं सेवायुक्तानि अपार्टमेन्टानि, एयरबिएनबी, अथवा अल्पकालिकभाटकाः विचारणीयाः। Booking.com, Airbnb, तथा स्थानीयविज्ञापनानि (यथा, WG-Gesucht.de साझागृहेभ्यः, यद्यपि परिवारेभ्यः न्यूनतरम्) उपकारकाणि भवितुमर्हन्ति। केचन उपाहारगृहाः अपि दीर्घकालिकनिवासविकल्पान् प्रयच्छन्ति।",
        faq_first_arrival_aachen_q3: "'अनमेल्डुंग' किम् अस्ति तथा कथं करोमि?",
        faq_first_arrival_aachen_a3: "'अनमेल्डुंग' इति स्थानीयप्राधिकरणेषु (बर्गरम्ट/ऐनवोहनरमेल्डेम्ट) स्वस्य स्थायीनिवासं प्रति स्थानान्तरणस्य द्विसप्ताहान्तर्गते स्वस्य निवासस्थानस्य अनिवार्यं पञ्जीकरणम् अस्ति। भवते स्वस्य पारपत्रं, वीसा, नियोजनपत्रं, गृहस्वामिनः पुष्टिकरणं (वोह्नुंग्स्गेबरबेस्टाटिगुंग) च आवश्यकाणि भविष्यन्ति। कर-आईडी प्राप्त्यर्थं, बैंक-खाता-उद्घाटनार्थं, अन्यप्रशासनिककार्यार्थं च एतत् महत्त्वपूर्णम् अस्ति। पूर्वमेव ऑनलाइन-नियुक्तिं बुक करोतु।",
        faq_first_arrival_aachen_q4: "जर्मनीदेशे बैंकखातं कथम् उद्घाटयामि?",
        faq_first_arrival_aachen_a4: "भवन्तः पारम्परिकैः बैंकैः (यथा, स्पार्कसे, ड्युश-बैंक) वा ऑनलाइन-बैंकैः (यथा, N26, कॉमडायरेक्ट) सह बैंकखातं उद्घाटयितुं शक्नुवन्ति। पारम्परिक-बैंकैः सह, भवद्भ्यः प्रायः स्वस्य पारपत्रं, वीसा/निवासानुमतिः, तथा च निवासप्रमाणं (अनमेल्डुंग-प्रमाणपत्रम्) आवश्यकमस्ति। ऑनलाइन-बैंकैः प्रायः सरला डिजिटल-प्रक्रिया प्रदीयते।",
        faq_cat_children_title: "बालकाः",
        faq_children_q1: "आकेन-नगरे स्वबालकेभ्यः किटा (किण्डरगार्टेन) वा विद्यालयं वा कथं लभे?",
        faq_children_a1: "किटा-कृते, भवन्तः सामान्यतः नगरस्य ऑनलाइन-पोर्टलम् (किटा-नेविगेटर आकेन) अथवा साक्षात् व्यक्तिगत-किटा-समीपे पञ्जीकरणं कुर्वन्ति। विद्यालयेभ्यः, आकेन-नगरस्य शुलामतं (विद्यालय-कार्यालयम्) अथवा व्यक्तिगत-विद्यालयैः सह सम्पर्कं कुर्वन्तु। उच्च-माङ्गल्यात् किटा-कृते शीघ्रं पञ्जीकरणम् अतीव अनुशंस्यते।",
        faq_children_q2: "आकेन-नगरे बालकेभ्यः कोऽपि शौक-वर्गः वा क्रीडा-क्लबः वा अस्ति किम्?",
        faq_children_a2: "आम्, आकेन-नगरे बालकेभ्यः अनेके शौक-वर्गाः तथा क्रीडा-क्लबानि सन्ति। भवन्तः नगरस्य आधिकारिक-वेबसाइट्-द्वारा, स्थानीय-समुदाय-केन्द्राणि (फामिलिएनजेन्ट्रेन), क्रीडा-महासंघान् (स्टाड्टस्पोर्ट्सबुण्ड आकेन) वा विद्यालयेषु तथा किटासु साक्षात् पृष्ट्वा सूचनां प्राप्तुं शक्नुवन्ति। विकल्पाः पादकन्दुकं, प्लवनं, सङ्गीतं, कलां, नर्तनं च अन्तर्भवन्ति।",
        faq_cat_language_learning_title: "भाषाशिक्षणम्",
        faq_language_q1: "आकेन-नगरे काः भाषा-विद्यालयाः उपलभ्यन्ते?",
        faq_language_a1: "आकेन-नगरे अनेकाः भाषा-विद्यालयाः सन्ति, यथा वोल्क्सहोचशूल (VHS) आकेन, गोएथे-इन्स्टिट्यूट (यद्यपि साक्षात् आकेन-नगरे न, समीपे अस्ति), तथा च स्प्रचेनाकाडेमी आकेन इव निजी-भाषा-विद्यालयाः। ते विविध-स्तरान् तथा पाठ्यक्रम-प्रारूपान् प्रदातुं शक्नुवन्ति।",
        faq_language_q2: "'एकीकरण-पाठ्यक्रमः' कः अस्ति तथा कथं तस्मिन् सम्मिलितो भवितुं शक्नोमि?",
        faq_language_a2: "एकीकरण-पाठ्यक्रमः (इन्टेग्रेशन्सकुर्स) नूतन-प्रवासेभ्यः जर्मन-भाषा-तथा-अभिविन्यास-पाठ्यक्रमः अस्ति, यः अंशतः सर्वकारेण वित्तपोषितः अस्ति। सः B1-जर्मन-भाषा-स्तरं यावत् आच्छादयति तथा च जर्मन-संस्कृतिः, इतिहासः, विधिक-व्यवस्था च विषये एकं मोड्यूलं समाविष्टं करोति। भवन्तः बुण्डेसएम्ट् फूर् माइग्रेशन उण्ड फ्लुच्त्लिङ्गे (BAMF) माध्यमेन वा साक्षात् अधिकृत-भाषा-विद्यालयेषु वा आवेदनं कर्तुं शक्नुवन्ति।",
        faq_language_q3: "पूर्णकालिकं कार्यं कुर्वन् जर्मनभाषां कथं शिक्षेय?",
        faq_language_a3: "अनेकाः भाषा-विद्यालयाः विशेषतः कार्यरतानां व्यावसायिक-जनानां कृते सायं वा सप्ताहान्तं वा पाठनक्रमं प्रदातुं शक्नुवन्ति। ऑनलाइन-प्लेटफार्माः (यथा, डुओलिङ्गो, ब्याबल्, ड्युश-वेले), भाषा-विनिमय-सहभागिनः, जर्मन-सहकर्मिभिः वा मित्रैः सह अभ्यासः अपि अतीव प्रभाविणः भवितुमर्हन्ति। केचन नियोक्तारः अपि आन्तरिक-भाषा-प्रशिक्षणं प्रदातुं शक्नुवन्ति।",
        faq_cat_residence_permit_title: "निवासानुमतिः",
        faq_residence_q1: "परिचय-वीसा-पत्ररूपेण निवासानुमतिः किमर्थं महत्त्वपूर्णम् अस्ति?",
        faq_residence_a1: "भवतः निवासानुमतिः (Aufenthaltstitel) जर्मनीदेशे वैधनिवासस्य आधिकारिकं प्रमाणम् अस्ति। एतत् जर्मनीमध्ये भवता प्राथमिकपरिचयपत्ररूपेण कार्यं करोति तथा च भवताम् अधिकारान् (यथा, कार्यं, अध्ययनं) निर्धारयति। एतत् जर्मनीदेशे तथा अन्येषु शेङ्गेन-देशेषु पुनःप्रवेशाय भवताम् वीसारूपेण अपि कार्यं करोति।",
        faq_residence_q2: "प्रथमवारं निवासानुमतये कथम् आवेदनं करोमि तथा च ताम् कथं वर्धयामि?",
        faq_residence_a2: "प्रारम्भिकं आवेदनं प्रायः आकेन-नगरे औस्लेण्डरबेहोरडे (विदेशी-कार्यालयम्) मध्ये भवताम् अनमेल्डुंग्-समाप्तेः पश्चात् क्रियते। भवते स्वस्य पारपत्रं, वीसा, नियोजनपत्रं, स्वास्थ्यबीमा-प्रमाणं, अन्यदस्तावेजं च आवश्यकाणि भविष्यन्ति। विस्ताराय, भवताम् वर्तमान-अनुमतेः समाप्तेः पूर्वमेव सुष्ठु आवेदनं कुर्वन्तु, अद्यतनीकृतानि दस्तवेजानि च प्रयच्छन्तु। नियुक्तयः प्रायः अनिवार्याः सन्ति।",
        faq_residence_q3: "'सेटलमेन्ट् परमिट्' (स्थायीनिवासः) कृते कथम् आवेदनं करोमि?",
        faq_residence_a3: "सेटलमेन्ट् परमिट् (Niederlassungserlaubnis) भवते स्थायीनिवासं ददाति। योग्यतायाः कृते सामान्यतः ५ वर्षाणि वैधनिवासः (ब्लू कार्ड्-धारिणां कृते लघुतरः), पर्याप्तं जर्मनभाषाज्ञानं (B1), सुरक्षितं जीवनोपायं, पर्याप्तं निवासस्थानं, तथा च पेन्शन-योजनायां योगदानं च आवश्यकम्। औस्लेण्डरबेहोरडे-समीपे आवेदनं कुर्वन्तु।",
        faq_cat_house_hunting_title: "गृह-अन्वेषणम्",
        faq_house_hunting_q1: "आकेन-नगरे दीर्घकालिकम् अपार्टमेन्टं कथम् अन्वेषयामि?",
        faq_house_hunting_a1: "अपार्टमेन्ट-अन्वेषणाय लोकप्रियाणि मञ्चानि ImmobilienScout24, Immowelt, तथा eBay Kleinanzeigen च सन्ति। सञ्जालनं तथा स्थानीय-स्थिरसम्पत्ति-अभिकर्तारः (Makler) अपि उपकारकाः भवितुमर्हन्ति। उच्च-माङ्गल्याय तथा स्पर्धायाम्, विशेषतः परिवार-अनुकूल-अपार्टमेन्टेभ्यः, सज्जः भवतु।",
        faq_house_hunting_q2: "भाटक-अनुबन्धानां (Vertrag) तथा समापनस्य (Kündigung) विषये किं ज्ञातव्यम्?",
        faq_house_house_hunting_a2: "जर्मन-भाटक-अनुबन्धः (Mietvertrag) विस्तृताः सन्ति। भाटक-वृद्धौ, नवीनीकरण-कर्तव्येषु, तथा समापन-सूचना-कालेषु (प्रायः भाटकेभ्यः ३ मासाः) ध्यानं ददातु। अनुबन्धं सर्वदा सावधानतया पठतु तथा कश्चित् सन्देहः चेत् स्पष्टीकरोतु। आवश्यकं चेत् मीटरवेरिन (भाटक-सङ्घः) तः परामर्शं स्वीकरोतु।",
        faq_house_hunting_q3: "सम्पत्ति-क्रये (Notar, Bauamt, Finanzamt) किं किं अन्तर्भवति?",
        faq_house_hunting_a3: "जर्मनीदेशे सम्पत्ति-क्रये एकः नोटारः (सार्वजनिक-नोटरी) अन्तर्भवति यः क्रय-अनुबन्धं लिखति तथा प्रमाणीकरोति। बाऊआम्त् (भवन-प्राधिकरणम्) भवन-अनुमतीः तथा नियमान् पालयति। फिनान्ज़आम्त् (कर-कार्यालयम्) सम्पत्ति-हस्तान्तरण-करेण (Grunderwerbsteuer) सह सम्बद्धम् अस्ति। जटिलतायाः कारणात् विधिक-वित्तीय-परामर्शः अतीव अनुशंस्यते।",
        faq_cat_social_circle_title: "सामाजिक-चक्रम्",
        faq_social_circle_q1: "आकेन-नगरे सामाजिक-चक्रं कथं निर्माय अन्यैः भारतीयैः सह कथं मिलेय?",
        faq_social_circle_a1: "AIFA e.V. कार्यक्रमेषु सम्मिलितं भवितुं महान् आरम्भः अस्ति! अपि च, सामाजिक-माध्यमेषु (फेसबुक, व्हाट्सएप) स्थानीय-भारतीय-समुदाय-समूहान् अन्वेषयतु, सांस्कृतिक-उत्सवेषु भागं गृह्णातु, तथा च विश्वविद्यालयस्य वा कम्पनीयाः वा अन्तर्राष्ट्रीय-समूहेषु भागं गृह्णातु। भाषा-विनिमय-मिलनानि अपि विविधान् जनान् मिलितुं उत्तमानि सन्ति।",
        faq_social_circle_q2: "आकेन-नगरे कोऽपि भारतीय-सङ्घः (Verein) वा सांस्कृतिक-समूहः वा अस्ति किम्?",
        faq_social_circle_a2: "आम्, AIFA e.V. इत्यस्मात् परं, अन्ये लघुतराः भारतीय-सांस्कृतिक-समूहाः वा छात्र-सङ्घाः वा (विशेषतः RWTH आकेन-विश्वविद्यालयस्य समीपे) भवितुमर्हन्ति। \"इण्डिशर वेराइन् आकेन\" इति ऑनलाइन-अन्वेषणं वा भारतीय-किराणा-विपणिषु सूचना-फलकानि परीक्षणं वा सूचनां प्रदातुं शक्नोति।",
        faq_social_circle_q3: "आकेन-नगरे शौकं तथा क्रीडां कथम् अनुसरेय?",
        faq_social_circle_a3: "आकेन-नगरे पादकन्दुकं, टेनिसं, प्लवनं, तथा पदयात्रां इव विविधानां क्रियाकलापानां कृते अनेके क्रीडा-क्लबानि (Sportvereine) सन्ति। होचशुलस्पोर्ट् (विश्वविद्यालय-क्रीडा) छात्रेभ्यः तथा कर्मचारिभ्यः अनेकानि पाठनक्रमाणि प्रदातुं शक्नोति। शौकानां कृते, स्थानीय-समुदाय-केन्द्राणि (Volkshochschule), निजी-क्लबानि, अथवा Meetup.com इव ऑनलाइन-मञ्चेषु रुचि-आधारितान् समूहान् परीक्षयतु।",
        faq_cat_citizenship_title: "नागरिकत्वम्",
        faq_citizenship_q1: "जर्मन-नागरिकत्वं प्राप्तुं प्रक्रिया का?",
        faq_citizenship_a1: "प्राकृतिकीकरणाय (Einbürgerung) मानकप्रक्रियायां ८ वर्षाणां वैधनिवासः (केषुचित् स्थलेषु लघुतरः, यथा, एकीकरण-पाठ्यक्रमेण सह ७ वर्षाणि, जर्मन-नागरिकाणां पत्न्यै ६ वर्षाणि), पर्याप्तं जर्मन-भाषाज्ञानं (B1/B2), प्राकृतिकीकरण-परीक्षायाः उत्तीर्णता, तथा च सामान्यतः स्वस्य पूर्व-नागरिकत्वस्य त्यागः च अन्तर्भवति (भारतं वयस्केभ्यः द्विनागरिकत्वं नानुमन्यते)।",
        faq_citizenship_q2: "भारतीय-पारपत्रं समर्प्य OCI-कार्डं प्राप्तुं प्रक्रिया का?",
        faq_citizenship_a2: "जर्मन-नागरिकत्वं प्राप्य, भवते स्वस्य भारतीय-पारपत्रं भारतीय-दूतावासाय/वाणिज्य-दूतावासाय समर्पणीयम्। ततः भवते \"समर्पण-प्रमाणपत्रम्\" प्राप्स्यते। अनन्तरं, भवन्तः ओवरसीज-सिटिजन-ऑफ-इण्डिया (OCI) कार्डाय आवेदनं कर्तुं शक्नुवन्ति, यत् भारतं प्रति आजीवनं वीसा-मुक्त-यात्रां तथा अन्य-लाभान् प्रदाति। आवेदन-प्रक्रिया भारतीय-सर्वकार-पोर्टल-माध्यमेन ऑनलाइन-अस्ति।",
        contact_title: "अस्मान् सम्पर्कयन्तु",
        contact_intro: "प्रश्नाः सन्ति वा सम्पर्कं कर्तुम् इच्छति वा? अधोलिखितं पत्रं पूरयन्तु वयं च शीघ्रमेव भवन्तं सम्पर्कयिष्यामः।",
        your_name_label: "भवतः नाम",
        your_name_placeholder: "जॉन डो",
        your_email_label: "भवतः ईमेल",
        your_email_placeholder: "john.doe@example.com",
        subject_label: "विषयः",
        subject_placeholder: "सदस्यताविषये पृच्छा",
        message_label: "सन्देशः",
        message_placeholder: "अत्र भवतः सन्देशं लिखन्तु...",
        send_message_button: "सन्देशं प्रेषयन्तु",
        contact_success_message: "भवतः सन्देशाय धन्यवादः! वयं शीघ्रमेव भवन्तं सम्पर्कयिष्यामः।",
        site_title_event_registration: "आकेनस्थभारतीयपरिवारसङ्घः - कार्यक्रमपञ्जीकरणम्",
        event_reg_title: "कार्यक्रमपञ्जीकरणम्",
        event_reg_intro: "अस्माकं आगामीकार्यक्रमेषु पञ्जीकरणार्थं कृपया अधोलिखितं प्रपत्रं पूरयन्तु।",
        event_reg_select_event_label: "कार्यक्रमं चिनुत",
        event_reg_select_event_placeholder: "एकं कार्यक्रमं चिनुत",
        event_reg_summer_picnic_option: "ग्रीष्मकालीनपारिवारिकविहारः (२०२४ जुलाई २०)",
        event_reg_dandiya_option: "दण्डिया-उत्सवः २०२५ (२०२५ अक्टूबर २)",
        event_reg_num_attendees_label: "उपस्थितानां संख्या",
        event_reg_dietary_notes_label: "आहारप्रतिबन्धाः / विशेषटिप्पण्यः (ऐच्छिकम्)",
        event_reg_dietary_notes_placeholder: "यथा, शाकाहारी, ग्लूटेन-मुक्तं, चक्रासनस्य आवश्यकता",
        event_reg_submit_button: "कार्यक्रमाय पञ्जीकरणं कुरुत",
        event_reg_success_message: "कार्यक्रमाय पञ्जीकरणार्थं धन्यवादः! भवन्तं द्रष्टुं वयम् उत्सुकाः स्मः।",
        event_reg_error_message: "कार्यक्रमपञ्जीकरणे त्रुटिः। कृपया पुनः प्रयत्नं कुरुत।"        ,
        data_protection_title: "दत्तःसंरक्षणनीतिः",
        data_protection_p1: "सङ्घः स्वसदस्यानां व्यक्तिगतदत्तांशान् सङ्घस्य संविधानस्य अन्तर्गतं अनुमतान् उद्देश्यान् कार्याणि च पूरयितुं सङ्गृह्णाति, प्रसंस्करोति, उपयुङ्क्ते च।",
        data_protection_p2: "सङ्घः स्वस्मै वा/अथवा स्वसदस्येभ्यः वा लाभान् प्राप्तुं बीमा-पॉलिसीः व्यवस्थापयितुं शक्नोति। बीमा-पॉलिसीनां कराराणां कार्यान्वयनार्थं वा समापनार्थं वा, सङ्घः स्वसदस्यानां व्यक्तिगतदत्तांशान् आवश्यकमात्रया सम्बद्धबीमा-कम्पनीं प्रति प्रेषयति।",
        data_protection_p3: "सार्वजनिकैः वा निजीयैः वा कार्यक्रमेषु तथा च संविधाने उल्लिखितेषु अन्येषु कार्यकलापेषु सङ्घः स्वसदस्यानां नामानि चित्राणि च स्वस्य मुखपृष्ठे प्रकाशयति तथा च प्रकाशनार्थं मुद्रण-दूरदर्शन-माध्यमेषु तथा च विद्युन्माध्यमेषु नामानि चित्राणि च प्रेषयति। कश्चन सदस्यः स्वस्य व्यक्तिगतचित्राणां प्रकाशनाय अध्यक्षाय कदापि आपत्तिं कर्तुं शक्नोति। आपत्तिः प्राप्ता सति, प्रकाशनं/प्रेषणं स्थगयिष्यते तथा च सङ्घः स्वस्य मुखपृष्ठात् विद्यमानानि चित्राणि निष्कासयिष्यति।",
        data_protection_p4: "स्वस्य सदस्यत्वेन तथा च अस्य संविधानस्य सम्बद्धमान्यतया, सदस्याः स्वस्य व्यक्तिगतदत्तांशान् उपरि निर्दिष्टमात्रया व्याप्ते च सङ्ग्रहीतुं, प्रसंस्करितुं, उपयोक्तुं च सम्मतयः सन्ति। सङ्घः स्वस्य वैधानिककार्याणि उद्देश्यानि च पूरयितुं अतिरिक्तं अन्येषु उद्देश्यार्थं दत्तांशान् उपयोक्तुं केवलं तदा अनुमतः अस्ति यदा सः वैधरूपेण तथा कर्तुं बाध्यः अस्ति। दत्तांशानि विक्रयणं न शक्यते।",
        data_protection_p5: "प्रत्येकं सदस्यः दत्तांशान् गोपनीयतया व्यवहारयितुं प्रतिज्ञां करोति, ये सदस्यता-सूचीयाः भागरूपेण तेभ्यः उपलभ्यन्ते। सङ्घस्य सर्वेषु वित्तीय-विषयेषु अपि एतत् एव लागू भवति।",
        data_protection_p6: "वयं सदस्यानां व्यक्तिगतदत्तांशान् कस्यापि वाणिज्यिकाय वा अवाणिज्यिकाय वा उद्देश्याय तृतीयपक्षेभ्यः न प्रकाशयितुं प्रतिबद्धाः स्मः। दत्तांश-उपयोगस्य विषये अधिकविवरणार्थं, कृपया अस्माकं सामान्यदत्तःसंरक्षणनीतिम् अत्र पश्यन्तु (<a href=\"https://www.aifaev.de\" class=\"text-blue-600 hover:underline\" target=\"_blank\">www.aifaev.de</a>)"        
    },
    mai: { // Maithili
        site_title_home: "आकेनमे भारतीय परिवारक संघ - होम",
        site_title_about: "आकेनमे भारतीय परिवारक संघ - हमरा बारे मे",
        site_title_events: "आकेनमे भारतीय परिवारक संघ - आयोजन",
        site_title_membership: "आकेनमे भारतीय परिवारक संघ - सदस्यता",
        site_title_faq: "आकेन मे भारतीय परिवारक संघ - बारम्बार पूछल जायवला प्रश्न", // Ensure this is updated
        site_title_contact: "आकेनमे भारतीय परिवारक संघ - संपर्क करू",
        site_title_data_protection: "आकेन मे भारतीय परिवारक संघ - डेटा संरक्षण नीति",        
        nav_home: "होम",
        nav_about: "हमरा बारे मे",
        nav_events: "आयोजन",
        nav_membership: "सदस्यता",
        nav_faq: "बारम्बार पूछल जायवला प्रश्न",
        nav_contact: "संपर्क करू",
        nav_event_registration: "आयोजन पञ्जीकरण", // NEW NAV KEY        
        home_main_title: "आकेनमे भारतीय परिवारक संघ",
        home_tagline: "आकेनमे भारतीय परिवारसभकेँ जोड़ब, समुदायकेँ बढ़ावा देब आ अपन समृद्ध संस्कृति केँ मनाबय।",
        home_explore_events: "आयोजनसभकेँ देखू",
        footer_copyright: "&copy; 2025 आकेन मे भारतीय परिवारक संघ। e.V. पंजीकरण संख्या VR 6590(Amtsgericht Aachen). सर्वाधिकार सुरक्षित।",
        footer_data_protection_policy: "डेटा संरक्षण नीति",
        footer_terms: "सेवाक शर्त",
        lang_en: "English",
        lang_de: "Deutsch",
        lang_hi: "हिन्दी",
        lang_mr: "मराठी",
        lang_te: "తెలుగు",
        lang_ta: "தமிழ்",
        lang_bn: "বাংলা",
        lang_pa: "ਪੰਜਾਬੀ",
        lang_kn: "ಕನ್ನಡ",
        lang_ml: "മലയാളം",
        lang_or: "ଓଡ଼ିଆ",
        lang_gu: "ગુજરાતી",
        lang_sa: "संस्कृतम्",
        lang_mai: "मैथिली",
        about_title: "हमर संघक बारे मे",
        about_para1: "आकेनमे भारतीय परिवारक संघ (AIFA e.V.) जर्मनीक आकेनमे रहनिहार भारतीय परिवारसभकेँ एक संग आनबाक लेल समर्पित एकटा गैर-लाभकारी संगठन अछि। हमर मिशन एकटा जीवंत आ सहयोगी समुदाय बनेबाक अछि जतय सांस्कृतिक विरासतक उत्सव मनाओल जाइत अछि, परंपरासभकेँ संरक्षित कएल जाइत अछि, आ नवका दोस्ती बनैत अछि।",
        about_para2: "हम वर्ष भरि विभिन्न प्रकारक आयोजनसभक व्यवस्था करैत छी, जाहिमे सांस्कृतिक पर्व आ सामाजिक सभासभ सँ ल' क' शैक्षिक कार्यशालासभ आ सामुदायिक सेवा पहल शामिल अछि। हमर उद्देश्य भारतीय परिवारसभकेँ घर सँ दूर एकटा घर उपलब्ध करबय, हुनका स्थानीय समुदायमे एकीकृत होममे सहायता करबय आ अपन जड़सभ सँ जुड़ल रहबय मे मदद करबय अछि।",
        about_para3: "हमर समुदायक गर्मजोशीक अनुभव करबाक लेल, रोमांचक आयोजनसभमे भाग लेबाक लेल, आ आकेनमे एकटा मजबूत आ एकजुट भारतीय प्रवासी बनेबामे योगदान करबाक लेल हमरा सँ जुड़ू।",
        events_title: "हमर आयोजन",
        event_diwali_title: "दीपावली उत्सव 2023",
        event_diwali_date: "28 अक्टूबर 2023",
        event_diwali_desc: "सांस्कृतिक प्रदर्शन, स्वादिष्ट भोजन, आ आतिशबाजीक संग दीप पर्वक एकटा भव्य उत्सव। परिवारसभ एक संग एकटा यादगार साँझक आनंद लेलक।",
        event_diwali_status: "पिछला आयोजन",
        event_summer_title: "ग्रीष्मकालीन पारिवारिक पिकनिक",
        event_summer_date: "20 जुलाई 2024",
        event_summer_desc: "खेल, भोजन, आ बाहरी गतिविधि सँग वेस्टपार्कमे एकटा मजेदार पारिवारिक पिकनिकक लेल हमरा सँ जुड़ू। अपन पिकनिक टोकरी नहि बिसरू!",
        event_summer_status: "वर्तमान आयोजन",
        event_dandiya_title: "डांडिया उत्सव 2025",
        event_dandiya_date: "2 अक्टूबर 2025",
        event_dandiya_desc: "घूमबा आ नाचबा लेल तैयार भ' जाऊ! पारंपरिक संगीत, रंगीन पोशाक, आ ऊर्जावान नृत्य चालसभक संग उत्सवक भावनाक जश्न मनावैत एकटा जीवंत डांडिया आ गरबा रातिक लेल हमरा सँ जुड़ू। स्थान आ गतिविधि सँ संबंधित आओर जानकारी जल्दिये घोषित कएल जाएत।",
        event_dandiya_status: "भविष्यक आयोजन",
        events_view_all: "सभ आयोजन देखू",
        events_register_now: "आयोजनक लेल पञ्जीकरण करू", // NEW BUTTON TEXT        
        membership_title: "सदस्य बनू",
        membership_intro: "आकेनमे भारतीय परिवारक संघ (AIFA e.V.) मे शामिल होऊ आ हमर बढ़ैत समुदायक हिस्सा बनू! अहाँक सदस्यता हमरा रोमांचक आयोजनसभक व्यवस्था करबामे आ आकेनमे भारतीय परिवारसभकेँ समर्थन करबामे मदद करैत अछि।",
        membership_individual_title: "व्यक्तिगत सदस्यता",
        membership_individual_price: "€30",
        membership_individual_per_year: "/ वर्ष",
        membership_individual_desc: "जुड़बाक इच्छुक एकल व्यक्तिसभक लेल उत्तम।",
        membership_family_title: "पारिवारिक सदस्यता",
        membership_family_price: "€50",
        membership_family_per_year: "/ वर्ष",
        membership_family_desc: "एकटा परिवारक सभ सदस्यसभकेँ कवर करैत अछि।",
        membership_form_title: "सदस्यता आवेदन पत्र",
        membership_type_label: "सदस्यता प्रकार",
        membership_type_select_option: "एकटा सदस्यता प्रकार चुनू",
        membership_type_individual_option: "व्यक्तिगत सदस्यता (€30/वर्ष)",
        membership_type_family_option: "पारिवारिक सदस्यता (€50/वर्ष)",
        first_name_label: "पहिल नाम",
        first_name_placeholder: "जॉन",
        last_name_label: "अंतिम नाम",
        last_name_placeholder: "डो",
        num_family_members_label: "परिवारक सदस्यसभक संख्या (अहाँ सहित)",
        num_family_members_placeholder: "उदा. ४",
        volunteer_checkbox: "हम AIFA e.V. आयोजनसभक लेल स्वयंसेवकक रूपमे उपलब्ध छी।",
        apply_membership_button: "सदस्यताक लेल आवेदन करू",
        membership_success_message: "अहाँक सदस्यता आवेदनक लेल धन्यवाद! हम जल्दिये अहाँ सँ संपर्क करब।",
        faq_title: "बारम्बार पूछल जायवला प्रश्न",
        faq_q1: "आकेनमे भारतीय परिवारक संघ (AIFA e.V.) की अछि?",
        faq_a1: "AIFA e.V. जर्मनीक आकेनमे रहनिहार भारतीय परिवारसभक बीच एकटा मजबूत समुदायकेँ बढ़ावा देबाक लेल समर्पित एकटा गैर-लाभकारी संगठन अछि। हम सांस्कृतिक आयोजन, सामाजिक सभासभक आयोजन करैत छी आ नेटवर्किंग आ समर्थनक लेल एकटा मंच प्रदान करैत छी।",
        faq_q2: "हम सदस्य केना बनि सकैत छी?",
        faq_a2: "सदस्यताक विवरण आ आवेदन पत्र जल्दिये हमर वेबसाइट पर उपलब्ध होयत। कृपया फेर सँ देखू वा आओर जानकारीक लेल संपर्क फॉर्मक माध्यम सँ हमरा सँ संपर्क करू।",
        faq_q3: "की आयोजन गैर-सदस्यसभक लेल सेहो उपलब्ध अछि?",
        faq_a3: "सांस्कृतिक आदान-प्रदान आ समुदाय निर्माणकेँ बढ़ावा देबाक लेल हमर बहुत रास आयोजन गैर-सदस्यसभ सहित सभक लेल उपलब्ध अछि। किछु विशेष आयोजनक लेल सदस्यताक आवश्यकता भ' सकैत अछि। प्रत्येक आयोजनक लेल विवरण निर्दिष्ट कएल जाएत।",
        faq_q4: "हम स्वयंसेवक केना बनि सकैत छी वा योगदान केना क' सकैत छी?",
        faq_a4: "हम स्वयंसेवकसभक स्वागत करैत छी! यदि अहाँ अपन समय वा कौशलक योगदान करबामे इच्छुक छी, त' कृपया संपर्क फॉर्मक माध्यम सँ हमरा सँ संपर्क करू, आ हम अवसरसभक संग अहाँ सँ संपर्क करब।",
        faq_portal_title: "सूचना पोर्टल: जर्मनी मे भारतीय परिवारक लेल बारम्बार पूछल जायवला प्रश्न",
        faq_search_placeholder: "कीवर्ड सँ प्रश्न सभकें खोजू...",
        faq_cat_aifa_title: "AIFA e.V.",
        faq_cat_first_entry_title: "जर्मनी मे पहिल प्रवेश",
        faq_first_entry_q1: "जर्मनी मे नौकरीक प्रस्ताव भेटलाक बाद हमरा की करबाक चाही?",
        faq_first_entry_a1: "नौकरीक प्रस्ताव भेटलाक बाद, अहाँकेँ तुरन्त वीसा आवेदन प्रक्रिया शुरू करबाक चाही। अपन नियोजन पत्र, शैक्षणिक प्रमाणपत्र, आ धनक प्रमाण सहित सभ आवश्यक दस्तावेज एकत्र करू। अपन देश मे जर्मन दूतावास वा वाणिज्य दूतावासक विशिष्ट आवश्यकताक जाँच करब उचित अछि।",
        faq_first_entry_q2: "परिवारक पुनर्मिलन वीसाक लेल की प्रक्रिया अछि?",
        faq_first_entry_a2: "परिवारक पुनर्मिलन वीसा अहाँक पति वा पत्नी आ नाबालिग बच्चाकेँ जर्मनी मे अहाँक संग जुड़बाक अनुमति दैत अछि। मुख्य आवश्यकता मे प्रायः पर्याप्त रहबाक स्थान, वित्तीय साधन, आ अहाँक पति वा पत्नीक लेल बुनियादी जर्मन भाषा कौशलक प्रमाण शामिल अछि। आवेदन प्रायः अहाँक गृह देश मे जर्मन दूतावास मे दायर कयल जाइत अछि।",
        faq_first_entry_q3: "हम जर्मनी मे कतेक सोना/आभूषण लऽ सकैत छी?",
        faq_first_entry_a3: "जर्मनी मे स्थानान्तरित करैत काल, आभूषण सहित व्यक्तिगत सामान, सामान्यतः सीमा शुल्क सँ मुक्त होइत अछि यदि ओ अहाँक घरेलू सामानक हिस्सा अछि आ अहाँ द्वारा कम सँ कम छह मास धरि उपयोग कयल गेल अछि। मुदा, उच्च मूल्यक वस्तु सभक लेल, सीमा शुल्क सँ समस्या सँ बचबाक लेल स्वामित्व आ मूल्यक प्रमाण (जाहिना, खरीदक रसीद, मूल्यांकन प्रमाणपत्र) लऽ कऽ चलबाक सलाह देल जाइत अछि। सीमा शुल्क नियमक अनुसार एकटा निश्चित मूल्य सँ ऊपरक वस्तु सभकेँ हमेशा घोषित करू।",
        faq_cat_first_arrival_aachen_title: "आकेन मे पहिल आगमन",
        faq_first_arrival_aachen_q1: "विमानस्थल सँ आकेन पहुँचबाक सबसँ नीक तरीका की अछि?",
        faq_first_arrival_aachen_a1: "आकेन नीक सँ जुड़ल अछि। ड्युसेलडोर्फ विमानस्थल (DUS) वा कोलोन बोन विमानस्थल (CGN) सँ, अहाँ सीधा आकेन हउप्तबान्होफ (मुख्य स्टेशन) धरि ट्रेन लऽ सकैत छी। मास्ट्रिच आकेन विमानस्थल (MST) सँ बस उपलब्ध अछि। टैक्सी आ राइड-शेयरिंग सेवा सेहो विकल्प अछि मुदा सामान्यतः बेसी महंगा होइत अछि।",
        faq_first_arrival_aachen_q2: "हमरा आकेन मे अस्थायी आवास कतय भेट सकैत अछि?",
        faq_first_arrival_aachen_a2: "अस्थायी आवासक लेल, सर्विस अपार्टमेंट, एयरबीएनबी, वा अल्पकालिक किराया पर विचार करू। Booking.com, Airbnb, आ स्थानीय वर्गीकृत (जाहिना, WG-Gesucht.de साझा फ्लैटक लेल, यद्यपि परिवारक लेल कम सामान्य) जेहन वेबसाइट सभ सहायक भऽ सकैत अछि। किछु होटल सेहो विस्तारित प्रवासक विकल्प प्रदान करैत अछि।",
        faq_first_arrival_aachen_q3: "'अनमेल्डुंग' की अछि आ हम एकरा कोना करब?",
        faq_first_arrival_aachen_a3: "'अनमेल्डुंग' स्थानीय अधिकारी (बर्गरम्ट/आइन्वोहनेरमेल्डेम्ट) क संग अपन आवासीय पताक अनिवार्य पंजीकरण अछि, जखन अहाँ अपन स्थायी निवास मे जाइत छी तखन दू सप्ताहक भीतर। अहाँकेँ अपन पासपोर्ट, वीसा, नियोजन पत्र, आ मकान मालिकक पुष्टिकरण (वोह्नुंग्स्गेबरबेस्टाटिगुंग) क आवश्यकता पड़त। ई एकटा टैक्स आईडी प्राप्त करबाक लेल, बैंक खाता खोलबाक लेल, आ अन्य प्रशासनिक काजक लेल महत्वपूर्ण अछि। पहिने सँ ऑनलाइन अपॉइंटमेंट बुक करू।",
        faq_first_arrival_aachen_q4: "हम जर्मनी मे बैंक खाता कोना खोलब?",
        faq_first_arrival_aachen_a4: "अहाँ पारंपरिक बैंक (जाहिना, स्पार्कसे, ड्यूश बैंक) वा ऑनलाइन बैंक (जाहिना, N26, कॉमडायरेक्ट) सँ बैंक खाता खोलि सकैत छी। पारंपरिक बैंकक लेल, अहाँकेँ सामान्यतः अपन पासपोर्ट, वीसा/निवास परमिट, आ पताक प्रमाण (अनमेल्डुंग प्रमाणपत्र) क आवश्यकता पड़त। ऑनलाइन बैंक प्रायः एकटा सरल डिजिटल प्रक्रिया प्रदान करैत अछि।",
        faq_cat_children_title: "बच्चा",
        faq_children_q1: "हम आकेन मे अपन बच्चाक लेल किता (किंडरगार्टन) वा स्कूल कोना खोजब?",
        faq_children_a1: "किताक लेल, अहाँ सामान्यतः शहरक ऑनलाइन पोर्टल (किता-नाविगेटर आकेन) क माध्यम सँ वा सीधा व्यक्तिगत किता सँ पंजीकरण करैत छी। स्कूलक लेल, आकेनक शुलअम्ट (स्कूल कार्यालय) वा व्यक्तिगत स्कूल सँ संपर्क करू। उच्च मांगक कारण किताक लेल शीघ्र पंजीकरणक अत्यधिक अनुशंसा कयल जाइत अछि।",
        faq_children_q2: "की आकेन मे बच्चाक लेल कोनो हॉबी क्लास वा स्पोर्ट्स क्लब अछि?",
        faq_children_a2: "हाँ, आकेन बच्चाक लेल विभिन्न प्रकारक हॉबी क्लास आ स्पोर्ट्स क्लब प्रदान करैत अछि। अहाँ शहरक आधिकारिक वेबसाइट, स्थानीय सामुदायिक केंद्र (फ़ैमिलिएनज़ेंट्रेन), स्पोर्ट्स फेडरेशन (स्टाड्टस्पोर्टबुंड आकेन) क माध्यम सँ वा सीधा स्कूल आ किता मे पूछताछ कय कऽ जानकारी प्राप्त कऽ सकैत छी। विकल्प मे फुटबॉल, तैराकी, संगीत, कला आ नृत्य शामिल अछि।",
        faq_cat_language_learning_title: "भाषा सीखब",
        faq_language_q1: "आकेन मे कोन-कोन भाषा विद्यालय उपलब्ध अछि?",
        faq_language_a1: "आकेन मे कतेको भाषा विद्यालय अछि जाहि मे वोल्क्सहोचशूल (वीएचएस) आकेन, गोएथे-इन्स्टीट्यूट (यद्यपि सीधा आकेन मे नहि, पास मे अछि), आ स्प्राचेनकेडेमी आकेन जेहन निजी भाषा विद्यालय शामिल अछि। ओ विभिन्न स्तर आ पाठ्यक्रम प्रारूपक पेशकश करैत अछि।",
        faq_language_q2: "'एकीकरण पाठ्यक्रम' की अछि आ हम एकरा मे कोना शामिल भऽ सकैत छी?",
        faq_language_a2: "एक एकीकरण पाठ्यक्रम (इंटीग्रेशन्सकुर्स) नव प्रवासीक लेल एकटा जर्मन भाषा आ ओरिएंटेशन पाठ्यक्रम अछि, जे आंशिक रूप सँ सरकार द्वारा वित्तपोषित अछि। ई बी1 जर्मन भाषा स्तर धरि कवर करैत अछि आ एहि मे जर्मन संस्कृति, इतिहास आ कानूनी प्रणाली पर एकटा मॉड्यूल शामिल अछि। अहाँ बुंडेसएम्ट फर माइग्रेशन अंड फ्लुच्त्लिंगे (बीएएमएफ) क माध्यम सँ वा सीधा अधिकृत भाषा स्कूलक संग आवेदन कऽ सकैत छी।",
        faq_language_q3: "हम पूर्णकालिक काज करैत काल जर्मन कोना सीखि सकैत छी?",
        faq_language_a3: "बहुत रास भाषा विद्यालय विशेष रूप सँ कामकाजी पेशेवरक लेल डिजाइन कयल गेल साँझ वा सप्ताहांतक पाठ्यक्रम प्रदान करैत अछि। ऑनलाइन प्लेटफॉर्म (जाहिना, डुओलिंगो, बैबेल, ड्यूश वेले), भाषा विनिमय भागीदार, आ जर्मन सहकर्मी वा मित्रक संग अभ्यास सेहो बहुत प्रभावी भऽ सकैत अछि। किछु नियोक्ता इन-हाउस भाषा प्रशिक्षण सेहो प्रदान करैत अछि।",
        faq_cat_residence_permit_title: "निवास परमिट",
        faq_residence_q1: "पहचान आ वीसा दस्तावेजक रूप मे निवास परमिट किएक महत्वपूर्ण अछि?",
        faq_residence_a1: "अहाँक निवास परमिट (औफेंथल्त्स्टिटेल) जर्मनी मे कानूनी निवासक अहाँक आधिकारिक प्रमाण अछि। ई जर्मनीक भीतर अहाँक प्राथमिक पहचान दस्तावेजक रूप मे काज करैत अछि आ अहाँक अधिकार (जाहिना, काज, अध्ययन) केँ निर्धारित करैत अछि। ई जर्मनी आ अन्य शेंगेन देश मे पुनः प्रवेशक लेल अहाँक वीसाक रूप मे सेहो काज करैत अछि।",
        faq_residence_q2: "हम पहिल बेर निवास परमिटक लेल कोना आवेदन करब आ एकरा कोना बढ़ाएब?",
        faq_residence_a2: "प्रारंभिक आवेदन सामान्यतः आकेन मे औस्लैंडरबेहॉर्डे (विदेशी कार्यालय) मे अहाँक अनमेल्डुंग पूरा करबाक बाद कयल जाइत अछि। अहाँकेँ अपन पासपोर्ट, वीसा, नियोजन अनुबंध, स्वास्थ्य बीमाक प्रमाण आ अन्य दस्तावेजक आवश्यकता पड़त। विस्तारक लेल, अपन वर्तमान परमिटक समय सीमा समाप्त होयबा सँ पहिने नीक जकाँ आवेदन करू, अद्यतन दस्तावेज प्रदान करू। अपॉइंटमेंट सामान्यतः अनिवार्य होइत अछि।",
        faq_residence_q3: "हम 'सेटलमेंट परमिट' (स्थायी निवास) क लेल कोना आवेदन करब?",
        faq_residence_a3: "एकटा सेटलमेंट परमिट (नीडरलासुंग्सएरलाउबनिस) अहाँकेँ स्थायी निवास प्रदान करैत अछि। योग्यताक लेल सामान्यतः 5 सालक कानूनी निवास (ब्लू कार्ड धारकक लेल कम), पर्याप्त जर्मन भाषा कौशल (बी1), सुरक्षित आजीविका, पर्याप्त रहबाक जगह, आ पेंशन योजना मे योगदानक आवश्यकता होइत अछि। औस्लैंडरबेहॉर्डे मे आवेदन करू।",
        faq_cat_house_hunting_title: "घरक तलाश",
        faq_house_hunting_q1: "हम आकेन मे दीर्घकालिक अपार्टमेंट कोना खोजब?",
        faq_house_hunting_a1: "अपार्टमेंटक तलाशक लेल लोकप्रिय प्लेटफॉर्म मे इमोबिलियनस्काउट24, इमोवेल्ट, आ ईबे क्लेनएन्ज़ाइगेन शामिल अछि। नेटवर्किंग आ स्थानीय रियल एस्टेट एजेंट (माकलर) सेहो सहायक भऽ सकैत अछि। विशेष रूप सँ परिवारक लेल उपयुक्त अपार्टमेंटक लेल उच्च मांग आ प्रतिस्पर्धाक लेल तैयार रहू।",
        faq_house_hunting_q2: "हमरा किरायाक अनुबंध (वर्ट्राग) आ समाप्ति (कुंडिगुंग) क बारे मे की पता होयबाक चाही?",
        faq_house_hunting_a2: "जर्मन किरायाक अनुबंध (मीटवर्ट्राग) व्यापक होइत अछि। किराया मे वृद्धि, नवीकरण कर्तव्य, आ समाप्ति क लेल नोटिस अवधि (सामान्यतः किरायेदारक लेल 3 मास) सँ संबंधित खंड पर ध्यान दियौ। हमेशा अनुबंध केँ ध्यान सँ पढ़ू आ कोनो संदेह केँ स्पष्ट करू। यदि आवश्यक होय त मीटवेरिन (किरायेदारक संघ) सँ सलाह लियौ।",
        faq_house_hunting_q3: "संपत्ति खरीदब (नोटार, बाऊएम्ट, फ़िनांज़ाम्ट) मे की शामिल अछि?",
        faq_house_hunting_a3: "जर्मनी मे संपत्ति खरीदब मे एकटा नोटार (सार्वजनिक नोटरी) शामिल होइत अछि जे खरीद समझौताक मसौदा तैयार करैत अछि आ प्रमाणित करैत अछि। बाऊएम्ट (भवन प्राधिकरण) भवन परमिट आ नियम सभकेँ संभालैत अछि। फ़िनांज़ाम्ट (कर कार्यालय) संपत्ति हस्तांतरण कर (ग्रुंडेरवेर्बस्ट्यूअर) क लेल शामिल होइत अछि। जटिलताक कारण कानूनी आ वित्तीय सलाहक अत्यधिक अनुशंसा कयल जाइत अछि।",
        faq_cat_social_circle_title: "सामाजिक दायरा",
        faq_social_circle_q1: "हम आकेन मे एकटा सामाजिक दायरा कोना बना सकैत छी आ अन्य भारतीय सँ कोना मिलि सकैत छी?",
        faq_social_circle_a1: "AIFA e.V. आयोजन मे शामिल होनाय एकटा शानदार शुरुआत अछि! एहि सँ बेसी, सोशल मीडिया (फेसबुक, व्हाट्सएप) पर स्थानीय भारतीय सामुदायिक समूहक अन्वेषण करू, सांस्कृतिक उत्सव मे भाग लियौ, आ विश्वविद्यालय वा कंपनीक अंतरराष्ट्रीय समूह मे भाग लियौ। भाषा विनिमय मीटअप सेहो विभिन्न लोक सँ मिलबाक लेल नीक अछि।",
        faq_social_circle_q2: "की आकेन मे कोनो भारतीय संघ (वेरिन) वा सांस्कृतिक समूह अछि?",
        faq_social_circle_a2: "हाँ, AIFA e.V. क अतिरिक्त, अन्य छोट भारतीय सांस्कृतिक समूह वा छात्र संघ (विशेष रूप सँ RWTH आकेन विश्वविद्यालयक आसपास) भऽ सकैत अछि। \"इंडिशर वेरिन आकेन\" क लेल ऑनलाइन खोज करनाय वा भारतीय किरानाक दोकान पर नोटिस बोर्डक जाँच करनाय सुराग प्रदान कऽ सकैत अछि।",
        faq_social_circle_q3: "हम आकेन मे शौक आ खेल कोना कऽ सकैत छी?",
        faq_social_circle_a3: "आकेन मे फुटबॉल, टेनिस, तैराकी आ लंबी पैदल यात्रा जेहन विभिन्न गतिविधि क लेल बहुत रास स्पोर्ट्स क्लब (स्पोर्ट्सवेरिन) अछि। होचशुलस्पोर्ट (विश्वविद्यालय खेल) छात्र आ कर्मचारी क लेल बहुत रास पाठ्यक्रम प्रदान करैत अछि। शौक क लेल, स्थानीय सामुदायिक केंद्र (वोल्क्सहोचशूल), निजी क्लब, वा मीटअप.कॉम जेहन ऑनलाइन प्लेटफॉर्म पर रुचि-आधारित समूहक जाँच करू।",
        faq_cat_citizenship_title: "नागरिकता",
        faq_citizenship_q1: "जर्मन नागरिकता प्राप्त करबाक प्रक्रिया की अछि?",
        faq_citizenship_a1: "प्राकृतिककरण (आइन्बुर्गेरुंग) क लेल मानक प्रक्रिया मे 8 सालक कानूनी निवास (किछु मामला मे कम, जाहिना, एकीकरण पाठ्यक्रमक संग 7 साल, जर्मन नागरिकक पति/पत्नीक लेल 6 साल), पर्याप्त जर्मन भाषा कौशल (बी1/बी2), एकटा प्राकृतिककरण परीक्षा पास करनाय, आ सामान्यतः अपन पिछला नागरिकताक त्याग करनाय शामिल अछि (भारत वयस्कक लेल दोहरी नागरिकताक अनुमति नहि दैत अछि)।",
        faq_citizenship_q2: "भारतीय पासपोर्ट सरेंडर करबाक आ ओसीआई कार्ड प्राप्त करबाक प्रक्रिया की अछि?",
        faq_citizenship_a2: "जर्मन नागरिकता प्राप्त करला पर, अहाँकेँ अपन भारतीय पासपोर्ट भारतीय दूतावास/वाणिज्य दूतावास केँ सरेंडर करबाक होयत। अहाँकेँ तखन एकटा \"सरेंडर सर्टिफिकेट\" प्राप्त होयत। बाद मे, अहाँ एकटा ओवरसीज सिटीजन ऑफ इंडिया (ओसीआई) कार्डक लेल आवेदन कऽ सकैत छी, जे भारत मे आजीवन वीसा-मुक्त यात्रा आ अन्य लाभ प्रदान करैत अछि। आवेदन प्रक्रिया भारतीय सरकारक पोर्टलक माध्यम सँ ऑनलाइन अछि।",        
        contact_title: "हमरा सँ संपर्क करू",
        contact_intro: "प्रश्न अछि वा संपर्क करबय चाहैत छी? नीचा देल गेल फॉर्म भरू आ हम जल्दिये अहाँ सँ संपर्क करब।",
        your_name_label: "अहाँक नाम",
        your_name_placeholder: "जॉन डो",
        your_email_label: "अहाँक ईमेल",
        your_email_placeholder: "john.doe@example.com",
        subject_label: "विषय",
        subject_placeholder: "सदस्यता के बारे में पूछताछ",
        message_label: "संदेश",
        message_placeholder: "एतय अपन संदेश लिखू...",
        send_message_button: "संदेश पठाऊ",
        contact_success_message: "अहाँक संदेश के लेल धन्यवाद! हम जल्दिये अहाँ सँ संपर्क करब ।",
        site_title_event_registration: "आकेन मे भारतीय परिवारक संघ - आयोजन पञ्जीकरण",
        event_reg_title: "आयोजन पञ्जीकरण",
        event_reg_intro: "हमर आगामी आयोजन सभक लेल पञ्जीकरण लेल कृपया नीचा देल गेल फॉर्म भरू।",
        event_reg_select_event_label: "आयोजन चुनू",
        event_reg_select_event_placeholder: "एकटा आयोजन चुनू",
        event_reg_summer_picnic_option: "ग्रीष्मकालीन पारिवारिक पिकनिक (२० जुलाई, २०२४)",
        event_reg_dandiya_option: "डांडिया उत्सव २०२५ (२ अक्टूबर, २०२५)",
        event_reg_num_attendees_label: "उपस्थित लोकक संख्या",
        event_reg_dietary_notes_label: "आहार प्रतिबंध / विशेष नोट (वैकल्पिक)",
        event_reg_dietary_notes_placeholder: "जाहिना, शाकाहारी, ग्लूटेन-मुक्त, व्हीलचेयर पहुँचक आवश्यकता अछि",
        event_reg_submit_button: "आयोजनक लेल पञ्जीकरण करू",
        event_reg_success_message: "आयोजनक लेल पञ्जीकरण करबाक लेल धन्यवाद! हम अहाँकें देखबाक लेल उत्सुक छी।",
        event_reg_error_message: "आयोजनक लेल पञ्जीकरण करैत काल त्रुटि भेल। कृपया फेर सँ प्रयास करू।"        ,
        data_protection_title: "डेटा संरक्षण नीति",
        data_protection_p1: "संघ अपन सदस्यक व्यक्तिगत डेटाकेँ संघक संविधानक अंतर्गत अनुमत उद्देश्य आ कार्यकेँ पूरा करबाक लेल एकत्र करैत अछि, संसाधित करैत अछि आ उपयोग करैत अछि।",
        data_protection_p2: "संघ अपन लेल आ/वा अपन सदस्यक लेल लाभ प्राप्त करबाक लेल बीमा पॉलिसीक व्यवस्था कऽ सकैत अछि। बीमा पॉलिसीक लेल अनुबंधकेँ लागू करबाक वा समाप्त करबाक लेल, संघ अपन सदस्यक व्यक्तिगत डेटाकेँ आवश्यक सीमा धरि जिम्मेदार बीमा कंपनीकेँ प्रसारित करैत अछि।",
        data_protection_p3: "संविधान मे उल्लिखित सार्वजनिक वा निजी आयोजन आ अन्य गतिविधिक संबंध मे, संघ अपन होमपेज पर अपन सदस्यक नाम आ फोटो प्रकाशित करैत अछि आ प्रकाशनक लेल प्रिंट आ टेलीमीडियाक संग-संग इलेक्ट्रॉनिक मीडियाकेँ नाम आ फोटो भेजैत अछि। कोनो सदस्य अपन व्यक्तिगत फोटोक प्रकाशन पर कोनो समय बोर्डकेँ आपत्ति कऽ सकैत अछि। आपत्ति प्राप्त भेलाक बाद, प्रकाशन/प्रसारण रोकल जाएत आ संघ अपन होमपेज सँ वर्तमान फोटोकेँ हटा देत।",
        data_protection_p4: "अपन सदस्यता आ एहि संविधानक संबंधित मान्यताक माध्यम सँ, सदस्य अपन व्यक्तिगत डेटाकेँ ऊपर बताओल गेल सीमा आ दायरा धरि एकत्र करबाक, संसाधित करबाक आ उपयोग करबाक लेल सहमत छथि। संघकेँ अपन वैधानिक कार्य आ उद्देश्यकेँ पूरा करबाक अतिरिक्त अन्य उद्देश्यक लेल डेटाक उपयोग करबाक अनुमति तखनहि अछि जखन ओ कानूनी रूप सँ एहन करबाक लेल बाध्य हो। डेटा बेचल नहि जा सकैत अछि।",
        data_protection_p5: "प्रत्येक सदस्य सदस्यता सूचीक हिस्साक रूप मे हुनका उपलब्ध कराओल गेल डेटाकेँ गोपनीय रखबाक जिम्मेदारी लैत अछि। संघक सभ वित्तीय मामला पर सेहो इहे लागू होइत अछि।",
        data_protection_p6: "हम सदस्यक व्यक्तिगत डेटाकेँ कोनो व्यावसायिक वा गैर-व्यावसायिक उद्देश्यक लेल तेसर पक्षकेँ प्रकट नहि करबाक लेल प्रतिबद्ध छी। डेटा उपयोग पर आओर बेसी विवरणक लेल, कृपया हमर सामान्य डेटा संरक्षण नीति एतय देखू (<a href=\"https://www.aifaev.de\" class=\"text-blue-600 hover:underline\" target=\"_blank\">www.aifaev.de</a>)"        
    }        
};


// Function to set the language
function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        // Handle site_title separately based on the current page
        if (key && key.startsWith('site_title_')) {
            const pageSpecificKey = `site_title_${document.body.id || 'home'}`; // Use body id for page identification
            if (translations[lang] && translations[lang][pageSpecificKey]) {
                document.title = translations[lang][pageSpecificKey];
            }
        } else if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else if (element.tagName === 'OPTION') {
                element.textContent = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
    // Store selected language in local storage
    localStorage.setItem('selectedLanguage', lang);
}

// Initialize language selector and set initial language
document.addEventListener('DOMContentLoaded', () => {
    const languageSelector = document.getElementById('language-selector');
    const storedLang = localStorage.getItem('selectedLanguage') || 'en'; // Default to English

    if (languageSelector) {
        languageSelector.value = storedLang;
        languageSelector.addEventListener('change', (event) => {
            setLanguage(event.target.value);
        });
    }
    setLanguage(storedLang); // Apply the stored or default language on load

    // Toggle mobile navigation menu
    const menuButton = document.getElementById('menu-button');
    const navMenu = document.getElementById('nav-menu');

    if (menuButton && navMenu) {
        menuButton.addEventListener('click', () => {
            navMenu.classList.toggle('hidden');
            navMenu.classList.toggle('flex');
            navMenu.classList.toggle('flex-col');
        });
    }

    // Handle membership form submission and conditional field visibility
    const membershipForm = document.getElementById('membership-form');
    const memberTypeSelect = document.getElementById('member-type');
    const familyMembersField = document.getElementById('family-members-field');
    const numFamilyMembersInput = document.getElementById('num-family-members');
    const membershipFormMessage = document.getElementById('membership-form-message');

    if (memberTypeSelect) { // Check if element exists on this page
        memberTypeSelect.addEventListener('change', function() {
            if (this.value === 'family') {
                familyMembersField.classList.remove('hidden');
                numFamilyMembersInput.setAttribute('required', 'required');
            } else {
                familyMembersField.classList.add('hidden');
                numFamilyMembersInput.removeAttribute('required');
            }
        });
    }

        if (membershipForm) { // Check if element exists on this page
            membershipForm.addEventListener('submit', async function(e) {
                e.preventDefault(); // Prevent default form submission

                // Check if Firebase DB and its functions are initialized
                if (!window.db || typeof window.addDoc === 'undefined' || typeof window.collection === 'undefined') {
                    console.error("Firestore (window.db, addDoc, or collection) is not initialized or available yet!");
                    membershipFormMessage.textContent = "Error: Database not ready. Please try refreshing the page or check console for Firebase initialization errors.";
                    membershipFormMessage.classList.remove('hidden');
                    membershipFormMessage.classList.add('text-red-600');
                    setTimeout(() => { membershipFormMessage.classList.add('hidden'); }, 5000);
                    return; // IMPORTANT: Stop execution if db is not ready
                }

                const memberType = memberTypeSelect.value;
                const firstName = document.getElementById('first-name').value;
                const lastName = document.getElementById('last-name').value;
                const numFamilyMembers = (memberType === 'family') ? document.getElementById('num-family-members').value : null;
                const volunteerAvailability = document.getElementById('volunteer-availability').checked;

                // Show a loading message
                membershipFormMessage.textContent = "Submitting application...";
                membershipFormMessage.classList.remove('hidden', 'text-green-600', 'text-red-600');
                membershipFormMessage.classList.add('text-gray-600');

                let firebaseSuccess = false;
                let emailSuccess = false;
                let combinedErrorMessage = ""; // To collect errors from both operations

                try {
                    // 1. Prepare data for Firebase Firestore
                    const memberData = {
                        memberType: memberType,
                        firstName: firstName,
                        lastName: lastName,
                        numFamilyMembers: numFamilyMembers,
                        volunteer: volunteerAvailability,
                        submissionDate: new Date() // Add a timestamp
                    };

                    // 2. Prepare data for PHP email script
                    const formData = new FormData(membershipForm); // Automatically gets all form fields

                    // Execute both operations in parallel using Promise.allSettled
                    // Promise.allSettled waits for all promises to settle (either fulfilled or rejected)
                    const [firebaseResult, emailResponsePromise] = await Promise.allSettled([
                        window.addDoc(window.collection(window.db, "members"), memberData), // Firebase operation
                        fetch(membershipForm.action, { // PHP email operation
                            method: membershipForm.method,
                            body: formData
                        })
                    ]);

                    // Handle Firebase result
                    if (firebaseResult.status === 'fulfilled') {
                        console.log("Firebase Document written with ID: ", firebaseResult.value.id);
                        firebaseSuccess = true;
                    } else {
                        console.error("Error adding document to Firestore: ", firebaseResult.reason);
                        combinedErrorMessage += "Database save failed: " + (firebaseResult.reason.message || "Unknown database error") + ". ";
                    }

                    // Handle Email (PHP) result
                    if (emailResponsePromise.status === 'fulfilled') {
                        const emailResponse = emailResponsePromise.value;
                        const emailResultJson = await emailResponse.json(); // Parse JSON response from PHP
                        if (emailResultJson.success) {
                            console.log("Email sent successfully via PHP.");
                            emailSuccess = true;
                        } else {
                            console.error("Error sending email via PHP: ", emailResultJson.message);
                            combinedErrorMessage += "Email send failed: " + (emailResultJson.message || "Unknown email error") + ". ";
                        }
                    } else {
                        console.error("Network error sending email via PHP: ", emailResponsePromise.reason);
                        combinedErrorMessage += "Email send network error: " + (emailResponsePromise.reason.message || "Unknown network error") + ". ";
                    }

                    // Update UI based on combined results
                    if (firebaseSuccess && emailSuccess) {
                        membershipFormMessage.textContent = translations[localStorage.getItem('selectedLanguage') || 'en'].membership_success_message;
                        membershipFormMessage.classList.remove('text-gray-600', 'text-red-600');
                        membershipFormMessage.classList.add('text-green-600');
                        membershipForm.reset(); // Clear the form on full success
                        if (familyMembersField) {
                            familyMembersField.classList.add('hidden');
                        }
                    } else {
                        // If either failed, display the collected error messages
                        throw new Error(combinedErrorMessage || "Partial success or unknown error during submission.");
                    }

                } catch (error) {
                    console.error("Overall membership submission error:", error);
                    membershipFormMessage.textContent = `Error submitting membership: ${error.message || "Please try again."}`;
                    membershipFormMessage.classList.remove('text-gray-600', 'text-green-600');
                    membershipFormMessage.classList.add('text-red-600');
                }

                // Hide the message after a few seconds
                setTimeout(() => {
                    membershipFormMessage.classList.add('hidden');
                }, 8000); // Increased timeout for reading messages
            });
        }

    // Handle event registration form submission
    const eventRegistrationForm = document.getElementById('event-registration-form');
    const eventRegistrationFormMessage = document.getElementById('event-registration-form-message');

    if (eventRegistrationForm) {
        eventRegistrationForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            // Check if Firebase DB and its functions are initialized
            if (!window.db || typeof window.addDoc === 'undefined' || typeof window.collection === 'undefined') {
                console.error("Firestore (window.db, addDoc, or collection) is not initialized or available yet!");
                eventRegistrationFormMessage.textContent = "Error: Database not ready. Please try refreshing the page or check console for Firebase initialization errors.";
                eventRegistrationFormMessage.classList.remove('hidden');
                eventRegistrationFormMessage.classList.add('text-red-600');
                setTimeout(() => { eventRegistrationFormMessage.classList.add('hidden'); }, 5000);
                return;
            }

            const eventSelect = document.getElementById('event-select').value;
            const regFirstName = document.getElementById('reg-first-name').value;
            const regLastName = document.getElementById('reg-last-name').value;
            const regEmail = document.getElementById('reg-email').value;
            const numAttendees = document.getElementById('num-attendees').value;
            const dietaryNotes = document.getElementById('dietary-notes').value;

            // Show a loading message
            eventRegistrationFormMessage.textContent = "Registering for event...";
            eventRegistrationFormMessage.classList.remove('hidden', 'text-green-600', 'text-red-600');
            eventRegistrationFormMessage.classList.add('text-gray-600');

            let firebaseSuccess = false;
            let emailSuccess = false;
            let combinedErrorMessage = "";

            try {
                // 1. Prepare data for Firebase Firestore
                const registrationData = {
                    event: eventSelect,
                    firstName: regFirstName,
                    lastName: regLastName,
                    email: regEmail,
                    numAttendees: parseInt(numAttendees), // Ensure number type
                    dietaryNotes: dietaryNotes,
                    registrationDate: new Date()
                };

                // 2. Prepare data for PHP email script
                const formData = new FormData(eventRegistrationForm);

                // Execute both operations in parallel
                const [firebaseResult, emailResponsePromise] = await Promise.allSettled([
                    window.addDoc(window.collection(window.db, "eventRegistrations"), registrationData), // Firebase operation
                    fetch(eventRegistrationForm.action, { // PHP email operation
                        method: eventRegistrationForm.method,
                        body: formData
                    })
                ]);

                // Handle Firebase result
                if (firebaseResult.status === 'fulfilled') {
                    console.log("Event registration saved to Firebase with ID: ", firebaseResult.value.id);
                    firebaseSuccess = true;
                } else {
                    console.error("Error saving event registration to Firestore: ", firebaseResult.reason);
                    combinedErrorMessage += "Database save failed: " + (firebaseResult.reason.message || "Unknown database error") + ". ";
                }

                // Handle Email (PHP) result
                if (emailResponsePromise.status === 'fulfilled') {
                    const emailResponse = emailResponsePromise.value;
                    const emailResultJson = await emailResponse.json();
                    if (emailResultJson.success) {
                        console.log("Event registration email sent successfully via PHP.");
                        emailSuccess = true;
                    } else {
                        console.error("Error sending event registration email via PHP: ", emailResultJson.message);
                        combinedErrorMessage += "Email send failed: " + (emailResultJson.message || "Unknown email error") + ". ";
                    }
                } else {
                    console.error("Network error sending event registration email via PHP: ", emailResponsePromise.reason);
                    combinedErrorMessage += "Email send network error: " + (emailResponsePromise.reason.message || "Unknown network error") + ". ";
                }

                // Update UI based on combined results
                if (firebaseSuccess && emailSuccess) {
                    eventRegistrationFormMessage.textContent = translations[localStorage.getItem('selectedLanguage') || 'en'].event_reg_success_message;
                    eventRegistrationFormMessage.classList.remove('text-gray-600', 'text-red-600');
                    eventRegistrationFormMessage.classList.add('text-green-600');
                    eventRegistrationForm.reset(); // Clear the form on full success
                } else {
                    throw new Error(combinedErrorMessage || translations[localStorage.getItem('selectedLanguage') || 'en'].event_reg_error_message);
                }

            } catch (error) {
                console.error("Overall event registration error:", error);
                eventRegistrationFormMessage.textContent = `Error: ${error.message || translations[localStorage.getItem('selectedLanguage') || 'en'].event_reg_error_message}`;
                eventRegistrationFormMessage.classList.remove('text-gray-600', 'text-green-600');
                eventRegistrationFormMessage.classList.add('text-red-600');
            }

            // Hide the message after a few seconds
            setTimeout(() => {
                eventRegistrationFormMessage.classList.add('hidden');
            }, 8000);
        });
    }

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm) { // Check if element exists on this page
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault(); // Prevent default form submission

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Show a loading message
            formMessage.textContent = "Sending message...";
            formMessage.classList.remove('hidden', 'text-green-600', 'text-red-600');
            formMessage.classList.add('text-gray-600');

            try {
                const formData = new FormData(contactForm); // Get form data directly

                const response = await fetch(contactForm.action, {
                    method: contactForm.method,
                    body: formData // Send as FormData
                });

                const result = await response.json(); // Parse JSON response from PHP

                if (result.success) {
                    formMessage.textContent = translations[localStorage.getItem('selectedLanguage') || 'en'].contact_success_message;
                    formMessage.classList.remove('text-gray-600', 'text-red-600');
                    formMessage.classList.add('text-green-600');
                    contactForm.reset(); // Clear the form on success
                } else {
                    throw new Error(result.message || "Unknown error occurred.");
                }
            } catch (error) {
                console.error("Error sending contact form:", error);
                formMessage.textContent = `Error: ${error.message || "Could not send message."}`;
                formMessage.classList.remove('text-gray-600', 'text-green-600');
                formMessage.classList.add('text-red-600');
            }

            // Hide the message after a few seconds
            setTimeout(() => {
                formMessage.classList.add('hidden');
            }, 5000);
        });
    }

});
