import React from 'react';
import { motion } from 'framer-motion';

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
}

const LineMotion = ({ children, width = "100%" }: Props) => {
    return (
        <div style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div 
                initial="hidden"
                whileHover="visible"
                variants={{
                    hidden: { opacity: 1 },  // Keep the first div visible
                    visible: { opacity: 1 }   // Keep it visible during hover
                }}
            >
                {children}
                <motion.div
                    variants={{
                        hidden: { x: "-100%" },  // Start completely off-screen to the left
                        visible: { x: 0 }        // Move to the original position on hover
                    }}
                    initial="hidden"
                    transition={{ duration: 0.5 }} // Animation duration
                >
                    {/* Content of the second div */}
                    <div style={{
                        position: 'absolute',
                        top: 4,
                        bottom: 4,
                        left: 0,
                        right: 0,
                        background: "#00FF40",
                        zIndex: 20
                    }} />
                </motion.div>
            </motion.div>
        </div>
    );
}

export default LineMotion;
