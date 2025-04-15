interface BadgeProps {
    text: string,
    id?: string,
}

const Badge = (props: BadgeProps) => {
    const badge = document.createElement('div');
    badge.className = 'inline-block w-fit px-2 py-1 rounded-md border border-blue-300 bg-blue-200 text-sm text-blue-800';

    /**
     * Define the properties
     */
    badge.innerText = props.text;
    if (props.id) badge.id = props.id;

    return badge;
}

export default Badge;