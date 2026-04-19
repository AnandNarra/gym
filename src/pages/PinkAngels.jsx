import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import PlanApplicationForm from '../forms/PlanApplicationForm';

// Image paths from the public/images/ directory
const bannerImg = "/images/ff846035-aad8-4ba0-bac9-8d165cc1e016.png";
const profileImg = "/images/istockphoto-2149222509-612x612.jpg.jpeg";
const pregnancyImg1 = "/images/pregnancy-exercises-for-each-trimester.webp";
const pregnancyImg2 = "/images/Exercise_Pregnancy.jpg.jpeg";
const yogaImg = "/images/8-exercises-header-lr.jpg.jpeg";
const workoutImg = "/images/workout.jpg";
const transformationImg1 = "/images/transformation-1.jpg";
const transformationImg2 = "/images/transformation-2.jpg";
const transformationImg3 = "/images/transformation-3.jpg";

// Expertise Images
const weightImg = "/images/weight_mgmt.png";
const strengthImg = "/images/strength.png";
const hormonalImg = "/images/hormonal.png";
const prenatalImg = "/images/prenatal.png";
const mobilityImg = "/images/mobility.png";
const lifestyleImg = "/images/lifestyle.png";

// Awareness Grid Images (from public/images/pink-angels/)
const pcodImg = "/images/pink-angels/pcod_pcos.png";
const thyroidImg = "/images/pink-angels/thyroid.png";
const scaleImg = "/images/pink-angels/weight_mgmt_2.png";
const pregNutriImg = "/images/pink-angels/pregnancy_nutrition.png";

const conditionData = {
    "PCOD / PCOS": {
        title: "PCOD / PCOS",
        mainReason: "🧬 Main reasons PCOD develops",
        reasons: [
            { id: 1, title: "Hormonal imbalance", desc: "The ovaries start producing excess androgens (male hormones). This prevents proper egg development and release (ovulation). Result: irregular periods and small cysts in ovaries." },
            { id: 2, title: "Insulin resistance", desc: "Very common in PCOD. Body doesn’t use insulin properly → insulin levels increase. High insulin triggers ovaries to produce more male hormones." },
            { id: 3, title: "Genetics", desc: "If your mother or sister has PCOD, your risk is higher. It can run in families." },
            { id: 4, title: "Lifestyle factors", desc: "Lack of physical activity, Unhealthy diet (high sugar, processed food), Stress and poor sleep. These don’t directly “cause” PCOD alone, but they make it worse or trigger it." },
            { id: 5, title: "Low-grade inflammation", desc: "Many women with PCOD have chronic mild inflammation. This also stimulates excess androgen production." }
        ],
        extraInfo: "👉 This is why PCOD is often linked with weight gain and sugar cravings",
        signsTitle: "⚠️ Common signs of PCOD",
        signs: ["Irregular or missed periods", "Weight gain (especially around belly)", "Acne or oily skin", "Excess facial/body hair", "Difficulty getting pregnant"]
    },
    "Thyroid Issues": {
        title: "Thyroid Issues",
        mainReason: "👩 Why thyroid issues are more common in women",
        reasons: [
            { id: 1, title: "Hormonal changes", desc: "Women go through major hormonal shifts: Puberty, Pregnancy, After delivery, Menopause. These changes can affect the thyroid and sometimes trigger problems." },
            { id: 2, title: "Autoimmune diseases (main reason)", desc: "Most thyroid disorders in women are autoimmune, like Hashimoto’s thyroiditis (low thyroid) or Graves’ disease (high thyroid). Women’s immune systems are more prone to mistakenly attacking their own thyroid gland." },
            { id: 3, title: "Genetics (family history)", desc: "If your mother, sister, or relatives have thyroid issues, your chances increase." },
            { id: 4, title: "Stress & lifestyle", desc: "High stress, lack of sleep, and poor diet can disturb hormone balance and worsen thyroid problems." },
            { id: 5, title: "Iodine imbalance", desc: "Thyroid needs iodine to function: Too little iodine → thyroid slows down. Too much iodine → can also cause dysfunction." },
            { id: 6, title: "Pregnancy-related changes", desc: "After pregnancy, some women develop temporary or permanent thyroid issues (called postpartum thyroiditis)." }
        ],
        signsTitle: "⚠️ Common symptoms women notice",
        signs: ["Weight gain or loss", "Hair fall", "Irregular periods", "Tiredness", "Mood swings or anxiety", "Dry skin"],
        footerNote: "IMPORTANT TO KNOW: Thyroid problems are very manageable with proper treatment (medication, diet, monitoring). Many women live completely normal lives once it’s controlled."
    },
    "Weight Management": {
        title: "Weight Management",
        mainReason: "⚖️ Benefits of Weight Management",
        reasons: [
            { id: "🌸", title: "Hormonal Balance & Reproductive Health", desc: "Keeping a healthy weight helps regulate hormones like estrogen and insulin. This can improve menstrual regularity, reduce PCOS symptoms, and support fertility." },
            { id: "❤️", title: "Heart Health", desc: "Women with balanced weight have a lower risk of high blood pressure, high cholesterol, and heart disease." },
            { id: "🧠", title: "Mental Well-being", desc: "Good weight management can improve self-confidence, reduce anxiety and depression, and boost overall mood and energy levels." },
            { id: "💪", title: "Stronger Bones & Muscles", desc: "Healthy weight combined with exercise helps maintain bone density, prevent Osteoporosis, and improve strength." },
            { id: "🩺", title: "Lower Risk of Chronic Diseases", desc: "Managing weight reduces the chances of Type 2 Diabetes, certain cancers (breast/uterine), and metabolic issues." },
            { id: "😴", title: "Better Sleep & Energy", desc: "A healthy weight supports better sleep quality, less fatigue, and improved metabolism." },
            { id: "🌟", title: "Skin, Hair & Overall Appearance", desc: "Balanced nutrition + weight management can improve skin glow, reduce hair fall, and enhance vitality." }
        ],
        footerNote: "BOTTOM LINE: Weight management isn’t about being “thin”—it’s about being healthy, energetic, and balanced. Even small, sustainable changes can make a big difference."
    },
    "Pre & Post Pregnancy Nutrition": {
        title: "Pre & Post Pregnancy Nutrition",
        sections: [
            {
                title: "🌸 Benefits of Pre-Pregnancy Workouts",
                intro: "Getting fit before pregnancy sets a strong foundation.",
                groups: [
                    { name: "💪 Physical benefits", items: ["Improves fertility: Regulates hormones and ovulation", "Builds strength & endurance for pregnancy changes", "Healthy body weight: Reduces risks of gestational diabetes", "Stronger core & pelvic muscles for labor"] },
                    { name: "🧠 Mental benefits", items: ["Reduces stress and anxiety", "Boosts mood and confidence", "Creates a disciplined, healthy lifestyle"] },
                    { name: "🤰 Pregnancy advantage", items: ["Less back pain", "Better posture", "Easier labor and recovery"] }
                ]
            },
            {
                title: "🌼 Benefits of Post-Pregnancy Workouts",
                intro: "After childbirth, workouts focus on recovery and rebuilding.",
                groups: [
                    { name: "🩺 Physical recovery", items: ["Restores muscle strength (core & pelvic floor)", "Heals issues like diastasis recti", "Improves posture and reduces back/neck pain"] },
                    { name: "⚖️ Weight & energy", items: ["Supports gradual, healthy weight loss", "Increases energy levels for new moms"] },
                    { name: "❤️ Mental health", items: ["Reduces risk of postpartum depression", "Improves sleep quality", "Gives “me time,” boosting emotional balance"] },
                    { name: "👶 Functional strength", items: ["Makes daily tasks easier (lifting baby)", "Builds stamina for demanding days"] }
                ]
            }
        ]
    }
};

const PinkAngels = () => {
    const navigate = useNavigate();
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [selectedCondition, setSelectedCondition] = useState(null);

    const openForm = (planTitle) => {
        setSelectedPlan(planTitle);
    };

    const closeForm = () => {
        setSelectedPlan(null);
    };

    const scrollToGrid = () => {
        const gridElement = document.getElementById('clinical-care-grid');
        gridElement?.scrollIntoView({ behavior: 'smooth' });
    };

    const fadeIn = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const expertiseItems = [
        { title: "Weight Management", desc: "Sustainable fat reduction and weight loss strategies tailored for women.", img: weightImg },
        { title: "Strength Training", desc: "Build lean muscle, improve metabolism, and gain functional strength.", img: strengthImg },
        { title: "Hormonal Balance", desc: "Specialized guidance for managing PCOS, PCOD, and Thyroid through fitness.", img: hormonalImg },
        { title: "Prenatal Fitness", desc: "Safe, effective workout programs for every trimester of pregnancy.", img: pregnancyImg1 },
        { title: "Mobility & Posture", desc: "Corrective exercises to improve daily comfort and overall physical wellness.", img: mobilityImg },
        { title: "Long-term Lifestyle", desc: "Building consistent habits that outlast any temporary transformation.", img: lifestyleImg }
    ];

    return (
        <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
            <SEO
                title="Pink Angels - Fitness for Women"
                description="Certified trainer specializing in women's health, pregnancy fitness, and PCOS/PCOD management."
            />

            {/* Hero Section */}
            {/* <section className="relative py-20 md:py-32 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-pink-500 font-black tracking-[0.3em] uppercase text-2xl mb-2"
                    >
                        Women's
                    </motion.h2>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-6xl md:text-8xl font-black text-pink-600 uppercase tracking-tighter italic"
                    >
                        PINK ANGEL
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-xl md:text-2xl text-gray-500 font-light max-w-3xl mx-auto font-serif italic"
                    >
                        "Transforming lives through personalized fitness, nutrition, and expert guidance tailored for the female body."
                    </motion.p>

                </div>
            </section> */}
            <section className="relative h-[40vh] md:h-[90vh] bg-black overflow-hidden group">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-60 z-0 transition-opacity duration-1000 group-hover:opacity-70"
                >
                    <source src="/videos/pink-angels-hero.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10"></div>

                <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-bold tracking-[0.4em] uppercase text-sm md:text-xl mb-4"
                    >
                        <span className="text-white">Women's</span>
                    </motion.h2>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-7xl md:text-9xl font-black text-white uppercase tracking-tighter italic leading-none mb-6"
                    >
                        <span className="text-pink-500"> PINK ANGEL</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-lg sm:text-xl md:text-3xl text-gray-200 font-light max-w-4xl mx-auto font-serif italic"
                    >
                        "Transforming lives through personalized fitness, nutrition, and expert guidance tailored for the female body."
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-12"
                    >
                        <button
                            onClick={scrollToGrid}
                            className="bg-pink-600 text-white px-12 py-4 rounded-full font-black text-xl uppercase tracking-widest hover:bg-pink-700 transition-all shadow-2xl hover:scale-105 active:scale-95"
                        >
                            Explore More
                        </button>
                    </motion.div>
                </div>
            </section>
            {/* Specialized Care Grid Section */}
            <section id="clinical-care-grid" className="pb-20 bg-white mt-10 scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
                    >
                        {[
                            { img: pcodImg, label: "PCOD / PCOS" },
                            { img: thyroidImg, label: "Thyroid Issues" },
                            { img: scaleImg, label: "Weight Management" },
                            { img: pregNutriImg, label: "Pre & Post Pregnancy Nutrition" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeIn}
                                onClick={() => setSelectedCondition(item.label)}
                                className={`relative rounded-3xl overflow-hidden shadow-xl group border-2 flex flex-col h-full bg-white cursor-pointer transition-all duration-300 ${selectedCondition === item.label ? 'border-pink-500 scale-[1.02] ring-4 ring-pink-50' : 'border-gray-100 hover:border-pink-200'}`}
                            >
                                <div className="h-64 w-full flex items-center justify-center overflow-hidden p-2">
                                    <img
                                        src={item.img}
                                        alt={item.label}
                                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className={`${selectedCondition === item.label ? 'bg-pink-600' : 'bg-[#4ca54c]'} py-5 md:py-6 text-center mt-auto transition-colors duration-300`}>
                                    <span className="text-white font-black text-sm md:text-xl uppercase tracking-tighter px-4 block leading-tight">
                                        {item.label}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Condition Details Modal */}
                    <AnimatePresence>
                        {selectedCondition && (
                            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 pointer-events-none">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={() => setSelectedCondition(null)}
                                    className="absolute inset-0 bg-black/80 backdrop-blur-md pointer-events-auto"
                                />
                                <motion.div
                                    key={selectedCondition}
                                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 30 }}
                                    className="bg-white rounded-[2rem] md:rounded-[3rem] w-full max-w-6xl max-h-[90vh] overflow-y-auto relative z-20 shadow-2xl pointer-events-auto custom-scrollbar"
                                >
                                    <button
                                        onClick={() => setSelectedCondition(null)}
                                        className="absolute top-6 right-6 md:top-10 md:right-10 bg-gray-100 p-3 rounded-full hover:bg-pink-100 hover:text-pink-600 transition-all z-30"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>

                                    <div className="p-8 md:p-16 relative">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-100 rounded-full blur-3xl -mr-32 -mt-32 opacity-50"></div>
                                        <div className="relative z-10">
                                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                                                <div>
                                                    <h3 className="text-3xl md:text-6xl font-black text-gray-900 uppercase italic tracking-tighter mb-2">
                                                        {conditionData[selectedCondition].title}
                                                    </h3>
                                                    <div className="h-2 w-24 bg-pink-600 rounded-full"></div>
                                                </div>
                                                <button
                                                    onClick={() => openForm(selectedCondition)}
                                                    className="bg-[#4ca54c] text-white px-8 py-4 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-[#3d8b3d] transition-all shadow-lg hover:scale-105 flex items-center gap-3"
                                                >
                                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                                                    Book Now
                                                </button>
                                            </div>

                                            {conditionData[selectedCondition].sections ? (
                                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                                                    {conditionData[selectedCondition].sections.map((section, idx) => (
                                                        <div key={idx} className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-pink-50">
                                                            <h4 className="text-2xl md:text-3xl font-black text-pink-600 mb-4">{section.title}</h4>
                                                            <p className="text-gray-600 mb-8 italic font-light">{section.intro}</p>
                                                            <div className="space-y-8">
                                                                {section.groups.map((group, gIdx) => (
                                                                    <div key={gIdx}>
                                                                        <h5 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                                                            <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                                                                            {group.name}
                                                                        </h5>
                                                                        <ul className="space-y-3 pl-4">
                                                                            {group.items.map((point, pIdx) => (
                                                                                <li key={pIdx} className="text-gray-500 font-light text-sm md:text-base flex items-start gap-2">
                                                                                    <span className="mt-1.5 w-1 h-1 bg-pink-300 rounded-full flex-shrink-0"></span>
                                                                                    {point}
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="space-y-12">
                                                    <div className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-pink-50">
                                                        <h4 className="text-2xl md:text-3xl font-black text-pink-600 mb-8">{conditionData[selectedCondition].mainReason}</h4>
                                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                                            {conditionData[selectedCondition].reasons.map((reason) => (
                                                                <div key={reason.id} className="group/reason">
                                                                    <div className="flex items-center gap-4 mb-3">
                                                                        <span className="w-8 h-8 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center font-black text-sm group-hover/reason:bg-pink-600 group-hover/reason:text-white transition-colors">{reason.id}</span>
                                                                        <h5 className="font-bold text-gray-900 group-hover/reason:text-pink-600 transition-colors uppercase tracking-tight text-sm md:text-base">{reason.title}</h5>
                                                                    </div>
                                                                    <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed pl-12">{reason.desc}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        {conditionData[selectedCondition].extraInfo && (
                                                            <div className="mt-12 p-6 bg-pink-50 rounded-2xl border border-pink-100 text-pink-700 font-medium italic text-center">
                                                                {conditionData[selectedCondition].extraInfo}
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
                                                        {conditionData[selectedCondition].signs && (
                                                            <div className="bg-pink-600 rounded-[2.5rem] p-8 md:p-12 text-white shadow-xl relative overflow-hidden h-full">
                                                                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                                                                <div className="relative z-10">
                                                                    <h4 className="text-2xl md:text-3xl font-black mb-8 uppercase tracking-tighter italic">{conditionData[selectedCondition].signsTitle}</h4>
                                                                    <ul className="space-y-4">
                                                                        {conditionData[selectedCondition].signs.map((sign, idx) => (
                                                                            <li key={idx} className="flex items-center gap-4 text-lg font-light">
                                                                                <span className="w-2 h-2 bg-white rounded-full"></span>
                                                                                {sign}
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        )}
                                                        {conditionData[selectedCondition].footerNote && (
                                                            <div className={`bg-[#4ca54c] rounded-[2.5rem] p-8 md:p-12 text-white shadow-xl flex items-center h-full ${!conditionData[selectedCondition].signs ? 'lg:col-span-2' : ''}`}>
                                                                <p className="text-xl md:text-2xl font-light italic leading-relaxed">
                                                                    {conditionData[selectedCondition].footerNote}
                                                                </p>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            variants={fadeIn}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="relative order-2 lg:order-1"
                        >
                            <img
                                src={profileImg}
                                alt="Fitness Trainer"
                                className="relative z-10 w-full rounded-3xl shadow-2xl"
                            />
                        </motion.div>

                        <motion.div
                            variants={fadeIn}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="order-1 lg:order-2"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <div className="h-[2px] w-8 bg-pink-600"></div>
                                <span className="text-pink-600 font-bold uppercase tracking-widest text-sm">Professional Introduction</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-8 leading-[1.1]">
                                Science-Based <br />
                                <span className="text-pink-600">Transformation.</span>
                            </h2>
                            <div className="space-y-6 text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                                <p>
                                    I am a certified fitness trainer specializing in women’s health, weight management, and lifestyle transformation. My approach combines science-based training methods with personalized nutrition strategies.
                                </p>
                                <p>
                                    I specialize in hormonal health, working with clients dealing with <span className="text-pink-600 font-semibold">PCOS, PCOD, thyroid imbalances, and obesity</span>. Every body is different, and I design customized plans tailored to your specific metabolic needs.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Expertise Grid */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 uppercase italic tracking-tighter mb-4">Core Expertise</h2>
                        <div className="h-2 w-24 bg-pink-600 mx-auto rounded-full"></div>
                    </div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
                    >
                        {expertiseItems.map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeIn}
                                className="bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 flex flex-col h-full cursor-pointer"
                                onClick={() => openForm(item.title)}
                            >
                                <div className="h-64 overflow-hidden relative">
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur shadow rounded-full flex items-center justify-center font-black text-pink-600">
                                        {i + 1}
                                    </div>
                                    <div className="absolute inset-0 bg-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="bg-white text-pink-600 font-bold px-6 py-2 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">Enroll Now</span>
                                    </div>
                                </div>
                                <div className="p-8 flex-grow">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors uppercase tracking-tight">{item.title}</h3>
                                    <p className="text-gray-500 font-light leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Pregnancy Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="lg:w-1/2">
                            <motion.div
                                variants={fadeIn}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <h2 className="text-pink-600 font-bold uppercase tracking-widest text-sm mb-4">Motherhood & Fitness</h2>
                                <h3 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 uppercase italic leading-none">
                                    Pregnancy Workout  <br />
                                    <span className="text-pink-600">Benefits.</span>
                                </h3>
                                <p className="text-xl text-gray-500 mb-12 font-light leading-relaxed">
                                    Staying active during pregnancy can transform your experience, supporting both your health and your baby's development.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                    {[
                                        { title: "Physical Health", points: ["Weight gain control", "Reduced diabetes risk", "Better circulation"] },
                                        { title: "Mental Wellness", points: ["Stress reduction", "Lower depression risk", "Improved sleep"] },
                                        { title: "For the Baby", points: ["Healthy fetal growth", "Reduced preterm risk", "Stamina for labor"] },
                                        { title: "Recovery", points: ["Less back pain", "Faster postpartum healing", "Better posture"] }
                                    ].map((card, i) => (
                                        <div key={i} className="border-l-4 border-pink-500 pl-6 py-2">
                                            <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-tight">{card.title}</h4>
                                            <ul className="space-y-2">
                                                {card.points.map((p, j) => (
                                                    <li key={j} className="text-gray-500 font-light flex items-center gap-2">
                                                        <span className="w-1 h-1 bg-pink-400 rounded-full"></span>
                                                        {p}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-yellow-50 border border-yellow-200 p-8 rounded-2xl flex gap-4 items-start">
                                    <div className="text-3xl text-yellow-600">⚠️</div>
                                    <div>
                                        <h4 className="text-lg font-bold text-yellow-800 mb-2">Important Safety Note</h4>
                                        <p className="text-yellow-700 text-sm font-light">
                                            Exercise choice must be low-impact (walking, swimming, yoga) and always approved by your doctor before starting any program.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-4 pt-12"
                            >
                                <img src={pregnancyImg1} alt="Yoga" className="rounded-2xl shadow-xl w-full" />
                                <img src={yogaImg} alt="Yoga" className="rounded-2xl shadow-xl w-full" />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="space-y-4"
                            >
                                <img src={pregnancyImg2} alt="Pregnancy exercise" className="rounded-2xl shadow-xl w-full" />
                                <img src={workoutImg} alt="Workout" className="rounded-2xl shadow-xl w-full" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase italic tracking-tighter">Visual Journey</h2>
                        <div className="h-1 w-20 bg-pink-600 mx-auto mt-4"></div>
                    </div>

                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {[transformationImg1, transformationImg2, transformationImg3, workoutImg, yogaImg].map((img, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative group overflow-hidden rounded-2xl border-4 border-white shadow-xl"
                            >
                                <img src={img} alt={`Journey ${i}`} className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA section with Integrated Mini Card */}
            <section className="py-24 bg-white px-4">
                <div className="max-w-5xl mx-auto rounded-[3.5rem] bg-gradient-to-br from-pink-600 to-rose-700 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

                    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 p-10 md:p-16 lg:p-20">
                        {/* Mini Card Image on the Left */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-1/3"
                        >
                            <div className="bg-white/10 backdrop-blur-md p-3 rounded-[2rem] border border-white/20 shadow-xl">
                                <img
                                    src={bannerImg}
                                    alt="Women's Training Banner"
                                    className="w-full h-auto rounded-[1.5rem]"
                                />
                            </div>
                        </motion.div>

                        {/* CTA Text on the Right */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-2/3 text-center lg:text-left text-white"
                        >
                            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase italic leading-none">
                                Ready to <br />
                                <span className="text-pink-100 italic font-black">Join Us?</span>
                            </h2>
                            <p className="text-pink-100 text-xl md:text-2xl font-light mb-10 max-w-xl">
                                Empower your health journey today with Pink Angels. Expert guidance tailored for you.
                            </p>
                            <button
                                onClick={() => openForm("Pink Angel Program")}
                                className="bg-pink-600 text-white px-10 py-4 rounded-full font-black text-xl uppercase tracking-widest hover:bg-pink-700 transition-all shadow-xl hover:scale-105"
                            >
                                Book Your Session
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Modal Form */}
            <AnimatePresence>
                {selectedPlan && (
                    <PlanApplicationForm
                        onClose={closeForm}
                        title={selectedPlan}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default PinkAngels;
