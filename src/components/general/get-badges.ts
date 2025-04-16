import Badge from "../ui/badge"

const StatusBadge = (text: string = '200') => {
    const statusBadge = Badge({
        text: `Status: ${text}`,
        classes: 'border-gray-500 border-2'
    });
    return statusBadge;
}

const TimeBadge = (text: string = '10ms') => {
    const timeBadge = Badge({
        text: `Time: ${text}`,
        classes: 'border-gray-950 border-2 bg-orange-400 text-sm text-gray-800 font-bold'
    });
    return timeBadge;
}

const ResponseBadges = () => {
    const resBadgeDiv = document.createElement('div');
    resBadgeDiv.className = 'flex gap-2 justify-between';

    /**
     * Create a title to display on the response div
     */
    const responseDivTitle = document.createElement('div');
    responseDivTitle.innerText = 'Response';
    responseDivTitle.className = 'text-2xl font-bold'
    resBadgeDiv.appendChild(responseDivTitle);

    const statusBadge = StatusBadge();
    const timeBadge = TimeBadge();

    /**
     * Create a div to hold all the badges
     */
    const badgeDiv = document.createElement('div');
    badgeDiv.className = 'flex gap-2'
    badgeDiv.appendChild(statusBadge);
    badgeDiv.appendChild(timeBadge);

    /**
     * Append the both Status badge and Time Badge
     */
    resBadgeDiv.appendChild(badgeDiv);

    return { resBadgeDiv, statusBadge, timeBadge };
}

const resBadge = ResponseBadges();

export { resBadge };
