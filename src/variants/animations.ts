
export const fadeIn = (duration: number) => {
    return {
        hidden: {
          opacity: 0,
        },
        show: {
          opacity: 1,
          transition:{
              ease: "easeOut",
              duration: duration,
            },
        }
    }
}

export const fadeOut = (duration: number) => {
    return {
        hidden: {
          opacity: 1,
        },
        show: {
          opacity: 0,
          transition:{
              ease: "easeOut",
              duration: duration,
            },
        }
    }
}


export const loadingVariant = {
    hidden: {
        scale: 4,
        y: 400,
    },
    show: {
        y: 'calc(56px + 82vh)',
        scale: 1,
        rotate: 360,
        transition: {
            ease: "easeInOut",
            duration: 1.2,
        },
    },
    exit: {
        opacity: 1,
        transition: {
            ease: "easeInOut",
            duration: 0,
        },
    },
    showMobile: {
        y: 'calc(52px + 72vh)',
        scale: 0.8333,
        rotate: 360,
        transition: {
            ease: "easeInOut",
            duration: 1.2,
        },
    },
}
