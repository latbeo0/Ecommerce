export const formatCurrencyVND = (money) => {
    const config = {
        style: 'currency',
        currency: 'VND',
        maximumFractionDigits: 9,
    };
    const formated = new Intl.NumberFormat('it-IT', config).format(money);
    return formated;
};
