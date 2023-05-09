import React from 'react';
import { motion } from 'framer-motion';

const FramerMotionAnimation = (
    {
        type = 'div',
        custom = false,
        initial = { opacity: 0, y: 25 },
        whileInView = { opacity: 1, y: 0 },
        exist= { opacity: 0, y: 25 },
        transition = { duration: 0.5, delay: 0 },
        viewport = { once: true },
        className = '',
        children
    }) => {

    switch (type) {
        case 'section':
            return (
                <motion.section
                    initial={initial}
                    whileInView={whileInView}
                    exit={!custom ? exist : ''}
                    transition={transition}
                    viewport={viewport}
                    className={className}
                >
                    { children }
                </motion.section>
            );

        case 'li':
            return (
                <motion.li
                    initial={initial}
                    whileInView={whileInView}
                    exit={!custom ? exist : ''}
                    transition={transition}
                    viewport={viewport}
                    className={className}
                >
                    { children }
                </motion.li>
            );

        case 'h2':
            return (
                <motion.h2
                    initial={initial}
                    whileInView={whileInView}
                    exit={!custom ? exist : ''}
                    transition={transition}
                    viewport={viewport}
                    className={className}
                >
                    { children }
                </motion.h2>
            );

        case 'h3':
            return (
                <motion.h3
                    initial={initial}
                    whileInView={whileInView}
                    exit={!custom ? exist : ''}
                    transition={transition}
                    viewport={viewport}
                    className={className}
                >
                    { children }
                </motion.h3>
            );

        case 'h4':
            return (
                <motion.h4
                    initial={initial}
                    whileInView={whileInView}
                    exit={!custom ? exist : ''}
                    transition={transition}
                    viewport={viewport}
                    className={className}
                >
                    { children }
                </motion.h4>
            );

        case 'h5':
            return (
                <motion.h5
                    initial={initial}
                    whileInView={whileInView}
                    exit={!custom ? exist : ''}
                    transition={transition}
                    viewport={viewport}
                    className={className}
                >
                    { children }
                </motion.h5>
            );

        case 'h6':
            return (
                <motion.h6
                    initial={initial}
                    whileInView={whileInView}
                    exit={!custom ? exist : ''}
                    transition={transition}
                    viewport={viewport}
                    className={className}
                >
                    { children }
                </motion.h6>
            );

        case 'p':
            return (
                <motion.p
                    initial={initial}
                    whileInView={whileInView}
                    exit={!custom ? exist : ''}
                    transition={transition}
                    viewport={viewport}
                    className={className}
                >
                    { children }
                </motion.p>
            );

        case 'button':
            return (
                <motion.button
                    initial={initial}
                    whileInView={whileInView}
                    exit={!custom ? exist : ''}
                    transition={transition}
                    viewport={viewport}
                    className={className}
                >
                    { children }
                </motion.button>
            );

        default:
            return (
                <motion.div
                    initial={initial}
                    whileInView={whileInView}
                    exit={!custom ? exist : {}}
                    transition={transition}
                    viewport={viewport}
                    className={className}
                >
                    { children }
                </motion.div>
            );
    }
};

export default FramerMotionAnimation;
