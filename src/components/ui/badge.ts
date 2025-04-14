interface BadgeProps {
    text: string,
    id?: string,
}

const Badge = (props: BadgeProps) => {
    const badge = document.createElement('div');
    badge.className = 'w-fit border p-1 rounded-md';

    /**
     * Define the properties
     */
    badge.innerText = props.text;
    if (props.id) badge.id = props.id;

    return badge;
}

export default Badge;