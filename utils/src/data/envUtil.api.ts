
export const isProductionEnv = (byClientSide: boolean): boolean => {
    if (byClientSide && typeof window === 'object') {
        return !(window.location.host.includes('localhost') || window.location.host.includes('127.0.0'))
    }

    return process.env.NODE_ENV === 'production'
}
