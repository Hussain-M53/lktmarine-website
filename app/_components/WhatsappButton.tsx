"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatsappButton = () => {
    const phoneNumber = process.env.WHATSAPP_NUMBER;
    const message = "Hello! I'm interested in your services.";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.div
            className="fixed bottom-10 right-10 z-50"
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
            <motion.a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white p-3 rounded-full shadow-xl flex items-center"
                whileHover={{ scale: 1.2, rotate: 5, boxShadow: "0px 0px 15px rgba(0, 255, 0, 0.7)" }}
                transition={{ type: "spring", stiffness: 200 }}
            >
                <FaWhatsapp className="w-10 h-10" />
            </motion.a>
        </motion.div>
    );
};

export default WhatsappButton;
