const { v4: uuidv4 } = require('uuid');
let posts = [
    {
        id: uuidv4(),
        img: "https://i.ytimg.com/vi/hZVpIWcVPpA/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD8hlJlXLFg9CY0_rg4x4q2c03cVA",
        heading: "How The Ninja H2R Destroyed All Bikes😳| Explained Ep.23",
        para: `The name Hayabusa is Japanese for "peregrine falcon," a bird that can dive at speeds of 180 to 202 mph (290 to 325 km/h) while hunting. The Hayabusa was designed to be faster than the Honda CBR1100XX Super Blackbird, and eventually surpassed it by 10 mph (16 km/h). The Hayabusa has a 1340 cc air-cooled engine that produces 190 PS at 9700 rpm and has a claimed mileage of 17 kmpl. It can go from 0 to 100 kmph in under 3 seconds, making it one of the fastest hyperbikes in the world.`,
        video: 'https://www.youtube.com/embed/hZVpIWcVPpA?si=pHz9GY3YYp_TeeFz'
    },
    {
        id: uuidv4(),
        img: "https://i.ytimg.com/vi/JhHMJCUmq28/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLAhNtjV54EpQO7yErRFeAGDtr26Pg",
        heading: "Quantum Computers Explained – Limits of Human Technology",
        para: "Quantum computers are a new type of computer that use the principles of quantum mechanics to solve problems that are too complex for classical computers. Quantum mechanics is the study of how matter behaves at the atomic and subatomic level. At this level, matter behaves in ways that are very different from how it behaves at the macroscopic level. One of the key principles of quantum mechanics is superposition. Superposition means that a quantum particle can be in multiple states at the same time. For example, an electron can be in a state where it is both spinning up and spinning down at the same time.",
        video: "https://www.youtube.com/embed/JhHMJCUmq28?si=88eSoFYccVyFVvmm"
    },
    {
        id: uuidv4(),
        img: "https://i.ytimg.com/vi/PntTra6wJPE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAP-xxZozFFglJJE8BB3E6qKe5a3A",
        heading: `How To Drive A Manual Transmission + Rev Match + Heel Toe Downshift (POV Tutorial)`,
        para: `A manual car, also known as a stick shift or standard car, has a manual transmission that requires the driver to shift gears using a stick shift and clutch pedal. The clutch pedal connects and disconnects the engine's power from the transmission, allowing the driver to change gears smoothly.`,
        video: "https://www.youtube.com/embed/PntTra6wJPE?si=SKk752u_vt-3lLED"
    },
    {
        id: uuidv4(),
        img: "https://i.ytimg.com/vi/y2omP4c7WKw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBn-IYXr6Pcnln9k82yIUIhA7WbBA",
        heading: `Learn Web Development and Get Hired in 2023 | Tanay Pratap Hindi`,
        para: `In his latest course, "Learn Web Development and Get Hired in 2023," Tanay Pratap provides a comprehensive guide to mastering web development and landing a job in the field. With a focus on practical skills and real-world projects, this course equips learners with the tools and knowledge needed to succeed in the competitive job market of 2023. Whether you're a beginner or looking to advance your skills, this course offers valuable insights and hands-on experience to help you achieve your career goals. 🚀`,
        video: "https://www.youtube.com/embed/y2omP4c7WKw?si=QtSV5TE4y57Kt8Np"
    },
    {
        id: uuidv4(),
        img: "https://i.ytimg.com/vi/Nvedr1AeQt8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBayOEIH_d6G9e6gJ6CcRkHtzfVTQ",
        heading: `"The Pitch" | 2022 Toyota GR Supra Commercial | Toyota`,
        para: "The Toyota Supra is a sports car that has been around for over 40 years and is known for its sleek design, powerful engine, and exceptional performance. The Supra's design blends motorsport aerodynamics with a contemporary, dynamic look, and its heritage can be traced back to the 1960s and the iconic Toyota 2000GT.",
        video: "https://www.youtube.com/embed/Nvedr1AeQt8?si=6Y_spdWXXPJPrU_S"
    },
    {
        id: uuidv4(),
        img: "https://i.ytimg.com/vi/JhHMJCUmq28/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLAhNtjV54EpQO7yErRFeAGDtr26Pg",
        heading: "Quantum Computers Explained – Limits of Human Technology",
        para: "Quantum computers are a new type of computer that use the principles of quantum mechanics to solve problems that are too complex for classical computers. Quantum mechanics is the study of how matter behaves at the atomic and subatomic level. At this level, matter behaves in ways that are very different from how it behaves at the macroscopic level. One of the key principles of quantum mechanics is superposition. Superposition means that a quantum particle can be in multiple states at the same time. For example, an electron can be in a state where it is both spinning up and spinning down at the same time.",
        video: "https://www.youtube.com/embed/JhHMJCUmq28?si=88eSoFYccVyFVvmm"
    },
    {
        id: uuidv4(),
        img: "https://i.ytimg.com/vi/hZVpIWcVPpA/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD8hlJlXLFg9CY0_rg4x4q2c03cVA",
        heading: "How The Ninja H2R Destroyed All Bikes😳| Explained Ep.23",
        para: `The name Hayabusa is Japanese for "peregrine falcon," a bird that can dive at speeds of 180 to 202 mph (290 to 325 km/h) while hunting. The Hayabusa was designed to be faster than the Honda CBR1100XX Super Blackbird, and eventually surpassed it by 10 mph (16 km/h). The Hayabusa has a 1340 cc air-cooled engine that produces 190 PS at 9700 rpm and has a claimed mileage of 17 kmpl. It can go from 0 to 100 kmph in under 3 seconds, making it one of the fastest hyperbikes in the world.`,
        video: 'https://www.youtube.com/embed/hZVpIWcVPpA?si=pHz9GY3YYp_TeeFz'
    },
    {
        id: uuidv4(),
        img: "https://i.ytimg.com/vi/Nvedr1AeQt8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBayOEIH_d6G9e6gJ6CcRkHtzfVTQ",
        heading: `"The Pitch" | 2022 Toyota GR Supra Commercial | Toyota`,
        para: "The Toyota Supra is a sports car that has been around for over 40 years and is known for its sleek design, powerful engine, and exceptional performance. The Supra's design blends motorsport aerodynamics with a contemporary, dynamic look, and its heritage can be traced back to the 1960s and the iconic Toyota 2000GT.",
        video: "https://www.youtube.com/embed/Nvedr1AeQt8?si=6Y_spdWXXPJPrU_S"
    },
    {
        id: uuidv4(),
        img: "https://i.ytimg.com/vi/PntTra6wJPE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAP-xxZozFFglJJE8BB3E6qKe5a3A",
        heading: `How To Drive A Manual Transmission + Rev Match + Heel Toe Downshift (POV Tutorial)`,
        para: `A manual car, also known as a stick shift or standard car, has a manual transmission that requires the driver to shift gears using a stick shift and clutch pedal. The clutch pedal connects and disconnects the engine's power from the transmission, allowing the driver to change gears smoothly.`,
        video: "https://www.youtube.com/embed/PntTra6wJPE?si=SKk752u_vt-3lLED"
    },
    {
        id: uuidv4(),
        img: "https://i.ytimg.com/vi/y2omP4c7WKw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBn-IYXr6Pcnln9k82yIUIhA7WbBA",
        heading: `Learn Web Development and Get Hired in 2023 | Tanay Pratap Hindi`,
        para: `In his latest course, "Learn Web Development and Get Hired in 2023," Tanay Pratap provides a comprehensive guide to mastering web development and landing a job in the field. With a focus on practical skills and real-world projects, this course equips learners with the tools and knowledge needed to succeed in the competitive job market of 2023. Whether you're a beginner or looking to advance your skills, this course offers valuable insights and hands-on experience to help you achieve your career goals. 🚀`,
        video: "https://www.youtube.com/embed/y2omP4c7WKw?si=QtSV5TE4y57Kt8Np"
    },
    {
        id: uuidv4(),
        img: "https://i.ytimg.com/vi/hZVpIWcVPpA/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD8hlJlXLFg9CY0_rg4x4q2c03cVA",
        heading: "How The Ninja H2R Destroyed All Bikes😳| Explained Ep.23",
        para: `The name Hayabusa is Japanese for "peregrine falcon," a bird that can dive at speeds of 180 to 202 mph (290 to 325 km/h) while hunting. The Hayabusa was designed to be faster than the Honda CBR1100XX Super Blackbird, and eventually surpassed it by 10 mph (16 km/h). The Hayabusa has a 1340 cc air-cooled engine that produces 190 PS at 9700 rpm and has a claimed mileage of 17 kmpl. It can go from 0 to 100 kmph in under 3 seconds, making it one of the fastest hyperbikes in the world.`,
        video: 'https://www.youtube.com/embed/hZVpIWcVPpA?si=pHz9GY3YYp_TeeFz'
    },
    {
        id: uuidv4(),
        img: "https://i.ytimg.com/vi/JhHMJCUmq28/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLAhNtjV54EpQO7yErRFeAGDtr26Pg",
        heading: "Quantum Computers Explained – Limits of Human Technology",
        para: "Quantum computers are a new type of computer that use the principles of quantum mechanics to solve problems that are too complex for classical computers. Quantum mechanics is the study of how matter behaves at the atomic and subatomic level. At this level, matter behaves in ways that are very different from how it behaves at the macroscopic level. One of the key principles of quantum mechanics is superposition. Superposition means that a quantum particle can be in multiple states at the same time. For example, an electron can be in a state where it is both spinning up and spinning down at the same time.",
        video: "https://www.youtube.com/embed/JhHMJCUmq28?si=88eSoFYccVyFVvmm"
    },
    {
        id: uuidv4(),
        img: "https://i.ytimg.com/vi/PntTra6wJPE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAP-xxZozFFglJJE8BB3E6qKe5a3A",
        heading: `How To Drive A Manual Transmission + Rev Match + Heel Toe Downshift (POV Tutorial)`,
        para: `A manual car, also known as a stick shift or standard car, has a manual transmission that requires the driver to shift gears using a stick shift and clutch pedal. The clutch pedal connects and disconnects the engine's power from the transmission, allowing the driver to change gears smoothly.`,
        video: "https://www.youtube.com/embed/PntTra6wJPE?si=SKk752u_vt-3lLED"
    },
    {
        id: uuidv4(),
        img: "https://i.ytimg.com/vi/y2omP4c7WKw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBn-IYXr6Pcnln9k82yIUIhA7WbBA",
        heading: `Learn Web Development and Get Hired in 2023 | Tanay Pratap Hindi`,
        para: `In his latest course, "Learn Web Development and Get Hired in 2023," Tanay Pratap provides a comprehensive guide to mastering web development and landing a job in the field. With a focus on practical skills and real-world projects, this course equips learners with the tools and knowledge needed to succeed in the competitive job market of 2023. Whether you're a beginner or looking to advance your skills, this course offers valuable insights and hands-on experience to help you achieve your career goals. 🚀`,
        video: "https://www.youtube.com/embed/y2omP4c7WKw?si=QtSV5TE4y57Kt8Np"
    },
    {
        id: uuidv4(),
        img: "https://i.ytimg.com/vi/Nvedr1AeQt8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBayOEIH_d6G9e6gJ6CcRkHtzfVTQ",
        heading: `"The Pitch" | 2022 Toyota GR Supra Commercial | Toyota`,
        para: "The Toyota Supra is a sports car that has been around for over 40 years and is known for its sleek design, powerful engine, and exceptional performance. The Supra's design blends motorsport aerodynamics with a contemporary, dynamic look, and its heritage can be traced back to the 1960s and the iconic Toyota 2000GT.",
        video: "https://www.youtube.com/embed/Nvedr1AeQt8?si=6Y_spdWXXPJPrU_S"
    },
]
module.exports = posts;