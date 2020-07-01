import enquireJs from 'enquire.js'

export const DEVICE_TYPE = {
    large: 'large',
    medium: 'medium',
    small: 'small'
}

export const deviceEnquire = function (callback) {
    const matchLarge = {
        match: () => {
            callback && callback(DEVICE_TYPE.large)
        }
    }

    const matchMedium = {
        match: () => {
            callback && callback(DEVICE_TYPE.medium)
        }
    }

    const matchSmall = {
        match: () => {
            callback && callback(DEVICE_TYPE.small)
        }
    }

    // screen and (max-width: 1087.99px)
    enquireJs
        .register('screen and (max-width: 767px)', matchSmall)
        .register('screen and (min-width: 768px) and (max-width: 991px)', matchMedium)
        .register('screen and (min-width: 1600px)', matchLarge)
}