export const formatCurrency = (value: number): string => {
    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })

    return formatter.format(value)
}