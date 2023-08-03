
export const isProductionEnv = (byUrl: boolean): boolean => {
    if (byUrl) {
        return !(window.location.host.includes('localhost') || window.location.host.includes('127.0.0'))
    }

    return process.env.NODE_ENV === 'production'
}
