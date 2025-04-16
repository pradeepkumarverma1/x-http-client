interface BadgeProps {
    text: string,
    id?: string,
    classes?: string
}

const Badge = (props: BadgeProps) => {
    const badge = document.createElement('div');
    badge.className = `${props.classes} inline-block w-fit px-2 py-1 rounded-md border shadow-md`;

    /**
     * Define the properties
     */
    badge.innerText = props.text;
    if (props.id) badge.id = props.id;

    return badge;
}

export default Badge;