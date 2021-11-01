function formatDateCampaign(item) {
    let end = new Date(item.ended_at);
    let start = new Date(item.started_at)
    return `${start.toLocaleDateString('ru-RU', {day: 'numeric'})} — ${end.toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })}`
}

function formatDate(raw) {
    let d = new Date(raw);
    return d.toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}

export {formatDateCampaign, formatDate}
