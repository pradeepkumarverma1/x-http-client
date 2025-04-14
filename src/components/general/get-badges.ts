import Badge from "../ui/badge"

const StatusBadge = (text: string = '') => {
    const statusBadge = Badge({ text: `Status: ${text}` });
    return statusBadge;
}

const TimeBadge = (text: string = '') => {
    const timeBadge = Badge({ text: `Time: ${text}` });
    return timeBadge;
}

const ResponseBadges = () => {
    const resBadgeDiv = document.createElement('div');
    resBadgeDiv.className = 'flex gap-2 justify-end';

    const statusBadge = StatusBadge();
    const timeBadge = TimeBadge();

    /**
     * Append the both Status badge and Time Badge
     */
    resBadgeDiv.appendChild(statusBadge);
    resBadgeDiv.appendChild(timeBadge);

    return { resBadgeDiv, statusBadge, timeBadge };
}

const resBadge = ResponseBadges();

export { resBadge };
