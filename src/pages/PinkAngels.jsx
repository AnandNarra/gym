import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

// Importing images from the root directory
import bannerImg from '../../ff846035-aad8-4ba0-bac9-8d165cc1e016.png';
import profileImg from '../../istockphoto-2149222509-612x612.jpg.jpeg';
import pregnancyImg1 from '../../pregnancy-exercises-for-each-trimester.webp';
import pregnancyImg2 from '../../Exercise_Pregnancy.jpg.jpeg';
import yogaImg from '../../8-exercises-header-lr.jpg.jpeg';
import workoutImg from '../../jkKCKPQqc6sCTO-FyS841DE7wzV3Y6qTCdPaiDMVSwzArtXMGO9y9hIDX4bQsn8nR-lx2oTyzsQ0-b1RuP8RewQyuVbL5VkJ2PKfuwxYdkhSL49AmvGVL799GIN5GjLZUKN50UsSj3VlC9_Mapfmbr8U34eG1vaH7ave9Hsm7d4crWu7eScY2Bmmd6d.jpg.jpeg';
import transformationImg1 from '../../FubKuonT217qpXQGf4aGKaFUGZObYVwuIUSeC_s6xk_MKD8asFocNMazGUCoxHdiEy1omd3VhJMOuQyrKaaYQgX49pHfVx2LRsjCJL1rvCTR7qTXzdf-2H5kxUwEC25rWUktqpvEYpqpbi629PU5D53PM5Guk2Y5oePaHwzh5EnW2UVaAShe630ZB9U.jpg.jpeg';
import transformationImg2 from '../../JtYLKHmOWrs0-GR9cV8DwOXi7Ll4iqBIxC6ZwVP4HGsFb1bKZnnM86kc7j8vTHV0koDCNAeswQRSOLXOb1Rv7yr677lB-5luel1fw_IcEd4FsF1YcEQDeGEcGEe5Q3cy1v329dcRBWZ2rqE8hkReSnFnNq5B0wszNXd29F73CwExyT0HSpyKL27O5xv.jpg.jpeg';
import transformationImg3 from '../../z_8Ym_qBhjnMXU1NHOcpJrj3-wKfY6l958SRx04GoabHwvrYaiIxadR-06Cd17G2jzDajmfMCtRHQsHSb57Fy0R_97MO49PX0gX76yBT2LKIzX_UJMmJf-JwNg41AuLBHQV7cqm2jSvDw3zXmF3udOfMJcxel7KAE1VdpoFy4Vh7Wj24LLSWCmvKOxb.jpg.jpeg';

// Expertise Images (Generated)
import weightImg from '../../weight_mgmt.png';
import strengthImg from '../../strength.png';
import hormonalImg from '../../hormonal.png';
import prenatalImg from '../../prenatal.png';
import mobilityImg from '../../mobility.png';
import lifestyleImg from '../../lifestyle.png';

const PinkAngels = () => {
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
        { title: "Prenatal Fitness", desc: "Safe, effective workout programs for every trimester of pregnancy.", img: prenatalImg },
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
            <section className="relative py-20 md:py-32 bg-gradient-to-br from-pink-50 to-white overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-pink-100/30 rounded-l-[10rem] -z-10 blur-3xl"></div>
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-6 py-2 bg-pink-600/10 text-pink-600 rounded-full text-sm font-bold uppercase tracking-widest mb-8"
                    >
                        Empowering Women
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black text-gray-900 uppercase tracking-tighter italic leading-none"
                    >
                        Pink <span className="text-pink-600">Angels</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 text-xl md:text-2xl text-gray-500 font-light max-w-3xl mx-auto font-serif italic"
                    >
                        "Transforming lives through personalized fitness, nutrition, and expert guidance tailored for the female body."
                    </motion.p>
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
                                className="bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
                            >
                                <div className="h-64 overflow-hidden relative">
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur shadow rounded-full flex items-center justify-center font-black text-pink-600">
                                        {i + 1}
                                    </div>
                                </div>
                                <div className="p-8 flex-grow">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors">{item.title}</h3>
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
                                    Pregnancy <br />
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
                            <a
                                href="/contact"
                                className="inline-block bg-white text-pink-700 px-10 py-4 rounded-full font-black text-xl uppercase tracking-widest hover:scale-105 transition-transform shadow-xl"
                            >
                                Contact Now
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PinkAngels;
